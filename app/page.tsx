import Link from "next/link";
import Image from "next/image";
import { artworks } from "../data/artworks";
import { ArtworkCard } from "../components/ArtworkCard";

export default function Home() {
  const featured = artworks.slice(0, 3);
  const heroImage = "/artist/hero.JPG";

  return (
    <div className="flex flex-1 flex-col gap-12">
      <section className="-mx-6 overflow-hidden rounded-2xl sm:-mx-8">
        <div className="relative h-[360px] w-full sm:h-[420px]">
          {heroImage && (
            <Image
              src={heroImage}
              alt="Studio hero artwork"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 pb-8 sm:px-10 sm:pb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Original Artworks
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Marie-Christine Jolly
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Paintings inspired by nature, sea light, and the quiet beauty of the Irish coast.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-white/90"
                >
                  View Gallery
                  <span aria-hidden="true" className="text-base">
                    →
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/15"
                >
                  About the Artist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-baseline justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Featured works
            </h2>
            <p className="text-sm text-zinc-500">
              A few recent pieces from the studio.
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden text-xs font-medium text-zinc-700 underline-offset-4 hover:text-zinc-900 hover:underline sm:inline-flex"
          >
            View full gallery →
          </Link>
        </header>

        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>
    </div>
  );
}


