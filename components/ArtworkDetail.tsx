"use client";

import Image from "next/image";
import { useState } from "react";
import type { Artwork } from "../data/artworks";
import { EnquiryModal } from "./EnquiryModal";

interface ArtworkDetailProps {
  artwork: Artwork;
}

export function ArtworkDetail({ artwork }: ArtworkDetailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = artwork.images.length > 0;
  const activeImage = hasImages ? artwork.images[activeIndex] : undefined;
  const isAvailable = artwork.status === "available";

  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
      <section aria-label={artwork.title} className="space-y-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-100">
          {activeImage && (
            <Image
              src={activeImage}
              alt={artwork.title}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        {hasImages && artwork.images.length > 1 && (
          <div
            className="mt-2 flex gap-3 overflow-x-auto pb-1"
            aria-label="More views of this artwork"
          >
            {artwork.images.map((src, index) => (
              <button
                key={src + index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border ${
                  index === activeIndex
                    ? "border-zinc-900"
                    : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                <Image
                  src={src}
                  alt={`${artwork.title} view ${index + 1}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Artwork
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {artwork.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                isAvailable
                  ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                  : "bg-zinc-100 text-zinc-500 ring-1 ring-zinc-200"
              }`}
            >
              {isAvailable ? "Available" : "Sold"}
            </span>
            <EnquiryModal artworkTitle={artwork.title} />
          </div>
        </header>

        <dl className="space-y-2 text-sm text-zinc-700">
          {artwork.year != null && (
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Year</dt>
              <dd className="text-right">{artwork.year}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-400">Medium</dt>
            <dd className="text-right">{artwork.medium}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-zinc-400">Size</dt>
            <dd className="text-right">{artwork.size}</dd>
          </div>
        </dl>

        <div className="space-y-5 text-sm leading-relaxed text-zinc-700">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Inspiration
            </h2>
            <p>
              {artwork.description ??
                "This piece began with a remembered shift of light — the kind that changes the mood of a place in a few minutes. Rather than painting a specific scene, the goal was to hold on to the feeling of arriving there."}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Technique
            </h2>
            <p>
              Built up in thin layers, with passages gently wiped back or
              sanded, then repainted. Marks are kept soft so the surface can
              feel calm, but still alive with movement.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Background
            </h2>
            <p>
              Studio notes for this work focused on restraint — letting the
              composition breathe, and allowing quiet areas to hold as much
              weight as the more detailed passages.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <a
            href="/gallery"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 underline-offset-4 hover:text-zinc-900 hover:underline"
          >
            ← Back to gallery
          </a>
        </div>
      </section>
    </div>
  );
}

