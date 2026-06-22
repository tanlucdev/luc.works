# luc.works Design System

Source of truth for the current portfolio design language, extracted from the existing implementation. This document describes what is already present. It does not propose new pages, content, or redesigns.

Primary sources: `src/layouts/BaseLayout.astro`, `src/styles/index.css`, `src/components/Hero.astro`, `src/components/HeroContent.tsx`, `src/components/FeatureCards.tsx`, `src/pages/projects/[slug].astro`, and `src/pages/resume.astro`.

## Design Principles

- Quiet, cinematic, and product-focused. The interface uses a black canvas, warm text, soft contrast, and restrained motion.
- Content first. Sections are sparse, direct, and centered around short statements, project summaries, and clear calls to action.
- Premium minimalism. The system avoids decorative excess; visual depth comes from video, grain, dark panels, proportion, and motion.
- Large type as identity. Oversized display typography carries the hero and project pages.
- Warm human tone. The palette uses aged ivory rather than pure white, keeping the experience softer than stark monochrome.
- Motion reveals hierarchy and pacing without changing layout or adding complex interactions.

## Visual Language

- Overall mode: dark-only.
- Canvas: pure black background across `html`, `body`, and main pages.
- Primary motifs:
  - Full-screen hero video inside a rounded viewport.
  - Fine SVG noise overlays.
  - Dark charcoal panels for grouped content.
  - Rounded cards and pill controls.
  - Thin borders, low-opacity rings, and muted gray text.
- Contrast strategy:
  - Main headings use warm ivory.
  - Body and accents use warm cream or muted gray.
  - Primary buttons invert the palette with cream fill and black text.

## Color System

### Core Colors

- `#000000`: global page background, hero nav background, button icon wells.
- `#E1E0CC`: primary readable foreground, main headings, hover text.
- `#DEDBC8`: Tailwind `primary`, warm accent, body accent, filled button background.
- `#101010`: large content panels.
- `#1F1F1F`: project detail cards.
- `#212121`: project cards, skill pills, social link pills.
- `#272727`: project card hover background.

### Tailwind Tokens

- `primary`: `#DEDBC8`.
- `fontFamily.serif`: `Instrument Serif`.

### Text Colors

- Main display text: `#E1E0CC`.
- Warm body text: `#DEDBC8` or `primary/70`.
- Secondary copy: `text-gray-400`.
- Tertiary labels and metadata: `text-gray-500`.
- Accent labels: `text-primary`, `text-primary/70`, `text-primary/80`.

### Overlays

- Hero gradient: black at top and bottom with transparent center.
- Hero noise: `noise-overlay`, opacity `0.7`, `mix-blend-overlay`.
- Section noise: `bg-noise`, opacity around `0.12` to `0.15`.
- Noise graphics are inline SVG data URLs in CSS.

## Typography System

### Fonts

- Body/default font: `Almarai` with system sans fallbacks.
- Serif accent font: `Instrument Serif`, italic, available as Tailwind `font-serif`.
- Fonts are loaded through Google Fonts in `BaseLayout.astro`.

### Weights

- Body and headings mostly use normal weight.
- Hero/project display uses medium weight.
- Buttons use medium weight.
- Loaded Almarai weights are `300`, `400`, `700`, and `800`; the implementation mostly uses `400` and `500` utilities.

### Hierarchy

- Hero name:
  - `text-[26vw]` mobile down to `text-[19vw]`/`text-[20vw]` on large screens.
  - `leading-[0.85]`, `tracking-[-0.07em]`, `font-medium`.
- Project page title:
  - `text-[18vw]`, `sm:text-[15vw]`, `md:text-[12vw]`, `lg:text-[10vw]`.
  - `leading-[0.82]`, `font-medium`.
- Large section statements:
  - `text-3xl`, `sm:text-4xl`, `md:text-5xl`, `lg:text-6xl`, `xl:text-7xl`.
  - Tight leading: `leading-[0.95]`, `sm:leading-[0.9]`.
- Feature header:
  - `text-xl`, `sm:text-2xl`, `md:text-3xl`, `lg:text-4xl`.
  - `leading-tight`.
- Resume title:
  - `text-5xl`, `sm:text-6xl`, `md:text-7xl`, `lg:text-8xl`.
  - `leading-[0.9]`.
- Body text:
  - Usually `text-sm` to `text-base`, sometimes `md:text-lg`.
  - `leading-relaxed` for longer copy.
- Labels:
  - `text-[10px]`, `sm:text-xs`, uppercase.
  - `tracking-[0.28em]` for section labels.
  - `tracking-[0.24em]` or `tracking-[0.2em]` for project labels.

