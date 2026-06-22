---
slug: cafe-maps
title: CafeMaps
number: "02"
description: 'A location discovery platform helping people find great cafes through curated experiences.'
icon: map
items:
  - Location discovery
  - Curated cafes
  - Maps integration
  - Modern user experience
summary: 'A discovery product for finding cafes by mood, location, and real visiting context. The experience centers around quick scanning, trustworthy curation, and map-first navigation.'
role: 'Frontend engineering, product UX, mapping experience'
stack:
  - Next.js
  - TypeScript
  - Maps API
  - Geospatial UI
  - Responsive design
highlights:
  - Curated lists paired with map exploration
  - Mobile-first browsing flow
  - Place detail structure for fast decisions
source_evidence:
  - src/data/projects.ts
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
  - PORTFOLIO_EXTENSION_PLAN.md
status: content draft based on repository evidence
---

## Overview

CafeMaps is described as a location discovery product for finding cafes through curated, map-first browsing. The current project metadata emphasizes mood, location, visiting context, quick scanning, trustworthy curation, and mobile navigation.

The discovery reports identify CafeMaps as the strongest product UX story among the featured projects because the user problem is familiar and the product decisions can be explained through discovery, trust, and map/list coordination.

## Problem

Raw search results can make cafe selection slow and noisy. People often need a fast, trustworthy way to choose a place based on context: where they are, what mood they want, whether they are working, meeting someone, or exploring an area.

## Context

The portfolio repository does not include a CafeMaps implementation, screenshots, data schema, or live link. Available evidence comes from project metadata and the audit documents.

The current page describes the project at a summary level: curated lists, map exploration, mobile-first browsing, and place details for fast decisions. The audit recommends deepening the content around curation, location data, map/list interaction, and mobile constraints.

## Target Users

- People choosing cafes by neighborhood, mood, or visiting context.
- Mobile users comparing nearby places quickly.
- Users who want curated recommendations rather than broad search results.
- Cafe visitors who need scannable place details before deciding.

## Goals

- Make cafe discovery faster than generic search.
- Pair map-based exploration with curated list browsing.
- Keep place details scannable on mobile.
- Support decisions based on context, not only distance.
- Build a discovery experience that feels trustworthy without claiming unsupported coverage or review data.

## Solution

CafeMaps centers the experience around map-first navigation and curated cafe lists. The product direction favors a short path from exploration to decision: browse an area, scan relevant options, inspect a place, then decide quickly.

The current project highlights describe curated lists paired with map exploration, a mobile-first browsing flow, and a place detail structure for fast decisions.

## Architecture

Available repository evidence points to a conceptual product architecture built around:

- A map view backed by a Maps API.
- Curated place data organized around cafe discovery.
- A coordinated map and list browsing experience.
- Place detail content structured for quick scanning.
- Responsive layouts for mobile and desktop use.

No implementation source is present for CafeMaps in this repository, so exact API provider configuration, data storage, geocoding strategy, filtering implementation, and deployment details are not documented here.

## Technical Decisions

- Use Next.js and TypeScript, based on the stack listed in `src/data/projects.ts`.
- Use a Maps API because location is central to the discovery workflow.
- Design map and list state as a coordinated experience rather than isolated views.
- Treat responsive design as a core requirement because cafe decisions often happen on mobile.
- Shape place details around fast scanning instead of long-form content.

## Product Decisions

- Favor curated results over generic search breadth.
- Support discovery by mood, location, and real visiting context.
- Use map-first navigation because spatial comparison matters for cafe choice.
- Keep place details concise so users can decide without reading too much.
- Prioritize trust and relevance over claiming complete coverage.

## Challenges

- Making map-heavy UI usable on small screens.
- Coordinating map markers, selected places, and list state.
- Deciding which place attributes matter most for quick decisions.
- Balancing curated quality against breadth of available cafe data.
- Explaining curation without unsupported claims about review sources or data volume.

## Trade-offs

- Curated discovery can feel more trustworthy, but it may cover fewer places than a generic search tool.
- Map-first navigation supports spatial decisions, but can add interaction complexity on mobile.
- Short place details improve scanning, but may leave out information some users want.
- Context-based browsing is more useful than pure distance sorting, but it requires careful data modeling.

## Results

CafeMaps appears as the second featured project in the current portfolio, with a generated detail route, stack tags, role description, and three highlights.

No repository evidence was found for user metrics, active deployment, screenshots, source links, or data coverage. The current result should be described as portfolio-documented product work unless additional evidence is added.

## Lessons Learned

- Discovery products depend on defaults, trust, and progressive detail.
- Map/list coordination is a product decision as much as a technical one.
- Mobile constraints should shape the information model early.
- Curation should be explained carefully when the source data and process are not public.

## Future Improvements

- Add screenshots or prototypes showing the map/list relationship.
- Document the place detail model and curation criteria if available.
- Add verified notes about Maps API integration and responsive behavior.
- Add source, demo, or private-project note to clarify project availability.
- Add outcome evidence only if backed by real usage or testing data.
