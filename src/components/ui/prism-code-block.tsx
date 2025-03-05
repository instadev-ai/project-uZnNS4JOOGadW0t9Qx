
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";

// Custom styles to enhance the Prism theme
const customStyles = `
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6272a4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #50fa7b;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #f1fa8c;
  }

  .token.keyword {
    color: #8be9fd;
  }

  .token.regex,
  .token.important {
    color: #ffb86c;
  }
`;

interface PrismCodeBlockProps {
  language?: string;
  filename?: string;
  code: string;
  className?: string;
}

export function PrismCodeBlock({ language = "javascript", filename, code, className }: PrismCodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add custom styles to enhance the theme
    if (!document.getElementById('prism-custom-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'prism-custom-styles';
      styleElement.innerHTML = customStyles;
      document.head.appendChild(styleElement);
    }

    // Highlight the code element
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [language, code]);

  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden", className)}>
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
      <pre className="m-0 p-4 bg-[#282a36] rounded-b-lg">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
