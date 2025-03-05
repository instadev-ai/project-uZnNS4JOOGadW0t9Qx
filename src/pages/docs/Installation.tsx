
import DocsLayout from "@/components/layout/DocsLayout";
import CodeBlock from "@/components/docs/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Installation = () => {
  const npmInstall = `npm install docuverse`;
  const yarnInstall = `yarn add docuverse`;
  const pnpmInstall = `pnpm add docuverse`;

  const basicSetup = `// Import the library
import { createDocs } from 'docuverse';

// Initialize your documentation
const docs = createDocs({
  title: 'My Project',
  description: 'Documentation for my awesome project',
  // Additional configuration options
});`;

  const configExample = `// docuverse.config.js
module.exports = {
  // Project information
  title: 'My Project',
  description: 'Comprehensive documentation for my awesome project',
  
  // Theme configuration
  theme: {
    primaryColor: '#3B82F6',
    darkMode: true,
    font: 'Inter',
  },
  
  // Navigation and structure
  navigation: [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', path: '/introduction' },
        { title: 'Installation', path: '/installation' },
      ],
    },
    {
      title: 'Guides',
      items: [
        { title: 'Basic Usage', path: '/guides/basic-usage' },
        { title: 'Advanced Features', path: '/guides/advanced-features' },
      ],
    },
  ],
  
  // Code highlighting options
  codeHighlighting: {
    theme: 'github-dark',
    languages: ['javascript', 'typescript', 'jsx', 'bash'],
  },
};`;

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Get started with DocuVerse in your project.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Prerequisites
          </h2>
          <p className="leading-7">
            Before installing DocuVerse, make sure you have the following:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Node.js 14.0 or higher</li>
            <li>npm, yarn, or pnpm package manager</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Installation
          </h2>
          <p className="leading-7">
            You can install DocuVerse using your preferred package manager:
          </p>
          
          <Tabs defaultValue="npm">
            <TabsList>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            </TabsList>
            <TabsContent value="npm">
              <CodeBlock code={npmInstall} language="bash" />
            </TabsContent>
            <TabsContent value="yarn">
              <CodeBlock code={yarnInstall} language="bash" />
            </TabsContent>
            <TabsContent value="pnpm">
              <CodeBlock code={pnpmInstall} language="bash" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Basic Setup
          </h2>
          <p className="leading-7">
            After installing DocuVerse, you can import it in your project and create your first documentation:
          </p>
          
          <CodeBlock code={basicSetup} language="javascript" />
          
          <p className="leading-7">
            This creates a new documentation instance with basic configuration. You can then add content, 
            examples, and other features to your documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Configuration
          </h2>
          <p className="leading-7">
            For more advanced setups, you can create a configuration file in your project root:
          </p>
          
          <CodeBlock code={configExample} language="javascript" filename="docuverse.config.js" />
          
          <p className="leading-7">
            This configuration file gives you fine-grained control over your documentation's appearance, 
            structure, and behavior.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Next Steps
          </h2>
          <p className="leading-7">
            Now that you have DocuVerse installed, you can:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Create your first documentation page</li>
            <li>Add interactive code examples</li>
            <li>Configure your documentation theme</li>
            <li>Deploy your documentation to a hosting service</li>
          </ul>
          <p className="leading-7">
            Check out the <a href="/docs/quick-start" className="text-blue-600 hover:underline">Quick Start Guide</a> for more information.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Installation;
