"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
}

export default function HeroReel({
  src = "/hero.mp4",
  title = "Go Extra Mile",
  caption = "Log commute. Build consistency. Unlock benefits.",
}: {
  src?: string;
  title?: string;
  caption?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = Boolean(entry?.isIntersecting);
        setIsActive(visible);
      },
      { threshold: 0.55 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = prefersReducedMotion();

    if (!isActive || reduced || document.visibilityState !== "visible") {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay can be blocked by the browser; ignore silently.
      });
    }
  }, [isActive]);

  useEffect(() => {
    const onVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;

      if (document.visibilityState !== "visible") {
        video.pause();
        return;
      }

      if (isActive && !prefersReducedMotion()) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // Ignore autoplay blocks.
          });
        }
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-black/15 bg-zinc-950 shadow-xl ring-1 ring-black/5 dark:border-white/30 dark:ring-white/10">
        <div className="absolute left-1/2 top-4 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/25" />

        <div className="relative aspect-[9/16] min-h-[420px] sm:min-h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
            <Image
              src="/app_icon.png"
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl opacity-80"
            />
          </div>

          <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            poster="/app_icon.png"
            muted
            playsInline
            loop
            preload="none"
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setIsLoaded(false)}
            aria-label="Hero preview video"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-1 text-sm leading-5 text-white/85">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
