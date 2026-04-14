# SEO & Analytics Setup

This document describes the SEO and analytics configuration for the Koovis AI website.

## Overview

The website uses a comprehensive SEO and analytics setup:

1. **Next.js Built-in Metadata API** - Primary SEO configuration
2. **next-seo Package** - Additional SEO utilities (optional enhancement)
3. **Google Analytics 4** - Website analytics and conversion tracking
4. **Vercel Analytics** - Performance and user analytics

## SEO Configuration

### Metadata Configuration

The primary SEO configuration is in `src/lib/metadata.ts`:

- **Site Configuration**: Title, description, URL, OG image
- **Metadata Object**: Comprehensive metadata including:
  - Page titles with template
  - Meta descriptions
  - Keywords
  - OpenGraph tags (og:title, og:description, og:image, etc.)
  - Twitter Card tags
  - Canonical URLs
  - Robots directives

### JSON-LD Structured Data

The site includes three JSON-LD schemas in `layout.tsx`:

1. **Organization Schema**: Company information
2. **Person Schema**: Founder/CEO information
3. **Website Schema**: Site metadata

These help search engines understand the site structure and improve rich results.

### SEO Utilities

The `src/lib/seo.ts` file provides a helper function for page-specific metadata:

```typescript
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata(
  "About Us",
  "Learn about Koovis AI and our mission",
  "/about",
  "/about-og-image.png" // optional custom image
);
```

## Google Analytics 4

### Setup

1. **Component**: `src/components/analytics/GoogleAnalytics.tsx`
2. **Environment Variable**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. **Loading Strategy**: `afterInteractive` for optimal performance

### Configuration

Add your GA4 Measurement ID to `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Features

- Only loads in production environment
- Uses Next.js Script component for optimal loading
- Configures gtag.js with page path tracking
- Respects user privacy settings

### Testing

To verify GA4 is working:

1. Build the site: `npm run build`
2. Start production server: `npm start`
3. Open browser DevTools → Network tab
4. Filter for "googletagmanager.com"
5. Visit pages and check for GA4 events

## Vercel Analytics

Vercel Analytics is already configured and provides:

- Real user monitoring
- Core Web Vitals tracking
- Page view analytics

No additional configuration needed for Vercel deployments.

## Verification Checklist

### SEO Meta Tags

View page source and verify these tags are present:

```html
<!-- Primary Meta Tags -->
<title>Koovis AI — From Model to Market</title>
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.koovis.ai">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.koovis.ai">
<meta property="twitter:title" content="...">
<meta property="twitter:description" content="...">
<meta property="twitter:image" content="...">

<!-- Canonical -->
<link rel="canonical" href="https://www.koovis.ai">

<!-- JSON-LD -->
<script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Organization",...}
</script>
```

### Google Analytics

1. Check Network tab for gtag.js script load
2. Verify GA4 configuration script executes
3. Use [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension
4. Check real-time reports in Google Analytics dashboard

### Testing Tools

Use these tools to validate SEO:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools

## Performance Considerations

- GA4 script uses `afterInteractive` strategy (loads after page is interactive)
- Only loads GA4 in production environment
- JSON-LD scripts are static and don't impact performance
- All meta tags are server-rendered for SEO crawlers

## Troubleshooting

### GA4 Not Loading

- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in environment
- Check that `NODE_ENV=production` (GA4 only loads in production)
- Clear browser cache and test in incognito mode
- Check browser console for errors

### Meta Tags Not Appearing

- Verify Next.js metadata export in page files
- Check browser DevTools → Elements → `<head>` section
- Ensure proper metadata inheritance from root layout

### JSON-LD Errors

- Validate schema using [Schema.org Validator](https://validator.schema.org/)
- Check Google Search Console for structured data errors
- Verify JSON syntax in browser console

## Next Steps

1. Set up Google Analytics 4 property in Google Analytics
2. Add GA4 Measurement ID to production environment variables
3. Configure conversion goals and events in GA4
4. Set up Google Search Console
5. Submit sitemap.xml to Search Console
6. Monitor Core Web Vitals in Vercel Analytics

## References

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
