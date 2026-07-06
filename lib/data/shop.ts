import { eventInfo } from "./event";
import { brandLogos } from "./brand";

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
    image: brandLogos.full,
  },
  {
    slug: "finisher-medal-display",
    name: "Finisher Medal Display",
    price: 8500,
    currency: "NGN",
    description: "Wall-mounted display case for your Orbit Marathon finisher medal.",
    category: "Finisher",
    image: brandLogos.sapphire,
  },
  {
    slug: "volt-cap",
    name: "Volt Slash Cap",
    price: 6000,
    currency: "NGN",
    description: "Structured cap with embroidered bolt logo. One size fits all.",
    category: "Apparel",
    image: brandLogos.compact,
  },
  {
    slug: "training-tee",
    name: "Training Tee",
    price: 12000,
    currency: "NGN",
    description: "Soft cotton training tee with Deep Blue wordmark. Available S–XXL.",
    category: "Apparel",
    image: brandLogos.volt,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
