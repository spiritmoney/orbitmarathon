"use client";

import Image from "next/image";
import { Body, Heading, Eyebrow } from "@/components/tokens";
import { PartnerLogo } from "@/components/marketing/PartnerLogo";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { governmentPartnership } from "@/lib/data/partners";
import { CheckCircle2 } from "lucide-react";

interface OfficialPartnershipProps {
  variant?: "default" | "compact";
}

/** Fixed height keeps title/role lines aligned; logos scale up inside via object-contain */
const logoSlotClass =
  "relative h-40 md:h-44 w-full max-w-[280px] mx-auto shrink-0";

const titleClass =
  "min-h-[2.75rem] md:min-h-[3rem] flex items-center justify-center font-body text-sm font-bold text-ink leading-snug px-1";

const roleClass =
  "min-h-[2rem] flex items-start justify-center text-[10px] font-bold uppercase tracking-widest text-sapphire leading-relaxed px-1";

export function OfficialPartnership({ variant = "default" }: OfficialPartnershipProps) {
  const brands = governmentPartnership.brands;

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center gap-6 md:gap-10 py-4">
        {brands.map((brand, index) => (
          <span key={brand.id} className="contents">
            {index > 0 && (
              <span className="text-ink/20 font-display text-2xl" aria-hidden="true">
                ×
              </span>
            )}
            <PartnerLogo
              src={brand.logo}
              alt={brand.logoAlt}
              className={
                brand.id === "orbit-ride"
                  ? "h-12 md:h-14 w-[160px] md:w-[200px]"
                  : brand.id === "lssc"
                    ? "h-16 md:h-20 w-14 md:w-16"
                    : "h-14 md:h-16 w-[140px] md:w-[160px]"
              }
            />
          </span>
        ))}
        <Body muted className="text-xs max-w-xs">
          Approved by Lagos State Government · LSSC · Orbit Ride & Gateway
        </Body>
      </div>
    );
  }

  return (
    <section className="py-14 md:py-20 bg-paper-dim border-t border-line">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <AnimateIn className="text-center max-w-2xl mx-auto mb-10">
          <Eyebrow className="mb-3">{governmentPartnership.eyebrow}</Eyebrow>
          <Heading as="h2" size="lg" className="normal-case text-3xl md:text-4xl">
            {governmentPartnership.title}
          </Heading>
          <Body className="mt-4 text-ink/70">{governmentPartnership.statement}</Body>
        </AnimateIn>

        <AnimateIn delay={0.08}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto">
            {brands.map((brand) => (
              <article
                key={brand.id}
                className="bg-paper-dim border border-line p-6 md:p-8 flex h-full flex-col items-center text-center"
              >
                <div className={logoSlotClass}>
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt}
                    fill
                    className="object-contain object-center"
                    sizes="280px"
                    priority
                  />
                </div>
                <div className="mt-5 flex w-full flex-col items-center">
                  <p className={titleClass}>{brand.name}</p>
                  <p className={roleClass}>{brand.role}</p>
                </div>
              </article>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.14} className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-8">
          <div className="flex gap-3 bg-tint-blue/40 border border-sapphire/15 p-5">
            <CheckCircle2 className="h-5 w-5 text-deep-blue shrink-0 mt-0.5" aria-hidden="true" />
            <Body className="text-sm text-ink/75">{governmentPartnership.approvalNote}</Body>
          </div>
          <div className="flex gap-3 bg-tint-green/60 border border-forest/15 p-5">
            <CheckCircle2 className="h-5 w-5 text-forest shrink-0 mt-0.5" aria-hidden="true" />
            <Body className="text-sm text-ink/75">{governmentPartnership.partnershipNote}</Body>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
