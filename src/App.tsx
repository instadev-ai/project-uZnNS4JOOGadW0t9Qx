
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Api from "./pages/Api";
import NotFound from "./pages/NotFound";

// Import documentation pages
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import CodeExamples from "./pages/docs/CodeExamples";
import Configuration from "./pages/docs/Configuration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/installation" element={<Installation />} />
            <Route path="/docs/quick-start" element={<QuickStart />} />
            <Route path="/docs/code-examples" element={<CodeExamples />} />
            <Route path="/docs/configuration" element={<Configuration />} />
            <Route path="/api" element={<Api />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
