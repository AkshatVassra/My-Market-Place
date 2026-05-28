import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    "Digital Printed Belts",
    "Digital Lanyards",
    "Fabric Wrist Bands",
    "Printed Laces & Tapes",
    "Sashes & Labels",
    "ID Card Solutions",
  ];

  const quickLinks = [
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-primary font-display font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">AARNA</h3>
                <p className="text-[10px] text-primary-foreground/60 tracking-widest uppercase">
                  Enterprises
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Leading manufacturer of premium ID accessories serving organizations across India.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+918178026082" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                +91 8178026082
              </a>
              <a href="mailto:impressionplus2007@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                impressionplus2007@gmail.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <a 
                    href="#products" 
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Visit Us</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <address className="not-italic">
                170/171 Dharam Colony,<br />
                Palam Vihar Extension,<br />
                Gurugram - 122017,<br />
                Haryana, India
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} AARNA Enterprises. All rights reserved.</p>
          <p>Crafted with quality in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
