import { brandLogos } from "./brand";
import { siteImages } from "./images";

export interface PartnerBrand {
  id: string;
  name: string;
  role: string;
  logo: string;
  logoAlt: string;
}

export const governmentPartnership = {
  eyebrow: "Official endorsement",
  title: "Approved by Lagos State Government",
  statement:
    "Orbit Marathon is formally approved by the Lagos State Government and delivered in official partnership with Orbit Ride & Gateway — uniting public endorsement with private innovation to deliver a world-class endurance event for Lagos.",
  approvalNote:
    "This event operates with the support and approval of Lagos State, aligning with the state’s commitment to health, sport, and sustainable urban living.",
  partnershipNote:
    "Orbit Ride & Gateway brings smart mobility expertise and operational excellence to help achieve this landmark feat on the Lagos coastal circuit.",
  brands: [
    {
      id: "lagos-state",
      name: "Lagos State Government",
      role: "Government approval & support",
      logo: siteImages.lagosStateGovernment,
      logoAlt: "Lagos State Government coat of arms",
    },
    {
      id: "lssc",
      name: "Lagos State Sports Commission",
      role: "Official sports authority",
      logo: siteImages.lssc,
      logoAlt: "Lagos State Sports Commission (LSSC) logo",
    },
    {
      id: "orbit-ride",
      name: "Orbit Ride & Gateway",
      role: "Official event partner",
      logo: brandLogos.full,
      logoAlt: "Orbit Ride & Gateway logo",
    },
  ] satisfies PartnerBrand[],
};

export interface SponsorPartner {
  name: string;
  tier: string;
  logo?: string;
  logoAlt?: string;
  /** Tall badge-style logos (coat of arms, LSSC crest) */
  logoVariant?: "badge" | "wide";
}

export const partners: SponsorPartner[] = [
  {
    name: "Lagos State Government",
    tier: "Government",
    logo: siteImages.lagosStateGovernment,
    logoAlt: "Lagos State Government coat of arms",
    logoVariant: "badge",
  },
  {
    name: "Lagos State Sports Commission",
    tier: "Government",
    logo: siteImages.lssc,
    logoAlt: "Lagos State Sports Commission (LSSC)",
    logoVariant: "badge",
  },
  {
    name: "Orbit Ride & Gateway",
    tier: "Official partner",
    logo: brandLogos.full,
    logoAlt: "Orbit Ride & Gateway",
    logoVariant: "wide",
  },
];

export const ambassadors = [
  { name: "Chioma Eze", discipline: "Marathon", bio: "Two-time Lagos Marathon winner and Orbit Marathon ambassador since 2024." },
  { name: "David Okon", discipline: "Cycling", bio: "National road race champion. Coastal 180 course record holder." },
  { name: "Amara Bello", discipline: "Duathlon", bio: "Duathlon specialist and Duo Orbit transition coach." },
];
