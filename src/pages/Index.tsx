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
      <CoreOfferings />
      <ContactSection />
    </div>
  );
};

export default Index;
