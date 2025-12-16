import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Code2, Cloud, Smartphone, Workflow, ClipboardCheck, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CustomSolutions = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Service-Based Solutions | Custom Development & Consulting | Zidi",
    description: "Tailored web, mobile, and cloud solutions built to your requirements. From discovery to delivery, we ship reliable, scalable software.",
    canonicalPath: "/custom-solutions",
  });

  const capabilities = [
    { icon: Code2, title: "Custom Web Development", desc: "Modern, secure, and performant web apps built around your workflows." },
    { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform apps with native-like UX and robust performance." },
    { icon: Cloud, title: "Cloud & DevOps", desc: "CI/CD, observability, and scalable cloud architectures for uptime and speed." },
  ];

  const process = [
    { step: "1", title: "Discovery", desc: "We align on goals, users, and success metrics." },
    { step: "2", title: "Solution Design", desc: "Architecture, data models, and a pragmatic delivery plan." },
    { step: "3", title: "Implementation", desc: "Iterative development with weekly demos and clear milestones." },
    { step: "4", title: "QA & Launch", desc: "Automated testing, performance checks, and a smooth release." },
    { step: "5", title: "Support & Scale", desc: "Monitoring, improvements, and roadmap planning." },
  ];

  const motives = [
    { title: "Impact Over Output", desc: "We prioritize outcomes—customer value and business metrics—over feature count." },
    { title: "Engineering Excellence", desc: "Clean architecture, performance, and maintainability at every layer." },
    { title: "Trusted Partnership", desc: "We act as an extension of your team with shared accountability." },
  ];

  const teamwork = [
    { title: "Embedded Collaboration", desc: "PM, Design, and Engineering collaborate daily with your stakeholders." },
    { title: "Quality Gates", desc: "Code reviews, CI pipelines, and test coverage keep releases safe." },
    { title: "Clear Communication", desc: "Regular updates, transparent risks, and early feedback loops." },
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Settings className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">SERVICE-BASED SOLUTIONS</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">Custom Development & Consulting</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Tailored software built for your business. We translate requirements into reliable, scalable, and maintainable products.
          </p>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {capabilities.map((c, i) => (
            <Card key={i} className="bg-card border-border text-left">
              <CardContent className="p-6">
                <c.icon className="h-7 w-7 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-card-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Workflow className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Our Delivery Process</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="text-primary text-sm font-semibold mb-1">Step {p.step}</div>
                  <div className="text-card-foreground font-medium">{p.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Motives */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Company Motives</h2>
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
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Strong Teamwork</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamwork.map((t, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground" onClick={() => navigate('/contact')}>
            <ClipboardCheck className="h-4 w-4 mr-2" />
            Get a Free Consultation
          </Button>
          <p className="text-xs text-muted-foreground">Prefer email? Write to us at zididigitals@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
