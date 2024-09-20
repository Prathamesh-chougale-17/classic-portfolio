"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced features like real-time inventory management and AI-powered product recommendations.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
    link: "https://example-ecommerce.com",
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
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "An interactive weather app using React and external APIs for real-time data, featuring location-based forecasts and severe weather alerts.",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Geolocation API"],
    link: "https://example-weatherapp.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js and Tailwind CSS, showcasing my projects, skills, and contact information.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://example-portfolio.com",
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "A real-time chat app with end-to-end encryption, user authentication, and message history persistence using WebSockets and MongoDB.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "https://example-chatapp.com",
  },
];

const ProjectCard = ({
  project,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
  };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white">
        <CardHeader>
          <h2 className="text-2xl font-semibold">{project.title}</h2>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
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
                  <h3 className="text-lg font-semibold mb-2">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white bg-opacity-30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
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
            className="mt-4"
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
    <div className="h-full p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
