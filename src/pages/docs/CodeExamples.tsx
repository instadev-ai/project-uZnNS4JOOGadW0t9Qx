
import DocsLayout from "@/components/layout/DocsLayout";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FixedCodeExample } from "@/components/ui/fixed-code-example";

const CodeExamples = () => {
  const basicExample = `// Add a simple code example
docs.addExample({
  name: 'hello-world',
  code: 'console.log("Hello, world!");',
  language: 'javascript'
});`;

  const interactiveExample = `// Add an interactive code example
docs.addExample({
  name: 'interactive-demo',
  title: 'Interactive Demo',
  description: 'Try changing the values and see the result',
  code: \`
// Change these values
const firstName = "John";
const lastName = "Doe";

// See the result
const fullName = firstName + " " + lastName;
console.log(fullName);
\`,
  language: 'javascript',
  editable: true,
  runnable: true
});`;

  const multiLanguageExample = `// Add a multi-language example
docs.addExample({
  name: 'multi-language',
  title: 'API Request Example',
  description: 'How to make an API request with our library',
  languages: [
    {
      name: 'JavaScript',
      code: \`
import { api } from 'my-library';

async function fetchData() {
  const response = await api.get('/users');
  return response.data;
}
\`,
      language: 'javascript'
    },
    {
      name: 'Python',
      code: \`
from my_library import api

def fetch_data():
    response = api.get('/users')
    return response.data
\`,
      language: 'python'
    },
    {
      name: 'Ruby',
      code: \`
require 'my_library'

def fetch_data
  response = Api.get('/users')
  response.data
end
\`,
      language: 'ruby'
    }
  ]
});`;

  const livePreviewExample = `// Add an example with live preview
docs.addExample({
  name: 'react-component',
  title: 'Button Component',
  description: 'A customizable button component',
  code: \`
import React from 'react';

function Button({ text, color = 'blue', onClick }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Example usage
function App() {
  return (
    <div>
      <Button text="Click me" color="#3B82F6" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
\`,
  language: 'jsx',
  editable: true,
  livePreview: true
});`;

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Code Examples</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Learn how to add interactive code examples to your documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Basic Code Examples
          </h2>
          <p className="leading-7">
            The simplest way to add code examples to your documentation is with the <code>addExample</code> method:
          </p>
          
          <CodeBlock code={basicExample} language="javascript" />
          
          <p className="leading-7">
            This adds a simple, non-interactive code example to your documentation. The code will be 
            syntax-highlighted according to the specified language.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Configuration Example
          </h2>
          <p className="leading-7">
            Here's an example of a DocuVerse configuration file:
          </p>
          
          <FixedCodeExample />
          
          <p className="leading-7">
            This configuration file sets up the basic project information and output settings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Interactive Code Examples
          </h2>
          <p className="leading-7">
            DocuVerse's most powerful feature is the ability to add interactive code examples that users 
            can edit and run directly in the documentation:
          </p>
          
          <CodeBlock code={interactiveExample} language="javascript" />
          
          <p className="leading-7">
            This creates an interactive code example with a title, description, and editable code.
            Users can modify the code and run it to see the results in real-time.
          </p>
          
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
            Interactive Example Options
          </h3>
          
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>editable:</strong> Whether users can edit the code (default: false).
            </li>
            <li>
              <strong>runnable:</strong> Whether users can run the code (default: false).
            </li>
            <li>
              <strong>startingLine:</strong> The line number to start displaying (default: 1).
            </li>
            <li>
              <strong>highlightLines:</strong> Array of line numbers to highlight.
            </li>
            <li>
              <strong>showLineNumbers:</strong> Whether to show line numbers (default: true).
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Multi-Language Examples
          </h2>
          <p className="leading-7">
            For libraries that support multiple programming languages, you can add examples in different languages:
          </p>
          
          <CodeBlock code={multiLanguageExample} language="javascript" />
          
          <p className="leading-7">
            This creates a tabbed interface where users can switch between different language implementations
            of the same functionality.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Live Preview Examples
          </h2>
          <p className="leading-7">
            For front-end libraries and frameworks, you can add examples with live previews:
          </p>
          
          <CodeBlock code={livePreviewExample} language="javascript" />
          
          <p className="leading-7">
            This creates an interactive example with a live preview of the rendered component.
            Users can edit the code and see the changes reflected in the preview in real-time.
          </p>
          
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
            Supported Frameworks
          </h3>
          
          <p className="leading-7">
            Live previews are currently supported for:
          </p>
          
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>React</li>
            <li>Vue</li>
            <li>Svelte</li>
            <li>HTML/CSS/JavaScript</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Customizing Code Examples
          </h2>
          <p className="leading-7">
            You can customize the appearance and behavior of code examples through the configuration:
          </p>
          
          <Tabs defaultValue="theme">
            <TabsList>
              <TabsTrigger value="theme">Theme</TabsTrigger>
              <TabsTrigger value="fonts">Fonts</TabsTrigger>
              <TabsTrigger value="behavior">Behavior</TabsTrigger>
            </TabsList>
            <TabsContent value="theme">
              <CodeBlock 
                code={`// In your docuverse.config.js
module.exports = {
  // ...other config
  codeHighlighting: {
    theme: 'github-dark', // or 'github-light', 'dracula', 'nord', etc.
    lineNumbers: true,
    highlightCurrentLine: true
  }
}`} 
                language="javascript" 
              />
            </TabsContent>
            <TabsContent value="fonts">
              <CodeBlock 
                code={`// In your docuverse.config.js
module.exports = {
  // ...other config
  codeHighlighting: {
    font: {
      family: 'JetBrains Mono', // or 'Fira Code', 'Source Code Pro', etc.
      size: '14px',
      lineHeight: 1.5
    }
  }
}`} 
                language="javascript" 
              />
            </TabsContent>
            <TabsContent value="behavior">
              <CodeBlock 
                code={`// In your docuverse.config.js
module.exports = {
  // ...other config
  codeHighlighting: {
    copyButton: true,
    wrapLongLines: false,
    maxHeight: '400px',
    defaultEditable: false,
    defaultRunnable: false
  }
}`} 
                language="javascript" 
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Best Practices
          </h2>
          <p className="leading-7">
            Here are some best practices for creating effective code examples:
          </p>
          
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <strong>Keep examples concise:</strong> Focus on demonstrating one concept at a time.
            </li>
            <li>
              <strong>Add comments:</strong> Explain what the code is doing with inline comments.
            </li>
            <li>
              <strong>Use realistic examples:</strong> Show real-world use cases rather than contrived examples.
            </li>
            <li>
              <strong>Include error handling:</strong> Demonstrate proper error handling techniques.
            </li>
            <li>
              <strong>Show complete examples:</strong> Include all necessary imports and setup code.
            </li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default CodeExamples;
