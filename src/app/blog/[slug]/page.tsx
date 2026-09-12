import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://ceronix.es/blog/${slug}`;
  const image = post.ogImage ?? "/logo-ceronix.png";

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Ceronix" },
    publisher: {
      "@type": "Organization",
      name: "Ceronix",
      logo: { "@type": "ImageObject", url: "https://ceronix.es/logo-ceronix.png" },
    },
    mainEntityOfPage: `https://ceronix.es/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <article className="relative bg-white pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <p className="text-sm font-semibold tracking-wide text-black/50 mb-3">
              {new Date(post.date).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-black mb-10">
              {post.title}
            </h1>
            <div className="prose-ceronix">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
