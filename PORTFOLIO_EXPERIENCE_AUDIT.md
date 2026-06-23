# Portfolio Experience Audit

Audit target: current homepage, project pages, and writing pages in `luc.works`.

Primary question: has the portfolio become too text-heavy?

Short answer: yes, especially on project detail pages. The visual identity is strong and should stay intact, but the current content system leans heavily on paragraph-based explanation. That reduces curiosity because the pages tell the visitor what the work is before they let the visitor feel it, inspect it, or watch it behave.

The next improvement should not be more copy. It should be visual storytelling: video, motion, screenshots, diagrams, interface states, process visuals, and small interactive demonstrations.

## Executive Summary

The portfolio has a clear identity: black canvas, warm ivory type, oversized titles, subtle noise, restrained motion, compact dark panels, and sharp product-builder language. The homepage still has visual presence because the hero video creates immediate atmosphere and motion.

The project and writing systems are where density appears. Project detail pages now read more like documentation than case studies: each page has a strong hero, role/highlight cards, then a long markdown article with repeated headings such as `Overview`, `Problem`, `Context`, `Goals`, `Solution`, `Architecture`, `Technical Decisions`, `Product Decisions`, `Challenges`, `Trade-offs`, `Results`, `Lessons Learned`, and `Future Improvements`.

That structure is credible, but it is not immersive yet. It explains the projects instead of staging them.

Highest-impact direction:

1. Add media before adding more words.
2. Turn CinematicAI into the flagship visual case study.
3. Make CafeMaps feel spatial and decision-oriented through map/list visuals.
4. Make Study Stream feel calm and alive through session-state motion.
5. Keep writing high-quality, but improve scan rhythm and navigation.
6. Add lightweight Field Notes only if they remain observational, restrained, and tied to how you build.

## Phase 1: Experience Audit

## Homepage

### What Works

- The hero has the strongest emotional hook on the site because it uses full-screen video, large type, and atmosphere before explanation.
- The section order is clear: hero, about, projects, philosophy, contact.
- Motion gives the page a living quality without breaking the restrained identity.
- The project grid gives a fast overview of the current portfolio.

### Content-Heavy Sections

- `About` and `Philosophy` are both centered text panels. They likely work individually, but together they can feel like two consecutive manifesto blocks.
- Project cards include title, description, bullet list, and CTA. The cards are useful, but every card follows the same icon-plus-text-bullets pattern.
- `Contact` appears as another dark panel after several dark text-led sections, so its emotional lift depends entirely on copy and animation.

### Visually Repetitive Sections

- `About`, `Philosophy`, and `Contact` all use large dark panels on black with centered micro-labels.
- Homepage project cards repeat the same structure as project index cards.
- The visual vocabulary is consistent, but the middle of the page risks becoming a sequence of text surfaces rather than changing modes.

### Breathing Room Issues

- The page has generous vertical padding, but not enough media contrast between text-led sections.
- Breathing room should come from mode changes, not just spacing: a screen capture, moving UI fragment, diagram, or process strip would give the eye somewhere new to land.

### Recommendation

Keep the visual identity. Add one visual proof moment between or inside the existing sections:

- A horizontal project media strip below the project header.
- A subtle live UI preview inside the featured project area.
- A small rotating `build log` or `field note` teaser near the bottom.
- A single still frame or looping clip for each flagship project card.

## Project Index

### What Works

- The `Work` title page is visually consistent with the homepage.
- Four cards are easy to scan.
- The project ordering is correct: CinematicAI, CafeMaps, Study Stream, Engineering Focus.

### Content-Heavy Sections

- Each card has similar density: icon, title, number, description, bullet list, CTA.
- The cards communicate categories more than moments. A visitor learns what the projects are, but does not see what they look or feel like.

### Visually Repetitive Sections

- The project index repeats the homepage project grid almost exactly.
- All cards have similar color, structure, icon treatment, and text hierarchy.

### Breathing Room Issues

- The grid is orderly, but the cards compete through equal weight. CinematicAI deserves a larger or richer preview.
- The index could create more curiosity by letting one project occupy more visual space.

### Recommendation

Introduce progressive weight:

- Make CinematicAI a featured wide card with a looping node-workflow preview.
- Keep CafeMaps and Study Stream as secondary cards with strong stills or motion thumbnails.
- Reframe Engineering Focus as a smaller principles/writing entry unless it gains a concrete artifact.

