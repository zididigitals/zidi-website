import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import RouteTransition from "@/components/RouteTransition";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Consultancy from "./pages/Consultancy";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductSolutions from "./pages/ProductSolutions";
import Marketing from "./pages/Marketing";
import CustomSolutions from "./pages/CustomSolutions";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            {/* Main content - only show after preloader */}
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="min-h-screen">
                {/* Regular App with navbar/footer */}
                <>
                  <Navbar />
                  {/* Add top padding to avoid content under the fixed navbar on mobile */}
                  <main className="pt-16 md:pt-20">
                    <RouteTransition>
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/products" element={<ProductSolutions />} />
                        <Route path="/marketing" element={<Marketing />} />
                        <Route path="/custom-solutions" element={<CustomSolutions />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/consultancy" element={<Consultancy />} />
                        <Route path="/internship" element={<Internship />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Catch-all */}
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </RouteTransition>
                  </main>
                  <Footer />
                </>
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};
