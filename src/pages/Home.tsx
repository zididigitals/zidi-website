import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  useSEO({
    title: "Zidi Digital Solutions — Empowering the Digital Future",
    description: "Product innovation, service excellence, digital marketing, and internships.",
    canonicalPath: "/",
  });

  return (
    <main className="container max-w-6xl mx-auto px-6 py-16">
      <header className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Empowering the Digital Future – One Solution at a Time
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          A product + service technology company trusted by startups and enterprises.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Button asChild><Link to="/contact">Get a Quote</Link></Button>
          <Button asChild variant="secondary"><Link to="/internship">Apply for Internship</Link></Button>
        </div>
      </header>

      <section className="mt-14 grid sm:grid-cols-3 gap-4">
        <Card className="animate-fade-in">
          <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent"/> Cutting‑Edge Technology</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">Modern stacks and proven engineering</CardContent>
        </Card>
        <Card className="animate-fade-in" style={{animationDelay:'0.05s'}}>
          <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Users className="h-4 w-4 text-accent"/> Student‑First Culture</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">Mentorship and real projects</CardContent>
        </Card>
        <Card className="animate-fade-in" style={{animationDelay:'0.1s'}}>
          <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Wrench className="h-4 w-4 text-accent"/> End‑to‑End Execution</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">From discovery to delivery</CardContent>
        </Card>
      </section>
    </main>
  );
}
