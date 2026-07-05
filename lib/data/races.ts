import type { WaveId } from "@/lib/registration-store";

export interface Race {
  id: WaveId;
  slug: string;
  name: string;
  tag: string;
  description: string;
  distance: string;
  elevation: string;
  cutoff: string;
  startTime: string;
  price: number;
  currency: string;
  highlights: string[];
  aidStations: { km: number; name: string; services: string[] }[];
  rules: { title: string; content: string }[];
}

export const races: Race[] = [
  {
    id: "coastal-180",
    slug: "coastal-180",
    name: "Coastal 180",
    tag: "Open wave",
    description:
      "Full distance ride leg along Lagos coastal roads. Closed circuit, rolling elevation, and aid every 20km.",
    distance: "180 km",
    elevation: "1,340 m gain",
    cutoff: "10 hours",
    startTime: "06:00 WAT",
    price: 0,
    currency: "NGN",
    highlights: [
      "Closed roads from Victoria Island to Epe",
      "Rolling coastal elevation profile",
      "Professional chip timing throughout",
    ],
    aidStations: [
      { km: 20, name: "Lekki Checkpoint", services: ["Water", "Electrolytes", "Mechanical"] },
      { km: 40, name: "Ajah Village", services: ["Water", "Food", "Medical"] },
      { km: 60, name: "Badagry Turn", services: ["Water", "Electrolytes"] },
      { km: 80, name: "Halfway Village", services: ["Full aid station", "Medical", "Bike wash"] },
      { km: 100, name: "Coastal Rest", services: ["Water", "Food"] },
      { km: 120, name: "Epe Gate", services: ["Water", "Electrolytes", "Mechanical"] },
      { km: 140, name: "Final Push", services: ["Water", "Gels", "Medical"] },
      { km: 160, name: "Stadium Approach", services: ["Water", "Electrolytes"] },
    ],
    rules: [
      { title: "Age eligibility", content: "Runners must be between 18 and 50 years old. Valid government-issued ID required at kit collection." },
      { title: "Equipment", content: "Road bikes only. Helmets mandatory at all times." },
      { title: "Cutoff", content: "Riders must reach halfway village within 5 hours." },
      { title: "Drafting", content: "Drafting permitted in open wave only." },
    ],
  },
  {
    id: "marathon-42",
    slug: "marathon-42",
    name: "Marathon 42",
    tag: "Elite wave",
    description:
      "Standard marathon distance, flat and fast, finishing inside the Teslim Balogun Stadium.",
    distance: "42.2 km",
    elevation: "210 m gain",
    cutoff: "6 hours",
    startTime: "06:30 WAT",
    price: 0,
    currency: "NGN",
    highlights: [
      "IAAF-certified course",
      "Flat coastal route optimized for PBs",
      "Stadium finish with live crowd",
    ],
    aidStations: [
      { km: 5, name: "VI Start", services: ["Water", "Electrolytes"] },
      { km: 10, name: "Lekki Bridge", services: ["Water", "Gels"] },
      { km: 15, name: "Maroko", services: ["Water", "Food", "Medical"] },
      { km: 21.1, name: "Halfway", services: ["Full aid station", "Medical"] },
      { km: 30, name: "Ikoyi Loop", services: ["Water", "Electrolytes"] },
      { km: 35, name: "Final 7", services: ["Water", "Gels", "Medical"] },
      { km: 40, name: "Stadium Gate", services: ["Water", "Electrolytes"] },
    ],
    rules: [
      { title: "Age eligibility", content: "Runners must be between 18 and 50 years old. Valid government-issued ID required at kit collection." },
      { title: "Qualification", content: "Sub-4:30 marathon or coach recommendation required for elite wave." },
      { title: "Pacing", content: "Official pacers available for 3:00, 3:30, and 4:00 targets." },
      { title: "Cutoff", content: "30km cutoff at 4 hours 30 minutes." },
    ],
  },
  {
    id: "duo-orbit",
    slug: "duo-orbit",
    name: "Duo Orbit",
    tag: "Relay",
    description:
      "Split the two legs across a two-person team. Hand-off at the halfway village with live timing.",
    distance: "222 km total",
    elevation: "1,550 m gain",
    cutoff: "12 hours",
    startTime: "06:00 WAT",
    price: 0,
    currency: "NGN",
    highlights: [
      "Two athletes, one finish line",
      "Synchronized hand-off zone",
      "Shared team leaderboard category",
    ],
    aidStations: [
      { km: 0, name: "Team Start", services: ["Briefing", "Bike check"] },
      { km: 90, name: "Hand-off Village", services: ["Full transition support", "Medical"] },
      { km: 180, name: "Runner Start", services: ["Warm-up zone", "Pacer briefing"] },
      { km: 222, name: "Joint Finish", services: ["Medals", "Photos"] },
    ],
    rules: [
      { title: "Age eligibility", content: "All team members must be between 18 and 50 years old. Valid government-issued ID required at kit collection." },
      { title: "Team composition", content: "Exactly two athletes per team. One rider, one runner." },
      { title: "Hand-off", content: "Chip exchange must occur within the designated 200m zone." },
      { title: "Timing", content: "Team time starts at rider start and ends at runner finish." },
    ],
  },
];

export function getRaceBySlug(slug: string): Race | undefined {
  return races.find((r) => r.slug === slug);
}

export function getRaceById(id: WaveId): Race | undefined {
  return races.find((r) => r.id === id);
}