## Project Detail Pages

### What Works

- The first viewport is strong: huge title, summary, tags, role, highlights.
- The shared template keeps the site cohesive.
- Markdown content adds substance and avoids unsupported metrics.
- The writing is careful about evidence, which protects credibility.

### Content-Heavy Sections

- Every project has roughly 850-1,040 words after the hero.
- The markdown section is the densest experience on the site.
- The repeated headings make each project feel like a report.
- `Context`, `Architecture`, `Technical Decisions`, `Product Decisions`, `Challenges`, and `Trade-offs` are useful, but in sequence they create a documentation rhythm.

### Visually Repetitive Sections

- All project pages use the same hero, metadata cards, and markdown stream.
- Each project has the same section pattern, so the pages feel equally weighted even though the projects have different emotional and product stories.
- There are no screenshots, diagrams, video embeds, interface states, prototype frames, or interaction examples.

### Breathing Room Issues

- The markdown body has good typographic spacing, but the reader gets few visual pauses.
- The left `Case Study` label column is mostly static whitespace. It could become a sticky section nav, media caption rail, or progress cue.
- Long text blocks ask the visitor to trust descriptions instead of letting them inspect the work.

### Recommendation

Turn detail pages from article streams into staged case studies:

- Hero: keep current oversized title and summary.
- Immediately below hero: add a visual proof band.
- Then: use short narrative sections paired with media.
- Replace some lists with diagrams, state maps, before/after UI, or interaction clips.
- End with a concise reflection, not another long text section.

## Writing Index

### What Works

- `Notes` is a good label; it feels lighter than `Blog`.
- Three articles is the right starting count.
- Cards are calm, readable, and aligned with the site identity.

### Content-Heavy Sections

- The index is not too word-heavy by count, but it has the same card logic as projects.
- Every article card uses category, title, dek, tags, and CTA with no secondary rhythm.

### Visually Repetitive Sections

- Writing cards and project cards share the same dark-card pattern.
- The writing index has no grouping, featured note, reading time, recency cue, or topic path.

### Breathing Room Issues

- The page is visually quiet, but not especially inviting for browsing.
- The cards are large relative to article length; they can feel like project cards without project-level payoff.

### Recommendation

Make writing feel like a small library rather than another project grid:

- Add a featured/latest article row.
- Use a compact list below for other essays.
- Add topic filters or category anchors only when article count grows.
- Add reading time and one-line takeaway.
- Keep the index lighter than project pages.

## Writing Detail Pages

### What Works

- Article pages are concise: roughly 375-420 words each.
- The topics reinforce the portfolio's strongest themes: AI workflows, frontend architecture, product UX.
- The current template gives articles strong presence.

### Content-Heavy Sections

- The article pages are not too long, but the hero can be visually heavier than the article body.
- The same detail template used for projects makes short essays feel ceremonious.

### Visually Repetitive Sections

- Article detail pages look very similar to project detail pages.
- The markdown body is text-only.

### Breathing Room Issues

- Reading flow is acceptable because articles are short.
- Navigation is minimal: back to writing, projects. There is no next/previous article path.

### Recommendation

Keep articles short, but improve reading flow:

- Add next/previous article links.
- Add a compact article footer with related project links.
- Consider smaller article heroes than project heroes.
- Add pull quotes or compact diagrams only when they clarify the idea.

## Phase 2: Media Opportunities By Project

## Priority 1: CinematicAI

Current issue: strongest project, but the page describes a visual workflow product without showing a workflow. This creates the biggest curiosity gap on the site.

### Best Media Opportunities

- **Hero motion:** 8-12 second loop of nodes appearing, connecting, running, and completing.
- **Interactive preview:** lightweight node canvas mock showing model, prompt, input, output, and execution states.
- **Process diagram:** `Prompt -> Model -> Transform -> Review -> Export` pipeline with visible dependencies.
- **Execution-state strip:** queued, running, complete, failed, retrying states shown as UI frames.
- **Debugging demo:** short clip where a failed node reveals the missing input or bad output format.
- **Workflow reuse visual:** saved workflow template transforming from blank canvas to reusable production pipeline.
- **Before/after:** one-off prompt chaos vs repeatable node workflow.

### Recommended Page Moments

1. First visual after hero: cinematic node-workflow loop.
2. Mid-page: system diagram explaining nodes, edges, execution, and outputs.
3. Decision section: three UI-state frames replacing paragraphs about debugging.
4. End: mini interactive workflow preview or short demo embed.

