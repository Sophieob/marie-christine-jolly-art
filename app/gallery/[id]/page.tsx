import { notFound } from "next/navigation";
import { ArtworkDetail } from "../../../components/ArtworkDetail";
import { ArtworkCard } from "../../../components/ArtworkCard";
import { artworks } from "../../../data/artworks";

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artwork = artworks.find((piece) => piece.id === id);

  if (!artwork) {
    notFound();
  }

  const alsoLike = artworks.filter((piece) => piece.id !== artwork.id).slice(0, 3);

  return (
    <div className="flex flex-1 flex-col gap-12">
      <ArtworkDetail artwork={artwork} />

      <section aria-label="You may also like" className="space-y-4">
        <header className="space-y-1">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            You may also like
          </h2>
          <p className="text-sm text-zinc-500">
            A few other works from the gallery.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alsoLike.map((piece) => (
            <ArtworkCard key={piece.id} artwork={piece} />
          ))}
        </div>
      </section>
    </div>
  );
}

