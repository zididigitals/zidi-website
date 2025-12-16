import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Send, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS Configuration (from environment variables)
      const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const EMAILJS_ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;

      // Basic guard for missing envs
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_ADMIN_TEMPLATE_ID) {
        throw new Error("Missing EmailJS environment configuration");
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // EMAIL 1: Send notification to Zidi (admin notification)
      const adminPayload = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_service: formData.service,
        user_message: formData.message,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        reply_to: formData.email,
      };
      console.log("EmailJS Admin Send", {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_ADMIN_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY ? 'present' : 'missing',
        payload: adminPayload,
      });
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, adminPayload);

      // EMAIL 2: Send auto-reply to customer (they receive confirmation)
      const customerPayload = {
        // Align with template: To Email = {{user_email}}, Reply To = {{name}}
        user_name: formData.name,
        name: formData.name,
        user_email: formData.email,
        email: formData.email,
        to_email: formData.email,
        user_phone: formData.phone,
        user_service: formData.service,
        user_message: formData.message,
        submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      };
      console.log("EmailJS Customer Auto-Reply", {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY ? 'present' : 'missing',
        payload: customerPayload,
      });
      const emailResponse = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, customerPayload);

      if (emailResponse.status === 200) {
        // Success notification
        toast({
          title: "✅ Message Sent Successfully!",
          description: "Thank you for contacting us! We've sent a confirmation email and will respond within 3 business days.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "❌ Failed to Send",
        description: "Please verify EmailJS keys and template variables, then try again. You can also contact us directly at zididigitals@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Our Offices",
      value: "Hyderabad, Telangana & Palakollu, Andhra Pradesh",
      action: null
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9151270999",
      action: () => window.open('tel:+919151270999', '_self')
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "zididigitals@gmail.com",
      action: () => window.open('mailto:zididigitals@gmail.com', '_self')
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      action: null
    }
  ];

  return (
    <section className="pt-20 md:pt-28 pb-20 bg-gradient-to-b from-background to-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <button
            type="button"
            aria-label="Get in touch"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6 cursor-pointer hover:from-primary/20 hover:to-accent/20 transition-colors"
          >
            <MessageCircle className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary text-sm font-medium tracking-wide">GET IN TOUCH</span>
          </button>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-base md:text-2xl text-muted-foreground max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg animate-scale-in p-4 ${info.action ? 'cursor-pointer group' : ''}`}
                  onClick={info.action || undefined}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-card-foreground text-sm md:text-base mb-1">{info.label}</h3>
                        {info.action ? (
                          <div className="flex items-center space-x-2">
                            <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                              {info.label === "Call Us" ? "Tap to call" : "Tap to email"}
                            </p>
                            <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-success hover:bg-success/90 text-success-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://www.whatsapp.com/channel/0029VbBKgQ12ZjCm5l7H4k35', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join WhatsApp Channel
              </Button>
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-primary text-xs md:text-sm font-medium">Usually responds within 1 hour</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/company/zidi-digital-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Linkedin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                </a>
                <a 
                  href="https://www.facebook.com/people/zidi-digitals/61577994181188/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Facebook className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/zididigitals/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Instagram className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">Instagram</span>
                </a>
                <a 
                  href="https://x.com/ZidiDigitals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <MessageCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">X (Twitter)</span>
                </a>
                <a 
                  href="https://www.whatsapp.com/channel/0029VbBKgQ12ZjCm5l7H4k35" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <MessageCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors h-10 md:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors h-10 md:h-11"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors h-10 md:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Service Interest</label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="bg-background border-input text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 h-10 md:h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="product-solutions">Product-Based Solutions</SelectItem>
                          <SelectItem value="service-solutions">Service-Based Solutions</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="internship">Internship Program</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, goals, or questions..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="sm" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                        <Send className="ml-2 h-5 w-5 animate-pulse" />
                      </>
                    ) : (
                      <>
                        Send Message & Get Free Quote
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};