"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardAccent } from "@/components/tokens/CardAccent";
import type { MediaItem } from "@/lib/data/media";

interface MediaAssetProps {
  item: MediaItem;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
  showCaption?: boolean;
  autoplay?: boolean;
  imageClassName?: string;
}

function MediaFallback({ alt, caption }: { alt: string; caption?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-deep-blue via-sapphire to-forest p-6 text-center">
      <ImageIcon className="h-10 w-10 text-volt/60 mb-3" aria-hidden="true" />
      <p className="text-xs font-bold uppercase tracking-wide text-white/80 max-w-[200px]">{alt}</p>
      {caption && <p className="text-[10px] text-tint-blue/70 mt-2">{caption}</p>}
    </div>
  );
}

export function MediaAsset({
  item,
  priority = false,
  fill = true,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showCaption = false,
  autoplay = false,
  imageClassName,
}: MediaAssetProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [playing, setPlaying] = useState(autoplay);

  const poster = item.poster ?? item.src;
  const useVideo = item.type === "video" && !videoFailed && playing;
  const imageSrc = item.type === "image" ? item.src : poster;

  return (
    <figure className={cn("relative overflow-hidden bg-deep-blue h-full w-full", className)}>
      <div className={cn("relative h-full w-full", fill && "absolute inset-0")}>
        {useVideo ? (
          <video
            className="h-full w-full object-cover"
            src={item.src}
            poster={poster}
            autoPlay={autoplay}
            muted
            loop
            playsInline
            aria-label={item.alt}
            onError={() => setVideoFailed(true)}
          />
        ) : imageFailed ? (
          <MediaFallback alt={item.alt} caption={item.caption} />
        ) : (
          <>
            <Image
              src={imageSrc}
              alt={item.alt}
              fill
              priority={priority}
              sizes={sizes}
              className={cn("object-cover", imageClassName)}
              onError={() => setImageFailed(true)}
            />
            {item.type === "video" && !autoplay && (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-ink/30 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
                aria-label={`Play video: ${item.alt}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sun text-ink shadow-lg group-hover:scale-105 transition-transform">
                  <Play className="h-6 w-6 fill-current ml-0.5" aria-hidden="true" />
                </span>
              </button>
            )}
          </>
        )}
        <CardAccent variant="frame" className="z-10" />
      </div>
      {showCaption && item.caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 pointer-events-none">
          <p className="text-xs font-bold uppercase tracking-wide text-white">{item.caption}</p>
          {item.credit && (
            <p className="text-[10px] text-white/60 mt-0.5">{item.credit}</p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
