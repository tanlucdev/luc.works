# Portfolio Extension Plan

Inputs used: current project data in `src/data/projects.ts`, current routes in `src/pages`, current component patterns, `design.md`, `PROJECT_PAGE_AUDIT.md`, and `PROJECT_DISCOVERY_REPORT.md`.

## Direction

Prioritize content depth over new pages. The portfolio already has strong visual identity and a working project detail route. The next improvement should make existing project pages more specific, credible, and useful.

New routes should be added only when they provide meaningful content value that cannot fit cleanly inside a project detail page.

The best near-term content model is:

- Deep project detail pages for all real projects.
- Optional writing only when there are strong engineering/product notes to publish.
- Optional case studies only when a project has enough artifacts, decisions, outcomes, and narrative depth to deserve long-form treatment.
- Project archive later, only if the portfolio grows beyond the four current project cards.

## Priority 1: Project Detail Pages

Current `/projects/[slug]` pages are visually aligned with the site, but too shallow. Keep the route and deepen the content.

### Recommended Additions

Add structured content to project data and render it below the existing hero/cards:

- `Problem`: what user pain or workflow gap the project addresses.
- `Target users`: who the project serves.
- `Approach`: how the product solves the problem.
- `Architecture`: compact explanation of the system model.
- `Decisions`: important engineering and product choices with rationale.
- `Tradeoffs`: what was simplified, constrained, or deferred.
- `Result`: outcome, shipped artifact, or current state.
- `Lessons`: what the project taught.
- `Links`: demo, repo, prototype, or private-project note.

### Suggested Future Type Shape

```ts
type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  icon: 'workflow' | 'map' | 'users' | 'code';
  items: string[];
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  problem?: string;
  targetUsers?: string[];
  approach?: string;
  architecture?: string;
  decisions?: string[];
  tradeoffs?: string[];
  result?: string;
  lessons?: string[];
  links?: { label: string; href: string; kind: 'live' | 'repo' | 'note' | 'case-study' }[];
  caseStudySlug?: string;
};
```

### Page Structure

Keep the existing first viewport:

- Utility nav.
- Project number.
- Oversized title.
- Summary.
- Stack tags.
- Role and highlights cards.

Add below it:

- Product frame: `Problem`, `Users`, `Approach`.
- System frame: `Architecture`, `Key decisions`, `Tradeoffs`.
- Reflection frame: `Result`, `Lessons`, `Links`.

Use dark panels and compact cards. Keep prose short but specific.

### Project Priority

1. `CinematicAI`: deepen first. Focus on AI workflow systems, node editor model, orchestration, execution states, and debugging.
2. `CafeMaps`: deepen second. Focus on discovery, curation, map/list UX, location data, mobile decision-making.
3. `Study Stream`: deepen third. Focus on realtime session lifecycle, participant state, accountability, calm UX.
4. `Engineering Focus`: reframe. Either tie it to a concrete shipped artifact or treat it as a principles/writing source instead of a normal project.

## Priority 2: Writing Section

Writing should exist only if it strengthens the existing product-builder narrative. It should not become a generic blog or a substitute for project depth.

### Why It Should Exist

- It can show judgment that does not fit inside project pages.
- It can explain engineering taste, product thinking, and lessons from building.
- It can support credibility for topics repeated across the site: AI workflows, frontend architecture, design systems, and product UX.

### When To Add It

Add writing after at least one or two project pages have been deepened. The project pages should provide the proof; writing should provide perspective.

### Route Structure

Recommended only when there are at least 3 strong posts:

- `/writing`: quiet index.
- `/writing/[slug]`: article page.

If there are fewer than 3 posts, use a small `Notes` block inside an existing page or hold the content until it is ready.

### Content Structure

Each article should include:

- Title.
- Dek.
- Category.
- Tags.
- Short intro.
- 3 to 5 focused sections.
- Closing lesson.

Recommended future data source:

- `src/data/writing.ts` for metadata-first articles.
- Astro content collections only if article bodies grow into MDX/markdown.

### Article Categories

- AI Workflows.
- Frontend Architecture.
- Product UX.
- Design Systems.
- Engineering Notes.

