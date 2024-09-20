"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedContactIcon = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, fill: "rgba(46, 54, 210, 0)" },
    visible: {
      pathLength: 1,
      fill: "rgba(46, 54, 210, 1)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 0.5,
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, fill: "rgba(201, 221, 244, 0)" },
    visible: {
      scale: 1,
      fill: "rgba(201, 221, 244, 1)",
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      height="200px"
      width="200px"
      viewBox="0 0 512 512"
      variants={iconVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.g variants={waveVariants}>
        <motion.path
          variants={pathVariants}
          d="M38.788,170.667h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273 c0-12.853-10.42-23.273-23.273-23.273H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273 C15.515,160.247,25.935,170.667,38.788,170.667z"
        />
        <motion.path
          variants={pathVariants}
          d="M85.333,232.727H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273 c0,12.853,10.42,23.273,23.273,23.273h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273 C108.606,243.147,98.186,232.727,85.333,232.727z"
        />
        <motion.path
          variants={pathVariants}
          d="M85.333,341.333H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273s10.42,23.273,23.273,23.273 h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273S98.186,341.333,85.333,341.333z"
        />
      </motion.g>
      <motion.circle
        variants={circleVariants}
        cx="279.273"
        cy="201.697"
        r="69.818"
      />
      <motion.path
        variants={circleVariants}
        d="M279.273,271.514c-59.982,0-108.606,48.621-108.606,108.606h217.212 C387.879,320.135,339.254,271.514,279.273,271.514z"
      />
      <motion.path
        variants={pathVariants}
        d="M473.212,0H279.273H162.909C107.301,0,62.061,45.241,62.061,100.848v23.273h23.273 c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273 c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273 c12.853,0,23.273,10.42,23.273,23.273s-10.42,23.273-23.273,23.273H62.061v23.273C62.061,466.759,107.301,512,162.909,512h116.364 h193.939c12.853,0,23.273-10.42,23.273-23.273V23.273C496.485,10.42,486.065,0,473.212,0z M279.273,380.121H170.667 c0-59.985,48.624-108.606,108.606-108.606c-38.558,0-69.818-31.26-69.818-69.818c0-38.561,31.26-69.818,69.818-69.818 c38.558,0,69.818,31.257,69.818,69.818c0,38.558-31.26,69.818-69.818,69.818c59.982,0,108.606,48.621,108.606,108.606H279.273z"
        style={{ fill: "#5286FA" }}
      />
      <motion.path
        variants={pathVariants}
        d="M170.667,380.12c0-59.985,48.624-108.606,108.606-108.606c-38.558,0-69.818-31.26-69.818-69.818 c0-38.56,31.26-69.818,69.818-69.818V0H162.909C107.301,0,62.061,45.241,62.061,100.848v23.273h23.273 c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273 c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273 c12.853,0,23.273,10.42,23.273,23.273s-10.42,23.273-23.273,23.273H62.061v23.273C62.061,466.759,107.301,512,162.909,512h116.364 V380.12H170.667z"
        style={{ fill: "#3D6DEB" }}
      />
    </motion.svg>
  );
};

export default AnimatedContactIcon;
