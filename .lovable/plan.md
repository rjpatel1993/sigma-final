

# Sigma Aircons — Full Website Build Plan

## Overview
Build a complete local business website for Sigma Aircons, an AC service company in Vadodara, with 188+ SEO-optimized pages, structured data, and a dark theme.

## Pages to Build

1. **Homepage** (`/`) — Hero section with CTA, services grid (9 services), "Why Choose Us" section, service areas list, testimonials carousel, FAQ accordion with FAQPage schema
2. **Services Listing** (`/services/`) — Grid of all 9 services with icons, descriptions, and links
3. **Service Detail Pages** (`/service/:serviceSlug/`) — 9 pages, each with service description, benefits, process steps, area links, and FAQs
4. **Service + Area Pages** (`/service/:serviceSlug/:areaSlug/`) — 171 pages with area-specific content, unique FAQs, and local targeting
5. **Areas Listing** (`/areas/`) — Grid of 19 Vadodara localities with links to their service pages
6. **Blog Listing** (`/blog/`) — 3 blog post cards
7. **Blog Post** (`/blog/:slug/`) — 3 individual posts (AC maintenance tips, choosing the right AC, energy saving)
8. **About** (`/about/`) — Company story, mission, team highlights
9. **Contact** (`/contact/`) — Contact form, NAP info, Google Maps embed
10. **Privacy Policy** (`/privacy-policy/`) & **Terms** (`/terms-and-conditions/`)

## Layout & Components

- **Header**: Top bar (phone + location), sticky nav with logo, page links, and "Call Now" CTA button
- **Footer**: 4-column layout — brand + NAP, services links, quick links, business hours
- **Floating Buttons**: Fixed WhatsApp + Call buttons (bottom-right)
- **ScrollToTop**: Auto-scroll on route change
- **GMBSection**: Google Maps embed above footer on all pages

## Data Architecture

- All data stored as static TypeScript constants (no backend)
- Services array with slug, name, description, features, FAQs
- Areas array with slug, name, description
- Area-specific FAQ generator for unique content on 171 pages
- Blog posts as static data

## SEO & Schema Markup

- **SEOHead component** (react-helmet-async) on every page: title, meta description, canonical URL, Open Graph tags, Twitter cards, geo meta tags for Vadodara
- **Homepage schemas**: LocalBusiness, WebSite, FAQPage
- **Service/Area pages**: Service schema, BreadcrumbList, FAQPage
- **Static sitemap.xml** with all 188 URLs
- **robots.txt** with sitemap reference

## Design System

- **Dark theme**: Dark background (`bg-secondary`), blue accent (`text-primary`)
- **No pricing** displayed anywhere — CTA drives phone calls
- **Wider containers**: lg:1100px, xl:1280px, 2xl:1536px breakpoints
- Consistent NAP (Name, Address, Phone) across all pages and schemas

