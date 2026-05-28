import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8178026082",
      href: "tel:+918178026082",
    },
    {
      icon: Phone,
      label: "Alternate",
      value: "+91 9910077472",
      href: "tel:+919910077472",
    },
    {
      icon: Mail,
      label: "Email",
      value: "impressionplus2007@gmail.com",
      href: "mailto:impressionplus2007@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "170/171 Dharam Colony, Palam Vihar Ext, 122017",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Order?
              <br />
              <span className="text-gradient">Let's Talk</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              Contact us for custom quotes, bulk orders, or any questions about our products. 
              We're here to help you find the perfect ID solution for your organization.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/60 mb-1">{item.label}</div>
                    <div className="font-medium text-primary-foreground group-hover:text-secondary transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918178026082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-hover">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
