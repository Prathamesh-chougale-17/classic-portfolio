"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle2,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AnimatedContactIcon from "./ContactAnimation";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/johndoe" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/johndoe" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/johndoe" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/johndoe" },
];

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  type SubmitStatus = "loading" | "success" | "error" | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus(Math.random() > 0.5 ? "success" : "error");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Connect With Me
        </h2>
        <p className="mb-6">
          Feel free to reach out through the form or connect with me on social
          media. I&#39;m always excited to discuss new projects, ideas, or
          opportunities!
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black dark:bg-white p-3 bg-opacity-20 dark:bg-opacity-20 rounded-lg hover:transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <link.icon className="mr-2 h-5 w-5" />
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-full w-full flex justify-center items-center">
          <AnimatedContactIcon />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={handleChange}
                className="placeholder-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={formState.email}
                onChange={handleChange}
                className="placeholder-gray-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                required
                value={formState.message}
                onChange={handleChange}
                className="placeholder-gray-300 h-8"
              />
            </div>
            <Button
              type="submit"
              className="w-full text-blue-600 hover:bg-opacity-90 transition-colors"
              disabled={submitStatus === "loading"}
            >
              {submitStatus === "loading" ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Send className="mr-2 h-4 w-4" />
                </motion.div>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <Alert variant="default" className="bg-green-500">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your message has been sent successfully.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
              >
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    There was a problem sending your message. Please try again.
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
