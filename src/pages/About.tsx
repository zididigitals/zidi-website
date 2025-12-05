import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Award, Rocket, Calendar, TrendingUp, Target, Users, Lightbulb, Code, Briefcase, Linkedin, Mail, ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState<string | null>(null);

  useSEO({
    title: "About Divyesh Bondapalli – Founder of Zidi Digital Solutions | Our Journey",
    description: "Learn about Divyesh Bondapalli, the young entrepreneur who founded Zidi Digital Solutions. Discover our mission, vision, and journey of digital innovation since 2022.",
    keywords: "About Divyesh Bondapalli, Zidi Digital Solutions Founder, Divyesh Bondapalli Digital Entrepreneur, Young Entrepreneur Divyesh Bondapalli, Zidi Digital Solutions by Divyesh Bondapalli, Mr. Divyesh Bondapalli CEO of Zidi Digital Solutions, Zidi Digitals Founded by Divyesh Bondapalli, About Zidi Digital Solutions, Zidi Digital Solutions Journey, Digital Entrepreneur India, Tech Founder Hyderabad, Student Entrepreneur India, Zidi Digital Solutions Official Website, Zidi Digital Solutions India, Zidi Digital Solutions – Digitally Different",
    author: "Divyesh Bondapalli",
    canonicalPath: "/about",
    ogTitle: "About Divyesh Bondapalli – Founder of Zidi Digital Solutions",
    ogDescription: "Learn about Divyesh Bondapalli, the young entrepreneur who founded Zidi Digital Solutions. Discover our mission, vision, and journey of digital innovation since 2022.",
    ogImage: "/divyesh-bondapalli.jpg",
    ogUrl: "https://zididigitals.com/about",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Zidi Digital Solutions and Founder Divyesh Bondapalli",
      "description": "Learn about Divyesh Bondapalli, the young entrepreneur who founded Zidi Digital Solutions. Discover our mission, vision, and journey of digital innovation since 2022.",
      "url": "https://zididigitals.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Zidi Digital Solutions",
        "alternateName": ["Zidi Digitals", "Zidi Digital Solutions India"],
        "description": "India's leading digital agency offering marketing, web development, internships, and consultancy services.",
        "url": "https://zididigitals.com",
        "logo": "https://zididigitals.com/logo.jpeg",
        "foundingDate": "2022",
        "founder": {
          "@type": "Person",
          "name": "Divyesh Bondapalli",
          "jobTitle": "CEO & Founder",
          "description": "Young entrepreneur and digital innovator, founder of Zidi Digital Solutions",
          "image": "https://zididigitals.com/divyesh-bondapalli.jpg",
          "sameAs": [
            "https://linkedin.com/in/divyesh-bondapalli-99aa22292",
            "https://instagram.com/divyesh_bondapalli",
            "https://facebook.com/divyesh.bondapalli",
            "https://x.com/mrdiv124"
          ]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hyderabad",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500001",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 7416 665 003",
          "contactType": "customer service",
          "email": "zididigitals@gmail.com"
        }
      }
    }
  });

  return (
    <main>
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Zidi Digital Solutions</h1>
          <p className="text-muted-foreground mt-4">We are a product + service technology company helping startups to enterprises launch, scale, and win in the digital era.</p>
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Empowering the digital future through cutting‑edge solutions, thoughtful design, and reliable delivery.
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Become the most trusted innovation partner, and a launchpad for the next generation of tech leaders.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-hero">
        <div className="container max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-start">
            {/* Founder Image */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-xl border border-border bg-card shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="/src/media/IMG-20251205-WA0008.jpg" 
                  alt="Divyesh Bondapalli – Founder & CEO of Zidi Digital Solutions | Young Entrepreneur India" 
                  className="w-full h-80 object-contain object-top rounded-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-64 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"><div class="text-4xl font-bold text-primary">DB</div></div>';
                  }}
                />
                {/* Quick Info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Founded</span>
                    <span className="font-medium text-primary">2022</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Role</span>
                    <span className="font-medium text-accent">CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div className="space-y-6">
              {/* Brief Overview */}
              <Card className="shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Mr. Divyesh Bondapalli
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-xs text-success font-medium">Active</span>
                    </div>
                  </div>
                  <p className="text-lg text-primary font-medium">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground italic">Also known as Mr. Div</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      A young and dynamic entrepreneur driven by innovation, technology, and a passion for creating digital excellence. 
                      Founded Zidi Digital Solutions in 2022 while pursuing B.Tech in Computer Science, transforming a student project 
                      into one of the fastest-growing digital companies committed to shaping the future of businesses and careers across industries.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Lightbulb className="h-3 w-3 mr-1" /> Visionary Leader
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Rocket className="h-3 w-3 mr-1" /> Tech Innovator
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        <Target className="h-3 w-3 mr-1" /> Student Entrepreneur
                      </span>
                    </div>

                    {/* Show More/Less Button */}
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm group"
                    >
                      <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                      ) : (
                        <ChevronDown className="h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="space-y-6">
                  {/* The Spark Section */}
                  <Card className="shadow-md border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                        The Spark that Started It All
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Divyesh's journey began with a simple yet powerful idea — to build a platform that bridges the gap between 
                        businesses, technology, and talent. During his college years, he noticed how small businesses and students 
                        often struggled to find the right digital support and career direction.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        With determination and self-learning, he turned his vision into reality — <strong>Zidi Digital Solutions</strong> — 
                        a company built on the belief of being <span className="text-primary font-medium">"Digitally Different."</span>
                      </p>
                    </CardContent>
                  </Card>

                  {/* About Zidi Section */}
                  <Card className="shadow-md border-l-4 border-l-accent">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Rocket className="h-5 w-5 mr-2 text-accent" />
                        About Zidi Digital Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Under the leadership of Divyesh Bondapalli, Zidi Digital Solutions has evolved into a multi-service powerhouse offering:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong className="text-foreground">Product-Based Solutions</strong>
                            <p className="text-sm text-muted-foreground">Creating innovative digital products that simplify life and business</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong className="text-foreground">Service-Based Solutions</strong>
                            <p className="text-sm text-muted-foreground">Custom digital services tailored for startups, enterprises, and entrepreneurs</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong className="text-foreground">Digital Marketing</strong>
                            <p className="text-sm text-muted-foreground">Data-driven marketing strategies to enhance online presence and brand value</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong className="text-foreground">Internships & Training</strong>
                            <p className="text-sm text-muted-foreground">Providing real-world exposure to students and helping them shape their professional future</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <strong className="text-foreground">Business Consultancy</strong>
                            <p className="text-sm text-muted-foreground">Guiding companies and startups with actionable insights to accelerate growth</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        Zidi stands for <span className="text-primary font-medium">creativity, innovation, and transformation</span> — 
                        values that Mr. Divyesh has embedded into the company's DNA.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Vision & Mission */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="shadow-md bg-gradient-to-br from-primary/5 to-primary/10">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Vision
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          To make technology accessible and impactful for every business and individual by driving innovation 
                          and delivering meaningful digital experiences.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="shadow-md bg-gradient-to-br from-accent/5 to-accent/10">
                      <CardHeader>
                        <CardTitle className="text-lg text-accent flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          Mission
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          To empower organizations and individuals through cutting-edge technology, creative strategies, 
                          and continuous learning.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Leadership Philosophy */}
                  <Card className="shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        The Leadership Philosophy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Mr. Divyesh believes that <strong className="text-foreground">success is not built overnight</strong> — 
                        it's crafted with consistency, curiosity, and courage.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        His leadership style blends <span className="text-primary font-medium">innovation, empathy, and ambition</span>, 
                        motivating every team member at Zidi to push limits and deliver excellence.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Inspiring Next Generation */}
                  <Card className="shadow-md border-l-4 border-l-success">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-success" />
                        Inspiring the Next Generation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        As a young tech founder, Divyesh Bondapalli continues to inspire students, entrepreneurs, and professionals 
                        to chase their dreams and turn ideas into impactful realities. Through Zidi Digital Solutions, he envisions 
                        building a digital ecosystem that not only helps businesses grow but also nurtures the next generation of tech leaders.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Connect Section */}
                  <Card className="shadow-md bg-gradient-to-br from-background to-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Connect with Divyesh Bondapalli
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Stay inspired and follow his journey as he continues to innovate and transform the digital world
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Social Links */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <a
                            href="https://linkedin.com/in/divyesh-bondapalli-99aa22292"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
                          >
                            <Linkedin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-medium text-primary">LinkedIn</span>
                          </a>
                          <a
                            href="https://instagram.com/divyesh_bondapalli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                          >
                            <div className="h-4 w-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded group-hover:scale-110 transition-transform"></div>
                            <span className="text-sm font-medium text-accent">Instagram</span>
                          </a>
                          <a
                            href="https://facebook.com/divyesh.bondapalli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors group"
                          >
                            <div className="h-4 w-4 bg-blue-600 rounded group-hover:scale-110 transition-transform"></div>
                            <span className="text-sm font-medium text-blue-600">Facebook</span>
                          </a>
                          <a
                            href="https://x.com/mrdiv124"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 p-3 rounded-lg bg-gray-500/10 hover:bg-gray-500/20 transition-colors group"
                          >
                            <div className="h-4 w-4 bg-black rounded group-hover:scale-110 transition-transform"></div>
                            <span className="text-sm font-medium text-gray-600">X (Twitter)</span>
                          </a>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border">
                          <a
                            href="mailto:zididigitals@gmail.com"
                            className="flex items-center space-x-2 p-3 rounded-lg bg-success/10 hover:bg-success/20 transition-colors group flex-1"
                          >
                            <Mail className="h-4 w-4 text-success group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                              <p className="text-sm font-medium text-success">Email</p>
                              <p className="text-xs text-muted-foreground">zididigitals@gmail.com</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-secondary py-20">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a vision to reality, we've been transforming businesses through innovation and excellence since 2022.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2022 - The Foundation */}
              <div className="relative flex items-center md:space-x-8">
                <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-scale-in">
                    <div className="flex items-center justify-between mb-4 md:justify-end">
                      <span className="text-sm font-medium text-primary md:hidden">2022</span>
                      <div className="hidden md:flex items-center space-x-2 text-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">2022</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">The Foundation</h3>
                    <p className="text-muted-foreground mb-4">
                      Zidi Digital Solutions was born with a clear mission: to bridge the gap between innovative ideas and digital execution.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Lightbulb className="h-3 w-3 mr-1" /> Vision Established
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Target className="h-3 w-3 mr-1" /> Mission Defined
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg order-1 md:order-2 -translate-x-1/2 md:translate-x-0">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                </div>
                
                <div className="flex-1 order-3 md:order-3"></div>
              </div>

              {/* 2023 - Growth & Expansion */}
              <div className="relative flex items-center md:space-x-8">
                <div className="flex-1 order-2 md:order-1"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg order-1 md:order-2 -translate-x-1/2 md:translate-x-0">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
                </div>
                
                <div className="flex-1 md:pl-8 order-3 md:order-3">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-accent/20 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-accent">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">2023</span>
                      </div>
                      <span className="text-sm font-medium text-accent md:hidden">2023</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Growth & Expansion</h3>
                    <p className="text-muted-foreground mb-4">
                      Expanded our service portfolio and delivered 25+ successful projects across diverse industries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        <TrendingUp className="h-3 w-3 mr-1" /> 25+ Projects
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Users className="h-3 w-3 mr-1" /> Team Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2024 - Innovation & Excellence */}
              <div className="relative flex items-center md:space-x-8">
                <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
                    <div className="flex items-center justify-between mb-4 md:justify-end">
                      <span className="text-sm font-medium text-primary md:hidden">2024</span>
                      <div className="hidden md:flex items-center space-x-2 text-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">2024</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Innovation & Excellence</h3>
                    <p className="text-muted-foreground mb-4">
                      Launched cutting-edge digital solutions and established ourselves as a trusted technology partner.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Rocket className="h-3 w-3 mr-1" /> Product Launch
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                        <Award className="h-3 w-3 mr-1" /> Excellence Award
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg order-1 md:order-2 -translate-x-1/2 md:translate-x-0">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                </div>
                
                <div className="flex-1 order-3 md:order-3"></div>
              </div>

              {/* 2025 - Future Forward */}
              <div className="relative flex items-center md:space-x-8">
                <div className="flex-1 order-2 md:order-1"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg order-1 md:order-2 -translate-x-1/2 md:translate-x-0">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
                </div>
                
                <div className="flex-1 md:pl-8 order-3 md:order-3">
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-accent/30 transition-all duration-300 animate-scale-in" style={{animationDelay: '0.6s'}}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-accent">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">2025</span>
                      </div>
                      <span className="text-sm font-medium text-accent md:hidden">2025</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Future Forward</h3>
                    <p className="text-muted-foreground mb-4">
                      Empowering the next generation of tech leaders through innovative solutions and comprehensive training programs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Target className="h-3 w-3 mr-1" /> Next-Gen Talent
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Lightbulb className="h-3 w-3 mr-1" /> Digital Innovation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Stats */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <TrendingUp className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">
                3+ Years of Excellence • 50+ Happy Clients • 100+ Projects Delivered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving Zidi Digital Solutions forward with expertise, innovation, and excellence.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Divyesh - CEO */}
            <div className="group cursor-pointer" onClick={() => setSelectedTeamMember("divyesh")}>
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      <img src="/src/media/team/ceo.jpg" alt="Divyesh Bondapalli" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Divyesh Bondapalli</h3>
                <p className="text-sm font-medium text-primary mb-2">CEO & Founder</p>
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-300">Vision-driven founder leading company strategy and innovation.</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                  View Profile →
                </div>
              </div>
            </div>

            {/* P. Neelambika - COO */}
            <div className="group cursor-pointer" onClick={() => setSelectedTeamMember("neelambika")}>
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      <img src="/src/media/team/coo.jpg" alt="P. Neelambika" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">Neelambika</h3>
                <p className="text-sm font-medium text-accent mb-2">Chief Operating Officer</p>
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-300">Operations expert ensuring smooth execution across departments.</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                  View Profile →
                </div>
              </div>
            </div>

            {/* Ganesh Reddy - CTO */}
            <div className="group cursor-pointer" onClick={() => setSelectedTeamMember("ganesh")}>
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      <img src="/src/media/team/cto.jpg" alt="Ganesh Reddy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">Ganesh</h3>
                <p className="text-sm font-medium text-primary mb-2">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-300">Technical visionary driving product engineering and architecture.</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                  View Profile →
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">
                15+ Team Members • 100% Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Panel Modal */}
      {selectedTeamMember && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-fade-in" onClick={() => setSelectedTeamMember(null)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-2xl animate-scale-up my-8" onClick={(e) => e.stopPropagation()}>
              <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                <div className={`absolute inset-0 ${selectedTeamMember === "divyesh" ? "bg-gradient-to-br from-blue-500/5 to-cyan-500/5" : selectedTeamMember === "ganesh" ? "bg-gradient-to-br from-blue-500/5 to-teal-500/5" : "bg-gradient-to-br from-purple-500/5 to-pink-500/5"} pointer-events-none`}></div>
                
                <button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedTeamMember(null);
                }} className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-foreground transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group cursor-pointer">
                  <X className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </button>

                <div className="relative z-10 p-8 md:p-12 max-h-[85vh] overflow-y-auto">
                  {selectedTeamMember === "divyesh" && (
                    <>
                      <div className="flex justify-center mb-8">
                        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-lg overflow-hidden">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-full object-cover"
                            >
                              <source src="/src/media/team/CEO-ANI.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Divyesh Bondapalli</h2>
                        <p className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-3">CEO & Founder</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">About</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">A vision-driven founder leading the company with a strong focus on innovation, strategy, and long-term growth.</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Core Responsibilities</h3>
                          <ul className="space-y-2">
                            {["Defines the company's mission, vision, and multi-year strategy", "Leads decision-making across product, business, and operations", "Builds partnerships and guides overall business expansion", "Ensures alignment between all departments and company objectives", "Drives innovation and maintains a high-performance culture"].map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/item">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Strategic Planning & Leadership", "Web Development", "Data Visualization", "Team Management", "Creative Thinking & Quick Learning", "Communication & Decision-making"].map((skill, idx) => (
                              <span key={idx} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-sm font-medium text-foreground border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-default">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Strengths</h3>
                          <ul className="space-y-2">
                            {["Visionary mindset", "Strong leadership presence", "Ability to execute ideas into real products"].map((strength, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/item">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedTeamMember === "ganesh" && (
                    <>
                      <div className="flex justify-center mb-8">
                        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 shadow-lg overflow-hidden">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-full object-cover"
                            >
                              <source src="/src/media/team/CTO-ANI.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Ganesh Reddy</h2>
                        <p className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-3">Chief Technology Officer</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">About</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">Technology leader responsible for building robust systems, guiding engineering teams, and shaping the product's technical future.</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Core Responsibilities</h3>
                          <ul className="space-y-2">
                            {["Defines and executes the technology roadmap", "Designs architecture for scalable products & systems", "Oversees engineering teams and code quality", "Ensures platform security, optimization, and reliability", "Implements backend systems, APIs, and cloud infrastructure", "Drives innovation in emerging technologies"].map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/item">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Full-Stack Development", "System Architecture & API Design", "Cloud Computing & DevOps", "Technical Problem-Solving", "Debugging & Optimization", "Team Leadership & Mentoring"].map((skill, idx) => (
                              <span key={idx} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 text-sm font-medium text-foreground border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-default">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Strengths</h3>
                          <ul className="space-y-2">
                            {["Deep technical expertise", "Ability to build scalable, future-proof systems", "Strong engineering leadership"].map((strength, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/item">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedTeamMember === "neelambika" && (
                    <>
                      <div className="flex justify-center mb-8">
                        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg overflow-hidden">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <video 
                              autoPlay 
                              loop 
                              muted 
                              playsInline
                              className="w-full h-full object-cover"
                            >
                              <source src="/src/media/team/COO-ANI.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">P. Neelambika</h2>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">Chief Operating Officer</p>
                      </div>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">About</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">Operations specialist focused on smooth coordination, workflow efficiency, and executing organizational processes with precision.</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Core Responsibilities</h3>
                          <ul className="space-y-2">
                            {["Manages day-to-day operations across departments", "Ensures smooth workflow and efficient process execution", "Supports project management and cross-team collaboration", "Enhances organizational standards and productivity", "Maintains operational quality and team coordination"].map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/item">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Communication & Coordination", "Operational Planning", "Adaptability & Flexibility", "Problem-Solving", "Basics of C, Java, and Python", "Process Management"].map((skill, idx) => (
                              <span key={idx} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-sm font-medium text-foreground border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-default">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/70 mb-3">Strengths</h3>
                          <ul className="space-y-2">
                            {["Highly organized and reliable", "Strong communication presence", "Efficient in team coordination and execution"].map((strength, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/item">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
