import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  java,
  postgresql,
  terraform,
  aws,
  uc,
  katalon,
  truetest,
  testops,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Distributed Systems",
    icon: backend,
  },
  {
    title: "Cloud-Native AWS",
    icon: creator,
  },
  {
    title: "Full-Stack Products",
    icon: web,
  },
  {
    title: "Technical Leadership",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "terraform",
    icon: terraform,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "True Production Insights - Katalon, Inc.",
    icon: katalon,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Present",
    points: [
      "Reduced P95 latency from 2s to 500ms by co-developing a gRPC-based SDK for permission checks, replacing inefficient legacy API calls.",
      "Re-engineered the streaming architecture to move POC processing from 20 minutes to near real-time and accelerate customer time-to-value.",
      "Led end-to-end development of real-time session replay using rrweb, pako compression, and AWS Kinesis for scalable event ingestion.",
      "Designed a reusable assertion framework and real-time user action tracking agent to feed AI-driven test generation workflows.",
      "Served as Scrum Master, led code reviews, mentored engineers, and diagnosed complex production issues through root cause analysis.",
    ],
  },
  {
    title: "Freelance Team Lead - Software Engineer",
    company_name: "Unified Computing",
    icon: uc,
    iconBg: "#FFFFFF",
    date: "May 2023 - Mar 2025",
    points: [
      "Led a remote team of 5 engineers, owning project lifecycles, effort estimation, and end-to-end delivery of a multi-tenant low-code platform.",
      "Designed and built serverless backends using Node.js, AWS Lambda, DynamoDB, and S3 with a focus on cost efficiency and high availability.",
      "Automated multi-account AWS deployments with Terraform to standardize runtime provisioning across environments.",
      "Owned release management and established engineering standards through code reviews, security practices, and delivery governance.",
    ],
  },
  {
    title: "Freelance Team Lead - Software Engineer",
    company_name: "Z-Company",
    icon: creator,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - May 2023",
    points: [
      "Led a high-seniority team of 6 engineers across international enterprise and startup engagements.",
      "Acted as the primary technical contact for clients, translating business goals into scoped technical solutions.",
      "Managed project delivery from effort estimation and task decomposition through implementation and final handoff.",
      "Provided hands-on code reviews and technical guidance for complex engineering challenges.",
    ],
  },
  {
    title: "Software Engineer I",
    company_name: "TestOps - Katalon, Inc.",
    icon: katalon,
    iconBg: "#FFFFFF",
    date: "May 2021 - Dec 2022",
    points: [
      "Contributed to a cloud-native visual regression engine on AWS Lambda and AWS MSK to process and compare UI screenshots at scale.",
      "Built data processing pipelines to ingest test execution logs and automatically categorize failure results for faster QA debugging.",
      "Improved throughput of test result processing by applying multithreading and concurrency patterns across the core codebase.",
      "Developed and maintained backend services with Java, Spring, PostgreSQL, Kafka, and AWS infrastructure.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "True Production Insights",
    description:
      "AI-powered product analytics and test generation platform that captures real user journeys, streams production behavior, and generates maintainable automated tests. I worked on latency optimization, real-time replay, event ingestion, assertion generation, and AWS EKS infrastructure.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "grpc",
        color: "green-text-gradient",
      },
      {
        name: "kinesis",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: truetest,
    source_code_link: "",
  },
  {
    name: "TestOps",
    description:
      "AI-driven test orchestration platform for large-scale execution analytics, visual testing, and automated root cause analysis. I contributed to visual regression processing on AWS Lambda/MSK and log pipelines that categorized failures to reduce debugging time.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "kafka",
        color: "blue-text-gradient",
      },
    ],
    image: testops,
    source_code_link: "",
  },
  {
    name: "Unified React",
    description:
      "Multi-tenant low-code app builder that lets multiple frontend projects run on a unified serverless runtime. I led a remote engineering team, designed Node.js and AWS Lambda services, automated Terraform deployments, and owned release delivery.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "lambda",
        color: "green-text-gradient",
      },
      {
        name: "dynamodb",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "terraform",
        color: "pink-text-gradient",
      },
    ],
    image: uc,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
