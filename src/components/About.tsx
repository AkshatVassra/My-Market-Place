import { Award, HeartHandshake, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest polyester materials and state-of-the-art digital printing technology",
  },
  {
    icon: HeartHandshake,
    title: "Custom Solutions",
    description: "Tailored designs to match your brand identity and specific requirements",
  },
  {
    icon: Zap,
    title: "Bulk Specialists",
    description: "Competitive pricing for large orders with consistent quality guaranteed",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gradient">ID Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AARNA ENTERPRISES is a leading manufacturer and supplier of high-quality ID accessories. 
              Based in Palam Vihar, we specialize in digital printing on various materials including 
              lanyards, belts, wristbands, and more.
            </p>
            <p className="text-muted-foreground mb-8">
              With years of experience serving schools, corporates, hospitals, and government 
              organizations, we understand the importance of quality, durability, and timely delivery. 
              Our state-of-the-art printing facility ensures vibrant colors and long-lasting prints.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  1M+
                </div>
                <div className="text-sm text-muted-foreground">Products Delivered</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
