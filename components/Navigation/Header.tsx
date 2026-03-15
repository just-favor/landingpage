"use client"

import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const navLinks = [
    { label: "Overview", href: "#top" },
    { label: "Features", href: "#features" },
    { label: "Results", href: "#results" },
  ]

  return (
    <header className="w-full flex justify-center p-4 fixed top-5 left-0 z-50">
      <nav className="flex items-center justify-between w-full  sm:max-w-lg md:max-w-2xl bg-white/70 backdrop-blur-md px-4 py-2 md:py-2 rounded-full shadow-md">

        {/* Logo */}
        <a href="#top" className="font-semibold text-3xl md:text-3xl">
          Salient
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[20px] px-3 py-2 rounded-full hover:bg-black/10 transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center justify-center gap-5">
          <button className="bg-black text-white rounded-full px-5 py-2 text-md md:text-2xl hover:bg-gray-800 transition">
            Get started
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenu className="text-2xl" />
          </button>
        </div>

      </nav>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden z-50">
          <button
            className="absolute top-8 right-8 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <HiX className="text-2xl" />
          </button>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl px-6 py-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
