import { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

interface RouteTransitionProps {
  children: React.ReactNode;
}

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Detect route change
    if (location.pathname !== currentPath) {
      setIsTransitioning(true);
      
      // Show transition video for 1.5 seconds
      const transitionTimer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setIsTransitioning(false);
      }, 1500);

      return () => clearTimeout(transitionTimer);
    }
  }, [location.pathname, currentPath]);

  return (
    <>
      {/* Route Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          {/* Logo Video */}
          <div className="relative z-10 text-center">
            <div className="flex justify-center">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="h-screen w-auto object-contain"
              >
                <source src="/src/media/WhatsApp Video 2025-10-29 at 7.24.14 PM.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {children}
      </div>
    </>
  );
};

export default RouteTransition;
