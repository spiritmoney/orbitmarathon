"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Body, Eyebrow, Heading } from "@/components/tokens";
import { AnimateIn, Stagger, StaggerItem } from "@/components/motion/AnimateIn";
import type { NewsArticle } from "@/lib/data/news";

interface NewsTeaserProps {
  articles: NewsArticle[];
}

export function NewsTeaser({ articles }: NewsTeaserProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8">
        <AnimateIn>
          <SectionHeader
            eyebrow="Latest"
            title="News"
            description="Press, announcements, and course updates from the Orbit Marathon team."
          />
        </AnimateIn>
        <Stagger className="grid md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <StaggerItem key={article.slug}>
              <motion.div
                whileHover={reducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="block h-full bg-white border border-line overflow-hidden hover:border-sapphire transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
                >
                  <div className="relative aspect-[16/10] bg-paper-dim">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                  <Eyebrow>{article.category}</Eyebrow>
                  <Heading as="h3" size="md" className="mt-2 normal-case text-2xl">
                    {article.title}
                  </Heading>
                  <Body muted className="mt-2 text-sm">{article.excerpt}</Body>
                  <time className="block mt-4 text-xs text-ink/40 font-semibold uppercase">
                    {new Date(article.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
