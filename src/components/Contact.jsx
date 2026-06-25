const mono = { fontFamily: "IBM Plex Mono, monospace" };
const display = { fontFamily: "Space Grotesk, sans-serif" };

const links = [
  { label: "hoangho1147@gmail.com", href: "mailto:hoangho1147@gmail.com" },
  { label: "github.com/hohuyhoangg", href: "https://github.com/hohuyhoangg" },
  { label: "LinkedIn — Hoang Ho", href: "https://www.linkedin.com/in/hohuyhoangg" },
  { label: "+84 342 229 515", href: "tel:+84342229515" },
  { label: "hohuyhoangg.com", href: "https://hohuyhoangg.com/" },
];

const Contact = () => {
  return (
    <section id="contact" style={{ background: "#111113", paddingTop: 72, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>

        {/* Label */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 20 }}>
          05 — Contact
        </p>

        {/* Headline */}
        <p
          role="heading"
          aria-level="2"
          style={{
            ...display,
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#fff",
            letterSpacing: "-1.2px",
            lineHeight: 1.1,
            marginBottom: 36,
          }}
        >
          Let's build something great.
        </p>

        {/* Link buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 56 }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                ...mono,
                fontSize: 12.5,
                color: "#d6d7da",
                border: "1px solid #2f3033",
                borderRadius: 9,
                padding: "11px 17px",
                textDecoration: "none",
                transition: "border-color 150ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2f3033")}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom row */}
      <div style={{ borderTop: "1px solid #2a2b2e" }}>
        <div
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "20px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{ ...mono, fontSize: 11, color: "#6a6b70" }}>© 2026 Ho Huy Hoang</span>
          <span style={{ ...mono, fontSize: 11, color: "#6a6b70" }}>Senior Fullstack Engineer · AI-Native</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
