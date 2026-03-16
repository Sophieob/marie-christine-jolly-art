import Image from "next/image";
import { InspirationModal } from "../../components/InspirationModal";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-0 py-4 sm:px-0 sm:py-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            About
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            About Marie-Christine
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] md:items-start">
          <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-100 md:h-80">
            <Image
              src="/artist/artist.JPG"
              alt="Artist portrait in the studio"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
            <p>
            Marie-Christine Jolly is a French artist now based in Wexford, Ireland, where she works from her home studio surrounded by the landscapes that inspire much of her work. Drawing deeply from nature, her paintings are influenced by the changing colours of the sea, shifting skies, coastal light, and the quiet beauty found in everyday moments outdoors.
            </p>
            <p>
            Before dedicating more time to painting, Marie-Christine worked as a tour guide, sharing her love of places, landscapes, and stories with visitors. That same sense of curiosity and appreciation for the world continues to shape her art today. Many of her ideas begin while walking in nature or painting outside, observing how light moves across water, fields, and trees.
            </p>
            <p>
            Marie-Christine enjoys exploring different techniques and materials, often experimenting with new approaches alongside her local painting group. For her, painting is not only a personal practice but also a shared experience. She loves exchanging ideas with fellow artists and passing on techniques she has discovered to friends, family, and especially her grandchildren.
            </p>
            <p>
            Her work reflects a lifelong appreciation for nature, creativity, and the simple joy of making art.
            </p>
          </div>
        </div>

        <section aria-label="Studio and process" className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Studio notes
            </h2>
            <p className="text-sm text-zinc-600">
              Glimpses of the studio, work in progress, and the slow build-up of
              each painting.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative h-40 overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/artist/1.jpg"
                alt="Artist working on a painting"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/artist/2.jpg"
                alt="Studio space with canvases"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/artist/3.jpg"
                alt="Detail of paint on palette"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/artist/4.jpg"
                alt="Works in progress leaning against the wall"
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section aria-label="Commissions and inspiration" className="space-y-3">
          <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6">
            <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
              Commissions & inspiration
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Have a place, feeling, or color story you&apos;d like to see
              explored in paint? Share an inspiration note and (optionally) a
              reference photo. This is a placeholder request form for now — it
              won&apos;t send anything yet.
            </p>
            <div className="mt-4">
              <InspirationModal />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

