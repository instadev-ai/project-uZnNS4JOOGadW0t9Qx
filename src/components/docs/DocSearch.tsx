
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useSearchCommand } from "./SearchCommandProvider";

// Define the document structure
interface DocItem {
  title: string;
  href: string;
  description: string;
  category: string;
}

// Sample documentation data
const docItems: DocItem[] = [
  {
    title: "Installation",
    href: "/docs/installation",
    description: "Learn how to install DocuVerse in your project.",
    category: "Getting Started"
  },
  {
    title: "Quick Start",
    href: "/docs/quick-start",
    description: "Get up and running with DocuVerse in minutes.",
    category: "Getting Started"
  },
  {
    title: "Code Examples",
    href: "/docs/code-examples",
    description: "Learn how to add interactive code examples to your docs.",
    category: "Guides"
  },
  {
    title: "Configuration",
    href: "/docs/configuration",
    description: "Learn how to configure DocuVerse to match your needs.",
    category: "Guides"
  },
  {
    title: "API Overview",
    href: "/api",
    description: "Overview of the DocuVerse API.",
    category: "API Reference"
  }
];

export function DocSearch() {
  const { isOpen, setIsOpen } = useSearchCommand();
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  // Filter docs based on search query (case-insensitive)
  const filteredDocs = React.useMemo(() => {
    if (!query.trim()) return docItems;
    
    const normalizedQuery = query.toLowerCase().trim();
    
    return docItems.filter((item) => {
      const searchContent = [
        item.title,
        item.description,
        item.category
      ].join(" ").toLowerCase();
      
      return searchContent.includes(normalizedQuery);
    });
  }, [query]);

  // Group docs by category
  const groupedDocs = React.useMemo(() => {
    return filteredDocs.reduce<Record<string, DocItem[]>>((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [filteredDocs]);

  // Reset query when dialog closes
  React.useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-14 w-full justify-start rounded-[0.5rem] bg-background text-lg text-muted-foreground shadow-md sm:pr-12 md:w-96 lg:w-[500px]"
        onClick={() => setIsOpen(true)}
      >
        <span className="inline-flex">
          <Search className="mr-2 h-5 w-5" />
          Search documentation...
        </span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-8 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </>
  );
}

export default DocSearch;
