
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, hoverScale } from "@/lib/animation";

interface AnimatedFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function AnimatedFeatureCard({
  icon,
  title,
  description,
  className,
  delay = 0
}: AnimatedFeatureCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay }}
      whileHover={hoverScale}
      className={cn("flex flex-col space-y-3 p-6 border rounded-lg", className)}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
