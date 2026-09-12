"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-24">
      <div className="relative z-20 mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <p className="text-sm md:text-base font-semibold tracking-wide text-black/50 mb-6 animate-fade-up">
          SISTEMA SVA — SALES &amp; VALUE AUTOMATION
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance text-black animate-fade-up">
          Automatización sin límites.
          <br />
          Crecimiento exponencial.
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-black/60 font-medium animate-fade-up">
          El ecosistema que convierte tráfico frío en caja
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <a
            href="#sistema"
            className="inline-flex items-center justify-center rounded-full bg-black hover:bg-black/80 px-7 py-3.5 text-base font-semibold text-white transition-colors"
          >
            Ver Demo del Sistema
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full border border-black/20 hover:border-black px-7 py-3.5 text-base font-semibold text-black transition-colors"
          >
            Hablar con especialista
          </a>
        </div>
      </div>
    </section>
  );
}
