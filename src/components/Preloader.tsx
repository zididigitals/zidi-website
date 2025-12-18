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
    <div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
      style={{ backgroundImage: "none" }}
    >
      {/* Logo Only (no background video) */}
      <img
        src="/logo.png"
        alt="Zidi Digital Solutions"
        className="h-40 md:h-48 lg:h-56 w-auto animate-scale-up"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
    </div>
  );
};

export default Preloader;
