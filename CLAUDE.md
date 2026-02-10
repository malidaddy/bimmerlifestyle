# MaliaWeb Framework

A configurable Next.js website framework for multi-site deployment. Each client site is a clone of this repo.

## Tech Stack
- Next.js 14.2 (App Router, TypeScript)
- Tailwind CSS 3.4 + shadcn/ui (Zinc base, CSS variables)
- Framer Motion (animations in `components/motion/`)
- MDX blog via next-mdx-remote/rsc
- Resend for email, Zod for validation, React Hook Form for forms
- Cloudinary for image hosting

## Architecture

### Central Config
**`config/site.ts`** is the single source of truth. All components read from `siteConfig`:
- Site identity (name, description, URL)
- Navigation links (main nav + footer sections)
- Social media URLs
- Contact info (email, phone, address)
- Feature flags (blog, newsletter, contactForm, animations)
- Auto-responder settings for contact form

### Route Structure
All public pages live under `app/(marketing)/` which wraps them with header + footer.
- `/` `/about` `/services` `/team` `/blog` `/contact` `/privacy` `/terms`
- `/blog/[slug]` - individual blog posts from `content/blog/*.mdx`
- `/api/contact` `/api/newsletter` - form API routes

### Content
- **Blog**: MDX files in `content/blog/` with frontmatter (title, date, author, tags, published)
- **Team**: JSON in `content/team/team.json` - members have `type: "team" | "board"`
- **Services**: JSON in `content/services/services.json`

### Components
- `components/sections/` - page sections (hero, features, services, team, stats, cta, testimonials)
- `components/sections/hero.tsx` - dispatcher with 4 variants: default, centered, split, video
- `components/shared/` - header, footer, nav, logo, dynamic-icon, lightbox
- `components/shared/dynamic-icon.tsx` - renders Lucide icons by name string from JSON
- `components/sections/gallery-section.tsx` - responsive grid gallery with category filter + lightbox
- `components/blog/` - blog cards, post header, MDX components, callout
- `components/forms/` - contact form, newsletter form
- `components/motion/` - Framer Motion wrappers ("use client")
- `components/ui/` - shadcn/ui components (do not edit manually)

### Styling
- CSS variables in `app/globals.css` (HSL format for shadcn/ui compatibility)
- Dark mode supported via `.dark` class on `<html>` (toggle in header)
- **NO purple** - user specifically does not want purple/gradient themes
- **Dark gradient ONLY on footer** (`zinc-900 to zinc-950`) - no gradients elsewhere
- All other surfaces use flat solid colors

## Re-theming for a New Client

Change these 5 things:

1. **`config/site.ts`** - name, description, nav items, contact info, social links
2. **`app/globals.css`** - change these CSS variables in `:root` (and `.dark`):
   - `--primary` (main accent color, HSL)
   - `--accent` / `--accent-foreground` (hover/highlight tint)
   - `--ring` (focus ring color, match primary)
   - `--chart-1` (match primary for data viz)
3. **`content/`** - replace team.json, services.json, blog MDX files
4. **`public/images/`** - replace logo.svg, favicon, team photos
5. **`.env.local`** - Cloudinary credentials, ORG_FOLDER, Resend API key, contact email(s)

### Gallery System (Cloudinary)
Images are managed on Cloudinary. The gallery loader (`lib/gallery.ts`) uses the Admin API
to fetch images from folders, with subfolders mapped to albums/categories.

**Folder structure on Cloudinary:**
```
your-cloud/
  {ORG_FOLDER}/
    gallery/
      food/         ← album "Food"
      interior/     ← album "Interior"
      events/       ← album "Events"
```

**Usage in a page:**
```tsx
import { getGalleryImages, getGalleryAlbums } from "@/lib/gallery";
import { GallerySection } from "@/components/sections/gallery-section";

// Option 1: Flat list with category filter tabs
const images = await getGalleryImages(); // subfolder names become categories
<GallerySection images={images} columns={3} />

// Option 2: Get albums separately
const albums = await getGalleryAlbums();
```

**Adding alt text / captions in Cloudinary:**
In the Cloudinary Media Library, add contextual metadata to any image:
- `alt` → used as alt text
- `caption` → shown on hover + in lightbox

If no alt is set, the filename is auto-formatted (e.g. `grilled-salmon` → "Grilled Salmon").

## Environment Variables
```
RESEND_API_KEY=              # Resend API key for email
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=  # Cloudinary cloud name (client-side)
CLOUD_NAME=                  # Cloudinary cloud name (server-side Admin API)
CLOUD_API_KEY=               # Cloudinary API key
CLOUD_API_SECRET=            # Cloudinary API secret
ORG_FOLDER=                  # Base folder for this site's assets on Cloudinary
CONTACT_EMAIL_TO=            # Comma-separated recipient addresses
CONTACT_EMAIL_FROM=          # Sender address (must be verified in Resend)
NEXT_PUBLIC_SITE_URL=        # Production URL
NEXT_PUBLIC_UMAMI_WEBSITE_ID=  # Umami analytics website ID (optional)
NEXT_PUBLIC_UMAMI_URL=       # Umami instance URL (optional)
```

## Commands
- `npm run dev` - development server
- `npm run build` - production build
- `npm run lint` - ESLint check
- `npm start` - serve production build

## Mobile / Pointer-Events Patterns (Important)

These patterns are already applied in the codebase. **Do not remove them** — they fix real mobile tap/click bugs:

1. **Fixed containers must be `pointer-events-none`** — Any `fixed` positioned wrapper (like a floating action button) must have `pointer-events-none` on the container and `pointer-events-auto` on each interactive child. Otherwise the invisible container blocks clicks on elements beneath it (e.g. footer buttons).

2. **Video & overlay layers need `pointer-events-none`** — `<video>` elements and gradient overlay `<div>`s in hero, banners, and page-banners must have `pointer-events-none` so they don't intercept clicks on CTA buttons layered on top.

3. **`touch-action: manipulation`** — Applied globally in `globals.css` to all `a`, `button`, `[role="button"]`, `input`, `select`, `textarea` to eliminate the 300ms mobile tap delay.

4. **`.btn-lg` is opt-in only** — Large button styling (`h-14 rounded-xl px-10`) uses `.btn-lg` class, NOT a global `button[type="submit"]` selector. This prevents small buttons (like newsletter subscribe) from being forced large.

5. **Newsletter form uses plain `<button>`** — Not shadcn `Button`, to avoid class-merge conflicts with `cva` variants in the footer context.

## Conventions
- ZodError uses `.issues` not `.errors` (Zod v4)
- MDX img component: don't spread `...props` onto next/image (type conflict)
- All motion components must be "use client" and live in `components/motion/`
- Use `DynamicIcon` for rendering Lucide icons from JSON config strings
- Footer is the ONLY place with a gradient - keep everything else flat
