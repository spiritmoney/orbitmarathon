import Link from "next/link";
import { FAQSection } from "@/components/content/FAQList";
import { homeFaqItems } from "@/lib/data/home";

export function HomeFAQ() {
  return (
    <FAQSection
      eyebrow="Help"
      title="Quick answers"
      description="The essentials for race day, registration, and travel."
      items={homeFaqItems}
      className="bg-paper"
      footer={
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-sapphire hover:text-deep-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun rounded-sm"
        >
          View all questions
          <span aria-hidden="true">→</span>
        </Link>
      }
    />
  );
}
