
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

// Define styles for syntax highlighting
const styles = {
  token: {
    comment: "text-slate-500 dark:text-slate-400",
    prolog: "text-slate-500 dark:text-slate-400",
    doctype: "text-slate-500 dark:text-slate-400",
    cdata: "text-slate-500 dark:text-slate-400",
    punctuation: "text-slate-500 dark:text-slate-400",
    namespace: "opacity-70",
    property: "text-indigo-500 dark:text-indigo-400",
    tag: "text-green-500 dark:text-green-400",
    boolean: "text-blue-500 dark:text-blue-400",
    number: "text-blue-500 dark:text-blue-400",
    constant: "text-blue-500 dark:text-blue-400",
    symbol: "text-blue-500 dark:text-blue-400",
    deleted: "text-red-500 dark:text-red-400",
    selector: "text-green-500 dark:text-green-400",
    "attr-name": "text-yellow-500 dark:text-yellow-400",
    string: "text-green-500 dark:text-green-400",
    char: "text-green-500 dark:text-green-400",
    builtin: "text-indigo-500 dark:text-indigo-400",
    inserted: "text-green-500 dark:text-green-400",
    operator: "text-purple-500 dark:text-purple-400",
    entity: "text-yellow-500 dark:text-yellow-400 cursor-help",
    url: "text-blue-500 dark:text-blue-400",
    variable: "text-red-500 dark:text-red-400",
    atrule: "text-indigo-500 dark:text-indigo-400",
    "attr-value": "text-green-500 dark:text-green-400",
    function: "text-blue-500 dark:text-blue-400",
    "class-name": "text-indigo-500 dark:text-indigo-400",
    keyword: "text-purple-500 dark:text-purple-400",
    regex: "text-orange-500 dark:text-orange-400",
    important: "text-red-500 dark:text-red-400 font-bold",
    bold: "font-bold",
    italic: "italic",
    "language-css": "text-blue-500 dark:text-blue-400",
    "language-javascript": "text-blue-500 dark:text-blue-400",
    "language-markup": "text-blue-500 dark:text-blue-400",
  },
};

interface SyntaxHighlightedCodeProps {
  language?: string;
  filename?: string;
  code: string;
  className?: string;
}

export function SyntaxHighlightedCode({
  language = "js",
  filename,
  code,
  className,
}: SyntaxHighlightedCodeProps) {
  // Function to manually highlight JavaScript code
  const highlightJavaScript = (code: string) => {
    // Replace strings
    let highlighted = code.replace(
      /(['"`])(.*?)\1/g,
      `<span class="${styles.token.string}">$&</span>`
    );

    // Replace comments
    highlighted = highlighted.replace(
      /(\/\/.*)/g,
      `<span class="${styles.token.comment}">$&</span>`
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
        `<span class="${styles.token.keyword}">${keyword}</span>`
      );
    });

    // Replace object properties
    highlighted = highlighted.replace(
      /(\w+)(?=:)/g,
      `<span class="${styles.token["attr-name"]}">$1</span>`
    );

    // Replace function calls
    highlighted = highlighted.replace(
      /(\w+)(?=\()/g,
      `<span class="${styles.token.function}">$1</span>`
    );

    // Replace numbers
    highlighted = highlighted.replace(
      /\b(\d+)\b/g,
      `<span class="${styles.token.number}">$1</span>`
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
        <code 
          dangerouslySetInnerHTML={{ 
            __html: highlightJavaScript(code) 
          }} 
        />
      </pre>
    </div>
  );
}
