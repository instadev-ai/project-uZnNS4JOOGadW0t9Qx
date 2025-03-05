
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">D</div>
            <span className="font-semibold">DocuVerse</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 DocuVerse. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            to="/docs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Docs
          </Link>
          <Link
            to="/api"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            API
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
