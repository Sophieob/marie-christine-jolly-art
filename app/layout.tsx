import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophie&apos;s Art — Gallery",
  description: "A minimal online gallery for Sophie&apos;s paintings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10 sm:px-8 sm:py-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

