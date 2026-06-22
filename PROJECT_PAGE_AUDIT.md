# Project Page Audit

Audit target: current project detail experience in `src/pages/projects/[slug].astro`, backed by `src/data/projects.ts`.

## Executive Summary

The portfolio has a strong visual system, but the project detail pages are still summaries rather than deep project narratives. All four routes use the same compact template: project number, oversized title, summary, stack tags, role, and three highlights. This gives the pages polish and consistency, but not enough evidence of product thinking, engineering judgment, architecture, tradeoffs, or lessons learned.

Priority should be content depth inside the existing project page format. Add new routes only when a project has enough concrete story, artifacts, and decisions to justify a separate long-form case study.

## Current Project Page Structure

Each generated route currently includes:

- Utility nav: back to projects, contact.
- Hero: project number, large title, short summary, stack tags.
- Metadata cards: role and highlights.

Missing across every page:

- Problem statement.
- Target users and use context.
- Constraints.
- Architecture explanation.
- Key engineering decisions.
- Product decisions and tradeoffs.
- Results, outcomes, or validation.
- Lessons learned.
- Visual artifacts, live links, source links, screenshots, diagrams, or demos.

## Scoring Scale

- `1`: absent or too generic.
- `2`: lightly implied.
- `3`: present but shallow.
- `4`: useful and specific.
- `5`: strong, evidence-backed, implementation-ready.

## Page Scores

| Project | Content Depth | Technical Depth | Storytelling | Architecture | Engineering Decisions | Product Decisions | Lessons Learned |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| CinematicAI | 2 | 2 | 2 | 1 | 2 | 2 | 1 |
| CafeMaps | 2 | 1 | 2 | 1 | 1 | 2 | 1 |
| Study Stream | 2 | 1 | 2 | 1 | 1 | 2 | 1 |
| Engineering Focus | 2 | 2 | 1 | 1 | 2 | 1 | 1 |

## CinematicAI

Route: `/projects/cinematic-ai`

### What Works

- The positioning is clear: a node-based AI workflow platform for creative production.
- The stack tags and highlights signal a technical system, not a generic marketing project.
- The summary introduces a useful product promise: repeatable pipelines without infrastructure friction.

### Weak Sections

- The page does not explain the workflow model: what nodes represent, how data moves, how prompts/models/inputs/outputs connect.
- AI orchestration is named but not described.
- Real-time execution and debugging are mentioned but not shown as state design or architecture.
- Creator workflow context is generic; no specific user journey appears.

### Missing Content To Add

- Problem: creative AI work becomes hard to repeat, inspect, and debug when it lives in scattered prompts and tools.
- Target users: creators, creative operators, small production teams, or AI workflow builders.
- Architecture: node graph, execution engine, model/input/output boundaries, state transitions.
- Engineering decisions: how to represent reusable workflow patterns, execution status, validation, failure handling.
- Product decisions: why visual nodes, why visible execution state, what friction was intentionally removed.
- Lessons: what the project taught about making AI systems inspectable.

### Recommended Page Depth

This should be the flagship deep project page. It can become case-study length inside `/projects/cinematic-ai` before any separate route is considered.

## CafeMaps

Route: `/projects/cafe-maps`

### What Works

- The purpose is easy to understand: cafe discovery through curated experiences.
- The page signals product UX with map-first navigation, mobile browsing, and place detail structure.
- The project has a natural user story because the decision problem is familiar.

### Weak Sections

- The current page does not explain how curation works.
- Maps integration is listed as a technology, but not connected to UX or data decisions.
- The distinction between list browsing, map exploration, and place details is not developed.
- No constraints are captured: mobile viewport, noisy place data, trust, distance, filtering, or decision speed.

### Missing Content To Add

