import {
  backend,
  web,
  javascript,
  typescript,
  nodejs,
  mongodb,
  git,
  docker,
  moonsat,
  darey,
  virtoffix,
  zuri,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Aspiring DevOps Engineer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Engineer",
    company_name: "Moonsat Technology",
    icon: moonsat,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Built APIs using ExpressJS and NestJS (Typescript)",
      "Implemented error logging using sentry",
      "Integrated Amazon SDK into NestJS",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "Virtoffix",
    icon: virtoffix,
    iconBg: "#383E56",
    date: "January 2022 - December 2022",
    points: [
      "Built APIs for products",
      "Maintenance of existing products",
      "Developed APIs for new products",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Virtoffix",
    icon: virtoffix,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Provisioned and managed EC2 instances",
      "Provisioned and managed Amazon S3 buckets",
      "Deployed Containerised Applications to AWS cloud",
      "Maintained and troubleshooted Applications downtime",
      "Implemented CI/CD using Github actions, AWS CodePipeline",
    ],
  },
  {
    title: "DevOps Engineer Apprenticeship",
    company_name: "Darey.io",
    icon: darey,
    iconBg: "#383E56",
    date: "April 2022 - August 2022",
    points: [
      "Deployed of LAMP, LEMP, MEAN and MERN stack applications to servers in the cloud",
      "Deployed of a wordpress website to a cloud server",
      "Deployed of a Load Balancer with Apache and Nginx",
      "Automated deployment with Ansible",
      "Implementing a CI pipeline with Jenkins, Ansible, Artifactory, Sonarqube and PHP",
      "Automated infrastructure with IaC using Terraform",
      "Containerization with Docker and Docker-compose",
      "Container orchestration with Kubernetes",
      "Deploying Applications into Kubernetes cluster",
      "Building AWS EKS cluster with Terraform",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "Zuri Team",
    icon: zuri,
    iconBg: "#383E56",
    date: "March 2021 - July 2021",
    points: [
      "Built an API with Nodejs",
      "Deployed API to Heroku and Railway",
      "Implemented a CI/CD using Github actions and AWS EC2",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
