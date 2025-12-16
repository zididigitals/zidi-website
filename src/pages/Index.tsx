import { useSEO } from "@/hooks/useSEO";
import { Hero } from "@/components/Hero";
import { CoreOfferings } from "@/components/CoreOfferings";
import { ContactSection } from "@/components/ContactSection";
import { Link } from "react-router-dom";

const Index = () => {
  useSEO({
    title: "Zidi Digital Solutions – Digitally Different | Founded by Divyesh Bondapalli",
    description: "India's leading digital agency offering marketing, web development, internships, and consultancy services. Transform your business with innovative tech solutions.",
    keywords: "Zidi Digital Solutions, Zidi Digital Solutions India, Zidi Digitals, Divyesh Bondapalli, Digital Marketing India, Web Development Services, IT Consultancy, Internship Programs, Business Growth Solutions, Digital Transformation, Best Digital Marketing Company in India, Zidi Digital Marketing Agency, SEO Services by Zidi Digital Solutions, Social Media Marketing Agency India, Web Development Services India, App Development Company by Zidi, UI/UX Design and Development, E-commerce Website Development Services, Digital Marketing Internships in India, Internship Program by Zidi Digital Solutions, Business Consultancy Services in India, Digital Consultancy by Zidi Digital Solutions, Startup Growth Consultancy by Divyesh Bondapalli, Best Digital Marketing Agency in Hyderabad, IT Services Company in Andhra Pradesh, Business Consultancy in Telangana",
    author: "Divyesh Bondapalli",
    canonicalPath: "/",
    ogTitle: "Zidi Digital Solutions – Digitally Different | Founded by Divyesh Bondapalli",
    ogDescription: "India's leading digital agency offering marketing, web development, internships, and consultancy services.",
    ogImage: "/logo.jpeg",
    ogUrl: "https://zididigitals.com",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zidi Digital Solutions",
      "alternateName": ["Zidi Digitals", "Zidi Digital Solutions India"],
      "description": "India's leading digital agency offering marketing, web development, internships, and consultancy services.",
      "url": "https://zididigitals.com",
      "logo": "https://zididigitals.com/logo.jpeg",
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "Divyesh Bondapalli",
        "jobTitle": "CEO & Founder",
        "description": "Young entrepreneur and digital innovator, founder of Zidi Digital Solutions"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hyderabad",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3850",
        "longitude": "78.4867"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7416 665 003",
        "contactType": "customer service",
        "email": "zididigitals@gmail.com",
        "availableLanguage": ["English", "Hindi", "Telugu"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/zidi-digital-solutions",
        "https://www.facebook.com/people/zidi-digitals/61577994181188/",
        "https://www.instagram.com/zididigitals/",
        "https://x.com/ZidiDigitals"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "India"
      }
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      {/* Floating Projects Marquee placed above Core Offerings */}
      {(() => {
        const projects = [
          { src: "/media/projects/collabo.jpg", name: "Collabo" },
          { src: "/media/projects/pixel.jpg", name: "Pixel8" },
          { src: "/media/projects/ramky.jpg", name: "Ramky Infra and Developers" },
          { src: "/media/projects/visa%20now.jpg", name: "Visa Now" },
        ];
        const track = [...projects, ...projects];
        return (
          <section className="mt-12">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-semibold">Recent Projects</h2>
                <Link to="/projects" className="text-primary text-sm font-medium hover:underline">View all</Link>
              </div>
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
            </div>
          </section>
        );
      })()}
      <CoreOfferings />
      <ContactSection />
    </div>
  );
};

export default Index;
