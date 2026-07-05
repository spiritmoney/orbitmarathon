"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { partners } from "@/lib/data/partners";
import type { SponsorPartner } from "@/lib/data/partners";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/motion/AnimateIn";

function PartnerLogoItem({ partner }: { partner: SponsorPartner }) {
  const isCoatOfArms = partner.name === "Lagos State Government";

  if (partner.logo) {
    return (
      <div
        className={cn(
          "relative shrink-0 transition-all duration-300 ease-out",
          "grayscale opacity-60 scale-100",
          "hover:grayscale-0 hover:opacity-100 hover:scale-125 hover:z-10",
          isCoatOfArms ? "h-16 md:h-20 w-16 md:w-20" : "h-12 md:h-14 w-[130px] md:w-[160px]",
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
        "text-ink/30 transition-all duration-300 ease-out scale-100",
        "hover:text-ink hover:scale-110 hover:z-10",
      )}
    >
      {partner.name}
    </div>
  );
}

export function PartnerStrip() {
  const reducedMotion = useReducedMotion();
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-12 bg-white border-y border-line overflow-hidden">
      <AnimateIn variant="fadeIn">
        <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 text-center mb-8 px-4">
          Official partners & sponsors
        </p>
      </AnimateIn>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        {reducedMotion ? (
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 px-4 md:px-8 max-w-[1180px] mx-auto">
            {partners.map((partner) => (
              <PartnerLogoItem key={partner.name} partner={partner} />
            ))}
          </div>
        ) : (
          <div className="overflow-hidden">
            <div
              className="partner-marquee-track flex w-max items-center gap-10 md:gap-14 py-6 animate-partner-marquee"
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
