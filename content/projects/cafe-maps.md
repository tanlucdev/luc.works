---
slug: cafe-maps
title: CafeMaps
number: "02"
description: 'A full-stack cafe discovery platform for Ho Chi Minh City with mood-based search, geospatial recommendations, editorial content, and an internal CMS.'
icon: map
items:
  - Location discovery
  - Mood-based search
  - Geospatial recommendations
  - Internal CMS
summary: 'A full-stack discovery product for finding cafes in Ho Chi Minh City by mood, location, and real visiting context. The experience centers around curated editorial content, geospatial recommendations, and map-first navigation.'
role: 'Full-stack engineering, product UX, mapping experience'
stack:
  - Next.js
  - React
  - TypeScript
  - Google Maps API
  - PostgreSQL
  - Prisma
  - Geospatial UI
highlights:
  - Mood-based cafe search paired with map exploration
  - Editorial content and place details managed through a CMS
  - Geospatial recommendations for Ho Chi Minh City discovery
media:
  type: mockup
  title: Map/list decision loop
  caption: 'A product-style mockup showing selected pins, curated place cards, and a mobile-friendly detail sheet working together.'
availability: 'Portfolio artifact: product-style mockup from legacy CafeMaps notes. Public metrics, source code, and data coverage are not claimed here.'
caseSummary:
  problem: 'Generic search is too noisy when someone wants a cafe that fits mood, area, and visiting context.'
  role: 'Owned full-stack direction, product UX, map/list interaction, and content model framing.'
  decisions:
    - 'Pair the map with a curated list instead of making users switch modes.'
    - 'Use mood and context as first-class filters.'
    - 'Keep place details short enough for mobile decisions.'
  result: 'A clearer product UX story around local discovery, curation, and geospatial interface design.'
  lesson: 'Discovery products are won through defaults, trust, and progressive detail.'
proofMoments:
  - title: 'Map and list together'
    body: 'Selecting a card highlights the place on the map; selecting a pin opens the decision details.'
    kind: map
    caption: 'Spatial UX'
  - title: 'Context over breadth'
    body: 'Mood, work-friendliness, seating, and neighborhood matter more than showing every possible listing.'
    kind: place
    caption: 'Curation'
  - title: 'CMS-backed quality'
    body: 'Editorial content gives the product a way to maintain useful place notes instead of depending only on raw ratings.'
    kind: cms
    caption: 'Content'
source_evidence:
  - legacy project archive
  - src/data/projects.ts
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
  - PORTFOLIO_EXTENSION_PLAN.md
status: migrated from legacy project notes and repository evidence
---

## Problem

Choosing a cafe is rarely just a distance problem. People choose by mood, noise, seating, work setup, neighborhood, and how much trust they have in the recommendation.

Generic search can answer “what is nearby,” but it often makes the user compare too many weak signals. CafeMaps focuses on the moment where someone wants to decide quickly and confidently.

## System

The product pairs a map with curated place cards. The map gives spatial context; the list gives editorial judgment. A selected cafe should feel connected across both surfaces, so the user is never wondering whether the card and pin refer to the same place.

The documented stack points to a full-stack product: Next.js and React for the interface, Google Maps API for location, PostgreSQL and Prisma for structured cafe data, and an internal CMS for editorial content.

## Key Decisions

- Make the experience map-first because location and neighborhood comparison are central to the decision.
- Use mood-based search so users can browse by real intent: quiet work, meetups, exploration, or a specific area.
- Keep place details scannable on mobile: hours, vibe, useful tags, and a short note beat long copy.
- Treat curation as a trust layer, not decoration.

## Tradeoff

Curated discovery can be more useful than generic breadth, but it also means the product must be honest about coverage. A smaller set of better-presented places is preferable to pretending the product knows every cafe.

Map-heavy UI also creates mobile complexity. The interface has to balance panning, selecting, filtering, and reading without making the screen feel crowded.

## Reflection

CafeMaps is the strongest product UX story in the portfolio because the user problem is familiar and the decisions are concrete.

The lesson: discovery interfaces need clear defaults. The product should reduce comparison work, not hand the user another pile of search results.
