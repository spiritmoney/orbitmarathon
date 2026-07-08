import { siteImages } from "./images";

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string;
  image: string;
  imageAlt: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "registration-opens-2026",
    title: "Registration Opens for Orbit Marathon 2026",
    excerpt: "Early bird pricing available until August 31. Secure your spot on the Lagos coastal circuit.",
    date: "2026-06-15",
    category: "Announcement",
    image: siteImages.marathonStart,
    imageAlt: "Thousands of runners at a major marathon start line",
    body: "Orbit Marathon returns to Lagos on 5–7 September with three waves: Coastal 180, Marathon 42, and Duo Orbit relay. Registration is free; a mandatory official jersey secures your spot.\n\nAthletes registering before August 15 receive priority wave selection. The route runs from Oniru Stadium to Teslim Balogun Stadium.\n\nRegister now to secure your bib number and access the athlete dashboard for training resources and race-day logistics.",
  },
  {
    slug: "course-map-updated",
    title: "2026 Course Map Published",
    excerpt: "Updated elevation profile and aid station locations now available for download.",
    date: "2026-05-28",
    category: "Course",
    image: siteImages.lekkiCoastal,
    imageAlt: "Aerial view of the Lagos coastal corridor",
    body: "The official 2026 course map is now live. The route runs from Oniru Stadium to Teslim Balogun Stadium, with updated aid station placements along the coastal leg.\n\nDownload the GPX files from the course map page or view the interactive elevation chart on each race detail page.",
  },
  {
    slug: "partner-spotlight-lagos-hotels",
    title: "Partner Spotlight: Lagos Accommodation Partners",
    excerpt: "Exclusive rates for Orbit Marathon athletes at partner hotels across Victoria Island and Lekki.",
    date: "2026-05-10",
    category: "Travel",
    image: siteImages.lagosCity,
    imageAlt: "Lagos city skyline and coastal views",
    body: "We have partnered with twelve hotels across Lagos to offer discounted rates for registered athletes. Book through the travel page using your registration confirmation code.\n\nShuttle services from partner hotels to the start line will run from 04:00 on race day.",
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
