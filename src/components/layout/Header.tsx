
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { Moon, Sun, Github, Search } from "lucide-react"
import { useSearchCommand } from "@/components/docs/SearchCommandProvider"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { toggle } = useSearchCommand()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center gap-2 mr-4">
          <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">D</div>
          <Link to="/" className="font-semibold">DocuVerse</Link>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
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
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Button
                variant="outline"
                className="hidden md:flex items-center rounded-md h-9 px-3 text-sm"
                onClick={toggle}
              >
                <Search className="mr-2 h-4 w-4" />
                <span className="text-sm text-muted-foreground">
                  Search docs
                </span>
                <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
