
import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animation";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variants?: any;
  as?: React.ElementType;
}

export function AnimatedText({
  children,
  delay = 0,
  className,
  variants = fadeInUp,
  as = "div",
  ...props
}: AnimatedTextProps) {
  const Component = motion[as as keyof typeof motion] || motion.div;
  
  return (
    <Component
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
