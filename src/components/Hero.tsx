import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const highlights = [
    "Custom Digital Printing",
    "Premium Quality Materials",
    "Bulk Order Specialists",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Trusted by 500+ Organizations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up stagger-1">
            Premium{" "}
            <span className="text-gradient">ID Accessories</span>
            <br />
            for Every Industry
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-up stagger-2">
            From lanyards to printed belts, we manufacture high-quality identification accessories 
            for schools, corporates, events, and security services.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up stagger-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#products">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Request Catalog</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
