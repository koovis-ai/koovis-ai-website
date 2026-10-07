import type { Metadata } from "next";

export const siteConfig = {
  name: "Koovis AI",
  title: "Koovis Studios — Original Films Made with AI",
  description:
    "Koovis AI is a film studio. Under the name Koovis Studios it writes, performs and directs original films, shorts and series, and uses AI to make them. Founded by Raj Kolachana.",
  url: "https://www.koovis.ai",
  ogImage: "https://www.koovis.ai/og-image.png",
  author: "Raj Kolachana",
  twitterHandle: "@koovisai",
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI film studio",
    "AI filmmaking",
    "original short films",
    "AI short film",
    "micro-series",
    "Koovis AI",
    "Koovis Studios",
    "Raj Kolachana",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Koovis AI Pvt Ltd",
    url: siteConfig.url,
    logo: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: "Raj Kolachana",
      jobTitle: "Founder, writer and director",
      url: siteConfig.url + "/about",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/rajeshkolachana",
      "https://github.com/koovis-ai",
      "https://x.com/koovisai",
    ],
  },
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Kolachana",
    jobTitle: "Founder, Koovis AI; writer, director and actor",
    url: siteConfig.url + "/about",
    worksFor: {
      "@type": "Organization",
      name: "Koovis AI Pvt Ltd",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Roorkee",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Science",
      },
    ],
    knowsAbout: [
      "Filmmaking",
      "Screenwriting",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "NLP",
      "Deep Learning",
      "ML Infrastructure",
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: "Koovis AI Pvt Ltd",
    },
  },
};
