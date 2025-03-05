
import React from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language?: string
  filename?: string
  code: string
  className?: string
}

export function CodeBlock({ language = "js", filename, code, className }: CodeBlockProps) {
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
        <code>{code}</code>
      </pre>
    </div>
  )
}
