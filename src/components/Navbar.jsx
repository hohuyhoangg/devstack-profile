import { useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 68,
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #ececee",
      }}
      className="w-full flex items-center"
    >
      <div
        style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}
        className="w-full flex items-center justify-between"
      >
        {/* Logo + Name */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 no-underline"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "#111113",
              display: "grid",
              placeItems: "center",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            HH
          </span>
          <span
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: "#0f0f10",
            }}
          >
            Ho Huy Hoang
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="list-none flex items-center gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  style={{
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: 11.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    color: "#6a6b70",
                    textDecoration: "none",
                    transition: "color 150ms",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#0f0f10")}
                  onMouseLeave={(e) => (e.target.style.color = "#6a6b70")}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            style={{
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 11.5,
              textTransform: "uppercase",
              letterSpacing: "0.6px",
              background: "#111113",
              color: "#fff",
              borderRadius: 8,
              padding: "9px 16px",
              textDecoration: "none",
              transition: "opacity 150ms",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "#111113", borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#111113", borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#111113", borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 68,
            left: 0,
            right: 0,
            background: "#fff",
            borderBottom: "1px solid #ececee",
            padding: "16px 28px",
          }}
          className="sm:hidden"
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    color: "#6a6b70",
                    textDecoration: "none",
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "IBM Plex Mono, monospace",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  color: "#6a6b70",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
