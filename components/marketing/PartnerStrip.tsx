"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { partners } from "@/lib/data/partners";
import type { SponsorPartner } from "@/lib/data/partners";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/motion/AnimateIn";

/** Enough repeats so each half fills wide viewports */
const REPEATS_PER_HALF = 10;

function buildMarqueeSequence() {
  const half = Array.from({ length: REPEATS_PER_HALF }, () => partners).flat();
  return [...half, ...half];
}

function PartnerLogoItem({ partner }: { partner: SponsorPartner }) {
  const isBadge = partner.logoVariant === "badge";

  if (partner.logo) {
    return (
      <div
        className={cn(
          "relative shrink-0 transition-all duration-300 ease-out",
          "opacity-100 scale-100",
          "hover:scale-125 hover:z-10",
          isBadge ? "h-20 md:h-24 w-18 md:w-20" : "h-14 md:h-16 w-[150px] md:w-[180px]",
        )}
      >
        <Image
          src={partner.logo}
          alt={partner.logoAlt ?? partner.name}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "shrink-0 px-2 font-display text-xl md:text-2xl uppercase tracking-wide text-center",
        "text-ink/50 transition-all duration-300 ease-out scale-100",
        "hover:text-ink hover:scale-110 hover:z-10",
      )}
    >
      {partner.name}
    </div>
  );
}

export function PartnerStrip() {
  const reducedMotion = useReducedMotion();
  const marqueeItems = useMemo(() => buildMarqueeSequence(), []);

  return (
    <section className="py-6 md:py-8 bg-white border-y border-line overflow-hidden">
      <AnimateIn variant="fadeIn">
        <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 text-center mb-4 px-4">
          Official partners
        </p>
      </AnimateIn>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
        }}
      >
        {reducedMotion ? (
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 px-4 max-w-[1180px] mx-auto">
            {partners.map((partner) => (
              <PartnerLogoItem key={partner.name} partner={partner} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden">
            <div
              className="partner-marquee-track flex w-max items-center gap-6 md:gap-8 py-2 animate-partner-marquee [--marquee-gap:1.5rem] md:[--marquee-gap:2rem] will-change-transform"
              aria-hidden={false}
            >
              {marqueeItems.map((partner, index) => (
                <PartnerLogoItem
                  key={`${partner.name}-${index}`}
                  partner={partner}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
