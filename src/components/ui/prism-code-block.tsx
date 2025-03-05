
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// This would normally be imported from the npm package
// import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-jsx';
// import 'prismjs/components/prism-typescript';
// import 'prismjs/components/prism-bash';

// Dracula theme styles for Prism
const prismThemeStyles = `
  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }

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

export function PrismCodeBlock({ language = "javascript", filename, code, className }: PrismCodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // In a real implementation, we would use the imported Prism library
    // Prism.highlightElement(codeRef.current);
    
    // For this demo, we'll load Prism from CDN
    const loadPrism = async () => {
      if (!document.getElementById('prism-script')) {
        // Add theme styles
        const styleElement = document.createElement('style');
        styleElement.id = 'prism-theme-styles';
        styleElement.innerHTML = prismThemeStyles;
        document.head.appendChild(styleElement);
        
        // Load Prism script
        const script = document.createElement('script');
        script.id = 'prism-script';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
        script.async = true;
        
        // Load language support
        script.onload = () => {
          const languageScript = document.createElement('script');
          languageScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${language}.min.js`;
          languageScript.onload = () => {
            // @ts-ignore
            if (window.Prism && codeRef.current) {
              // @ts-ignore
              window.Prism.highlightElement(codeRef.current);
            }
          };
          document.body.appendChild(languageScript);
        };
        
        document.body.appendChild(script);
      } else {
        // If Prism is already loaded, just highlight the element
        // @ts-ignore
        if (window.Prism && codeRef.current) {
          // @ts-ignore
          window.Prism.highlightElement(codeRef.current);
        }
      }
    };
    
    loadPrism();
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
      <pre className="m-0 p-0 bg-[#282a36]">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
