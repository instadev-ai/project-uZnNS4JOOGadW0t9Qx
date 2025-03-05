
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CodeBlock } from "@/components/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const installCode = `# Using npm
npm install docuverse

# Using yarn
yarn add docuverse

# Using pnpm
pnpm add docuverse`

const basicUsageCode = `import { createDocs } from 'docuverse'

// Initialize the documentation
const docs = createDocs({
  title: 'API Documentation',
  description: 'Comprehensive API docs',
  version: '1.0.0'
})

// Build the documentation
docs.build()`

const advancedUsageCode = `import { createDocs } from 'docuverse'

// Initialize with advanced options
const docs = createDocs({
  title: 'Advanced API Docs',
  description: 'Feature-rich documentation',
  theme: 'modern',
  codeHighlight: {
    theme: 'github',
    languages: ['javascript', 'typescript', 'jsx', 'bash']
  },
  search: {
    enabled: true,
    indexFullContent: true,
    placeholder: 'Search documentation...'
  },
  navigation: {
    enabled: true,
    position: 'left'
  }
})

// Add API endpoints
docs.addEndpoint({
  path: '/api/users',
  method: 'GET',
  description: 'Retrieve a list of users',
  parameters: [
    { name: 'limit', type: 'number', description: 'Maximum number of users to return' },
    { name: 'offset', type: 'number', description: 'Number of users to skip' }
  ],
  responses: [
    { status: 200, description: 'Successful response', schema: 'UserList' },
    { status: 400, description: 'Bad request', schema: 'Error' }
  ]
})

// Build with custom output directory
docs.build({ outDir: './public/docs' })`

export default function Api() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Reference</h1>
              <p className="text-lg text-muted-foreground mt-2">
                Comprehensive documentation for the DocuVerse API.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
              <CodeBlock code={installCode} language="bash" />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
              <Tabs defaultValue="basic">
                <TabsList>
                  <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced Usage</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="mt-4">
                  <CodeBlock code={basicUsageCode} language="js" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    This example shows the basic usage of DocuVerse to create simple documentation.
                  </p>
                </TabsContent>
                <TabsContent value="advanced" className="mt-4">
                  <CodeBlock code={advancedUsageCode} language="js" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    This example demonstrates advanced configuration options and API endpoint documentation.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">API Methods</h2>
              <div className="rounded-lg border divide-y">
                <div className="p-4">
                  <h3 className="font-medium">createDocs(options)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Creates a new documentation instance with the specified options.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">docs.addExample(example)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Adds an interactive code example to the documentation.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">docs.addEndpoint(endpoint)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Adds an API endpoint to the documentation.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">docs.addPage(page)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Adds a custom page to the documentation.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">docs.build(options)</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Builds the documentation with the specified options.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 bg-muted/40">
              <h2 className="text-xl font-semibold">Need more help?</h2>
              <p className="text-muted-foreground mt-2">
                Check out our comprehensive documentation or reach out to our support team.
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  GitHub Repository
                </a>
                <a 
                  href="#" 
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
