
import React from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language?: string
  filename?: string
  code: string
  className?: string
}

export function CodeBlock({ language = "js", filename, code, className }: CodeBlockProps) {
  // Simple syntax highlighting for JavaScript
  const formatCode = () => {
    if (language !== "js" && language !== "javascript") {
      return <code>{code}</code>;
    }

    // Split the code by lines to preserve formatting
    const lines = code.split('\n');
    
    return (
      <code>
        {lines.map((line, lineIndex) => {
          // Process each line
          let formattedLine = line;
          
          // Highlight comments
          formattedLine = formattedLine.replace(
            /(\/\/.+)$/g,
            '<span style="color: #6B7280;">$1</span>'
          );
          
          // Highlight strings
          formattedLine = formattedLine.replace(
            /(['"`])(.*?)\1/g,
            '<span style="color: #10B981;">$&</span>'
          );
          
          // Highlight keywords
          const keywords = ["import", "from", "const", "let", "var", "function", "return", "await", "async", "true", "false"];
          keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            formattedLine = formattedLine.replace(
              regex,
              `<span style="color: #8B5CF6;">${keyword}</span>`
            );
          });
          
          // Highlight object properties
          formattedLine = formattedLine.replace(
            /(\w+)(?=:)/g,
            '<span style="color: #F59E0B;">$1</span>'
          );
          
          return (
            <React.Fragment key={lineIndex}>
              <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          );
        })}
      </code>
    );
  };

  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          {filename && (
            <span className="text-xs text-muted-foreground">{filename}</span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{language}</div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        {formatCode()}
      </pre>
    </div>
  )
}
