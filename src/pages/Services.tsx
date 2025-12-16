import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Settings, GraduationCap, Briefcase, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Product-Based Solutions",
    Icon: Package,
    subtitle: "Ready-to-Deploy Software Products",
    items: [
      "SaaS Products",
      "Mobile Applications",
      "E‑commerce Platforms",
      "Automation Suites",
    ],
    href: "/products",
  },
  {
    title: "Service-Based Solutions",
    Icon: Settings,
    subtitle: "Custom Development & Consulting",
    items: [
      "Custom Web Development",
      "Mobile App Development",
      "Cloud & DevOps",
      "API & Integrations",
    ],
    href: "/custom-solutions",
  },
  {
    title: "Training",
    Icon: GraduationCap,
    subtitle: "Job-Ready Skill Programs",
    items: [
      "Full‑Stack Bootcamps",
      "UI/UX Design Workshops",
      "Digital Marketing Mastery",
      "Interview Prep & Mentorship",
    ],
    href: "/services#training",
    id: "training",
  },
  {
    title: "Internship Opportunities",
    Icon: Briefcase,
    subtitle: "Professional Career Development",
    items: [
      "Live Project Internships",
      "Development & Marketing Tracks",
      "Mentorship & Reviews",
      "Certificates & Placement Support",
    ],
    href: "/internship",
  },
  {
    title: "Consultancy",
    Icon: Target,
    subtitle: "Strategy, Audits & Advisory",
    items: [
      "Product & Tech Strategy",
      "Architecture Reviews",
      "Process & Cost Optimization",
      "Go‑to‑Market Advisory",
    ],
    href: "/consultancy",
  },
];

export default function Services() {
  const navigate = useNavigate();
  useSEO({
    title: "Digital Services by Zidi Digital Solutions | Web Development, Marketing, Internships",
    description: "Comprehensive digital services including product development, web development, digital marketing, internships, and business consultancy. Transform your business with Zidi Digital Solutions.",
    keywords: "Digital Services by Zidi Digital Solutions, Product Development Company India, Web Development Services India, App Development Company by Zidi, UI/UX Design and Development, E-commerce Website Development Services, Software Development Solutions, Custom Web Solutions for Startups, Business Digitalization Services, IT Services and Solutions by Zidi, Tech Consultancy for Enterprises, End-to-End Digital Solutions by Divyesh Bondapalli, Best Digital Marketing Company in India, Zidi Digital Marketing Agency, Digital Marketing Services by Zidi Digital Solutions, SEO Services by Zidi Digital Solutions, Social Media Marketing Agency India, Branding and Marketing Services by Divyesh Bondapalli, Zidi Digital Advertising Solutions, Content Marketing Agency India, Influencer Marketing and Brand Promotion, PPC Advertising and Campaign Management, Online Reputation Management Services, Digital Marketing Internships in India, Internship Program by Zidi Digital Solutions, Web Development Internships for Students, B.Tech Student Internship Program, Learn Digital Marketing with Zidi Digitals, Internship Opportunities by Divyesh Bondapalli, Skill Development and Training Program India, Career Growth with Zidi Digital Solutions, IT Internships for Freshers in India, Student Internship in Tech and Marketing, Business Consultancy Services in India, Digital Consultancy by Zidi Digital Solutions, Startup Growth Consultancy by Divyesh Bondapalli, IT Consultancy Services for Businesses, Business Strategy Consultant in India, Marketing Consultancy for Startups, Digital Transformation Consulting, Zidi Business Consultancy and Mentorship, Small Business Growth Solutions, Startup Mentorship by Divyesh Bondapalli",
    author: "Divyesh Bondapalli",
    canonicalPath: "/services",
    ogTitle: "Digital Services by Zidi Digital Solutions | Web Development, Marketing, Internships",
    ogDescription: "Comprehensive digital services including product development, web development, digital marketing, internships, and business consultancy. Transform your business with Zidi Digital Solutions.",
    ogImage: "/logo.jpeg",
    ogUrl: "https://zididigitals.com/services",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ServicePage",
      "name": "Digital Services by Zidi Digital Solutions",
      "description": "Comprehensive digital services including product development, web development, digital marketing, internships, and business consultancy. Transform your business with Zidi Digital Solutions.",
      "url": "https://zididigitals.com/services",
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
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product-Based Solutions",
              "description": "SaaS Products, Mobile Applications, E‑commerce Platforms, Automation Suites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Service-Based Solutions",
              "description": "Custom Web Development, Mobile App Development, Cloud & DevOps, API & Integrations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Training",
              "description": "Full‑Stack Bootcamps, UI/UX Design Workshops, Digital Marketing Mastery, Interview Prep & Mentorship"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internship Opportunities",
              "description": "Live Project Internships, Development & Marketing Tracks, Mentorship & Reviews, Certificates & Placement Support"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultancy",
              "description": "Product & Tech Strategy, Architecture Reviews, Process & Cost Optimization, Go‑to‑Market Advisory"
            }
          }
        ]
      }
    }
  });

  return (
    <main className="bg-gradient-hero">
      <section className="container max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-primary text-sm font-medium tracking-wide">OUR SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Built for Impact, Designed for Growth</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">End‑to‑end capabilities to plan, build, and scale digital products and brands.</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map(({ title, subtitle, Icon, items, href, id }) => (
            <Card
              key={title}
              id={id}
              className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group h-full flex flex-col"
            >
              <CardContent className="p-7 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-1">{title}</h3>
                    {subtitle && <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>}
                  </div>
                </div>

                {/* Features */}
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {href && (
                  <div className="mt-auto">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 font-medium rounded-lg transition-all duration-300 group-hover:shadow-primary"
                      onClick={() => navigate(href)}
                    >
                      Learn More
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
