
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/ui/code-block"
import { FeatureCard } from "@/components/ui/feature-card"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Link } from "react-router-dom"
import { Paintbrush, Code2, Moon, Search, FileCode, Smartphone } from "lucide-react"

const codeExample = `import { createDocs } from 'docuverse'

// Initialize the documentation
const docs = createDocs({
  title: 'Project Documentation',
  description: 'Beautiful, searchable docs',
  theme: 'elegant',
  codeHighlight: true,
  interactive: true
})

// Add interactive examples
docs.addExample({
  name: 'quick-start',
  code: 'const result = await api.fetch()',
  language: 'javascript'
})

docs.build()`

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <p className="text-base md:text-lg font-medium text-blue-600 dark:text-blue-500">
                  Documentation that evolves with your project
                </p>
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-blue-600 dark:text-blue-500">
                  Beautiful documentation
                </h1>
                <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  that your users will love
                </h2>
                <p className="mx-auto max-w-[800px] text-xl text-muted-foreground md:text-2xl lg:text-3xl">
                  Create stunning docs with interactive examples, powerful search, and a
                  seamless developer experience. Simple to use, and impossible to outgrow.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
                  <Link to="/docs">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  <Link to="/api">API Reference</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <CodeBlock 
                filename="example.js" 
                code={codeExample} 
                language="js" 
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Everything you need for world-class documentation
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Powerful features designed to make your documentation shine.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Paintbrush className="h-5 w-5" />}
                title="Beautiful Design"
                description="Elegant, modern design that puts your content front and center. Carefully crafted typography and spacing for maximum readability."
              />
              <FeatureCard
                icon={<Code2 className="h-5 w-5" />}
                title="Interactive Code Examples"
                description="Bring your documentation to life with fully interactive code examples. Let users experiment directly in your docs."
              />
              <FeatureCard
                icon={<Moon className="h-5 w-5" />}
                title="Dark Mode"
                description="Automatically adapts to your users' preferences with a thoughtfully designed dark mode that reduces eye strain."
              />
              <FeatureCard
                icon={<Search className="h-5 w-5" />}
                title="Powerful Search"
                description="Lightning fast search that helps users find exactly what they need, with highlighted results and keyboard shortcuts."
              />
              <FeatureCard
                icon={<FileCode className="h-5 w-5" />}
                title="API Reference"
                description="Automatically generate comprehensive API reference documentation from your codebase with examples and type information."
              />
              <FeatureCard
                icon={<Smartphone className="h-5 w-5" />}
                title="Responsive Layout"
                description="Documentation that looks great on any device, from large desktop screens to mobile phones. Perfect for docs on the go."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to get started?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create beautiful documentation that your users will love.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/docs">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
