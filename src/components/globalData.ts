import { MobileIcon } from "@radix-ui/react-icons";
import { Briefcase, Code, Github, Home, Linkedin, Package, Twitter, Users } from "lucide-react";

// Sidebar Data
export const routes = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "About",
      href: "/about",
      icon: Users,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: Package,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: MobileIcon,
    },
];

// Home Data
export const achievements = [
  {
    title: "Smart India Hackathon Winner",
    description:
      "Awarded for developing a real-time traffic management system using IoT and machine learning technologies.",
  },
  {
    title: "Google Summer of Code Mentor",
    description:
      "Mentored students from around the world in open-source projects and helped them gain practical experience.",
  },
  {
    title: "Hacktoberfest Contributor",
    description:
      "Contributed to various open-source projects during Hacktoberfest and received a special edition T-shirt.",
  },
];

// Projects Data
export const projects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features like real-time inventory management and AI-powered product recommendations.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
    link: "https://prathameshchougale.me",
    github: "https://github.com/Prathamesh-chougale-17",
    icon: Briefcase,
    categories: ["Web Development", "React"],
  },
  {
    id: "2",
    title: "Task Management App",
    description:
    "A React-based task manager with drag-and-drop functionality, team collaboration features, and integration with popular productivity tools.",
    technologies: [
      "React",
      "Redux",
      "Firebase",
      "Drag-n-Drop API",
      "Slack API",
    ],
    link: "https://prathameshchougale.me",
    github: "https://github.com/Prathamesh-chougale-17",
    icon: Code,
    categories: ["Mobile Development", "Flutter"],
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
    "An interactive weather app using React and external APIs for real-time data, featuring location-based forecasts and severe weather alerts.",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Geolocation API"],
    link: "https://prathameshchougale.me",
    github: "https://github.com/Prathamesh-chougale-17",
    icon: Briefcase,
    categories: ["Artificial Intelligence", "Python"],
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js and Tailwind CSS, showcasing my projects, skills, and contact information.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://prathameshchougale.me",
    github: "https://github.com/Prathamesh-chougale-17",
    icon: Code,
    categories: ["Web Development", "Node.js"],
  },
  {
    id: "5",
    title: "Chat Application",
    description:
      "A real-time chat app with end-to-end encryption, user authentication, and message history persistence using WebSockets and MongoDB.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "https://prathameshchougale.me",
    github: "https://github.com/Prathamesh-chougale-17",
    icon: Briefcase,
    categories: ["Mobile Development", "React Native"],
  },
];

// About Data
export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "AWS",
  "Docker",
  "Python",
  "MongoDB",
];

export const experiences = [
  {
    company: "Tech Innovators",
    role: "Senior Full Stack Developer",
    period: "2020 - Present",
    description:
      "Leading development of scalable web applications using cutting-edge technologies.",
  },
  {
    company: "WebCraft Solutions",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "Developed responsive and interactive user interfaces for various client projects.",
  },
  {
    company: "Digital Dynamics",
    role: "Junior Developer",
    period: "2016 - 2018",
    description:
      "Assisted in the development of web applications and gained expertise in frontend technologies.",
  },
];

export const education = [
  {
    degree: "BSc in Computer Science",
    school: "Tech University",
    period: "2012 - 2016",
    description:
      "Focused on software engineering, algorithms, and data structures.",
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "CodeCamp Academy",
    period: "2016",
    description:
      "Intensive 12-week program covering modern web technologies and best practices.",
  },
];

export const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Prathamesh-chougale-17" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/prathamesh-chougale/" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/Prathamesh_7717" },
];

// Terminal Data
export const terminalSteps = [
  "git init",
  "git branch -M life",
  "git add .",
  "git commit -m 'All the things'",
  "git remote add intern @<company name>",
  "git push -u intern life",
];
