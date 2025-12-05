import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code, Palette, TrendingUp, Smartphone, Database } from "lucide-react";

export default function Internship() {
  useSEO({
    title: "Digital Marketing Internships in India | Web Development Training by Zidi Digital Solutions",
    description: "Join Zidi Digital Solutions internship programs for hands-on digital marketing, web development, and tech training. Launch your career with mentorship from Divyesh Bondapalli.",
    keywords: "Digital Marketing Internships in India, Internship Program by Zidi Digital Solutions, Web Development Internships for Students, B.Tech Student Internship Program, Learn Digital Marketing with Zidi Digitals, Internship Opportunities by Divyesh Bondapalli, Skill Development and Training Program India, Career Growth with Zidi Digital Solutions, IT Internships for Freshers in India, Student Internship in Tech and Marketing, Web Development Internship Hyderabad, Digital Marketing Training Hyderabad, Tech Internship India, Best Internship Program India, Paid Internship Digital Marketing, Free Internship Web Development, Professional Training Program India, Career Development Program, Student Internship South India, Tech Skills Training India, Digital Marketing Course with Internship, Web Development Course with Internship, Zidi Digital Solutions Internship Reviews, Divyesh Bondapalli Internship Program",
    author: "Divyesh Bondapalli",
    canonicalPath: "/internship",
    ogTitle: "Digital Marketing Internships in India | Web Development Training by Zidi Digital Solutions",
    ogDescription: "Join Zidi Digital Solutions internship programs for hands-on digital marketing, web development, and tech training. Launch your career with mentorship from Divyesh Bondapalli.",
    ogImage: "/logo.jpeg",
    ogUrl: "https://zididigitals.com/internship",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      "name": "Digital Marketing & Web Development Internship Program",
      "description": "Join Zidi Digital Solutions internship programs for hands-on digital marketing, web development, and tech training. Launch your career with mentorship from Divyesh Bondapalli.",
      "url": "https://zididigitals.com/internship",
      "provider": {
        "@type": "Organization",
        "name": "Zidi Digital Solutions",
        "alternateName": ["Zidi Digitals", "Zidi Digital Solutions India"],
        "description": "India's leading digital agency offering marketing, web development, internships, and consultancy services.",
        "url": "https://zididigitals.com",
        "logo": "https://zididigitals.com/logo.jpeg"
      },
      "hasCourse": [
        {
          "@type": "Course",
          "name": "Web Development Internship",
          "description": "Hands-on web development training with live projects and mentorship"
        },
        {
          "@type": "Course",
          "name": "Digital Marketing Internship",
          "description": "Practical digital marketing training with real campaigns and certifications"
        }
      ],
      "programPrerequisites": "Basic computer knowledge and passion for technology",
      "timeRequired": "3-6 months",
      "educationalLevel": "Intermediate to Advanced",
      "instructor": {
        "@type": "Person",
        "name": "Divyesh Bondapalli",
        "jobTitle": "CEO & Founder",
        "description": "Young entrepreneur and digital innovator"
      }
    }
  });

  return (
    <main className="container max-w-6xl mx-auto px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Internship & Training Programs</h1>
        <p className="text-muted-foreground mt-4">Student‑first culture with real projects, structured learning paths, and mentorship.</p>
      </header>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web & App Development Training</li>
              <li>Live Project Internships</li>
              <li>Digital Marketing Internships</li>
              <li>Certification & Mentorship</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Best Courses</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground flex flex-col gap-4">
            <div className="flex items-start gap-2"><Code className="h-4 w-4 text-accent"/> Web Development - Learn to build scalable and efficient web applications</div>
            <div className="flex items-start gap-2"><Palette className="h-4 w-4 text-accent"/> UI/UX Design - Create visually stunning and user-friendly interfaces</div>
            <div className="flex items-start gap-2"><TrendingUp className="h-4 w-4 text-accent"/> Digital Marketing - Master the art of online marketing and grow your business</div>
            <div className="flex items-start gap-2"><Smartphone className="h-4 w-4 text-accent"/> Mobile App Development - Build mobile apps that engage and retain users</div>
            <div className="flex items-start gap-2"><Database className="h-4 w-4 text-accent"/> Backend & Databases - Learn to design and implement robust backend systems</div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-accent"/> <CardTitle>Apply Now</CardTitle></div>
            <Button asChild><a href="#apply">Start Application</a></Button>
          </CardHeader>
          <CardContent id="apply" className="text-sm text-muted-foreground">
            Send your resume and a short note to zididigitals@gmail.com with subject “Internship Application”. A simple form will be added soon.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
