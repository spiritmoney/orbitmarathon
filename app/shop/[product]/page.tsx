import Link from "next/link";
import { notFound } from "next/navigation";
import { Heading, Body } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/lib/data/shop";

export async function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const item = getProductBySlug(product);
  return { title: item?.name ?? "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-2 gap-10">
      <div className="aspect-square bg-paper-dim border border-line relative">
        <div
          className="absolute top-0 right-0 w-16 h-16 bg-volt"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center font-display text-6xl text-ink/10">
          {product.category}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-wide text-sapphire">
          {product.category}
        </p>
        <Heading as="h1" size="lg" className="mt-2 normal-case">
          {product.name}
        </Heading>
        <p className="font-display text-4xl text-deep-blue mt-4">
          ₦{product.price.toLocaleString()}
        </p>
        <Body className="mt-4">{product.description}</Body>
        <div className="mt-8 flex gap-3">
          <Button variant="primary">Add to cart</Button>
          <Button asChild variant="ghost">
            <Link href="/shop">Back to shop</Link>
          </Button>
        </div>
        <Body muted className="mt-6 text-sm">
          Checkout redirects to secure payment partner at launch.
        </Body>
      </div>
    </div>
  );
}
