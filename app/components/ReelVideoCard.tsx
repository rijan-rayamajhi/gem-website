"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { VolumeHigh, VolumeMute } from "iconsax-reactjs";

export default function ReelVideoCard({
  src,
  ariaLabel,
}: {
  src: string;
  ariaLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
  }, [muted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsActive(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.6 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isActive || document.visibilityState !== "visible") {
      video.pause();
      return;
    }

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Ignore autoplay blocks.
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

      if (isActive) {
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

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);

    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Ignore autoplay blocks.
      });
    }
  }, []);

  return (
    <div className="relative aspect-[9/16] min-h-[360px] w-full overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-white/10 dark:to-white/5">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster="/app_icon.png"
        muted
        playsInline
        loop
        preload="none"
        controls={false}
        aria-label={ariaLabel}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/65 to-transparent" />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        aria-pressed={!muted}
        className="absolute bottom-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white shadow-sm backdrop-blur transition hover:bg-black/60"
      >
        {muted ? (
          <VolumeMute size={20} variant="Bold" />
        ) : (
          <VolumeHigh size={20} variant="Bold" />
        )}
      </button>
    </div>
  );
}
