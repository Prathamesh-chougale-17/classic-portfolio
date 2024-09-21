"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code,
  Briefcase,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features like real-time inventory management and AI-powered product recommendations.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
    link: "https://example-ecommerce.com",
    icon: Briefcase,
  },
  {
    id: 2,
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
    icon: Code,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "An interactive weather app using React and external APIs for real-time data, featuring location-based forecasts and severe weather alerts.",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Geolocation API"],
    link: "https://example-weatherapp.com",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js and Tailwind CSS, showcasing my projects, skills, and contact information.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://example-portfolio.com",
    icon: Code,
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "A real-time chat app with end-to-end encryption, user authentication, and message history persistence using WebSockets and MongoDB.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "https://example-chatapp.com",
    icon: Briefcase,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    icon: React.ElementType;
  };
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-orange-500 rounded-full -mr-10 -mt-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <Icon className="text-orange-500 mb-2" size={32} />
          <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-100">
            {project.title}
          </h2>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-orange-700 dark:text-orange-200">
            {isExpanded
              ? project.description
              : `${project.description.slice(0, 100)}...`}
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-orange-800 dark:text-orange-100">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-orange-300 text-orange-800 dark:bg-orange-700 dark:text-orange-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Project <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-200 dark:text-orange-300 dark:hover:text-orange-200 dark:hover:bg-orange-700"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2" size={16} />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2" size={16} />
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="h-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 text-orange-800 dark:text-orange-100">
          My Projects
        </h1>
        <p className="text-xl text-orange-600 dark:text-orange-200">
          Showcasing my passion for web development and problem-solving
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
