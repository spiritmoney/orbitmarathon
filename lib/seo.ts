import type { Metadata } from "next";
import { eventInfo, socialLinks } from "@/lib/data/event";
import { prizePool } from "@/lib/data/awards";

/** Set in production: NEXT_PUBLIC_SITE_URL=https://your-domain.com */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://orbitmarathon.com";

export const siteConfig = {
  name: eventInfo.name,
  shortName: "Orbit Marathon",
  parentBrand: eventInfo.parentBrand,
  tagline: eventInfo.tagline,
  locale: "en_NG",
  twitterHandle: "@orbitmarathon",
} as const;

export const defaultDescription = `${eventInfo.name} by ${eventInfo.parentBrand} — ${eventInfo.dateLabel}, ${eventInfo.routeLabel}. Free registration, official jersey (₦${eventInfo.jerseyPrice.toLocaleString()}), ₦${prizePool.total / 1_000_000}M prize pool. Lagos, Nigeria.`;

export const defaultKeywords = [
  "Orbit Marathon",
  "Lagos marathon",
  "cycling marathon Lagos",
  "Nigeria cycling event",
  "Coastal 180",
  "Marathon 42",
  "Duo Orbit",
  "Orbit Ride & Gateway",
  "Teslim Balogun Stadium",
  "Oniru Stadium",
  "Lagos State Government marathon",
  "free marathon registration Nigeria",
].join(", ");

import { siteImages } from "@/lib/data/images";

export const defaultOgImage = siteImages.cyclistVictory;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = defaultOgImage,
  noIndex = false,
  type = "website",
}: PageMetadataOptions = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${eventInfo.dateLabel}, Lagos`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [imageUrl],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata(),
  title: {
    default: `${siteConfig.name} — Lagos Coastal Cycling & Marathon`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  category: "Sports",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.parentBrand,
    url: siteUrl,
    logo: absoluteUrl("/media/logos/orbit-ride-full.svg"),
    email: eventInfo.email,
    telephone: eventInfo.phone,
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function sportsEventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: siteConfig.name,
    description: defaultDescription,
    startDate: eventInfo.startDate,
    endDate: `${eventInfo.endDate}T23:59:59+01:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: absoluteUrl(defaultOgImage),
    url: siteUrl,
    location: {
      "@type": "Place",
      name: eventInfo.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
    },
    organizer: {
      "@type": "Organization",
      name: eventInfo.parentBrand,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: eventInfo.registrationFee,
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/register"),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-NG",
    publisher: {
      "@type": "Organization",
      name: eventInfo.parentBrand,
    },
  };
}

/** Routes that should not be indexed */
export const noIndexPaths = [
  "/athletes/dashboard",
  "/sign-in",
  "/register/confirmation",
  "/register/payment",
  "/register/details",
  "/register/kit",
] as const;
