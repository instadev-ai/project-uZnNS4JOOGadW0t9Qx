
import React from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language?: string
  filename?: string
  code: string
  className?: string
}

export function CodeBlock({ language = "js", filename, code, className }: CodeBlockProps) {
  // Simple syntax highlighting with inline styles
  const highlightCode = (code: string) => {
    if (language !== "js" && language !== "javascript") return code;
    
    // Replace strings
    let highlighted = code.replace(
      /(['"`])(.*?)\1/g, 
      '<span style="color: #10B981;">$&</span>'
    );
    
    // Replace comments
    highlighted = highlighted.replace(
      /(\/\/.*)/g, 
      '<span style="color: #6B7280;">$&</span>'
    );
    
    // Replace keywords
    const keywords = [
      "import", "export", "from", "const", "let", "var", 
      "function", "return", "if", "else", "for", "while", 
      "class", "extends", "async", "await", "try", "catch",
      "true", "false", "null", "undefined"
    ];
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(
        regex, 
        `<span style="color: #8B5CF6;">${keyword}</span>`
      );
    });
    
    // Replace object properties
    highlighted = highlighted.replace(
      /(\w+)(?=:)/g, 
      '<span style="color: #F59E0B;">$1</span>'
    );
    
    // Replace function calls
    highlighted = highlighted.replace(
      /(\w+)(?=\()/g, 
      '<span style="color: #3B82F6;">$1</span>'
    );
    
    // Replace numbers
    highlighted = highlighted.replace(
      /\b(\d+)\b/g, 
      '<span style="color: #3B82F6;">$1</span>'
    );
    
    return highlighted;
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
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  )
}
