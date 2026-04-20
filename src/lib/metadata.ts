import type { Metadata } from "next";

export const siteConfig = {
  name: "Koovis AI",
  title: "Koovis AI — We Build AI Products That Work",
  description:
    "Koovis AI builds production-grade AI products — Koovis Workforce (autonomous AI workforce), Koovis Pulse (Indian-language AI UGC for D2C brands), WealthPilot (AI research platform for Indian equities), and Koovis Studios (AI pre-viz for Telugu cinema). Founded by Rajesh Kolachana.",
  url: "https://www.koovis.ai",
  ogImage: "https://www.koovis.ai/og-image.png",
  author: "Rajesh Kolachana",
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
    "AI products",
    "autonomous AI workforce",
    "AI agents for founders",
    "AI research Indian equities",
    "Indian-language AI UGC",
    "AI pre-visualization",
    "multi-agent orchestration",
    "machine learning",
    "production ML systems",
    "Koovis AI",
    "Koovis Workforce",
    "Koovis Pulse",
    "WealthPilot",
    "Koovis Studios",
    "Rajesh Kolachana",
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
      name: "Rajesh Kolachana",
      jobTitle: "Founder & CEO",
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
    name: "Rajesh Kolachana",
    jobTitle: "Founder & CEO, Koovis AI",
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
