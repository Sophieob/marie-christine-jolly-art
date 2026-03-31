import { GalleryBrowser } from "../../components/GalleryBrowser";
import { artworks } from "../../data/artworks";

export default function GalleryPage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Gallery
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
          Paintings on display
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          A small selection of Marie-Christine&apos;s recent work. Pieces marked as
          &quot;Available&quot; may be reserved or purchased by enquiry in a
          future step of this site.
        </p>
      </header>
      <GalleryBrowser artworks={artworks} />
    </div>
  );
}

