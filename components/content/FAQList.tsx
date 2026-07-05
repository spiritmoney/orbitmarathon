"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import { transition } from "@/lib/motion";

export interface FAQEntry {
  question: string;
  answer: string;
}

interface FAQListProps {
  items: FAQEntry[];
  groupLabel?: string;
  className?: string;
  defaultOpen?: string;
}

export function FAQList({
  items,
  groupLabel,
  className,
  defaultOpen,
}: FAQListProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn("w-full", className)}>
      {groupLabel && (
        <p className="mb-4 font-body text-[11px] font-bold uppercase tracking-eyebrow text-sapphire">
          {groupLabel}
        </p>
      )}
      <Stagger stagger={0.06}>
        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue={defaultOpen}
          className="flex flex-col gap-4"
        >
          {items.map((item, i) => (
            <StaggerItem key={item.question}>
              <AccordionPrimitive.Item
                value={`faq-${groupLabel ?? "default"}-${i}`}
                className="group rounded-xl bg-white ring-1 ring-ink/[0.06] transition-shadow hover:ring-ink/10 data-[state=open]:ring-sapphire/20 data-[state=open]:shadow-sm"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex w-full items-start gap-4 px-5 py-4 text-left",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 rounded-xl",
                    )}
                  >
                    <span className="flex-1 font-body text-[15px] md:text-base font-semibold leading-snug text-ink pr-2">
                      {item.question}
                    </span>
                    <motion.span
                      className={cn(
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                        "bg-paper-dim text-ink/50",
                        "group-data-[state=open]:bg-deep-blue group-data-[state=open]:text-white",
                      )}
                      aria-hidden="true"
                      whileTap={reducedMotion ? undefined : { scale: 0.92 }}
                      transition={transition.fast}
                    >
                      <Plus
                        className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-45"
                        strokeWidth={2.5}
                      />
                    </motion.span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className={cn(
                    "overflow-hidden",
                    "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                  )}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="font-body text-sm md:text-[15px] leading-relaxed text-ink/60 max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            </StaggerItem>
          ))}
        </AccordionPrimitive.Root>
      </Stagger>
    </div>
  );
}

interface FAQSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FAQEntry[];
  footer?: React.ReactNode;
  className?: string;
}

export function FAQSection({
  eyebrow = "Help",
  title,
  description,
  items,
  footer,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-[720px] mx-auto px-4 md:px-8">
        <AnimateIn className="text-center mb-10 md:mb-12">
          {eyebrow && (
            <p className="font-body text-[11px] font-bold uppercase tracking-eyebrow text-sapphire mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase leading-heading tracking-heading text-ink">
            {title}
          </h2>
          {description && (
            <p className="mt-4 font-body text-base text-ink/55 leading-relaxed">
              {description}
            </p>
          )}
        </AnimateIn>

        <FAQList items={items} />

        {footer && (
          <AnimateIn delay={0.2} className="mt-8 text-center">
            {footer}
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
