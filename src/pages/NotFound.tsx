
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { FileQuestionIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animation";

const NotFound = () => {
  return (
    <MainLayout>
      <motion.div 
        className="container flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] gap-6 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          variants={fadeInUp}
        >
          <motion.div 
            className="flex h-20 w-20 items-center justify-center rounded-full bg-muted"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1
            }}
          >
            <FileQuestionIcon className="h-10 w-10 text-muted-foreground" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
            variants={fadeInUp}
          >
            Page Not Found
          </motion.h1>
          <motion.p 
            className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            variants={fadeInUp}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2 min-[400px]:flex-row"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg">
              <Link to="/">Go Home</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" variant="outline">
              <Link to="/docs">View Documentation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default NotFound;
