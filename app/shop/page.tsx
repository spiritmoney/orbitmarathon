import Link from "next/link";
import { Heading, Body, Eyebrow, CardAccent } from "@/components/tokens";
import { products } from "@/lib/data/shop";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <>
      <section className="bg-deep-blue text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <Eyebrow variant="sun">Merchandise</Eyebrow>
          <Heading as="h1" size="lg" className="text-white mt-2">
            Shop
          </Heading>
          <Body className="text-tint-blue mt-4">
            Official kit, finisher merch, and training apparel.
          </Body>
        </div>
      </section>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="block bg-white border border-line overflow-hidden hover:border-volt/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun group transition-[border-color]"
          >
            <div className="aspect-square bg-paper-dim relative overflow-hidden">
              <CardAccent variant="frame" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-ink/10 uppercase">
                {product.category}
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm">{product.name}</p>
              <p className="font-display text-xl text-sapphire mt-1">
                ₦{product.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
