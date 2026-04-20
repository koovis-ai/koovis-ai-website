import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { getPublishedPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1.0 },
    { url: `${siteConfig.url}/workforce`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/pulse`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/research`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/studios`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/papers`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteConfig.url}/careers`, lastModified: new Date(), priority: 0.5 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteConfig.url}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: new Date(), priority: 0.3 },
  ];

  const blogPages = getPublishedPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
