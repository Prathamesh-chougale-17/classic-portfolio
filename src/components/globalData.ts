import { MobileIcon } from "@radix-ui/react-icons";
import { Briefcase, Code, Home, LucideProps, Package, Users } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

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

interface ProjectsProps{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    github: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    categories: string[];
}

export const projects:ProjectsProps[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features like real-time inventory management and AI-powered product recommendations.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
    link: "https://example-ecommerce.com",
    github: "",
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
    link: "https://example-taskmanager.com",
    github: "",
    icon: Code,
    categories: ["Mobile Development", "Flutter"],
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
    "An interactive weather app using React and external APIs for real-time data, featuring location-based forecasts and severe weather alerts.",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Geolocation API"],
    link: "https://example-weatherapp.com",
    github: "",
    icon: Briefcase,
    categories: ["Artificial Intelligence", "Python"],
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js and Tailwind CSS, showcasing my projects, skills, and contact information.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://example-portfolio.com",
    github: "",
    icon: Code,
    categories: ["Web Development", "Node.js"],
  },
  {
    id: "5",
    title: "Chat Application",
    description:
      "A real-time chat app with end-to-end encryption, user authentication, and message history persistence using WebSockets and MongoDB.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "https://example-chatapp.com",
    github: "",
    icon: Briefcase,
    categories: ["Mobile Development", "React Native"],
  },
];