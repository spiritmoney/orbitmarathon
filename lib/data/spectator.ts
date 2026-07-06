export interface SpectatorGalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** Tailwind grid placement on md+ */
  layout: "tall" | "wide" | "square";
}

export interface SpectatorHighlight {
  title: string;
  description: string;
}

export const spectatorIntro = {
  eyebrow: "No bike? No problem",
  title: "Come for the vibe, stay for the finish",
  description:
    "You do not have to ride to be part of race weekend. Bring friends and family, soak up the Lagos energy, and celebrate athletes as they cross the line — free to spectate, open to everyone.",
};

export const spectatorGallery: SpectatorGalleryItem[] = [
  {
    id: "lagos-week",
    src: "/download.avif",
    alt: "Lagos city views during race week",
    caption: "Race week across Lagos",
    layout: "tall",
  },
  {
    id: "stadium",
    src: "/media/images/stadium-finish.svg",
    alt: "Teslim Balogun Stadium finish line",
    caption: "Stadium finish · Fan zone",
    layout: "square",
  },
  {
    id: "celebration",
    src: "/media/images/cyclist-victory.png",
    alt: "Athlete celebrating at the finish line",
    caption: "Cheer at the finish",
    layout: "square",
  },
  {
    id: "coast",
    src: "/media/images/hero-cycling.avif",
    alt: "Athletes on the coastal route with crowds nearby",
    caption: "Energy along the route",
    layout: "wide",
  },
  {
    id: "community",
    src: "/media/images/community-start.svg",
    alt: "Community gathered at the start area",
    caption: "Community at the start",
    layout: "square",
  },
];

export const spectatorHighlights: SpectatorHighlight[] = [
  {
    title: "Stadium fan zone",
    description:
      "Join the crowd at Teslim Balogun Stadium for the finish-line festival — live results, music, and the award ceremony on the final day.",
  },
  {
    title: "Cheer along the route",
    description:
      "Line key checkpoints from Oniru to Surulere. No registration needed — just show up, wave a flag, and back the athletes.",
  },
  {
    title: "Festival weekend",
    description:
      "Food vendors, partner activations, and family-friendly zones run throughout 5–7 September. Come for an hour or make a day of it.",
  },
  {
    title: "Run instead of ride",
    description:
      "Prefer running? Register for Marathon 42 — the same coastal circuit, no bicycle required. Free entry; official jersey at checkout.",
  },
];
