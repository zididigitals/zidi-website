import { ReactNode } from "react";

interface CSSAnimatedBackgroundProps {
  children: ReactNode;
  variant?: "gradient-flow" | "floating-orbs" | "geometric" | "aurora";
  className?: string;
}

const CSSAnimatedBackground = ({ 
  children, 
  variant = "gradient-flow",
  className = "" 
}: CSSAnimatedBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5"></div>
      
      {/* Animation variants */}
      {variant === "gradient-flow" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-0 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-8000"></div>
          </div>
        </div>
      )}

      {variant === "floating-orbs" && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-2xl animate-float animation-delay-4000"></div>
          <div className="absolute bottom-10 right-1/3 w-36 h-36 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-2xl animate-float animation-delay-6000"></div>
          <div className="absolute top-1/3 left-1/3 w-44 h-44 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float animation-delay-8000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-float animation-delay-10000"></div>
        </div>
      )}

      {variant === "geometric" && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute top-0 right-0 w-48 h-48 border-2 border-accent/20 rotate-12 animate-spin-slow animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 border-2 border-primary/20 rotate-45 animate-spin-slow animation-delay-4000"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-accent/20 rotate-12 animate-spin-slow animation-delay-6000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-primary/10 rotate-45 animate-spin-slow animation-delay-8000"></div>
          </div>
          
          {/* Additional geometric elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent animate-pulse-slow animation-delay-3000"></div>
        </div>
      )}

      {variant === "aurora" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/10 to-transparent animate-aurora-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/10 to-transparent animate-aurora-2"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-aurora-3"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-aurora-4"></div>
        </div>
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CSSAnimatedBackground;
