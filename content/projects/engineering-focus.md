---
slug: engineering-focus
title: How I Build
number: "04"
description: 'Frontend systems shaped by clean architecture, strong UX, and pragmatic AI-assisted workflows.'
icon: code
items:
  - React islands
  - TypeScript boundaries
  - Design-system discipline
  - AI-assisted workflow
summary: 'A principles page about building stable frontend systems: clean component boundaries, accessible interfaces, maintainable styling, and careful AI-assisted development.'
role: 'Frontend engineer, systems thinker, AI workflow developer'
stack:
  - React
  - Next.js
  - Astro
  - TypeScript
  - Tailwind CSS
highlights:
  - Component architecture built for iteration
  - Design systems with practical constraints
  - AI tooling used to accelerate product development
media:
  type: mockup
  title: Engineering system map
  caption: 'A compact model of the portfolio architecture: static Astro pages, focused React islands, markdown content, Tailwind styling, and verification before shipping.'
availability: 'Principles entry: this is intentionally framed as how I build, not as a separate shipped product.'
caseSummary:
  problem: 'Broad claims about frontend architecture feel generic unless they are tied to visible practice.'
  role: 'Defined the portfolio architecture, design system, motion boundaries, and evidence-led content model.'
  decisions:
    - 'Use Astro for content-first pages.'
    - 'Use React only where interaction or motion earns client-side code.'
    - 'Keep design rules documented so visual taste becomes repeatable.'
  result: 'A clearer fourth entry that supports the real projects instead of competing with them.'
  lesson: 'Engineering positioning is strongest when it points to concrete habits.'
proofMoments:
  - title: 'Static first'
    body: 'Astro keeps the portfolio content-led, fast, and easy to reason about.'
    kind: architecture
    caption: 'Architecture'
  - title: 'Small islands'
    body: 'React is reserved for motion and interactive surfaces rather than becoming the whole page by default.'
    kind: process
    caption: 'Boundaries'
  - title: 'Documented taste'
    body: 'The design system turns visual decisions into reusable constraints instead of one-off styling.'
    kind: tokens
    caption: 'System'
source_evidence:
  - src/pages/index.astro
  - src/components
  - design.md
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
status: principles entry based on portfolio implementation
---

## Problem

Portfolio language can easily become generic: clean architecture, design systems, product thinking, AI workflows. Those phrases only matter when they show up in the way the work is built.

This entry reframes the fourth project slot as a principles page. It explains engineering taste without pretending there is a separate shipped product behind it.

## System

The portfolio itself is the artifact. Astro handles content-focused routes. React islands handle motion and interactive surfaces. Markdown carries project and writing content. Tailwind keeps the visual system consistent. The design rules are documented so the site can evolve without losing its identity.

That architecture fits the kind of work the portfolio claims: restrained UI, structured content, product storytelling, and pragmatic frontend engineering.

## Key Decisions

- Start static and content-first; add client-side code only where it improves the experience.
- Keep repeated visual patterns small, predictable, and documented.
- Let motion reveal hierarchy, not become the main feature.
- Use AI-assisted workflows as a way to move faster while still inspecting, editing, and verifying the result.

## Tradeoff

A restrained architecture can look simple from the outside. The value is in fewer moving parts, clearer ownership, and less UI noise.

This page should support the real case studies. It should not compete with CinematicAI, CafeMaps, or Study Stream as if it were the same kind of product.

## Reflection

Good frontend work is not only about shipping components. It is about choosing boundaries that let the product stay understandable as it grows.

The lesson: professional engineering taste is visible in what you decide not to complicate.
