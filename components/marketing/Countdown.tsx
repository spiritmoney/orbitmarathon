"use client";

import { useEffect, useState } from "react";
import { eventInfo } from "@/lib/data/event";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: number): TimeLeft | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const target = new Date(eventInfo.startDate).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!timeLeft) {
    return (
      <p className="font-display text-2xl md:text-3xl uppercase text-volt text-center">
        Race week is here
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-3 md:gap-5" aria-live="polite" aria-label="Countdown to race day">
      {units.map((unit) => (
        <div key={unit.label} className="text-center min-w-[3.5rem]">
          <p className="font-display text-3xl md:text-5xl leading-none text-white tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-tint-blue mt-1">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
