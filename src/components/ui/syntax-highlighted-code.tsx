
import React from "react"
import { cn } from "@/lib/utils"

interface SyntaxHighlightedCodeProps {
  language?: string
  filename?: string
  code: string
  className?: string
}

export function SyntaxHighlightedCode({ language = "js", filename, code, className }: SyntaxHighlightedCodeProps) {
  // Function to add syntax highlighting
  const highlightSyntax = (code: string) => {
    if (language !== "js" && language !== "javascript") return code;
    
    // Replace strings (must be done first to avoid conflicts)
    let highlighted = code.replace(
      /(['"`])(.*?)\1/g, 
      '<span class="text-green-500 dark:text-green-400">$&</span>'
    );
    
    // Replace comments
    highlighted = highlighted.replace(
      /(\/\/.*)/g, 
      '<span class="text-slate-500 dark:text-slate-400">$&</span>'
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
        `<span class="text-purple-500 dark:text-purple-400">${keyword}</span>`
      );
    });
    
    // Replace object properties
    highlighted = highlighted.replace(
      /(\w+)(?=:)/g, 
      '<span class="text-yellow-500 dark:text-yellow-400">$&</span>'
    );
    
    // Replace function calls
    highlighted = highlighted.replace(
      /(\w+)(?=\()/g, 
      '<span class="text-blue-500 dark:text-blue-400">$&</span>'
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
        <code dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }} />
      </pre>
    </div>
  )
}
