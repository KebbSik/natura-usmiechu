"use client";

import { motion } from "motion/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  range: number;
  duration?: number;
  delay?: number;
};
const AnimatedSection = ({
  children,
  direction,
  range,
  duration,
  delay,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -range : direction === "right" ? range : 0,
        y: direction === "top" ? -range : direction === "bottom" ? range : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -20% 0px " }}
      transition={{
        duration: duration ? duration : 0.6,
        delay: delay ? delay : 0,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
