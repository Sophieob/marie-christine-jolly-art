import { ArtworkCard } from "./ArtworkCard";
import type { Artwork } from "../data/artworks";

interface GalleryGridProps {
  artworks: Artwork[];
}

export function GalleryGrid({ artworks }: GalleryGridProps) {
  return (
    <section aria-label="Artworks" className="py-8 sm:py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}

