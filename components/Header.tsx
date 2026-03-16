import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-zinc-950">
            Marie-Christine Jolly
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-zinc-400 sm:inline">
            Paintings
          </span>
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-zinc-600">
          <Link
            href="/"
            className="rounded-full px-3 py-1 hover:bg-zinc-100 hover:text-zinc-900"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="rounded-full px-3 py-1 hover:bg-zinc-900 hover:text-white"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-1 hover:bg-zinc-100 hover:text-zinc-900"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