### Motion Direction

- Keep it restrained: slow node reveals, glowing execution paths, subtle status pulses.
- Avoid flashy AI sparkle language.
- Motion should communicate inspectability, not decoration.

## Priority 2: CafeMaps

Current issue: the page describes discovery, curation, and map-first browsing, but does not show place selection or spatial decision-making.

### Best Media Opportunities

- **Map/list screenshot:** map pins and curated list in one coordinated layout.
- **Mobile flow:** browse nearby, filter by mood, open place detail, save/share/get directions.
- **Curation diagram:** how cafe attributes become useful filters: mood, seating, noise, Wi-Fi, work-friendliness, neighborhood.
- **Interaction clip:** tapping a card highlights a map pin; dragging map updates list; selecting pin opens place sheet.
- **Place detail anatomy:** annotated panel showing decision-critical details.
- **Trust visual:** curated tags and concise notes, not star-rating overload.

### Recommended Page Moments

1. First visual after hero: map/list composition.
2. Problem section: generic search results vs curated contextual browsing.
3. Product decision section: mobile place-detail anatomy.
4. Architecture section: map/list state coordination diagram.

### Motion Direction

- Use gentle map panning, pin selection, sheet expansion, list filtering.
- Make it feel like quick decision support, not a travel brand page.

## Priority 3: Study Stream

Current issue: the page describes realtime collaboration and calm focus, but does not show the session lifecycle or participant state.

### Best Media Opportunities

- **Session lifecycle diagram:** lobby, ready, focus, break, complete.
- **Realtime state clip:** participants join, mark ready, session starts, status updates quietly.
- **Room screenshot:** calm focus room UI with timer, participants, lightweight feedback.
- **Presence-state matrix:** idle, ready, focusing, on break, done.
- **Interaction demo:** starting a room and seeing state sync across participants.
- **Distraction boundary visual:** what the interface intentionally does not include.

### Recommended Page Moments

1. First visual after hero: calm focus room screenshot or motion loop.
2. Architecture section: session-state machine.
3. Product decision section: social presence without noisy feed.
4. End: tiny realtime preview showing state sync.

### Motion Direction

- Slow, quiet, low-contrast state changes.
- Avoid gamified energy unless the product actually uses it.
- Motion should feel like focus, not productivity hype.

## Engineering Focus

Current issue: it is not a project in the same sense as the first three. It reads like principles and practice.

### Best Media Opportunities

- **Code architecture diagram:** Astro pages, React islands, content markdown, Tailwind system.
- **Component boundary visual:** static Astro shell vs animated React islands.
- **Design token board:** color, type, spacing, motion principles from `design.md`.
- **AI workflow process:** prompt, inspect, edit, verify, ship.

### Recommendation

Do not expand this as a visual case study unless it attaches to a real artifact. Better options:

- Move it to writing as an engineering note.
- Rename it as principles.
- Replace it with a concrete project.
- Keep it as a small `How I Build` page with diagrams, not a case study.

## Phase 3: Project Storytelling

## Documentation Vs Case Studies

Current project pages feel closer to documentation than case studies.

Why:

- The headings are systematic and complete.
- Each page explains scope, goals, decisions, tradeoffs, and future improvements.
- Claims are carefully constrained by repository evidence.
- There are no scenes, artifacts, or demonstrations.
- The reader is told what the project intends before seeing how it behaves.

What a case study should feel like:

- A visitor sees the product surface early.
- The problem becomes obvious through a visual or interaction.
- The page moves through a few memorable moments, not a checklist of sections.
- Technical depth appears through diagrams, state models, or demos.
- Reflection is concise and earned by the preceding evidence.

## Recommended Story Structure

Use this structure for CinematicAI, CafeMaps, and Study Stream:

1. **Immersive Hero:** current title/summary, plus project-specific media near the fold.
2. **The Moment:** a concrete user situation shown visually.
3. **The System:** diagram or interactive model showing how the product works.
4. **Key Decisions:** 3 visual decision blocks, each with a screenshot/state/diagram and short caption.
5. **Tradeoffs:** compact comparison, not paragraphs.
6. **Result / Current State:** honest status, links, prototype, or private-project note.
7. **Reflection:** 3-5 tight lessons.

## Copy Reduction Targets

