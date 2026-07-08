import { eventInfo } from "./event";
import { siteImages } from "./images";

export interface Product {
  slug: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    slug: "official-jersey-2026",
    name: "Official 2026 Jersey",
    price: eventInfo.jerseyPrice,
    currency: "NGN",
    description: "Race-day jersey with Volt Slash side panel. Unisex fit, moisture-wicking fabric.",
    category: "Kit",
    image: siteImages.cyclingPeloton,
    imageAlt: "Cyclists in race kit during a road peloton",
  },
  {
    slug: "finisher-medal-display",
    name: "Finisher Medal Display",
    price: 8500,
    currency: "NGN",
    description: "Wall-mounted display case for your Orbit Marathon finisher medal.",
    category: "Finisher",
    image: siteImages.cyclistVictory,
    imageAlt: "Athlete celebrating at the finish line",
  },
  {
    slug: "volt-cap",
    name: "Volt Slash Cap",
    price: 6000,
    currency: "NGN",
    description: "Structured cap with embroidered bolt logo. One size fits all.",
    category: "Apparel",
    image: siteImages.cyclistCloseup,
    imageAlt: "Cyclist wearing professional race kit and helmet",
  },
  {
    slug: "training-tee",
    name: "Training Tee",
    price: 12000,
    currency: "NGN",
    description: "Soft cotton training tee with Deep Blue wordmark. Available S–XXL.",
    category: "Apparel",
    image: siteImages.lagosCityMarathon,
    imageAlt: "Marathon runners on the Lagos city course",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
