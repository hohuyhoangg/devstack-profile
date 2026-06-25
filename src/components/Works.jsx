import { projects } from "../constants";

const featuredProject = {
  eyebrow: "Multi-Agent AI · 2026",
  title: "Time-Travel Debugger",
  description:
    "An AI-powered debugging platform that records distributed system state across time, enabling engineers to replay any past execution, pinpoint root causes, and generate fix suggestions via multi-agent reasoning.",
  bullets: [
    "Captures distributed traces and state snapshots via an instrumented Spring Boot SDK",
    "LangGraph multi-agent pipeline correlates anomalies, proposes hypotheses, and generates remediation patches",
    "Real-time replay UI built in React 18 with Grafana-embedded dashboards for timeline visualization",
  ],
  chips: ["Spring Boot", "FastAPI", "LangGraph", "Claude", "React 18", "Grafana"],
};

const mono = { fontFamily: "IBM Plex Mono, monospace" };
const display = { fontFamily: "Space Grotesk, sans-serif" };
const body = { fontFamily: "IBM Plex Sans, sans-serif" };

const Works = () => {
  return (
    <section
      id="projects"
      style={{
        background: "#fafafa",
        borderTop: "1px solid #ececee",
        borderBottom: "1px solid #ececee",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>

        {/* Section header */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 10 }}>
          03
        </p>
        <h2 style={{ ...display, fontWeight: 600, fontSize: 28, color: "#0f0f10", marginBottom: 32, letterSpacing: "-0.5px" }}>
          Featured project
        </h2>

        {/* Featured card */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ececee",
            borderRadius: 16,
            padding: "38px 36px",
            marginBottom: 56,
          }}
        >
          <p style={{ ...mono, fontSize: 11, color: "#1f8a5b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>
            {featuredProject.eyebrow}
          </p>
          <h3 style={{ ...display, fontWeight: 700, fontSize: 24, color: "#0f0f10", marginBottom: 12 }}>
            {featuredProject.title}
          </h3>
          <p style={{ ...body, fontSize: 15, color: "#45464a", lineHeight: 1.62, marginBottom: 16 }}>
            {featuredProject.description}
          </p>
          <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: 20 }}>
            {featuredProject.bullets.map((b, i) => (
              <li key={i} style={{ ...body, fontSize: 14, color: "#45464a", lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
                <span style={{ color: "#6a6b70", flexShrink: 0, marginTop: "1px", fontSize: 16, lineHeight: 1 }}>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {featuredProject.chips.map((chip) => (
              <span
                key={chip}
                style={{ ...mono, fontSize: 11, background: "#f4f4f5", borderRadius: 6, padding: "4px 9px", color: "#45464a" }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Products grid label */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 20 }}>
          Products I've worked on
        </p>

        {/* 3-col grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #ececee",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {/* Image */}
              {project.image && (
                <div
                  style={{
                    height: 168,
                    background: i === 0 ? "#f2f2f3" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    width={i === 0 ? 400 : 200}
                    height={168}
                    style={
                      i === 0
                        ? { width: "100%", height: "100%", objectFit: "cover" }
                        : { maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }
                    }
                  />
                </div>
              )}
              {/* Content */}
              <div style={{ padding: "18px 20px 20px" }}>
                <h3 style={{ ...display, fontWeight: 600, fontSize: 17, color: "#0f0f10", marginBottom: 8 }}>
                  {project.name}
                </h3>
                <p style={{ ...body, fontSize: 13.5, color: "#6a6b70", lineHeight: 1.55, marginBottom: 12 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      style={{ ...mono, fontSize: 10, background: "#f4f4f5", borderRadius: 6, padding: "3px 8px", color: "#6a6b70" }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 720px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Works;