- CinematicAI: reduce body prose by 30-40% once media exists.
- CafeMaps: reduce body prose by 25-35% once map/list visuals exist.
- Study Stream: reduce body prose by 25-35% once lifecycle visuals exist.
- Engineering Focus: reduce or move; do not make it longer.

## Replace Text With Visual Proof

Good swaps:

- `Architecture` paragraphs -> system diagram.
- `Technical Decisions` bullets -> annotated UI states.
- `Product Decisions` paragraphs -> side-by-side interaction choices.
- `Challenges` list -> constraint board.
- `Trade-offs` paragraphs -> comparison table or paired cards.
- `Future Improvements` list -> small roadmap strip.

## Phase 4: Writing Experience

## Is Writing Too Dense?

The writing section is not too dense by length. It is dense by sameness.

The article bodies are short, focused, and useful. The issue is that writing pages share the same visual ceremony as project pages, so the site asks the same kind of attention for essays and case studies.

## Article Listing Improvements

- Use a lighter index layout than the project grid.
- Feature one article at the top with a short takeaway.
- Use a compact list for the rest.
- Add reading time.
- Add topic labels, but keep them quieter than project tags.
- Add `Related project` when an article connects to CinematicAI, CafeMaps, or Study Stream.

## Article Navigation Improvements

- Add previous/next links on article pages.
- Add `Related notes` at the end.
- Add a small `Writing` index rail or footer link back to all notes.
- Consider topic clusters once there are 6+ articles.

## Reading Flow Improvements

- Use smaller article title scale than project title scale.
- Add optional pull quote for the central idea.
- Keep paragraphs short.
- Use diagrams sparingly for conceptual posts.
- End articles with one clear lesson, then navigation.

## Content Quality Guardrails

- Do not shorten articles into social posts.
- Do not add lifestyle filler.
- Do not use writing as a substitute for project evidence.
- Keep essays tied to observed building problems.

## Phase 5: Field Notes

## Would Field Notes Help?

Yes, if kept lightweight and sharply framed. A small Field Notes section could make the portfolio feel more human, especially because the current site is polished, dark, and product-focused. Human texture would help emotional engagement.

The risk: it could drift into lifestyle blogging and weaken the product-builder signal.

## Best Role For Field Notes

Field Notes should be a small observational layer, not a new content pillar.

Good framing:

- Short notes from building, moving, learning, and noticing.
- Observations that reveal taste and attention.
- Human context around how you think.

Avoid:

- Personal diary entries with no connection to craft.
- Generic productivity updates.
- Long cafe reviews.
- Running logs as lifestyle content.
- Posts that compete with project case studies.

## Strong Topic Angles

- **Running:** discipline, pacing, recovery, focus, compounding effort.
- **Cafes:** attention to environment, discovery, mood, spatial product thinking. Strong tie to CafeMaps.
- **Product building:** small decisions, constraints, prototypes, debugging.
- **Learning:** notes on tools, concepts, books, experiments.
- **Creativity:** taste, constraints, workflow, AI as collaborator.

## Recommended Format

- Route: `/notes` or a homepage module first, not a major nav item immediately.
- Length: 80-180 words per note.
- Frequency: occasional.
- UI: compact dated list, no large cards.
- Tone: observational, concrete, quiet.
- Relationship to writing: Field Notes are fragments; Writing remains essays.

## Homepage Placement

Add a small `Field Notes` strip near the bottom, before contact:

- 3 recent notes.
- One line each.
- Link to all notes only after there are enough entries.

This would soften the portfolio without changing its visual identity.

## Priority Plan

## Immediate

1. Add media slots to project detail pages.
2. Create or collect CinematicAI workflow visuals first.
3. Reduce repeated project markdown once visuals exist.
4. Make writing index lighter than project index.

## Next

1. Add CafeMaps map/list visuals.
2. Add Study Stream session-state visuals.
3. Reframe Engineering Focus.
4. Add next/previous article navigation.

## Later

1. Add Field Notes as a small module.
2. Add topic clusters for writing after the article count grows.
3. Add interactive project previews if static media proves useful.

## Final Recommendation

The portfolio should keep its current visual identity, but it needs more artifacts and fewer explanations. The writing is careful and credible, but the strongest project stories now need visual evidence.

Move the experience from:

`large title -> careful summary -> long explanation`

to:

`large title -> immediate artifact -> short narrative -> visual system proof -> concise reflection`.

That shift will increase curiosity, visual interest, and emotional engagement without making the site louder or less refined.
