"use client";

import { useMemo, useState } from "react";
import type { Artwork, ArtworkStatus } from "../data/artworks";
import { GalleryGrid } from "./GalleryGrid";

function mediumCategory(medium: string) {
  const trimmed = medium.trim();
  if (trimmed.toLowerCase().startsWith("oil")) return "Oil";
  if (trimmed.toLowerCase().startsWith("acrylic")) return "Acrylic";
  if (trimmed.toLowerCase().startsWith("mixed")) return "Mixed Media";
  if (trimmed.toLowerCase().startsWith("watercolor")) return "Watercolor";
  return trimmed;
}

type AvailabilityFilter = "all" | ArtworkStatus;

interface GalleryBrowserProps {
  artworks: Artwork[];
}

export function GalleryBrowser({ artworks }: GalleryBrowserProps) {
  const mediaOptions = useMemo(() => {
    const set = new Set<string>();
    for (const artwork of artworks) set.add(mediumCategory(artwork.medium));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [artworks]);

  const [selectedMedium, setSelectedMedium] = useState<string>("All");
  const [selectedAvailability, setSelectedAvailability] =
    useState<AvailabilityFilter>("all");

  const filtered = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesMedium =
        selectedMedium === "All" ||
        mediumCategory(artwork.medium) === selectedMedium;
      const matchesAvailability =
        selectedAvailability === "all" ||
        artwork.status === selectedAvailability;
      return matchesMedium && matchesAvailability;
    });
  }, [artworks, selectedAvailability, selectedMedium]);

  return (
    <div className="flex flex-col">
      <section aria-label="Filters" className="mt-6">
        <div className="flex flex-col gap-3 rounded-xl border border-zinc-100 bg-white p-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Medium
              </span>
              <select
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value)}
                className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none ring-zinc-900 focus:ring-2"
              >
                {mediaOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Availability
              </span>
              <select
                value={selectedAvailability}
                onChange={(e) =>
                  setSelectedAvailability(e.target.value as AvailabilityFilter)
                }
                className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 outline-none ring-zinc-900 focus:ring-2"
              >
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
              </select>
            </label>
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <p className="text-xs text-zinc-500">
              Showing <span className="font-medium text-zinc-900">{filtered.length}</span>{" "}
              of{" "}
              <span className="font-medium text-zinc-900">{artworks.length}</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedMedium("All");
                setSelectedAvailability("all");
              }}
              className="inline-flex h-10 items-center rounded-full border border-zinc-300 px-4 text-xs font-medium text-zinc-800 transition hover:border-zinc-900 hover:text-zinc-950"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      <GalleryGrid artworks={filtered} />
    </div>
  );
}

