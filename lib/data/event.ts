/** Shared Orbit Marathon / Orbit Ride & Gateway event constants */
import { prizePool } from "./awards";

export const eventInfo = {
  name: "Orbit Marathon",
  parentBrand: "Orbit Ride & Gateway",
  governmentPartner: "Lagos State Government",
  tagline: "The ultimate expression of the Orbit lifestyle",
  startDate: "2026-09-05T06:00:00+01:00",
  endDate: "2026-09-07",
  dateLabel: "5 — 7 September 2026",
  startLocation: "Oniru Stadium, Lagos",
  finishLocation: "Teslim Balogun Stadium, Surulere, Lagos",
  routeLabel: "Oniru Stadium → Teslim Balogun Stadium",
  location: "Oniru Stadium to Teslim Balogun Stadium, Lagos",
  registrationFee: 0,
  jerseyPrice: 20_000,
  jerseySizes: ["S", "M", "L", "XL", "XXL"] as const,
  ageMin: 18,
  ageMax: 50,
  whatsapp: "+234 708 340 4918",
  whatsappLink: "https://wa.me/2347083404918",
  phone: "+234 708 340 4918",
  phoneLink: "tel:+2347083404918",
  email: "hello@orbitmarathon.com",
  pressEmail: "press@orbitmarathon.com",
  /** kg CO2 estimated saved per runner vs. driving to the start line */
  kgCo2PerRunner: 4.2,
  /** Seed count for Green Mile counter until live registration API is connected */
  registeredRunners: 1247,
};

export const socialLinks = [
  {
    platform: "Facebook",
    label: "Orbit Marathon",
    href: "https://www.facebook.com/OrbitMarathon",
  },
  {
    platform: "Instagram",
    label: "Orbit Marathon",
    href: "https://www.instagram.com/orbitmarathon",
  },
  {
    platform: "TikTok",
    label: "Orbit Marathon",
    href: "https://www.tiktok.com/@orbitmarathon",
  },
] as const;

export const aboutMarathon = `The Orbit Marathon is the ultimate expression of the Orbit lifestyle — formally approved by the Lagos State Government and delivered in partnership with Orbit Ride & Gateway. Together, we are combining public endorsement with innovative mobility expertise to achieve a landmark endurance event for Lagos. Whether you are a seasoned elite athlete or a weekend warrior, this is your platform to showcase endurance, community spirit, and the Nigerian drive for excellence.`;

/** Hero stat strip — sourced from confirmed event facts */
export const heroStats = [
  { value: `₦${prizePool.total / 1_000_000}M`, label: "Prize pool" },
  { value: "Free", label: "Registration" },
  { value: `${eventInfo.ageMin}–${eventInfo.ageMax}`, label: "Age limit" },
  // {
  //   value: `₦${(eventInfo.jerseyPrice / 1000).toFixed(0)}K`,
  //   label: "Official jersey",
  // },
];
