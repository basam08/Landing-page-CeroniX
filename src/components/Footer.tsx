import Image from "next/image";
import ParticleName from "./ParticleName";
import SectionFade from "./SectionFade";

export default function Footer() {
  return (
    <footer className="relative bg-black">
      <SectionFade from="white" />
      <div className="flex flex-col items-center justify-center py-20 border-b border-white/10">
        <ParticleName text="CERONIX" className="w-full max-w-2xl" />
        <p className="mt-4 text-sm text-white/40 tracking-wide">
          Ecosistema de Crecimiento Unificado
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <Image
              src="/logo-ceronix-white.png"
              alt="Ceronix"
              width={44}
              height={44}
              className="drop-shadow-[0_1px_3px_rgba(255,255,255,0.25)]"
            />
            <p className="text-xl font-extrabold tracking-tight text-white">CERONIX</p>
          </div>
          <p className="text-sm text-white/50 mb-6">
            Ecosistema de Crecimiento Unificado
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/ceronix/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-.98 1.83-2.02 3.76-2.02 4.02 0 4.76 2.5 4.76 5.75v6.63h-4v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.5-2.26 3.1v6h-4v-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ceron.ix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.06 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.34 1.26.4 2.43.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.34-2.43.4-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.06-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.34-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.17.24-1.97.4-2.43A4.9 4.9 0 013.82 3c.5-.5 1.02-.86 1.77-1.15.46-.16 1.26-.34 2.43-.4C9.27 1.4 9.67 1.4 12.87 1.4M12 6.87a5.13 5.13 0 100 10.26 5.13 5.13 0 000-10.26zm0 8.46a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66zm5.34-8.66a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ceron.ix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82c-.85-.93-1.32-2.13-1.32-3.4h-3.02v13.6c0 1.5-1.21 2.72-2.72 2.72a2.72 2.72 0 01-2.72-2.72 2.72 2.72 0 012.72-2.72c.28 0 .55.04.8.12V10.4a5.9 5.9 0 00-.8-.06 5.74 5.74 0 00-5.74 5.74A5.74 5.74 0 009.54 21.8a5.74 5.74 0 005.74-5.74V9.01a8.35 8.35 0 004.87 1.56V7.55a5.31 5.31 0 01-3.55-1.73z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Ceron-iX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.02 3.02 0 002.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wide text-white/80 mb-4">PRODUCTOS</p>
          <ul className="space-y-3 text-sm text-white/50">
            <li><a href="#sistema" className="hover:text-white transition-colors">Sistema SVA</a></li>
            <li><a href="#proyectos" className="hover:text-white transition-colors">Mente Emprende · Sept 2026</a></li>
            <li><a href="#proyectos" className="hover:text-white transition-colors">Grob AI · 2027</a></li>
            <li><a href="#proyectos" className="hover:text-white transition-colors">HubExpert · 2028</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wide text-white/80 mb-4">SECTORES</p>
          <ul className="space-y-3 text-sm text-white/50">
            <li><a href="#sectores" className="hover:text-white transition-colors">B2B / Consultoría</a></li>
            <li><a href="#sectores" className="hover:text-white transition-colors">Servicios Locales</a></li>
            <li><a href="#sectores" className="hover:text-white transition-colors">Real Estate</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wide text-white/80 mb-4">CONTACTO</p>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <a href="mailto:info@ceronix.es" className="hover:text-white transition-colors">
                info@ceronix.es
              </a>
            </li>
            <li>
              <a href="https://wa.me/34633772281" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                +34 633 77 22 81
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-white hover:text-white/70 transition-colors">
                Escríbenos →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/35">
          <p>© 2026 Ceronix. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Términos</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
