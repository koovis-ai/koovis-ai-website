import { Metadata } from "next";
import { siteConfig } from "./metadata";

/**
 * SEO configuration utilities for the site
 * Extends Next.js built-in metadata API with page-specific helpers
 */

/**
 * Helper to generate page-specific metadata
 * @param title - Page title (will be appended with site name)
 * @param description - Page description
 * @param path - Page path (e.g., "/about")
 * @param ogImage - Optional custom OG image
 * @returns Next.js Metadata object
 */
export function getPageMetadata(
  title: string,
  description: string,
  path: string = "/",
  ogImage?: string
): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [image],
    },
  };
}
