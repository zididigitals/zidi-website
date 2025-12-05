import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Boxes, Megaphone, GraduationCap, Workflow } from "lucide-react";

const services = [
  {
    title: "Product Development",
    Icon: Boxes,
    items: [
      "Custom Software Solutions",
      "SaaS Product Design & Launch",
      "Mobile App Development",
      "Web Application Development",
    ],
  },
  {
    title: "Software & Web Development",
    Icon: Code2,
    items: [
      "Business Websites & eCommerce",
      "Web Portals & Dashboards",
      "Cloud Integration",
      "API Development & Automation",
    ],
  },
  {
    title: "Digital Marketing & Branding",
    Icon: Megaphone,
    items: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Creation & Management",
      "Branding & Identity Design",
    ],
  },
  {
    title: "Internship & Training Programs",
    Icon: GraduationCap,
    items: [
      "Web & App Development Training",
      "Live Project Internships",
      "Digital Marketing Internships",
      "Certification & Mentorship",
    ],
  },
  {
    title: "Consultancy Program",
    Icon: Workflow,
    items: [
      "Strategy & Digital Transformation",
      "Tech Stack Consultation",
      "MVP Roadmapping",
      "Cloud & Scalability Planning",
    ],
  },
];

export default function Services() {
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
              "name": "Product Development Services",
              "description": "Custom Software Solutions, SaaS Product Design & Launch, Mobile App Development, Web Application Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development Services",
              "description": "Business Websites & eCommerce, Web Portals & Dashboards, Cloud Integration, API Development & Automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing Services",
              "description": "SEO & SEM, Social Media Marketing, Content Creation & Management, Branding & Identity Design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internship & Training Programs",
              "description": "Web & App Development Training, Live Project Internships, Digital Marketing Internships, Certification & Mentorship"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultancy Program",
              "description": "Strategy & Digital Transformation, Tech Stack Consultation, MVP Roadmapping, Cloud & Scalability Planning"
            }
          }
        ]
      }
    }
  });

  return (
    <main className="container max-w-6xl mx-auto px-6 py-16">
      <header className="max-w-2xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
        <p className="text-muted-foreground mt-4">End‑to‑end capabilities to plan, build, and grow digital products and brands.</p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, Icon, items }) => (
          <Card key={title} className="transition-transform hover:scale-[1.02] hover:shadow-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-accent" />
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
