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
  carrent,
  jobit,
  tripguide,
  kms,
  kibo,
  lni,
  java,
  postgresql,
  terraform,
  aws,
  azure,
  ghbass,
  lnirooftop,
  hos,
  uc
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud services",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
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
  {
    name: "azure",
    icon: azure,
  }
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "KMS Technology, Inc.",
    icon: kms,
    iconBg: "#FFFFFF",
    date: "March 2020 - Present",
    points: [
      "Joining outsourcing projects for developing and maintaining web applications using multiple technology Java, JavaScript and other related technologies.",
      "Working with cloud service like AWS, Azure and familar with Docker and HCL.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Kibo Software, Inc.",
    icon: kibo,
    iconBg: "#FFFFFF",
    date: "March 2020 - May 2023",
    points: [
      "Developing and maintaining e-commerce platform using Java, Spring framework, Tiles, JavaScript and other related technologies.",
      "Managing and improve the site performance for sales session and customer service",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backed Developer & Devops",
    company_name: "LexisNexis Risk Solutions",
    icon: lni,
    iconBg: "#FFFFFF",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining data analytics system, platform using Java, Spring framework, Python, and Machine learning to analytics the satellite images, and other related technologies.",
      "Construct the cloud infrastructure with code via HCL, Terraform, and AWS.",
      "Receive the business requirement, and implement the business logic, and provide the data analytics system to the customer.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
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
    name: "KIBO ecommerce",
    description:
      "E-commerce platfrom provide service for selling immediately and optimizing indefinitely. That provide the fast deployment with powerful out-of-the-box functionality; continuously refine your strategy with our expansive network of pre-built order management and ecommerce integrations",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "tiles",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ghbass,
    source_code_link: "#",
  },
  {
    name: "Lexisnexis Insurance",
    description:
      "Solutions enable faster, more accurate quoting, more informed underwriting and friction-free claims resolution to help you elevate the customer experience while boosting profitability and increasing competitiveness.",
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
        name: "K8s",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
      {
        name: "terraform",
        color: "pink-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      }
    ],
    image: lnirooftop,
    source_code_link: "#",
  },
  {
    name: "House of Supplements",
    description:
      "A comprehensive supplements booking platform that allows users to book supplements, and offers curated recommendations for popular supplements.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "css",
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
    image: hos,
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
