import belt1 from "@/assets/products/belt-1.jpg";
import belt2 from "@/assets/products/belt-2.jpg";
import lanyard1 from "@/assets/products/lanyard-1.jpg";
import lanyard2 from "@/assets/products/lanyard-2.jpg";
import wristband1 from "@/assets/products/wristband-1.jpg";
import laces1 from "@/assets/products/laces-1.jpg";
import sash1 from "@/assets/products/sash-1.jpg";
import idcard1 from "@/assets/products/idcard-1.jpg";

export interface ProductVariant {
  name: string;
  size: string;
  price: string;
  minOrder: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: string[];
  variants: ProductVariant[];
  applications: string[];
}

export const products: Product[] = [
  {
    id: "belts",
    name: "Digital Printed Belts",
    shortName: "Belts",
    description: "38MM plain and lining printed rolls for safety and branding",
    longDescription: "Our digital printed belts are manufactured using premium quality polyester material with state-of-the-art printing technology. Available in 38MM width with both plain and lining print options, these belts are perfect for safety identification, branding, and organizational use.",
    image: belt1,
    gallery: [belt1, belt2],
    features: ["Custom Designs", "Durable Material", "Various Widths", "Fade-Resistant Print", "Bulk Orders Available"],
    specifications: [
      "Width: 38MM standard (custom sizes available)",
      "Material: High-quality polyester",
      "Print Type: Digital sublimation",
      "Color Options: Full color CMYK",
      "Roll Length: 50-100 meters per roll"
    ],
    variants: [
      { name: "Plain Print Belt", size: "38MM x 50m", price: "₹450", minOrder: "10 rolls" },
      { name: "Lining Print Belt", size: "38MM x 50m", price: "₹550", minOrder: "10 rolls" },
      { name: "Premium Belt", size: "38MM x 100m", price: "₹850", minOrder: "5 rolls" },
    ],
    applications: ["Schools & Colleges", "Corporate Offices", "Security Services", "Events & Exhibitions"]
  },
  {
    id: "lanyards",
    name: "Digital Lanyards",
    shortName: "Lanyards",
    description: "Polyester lanyards in 16mm, 20mm, 25mm sizes with custom printing",
    longDescription: "High-quality polyester lanyards with vibrant digital printing. Available in multiple widths including 16mm, 20mm, and 25mm. Perfect for ID card holders, event badges, and promotional purposes. We offer various attachment options including metal hooks, plastic clips, and safety breakaways.",
    image: lanyard1,
    gallery: [lanyard1, lanyard2],
    features: ["Full Color Print", "Multiple Attachments", "Bulk Orders", "Safety Breakaway", "Double-Sided Print"],
    specifications: [
      "Width Options: 16mm, 20mm, 25mm",
      "Length: Standard 90cm (customizable)",
      "Material: Premium polyester",
      "Print: Full color sublimation (both sides)",
      "Attachments: Metal hook, plastic clip, dog clip"
    ],
    variants: [
      { name: "Standard Lanyard", size: "16mm x 90cm", price: "₹15", minOrder: "100 pcs" },
      { name: "Medium Lanyard", size: "20mm x 90cm", price: "₹18", minOrder: "100 pcs" },
      { name: "Wide Lanyard", size: "25mm x 90cm", price: "₹22", minOrder: "100 pcs" },
      { name: "Premium Double-Sided", size: "20mm x 90cm", price: "₹28", minOrder: "50 pcs" },
    ],
    applications: ["Corporate Events", "Conferences", "Schools", "Hospitals", "Trade Shows"]
  },
  {
    id: "wristbands",
    name: "Fabric Wrist Bands",
    shortName: "Wristbands",
    description: "Custom printed wristbands for events, exhibitions, and promotions",
    longDescription: "Premium fabric wristbands with custom digital printing for events, exhibitions, concerts, and promotional activities. Features secure locking mechanisms to prevent unauthorized transfer. Comfortable to wear and durable enough for multi-day events.",
    image: wristband1,
    gallery: [wristband1],
    features: ["Event Ready", "Secure Closure", "Vibrant Colors", "Comfortable Fit", "Tamper-Proof"],
    specifications: [
      "Width: 15mm standard",
      "Length: Adjustable (up to 25cm)",
      "Material: Woven polyester fabric",
      "Closure: Plastic slider lock / metal crimp",
      "Print: Full color sublimation"
    ],
    variants: [
      { name: "Standard Wristband", size: "15mm", price: "₹12", minOrder: "200 pcs" },
      { name: "Premium Wristband", size: "15mm", price: "₹18", minOrder: "100 pcs" },
      { name: "VIP Wristband", size: "20mm", price: "₹25", minOrder: "50 pcs" },
    ],
    applications: ["Music Festivals", "Corporate Events", "Amusement Parks", "Sports Events", "Exhibitions"]
  },
  {
    id: "laces",
    name: "Printed Laces & Tapes",
    shortName: "Laces & Tapes",
    description: "Digital printed laces and elastic tapes for shoes and garments",
    longDescription: "Custom printed shoelaces and elastic tapes for footwear brands, garment manufacturers, and promotional use. Available in various widths and elasticity options. Perfect for brand customization and adding unique identity to products.",
    image: laces1,
    gallery: [laces1],
    features: ["Elastic Options", "Shoe Laces", "Garment Bindings", "Custom Widths", "Brand Printing"],
    specifications: [
      "Width: 8mm, 10mm, 12mm options",
      "Material: Polyester / Elastic blend",
      "Length: 90cm, 120cm, 150cm (shoes)",
      "Elasticity: Regular / High stretch",
      "Print: Digital sublimation"
    ],
    variants: [
      { name: "Printed Shoelace", size: "10mm x 120cm", price: "₹8", minOrder: "500 pairs" },
      { name: "Elastic Tape", size: "12mm x 50m roll", price: "₹280", minOrder: "20 rolls" },
      { name: "Garment Binding", size: "8mm x 100m roll", price: "₹350", minOrder: "10 rolls" },
    ],
    applications: ["Footwear Brands", "Garment Industry", "Sports Goods", "Promotional Items"]
  },
  {
    id: "sashes",
    name: "Sashes & Labels",
    shortName: "Sashes & Labels",
    description: "4 inch and 6 inch roll printing for schools and events",
    longDescription: "Premium quality sashes and labels printed on high-quality satin and polyester materials. Available in 4-inch and 6-inch widths. Ideal for school functions, beauty pageants, award ceremonies, and corporate events.",
    image: sash1,
    gallery: [sash1],
    features: ["Premium Quality", "Custom Sizes", "Bulk Available", "Satin Finish", "Gold/Silver Text"],
    specifications: [
      "Width: 4 inch, 6 inch options",
      "Length: Standard 150cm (customizable)",
      "Material: Premium satin / Polyester",
      "Print: Sublimation / Foil stamping",
      "Finish: Matte / Glossy"
    ],
    variants: [
      { name: "Standard Sash", size: "4 inch x 150cm", price: "₹120", minOrder: "25 pcs" },
      { name: "Wide Sash", size: "6 inch x 150cm", price: "₹180", minOrder: "25 pcs" },
      { name: "Premium Gold Foil", size: "6 inch x 150cm", price: "₹250", minOrder: "20 pcs" },
    ],
    applications: ["Schools & Colleges", "Beauty Pageants", "Award Ceremonies", "Corporate Events"]
  },
  {
    id: "idcards",
    name: "ID Card Solutions",
    shortName: "ID Cards",
    description: "Complete ID card printing and accessories for organizations",
    longDescription: "Comprehensive ID card printing solutions including PVC cards, card holders, clips, and accessories. We provide complete identity solutions for corporates, schools, hospitals, and government organizations with high-security features.",
    image: idcard1,
    gallery: [idcard1],
    features: ["Corporate Design", "Student IDs", "Secure Printing", "Magnetic Strip", "Smart Card Options"],
    specifications: [
      "Size: CR80 (85.6mm x 53.98mm)",
      "Material: PVC / PET",
      "Thickness: 0.76mm standard",
      "Print: Full color both sides",
      "Features: Barcode, QR, Magnetic strip"
    ],
    variants: [
      { name: "Basic ID Card", size: "CR80", price: "₹25", minOrder: "100 pcs" },
      { name: "Premium ID Card", size: "CR80 + Holder", price: "₹45", minOrder: "50 pcs" },
      { name: "Smart ID Card", size: "CR80 + RFID", price: "₹85", minOrder: "50 pcs" },
    ],
    applications: ["Corporate Offices", "Schools & Colleges", "Hospitals", "Government Agencies", "Events"]
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
