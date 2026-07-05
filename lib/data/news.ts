export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  body: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "registration-opens-2026",
    title: "Registration Opens for Orbit Marathon 2026",
    excerpt: "Early bird pricing available until August 31. Secure your spot on the Lagos coastal circuit.",
    date: "2026-06-15",
    category: "Announcement",
    body: "Orbit Marathon returns to Lagos this October with three waves: Coastal 180, Marathon 42, and Duo Orbit relay. Early bird registration is now open with reduced entry fees across all categories.\n\nAthletes registering before August 31 receive a 15% discount and priority wave selection. The event expects over 12,000 participants from six continents.\n\nRegister now to secure your bib number and access the athlete dashboard for training resources and race-day logistics.",
  },
  {
    slug: "course-map-updated",
    title: "2026 Course Map Published",
    excerpt: "Updated elevation profile and aid station locations now available for download.",
    date: "2026-05-28",
    category: "Course",
    body: "The official 2026 course map is now live. Key changes include an extended coastal section through Epe and a redesigned stadium finish for the marathon leg.\n\nDownload the GPX files from the course map page or view the interactive elevation chart on each race detail page.",
  },
  {
    slug: "partner-spotlight-lagos-hotels",
    title: "Partner Spotlight: Lagos Accommodation Partners",
    excerpt: "Exclusive rates for Orbit Marathon athletes at partner hotels across Victoria Island and Lekki.",
    date: "2026-05-10",
    category: "Travel",
    body: "We have partnered with twelve hotels across Lagos to offer discounted rates for registered athletes. Book through the travel page using your registration confirmation code.\n\nShuttle services from partner hotels to the start line will run from 04:00 on race day.",
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
