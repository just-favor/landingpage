// components/Footer.jsx
import Link from "next/link";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BsBluesky } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full mb-10 md:mb-25 px-5 md:px-50">
      <div className="max-w-screen-3xl mx-auto flex flex-col gap-10">

        {/* Mobile layout */}
        <div className="flex flex-col gap-10 md:hidden">
          <p className="text-3xl font-light text-black leading-tight tracking-tight max-w-lg">
            Building Stronger, More<br />Connected Teams
          </p>
          <div className="flex flex-col gap-3">
            <nav className="flex flex-col gap-3">
              <a href="#overview" className="text-base text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Overview</a>
              <a href="#features" className="text-base text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Features</a>
              <a href="#results" className="text-base text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Results</a>
            </nav>
            <nav className="flex flex-col gap-3">
              <Link href="/changelog" className="text-base text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Changelog</Link>
              <Link href="/privacy" className="text-base text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Privacy Policy</Link>
            </nav>
          </div>
          <div className="flex flex-col-reverse gap-5 pt-4 border-t border-black/10">
            <p className="text-sm text-black/60">©2026. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="https://x.com" aria-label="X" className="size-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <FaXTwitter className="size-4 text-black" />
              </a>
              <a href="https://bsky.app" aria-label="Bluesky" className="size-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <BsBluesky className="size-4 text-black" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="size-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <FaInstagram className="size-4 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop layout (original) */}
        <div className="hidden md:flex flex-row justify-between items-start gap-0">
          <div className="flex flex-col justify-between h-full gap-10">
            <p className="text-[2.6rem] font-light text-black leading-tight tracking-tight max-w-lg">
              Building Stronger, More<br />Connected Teams
            </p>
            <p className="text-lg text-black/95 mt-auto">©2026. All rights reserved.</p>
          </div>
          <div className="flex flex-col gap-10 items-end">
            <div className="flex items-start justify-between w-full md:w-sm">
              <nav className="flex flex-col gap-3">
                <a href="#overview" className="text-lg text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Overview</a>
                <a href="#features" className="text-lg text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Features</a>
                <a href="#results" className="text-lg text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Results</a>
              </nav>
              <nav className="flex flex-col gap-3 text-right">
                <Link href="/changelog" className="text-lg text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Changelog</Link>
                <Link href="/privacy" className="text-lg text-black underline underline-offset-6 hover:opacity-60 transition-opacity">Privacy Policy</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3 px-1">
              <a href="https://x.com" aria-label="X" className="size-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <FaXTwitter className="size-4.5 text-black" />
              </a>
              <a href="https://bsky.app" aria-label="Bluesky" className="size-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <BsBluesky className="size-4.5 text-black" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="size-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors">
                <FaInstagram className="size-4.5 text-black" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}