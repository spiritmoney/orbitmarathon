"use client";

import Link from "next/link";
import Image from "next/image";
import { Heading, Body } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { VoltSlash } from "@/components/tokens/VoltSlash";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { brandLogos } from "@/lib/data/brand";

export function RegisterCTA() {
  return (
    <section className="relative bg-deep-blue text-white py-16 md:py-20 overflow-hidden">
      <VoltSlash variant="mask" className="opacity-40 right-0 w-[400px]" />
      <Image
        src={brandLogos.voltWide}
        alt=""
        width={280}
        height={132}
        className="absolute bottom-6 right-6 md:right-12 w-[min(42vw,220px)] h-auto opacity-20 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <AnimateIn variant="slideFromLeft">
          <Heading as="h2" size="lg" className="text-white">
            Do not be left out of history
          </Heading>
          <Body className="text-tint-blue mt-3 max-w-md">
            Free registration. Mandatory official jersey. ₦50M in prizes. Join the Orbit community.
          </Body>
        </AnimateIn>
        <AnimateIn variant="slideFromRight" delay={0.1}>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button asChild variant="primary" size="lg">
              <Link href="/register">Register & buy jersey</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
