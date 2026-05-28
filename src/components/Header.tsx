import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "/products" },
    { label: "Industries", href: "/#industries" },
    { label: "About Us", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  const isExternal = (href: string) => href.startsWith("/#") || href.startsWith("#");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-foreground leading-tight">
                AARNA
              </h1>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Enterprises
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              isExternal(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+918178026082" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 8178026082</span>
            </a>
            <Button variant="hero" size="default" asChild>
              <a href="/#contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                isExternal(link.href) ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="px-4 pt-2">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="/#contact">Get Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
