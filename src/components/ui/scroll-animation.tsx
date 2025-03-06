
import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animation";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export function ScrollAnimation({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, threshold });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
