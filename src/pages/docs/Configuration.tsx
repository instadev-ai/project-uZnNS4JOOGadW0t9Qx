
import DocsLayout from "@/components/layout/DocsLayout";
import CodeBlock from "@/components/docs/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Configuration = () => {
  const basicConfig = `// docuverse.config.js
module.exports = {
  // Project information
  title: 'My Project',
  description: 'Documentation for my awesome project',
  version: '1.0.0',
  
  // Theme configuration
  theme: 'default',
  
  // Output configuration
  output: {
    path: 'docs',
    clean: true
  }
};`;

  const advancedConfig = `// docuverse.config.js
module.exports = {
  // Project information
  title: 'My Project',
  description: 'Documentation for my awesome project',
  version: '1.0.0',
  logo: {
    light: './assets/logo-light.svg',
    dark: './assets/logo-dark.svg'
  },
  favicon: './assets/favicon.ico',
  
  // Theme configuration
  theme: {
    name: 'custom',
    colors: {
      primary: '#3B82F6',
      secondary: '#10B981',
      background: {
        light: '#FFFFFF',
        dark: '#1F2937'
      },
      text: {
        light: '#1F2937',
        dark: '#F9FAFB'
      }
    },
    fonts: {
      base: 'Inter, sans-serif',
      code: 'JetBrains Mono, monospace'
    },
    darkMode: true
  },
  
  // Navigation configuration
  navigation: [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', path: '/introduction' },
        { title: 'Installation', path: '/installation' },
        { title: 'Quick Start', path: '/quick-start' }
      ]
    },
    {
      title: 'Guides',
      items: [
        { title: 'Basic Usage', path: '/guides/basic-usage' },
        { title: 'Advanced Features', path: '/guides/advanced-features' }
      ]
    }
  ],
  
  // Code highlighting configuration
  codeHighlighting: {
    theme: 'github-dark',
    languages: ['javascript', 'typescript', 'jsx', 'bash'],
    lineNumbers: true,
    copyButton: true
  },
  
  // Search configuration
  search: {
    enabled: true,
    indexFullContent: true,
    placeholder: 'Search documentation...',
    hotkeys: ['/', 'k']
  },
  
  // Output configuration
  output: {
    path: 'docs',
    clean: true,
    assets: ['./assets'],
    siteUrl: 'https://example.com',
    sitemap: true
  },
  
  // Plugins
  plugins: [
    'docuverse-plugin-analytics',
    ['docuverse-plugin-social', {
      twitter: 'https://twitter.com/myproject',
      github: 'https://github.com/myproject'
    }]
  ]
};`;

  const themeConfig = `// Theme configuration
theme: {
  // Use a built-in theme
  name: 'default', // or 'modern', 'minimal', 'elegant'
  
  // Or customize colors
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B',
    background: {
      light: '#FFFFFF',
      dark: '#1F2937'
    },
    text: {
      light: '#1F2937',
      dark: '#F9FAFB'
    },
    border: {
      light: '#E5E7EB',
      dark: '#374151'
    },
    code: {
      background: {
        light: '#F3F4F6',
        dark: '#111827'
      }
    }
  },
  
  // Customize fonts
  fonts: {
    base: 'Inter, sans-serif',
    headings: 'Inter, sans-serif',
    code: 'JetBrains Mono, monospace'
  },
  
  // Enable/disable dark mode
  darkMode: true,
  
  // Customize layout
  layout: {
    maxWidth: '1200px',
    contentWidth: '768px',
    sidebarWidth: '280px'
  },
  
  // Customize components
  components: {
    navbar: {
      sticky: true,
      height: '64px'
    },
    sidebar: {
      sticky: true,
      collapsible: true
    },
    footer: {
      show: true
    }
  }
}`;

  const navigationConfig = `// Navigation configuration
navigation: [
  // Top-level section
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', path: '/introduction' },
      { title: 'Installation', path: '/installation' },
      { title: 'Quick Start', path: '/quick-start' }
    ]
  },
  
  // Section with nested items
  {
    title: 'Guides',
    items: [
      { title: 'Basic Usage', path: '/guides/basic-usage' },
      { 
        title: 'Advanced Features', 
        items: [
          { title: 'Configuration', path: '/guides/advanced/configuration' },
          { title: 'Customization', path: '/guides/advanced/customization' }
        ]
      }
    ]
  },
  
  // External links
  {
    title: 'Resources',
    items: [
      { 
        title: 'GitHub Repository', 
        path: 'https://github.com/myproject',
        external: true
      },
      { 
        title: 'API Reference', 
        path: 'https://api.example.com',
        external: true
      }
    ]
  }
]`;

  const searchConfig = `// Search configuration
search: {
  // Enable/disable search
  enabled: true,
  
  // Index full content or just titles and headings
  indexFullContent: true,
  
  // Customize placeholder text
  placeholder: 'Search documentation...',
  
  // Keyboard shortcuts to focus search
  hotkeys: ['/', 'k'],
  
  // Exclude certain pages from search
  exclude: [
    '/private-page',
    '/not-ready'
  ],
  
  // Boost certain pages in search results
  boost: {
    '/introduction': 2,
    '/quick-start': 1.5
  },
  
  // Customize search algorithm
  fuzzy: true,
  
  // Minimum character length to start searching
  minCharacters: 3,
  
  // Maximum number of results to show
  maxResults: 10
}`;

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Configuration</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Learn how to configure DocuVerse to match your project's needs.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Configuration File
          </h2>
          <p className="leading-7">
            DocuVerse uses a configuration file to customize your documentation. By default, it looks for 
            <code>docuverse.config.js</code> in your project root.
          </p>
          
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
            Basic Configuration
          </h3>
          
          <p className="leading-7">
            Here's a simple configuration file to get started:
          </p>
          
          <CodeBlock code={basicConfig} language="javascript" filename="docuverse.config.js" />
          
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6">
            Advanced Configuration
          </h3>
          
          <p className="leading-7">
            For more control, you can use the advanced configuration options:
          </p>
          
          <CodeBlock code={advancedConfig} language="javascript" filename="docuverse.config.js" />
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Configuration Options
          </h2>
          
          <p className="leading-7">
            Let's explore the main configuration options in detail:
          </p>
          
          <Tabs defaultValue="theme">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="theme">Theme</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="code">Code Highlighting</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
            </TabsList>
            
            <TabsContent value="theme" className="space-y-4 mt-6">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Theme Configuration
              </h3>
              
              <p className="leading-7">
                Customize the look and feel of your documentation:
              </p>
              
              <CodeBlock code={themeConfig} language="javascript" />
              
              <p className="leading-7">
                DocuVerse comes with several built-in themes, but you can also create your own custom theme
                by specifying colors, fonts, and other styling options.
              </p>
            </TabsContent>
            
            <TabsContent value="navigation" className="space-y-4 mt-6">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Navigation Configuration
              </h3>
              
              <p className="leading-7">
                Configure the navigation structure of your documentation:
              </p>
              
              <CodeBlock code={navigationConfig} language="javascript" />
              
              <p className="leading-7">
                The navigation configuration defines the structure of your documentation's sidebar.
                You can create sections, nested items, and external links.
              </p>
            </TabsContent>
            
            <TabsContent value="code" className="space-y-4 mt-6">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Code Highlighting Configuration
              </h3>
              
              <p className="leading-7">
                Customize how code blocks are displayed and highlighted:
              </p>
              
              <CodeBlock 
                code={`// Code highlighting configuration
codeHighlighting: {
  // Syntax highlighting theme
  theme: 'github-dark', // or 'github-light', 'dracula', 'nord', etc.
  
  // Languages to support
  languages: ['javascript', 'typescript', 'jsx', 'bash', 'json', 'css', 'html'],
  
  // Show line numbers
  lineNumbers: true,
  
  // Show copy button
  copyButton: true,
  
  // Wrap long lines
  wrapLongLines: false,
  
  // Maximum height for code blocks
  maxHeight: '400px',
  
  // Default settings for interactive examples
  defaultEditable: false,
  defaultRunnable: false,
  
  // Font settings
  font: {
    family: 'JetBrains Mono, monospace',
    size: '14px',
    lineHeight: 1.5
  }
}`} 
                language="javascript" 
              />
              
              <p className="leading-7">
                DocuVerse uses Prism.js for syntax highlighting, so you can use any Prism.js theme
                or create your own custom theme.
              </p>
            </TabsContent>
            
            <TabsContent value="search" className="space-y-4 mt-6">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Search Configuration
              </h3>
              
              <p className="leading-7">
                Configure the search functionality:
              </p>
              
              <CodeBlock code={searchConfig} language="javascript" />
              
              <p className="leading-7">
                DocuVerse includes a powerful search engine that indexes your documentation content.
                You can customize how the search works, what content is indexed, and how results are displayed.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Environment Variables
          </h2>
          
          <p className="leading-7">
            You can use environment variables in your configuration file:
          </p>
          
          <CodeBlock 
            code={`// docuverse.config.js
module.exports = {
  // ...other config
  
  // Use environment variables
  title: process.env.PROJECT_NAME || 'My Project',
  
  // API endpoints
  api: {
    baseUrl: process.env.API_URL || 'https://api.example.com',
    version: process.env.API_VERSION || 'v1'
  },
  
  // Analytics
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
    trackingId: process.env.ANALYTICS_ID
  }
};`} 
            language="javascript" 
            filename="docuverse.config.js" 
          />
          
          <p className="leading-7">
            This allows you to use different configurations for development and production environments,
            or to keep sensitive information out of your codebase.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
            Configuration Validation
          </h2>
          
          <p className="leading-7">
            DocuVerse validates your configuration file and will warn you if there are any issues.
            You can run the validation manually with:
          </p>
          
          <CodeBlock 
            code={`npx docuverse validate`} 
            language="bash" 
          />
          
          <p className="leading-7">
            This will check your configuration file for errors and provide helpful messages to fix any issues.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Configuration;
