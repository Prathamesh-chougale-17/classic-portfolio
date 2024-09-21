"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";

import hero from "@/public/hero.jpg";
import {
  education,
  experiences,
  skills,
  socialLinks,
} from "@/components/globalData";
const TimelineItem = ({
  item,
  icon: Icon,
}: {
  item: {
    company?: string;
    role?: string;
    period: string;
    description: string;
    degree?: string;
    school?: string;
  };
  icon: React.ElementType;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8 flex"
  >
    <div className="flex flex-col items-center mr-4">
      <div className="w-px h-full bg-orange-300 dark:bg-orange-700"></div>
      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
        <Icon className="text-white" size={18} />
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex-1">
      <h4 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
        {item.company || item.degree}
      </h4>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {item.role || item.school}
      </p>
      <p className="text-sm text-orange-500 dark:text-orange-300 mb-2">
        {item.period}
      </p>
      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
    </div>
  </motion.div>
);

const AboutPage = () => {
  return (
    <div className="h-full">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
          About Me
        </h1>
        <p className="text-2xl text-orange-700 dark:text-orange-300">
          Passionate Developer | Creative Problem Solver | Tech Enthusiast
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-orange-400"
            >
              <Image
                src={hero}
                alt="Prathamesh Chougale"
                width={192}
                height={192}
                className="object-cover"
              />
            </motion.div>
            <h2 className="text-3xl font-bold text-center mb-2 text-orange-600 dark:text-orange-400">
              Prathamesh Chougale
            </h2>
            <p className="text-xl text-center text-orange-500 dark:text-orange-300 mb-4">
              Full Stack Developer
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I&#39;m Prathamesh Chougale, a passionate full-stack
              developer with over 5 years of experience in crafting elegant
              solutions to complex problems. I thrive on challenges and am
              constantly exploring new technologies to enhance my skill set.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-orange-400">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm py-1 px-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-400">
              Professional Experience
            </h3>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} item={exp} icon={Briefcase} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl mt-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-orange-600 dark:text-orange-400">
              Education
            </h3>
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} icon={GraduationCap} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
