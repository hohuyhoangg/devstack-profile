import {
  java, javascript, typescript, reactjs, nodejs, postgresql, mongodb,
  aws, docker, terraform, git, tailwind,
} from "../assets";

const strengths = [
  {
    num: "/01",
    title: "Distributed Systems",
    desc: "High-throughput, event-driven architectures built for production scale.",
  },
  {
    num: "/02",
    title: "Cloud-Native AWS",
    desc: "EKS, Lambda, Kinesis, SQS — deployed at scale.",
  },
  {
    num: "/03",
    title: "AI-Native SDLC",
    desc: "Claude & ChatGPT across the full development lifecycle.",
  },
  {
    num: "/04",
    title: "Technical Leadership",
    desc: "Driving architecture, mentoring & owning end-to-end delivery.",
  },
];

const techStack = [
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Terraform", icon: terraform },
  { name: "Git", icon: git },
  { name: "Tailwind", icon: tailwind },
];

const skillRows = [
  { label: "LANGUAGES", value: "Java · Python · JavaScript / TypeScript" },
  { label: "AI / LLM", value: "Anthropic Claude · OpenAI · Agentic Workflows · AI-assisted SDLC" },
  { label: "FRAMEWORKS", value: "Quarkus · Spring · Node.js (NestJS, Express) · ReactJS · Next.js" },
  { label: "DATA", value: "PostgreSQL · MySQL · MongoDB · Redis · Elasticsearch" },
  { label: "CLOUD", value: "AWS (EKS, Lambda, Kinesis, SQS, CloudFront) · Docker · Kubernetes · Terraform · Jenkins" },
  { label: "MESSAGING", value: "Apache Kafka · Amazon SQS · AWS Kinesis" },
  { label: "SECURITY", value: "OAuth2 · SSO · Keycloak · JWT" },
  { label: "OBSERV.", value: "Datadog · Coralogix · Grafana · JUnit 5 · Mockito" },
];

const mono = { fontFamily: "IBM Plex Mono, monospace" };
const display = { fontFamily: "Space Grotesk, sans-serif" };
const body = { fontFamily: "IBM Plex Sans, sans-serif" };

const About = () => {
  return (
    <section id="about" style={{ background: "#111113", paddingTop: 78, paddingBottom: 78 }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>

        {/* Section header */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 10 }}>
          01
        </p>
        <h2 style={{ ...display, fontWeight: 600, fontSize: 28, color: "#fff", marginBottom: 32, letterSpacing: "-0.5px" }}>
          Strengths
        </h2>

        {/* 4 cards */}
        <div
          style={{
            display: "grid",
            gap: 1,
            background: "#2a2b2e",
            borderRadius: 14,
            overflow: "hidden",
            marginBottom: 56,
          }}
          className="strengths-grid"
        >
          {strengths.map((s) => (
            <div
              key={s.num}
              style={{ background: "#111113", padding: "26px 22px" }}
            >
              <p style={{ ...mono, fontSize: 11, color: "#6a6b70", marginBottom: 12 }}>{s.num}</p>
              <h3 style={{ ...display, fontWeight: 600, fontSize: 16, color: "#fff", marginBottom: 8 }}>{s.title}</h3>
              <p style={{ ...body, fontSize: 13, color: "#9a9b9f", lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <p style={{ ...mono, fontSize: 11, textTransform: "uppercase", letterSpacing: "1.2px", color: "#6a6b70", marginBottom: 16 }}>
          Tech stacks
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
          {techStack.map((tech) => (
            <div
              key={tech.name}
              style={{
                width: 80,
                padding: "14px 8px",
                border: "1px solid #2a2b2e",
                borderRadius: 12,
                background: "#16161a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <img src={tech.icon} alt={tech.name} width={36} height={36} loading="lazy" style={{ width: 36, height: 36, objectFit: "contain" }} />
              <span style={{ ...mono, fontSize: 10, color: "#6a6b70", textAlign: "center" }}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div style={{ display: "grid", gap: "0 32px" }} className="skills-grid">
          {skillRows.map((row) => (
            <div key={row.label} style={{ display: "flex", gap: 12, paddingTop: 10, paddingBottom: 10, borderTop: "1px solid #1e1f22" }}>
              <span style={{ ...mono, fontSize: 11, color: "#6a6b70", width: 96, flexShrink: 0 }}>{row.label}</span>
              <span style={{ ...body, fontSize: 14, color: "#d6d7da" }}>{row.value}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .strengths-grid { grid-template-columns: repeat(4, 1fr); }
        .skills-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 720px) {
          .strengths-grid { grid-template-columns: repeat(2, 1fr); }
          .skills-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 400px) {
          .strengths-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default About;
