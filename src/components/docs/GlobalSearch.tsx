
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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

export function GlobalSearch() {
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
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput 
        placeholder="Search documentation..." 
        value={query}
        onValueChange={setQuery}
        autoFocus
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(groupedDocs).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  navigate(item.href);
                  setIsOpen(false);
                }}
                className="flex flex-col items-start"
              >
                <div className="font-medium">{item.title}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}

export default GlobalSearch;
