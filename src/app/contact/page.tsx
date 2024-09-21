"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Send, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimatedContactIcon from "./ContactAnimation";
import { socialLinks } from "@/components/globalData";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  subject: z.string().min(2, "Subject must be at least 2 characters").max(50),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });
  const [isSubmitted, setIsSubmitted] = React.useState<
    "success" | "error" | null
  >(null);

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSubmitted("success");

      reset();
    } catch (error) {
      console.error(error);
      setIsSubmitted("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
          Let&#39;s Connect!
        </h2>
        <p className="text-center text-lg mb-6 opacity-40">
          I&#39;m always excited to discuss new projects, ideas, or
          opportunities. Drop me a message or connect through social media!
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((link, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-purple-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-b-lg shadow-lg">
        <div className="h-full w-full flex justify-center items-center">
          <AnimatedContactIcon />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Your Name"
                    className="w-full p-2 border rounded-md"
                  />
                )}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="subject"
                    placeholder="Your Subject"
                    className="w-full p-2 border rounded-md"
                  />
                )}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Your message here..."
                    className="w-full p-2 border rounded-md h-32"
                  />
                )}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <AnimatePresence>
            {isSubmitted === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Alert
                  variant="default"
                  className="bg-green-100 border-green-500 text-green-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <AlertTitle className="font-semibold">Success!</AlertTitle>
                  <AlertDescription>
                    Your message has been sent successfully. I&#39;ll get back
                    to you soon!
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
            {isSubmitted === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    There was a problem sending your message. Please try again
                    later.
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
