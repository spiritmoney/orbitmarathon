"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardAccent } from "@/components/tokens/CardAccent";
import { transition } from "@/lib/motion";
import type { MediaCategory, MediaItem } from "@/lib/data/media";

const AUTOPLAY_MS = 5500;

const categoryColors: Record<MediaCategory, string> = {
  Lagos: "bg-white/15 text-white",
  Stadium: "bg-white/15 text-white",
  Cycling: "bg-volt/90 text-ink",
};

interface MediaSlideshowProps {
  items: MediaItem[];
  className?: string;
  fullBleed?: boolean;
}

export function MediaSlideshow({
  items,
  className,
  fullBleed = false,
}: MediaSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoFailed, setVideoFailed] = useState<Record<string, boolean>>({});
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const count = items.length;

  const current = items[index];

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const go = useCallback(
    (dir: 1 | -1) => goTo(index + dir),
    [goTo, index],
  );

  useEffect(() => {
    if (reducedMotion || paused || count <= 1) return;
    const timer = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [go, paused, reducedMotion, index, count]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || current?.type !== "video" || videoFailed[current.id]) return;

    video.currentTime = 0;
    video.play().catch(() => {
      setVideoFailed((prev) => ({ ...prev, [current.id]: true }));
    });

    return () => {
      video.pause();
    };
  }, [index, current, videoFailed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!current) return null;

  const slideVariants = reducedMotion
    ? { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        enter: { opacity: 0, scale: 1.04 },
        center: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.02 },
      };

  const showVideo =
    current.type === "video" &&
    !videoFailed[current.id] &&
    !reducedMotion;

  const imageSrc =
    current.type === "image"
      ? current.src
      : (current.poster ?? current.src);

  return (
    <div
      className={cn(
        fullBleed ? "absolute inset-0" : "relative",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Full-bleed media */}
      <div
        className={cn(
          "relative overflow-hidden bg-ink",
          fullBleed
            ? "absolute inset-0 h-full w-full"
            : "aspect-[16/9] md:aspect-[21/9] min-h-[240px] md:min-h-[380px] rounded-sm border border-white/10",
        )}
        aria-roledescription="carousel"
        aria-label="Lagos, stadium, and cycling highlights"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition.slow}
            className="absolute inset-0"
            aria-live="polite"
          >
            {showVideo ? (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src={current.src}
                poster={current.poster}
                muted
                loop
                playsInline
                aria-label={current.alt}
                onError={() =>
                  setVideoFailed((prev) => ({ ...prev, [current.id]: true }))
                }
              />
            ) : (
              <Image
                src={imageSrc}
                alt={current.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            )}

            {/* Neutral cinematic scrims — let photography show through */}
            {fullBleed ? (
              <>
                <div
                  className="absolute inset-x-0 top-0 h-[38%] pointer-events-none bg-gradient-to-b from-black/55 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-[48%] pointer-events-none bg-gradient-to-t from-black/80 via-black/45 to-transparent"
                  aria-hidden="true"
                />
              </>
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            )}

            <CardAccent variant="frame" className="z-10" />

            {/* Slide caption — sits above bottom controls in fullBleed */}
            {!fullBleed && (
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <SlideCaption current={current} />
                <SlideCounter index={index} count={count} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md border border-white/20 hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom bar — caption, thumbs, controls */}
      {count > 1 && (
        <div
          className={cn(
            fullBleed
              ? "absolute inset-x-0 bottom-0 z-20 pt-12 pb-6 md:pb-8"
              : "mt-4 relative",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-4",
              fullBleed && "max-w-[1180px] mx-auto px-4 md:px-8",
            )}
          >
            {fullBleed && (
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pointer-events-none">
                <div className="pointer-events-auto">
                  <SlideCaption current={current} />
                </div>
                <div className="pointer-events-auto">
                  <SlideCounter index={index} count={count} />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pointer-events-auto">
              <div
                className="flex gap-2 overflow-x-auto pb-1"
                role="tablist"
                aria-label="Slide thumbnails"
              >
                {items.map((item, i) => {
                  const thumbSrc =
                    item.type === "image" ? item.src : (item.poster ?? item.src);
                  const isActive = i === index;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`${item.caption ?? item.alt}, slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={cn(
                        "relative shrink-0 w-16 h-11 md:w-20 md:h-14 rounded-sm overflow-hidden border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
                        isActive
                          ? "border-volt opacity-100 scale-105 shadow-lg shadow-black/40"
                          : "border-white/20 opacity-60 hover:opacity-90",
                      )}
                    >
                      <Image
                        src={thumbSrc}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 border border-white/25 text-white backdrop-blur-sm hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
                aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
              >
                {paused ? (
                  <Play className="h-3.5 w-3.5 fill-current" />
                ) : (
                  <Pause className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SlideCaption({ current }: { current: MediaItem }) {
  return (
    <div>
      {current.category && (
        <span
          className={cn(
            "inline-block text-[10px] font-extrabold uppercase tracking-widest px-2 py-1 rounded-sm mb-2 backdrop-blur-md border border-white/10",
            categoryColors[current.category],
          )}
        >
          {current.category}
        </span>
      )}
      {current.caption && (
        <p className="font-display text-2xl md:text-4xl uppercase text-white leading-heading drop-shadow-sm">
          {current.caption}
        </p>
      )}
    </div>
  );
}

function SlideCounter({ index, count }: { index: number; count: number }) {
  return (
    <p className="font-body text-xs text-white/55 tabular-nums shrink-0">
      {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
    </p>
  );
}
