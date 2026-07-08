import { siteImages } from "./images";

export interface TrainingArticle {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  body: string;
  pdfPath?: string;
  coverImage: string;
  coverAlt: string;
}

export const trainingArticles: TrainingArticle[] = [
  {
    slug: "180km-prep-guide",
    title: "Preparing for the Coastal 180",
    excerpt: "A 16-week training plan for first-time ultra-distance cyclists.",
    readTime: "8 min",
    category: "Cycling",
    coverImage: siteImages.cyclingPeloton,
    coverAlt: "Cyclists in a road race peloton",
    body: "The Coastal 180 demands sustained power output over 6–10 hours. This guide covers base building, nutrition strategy, and taper protocols specific to the Lagos coastal profile.\n\nWeeks 1–8 focus on aerobic base with long rides building to 120km. Weeks 9–14 introduce race-pace intervals and heat acclimatization. The final two weeks taper volume while maintaining intensity.",
    pdfPath: "/media/plans/coastal-180-plan.pdf",
  },
  {
    slug: "marathon-heat-acclimation",
    title: "Heat Acclimation for Lagos",
    excerpt: "How to prepare your body for September race conditions in West Africa.",
    readTime: "6 min",
    category: "Running",
    coverImage: siteImages.lagosCityMarathon,
    coverAlt: "Marathon runners on the Lagos city course",
    body: "Lagos in September averages 29°C with high humidity. Start heat acclimation at least 14 days before race day.\n\nIncorporate easy runs in warm conditions, increase electrolyte intake, and practice your race-day hydration plan during long runs.",
    pdfPath: "/media/plans/marathon-heat-plan.pdf",
  },
  {
    slug: "duo-orbit-transition",
    title: "Mastering the Duo Orbit Hand-off",
    excerpt: "Transition zone strategy for relay teams.",
    readTime: "5 min",
    category: "Relay",
    coverImage: siteImages.cyclingSprint,
    coverAlt: "Cyclists sprinting in a tight road race finish",
    body: "The hand-off at halfway village is timed and broadcast live. Practice chip exchange, gear swap, and runner warm-up in a single fluid sequence.\n\nAssign clear roles: one athlete manages timing chip, the other prepares for their leg. Rehearse at least twice before race day.",
    pdfPath: "/media/plans/duo-orbit-transition.pdf",
  },
];

export function getTrainingBySlug(slug: string): TrainingArticle | undefined {
  return trainingArticles.find((a) => a.slug === slug);
}
