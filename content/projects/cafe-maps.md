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
source_evidence:
  - legacy project archive
  - src/data/projects.ts
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
  - PORTFOLIO_EXTENSION_PLAN.md
status: migrated from legacy project notes and repository evidence
---

## Overview

CafeMaps is a full-stack location discovery product for finding cafes in Ho Chi Minh City through curated, map-first browsing. Legacy project notes describe mood-based search, geospatial recommendations, editorial content, and an internal CMS.

The discovery reports identify CafeMaps as the strongest product UX story among the featured projects because the user problem is familiar and the product decisions can be explained through discovery, trust, and map/list coordination.

## Problem

Raw search results can make cafe selection slow and noisy. People often need a fast, trustworthy way to choose a place based on context: where they are, what mood they want, whether they are working, meeting someone, or exploring an area.

## Context

The current luc.works repository does not include the CafeMaps implementation source, but legacy project notes document it as a full-stack cafe discovery platform with a live project page, screenshots, Google Maps, PostgreSQL, Prisma, and CMS-oriented functionality.

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

CafeMaps centers the experience around map-first navigation, curated cafe lists, and mood-based search. The product direction favors a short path from exploration to decision: browse an area, scan relevant options, inspect editorial place details, then decide quickly.

The current project highlights describe curated lists paired with map exploration, a mobile-first browsing flow, and a place detail structure for fast decisions.

## Architecture

Available repository evidence points to a conceptual product architecture built around:

- A map view backed by Google Maps.
- Curated place data organized through editorial content and CMS workflows.
- A coordinated map and list browsing experience.
- Place detail content structured for quick scanning.
- PostgreSQL and Prisma for structured cafe data.

No implementation source is present for CafeMaps in this repository, so exact API provider configuration, geocoding strategy, filtering implementation, and deployment details are not documented here.

## Technical Decisions

- Use Next.js, React, and TypeScript for the product surface.
- Use Google Maps because location is central to the discovery workflow.
- Use PostgreSQL and Prisma for structured place data.
- Support editorial content and internal CMS workflows so curation can be managed intentionally.
- Design map and list state as a coordinated experience rather than isolated views.
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

CafeMaps appears as the second featured project in the current portfolio, with a generated detail route, stack tags, role description, and three highlights. The legacy project archive adds stronger evidence that the project is a full-stack cafe discovery platform for Ho Chi Minh City.

No repository evidence was found for user metrics, source links, or data coverage. Results should stay focused on documented product and engineering work unless additional outcome evidence is added.

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
