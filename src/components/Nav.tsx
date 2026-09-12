"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sistema", label: "Sistema SVA" },
  { href: "#numeros", label: "Resultados" },
  { href: "#sectores", label: "Sectores" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md border-b border-black/10" : "bg-white/0"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/logo-ceronix-black.png"
            alt="Ceronix"
            width={56}
            height={56}
            className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
          />
          <span className="text-xl font-extrabold tracking-tight text-black">CERONIX</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
        >
          Hablar con especialista
        </a>

        <button
          className="md:hidden text-black"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-black/10 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-black/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
          >
            Hablar con especialista
          </a>
        </div>
      )}
    </header>
  );
}
