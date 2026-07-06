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
  src: "/media/images/hero-cycling.avif",
  alt: "Cyclists riding the Lagos coastal circuit",
  caption: "Coastal 180 · Lagos, Nigeria",
  category: "Cycling",
};

/** In motion slideshow — Lagos, stadium, and cycling */
export const slideshowMedia: MediaItem[] = [
  {
    id: "slide-victory",
    type: "image",
    src: "/media/images/cyclist-victory.png",
    alt: "Cyclist celebrating at the finish line with arms raised",
    caption: "Cross the line · Make history",
    category: "Cycling",
  },
  {
    id: "slide-cycling-coastal",
    type: "image",
    src: "/media/images/hero-cycling.avif",
    alt: "Road cyclists on the Lagos coastal circuit",
    caption: "Oniru Stadium → Teslim Balogun Stadium",
    category: "Cycling",
  },
  {
    id: "slide-lagos-download",
    type: "image",
    src: "/download.avif",
    alt: "Lagos city and coastal views during race week",
    caption: "Lagos · Race week",
    category: "Lagos",
  },
  {
    id: "slide-peloton",
    type: "image",
    src: "/media/images/cycling-peloton.avif",
    alt: "Peloton of cyclists during Orbit Marathon",
    caption: "Race day peloton",
    category: "Cycling",
  },
  {
    id: "slide-stadium",
    type: "image",
    src: "/media/images/stadium-finish.svg",
    alt: "Teslim Balogun Stadium finish line",
    caption: "Teslim Balogun Stadium · Surulere",
    category: "Stadium",
  },
  {
    id: "slide-coastal-clip",
    type: "video",
    src: "/media/clips/coastal-ride.mp4",
    poster: "/media/images/cyclist-victory.png",
    alt: "Cyclists riding along the Lagos coastline",
    caption: "Coastal circuit · In motion",
    category: "Cycling",
  },
];

/** @deprecated use slideshowMedia */
export const galleryMedia = slideshowMedia;

export const storyMedia: MediaItem = {
  id: "story",
  type: "image",
  src: "/media/images/cyclist-victory.png",
  alt: "Cyclist celebrating victory at the finish line with arms raised",
  caption: "Cross the line · Make history",
  category: "Cycling",
};

export const courseMedia: MediaItem = {
  id: "course",
  type: "image",
  src: "/media/images/hero-cycling.avif",
  alt: "Orbit Marathon cyclists on the Lagos coastal route",
  caption: "180km ride · 42.2km run · one circuit",
  category: "Cycling",
};
