const Hero = () => {
  return (
    <section style={{ paddingTop: 84, paddingBottom: 92 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 640 }}>
          {/* Role label */}
          <p
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "1.6px",
              color: "#8a8b90",
              marginBottom: 20,
            }}
          >
            Senior Fullstack Engineer · AI-Native
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-2px",
              color: "#0f0f10",
              marginBottom: 24,
            }}
          >
            Ho Huy Hoang
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "IBM Plex Sans, sans-serif",
              fontSize: 18,
              lineHeight: 1.62,
              color: "#45464a",
              maxWidth: 500,
              marginBottom: 36,
            }}
          >
            Senior fullstack engineer with 6+ years building production-grade
            distributed systems — designing event-driven architectures,
            optimizing backend performance, and delivering cloud-native
            solutions on AWS at scale.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                background: "#111113",
                color: "#fff",
                borderRadius: 10,
                padding: "13px 22px",
                textDecoration: "none",
                transition: "opacity 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View projects →
            </a>
            <a
              href="https://github.com/hohuyhoangg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "IBM Plex Sans, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                background: "transparent",
                color: "#0f0f10",
                borderRadius: 10,
                padding: "13px 22px",
                textDecoration: "none",
                border: "1px solid #dcdcde",
                transition: "border-color 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#111113")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#dcdcde")}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
