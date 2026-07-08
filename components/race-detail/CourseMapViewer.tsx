"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { races } from "@/lib/data/races";
import {
  courses,
  defaultCourseWave,
  googleMapsEmbedUrl,
  googleMapsExternalUrl,
  googleMapsTravelMode,
  type MapLandmark,
} from "@/lib/data/course";
import type { WaveId } from "@/lib/registration-store";
import { Body } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const landmarkTypeLabel: Record<MapLandmark["type"], string> = {
  start: "Start",
  finish: "Finish",
  aid: "Aid station",
  handoff: "Hand-off zone",
};

export function CourseMapViewer() {
  const [activeWave, setActiveWave] = useState<WaveId>(defaultCourseWave);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const course = courses.find((c) => c.waveId === activeWave)!;
  const race = races.find((r) => r.id === activeWave)!;
  const travelMode = googleMapsTravelMode(activeWave);
  const selected: MapLandmark | undefined = course.landmarks.find((l) => l.id === selectedId);

  return (
    <div className="space-y-6">
      <div
        className="flex flex-wrap gap-2 p-1 rounded-full bg-paper-dim w-fit"
        role="tablist"
        aria-label="Course by wave"
      >
        {races.map((r) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            aria-selected={activeWave === r.id}
            onClick={() => {
              setActiveWave(r.id);
              setSelectedId(null);
            }}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
              activeWave === r.id
                ? "bg-deep-blue text-white shadow-sm"
                : "text-ink/50 hover:text-ink",
            )}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        <div className="bg-white rounded-sm overflow-hidden border border-line shadow-sm">
          <div className="relative aspect-[16/10] w-full min-h-[320px] bg-paper-dim">
            <iframe
              key={`${activeWave}-${travelMode}`}
              title={`Google Maps — ${race.name} course from Oniru Stadium to Teslim Balogun Stadium`}
              src={googleMapsEmbedUrl(travelMode)}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-paper-dim border-t border-line">
            <Body muted className="text-xs">
              {courseRouteLabel(travelMode)} · {race.distance}
            </Body>
            <p className="text-xs text-ink/40">Powered by Google Maps</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-line p-5 min-h-[140px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-sapphire mb-2">
              {selected ? "Checkpoint" : "Select a checkpoint"}
            </p>
            {selected ? (
              <>
                <p className="font-display text-2xl text-deep-blue">{selected.km}km</p>
                <p className="font-body font-bold text-sm mt-1">{selected.name}</p>
                <Body muted className="text-xs mt-2">
                  {landmarkTypeLabel[selected.type]}
                </Body>
              </>
            ) : (
              <Body muted className="text-sm">
                Choose a checkpoint below to view distance and aid station details.
              </Body>
            )}
          </div>

          <div className="bg-white border border-line max-h-[220px] overflow-y-auto">
            <p className="sticky top-0 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-sapphire border-b border-line">
              Checkpoints
            </p>
            <ul className="divide-y divide-line">
              {course.landmarks.map((landmark) => (
                <li key={landmark.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(landmark.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 transition-colors",
                      "hover:bg-paper-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sun",
                      selectedId === landmark.id && "bg-tint-blue/30",
                    )}
                  >
                    <span className="font-display text-lg text-deep-blue leading-none">
                      {landmark.km}
                      <span className="text-xs font-body font-bold text-ink/40 ml-0.5">km</span>
                    </span>
                    <span className="block font-body text-sm font-semibold mt-1">{landmark.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Button asChild variant="primary" size="sm">
              <a href={course.gpxUrl} download>
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Download GPX
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href={googleMapsExternalUrl(travelMode)} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function courseRouteLabel(travelMode: ReturnType<typeof googleMapsTravelMode>): string {
  if (travelMode === "walking") return "Walking route";
  if (travelMode === "bicycling") return "Cycling route";
  return "Driving route";
}
