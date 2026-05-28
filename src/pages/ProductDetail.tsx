import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.shortName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {product.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:ring-2 ring-primary transition-all"
                      >
                        <img
                          src={img}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="lg:sticky lg:top-24">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                  {product.shortName}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {product.longDescription}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-primary/5 text-primary rounded-full"
                    >
                      <Check className="w-3.5 h-3.5" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" size="lg" asChild>
                    <a href="#contact">
                      Request Quote
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+918178026082">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Pricing */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Specifications
                </h2>
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <ul className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Pricing & Variants
                </h2>
                <div className="space-y-4">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-5 shadow-soft hover:shadow-card transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-foreground">
                          {variant.name}
                        </h3>
                        <span className="text-xl font-bold text-gradient">
                          {variant.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Size: {variant.size}</span>
                        <span>Min Order: {variant.minOrder}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  * Prices are indicative. Contact us for bulk order discounts and custom requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
              Applications & Use Cases
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="px-6 py-3 bg-card rounded-full shadow-soft font-medium text-foreground"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Other Products */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Explore Other Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-12 md:py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Place an Order?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today for custom quotes, bulk discounts, and sample requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+918178026082">
                  <Phone className="w-5 h-5" />
                  +91 8178026082
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/#contact">
                  Send Inquiry
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
