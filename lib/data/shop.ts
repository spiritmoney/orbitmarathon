import { eventInfo } from "./event";

export interface Product {
  slug: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "official-jersey-2026",
    name: "Official 2026 Jersey",
    price: eventInfo.jerseyPrice,
    currency: "NGN",
    description: "Race-day jersey with Volt Slash side panel. Unisex fit, moisture-wicking fabric.",
    category: "Kit",
    image: "/images/shop-jersey.jpg",
  },
  {
    slug: "finisher-medal-display",
    name: "Finisher Medal Display",
    price: 8500,
    currency: "NGN",
    description: "Wall-mounted display case for your Orbit Marathon finisher medal.",
    category: "Finisher",
    image: "/images/shop-medal.jpg",
  },
  {
    slug: "volt-cap",
    name: "Volt Slash Cap",
    price: 6000,
    currency: "NGN",
    description: "Structured cap with embroidered bolt logo. One size fits all.",
    category: "Apparel",
    image: "/images/shop-cap.jpg",
  },
  {
    slug: "training-tee",
    name: "Training Tee",
    price: 12000,
    currency: "NGN",
    description: "Soft cotton training tee with Deep Blue wordmark. Available S–XXL.",
    category: "Apparel",
    image: "/images/shop-tee.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
