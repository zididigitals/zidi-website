import { ReactNode } from "react";
import VideoBackground from "@/components/VideoBackground";

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const VideoHero = ({ 
  title, 
  subtitle, 
  children, 
  className = "" 
}: VideoHeroProps) => {
  return (
    <VideoBackground className={`relative py-24 ${className}`} opacity={0.1}>
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.jpeg" 
              alt="Zidi Digital Solutions – Digital Marketing Agency Hyderabad | Divyesh Bondapalli" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {/* Additional content */}
          {children}
        </div>
      </div>
    </VideoBackground>
  );
};

export default VideoHero;
