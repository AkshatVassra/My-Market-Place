import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

const Products = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Quality ID Accessories for{" "}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of digitally printed identification products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    From <span className="font-bold text-gradient">{product.variants[0].price}</span>
                  </span>
                  <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
