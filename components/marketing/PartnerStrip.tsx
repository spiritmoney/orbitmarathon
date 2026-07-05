"use client";

import { partners } from "@/lib/data/partners";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";

export function PartnerStrip() {
  return (
    <section className="py-12 bg-white border-y border-line overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <AnimateIn variant="fadeIn">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 text-center mb-8">
            Official partners
          </p>
        </AnimateIn>
        <Stagger className="flex flex-wrap justify-center items-center gap-8 md:gap-12" stagger={0.05}>
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <div className="font-display text-xl md:text-2xl text-ink/30 uppercase tracking-wide transition-colors hover:text-ink/50">
                {partner.name}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
