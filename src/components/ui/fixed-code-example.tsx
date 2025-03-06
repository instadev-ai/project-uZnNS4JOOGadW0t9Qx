
import React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

export function FixedCodeExample() {
  const docuverseConfig = `// docuverse.config.js
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

  return (
    <CodeBlock 
      language="javascript" 
      filename="docuverse.config.js" 
      code={docuverseConfig} 
      className="w-full max-w-3xl mx-auto my-8"
    />
  );
}
