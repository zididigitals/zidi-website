import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Globe, Code, Users, Target, TrendingUp, Shield, Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CSSAnimatedBackground from "@/components/CSSAnimatedBackground";

export default function Landing({ onSkip }: { onSkip?: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Skip Button */}
      {onSkip && (
        <button
          onClick={onSkip}
          className="fixed top-8 right-8 z-50 px-6 py-3 bg-background/80 backdrop-blur-sm border border-border/30 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 group"
        >
          Skip to Website
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <CSSAnimatedBackground variant="gradient-flow" className="absolute inset-0">
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float animation-delay-4000"></div>
        </CSSAnimatedBackground>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Animated Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <img 
                  src="/logo.jpeg" 
                  alt="Zidi Digital Solutions Logo – Founded by Divyesh Bondapalli | Digital Marketing India" 
                  className="h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-primary opacity-0 group-hover:opacity-100 animate-spin" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Transforming Ideas Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient-flow">
                Digital Excellence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              We empower businesses with <span className="text-primary font-semibold">cutting-edge products</span>, 
              <span className="text-accent font-semibold"> comprehensive services</span>, and 
              <span className="text-primary font-semibold"> digital transformation</span> that drives real results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Users, label: "Happy Clients", value: "500+" },
                { icon: Code, label: "Projects Delivered", value: "1000+" },
                { icon: Target, label: "Success Rate", value: "98%" },
                { icon: TrendingUp, label: "Years Experience", value: "5+" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-background/50 backdrop-blur-sm rounded-xl p-4 border border-border/30 transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/25">
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

            {/* Scroll Indicator */}
            <button
              onClick={scrollToContent}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}