"use client";

import { Body, Heading, Eyebrow } from "@/components/tokens";
import { PartnerLogo } from "@/components/marketing/PartnerLogo";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { governmentPartnership } from "@/lib/data/partners";
import { CheckCircle2 } from "lucide-react";

interface OfficialPartnershipProps {
  variant?: "default" | "compact";
}

export function OfficialPartnership({ variant = "default" }: OfficialPartnershipProps) {
  const [lagos, orbit] = governmentPartnership.brands;

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap items-center gap-6 md:gap-10 py-4">
        <PartnerLogo src={lagos.logo} alt={lagos.logoAlt} className="h-10 md:h-12 w-[120px] md:w-[150px]" />
        <span className="text-ink/20 font-display text-2xl" aria-hidden="true">×</span>
        <PartnerLogo src={orbit.logo} alt={orbit.logoAlt} className="h-10 md:h-12 w-[130px] md:w-[160px]" />
        <Body muted className="text-xs max-w-xs">
          Approved by Lagos State Government · In partnership with Orbit Ride & Gateway
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
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-stretch max-w-4xl mx-auto">
            <article className="bg-paper-dim border border-line p-6 md:p-8 flex flex-col items-center text-center">
              <PartnerLogo
                src={lagos.logo}
                alt={lagos.logoAlt}
                className="h-28 md:h-32 w-28 md:w-32 mx-auto [&_img]:object-contain [&_img]:object-center"
                priority
              />
              <p className="mt-5 font-body text-sm font-bold text-ink">{lagos.name}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-sapphire">
                {lagos.role}
              </p>
            </article>

            <div
              className="hidden md:flex flex-col items-center justify-center px-2"
              aria-hidden="true"
            >
              <div className="w-px h-full min-h-[120px] bg-line relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 font-display text-2xl text-ink/25">
                  ×
                </span>
              </div>
            </div>

            <article className="bg-paper-dim border border-line p-6 md:p-8 flex flex-col items-center text-center">
              <PartnerLogo
                src={orbit.logo}
                alt={orbit.logoAlt}
                className="h-16 md:h-20 w-[200px] md:w-[220px] mx-auto [&_img]:object-center"
                priority
              />
              <p className="mt-5 font-body text-sm font-bold text-ink">{orbit.name}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-sapphire">
                {orbit.role}
              </p>
            </article>
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
