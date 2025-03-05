
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Add Prism.js styles
const prismStyles = `
  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    font-family: "JetBrains Mono", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #282a36;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6272a4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: .7;
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

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

interface PrismCodeBlockProps {
  language?: string;
  filename?: string;
  code: string;
  className?: string;
}

export function PrismCodeBlock({ language = "js", filename, code, className }: PrismCodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Dynamically import Prism.js
    const loadPrism = async () => {
      try {
        // Add Prism.js script to the document
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
        script.async = true;
        document.body.appendChild(script);

        // Add language support
        const langScript = document.createElement('script');
        langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${language}.min.js`;
        langScript.async = true;
        document.body.appendChild(langScript);

        // Add Prism.js styles
        if (!document.getElementById('prism-styles')) {
          const style = document.createElement('style');
          style.id = 'prism-styles';
          style.innerHTML = prismStyles;
          document.head.appendChild(style);
        }

        // Wait for Prism to load
        script.onload = () => {
          // @ts-ignore
          if (window.Prism && codeRef.current) {
            // @ts-ignore
            window.Prism.highlightElement(codeRef.current);
          }
        };
      } catch (error) {
        console.error('Failed to load Prism.js:', error);
      }
    };

    loadPrism();
  }, [language, code]);

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
      <pre className="p-4 overflow-x-auto text-sm bg-[#282a36] rounded-b-lg">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
