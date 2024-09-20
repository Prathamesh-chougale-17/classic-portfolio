"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const skills = [
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
];

const experiences = [
  {
    company: "Tech Innovators",
    role: "Senior Full Stack Developer",
    period: "2020 - Present",
  },
  {
    company: "WebCraft Solutions",
    role: "Frontend Developer",
    period: "2018 - 2020",
  },
  {
    company: "Digital Dynamics",
    role: "Junior Developer",
    period: "2016 - 2018",
  },
];

const AboutPage = () => {
  return (
    <div className="h-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl">
          Passionate Developer | Creative Problem Solver | Tech Enthusiast
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
        >
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
              <Image
                src="/api/placeholder/400/320"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">John Doe</h2>
              <p className="text-xl">Full Stack Developer</p>
            </div>
          </div>
          <p className="mb-6 text-lg">
            Hello! I&apos;m a passionate full-stack developer with over 5 years
            of experience in crafting elegant solutions to complex problems. I
            thrive on challenges and am constantly exploring new technologies to
            enhance my skill set.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm py-1 px-2 bg-white bg-opacity-20"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Professional Experience
          </h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="mb-6 last:mb-0"
            >
              <h4 className="text-xl font-semibold">{exp.company}</h4>
              <p className="text-lg">{exp.role}</p>
              <p className="text-sm text-gray-300">{exp.period}</p>
            </motion.div>
          ))}
          <h3 className="text-2xl font-semibold mt-8 mb-4">Education</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <h4 className="text-xl font-semibold">BSc in Computer Science</h4>
            <p className="text-lg">Tech University</p>
            <p className="text-sm text-gray-300">2012 - 2016</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
