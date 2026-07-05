import { FAQAccordion } from "@/components/content/FAQAccordion";
import { faqCategories } from "@/lib/data/faq";

export const metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <section className="bg-deep-blue text-white pt-16 md:pt-20 pb-14 md:pb-16">
        <div className="max-w-[720px] mx-auto px-4 md:px-8 text-center">
          <p className="font-body text-[11px] font-bold uppercase tracking-eyebrow text-sun mb-3">
            Help
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold uppercase leading-heading tracking-heading">
            FAQ
          </h1>
          <p className="mt-4 font-body text-base text-tint-blue/90 leading-relaxed max-w-md mx-auto">
            Race day, registration, and travel — answered.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-paper">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8">
          <FAQAccordion categories={faqCategories} />
        </div>
      </section>
    </>
  );
}
