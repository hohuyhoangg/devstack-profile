import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distDir = path.resolve("dist");
const serverDir = path.join(distDir, "server");
const templatePath = path.join(distDir, "index.html");

const serverFiles = await readdir(serverDir);
const entryFile = serverFiles.find((file) => /^entry-server\.(mjs|js)$/.test(file));

if (!entryFile) {
  throw new Error("Could not find the SSR entry output in dist/server.");
}

const { render } = await import(pathToFileURL(path.join(serverDir, entryFile)).href);
let template = await readFile(templatePath, "utf8");
const appHtml = render();

const entryScriptPattern =
  /<script type="module" crossorigin src="(?<src>\/assets\/index-[^"]+\.js)"><\/script>\s*/;
const entryScriptMatch = template.match(entryScriptPattern);

if (!entryScriptMatch?.groups?.src) {
  throw new Error("Could not find the client entry script in dist/index.html.");
}

const hydrationScript = `<script type="module">
const hydrate = (() => {
  let started = false;
  return () => {
    if (started) return;
    started = true;
    import("${entryScriptMatch.groups.src}");
  };
})();
const scheduleHydration = () => {
  window.setTimeout(hydrate, 2400);
  ["pointerdown", "keydown", "touchstart", "scroll"].forEach((eventName) => {
    window.addEventListener(eventName, hydrate, { once: true, passive: true });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scheduleHydration, { once: true });
} else {
  scheduleHydration();
}
</script>`;

template = template
  .replace(entryScriptPattern, "")
  .replace(/\s*<link rel="modulepreload" crossorigin href="\/assets\/[^"]+">\n/g, "\n");

const stylesheetPattern =
  /<link rel="stylesheet" crossorigin href="(?<href>\/assets\/index-[^"]+\.css)">/;
const stylesheetMatch = template.match(stylesheetPattern);

if (stylesheetMatch?.groups?.href) {
  const cssPath = path.join(distDir, stylesheetMatch.groups.href.replace(/^\//, ""));
  const css = await readFile(cssPath, "utf8");
  template = template.replace(stylesheetPattern, `<style>${css}</style>`);
}

await writeFile(
  templatePath,
  template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace("</body>", `    ${hydrationScript}\n  </body>`)
);
await rm(serverDir, { recursive: true, force: true });
