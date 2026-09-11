import {
  FaServer,
  FaCode,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNestjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiPrisma,
  SiMongoose,
  SiTailwindcss,
  SiSwagger,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { starbucks, tesla, shopify, sipalaya, demouse, nepova, yoddha } from "../assets/images";

import {
  car,
  contact,
  estate,
  github,
  linkedin,
  pricewise,
  snapgram,
  summiz,
  threads,
} from "../assets/icons";

// =========================
// SKILLS
// =========================

export const skills = [
  {
    icon: FaHtml5,
    name: "HTML",
    type: "Frontend",
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
    type: "Frontend",
  },
  {
    icon: FaJs,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    icon: FaReact,
    name: "React",
    type: "Frontend",
  },
  {
    icon: FaBootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    type: "Backend",
  },
  {
    icon: SiNestjs,
    name: "NestJS",
    type: "Backend",
  },
  {
    icon: SiExpress,
    name: "Express.js",
    type: "Backend",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    type: "Frontend / Backend",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    icon: SiMongoose,
    name: "Mongoose",
    type: "ODM",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
    type: "ORM",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    type: "Database",
  },
  {
    icon: SiSqlite,
    name: "SQLite",
    type: "Database",
  },
  {
    icon: FaGitAlt,
    name: "Git",
    type: "Version Control",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    type: "Version Control",
  },
  {
    icon: SiPostman,
    name: "Postman",
    type: "API Testing",
  },
  {
    icon: SiSwagger,
    name: "Swagger",
    type: "API Documentation",
  },
  {
    icon: FaDocker,
    name: "Docker",
    type: "DevOps",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    type: "Deployment",
  },
  {
    icon: SiRender,
    name: "Render",
    type: "Deployment",
  },
  {
    icon: FaFigma,
    name: "Figma",
    type: "Design",
  },
];

// =========================
// WORK EXPERIENCE
// =========================

export const experiences = [
  {
    title: "Full Stack Developer Instructor",
    company_name: "Demouse",
    icon: demouse,
    iconBg: "#accbe1",
    date: "August 2026 - Present",
    points: [
      "Train students in frontend, backend, databases, and full-stack web development.",
      "Guide students in building real-world web projects using modern development tools.",
      "Mentor students in coding, debugging, Git, and software development best practices.",
      "Collaborate on practical development tasks and real-world project workflows.",
    ],
  },
  {
    title: "Full Stack Developer Intern & Instructor",
    company_name: "Sipalaya Info Tech",
    icon: sipalaya,
    iconBg: "#accbe1",
    date: "May 2026 - August 2026",
    points: [
      "Assisted students in learning MERN Stack development concepts and practical implementation.",
      "Developed full-stack web applications and integrated REST APIs.",
      "Supported debugging, frontend-backend integration, and database operations.",
      "Collaborated on practical development tasks and real-world project workflows.",
    ],
  },
  {
    title: "Backend Developer Trainee",
    company_name: "Nepova Technologies Pvt. Ltd.",
    icon: nepova,
    iconBg: "#fbc3bc",
    date: "December 2025 - April 2026",
    points: [
      "Assisted in developing REST APIs using Node.js and NestJS.",
      "Implemented CMS features and Role-Based Access Control (RBAC).",
      "Designed MongoDB and PostgreSQL schemas.",
      "Worked with JWT authentication for secure API endpoints.",
      "Created APIs for LMS modules and dynamic website content.",
      "Tested and debugged APIs using Postman.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Yoddha Lab Pvt. Ltd.",
    icon: yoddha,
    iconBg: "#b7e4c7",
    date: "January 2025 - April 2025",
    points: [
      "Built and maintained RESTful APIs using Node.js and Express.js.",
      "Designed database schemas using MongoDB and PostgreSQL.",
      "Debugged middleware and optimized API queries.",
      "Participated in Agile development and code reviews.",
      "Worked with frontend developers to integrate backend services.",
    ],
  },
];

// =========================
// SOCIAL LINKS
// =========================

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Durga-Thapa",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/",
  },
];

// =========================
// PROJECTS
// =========================

export const projects = [
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "DocApp - Full Stack",
    description:
      "A full-stack doctor appointment platform with authentication, RBAC, REST APIs, and responsive frontend features.",
technologies: "React, Node.js, Express.js, MongoDB, JWT",
    link: "https://github.com/Durga-Thapa/DocApp",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "TaskAssignment",
    description:
      "A role-based academic task management system supporting Admin, Teacher, and Student roles with JWT authentication, RBAC, assignments, submissions, grading, and feedback.",
    technologies: "NestJS, TypeScript, MongoDB, Mongoose, JWT, RBAC",
    link: "https://github.com/Durga-Thapa/TaskAssignment",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "CMS - Content Management System",
    description:
      "A scalable CMS API for managing dynamic website content with modular architecture, validation, slug management, REST APIs, and image uploads.",
    technologies: "NestJS, TypeScript, MongoDB, REST API, Multer",
    link: "https://github.com/Durga-Thapa/CMS-Project",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Learning Management System",
    description:
      "A full-scale LMS backend with course management, lessons, enrollment, progress tracking, authentication, and role-based access control.",
    technologies: "NestJS, TypeScript, PostgreSQL, Prisma, JWT, RBAC",
    link: "https://github.com/Durga-Thapa",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Chat API",
    description:
      "A scalable chat backend with secure authentication, role-based access control, message handling, pagination, filtering, and search.",
    technologies: "NestJS, Node.js, TypeScript, JWT, REST API",
    link: "https://github.com/Durga-Thapa",
  },
];
