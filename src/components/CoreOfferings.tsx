import { ArrowRight, Package, Settings, Target, GraduationCap, CheckCircle2, Building2, Rocket, TrendingUp, Users2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const CoreOfferings = () => {
  const navigate = useNavigate();
  const offerings = [
    {
      icon: Package,
      title: "Product-Based Solutions",
      subtitle: "Ready-to-Deploy Software Products",
      description: "Enterprise-grade software solutions designed to accelerate your business operations with minimal setup time and maximum efficiency.",
      features: ["SaaS Platforms", "Mobile Applications", "E-commerce Solutions", "Business Automation"],
      ctaText: "Explore Products",
      href: "/products"
    },
    {
      icon: Settings,
      title: "Service-Based Solutions", 
      subtitle: "Custom Development & Consulting",
      description: "Tailored development services built from the ground up to meet your unique business requirements with full-stack expertise.",
      features: ["Custom Web Development", "Mobile App Development", "Cloud Solutions", "Technical Consulting"],
      ctaText: "Get Custom Solution",
      href: "/custom-solutions"
    },
    {
      icon: GraduationCap,
      title: "Training",
      subtitle: "Job-Ready Skill Programs", 
      description: "Structured training in development, design, and marketing with real projects, assessments, and certifications to make you job-ready.",
      features: ["Full-Stack Bootcamps", "UI/UX Design Workshops", "Digital Marketing Mastery", "Interview Prep & Mentorship"],
      ctaText: "Explore Training",
      href: "/services"
    },
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      subtitle: "Professional Career Development",
      description: "Comprehensive internship programs with real-world project experience, mentorship, and industry exposure to launch your tech career.",
      features: ["Full-Stack Development", "Digital Marketing", "Professional Workshops", "Career Mentorship"],
      ctaText: "Apply for Program",
      href: "/internship"
    },
    {
      icon: Target,
      title: "Consultancy",
      subtitle: "Strategy, Audits & Advisory", 
      description: "Expert guidance on product strategy, technical architecture, and go-to-market—backed by hands-on experience and measurable outcomes.",
      features: ["Product & Tech Strategy", "Architecture Reviews", "Process & Cost Optimization", "Go‑to‑Market Advisory"],
      ctaText: "Book Consultancy",
      href: "/consultancy"
    }
  ];

  const stats = [
    { icon: Building2, number: "100+", label: "Projects Delivered", description: "Successful implementations" },
    { icon: Users2, number: "50+", label: "Happy Clients", description: "Long-term partnerships" },
    { icon: Rocket, number: "25+", label: "Careers Launched", description: "Professional growth" },
    { icon: TrendingUp, number: "24/7", label: "Support", description: "Always available" }
  ];

  return (
    <section className="py-20 bg-gradient-secondary relative">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium tracking-wide">OUR CORE OFFERINGS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From innovative products to custom development, strategic marketing, and career advancement—we provide end-to-end solutions for your success.
          </p>
        </div>

        {/* Core Offerings Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {offerings.map((offering, index) => {
            const isLast = index === offerings.length - 1;
            return (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg animate-scale-in group ${isLast ? 'lg:col-span-2 max-w-2xl mx-auto' : ''}`} 
                style={{animationDelay: `${index * 150}ms`}}
              >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20">
                    <offering.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{offering.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{offering.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {offering.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {offering.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-card-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 font-medium rounded-lg transition-all duration-300 group-hover:shadow-primary"
                  onClick={() => offering.href && navigate(offering.href)}
                >
                  {offering.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/20 transition-all duration-300 text-center p-6 animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-card-foreground mb-1">{stat.number}</div>
              <div className="text-sm font-medium text-card-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};