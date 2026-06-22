# Project Discovery Report

Repository analyzed: `luc.works`.

## Repository Overview

This is a compact Astro portfolio with React islands for animation and Tailwind CSS for styling. The site is currently source-light and presentation-focused: project content is centralized in TypeScript data rather than markdown, MDX, CMS content, or content collections.

Key facts:

- Framework: Astro 7, React islands, TypeScript, Tailwind CSS.
- Motion: `framer-motion` in React components.
- Icons: `lucide-react`.
- Routes: homepage, resume, dynamic project detail pages.
- Project data: `src/data/projects.ts`.
- Assets: public favicon, robots, sitemap, remote hero video.
- No project screenshots, MDX files, markdown content collection, or separate case-study data found.

## Source Findings

### README

The README only states the stack and basic commands. It does not include project history, product notes, architectural notes, content strategy, or deployment details.

### Routes

- `src/pages/index.astro`: home page composed from Hero, About, Features, Philosophy, Contact.
- `src/pages/projects/[slug].astro`: one shared project detail template for every project.
- `src/pages/resume.astro`: compact resume-style profile page.

The sitemap currently lists only `/` and `/resume/`, while the build generates four project routes. Future content work should include project routes in sitemap generation or manual sitemap updates.

### Project Content

`src/data/projects.ts` contains four projects:

- `cinematic-ai`
- `cafe-maps`
- `study-stream`
- `engineering-focus`

Each project has:

- `slug`
- `number`
- `title`
- `description`
- `icon`
- `items`
- `summary`
- `role`
- `stack`
- `highlights`

The current data supports a polished overview, but not a deep project page.

### Design And Implementation

The implementation favors:

- Black canvas.
- Warm ivory typography.
- Huge display type.
- Sparse panels.
- Noise overlays.
- Rounded cards and pills.
- Motion reveals.
- 12-column desktop layouts.

This design language can support deeper content if new sections remain restrained, compact, and evidence-based.

## Project Discovery

## CinematicAI

### Purpose

A node-based AI workflow platform for creative production pipelines. It aims to let creators compose AI models, prompts, inputs, and outputs into repeatable workflows.

### Target Users

Inferred users are creators, creative teams, AI operators, or product builders who need repeatable generation workflows instead of one-off prompt experiments.

### Technologies

Current metadata lists React, TypeScript, node workflows, AI orchestration, and design systems.

### Architecture Hints

The repo suggests a conceptual architecture but does not document the actual implementation:

- Visual node editor.
- Workflow orchestration.
- Dynamic AI model handling.
- Execution states.
- Reusable workflow patterns.

### Engineering Challenges

Likely challenges to document:

- Modeling graph nodes and edges.
- Preserving typed inputs and outputs between steps.
- Representing execution status and failures.
- Making model/prompt configuration reusable.
- Debugging long-running generation chains.

### Product Decisions

Likely decisions to document:

- Use visual nodes because workflow structure matters.
- Make execution state visible to reduce debugging friction.
- Prioritize reusable pipelines over one-off generations.
- Keep creators close to the workflow without exposing infrastructure details.

### Missing From Current Page

- Node data model.
- Execution flow.
- Debugging states.
- Failure modes.
- Workflow reuse strategy.
- Concrete creative production scenario.

## CafeMaps

### Purpose

A cafe discovery product that helps people find cafes through curated, map-first browsing.

### Target Users

Inferred users are people choosing cafes by location, mood, work context, or social context.

### Technologies

Current metadata lists Next.js, TypeScript, Maps API, geospatial UI, and responsive design.

### Architecture Hints

The repo suggests:

- Map API integration.
- Curated place data.
- Map/list exploration.
- Place detail pages or panels.
- Mobile-first browsing.

### Engineering Challenges

Likely challenges to document:

- Coordinating map and list state.
- Designing filters or categories around real user intent.
- Handling location, distance, and place metadata.
- Making map-heavy UI usable on mobile.
- Keeping place details scannable.

### Product Decisions

Likely decisions to document:

