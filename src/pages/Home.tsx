
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Link } from "react-router-dom"
import { Paintbrush, Code2, Moon, Search, FileCode, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedContainer } from "@/components/ui/animated-container"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedFeatureCard } from "@/components/ui/animated-feature-card"
import { fadeIn, fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animation"

const codeExample = `import { createDocs } from 'docuverse'

// Initialize the documentation
const docs = createDocs({
  title: 'Project Documentation',
  description: 'Beautiful, searchable docs',
  theme: 'elegant',
  codeHighlight: true,
  interactive: true,
  
  // Color configuration
  colors: {
    primary: '#3B82F6',    // Blue
    secondary: '#10B981',  // Green
    accent: '#F59E0B',     // Amber
    success: '#22C55E',    // Green
    warning: '#EAB308',    // Yellow
    error: '#EF4444',      // Red
    background: '#FFFFFF', // White
    text: '#1F2937'        // Dark gray
  },
  
  // Typography settings
  typography: {
    fontFamily: 'Inter, sans-serif',
    headings: {
      fontWeight: 700,
      lineHeight: 1.2
    },
    code: {
      fontFamily: 'JetBrains Mono, monospace'
    }
  }
})

// Add interactive examples
docs.addExample({
  name: 'quick-start',
  code: 'const result = await api.fetch()',
  language: 'javascript'
})

// Build the documentation site
docs.build()`

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <AnimatedContainer 
              className="flex flex-col items-center space-y-6 text-center"
              variants={staggerContainer}
            >
              <div className="space-y-4">
                <AnimatedText 
                  className="text-base md:text-lg font-medium text-blue-600 dark:text-blue-500"
                  variants={fadeInUp}
                  delay={0.1}
                >
                  Documentation that evolves with your project
                </AnimatedText>
                <AnimatedText 
                  as="h1"
                  className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 dark:text-blue-500"
                  variants={fadeInUp}
                  delay={0.2}
                >
                  Beautiful documentation
                </AnimatedText>
                <AnimatedText 
                  as="h2"
                  className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
                  variants={fadeInUp}
                  delay={0.3}
                >
                  that your users will love
                </AnimatedText>
                <AnimatedText 
                  className="mx-auto max-w-[800px] text-xl text-muted-foreground md:text-2xl lg:text-3xl"
                  variants={fadeInUp}
                  delay={0.4}
                >
                  Create stunning docs with interactive examples, powerful search, and a
                  seamless developer experience. Simple to use, and impossible to outgrow.
                </AnimatedText>
              </div>
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg">
                    <Link to="/docs">Get Started</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/api">API Reference</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <AnimatedContainer 
              className="mx-auto max-w-3xl"
              variants={fadeIn}
              delay={0.2}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <CodeBlock 
                  filename="example.js" 
                  code={codeExample} 
                  language="js" 
                />
              </motion.div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedContainer 
              className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
              variants={fadeInUp}
            >
              <AnimatedText 
                as="h2"
                className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                delay={0.1}
              >
                Everything you need for world-class documentation
              </AnimatedText>
              <AnimatedText 
                className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                delay={0.2}
              >
                Powerful features designed to make your documentation shine.
              </AnimatedText>
            </AnimatedContainer>
            <motion.div 
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <AnimatedFeatureCard
                icon={<Paintbrush className="h-5 w-5" />}
                title="Beautiful Design"
                description="Elegant, modern design that puts your content front and center. Carefully crafted typography and spacing for maximum readability."
                delay={0.1}
              />
              <AnimatedFeatureCard
                icon={<Code2 className="h-5 w-5" />}
                title="Interactive Code Examples"
                description="Bring your documentation to life with fully interactive code examples. Let users experiment directly in your docs."
                delay={0.2}
              />
              <AnimatedFeatureCard
                icon={<Moon className="h-5 w-5" />}
                title="Dark Mode"
                description="Automatically adapts to your users' preferences with a thoughtfully designed dark mode that reduces eye strain."
                delay={0.3}
              />
              <AnimatedFeatureCard
                icon={<Search className="h-5 w-5" />}
                title="Powerful Search"
                description="Lightning fast search that helps users find exactly what they need, with highlighted results and keyboard shortcuts."
                delay={0.4}
              />
              <AnimatedFeatureCard
                icon={<FileCode className="h-5 w-5" />}
                title="API Reference"
                description="Automatically generate comprehensive API reference documentation from your codebase with examples and type information."
                delay={0.5}
              />
              <AnimatedFeatureCard
                icon={<Smartphone className="h-5 w-5" />}
                title="Responsive Layout"
                description="Documentation that looks great on any device, from large desktop screens to mobile phones. Perfect for docs on the go."
                delay={0.6}
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="space-y-2">
                <AnimatedText 
                  as="h2"
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  variants={fadeInUp}
                  delay={0.1}
                >
                  Ready to get started?
                </AnimatedText>
                <AnimatedText 
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
                  variants={fadeInUp}
                  delay={0.2}
                >
                  Create beautiful documentation that your users will love.
                </AnimatedText>
              </div>
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-4"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg">
                    <Link to="/docs">Get Started</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
