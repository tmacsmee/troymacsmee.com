"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Circles from "../../../public/circles.png";

export default function ArtPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Art</h1>
      <p className="mt-6">I&apos;m not an artist.</p>
      <div className="flex flex-wrap gap-4">
        <ZoomableImage
          src={Circles}
          alt="Circles"
          unoptimized
          duration={150}
          className={cn("w-96 h-auto")}
        />
        <ZoomableImage
          src={Circles}
          alt="Circles"
          unoptimized
          duration={150}
          className={cn("w-96 h-auto")}
        />
      </div>
    </div>
  );
}

type ZoomableImageProps = ImageProps & { duration?: number };

export function ZoomableImage({
  duration = 400,
  ...imgProps
}: ZoomableImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggle();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);

  function toggle() {
    const el = ref.current;
    if (!el) return;

    el.style.transition = "none";

    const first = el.getBoundingClientRect();

    flushSync(() => setZoomed((z) => !z));

    const last = el.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / last.width || 1;
    const sy = first.height / last.height || 1;

    el.style.transformOrigin = "top left";
    el.style.transform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetWidth;

    el.style.transition = `transform ${duration}ms ease-in-out`;
    el.style.transform = "none";
  }

  return (
    <>
      <div
        className={`fixed inset-0 ${
          zoomed
            ? "opacity-100 backdrop-blur-md pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity`}
        onClick={toggle}
        aria-hidden
      />

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        ref={ref as React.RefObject<HTMLImageElement>}
        {...imgProps}
        className={cn(
          "will-change-transform",
          imgProps.className,
          zoomed
            ? "cursor-zoom-out fixed inset-0 m-auto z-50 h-120 w-auto"
            : "relative cursor-zoom-in"
        )}
        unoptimized
        onClick={toggle}
      />
    </>
  );
}
