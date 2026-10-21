"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTiltHover } from "@/hooks/useTiltHover";
import SectionFade from "./SectionFade";

const CLIENTS = [
  {
    id: "ady",
    name: "ADY Hair Studio",
    logo: "/logo-ady-hair-studio.png",
    logoWidth: 751,
    logoHeight: 560,
    url: "https://adyhairstudio.com",
  },
  {
    id: "mente-emprende",
    name: "Mente Emprende",
    logo: "/logo-mente-emprende-transparent.png",
    logoWidth: 462,
    logoHeight: 412,
    url: "https://mentemprende.app",
  },
  {
    id: "anas",
    name: "Anas El Sbeiai",
    logo: "/logo-anas-el-sbeiai-icon.png",
    logoWidth: 89,
    logoHeight: 66,
    url: "https://anaselsbeiai.com",
  },
];

function ClientLogo({ c, index }: { c: (typeof CLIENTS)[number]; index: number }) {
  const tilt = useTiltHover();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className="group rounded-3xl border border-black/10 bg-black/[0.02] hover:bg-black/[0.04] hover:border-black/20 transition-colors [transform-style:preserve-3d]"
    >
      <a
        href={c.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={c.name}
        className="h-40 flex items-center justify-center p-10"
      >
        <Image
          src={c.logo}
          alt={c.name}
          width={c.logoWidth}
          height={c.logoHeight}
          className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <SectionFade from="black" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            CLIENTES
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            Con quién hemos trabajado.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">
          {CLIENTS.map((c, i) => (
            <ClientLogo key={c.id} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
