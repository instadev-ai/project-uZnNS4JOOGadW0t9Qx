
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// We'll add Prism.js via CDN for now, but this can be replaced with npm imports
interface PrismCodeBlockProps {
  language?: string;
  filename?: string;
  code: string;
  className?: string;
}

export function PrismCodeBlock({ language = "javascript", filename, code, className }: PrismCodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load Prism.js from CDN
    const loadPrism = async () => {
      if (!document.getElementById('prism-script')) {
        // Load Prism CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
        document.head.appendChild(link);
        
        // Load Prism JS
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
      <pre className="p-4 overflow-x-auto text-sm bg-[#2d2d2d]">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
