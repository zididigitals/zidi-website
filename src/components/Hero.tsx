import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import CSSAnimatedBackground from "@/components/CSSAnimatedBackground";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <CSSAnimatedBackground variant="gradient-flow" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Additional animated elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Mission statement badge */}
          <div className="mb-8 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-primary text-sm font-medium tracking-wide">
              🚀 INNOVATION • TRUST • EXCELLENCE
            </span>
          </div>
          
          {/* Main mission-driven headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Transforming Ideas Into
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
              Digital Success Stories
            </span>
          </h1>
          
          {/* Clear mission subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We deliver <span className="text-primary font-semibold">cutting-edge products</span>, 
            <span className="text-accent font-semibold"> comprehensive services</span>, 
            <span className="text-primary font-semibold"> powerful marketing</span>, and 
            <span className="text-accent font-semibold"> career opportunities</span> that drive real results.
          </p>
          
          {/* Strong CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25 animate-glow">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <Link to="/internship">
                Join Our Team
                <Rocket className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </CSSAnimatedBackground>
  );
};