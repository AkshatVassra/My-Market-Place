import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm mb-4">
              Our Products
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Quality ID Accessories for{" "}
              <span className="text-secondary">Every Need</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our comprehensive range of digitally printed identification products designed for schools, corporates, and events.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-primary-foreground rounded-full text-primary text-sm font-semibold">
                        View Details
                      </span>
                    </div>
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

                    {/* Price hint */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Starting from{" "}
                        <span className="font-bold text-gradient">
                          {product.variants[0].price}
                        </span>
                      </span>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Need Custom Products?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? Contact us for custom designs, bulk orders, and special requirements.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/#contact">
                Get Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
