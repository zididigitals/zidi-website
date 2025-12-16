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

      {/* Floating Projects Marquee */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold">Recent Projects</h2>
          <Link to="/projects" className="text-primary text-sm font-medium hover:underline">View all</Link>
        </div>
        {(() => {
          const projects = [
            { src: "/media/projects/collabo.jpg", name: "Collabo" },
            { src: "/media/projects/pixel.jpg", name: "Pixel8" },
            { src: "/media/projects/ramky.jpg", name: "Ramky Infra and Developers pvt ltd " },
            { src: "/media/projects/visa%20now.jpg", name: "Visa Now" },
          ];
          const track = [...projects, ...projects];
          return (
            <div className="group marquee rounded-xl border border-border bg-secondary/50 p-3">
              <div className="marquee-track">
                {track.map((p, i) => (
                  <div key={`${p.name}-${i}`} className="flex-shrink-0 w-56 md:w-64">
                    <div className="rounded-lg bg-card border border-border shadow-sm overflow-hidden">
                      <img
                        src={p.src}
                        alt={`${p.name} project preview`}
                        className="w-full h-36 md:h-40 object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement as HTMLElement;
                          parent.innerHTML = `<div class='w-full h-36 md:h-40 bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center'><span class='text-sm md:text-base font-medium text-muted-foreground'>${p.name}</span></div>`;
                        }}
                      />
                      <div className="px-3 py-2 text-center">
                        <div className="text-xs md:text-sm font-medium text-foreground">{p.name}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>
    </main>
  );
}
