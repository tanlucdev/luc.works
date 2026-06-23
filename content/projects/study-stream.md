---
slug: study-stream
title: Study Stream
number: "03"
description: 'A full-stack productivity web app inspired by Pomodoro, with real-time chat, course spaces, and personal learning analytics.'
icon: users
items:
  - Pomodoro focus sessions
  - Real-time chat
  - Course spaces
  - Learning analytics
summary: 'A full-stack productivity web app inspired by the Pomodoro method, combining shared focus sessions, real-time chat, course spaces, and personal learning analytics.'
role: 'Full-stack systems, realtime UX, product design'
stack:
  - React
  - MongoDB
  - Agora API
  - Real-time chat
  - Session state
  - Learning analytics
highlights:
  - Pomodoro-inspired focus sessions with clear session state
  - Real-time chat and course spaces for study groups
  - Personal learning analytics for repeat study habits
source_evidence:
  - legacy project archive
  - src/data/projects.ts
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
  - PORTFOLIO_EXTENSION_PLAN.md
status: migrated from legacy project notes and repository evidence
---

## Overview

Study Stream is a full-stack productivity web app inspired by the Pomodoro method. Legacy project notes describe real-time chat, course spaces, and personal learning analytics around a focused study experience.

The audit identifies Study Stream as a good UX systems story because it can explain realtime state, session lifecycle, accountability, and the tension between social presence and distraction.

## Problem

Students often need structure and accountability when studying, but collaboration tools can become noisy and distracting. Study Stream addresses the need for shared focus without turning the study room into a social feed.

## Context

The current luc.works repository does not include the Study Stream implementation source, but legacy project notes document it as a full-stack productivity app with real-time chat, course spaces, MongoDB, Agora API, and personal learning analytics.

Current repository findings point to a product direction around shared focus rooms, participant state, realtime feedback, session lifecycle, and productivity UX.

## Target Users

- Students who want structure during study sessions.
- Small study groups that need shared accountability.
- Users who benefit from presence and lightweight feedback.
- People who want productivity support without a noisy collaboration interface.

## Goals

- Help users start focus sessions with low friction.
- Make shared session state clear to all participants.
- Use realtime presence to support accountability.
- Keep interaction calm enough for focused work.
- Support repeat use through simple productivity patterns.

## Solution

Study Stream is positioned as a focused room-based experience. Users join shared sessions, see clear session state, communicate through real-time chat, organize work through course spaces, and use personal analytics to support repeated study sessions.

The current project highlights emphasize shared focus rooms, realtime participant feedback, and simple productivity patterns.

## Architecture

Available repository evidence points to a conceptual architecture built around:

- Focus rooms as the main collaboration container.
- Participant presence and status state.
- Real-time chat and room feedback, documented with Agora API in legacy project notes.
- Session state for starting, pausing, completing, or tracking focus periods.
- MongoDB-backed data for course spaces, sessions, and learning activity.
- A UI that communicates state without overstimulation.

No implementation source is present in this repository, so exact event schema, persistence model, authentication model, and backend architecture are not documented here.

## Technical Decisions

- Use React for the product surface.
- Use MongoDB for application data documented in legacy project notes.
- Use Agora API for real-time communication features.
- Model sessions as explicit state so users can tell what is happening in the room.
- Use real-time chat to keep participants connected without turning the product into a social feed.
- Keep UI feedback lightweight so state is visible without becoming distracting.
- Treat room lifecycle as a core product system rather than a minor interaction.

## Product Decisions

- Use social presence for accountability, not entertainment.
- Keep session start simple to reduce friction before studying.
- Make room state obvious so participants do not need extra explanation.
- Avoid heavy interaction patterns that could compete with focus.
- Design for repeat use rather than a one-time productivity novelty.

## Challenges

- Synchronizing room and participant state clearly.
- Handling joins, leaves, starts, breaks, and completion states.
- Balancing accountability with calmness.
- Showing enough feedback to feel shared without adding distraction.
- Avoiding claims about behavior change or outcomes without evidence.

## Trade-offs

- Realtime feedback can increase accountability, but too much activity can break focus.
- Minimal interactions reduce distraction, but may limit expressiveness.
- Clear session state helps coordination, but requires careful lifecycle modeling.
- A calm interface may feel less feature-rich than broader collaboration tools, by design.

## Results

Study Stream appears as the third featured project in the current portfolio, with a generated detail route, stack tags, role description, and highlights. The legacy project archive adds stronger evidence for real-time chat, course spaces, personal learning analytics, MongoDB, and Agora API.

No repository evidence was found for production usage, student outcomes, retention, or source links. Results should remain limited to documented project framing unless more evidence is added.

## Lessons Learned

- Realtime UX should make state obvious without demanding attention.
- Social product features need boundaries when the main goal is focus.
- Session lifecycle design is central to collaborative productivity tools.
- Portfolio writing should separate product intent from verified impact.

## Future Improvements

- Add a documented session lifecycle with states and transitions.
- Add screenshots or a prototype of focus rooms and participant feedback.
- Document realtime event handling if source evidence becomes available.
- Clarify what productivity patterns were included or intentionally rejected.
- Add outcome evidence only if supported by real testing or usage data.