### Typography Conventions

- Use big, tight, sentence-like display copy for major moments.
- Use the serif italic accent sparingly inside large statements.
- Keep body copy compact, calm, and readable.
- Use uppercase micro-labels for section and metadata context.
- Project pages should keep body prose restrained even when content becomes deeper.

## Spacing System

### Page And Section Padding

- Global section x-padding: `px-4`, `sm:px-6`.
- Main homepage section y-padding: `py-20`, `md:py-28`, `lg:py-32`.
- Detail/resume outer padding: `px-4 py-6`, `sm:px-6`, `md:py-8`.
- Hero padding: `p-4`, `md:p-6`.

### Panel Padding

- Large panels: `px-5 py-16`, `sm:px-8 sm:py-20`, `md:px-12 md:py-24`, `lg:px-16`.
- Resume panel: `px-5 py-10`, `sm:px-8`, `md:px-12 md:py-14`, `lg:px-16`.
- Cards: `p-5`, `sm:p-6`.
- Pills: usually `px-3 py-1`, `px-3 py-2`, or `px-4` with fixed height.

### Internal Rhythm

- Section label to headline: commonly `mb-6` or parent `mt-6`.
- Headline to body: `mt-8`, `sm:mt-10`.
- Feature cards after header: `mt-10`, `sm:mt-12`.
- Card title block: `mt-8`, `sm:mt-10`.
- Card description: `mt-5`.
- Card bullet list: `mt-7`, `space-y-3`.
- CTA groups: `gap-3`, usually `mt-8` or `mt-10`.

### Layout Gaps

- Small control/card gaps: `gap-2`, `gap-3`, `gap-4`.
- Section grids: `gap-8`, `gap-10`, `gap-12`.
- Hero grid: `gap-5`, `md:gap-8`.

## Layout System

### Containers

- Standard wide container: `mx-auto max-w-7xl`.
- Large text/panel container: `mx-auto max-w-6xl`.
- Centered statement containers: `max-w-3xl`, `max-w-4xl`, `max-w-5xl`.
- Body copy width: `max-w-2xl` or `max-w-xl`.

### Grids

- Desktop content layout favors 12-column grids.
- Hero: `md:grid-cols-12`, title spans `8`, supporting copy spans `4`.
- Resume: `md:grid-cols-12`, main intro spans `7`, side content spans `5`.
- Project detail hero: title spans `8`, summary spans `4`.
- Project cards: mobile single column, `md:grid-cols-2`, `lg:grid-cols-4`.
- Project detail cards: mobile single column, `md:grid-cols-3`, highlight card spans `2`.

### Sections

- Homepage order: Hero, About, Projects, Work, Contact.
- Most sections use black full-width bands with constrained inner content.
- About, Work, Contact use dark inner panels.
- Projects uses unframed grid content directly over black/noise.
- Resume and project detail pages are near-full-screen compositions.

### Alignment

- Homepage text-heavy sections are centered.
- Hero and project detail pages combine oversized left display text with right-side explanatory copy.
- Cards use top-left icon/title structures and bottom-aligned links.

## Motion System

### Libraries And Runtime

- Motion uses `framer-motion` in React island components.
- Astro hydrates motion components with `client:load` for hero and `client:visible` for below-fold sections.

### Easing

- Primary text ease: `[0.16, 1, 0.3, 1]`.
- Card/content ease: `[0.22, 1, 0.36, 1]`.

### Reveal Patterns

- Word pull-up:
  - Initial: `y: 20`, `opacity: 0`.
  - Animate: `y: 0`, `opacity: 1`.
  - Duration: `0.8s`.
  - Stagger: `index * 0.08s`.
  - Trigger: `useInView`, once, margin `-40px`.
- Hero supporting copy/buttons:
  - Initial: `opacity: 0`, `y: 20`.
  - Duration: `0.9s`.
  - Delays: `0.5s`, `0.7s`.
- Card reveal:
  - Initial: `opacity: 0`, `scale: 0.95`.
  - Duration: `0.75s`.
  - Stagger: `index * 0.15s`.
  - Trigger margin: `-100px`.
- Contact content reveal:
  - Initial: `opacity: 0`, `y: 20`.
  - Duration: `0.8s`.
  - Delays: `0.35s`, `0.5s`, `0.65s`.
- Scroll reveal body text:
  - Per-character opacity moves from `0.2` to `1`.
  - Scroll offset: `start 0.8` to `end 0.2`.

### Interaction Motion