### Article Ideas

- `Designing AI workflows people can debug`.
- `Building node-based editors without hiding system state`.
- `What creative AI tools need besides generation`.
- `Lessons from CafeMaps: map-first discovery and trust`.
- `Realtime UX should feel calm before it feels clever`.
- `Frontend architecture decisions that make portfolios age well`.
- `Design systems as product constraints, not decoration`.
- `Using AI tools without outsourcing taste`.
- `Product thinking for frontend engineers`.

## Priority 3: Case Studies

Case studies are optional. Do not add a case-study route just because the portfolio has projects. A deeper project page is preferred unless the content becomes long enough to need its own reading path.

### When A Case Study Earns A Route

Create `/case-studies/[slug]` only if a project has:

- Clear context and constraints.
- Multiple product and engineering decisions.
- Architecture or workflow diagrams.
- Evidence, screenshots, demos, outcomes, or a strong process narrative.
- Lessons beyond what fits comfortably on the project page.

### Best Candidates

- `CinematicAI`: strongest candidate because it can explain AI workflow orchestration, node systems, debugging, and creative production.
- `CafeMaps`: second candidate if there are visual assets or enough product-discovery detail.
- `Study Stream`: only if realtime architecture and session design are documented clearly.
- `Engineering Focus`: not a case study unless connected to a concrete shipped system.

### Design Fit

Case studies should reuse the existing language:

- Black canvas.
- Oversized hero type.
- `#101010` narrative panels.
- `#1F1F1F` detail cards.
- Uppercase micro-labels.
- Compact body copy.
- Restrained motion reveals.

## Priority 4: Engineering Notes

Engineering notes should fold into the Writing section. They should be shorter, sharper pieces that explain decisions, not separate site architecture.

Good engineering-note topics:

- Node graph state models.
- Realtime session state.
- Map/list coordination.
- Animation boundaries in Astro + React islands.
- Tailwind design-system discipline.
- AI-assisted development workflow.

## Priority 5: Project Archive

Add a project archive only after there are enough smaller projects to make the homepage grid feel incomplete.

### Why It Might Exist Later

- Keeps homepage projects curated.
- Gives older experiments a home without over-weighting them.
- Lets the portfolio show breadth without diluting flagship pages.

### Current Recommendation

Do not add archive yet. Four current project cards are manageable. Improve their depth first.

## Design Rules For Content Expansion

- Preserve the existing detail-page hero composition.
- Use full-width sections or simple panels, not nested cards.
- Keep card radius at `8px`.
- Keep text calm: `text-sm` to `text-base`, `leading-relaxed`, `text-gray-400`.
- Use labels with `tracking-[0.2em]` to `tracking-[0.28em]`.
- Use lucide icons only where they clarify action or metadata.
- Avoid marketing-heavy language.
- Prefer concrete decisions over broad claims.

## Build Order

1. Extend `Project` content with optional deep fields.
2. Add deep content for `CinematicAI`.
3. Update `/projects/[slug]` to render deep sections only when fields exist.
4. Add deep content for `CafeMaps` and `Study Stream`.
5. Reframe or replace `Engineering Focus`.
6. Add writing only after there are at least 3 strong article drafts.
7. Add case-study routes only if a project outgrows the deep detail page.
8. Add archive only after the project list grows beyond the curated homepage set.

## Acceptance Criteria For Future Implementation

- Existing homepage visual identity remains intact.
- Existing project URLs remain valid.
- Every deep project page answers: problem, users, system, decisions, tradeoffs, result, lessons.
- New route families are not added until they have enough content to justify them.
- `CinematicAI` becomes the strongest proof of technical and product depth.
- `Engineering Focus` no longer reads like a shallow fourth project unless it gains a concrete artifact.

## Recommendation Summary

Highest-impact path:

- Deepen existing project pages first.
- Start with `CinematicAI`.
- Use `CafeMaps` for product UX depth.
- Use `Study Stream` for realtime UX/system depth.
- Reframe `Engineering Focus`.
- Add Writing later only when article quality is high.
- Add Case Studies only when a project has evidence and length beyond the project page.
- Do not add Project Archive yet.

