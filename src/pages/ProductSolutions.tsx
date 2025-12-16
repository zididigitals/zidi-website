import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle2, ArrowLeft, ClipboardCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductSolutions = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Product-Based Solutions | Zidi Digital Solutions",
    description: "Explore Zidi's ready-to-deploy software products: SaaS platforms, mobile apps, e-commerce, and business automation.",
    canonicalPath: "/products",
  });

  const products = [
    { title: "SaaS Platforms", description: "Scalable, subscription-based solutions tailored to your workflows." },
    { title: "Mobile Applications", description: "Cross-platform apps with modern UX and robust performance." },
    { title: "E-commerce Solutions", description: "High-conversion storefronts, secure payments, and analytics." },
    { title: "Business Automation", description: "Automate repetitive tasks to save time and reduce errors." },
  ];

  const benefits = [
    { title: "Fast Time-to-Value", desc: "Deploy quickly with pre-built modules and integrations." },
    { title: "Scalable Architecture", desc: "Cloud-native designs that grow with your business." },
    { title: "Lower Total Cost", desc: "Reduce custom build needs and maintenance overhead." },
  ];

  const motives = [
    { title: "Customer-Centric Design", desc: "We build products that solve real business problems with measurable outcomes." },
    { title: "Reliability First", desc: "Uptime, performance, and security are core to every release." },
    { title: "Continuous Improvement", desc: "Feedback loops and data guide our product roadmap and iterations." },
  ];

  const teamPrinciples = [
    { title: "Cross-Functional Collaboration", desc: "Product, design, and engineering ship together with shared goals." },
    { title: "Quality Engineering", desc: "Automated tests, code reviews, and observability keep regressions low." },
    { title: "Transparent Delivery", desc: "Clear milestones, weekly demos, and proactive communication." },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Back + Contact */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button className="bg-primary text-primary-foreground" onClick={() => navigate('/contact')}>
            <ClipboardCheck className="h-4 w-4 mr-2" />
            Get in Contact
          </Button>
        </div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Package className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">PRODUCT-BASED SOLUTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">Ready-to-Deploy Software Products</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Accelerate operations with enterprise-grade products designed for rapid onboarding and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {products.map((p, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose Our Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Motives */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Motives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {motives.map((m, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strong Teamwork */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Strong Teamwork</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamPrinciples.map((t, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground" onClick={() => navigate('/contact')}>
            Request a Product Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSolutions;