- Hover transitions generally use `duration-300`.
- Filled CTA hover increases icon well scale to `1.10` and expands gap.
- Outline CTA icons translate slightly on hover.
- Project detail arrows rotate `-45deg` and translate diagonally on hover.
- Card hover changes background from `#212121` to `#272727`.

### Reduced Motion

- Global `prefers-reduced-motion: reduce` reduces animation and transition duration to `0.01ms`, disables repeated animation, and disables smooth scrolling.

## Component Patterns

### Buttons And Links

- Primary CTA:
  - Pill shape, `bg-primary`, black text.
  - Left text padding with circular black icon well on the right.
  - Arrow icon in warm ivory.
  - Hover expands gap and scales icon well.
- Secondary CTA:
  - Pill shape, transparent background.
  - `border-primary/30`, `text-primary`.
  - Hover strengthens border and text to `#E1E0CC`.
- Social/link pills:
  - `bg-[#212121]`, muted gray text, primary icon.
  - Fixed compact height around `h-11`.
- Text nav links:
  - Small, muted, color transition on hover.

### Icons

- Icons use `lucide-react`.
- Stroke width is usually `1.6` to `1.8`.
- Icon sizes are mostly `h-4 w-4`, `h-5 w-5`, or `h-6 w-6`.
- Feature icon wells use square dark containers with subtle primary ring.

### Labels

- Labels are uppercase, tiny, letter-spaced, and warm primary.
- Labels are used for sections, project number, role, highlights, focus, and skills.

### Pills And Tags

- Skills use filled charcoal pills.
- Project stack tags use outlined pills with `border-primary/20` and `text-primary/80`.
- Pills stay compact and wrap.

## Card Patterns

### Project Cards

- Background: `#212121`; hover: `#272727`.
- Radius: `8px`.
- Minimum height: `360px` on smaller screens; fixed grid height `480px` on large screens.
- Whole card is an anchor.
- Structure:
  - Icon well at top.
  - Title and number row.
  - Muted description.
  - Checklist with primary check icons.
  - Bottom-aligned detail link.

### Detail Cards

- Background: `#1F1F1F`.
- Radius: `8px`.
- Padding: `p-5`, `sm:p-6`.
- Labels in gray uppercase.
- Highlights use left borders in `primary/30`.

### Large Panels

- Background: `#101010`.
- Used for About, Work, Contact, Resume.
- Mostly unbordered.
- Radius varies:
  - About and Work panels are square-edged.
  - Contact and Resume panels use `rounded-[8px]`.

## Page Composition Patterns

### Home

- Starts with a full-screen video hero in a rounded viewport.
- Hero nav floats at the top center on a black pill-like bar.
- Hero content anchors to the bottom over video.
- Follow-up sections alternate between dark panels and open black/noise project grid.
- Repeated composition: micro-label, animated headline, optional scroll-reveal body, optional CTA group.

### Project Detail

- Full black page with noise overlay.
- Top utility nav with back/contact links.
- Large viewport-height grid with display title and summary.
- Stack tags sit under summary.
- Bottom detail cards summarize role and highlights.
- Current project pages do not yet include long-form content sections.

### Resume

- Single near-full-screen dark panel.
- Top brand link.
- Large name and intro on left; focus and skills on right.
- Footer contact links at bottom.

## Responsive Rules

- Minimum body width: `320px`.
- Breakpoints follow Tailwind defaults: `sm`, `md`, `lg`, `xl`, `2xl`.
- Mobile-first utilities define base layout; columns are introduced at `md` and `lg`.
- Horizontal padding increases from `px-4` to `sm:px-6`; inner panels increase at `sm`, `md`, and `lg`.
- Section vertical padding increases from `py-20` to `md:py-28` and `lg:py-32`.
- Large display text uses viewport-width sizing for hero/project titles.
- Feature cards:
  - 1 column on mobile.
  - 2 columns at `md`.
  - 4 columns with fixed row height at `lg`.
- Project detail and hero grids become 12-column layouts at `md`.
- Buttons and nav links use smaller text on mobile and scale up at `sm`/`md`.
- Content wraps aggressively: CTA groups, nav groups, skills, tags, and social links all use flex wrap where needed.

## Content Extension Rules

- Preserve the black canvas, warm text, sparse panels, and oversized type.
- Prefer deeper content inside existing project detail pages before adding new page types.
- Add new routes only when there is enough content value to justify a separate reading experience.
- Keep project-page additions modular: concise sections, dark panels, restrained labels, and compact prose.
- Avoid redesigning the site while adding content depth.

