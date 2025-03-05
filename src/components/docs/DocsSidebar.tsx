
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DocLink {
  title: string;
  href: string;
}

interface DocSection {
  title: string;
  links: DocLink[];
}

const docsConfig: DocSection[] = [
  {
    title: "Getting Started",
    links: [
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Quick Start",
        href: "/docs/quick-start",
      },
    ],
  },
  {
    title: "Guides",
    links: [
      {
        title: "Code Examples",
        href: "/docs/code-examples",
      },
      {
        title: "Configuration",
        href: "/docs/configuration",
      },
    ],
  },
  {
    title: "API Reference",
    links: [
      {
        title: "API Overview",
        href: "/api",
      },
    ],
  },
];

const DocsSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="pb-12 pr-4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="space-y-1">
            <Link
              to="/docs"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                pathname === "/docs"
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              Overview
            </Link>
          </div>
        </div>
        {docsConfig.map((section) => (
          <div className="px-3 py-2" key={section.title}>
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="space-y-1">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center rounded-md px-4 py-2 text-sm font-medium",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsSidebar;
