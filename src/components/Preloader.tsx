import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo Only */}
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
  );
};

export default Preloader;
