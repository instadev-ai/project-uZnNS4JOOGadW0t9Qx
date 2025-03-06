
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { DocSearch } from "@/components/docs/DocSearch"
import { motion } from "framer-motion"

export default function Docs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 text-center mb-8"
          >
            <h1 className="scroll-m-20 text-5xl font-bold tracking-tight">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn how to use DocuVerse to create beautiful documentation.
            </p>
            <DocSearch />
          </motion.div>
          
          <div className="flex flex-col items-start gap-4 md:flex-row mt-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold">
                    <Link to="/docs/installation" className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />
                    Installation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to install DocuVerse in your project.
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold">
                    <Link to="/docs/quick-start" className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />
                    Quick Start
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get up and running with DocuVerse in minutes.
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold">
                    <Link to="/docs/code-examples" className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />
                    Code Examples
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to add interactive code examples to your docs.
                  </p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <h3 className="font-semibold">
                    <Link to="/docs/configuration" className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" />
                    Configuration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to configure DocuVerse to match your needs.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full md:w-[250px] lg:w-[300px] space-y-4"
            >
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Need help?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Our support team is always ready to help with any questions you might have.
                </p>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    Contact Support
                  </a>
                </Button>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Join our community</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Connect with other DocuVerse users and share your experiences.
                </p>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
