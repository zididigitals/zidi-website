import { Linkedin, Instagram, Facebook, MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Zidi Digital Solutions India | Web Development Services by Divyesh Bondapalli" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Zidi Digital Solutions</h3>
            </div>
            <p className="text-muted-foreground mt-3 max-w-md">
              Empowering the digital future with product innovation, service excellence, and next‑gen talent development.
            </p>
            <a 
              href="mailto:zididigitals@gmail.com" 
              className="inline-flex items-center gap-2 text-sm text-foreground mt-4 hover:text-primary transition-colors group"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" /> 
              <span className="group-hover:underline">Contact via Email</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/consultancy" className="hover:text-foreground transition-colors">Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 text-muted-foreground">
              <a href="https://www.linkedin.com/company/zidi-digital-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors hover:scale-110"><Linkedin className="h-5 w-5"/></a>
              <a href="https://www.facebook.com/people/zidi-digitals/61577994181188/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors hover:scale-110"><Facebook className="h-5 w-5"/></a>
              <a href="https://www.instagram.com/zididigitals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors hover:scale-110"><Instagram className="h-5 w-5"/></a>
              <a href="https://x.com/ZidiDigitals" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-primary transition-colors hover:scale-110"><MessageCircle className="h-5 w-5"/></a>
              <a href="https://www.whatsapp.com/channel/0029VbBKgQ12ZjCm5l7H4k35" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel" className="hover:text-primary transition-colors hover:scale-110"><Phone className="h-5 w-5"/></a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Zidi Digital Solutions. All rights reserved.</p>
          <div className="text-xs text-muted-foreground">Built with care and innovation.</div>
        </div>
      </div>
    </footer>
  );
}
