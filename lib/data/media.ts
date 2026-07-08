import { siteImages } from "./images";

export type MediaType = "image" | "video";

export type MediaCategory = "Lagos" | "Stadium" | "Cycling";

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
  poster?: string;
  alt: string;
  caption?: string;
  credit?: string;
  category?: MediaCategory;
}

export const heroMedia: MediaItem = {
  id: "hero",
  type: "image",
  src: siteImages.heroCycling,
  alt: "Cyclists riding the Lagos coastal circuit",
  caption: "Coastal 180 · Lagos, Nigeria",
  category: "Cycling",
};

/** In motion slideshow — mix of legacy and new photography */
export const slideshowMedia: MediaItem[] = [
  {
    id: "slide-victory",
    type: "image",
    src: siteImages.cyclistVictory,
    alt: "Cyclist celebrating at the finish line with arms raised",
    caption: "Cross the line · Make history",
    category: "Cycling",
  },
  {
    id: "slide-cycling-coastal",
    type: "image",
    src: siteImages.heroCycling,
    alt: "Road cyclists on the Lagos coastal circuit",
    caption: "Oniru Stadium → Teslim Balogun Stadium",
    category: "Cycling",
  },
  {
    id: "slide-lagos-week",
    type: "image",
    src: siteImages.lagosRaceWeek,
    alt: "Lagos city and coastal views during race week",
    caption: "Lagos · Race week",
    category: "Lagos",
  },
  {
    id: "slide-peloton",
    type: "image",
    src: siteImages.cyclingPeloton,
    alt: "Peloton of cyclists during Orbit Marathon",
    caption: "Race day peloton",
    category: "Cycling",
  },
  {
    id: "slide-stadium",
    type: "image",
    src: siteImages.teslimBalogunAerial,
    alt: "Aerial view of Teslim Balogun Stadium in Surulere, Lagos",
    caption: "Teslim Balogun Stadium · Surulere",
    category: "Stadium",
  },
  {
    id: "slide-crowd-cheer",
    type: "image",
    src: siteImages.crowdCheerCyclists,
    alt: "Spectators cheering riders along the race route",
    caption: "Coastal circuit · In motion",
    category: "Cycling",
  },
];

/** @deprecated use slideshowMedia */
export const galleryMedia = slideshowMedia;

export const storyMedia: MediaItem = {
  id: "story",
  type: "image",
  src: siteImages.cyclistVictory,
  alt: "Cyclist celebrating victory at the finish line with arms raised",
  caption: "Cross the line · Make history",
  category: "Cycling",
};

export const courseMedia: MediaItem = {
  id: "course",
  type: "image",
  src: siteImages.heroCycling,
  alt: "Orbit Marathon cyclists on the Lagos coastal route",
  caption: "180km ride · 42.2km run · one circuit",
  category: "Cycling",
};
