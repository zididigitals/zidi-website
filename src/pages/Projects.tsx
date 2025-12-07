import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Pixxel 8",
    description: "A cutting-edge digital platform designed with modern UI/UX principles and optimized for seamless user engagement.",
    services: ["Web Design", "Digital Marketing", "UI/UX Development"],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    logo: "/media/projects/pixel.jpg",
    highlights: [
      "Responsive Design",
      "SEO Optimized",
      "Performance Focused"
    ]
  },
  {
    id: 2,
    name: "Collabo",
    description: "A collaborative workspace solution featuring intuitive design and comprehensive digital marketing strategy to drive user adoption.",
    services: ["Web Design", "Digital Marketing", "Brand Strategy"],
    icon: Megaphone,
    color: "from-purple-500 to-pink-500",
    logo: "/media/projects/collabo.jpg",
    highlights: [
      "User-Centric Design",
      "Marketing Campaign",
      "Community Building"
    ]
  },
  {
    id: 3,
    name: "Visa Now",
    description: "Professional visa services platform with streamlined user experience and targeted digital marketing to reach global audiences.",
    services: ["Web Design", "Digital Marketing", "User Experience"],
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    logo: "/media/projects/visa now.jpg",
    highlights: [
      "Multi-language Support",
      "Conversion Optimized",
      "Mobile First"
    ]
  },
  {
    id: 4,
    name: "Ramky Infra",
    description: "Enterprise infrastructure solutions website showcasing projects with professional design and strategic digital marketing initiatives.",
    services: ["Web Design", "Digital Marketing", "Corporate Branding"],
    icon: Globe,
    color: "from-orange-500 to-red-500",
    logo: "/media/projects/ramky.jpg",
    highlights: [
      "Enterprise Grade",
      "Portfolio Showcase",
      "Lead Generation"
    ]
  }
];

export default function Projects() {
  useSEO({
    title: "Our Projects | Zidi Digital Solutions | Web Design & Digital Marketing Portfolio",
    description: "Explore our successful projects including Pixxel 8, Collabo, Visa Now, and Ramky Infra. See how we deliver exceptional web design and digital marketing solutions.",
    keywords: "Zidi Digital Projects, Web Design Portfolio, Digital Marketing Case Studies, Pixxel 8, Collabo, Visa Now, Ramky Infra, Project Portfolio, Web Development Projects, Digital Marketing Success Stories",
    author: "Divyesh Bondapalli",
    canonicalPath: "/projects",
    ogTitle: "Our Projects | Zidi Digital Solutions | Web Design & Digital Marketing Portfolio",
    ogDescription: "Explore our successful projects including Pixxel 8, Collabo, Visa Now, and Ramky Infra. See how we deliver exceptional web design and digital marketing solutions.",
    ogImage: "/logo.jpeg",
    ogUrl: "https://zididigitals.com/projects",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Our Projects",
      "description": "Portfolio of successful web design and digital marketing projects by Zidi Digital Solutions",
      "url": "https://zididigitals.com/projects",
      "publisher": {
        "@type": "Organization",
        "name": "Zidi Digital Solutions",
        "logo": "https://zididigitals.com/logo.jpeg"
      }
    }
  });

  return (
    <main className="container max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <header className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Our Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover how we've transformed businesses through innovative web design and strategic digital marketing solutions. Each project represents our commitment to excellence and measurable results.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card 
              key={project.id} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50"
            >
              {/* Creative Header with Logo */}
              <div className={`relative h-40 bg-gradient-to-r ${project.color} opacity-90 group-hover:opacity-100 transition-opacity overflow-hidden flex items-center justify-center`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="h-32 w-32 absolute -right-8 -top-8 text-white/30" />
                </div>
                
                {/* Logo Container */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-150"></div>
                    <img 
                      src={project.logo} 
                      alt={project.name}
                      className="h-24 w-24 object-contain rounded-lg shadow-lg relative z-10 bg-white/10 p-2 backdrop-blur-sm border border-white/20"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="text-2xl">{project.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Services Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Badge 
                      key={service} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>

                {/* Highlights */}
                <div className="pt-2 border-t">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 text-center border border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Let's collaborate to create something extraordinary. Our team of experts is ready to bring your vision to life with cutting-edge web design and strategic digital marketing.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg">
            Get in Touch
          </button>
        </Link>
      </section>
    </main>
  );
}
