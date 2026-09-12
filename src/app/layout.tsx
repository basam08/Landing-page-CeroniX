import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://ceronix.es";
const TITLE = "Ceronix - Automatización B2B sin Límites | Sistema SVA";
const DESCRIPTION =
  "Ecosistema integrado de automatización para ventas y operaciones B2B. Automatiza el 70% de tareas, aumenta la conversión un 30% y consigue ROI en 48h con el Sistema SVA de Ceronix.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Ceronix",
  },
  description: DESCRIPTION,
  keywords: [
    "automatización B2B",
    "sistema CRM",
    "software ventas",
    "automatización empresarial",
    "marketing automation",
    "Sistema SVA",
    "Ceronix",
    "agencia de automatización",
    "IA para ventas",
    "generación de leads B2B",
  ],
  authors: [{ name: "Ceronix" }],
  creator: "Ceronix",
  publisher: "Ceronix",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-ceronix.png",
  },
  openGraph: {
    title: TITLE,
    description:
      "El ecosistema que convierte tráfico frío en caja. Web Hub, Motor SVA y MVP Ignition integrados.",
    url: SITE_URL,
    siteName: "Ceronix",
    images: [
      {
        url: "/logo-ceronix.png",
        width: 512,
        height: 512,
        alt: "Ceronix",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo-ceronix.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ceronix",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-ceronix.png`,
  description: DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/company/ceronix/about/",
    "https://www.instagram.com/ceron.ix/",
    "https://www.tiktok.com/@ceron.ix",
    "https://www.youtube.com/@Ceron-iX",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@ceronix.es",
    telephone: "+34-633-77-22-81",
    contactType: "sales",
    areaServed: "ES",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
