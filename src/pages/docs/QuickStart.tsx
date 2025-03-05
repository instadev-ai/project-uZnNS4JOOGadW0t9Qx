
import DocsLayout from "@/components/layout/DocsLayout";
import CodeBlock from "@/components/docs/CodeBlock";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const QuickStart = () => {
  const basicExample = `import { createDocs } from 'docuverse';

// Initialize your documentation
const docs = createDocs({
  title: 'My Project',
  description: 'Documentation for my awesome project',
});

// Add a page to your documentation
docs.addPage({
  title: 'Getting Started',
  content: '# Welcome to My Project\\n\\nThis is the getting started guide...',
  slug: 'getting-started'
});

// Build your documentation
docs.build();`;

  const interactiveExample = `// Add an interactive code example
docs.addExample({
  name: 'hello-world',
  title: 'Hello World Example',
  description: 'A simple example showing how to use the library',
  code: \`
// Import the library
import { helloWorld } from 'my-library';

// Call the function
const result = helloWorld('DocuVerse');
console.log(result); // Outputs: "Hello, DocuVerse!"
\`,
  language: 'javascript',
  editable: true,
  runnable: true
});`;

  const apiReferenceExample = `// Generate API reference documentation
docs.generateApiReference({
  // Source files to analyze
  include: ['src/**/*.ts', 'src/**/*.js'],
  exclude: ['**/*.test.ts', '**/*.spec.js'],
  
  // Output options
  output: {
    path: 'api-reference',
    format: 'markdown'
  },
  
  // Documentation options
  options: {
    includePrivate: false,
    includeProtected: true,
    includeExamples: true
  }
});`;

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start Guide</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Get up and running with DocuVerse in minutes.
          </p>
        </div>

        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            This guide assumes you have already installed DocuVerse. If you haven't, please see the <a href="/docs/installation" className="font-medium underline underline-offset-4">Installation Guide</a> first.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Creating Your First Documentation
          </h2>
          <p className="leading-7">
            Let's start by creating a simple documentation site with DocuVerse:
          </p>
          
          <CodeBlock code={basicExample} language="javascript" />
          
          <p className="leading-7">
            This code initializes a new documentation project, adds a page, and builds the documentation.
            The result will be a static website with your documentation content.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Adding Interactive Examples
          </h2>
          <p className="leading-7">
            One of DocuVerse's most powerful features is the ability to add interactive code examples
            that users can edit and run directly in the documentation:
          </p>
          
          <CodeBlock code={interactiveExample} language="javascript" />
          
          <p className="leading-7">
            This creates an interactive code example with a title, description, and editable code.
            Users can modify the code and run it to see the results in real-time.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Generating API Reference Documentation
          </h2>
          <p className="leading-7">
            DocuVerse can automatically generate API reference documentation from your source code:
          </p>
          
          <CodeBlock code={apiReferenceExample} language="javascript" />
          
          <p className="leading-7">
            This analyzes your source code and generates comprehensive API reference documentation,
            including types, parameters, return values, and examples.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Customizing Your Documentation
          </h2>
          <p className="leading-7">
            DocuVerse offers many customization options to match your brand and preferences:
          </p>
          
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Themes:</strong> Choose from built-in themes or create your own custom theme.
            </li>
            <li>
              <strong>Layout:</strong> Customize the layout of your documentation pages.
            </li>
            <li>
              <strong>Navigation:</strong> Configure the navigation structure to organize your content.
            </li>
            <li>
              <strong>Search:</strong> Enable and customize the search functionality.
            </li>
            <li>
              <strong>Code Highlighting:</strong> Choose from various syntax highlighting themes.
            </li>
          </ul>
          
          <p className="leading-7">
            See the <a href="/docs/customization" className="text-blue-600 hover:underline">Customization Guide</a> for more details.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Deploying Your Documentation
          </h2>
          <p className="leading-7">
            Once you've built your documentation, you can deploy it to any static hosting service:
          </p>
          
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>GitHub Pages:</strong> Perfect for open-source projects.
            </li>
            <li>
              <strong>Netlify:</strong> Offers continuous deployment from Git repositories.
            </li>
            <li>
              <strong>Vercel:</strong> Great for Next.js-based documentation.
            </li>
            <li>
              <strong>AWS S3:</strong> Scalable and cost-effective for larger documentation sites.
            </li>
          </ul>
          
          <p className="leading-7">
            See the <a href="/docs/deployment" className="text-blue-600 hover:underline">Deployment Guide</a> for step-by-step instructions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Next Steps
          </h2>
          <p className="leading-7">
            Now that you have a basic understanding of DocuVerse, you can explore more advanced topics:
          </p>
          
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li><a href="/docs/markdown-support" className="text-blue-600 hover:underline">Markdown Support</a></li>
            <li><a href="/docs/code-examples" className="text-blue-600 hover:underline">Advanced Code Examples</a></li>
            <li><a href="/docs/api-overview" className="text-blue-600 hover:underline">API Reference</a></li>
            <li><a href="/docs/configuration" className="text-blue-600 hover:underline">Configuration Options</a></li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default QuickStart;
