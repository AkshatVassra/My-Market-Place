import { 
  GraduationCap, 
  Building2, 
  Shield, 
  Stethoscope, 
  Calendar, 
  Users,
  Briefcase,
  Shirt
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description: "Student ID cards, lanyards, and uniform accessories",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Professional ID solutions and branded accessories",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Durable lanyards and identification products",
  },
  {
    icon: Stethoscope,
    title: "Hospitals",
    description: "Staff ID cards and patient identification",
  },
  {
    icon: Calendar,
    title: "Events & Exhibitions",
    description: "Wristbands, badges, and event accessories",
  },
  {
    icon: Users,
    title: "Institutes",
    description: "Training centers and educational institutions",
  },
  {
    icon: Briefcase,
    title: "Government",
    description: "Official ID cards and secure identification",
  },
  {
    icon: Shirt,
    title: "Garments",
    description: "Labels, tapes, and clothing accessories",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Trusted Across{" "}
            <span className="text-gradient">All Sectors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From educational institutions to corporate giants, we deliver excellence to every industry
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative p-6 md:p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>

              {/* Hover Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
