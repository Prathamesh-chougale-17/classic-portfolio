"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Briefcase, Mail, LucideProps } from "lucide-react";

const MenuItem = ({
  text,
  href,
  icon: Icon,
}: {
  text: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      asChild
      variant="ghost"
      className="w-full justify-start text-lg mb-2"
    >
      <Link href={href} className="flex items-center">
        <Icon className="mr-2" />
        {text}
        <ArrowRight className="ml-auto" size={18} />
      </Link>
    </Button>
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-12"
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Crafting digital experiences with passion and precision
        </motion.p>
      </motion.div>
      <motion.div
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
      >
        <MenuItem text="About Me" href="/about" icon={Code} />
        <MenuItem text="My Projects" href="/projects" icon={Briefcase} />
        <MenuItem text="Get in Touch" href="/contact" icon={Mail} />
      </motion.div>
    </div>
  );
};

export default HomePage;
