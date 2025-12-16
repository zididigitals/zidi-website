import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, Megaphone, ArrowLeft, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Marketing = () => {
  const navigate = useNavigate();
  useSEO({
    title: "Digital Marketing | Zidi Digital Solutions",
    description: "Data-driven SEO, social media, PPC, and performance analytics to grow your business.",
    canonicalPath: "/marketing",
  });

  const items = [
    { icon: Megaphone, title: "Social Media Management", desc: "Consistent brand voice and engagement across platforms." },
    { icon: BarChart3, title: "SEO & Content", desc: "On-page optimization and content strategies that rank." },
    { icon: Target, title: "PPC Advertising", desc: "High-ROI campaigns with precise targeting and tracking." },
  ];

  const approach = [
    { title: "Research", desc: "Market, competitors, and audience insights drive strategy." },
    { title: "Experimentation", desc: "Rapid testing to validate creative and channels." },
    { title: "Optimization", desc: "Iterate based on data for steady growth." },
  ];

  const motives = [
    { title: "Growth Mindset", desc: "We focus on measurable outcomes: leads, revenue, and retention." },
    { title: "Ethical Marketing", desc: "Transparent practices with customer trust at the center." },
    { title: "Long-Term Value", desc: "Sustainable strategies over short-lived spikes." },
  ];

  const teamwork = [
    { title: "Aligned Goals", desc: "Marketing and sales operate with shared KPIs and feedback loops." },
    { title: "Creative + Data", desc: "We blend creativity with analytics to maximize performance." },
    { title: "Continuous Learning", desc: "We iterate fast and document learnings for compounding gains." },
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
            <Target className="h-4 w-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">DIGITAL MARKETING</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">Data-Driven Growth Strategies</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Convert prospects into customers with strategies backed by analytics and experimentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={i} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <it.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Marketing Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((a, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Motives */}
        <div className="mt-10">
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
        <div className="mt-10">
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

        <div className="flex justify-center mt-10">
          <Button size="lg" className="bg-primary text-primary-foreground" onClick={() => navigate('/contact')}>
            Discuss Your Growth Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
