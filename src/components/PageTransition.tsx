import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    // Detect route change
    if (children !== displayChildren) {
      setIsTransitioning(true);
      
      // Show transition video for 2 seconds
      const transitionTimer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 2000);

      return () => clearTimeout(transitionTimer);
    }
  }, [children, displayChildren]);

  return (
    <>
      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src="/brand-video.mp4" type="video/mp4" />
            </video>
            
            {/* Professional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95">
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>

          {/* Transition Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/logo.jpeg" 
                alt="Zidi Digital Solutions – Business Growth Solutions | Startup Consultancy by Divyesh Bondapalli" 
                className="h-16 w-auto object-contain animate-pulse"
              />
            </div>

            {/* Loading Text */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Navigating to Excellence
              </h2>
              <p className="text-muted-foreground">
                Discovering amazing digital solutions...
              </p>
            </div>

            {/* Loading Indicator */}
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-64 mx-auto">
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-primary animate-shimmer rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {displayChildren}
      </div>
    </>
  );
};

export default PageTransition;
