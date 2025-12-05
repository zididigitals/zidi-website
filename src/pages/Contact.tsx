import { useSEO } from "@/hooks/useSEO";
import { ContactSection } from "@/components/ContactSection";

export default function Contact() {
  useSEO({
    title: "Contact Zidi Digital Solutions | Get Free Consultation from Divyesh Bondapalli",
    description: "Get in touch with Zidi Digital Solutions for expert digital services. Contact Divyesh Bondapalli for web development, digital marketing, internships, and business consultancy in Hyderabad, India.",
    keywords: "Contact Zidi Digital Solutions, Zidi Digital Solutions Contact, Divyesh Bondapalli Contact, Get Free Consultation, Digital Marketing Agency Contact, Web Development Services Contact, IT Consultancy Contact, Internship Program Contact, Business Growth Consultancy, Hyderabad Digital Agency, Telangana IT Services, Contact Digital Marketing India, Zidi Digitals Contact Information, Best Digital Agency Contact, Startup Consultancy Contact, Digital Transformation Contact, Zidi Digital Solutions Phone, Zidi Digital Solutions Email, Divyesh Bondapalli Business Contact, Zidi Digital Solutions Office Contact",
    author: "Divyesh Bondapalli",
    canonicalPath: "/contact",
    ogTitle: "Contact Zidi Digital Solutions | Get Free Consultation from Divyesh Bondapalli",
    ogDescription: "Get in touch with Zidi Digital Solutions for expert digital services. Contact Divyesh Bondapalli for web development, digital marketing, internships, and business consultancy in Hyderabad, India.",
    ogImage: "/logo.jpeg",
    ogUrl: "https://zididigitals.com/contact",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Zidi Digital Solutions",
      "description": "Get in touch with Zidi Digital Solutions for expert digital services. Contact Divyesh Bondapalli for web development, digital marketing, internships, and business consultancy in Hyderabad, India.",
      "url": "https://zididigitals.com/contact",
      "provider": {
        "@type": "Organization",
        "name": "Zidi Digital Solutions",
        "alternateName": ["Zidi Digitals", "Zidi Digital Solutions India"],
        "description": "India's leading digital agency offering marketing, web development, internships, and consultancy services.",
        "url": "https://zididigitals.com",
        "logo": "https://zididigitals.com/logo.jpeg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 9151270999",
          "contactType": "customer service",
          "email": "zididigitals@gmail.com",
          "availableLanguage": ["English", "Hindi", "Telugu"],
          "hoursAvailable": "Mo-Sa 09:00-18:00"
        },
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Hyderabad",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Palakollu",
            "addressLocality": "Palakollu",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "IN"
          }
        ]
      }
    }
  });

  return (
    <main>
      <ContactSection />
    </main>
  );
}
