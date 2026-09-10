import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./home.css";
import Chrome from "@/app/components/Chrome";

const TITLE =
  "OhhMyDesign | Design & Development Studio for Brands That Convert";
const DESCRIPTION =
  "OhhMyDesign is a design and development studio building bold brands, websites, and products that are impossible to ignore. Available for projects worldwide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "design studio",
    "web design",
    "web development",
    "branding",
    "UI UX design",
    "Webflow",
    "Framer",
    "landing pages",
    "product design",
  ],
  authors: [{ name: "OhhMyDesign" }],
  robots: "index,follow",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "OhhMyDesign",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/assets/open-graph.webp",
        type: "image/webp",
        alt: "OhhMyDesign, design and development studio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/open-graph.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5EAEEA",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ohhmydesign.com/#org",
      name: "OhhMyDesign",
      url: "https://www.ohhmydesign.com/",
      email: "hello@ohhmydesign.com",
      description:
        "A design and development studio building bold brands, websites, and products that are impossible to ignore.",
      logo: "https://www.ohhmydesign.com/assets/favicon.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ohhmydesign.com/#site",
      url: "https://www.ohhmydesign.com/",
      name: "OhhMyDesign",
      publisher: { "@id": "https://www.ohhmydesign.com/#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* runs while the HTML is still parsing, so a saved dark theme is applied
            before the first paint — no white flash on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"#08111F":"#5EAEEA")}}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Shantell+Sans:wght@500;600&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
