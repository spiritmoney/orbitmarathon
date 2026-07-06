import type { WaveId } from "@/lib/registration-store";

export interface ElevationPoint {
  km: number;
  elevation: number;
}

export interface MapLandmark {
  id: string;
  name: string;
  km: number;
  x: number;
  y: number;
  type: "start" | "finish" | "aid" | "handoff";
}

export interface CourseDefinition {
  waveId: WaveId;
  /** SVG path for the route overlay */
  routePath: string;
  gpxUrl: string;
  maxKm: number;
  elevationGain: number;
  landmarks: MapLandmark[];
  elevation: ElevationPoint[];
  /** OpenStreetMap embed bbox: minLon, minLat, maxLon, maxLat */
  osmBbox: [number, number, number, number];
}

/** Shared coastal circuit — Oniru Stadium → Teslim Balogun Stadium */
const coastalRoutePath =
  "M 48 355 C 120 280, 180 300, 240 240 S 400 160, 520 120 S 680 90, 720 75";

const coastalLandmarks: MapLandmark[] = [
  { id: "start", name: "Oniru Stadium", km: 0, x: 6, y: 79, type: "start" },
  { id: "lekki", name: "Lekki Checkpoint", km: 20, x: 18, y: 68, type: "aid" },
  { id: "ajah", name: "Ajah Village", km: 40, x: 28, y: 62, type: "aid" },
  { id: "badagry", name: "Badagry Turn", km: 60, x: 38, y: 55, type: "aid" },
  { id: "halfway", name: "Halfway Village", km: 80, x: 48, y: 48, type: "aid" },
  { id: "coastal", name: "Coastal Rest", km: 100, x: 58, y: 40, type: "aid" },
  { id: "epe", name: "Epe Gate", km: 120, x: 68, y: 32, type: "aid" },
  { id: "final", name: "Final Push", km: 140, x: 78, y: 26, type: "aid" },
  { id: "stadium-approach", name: "Stadium Approach", km: 160, x: 86, y: 20, type: "aid" },
  { id: "finish", name: "Teslim Balogun Stadium", km: 180, x: 90, y: 17, type: "finish" },
];

const coastalElevation: ElevationPoint[] = [
  { km: 0, elevation: 12 },
  { km: 10, elevation: 28 },
  { km: 20, elevation: 45 },
  { km: 30, elevation: 62 },
  { km: 40, elevation: 78 },
  { km: 50, elevation: 95 },
  { km: 60, elevation: 110 },
  { km: 70, elevation: 125 },
  { km: 80, elevation: 142 },
  { km: 90, elevation: 128 },
  { km: 100, elevation: 115 },
  { km: 110, elevation: 132 },
  { km: 120, elevation: 148 },
  { km: 130, elevation: 160 },
  { km: 140, elevation: 145 },
  { km: 150, elevation: 130 },
  { km: 160, elevation: 118 },
  { km: 170, elevation: 95 },
  { km: 180, elevation: 12 },
];

const marathonLandmarks: MapLandmark[] = [
  { id: "start", name: "Oniru Stadium", km: 0, x: 6, y: 79, type: "start" },
  { id: "lekki-bridge", name: "Lekki Bridge", km: 10, x: 14, y: 72, type: "aid" },
  { id: "maroko", name: "Maroko", km: 15, x: 18, y: 68, type: "aid" },
  { id: "halfway", name: "Halfway", km: 21.1, x: 24, y: 62, type: "aid" },
  { id: "ikoyi", name: "Ikoyi Loop", km: 30, x: 32, y: 56, type: "aid" },
  { id: "final7", name: "Final 7", km: 35, x: 38, y: 52, type: "aid" },
  { id: "stadium-gate", name: "Stadium Gate", km: 40, x: 44, y: 48, type: "aid" },
  { id: "finish", name: "Teslim Balogun Stadium", km: 42.2, x: 48, y: 45, type: "finish" },
];

const marathonRoutePath =
  "M 48 355 C 100 310, 150 290, 200 260 S 280 220, 340 200";

const marathonElevation: ElevationPoint[] = [
  { km: 0, elevation: 8 },
  { km: 5, elevation: 15 },
  { km: 10, elevation: 22 },
  { km: 15, elevation: 28 },
  { km: 21.1, elevation: 35 },
  { km: 25, elevation: 32 },
  { km: 30, elevation: 38 },
  { km: 35, elevation: 42 },
  { km: 40, elevation: 35 },
  { km: 42.2, elevation: 10 },
];

export const courses: CourseDefinition[] = [
  {
    waveId: "coastal-180",
    routePath: coastalRoutePath,
    gpxUrl: "/media/gpx/coastal-180.gpx",
    maxKm: 180,
    elevationGain: 1340,
    landmarks: coastalLandmarks,
    elevation: coastalElevation,
    osmBbox: [3.35, 6.35, 4.05, 6.65],
  },
  {
    waveId: "marathon-42",
    routePath: marathonRoutePath,
    gpxUrl: "/media/gpx/marathon-42.gpx",
    maxKm: 42.2,
    elevationGain: 210,
    landmarks: marathonLandmarks,
    elevation: marathonElevation,
    osmBbox: [3.38, 6.40, 3.55, 6.50],
  },
  {
    waveId: "duo-orbit",
    routePath: `${coastalRoutePath} M 340 200 L 48 355`,
    gpxUrl: "/media/gpx/duo-orbit.gpx",
    maxKm: 222,
    elevationGain: 1550,
    landmarks: [
      coastalLandmarks[0],
      { id: "handoff", name: "Hand-off Village", km: 90, x: 52, y: 46, type: "handoff" },
      ...coastalLandmarks.slice(1, -1),
      coastalLandmarks[coastalLandmarks.length - 1],
    ],
    elevation: [
      ...coastalElevation.slice(0, 10),
      { km: 90, elevation: 142 },
      ...marathonElevation.slice(4),
    ],
    osmBbox: [3.35, 6.35, 4.05, 6.65],
  },
];

export function getCourseByWave(waveId: WaveId): CourseDefinition | undefined {
  return courses.find((c) => c.waveId === waveId);
}

export const defaultCourseWave: WaveId = "coastal-180";

export function osmEmbedUrl(bbox: [number, number, number, number]): string {
  const [minLon, minLat, maxLon, maxLat] = bbox;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=6.4541%2C3.3947`;
}

export function osmExternalUrl(): string {
  return "https://www.openstreetmap.org/#map=11/6.4541/3.5247";
}
