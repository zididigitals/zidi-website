import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, BarChart3, Cloud, Palette, Route, Compass, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consultancy() {
  useSEO({
    title: "Business Consultancy Services in India | Digital Transformation by Divyesh Bondapalli",
    description: "Expert business consultancy services by Zidi Digital Solutions. Get digital transformation, startup growth, and IT consultancy from Divyesh Bondapalli in Hyderabad, India.",
    keywords: "Business Consultancy Services in India, Digital Consultancy by Zidi Digital Solutions, Startup Growth Consultancy by Divyesh Bondapalli, IT Consultancy Services for Businesses, Business Strategy Consultant in India, Marketing Consultancy for Startups, Digital Transformation Consulting, Zidi Business Consultancy and Mentorship, Small Business Growth Solutions, Startup Mentorship by Divyesh Bondapalli, Business Consultancy Hyderabad, IT Consultancy Telangana, Digital Transformation Services India, Startup Growth Consultant, Business Strategy Consulting, Tech Consultancy Services, Digital Business Consultancy, Enterprise Consultancy India, SME Business Consultancy, Business Growth Consulting India, Digital Innovation Consultancy, Technology Strategy Consulting, Business Process Consulting, Zidi Digital Solutions Consulting, Divyesh Bondapalli Business Consultant",
    author: "Divyesh Bondapalli",
    canonicalPath: "/consultancy",
    ogTitle: "Business Consultancy Services in India | Digital Transformation by Divyesh Bondapalli",
    ogDescription: "Expert business consultancy services by Zidi Digital Solutions. Get digital transformation, startup growth, and IT consultancy from Divyesh Bondapalli in Hyderabad, India.",
    ogImage: "/logo.jpeg",
    ogUrl: "https://zididigitals.com/consultancy",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ServicePage",
      "name": "Business Consultancy Services by Zidi Digital Solutions",
      "description": "Expert business consultancy services by Zidi Digital Solutions. Get digital transformation, startup growth, and IT consultancy from Divyesh Bondapalli in Hyderabad, India.",
      "url": "https://zididigitals.com/consultancy",
      "provider": {
        "@type": "Organization",
        "name": "Zidi Digital Solutions",
        "alternateName": ["Zidi Digitals", "Zidi Digital Solutions India"],
        "description": "India's leading digital agency offering marketing, web development, internships, and consultancy services.",
        "url": "https://zididigitals.com",
        "logo": "https://zididigitals.com/logo.jpeg"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Consultancy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Strategy & Digital Transformation",
              "description": "Strategic business planning and digital transformation consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technology Stack Consultation",
              "description": "Expert technology consulting and stack optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product & MVP Roadmapping",
              "description": "Product strategy and minimum viable product planning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Audit & Enhancement",
              "description": "User interface and user experience consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cloud Infrastructure & Scalability",
              "description": "Cloud architecture and scalability planning"
            }
          }
        ]
      }
    }
  });

  return (
    <main>
      <section className="bg-gradient-hero">
        <div className="container max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Expert Guidance. Tailored Solutions.</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">From discovery to delivery, we align product strategy, technology, and design to unlock growth.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Schedule Your Consultation Today</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-accent"/> Business Consultancy
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary"/> Business Strategy & Digital Transformation</li>
                <li className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary"/> Technology Stack Consultation</li>
                <li className="flex items-center gap-2"><Route className="h-4 w-4 text-primary"/> Product & MVP Roadmapping</li>
                <li className="flex items-center gap-2"><Palette className="h-4 w-4 text-primary"/> UI/UX Audit & Enhancement</li>
                <li className="flex items-center gap-2"><Cloud className="h-4 w-4 text-primary"/> Cloud Infrastructure & Scalability</li>
                <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary"/> Data‑backed Decision Making</li>
              </ul>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Compass className="h-4 w-4 text-accent"/> Career Guidance for Students
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary"/> Career Path Planning & Mentorship</li>
                <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary"/> Skill Development & Portfolio Building</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-primary"/> Interview Preparation & Job Search Strategies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Our Consultancy Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">For Businesses:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Decades of combined industry experience</li>
                <li>✓ Proven track record with startups & enterprises</li>
                <li>✓ Actionable plans with measurable outcomes</li>
                <li>✓ End‑to‑end support through implementation</li>
              </ul>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-foreground mb-2">For Students:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Personalized guidance from industry experts</li>
                <li>✓ Practical insights into real-world career paths</li>
                <li>✓ Networking opportunities with professionals</li>
                <li>✓ Comprehensive support for career success</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { title: "1. Discovery Call", desc: "Understand your goals, context, and constraints." },
            { title: "2. Tailored Action Plan", desc: "Clear roadmap with priorities, scope, and timelines." },
            { title: "3. End‑to‑End Support", desc: "We guide execution with reviews and iteration." },
          ].map((s) => (
            <Card key={s.title} className="animate-fade-in-up">
              <CardHeader><CardTitle className="text-lg">{s.title}</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
