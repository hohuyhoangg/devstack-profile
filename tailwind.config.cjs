/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        ink: "#0f0f10",
        "ink-soft": "#2c2d31",
        muted: "#6a6b70",
        faint: "#9a9b9f",
        hairline: "#ececee",
        "chip-fill": "#f4f4f5",
        wash: "#fafafa",
        dark: "#111113",
        "dark-tile": "#16161a",
        "dark-sep": "#2a2b2e",
        "dark-btn": "#2f3033",
        accent: "#1f8a5b",
        "dark-text": "#d6d7da",
        "dark-muted": "#9a9b9f",
        "dark-dim": "#6a6b70",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
