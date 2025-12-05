import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
}

const VideoBackground = ({ 
  children, 
  className = "", 
  opacity = 0.1 
}: VideoBackgroundProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to play video
    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Video autoplay prevented:", error);
        // Fallback: show poster or static image
        setIsPlaying(false);
      }
    };

    // Play video when component mounts
    playVideo();

    // Handle visibility change to pause/play for performance
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      video.pause();
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity }}
        >
          <source src="/brand-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5"></div>
        </video>
        
        {/* Gradient Overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Play/Pause Indicator for debugging (optional) */}
      {!isPlaying && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
            Video Paused
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
