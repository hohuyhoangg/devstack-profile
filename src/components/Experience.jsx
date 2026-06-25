import { experiences } from "../constants";
import { katalon } from "../assets";

const expMeta = [
  {
    displayName: "Katalon",
    date: "DEC 2022 — PRESENT",
    location: "Ho Chi Minh",
    teamSize: 15,
    description: "An AI-powered solution that automatically generates and maintains test cases by capturing real user journeys, significantly reducing manual testing effort.",
    chips: ["Quarkus", "AWS EKS", "Kinesis", "ReactJS", "D3.js"],
    logo: katalon,
  },
  {
    displayName: "Unified Computing",
    date: "MAY 2023 — MAR 2025",
    location: "Remote",
    teamSize: 5,
    description: "A multi-tenant low-code platform enabling enterprise teams to build and deploy frontend applications on a shared serverless runtime without managing infrastructure.",
    chips: ["Node.js", "AWS Lambda", "DynamoDB", "Terraform"],
    logo: null,
  },
  {
    displayName: "Z-Company",
    date: "DEC 2022 — MAY 2023",
    location: "Remote",
    teamSize: null,
    description: "A freelance consulting practice serving international enterprise and startup clients, delivering technical leadership and end-to-end software solutions.",
    chips: ["Node.js", "AWS", "PostgreSQL"],
    logo: null,
  },
  {
    displayName: "Katalon",
    date: "MAY 2021 — DEC 2022",
    location: "Ho Chi Minh",
    teamSize: 6,
    description: "A cloud-native test orchestration platform for large-scale execution analytics, visual regression testing, and automated failure categorization.",
    chips: ["Java", "Spring", "PostgreSQL", "Kafka", "AWS"],
    logo: katalon,
  },
];

const mono = { fontFamily: "IBM Plex Mono, monospace" };
const display = { fontFamily: "Space Grotesk, sans-serif" };
const body = { fontFamily: "IBM Plex Sans, sans-serif" };

const Experience = () => {
  return (
    <section id="work" style={{ background: "#fff", paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>

        {/* Section header */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 10 }}>
          02
        </p>
        <h2 style={{ ...display, fontWeight: 600, fontSize: 28, color: "#0f0f10", marginBottom: 40, letterSpacing: "-0.5px" }}>
          Experience
        </h2>

        {/* Entries */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp, i) => {
            const meta = expMeta[i] || {};
            return (
              <div
                key={i}
                style={{
                  borderTop: "1px solid #ececee",
                  padding: "28px 0",
                  display: "grid",
                  gridTemplateColumns: "170px 1fr",
                  gap: 28,
                }}
                className="exp-row"
              >
                {/* Left: date + location */}
                <div>
                  <p style={{ ...mono, fontSize: 12, color: "#9a9b9f", lineHeight: 1.5 }}>{meta.date}</p>
                  <p style={{ ...mono, fontSize: 11, color: "#b3b4b8", marginTop: 4 }}>{meta.location}</p>
                </div>

                {/* Right: company + role + bullets + chips */}
                <div>
                  {/* Company row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    {meta.logo && (
                      <img
                        src={meta.logo}
                        alt={meta.displayName}
                        width={24}
                        height={24}
                        loading="lazy"
                        style={{ width: 24, height: 24, objectFit: "contain", borderRadius: 4 }}
                      />
                    )}
                    <span style={{ ...display, fontWeight: 600, fontSize: 19, color: "#0f0f10" }}>
                      {meta.displayName}
                    </span>
                    {meta.teamSize && (
                      <span style={{ ...mono, fontSize: 11, color: "#9a9b9f" }}>· Team size {meta.teamSize}</span>
                    )}
                  </div>

                  {/* Role */}
                  <p style={{ ...body, fontSize: 14.5, fontWeight: 500, color: "#2c2d31", marginBottom: 10 }}>
                    {exp.title}
                  </p>

                  {/* Description */}
                  {meta.description && (
                    <p style={{ ...body, fontSize: 14, color: "#6a6b70", lineHeight: 1.6, marginBottom: 14 }}>
                      {meta.description}
                    </p>
                  )}

                  {/* Bullets */}
                  <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: 14 }}>
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        style={{ ...body, fontSize: 14, color: "#45464a", lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}
                      >
                        <span style={{ color: "#6a6b70", flexShrink: 0, marginTop: "1px", fontSize: 16, lineHeight: 1 }}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {meta.chips && meta.chips.map((chip) => (
                      <span
                        key={chip}
                        style={{
                          ...mono,
                          fontSize: 11,
                          background: "#f4f4f5",
                          borderRadius: 6,
                          padding: "4px 9px",
                          color: "#45464a",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
