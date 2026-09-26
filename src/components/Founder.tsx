"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionFade from "./SectionFade";

const SITE_URL = "https://ceronix.es";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Basam El Sbeiai",
  jobTitle: "Fundador y CEO",
  worksFor: {
    "@type": "Organization",
    name: "Ceronix",
    url: SITE_URL,
  },
  image: `${SITE_URL}/basam-el-sbeiai-ceo.png`,
  url: `${SITE_URL}/#sobre-mi`,
  description:
    "Fundador y CEO de Ceronix, empresa tecnológica enfocada en el desarrollo de software, aplicaciones y soluciones basadas en inteligencia artificial.",
};

export default function Founder() {
  return (
    <section id="sobre-mi" className="relative bg-white py-24 md:py-32">
      <SectionFade from="black" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
            SOBRE MÍ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
            La persona detrás de Ceronix.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-start"
        >
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-black via-black to-neutral-900 border border-black/10 overflow-hidden shadow-xl shadow-black/10">
            <Image
              src="/basam-el-sbeiai-ceo.png"
              alt="Basam El Sbeiai, fundador y CEO de Ceronix"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-1">
              Basam El Sbeiai
            </h3>
            <p className="text-sm font-semibold text-black/45 tracking-wide mb-6">
              FUNDADOR &amp; CEO DE CERONIX
            </p>

            <div className="space-y-4 text-black/65 leading-relaxed">
              <p>
                Soy el fundador de Ceronix, una empresa tecnológica enfocada
                en el desarrollo de software, aplicaciones y soluciones
                basadas en inteligencia artificial.
              </p>
              <p>
                Con 17 años, estoy construyendo Ceronix desde cero mientras
                continúo mis estudios. He desarrollado proyectos propios
                como Mente Emprende, una aplicación educativa centrada en
                emprendimiento, y he trabajado en soluciones de software
                para negocios.
              </p>
              <p>
                Mi objetivo es combinar tecnología, inteligencia artificial
                y desarrollo de software para ayudar a las empresas a
                mejorar sus procesos, captar y recuperar clientes y
                aprovechar nuevas oportunidades digitales.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
