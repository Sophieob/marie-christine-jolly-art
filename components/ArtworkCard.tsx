"use client";

import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "../data/artworks";
import { EnquiryModal } from "./EnquiryModal";

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const isAvailable = artwork.status === "available";
  const coverImage = artwork.images[0];

  return (
    <Link
      href={`/gallery/${artwork.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white text-left shadow-sm shadow-zinc-100 transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-50">
        {coverImage && (
          <Image
            src={coverImage}
            alt={artwork.title}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            unoptimized
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-4">
        <header className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
            {artwork.title}
          </h3>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isAvailable
                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                : "bg-zinc-100 text-zinc-500 ring-1 ring-zinc-200"
            }`}
          >
            {isAvailable ? "Available" : "Sold"}
          </span>
        </header>
        <dl className="space-y-1 text-xs text-zinc-600">
          <div className="flex justify-between gap-3">
            <dt className="text-zinc-400">Medium</dt>
            <dd className="text-right">{artwork.medium}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-zinc-400">Size</dt>
            <dd className="text-right">{artwork.size}</dd>
          </div>
        </dl>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-zinc-100 px-4 py-3">
        <span className="text-xs text-zinc-500">View details →</span>
        <EnquiryModal artworkTitle={artwork.title} compact />
      </div>
    </Link>
  );
}

