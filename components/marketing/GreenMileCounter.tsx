"use client";

import { useEffect, useState } from "react";
import { eventInfo } from "@/lib/data/event";

const STORAGE_KEY = "orbit-registered-count";

function getRunnerCount(): number {
  if (typeof window === "undefined") return eventInfo.registeredRunners;
  const extra = Number(localStorage.getItem(STORAGE_KEY) ?? 0);
  return eventInfo.registeredRunners + extra;
}

export function GreenMileCounter() {
  const [runners, setRunners] = useState(eventInfo.registeredRunners);
  const co2Saved = Math.round(runners * eventInfo.kgCo2PerRunner);

  useEffect(() => {
    setRunners(getRunnerCount());
    const onStorage = () => setRunners(getRunnerCount());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <section className="py-10 bg-tint-green border-y border-forest/20">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-forest mb-1">
            The Green Mile Challenge
          </p>
          <p className="font-body text-sm text-ink/80 max-w-xl">
            Every runner who laces up instead of driving helps cut emissions. Live counter updates as
            registrations come in through the Orbit portal.
          </p>
        </div>
        <div className="flex gap-8 shrink-0">
          <div className="text-right">
            <p className="font-display text-4xl text-forest tabular-nums">{runners.toLocaleString()}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink/50">Runners registered</p>
          </div>
          <div className="text-right">
            <p className="font-display text-4xl text-forest tabular-nums">{co2Saved.toLocaleString()} kg</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-ink/50">CO₂ saved vs. driving</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Call after successful jersey payment */
export function incrementRegisteredCount() {
  if (typeof window === "undefined") return;
  const current = Number(localStorage.getItem(STORAGE_KEY) ?? 0);
  localStorage.setItem(STORAGE_KEY, String(current + 1));
  window.dispatchEvent(new Event("storage"));
}
