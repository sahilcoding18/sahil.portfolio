
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutFull from "./pages/AboutFull";
import ExperienceFull from "./pages/ExperienceFull";
import ProjectsFull from "./pages/ProjectsFull";
import AchievementsFull from "./pages/AchievementsFull";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutFull />} />
          <Route path="/experience" element={<ExperienceFull />} />
          <Route path="/projects" element={<ProjectsFull />} />
          <Route path="/achievements" element={<AchievementsFull />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
