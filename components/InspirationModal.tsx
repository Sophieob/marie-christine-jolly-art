"use client";

import { useEffect, useState } from "react";

interface InspirationModalProps {
  triggerLabel?: string;
}

export function InspirationModal({ triggerLabel = "Send Inspiration" }: InspirationModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setOpen(true);
        }}
        className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-8 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Inspiration request
                </p>
                <h2 className="mt-1 text-sm font-semibold text-zinc-900">
                  Share an idea for a commission
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
                aria-label="Close inspiration form"
              >
                ×
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="space-y-1 text-sm">
                  <label className="block text-xs font-medium text-zinc-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="h-9 w-full rounded-md border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-zinc-900 focus:ring-2"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-xs font-medium text-zinc-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="h-9 w-full rounded-md border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-zinc-900 focus:ring-2"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-xs font-medium text-zinc-600">
                    Inspiration description
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-900 outline-none ring-zinc-900 focus:ring-2"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-xs font-medium text-zinc-600">
                    Technique requested (optional)
                  </label>
                  <input
                    type="text"
                    name="technique"
                    className="h-9 w-full rounded-md border border-zinc-200 px-3 text-sm text-zinc-900 outline-none ring-zinc-900 focus:ring-2"
                    placeholder="e.g. oil, watercolor wash, mixed media"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-xs font-medium text-zinc-600">
                    Inspiration photo (optional)
                  </label>
                  <input
                    type="file"
                    name="photo"
                    className="block w-full text-xs text-zinc-600 file:mr-4 file:rounded-full file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-xs file:font-medium file:text-zinc-900 hover:file:bg-zinc-200"
                    accept="image/*"
                  />
                </div>

                <div className="mt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-xs font-medium text-zinc-500 hover:text-zinc-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    Send inspiration
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-5 space-y-3 text-sm text-zinc-700">
                <p className="font-medium text-zinc-900">
                  Thank you for sharing your inspiration.
                </p>
                <p>The artist will review your idea.</p>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