- Favor curated results over generic search.
- Pair map exploration with list scanning.
- Optimize details for fast decisions.
- Design around mood and context, not only distance.

### Missing From Current Page

- Curation model.
- Map/list interaction model.
- Location data choices.
- Mobile flow.
- Place detail content strategy.
- Tradeoff between breadth and trust.

## Study Stream

### Purpose

A collaborative productivity platform for focus sessions and lightweight accountability.

### Target Users

Inferred users are students and study groups who need structure, presence, and motivation without noisy collaboration tools.

### Technologies

Current metadata lists React, TypeScript, realtime events, session state, and productivity UX.

### Architecture Hints

The repo suggests:

- Shared focus rooms.
- Participant state.
- Realtime feedback.
- Session lifecycle.
- Productivity tools.

### Engineering Challenges

Likely challenges to document:

- Synchronizing room and participant state.
- Handling joins, leaves, session starts, breaks, and completion.
- Presenting state clearly without distracting users.
- Balancing collaboration with quiet focus.

### Product Decisions

Likely decisions to document:

- Keep interaction lightweight.
- Make room state obvious.
- Reduce friction before a focus session starts.
- Use social presence as accountability, not entertainment.

### Missing From Current Page

- Session lifecycle.
- Realtime state model.
- Participant feedback rules.
- Calm UX decisions.
- What productivity patterns were included or rejected.

## Engineering Focus

### Purpose

A broad statement of engineering practice around frontend systems, design systems, architecture, and AI-powered tooling.

### Target Users

The likely audience is hiring managers, collaborators, or technical peers evaluating engineering judgment.

### Technologies

Current metadata lists React, Next.js, Astro, TypeScript, and Tailwind CSS.

### Architecture Hints

This page is about principles rather than a specific architecture. It references component boundaries, maintainable styling, accessible interfaces, and AI-assisted workflows.

### Engineering Challenges

Likely content topics:

- Component architecture for iteration.
- Design-system constraints.
- AI tooling in development workflow.
- Maintainable styling and accessibility.

### Product Decisions

The current page does not present a product decision. It reads as positioning rather than a project.

### Missing From Current Page

- Concrete artifact.
- Specific system.
- Before/after decision.
- Outcome.
- Lessons tied to real implementation.

## Current Pages Compared To Repository Findings

The current project pages expose only the top layer of available project meaning. The metadata hints at strong stories, but the detail route does not give each project enough room to prove them.

Gaps by information type:

- Purpose: present for all projects, but brief.
- Target users: implied, not explicit.
- Technologies: present as stack tags.
- Architecture: absent or only named.
- Engineering challenges: absent.
- Product decisions: lightly implied.
- Tradeoffs: absent.
- Lessons: absent.
- Assets/evidence: absent.

## Content Opportunities

### Highest Value Content To Add

- Short product thesis for each project.
- Problem and user context.
- System model or architecture summary.
- Decision list with rationale.
- Tradeoff list.
- Lessons learned.
- Links or private-project note.

### Best Project For Deepening First

`CinematicAI` has the strongest combination of technical depth, product narrative, and portfolio positioning. It should receive the most detailed project page first.

### Best Project For Product Story

`CafeMaps` has the clearest everyday user problem. It should emphasize discovery, trust, and mobile map UX.

### Best Project For UX Systems Story

`Study Stream` should focus on realtime state, calm social UX, and session design.

### Content To Reframe

`Engineering Focus` should not compete with shipped projects unless tied to a concrete artifact. It is better used as a principles page, writing source, or archive item.

## Recommended Future Content Fields

Add optional fields to `Project` when implementation begins:

```ts
type Project = {
  problem?: string;
  targetUsers?: string[];
  approach?: string;
  architecture?: string;
  decisions?: string[];
  tradeoffs?: string[];
  result?: string;
  lessons?: string[];
  links?: { label: string; href: string; kind: 'live' | 'repo' | 'case-study' }[];
  caseStudySlug?: string;
};
```

The first implementation should use these fields to deepen current project pages before adding new route families.

