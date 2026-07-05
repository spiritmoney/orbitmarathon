"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FAQList } from "./FAQList";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { transition } from "@/lib/motion";
import type { FAQCategory } from "@/lib/data/faq";

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export function FAQAccordion({ categories }: FAQAccordionProps) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const reducedMotion = useReducedMotion();
  const activeCategory = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <div className="max-w-[720px] mx-auto">
      <AnimateIn>
        <div
          className="flex flex-wrap gap-2 mb-8 p-1 rounded-full bg-paper-dim w-fit"
          role="tablist"
          aria-label="FAQ categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={active === category.id}
              onClick={() => setActive(category.id)}
              className={cn(
                "relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2",
                active === category.id ? "text-white" : "text-ink/50 hover:text-ink",
              )}
            >
              {active === category.id && (
                <motion.span
                  layoutId="faq-tab"
                  className="absolute inset-0 bg-deep-blue rounded-full shadow-sm"
                  transition={reducedMotion ? { duration: 0 } : transition.base}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{category.title}</span>
            </button>
          ))}
        </div>
      </AnimateIn>

      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={transition.fast}
          >
            <FAQList items={activeCategory.items} defaultOpen="faq-default-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
