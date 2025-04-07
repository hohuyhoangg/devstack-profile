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
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud services",
    icon: creator,
  },
  {
    title: "React Native Developer",
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
    title: "Full-Stack Software Engineer",
    company_name: "TrueTest - Katalon, Inc.",
    icon: katalon,
    iconBg: "#FFFFFF",
    date: "December 2022 - Present",
    points: [
      "Joining team for developing and maintaining web applications using multiple technology Java, JavaScript and other related technologies.",
      "Working with cloud service like AWS and familar with Docker and K8S.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "TestOps - Katalon, Inc.",
    icon: katalon,
    iconBg: "#FFFFFF",
    date: "May 2021 - December 2022",
    points: [
      "Developing and maintaining e-commerce platform using Java, Spring framework, Tiles, JavaScript and other related technologies.",
      "Managing and improve the site performance for sales session and customer service",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "TrueTest",
    description:
      "TrueTest is a groundbreaking approach to automated regression testing, driven by real user behavior rather than rigidly defined requirements. Integrated into the Katalon Platform, TrueTest harnesses the power of AI and application monitoring to map user journeys and generate automated tests to cover those journeys in your test environment before you release.",
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
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: truetest,
    source_code_link: "#",
  },
  {
    name: "TestOps",
    description:
      "TestOps takes care of all your execution infrastructure and scalability. Skip the deployment and maintenance steps to make more room for innovation.",
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
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "kafka",
        color: "blue-text-gradient",
      }
    ],
    image: testops,
    source_code_link: "#",
  },
  {
    name: "Unified React",
    description:
      "A platform to build and deploy React application with no code. It provides a simple and intuitive interface for developers to create and manage React applications.",
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
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "scss",
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
    source_code_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
