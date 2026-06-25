const mono = { fontFamily: "IBM Plex Mono, monospace" };
const display = { fontFamily: "Space Grotesk, sans-serif" };
const body = { fontFamily: "IBM Plex Sans, sans-serif" };

const Education = () => {
  return (
    <section id="edu" style={{ background: "#fff", paddingTop: 80, paddingBottom: 80 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>

        {/* Section header */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 10 }}>
          04
        </p>
        <h2 style={{ ...display, fontWeight: 600, fontSize: 28, color: "#0f0f10", marginBottom: 40, letterSpacing: "-0.5px" }}>
          Education
        </h2>

        <div
          style={{
            borderTop: "1px solid #ececee",
            padding: "28px 0",
            display: "grid",
            gridTemplateColumns: "170px 1fr",
            gap: 28,
          }}
          className="edu-row"
        >
          {/* Left */}
          <div>
            <p style={{ ...mono, fontSize: 12, color: "#9a9b9f", lineHeight: 1.5 }}>SEP 2018 — JUL 2022</p>
            <p style={{ ...mono, fontSize: 11, color: "#b3b4b8", marginTop: 4 }}>GPA 3.4</p>
          </div>

          {/* Right */}
          <div>
            <p style={{ ...display, fontWeight: 600, fontSize: 19, color: "#0f0f10", marginBottom: 4 }}>
              HCMC University of Technology and Education
            </p>
            <p style={{ ...body, fontSize: 14.5, fontWeight: 500, color: "#2c2d31", marginBottom: 12 }}>
              Software Engineering, Information Technology
            </p>
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {[
                "Academic Excellence Scholarship — 3 consecutive years",
                "Outstanding Student of the Year — Faculty level, 3 consecutive years",
                "Vice President of the Faculty of IT Student Association",
              ].map((item, i) => (
                <li key={i} style={{ ...body, fontSize: 14, color: "#45464a", lineHeight: 1.6, marginBottom: 6, display: "flex", gap: 8 }}>
                  <span style={{ color: "#9a9b9f", flexShrink: 0, marginTop: "3px", fontSize: 10 }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
