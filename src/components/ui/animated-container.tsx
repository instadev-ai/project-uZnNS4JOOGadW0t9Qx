
import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/animation";

interface AnimatedContainerProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variants?: any;
}

export function AnimatedContainer({
  children,
  delay = 0,
  className,
  variants = fadeIn,
  ...props
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
