
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { SearchCommandProvider } from "@/components/docs/SearchCommandProvider";
import { GlobalSearch } from "@/components/docs/GlobalSearch";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Api from "./pages/Api";
import AIJokes from "./pages/AIJokes";
import NotFound from "./pages/NotFound";

// Import documentation pages
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import CodeExamples from "./pages/docs/CodeExamples";
import Configuration from "./pages/docs/Configuration";

const queryClient = new QueryClient();

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/installation" element={<Installation />} />
        <Route path="/docs/quick-start" element={<QuickStart />} />
        <Route path="/docs/code-examples" element={<CodeExamples />} />
        <Route path="/docs/configuration" element={<Configuration />} />
        <Route path="/api" element={<Api />} />
        <Route path="/ai-jokes" element={<AIJokes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <SearchCommandProvider>
        <GlobalSearch />
        <AnimatedRoutes />
      </SearchCommandProvider>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
