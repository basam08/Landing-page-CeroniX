import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, type Sector } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Automatización B2B, cualificación de leads y Sistema SVA: guías prácticas de Ceronix para consultoras, servicios locales y real estate.",
  alternates: {
    canonical: "/blog",
  },
};

const SECTOR_LABEL: Record<Sector, string> = {
  b2b: "B2B / Consultoría",
  local: "Servicios Locales",
  realestate: "Real Estate",
  general: "General",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main>
        <section className="relative bg-white pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
                BLOG
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black">
                Automatización B2B, sin jerga.
              </h1>
            </div>

            {posts.length === 0 ? (
              <p className="text-black/50">Muy pronto, los primeros artículos.</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-3xl border border-black/10 p-8 flex flex-col hover:border-black/30 transition-colors"
                  >
                    <p className="text-xs font-bold tracking-widest text-black/40 mb-3">
                      {SECTOR_LABEL[post.sector].toUpperCase()}
                    </p>
                    <h2 className="text-xl font-bold text-black mb-3 leading-snug group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-sm text-black/60 leading-relaxed mb-6">
                      {post.description}
                    </p>
                    <p className="mt-auto text-xs text-black/40">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