- Problem: people want fast, trustworthy cafe choices, not raw search results.
- Target users: cafe-goers choosing by mood, work setting, neighborhood, or context.
- Architecture: location data, map/list coordination, place detail model, responsive state.
- Engineering decisions: geospatial UI handling, map API integration, mobile-first layout, filtering/data shape.
- Product decisions: curated lists, mood/context filters, scan-first details, map-first navigation.
- Lessons: how discovery UX depends on defaults, trust, and progressive detail.

### Recommended Page Depth

Make this the second-deepest project page after CinematicAI. A separate route is unnecessary unless there are screenshots, data notes, or a substantial product-design narrative.

## Study Stream

Route: `/projects/study-stream`

### What Works

- The page has a clear behavioral goal: help students stay focused.
- The current highlights imply a real-time collaborative product with session state.
- The tone fits the portfolio: calm, focused, friction-reducing.

### Weak Sections

- Realtime interaction is listed, but no session lifecycle is described.
- The accountability model is vague.
- The product challenge is not yet concrete: social presence can help focus, but can also distract.
- There is no explanation of participant state, room state, timers, breaks, or feedback loops.

### Missing Content To Add

- Problem: students need accountability without turning focus sessions into noisy social spaces.
- Target users: students and small study groups.
- Architecture: focus rooms, participant presence, session state, real-time events.
- Engineering decisions: state synchronization, room lifecycle, minimal interaction design.
- Product decisions: calm UI, lightweight feedback, low-friction session start.
- Lessons: how realtime UX should make state obvious without over-stimulating users.

### Recommended Page Depth

Upgrade as a focused product-system story. Keep it concise unless there is enough implementation evidence for a full case study.

## Engineering Focus

Route: `/projects/engineering-focus`

### What Works

- It reinforces Tan Luc's positioning: frontend systems, clean architecture, design systems, AI tooling.
- The content connects to the homepage and resume language.
- It can act as an organizing theme for writing or engineering notes.

### Weak Sections

- It reads like a practice area, not a shipped project.
- There is no concrete problem, user, artifact, architecture, or outcome.
- The page duplicates broader site positioning already present in the hero, about, work, and resume sections.

### Missing Content To Add

- If kept as a project page: attach it to a concrete shipped system, internal tool, design system, or engineering workflow.
- If not tied to a concrete artifact: convert the content into writing topics, principles, or a project archive entry.
- Add examples of architecture decisions, tooling decisions, or AI-assisted workflow patterns.

### Recommended Page Depth

Do not make this a case study. Either reframe it as a principles page within the current detail template or replace it with a more concrete project.

## Duplicated And Shallow Content

- `AI workflow systems`, `frontend architecture`, `design systems`, and `product development` appear across homepage, resume, and project metadata without deeper proof.
- All pages share the same section pattern, so projects feel equally weighted even though CinematicAI and CafeMaps have stronger story potential.
- Highlights are useful but too short to reveal decisions or tradeoffs.
- Stack tags name technologies and domains, but do not explain implementation choices.

## Recommended Missing Sections

Add these sections to project pages before adding new pages:

- `Problem`: one paragraph that states the user pain and why it matters.
- `Users`: who the project serves and what job they are trying to complete.
- `System`: a compact architecture explanation.
- `Decisions`: 3 to 5 engineering or product decisions with rationale.
- `Tradeoffs`: what was intentionally simplified, deferred, or constrained.
- `Lessons`: what the project changed about the author's engineering or product judgment.
- `Links`: live demo, repository, prototype, or unavailable-note if private.

## Priority Order

1. Deepen `CinematicAI` in the existing project detail page.
2. Deepen `CafeMaps` with product and map-discovery details.
3. Deepen `Study Stream` with realtime/session-state details.
4. Reframe `Engineering Focus` as a concrete artifact, principles page, or writing source.

## Content Standard

Each project page should answer:

- What problem did this solve?
- Who was it for?
- What did I own?
- How was it built?
- Which decisions mattered?
- What tradeoffs shaped the final result?
- What did I learn?

