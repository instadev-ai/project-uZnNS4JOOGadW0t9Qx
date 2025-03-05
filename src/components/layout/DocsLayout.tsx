
import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DocsSidebar from "@/components/docs/DocsSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex-1">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-6 md:gap-10">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="mb-4 md:hidden">
                  <MenuIcon className="h-4 w-4 mr-2" />
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[300px] pr-0">
                <DocsSidebar />
              </SheetContent>
            </Sheet>
          ) : (
            <aside className="hidden md:block">
              <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
                <DocsSidebar />
              </div>
            </aside>
          )}
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <div className="mx-auto w-full min-w-0">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;
