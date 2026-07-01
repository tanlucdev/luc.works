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
media:
  type: mockup
  title: Focus room state
  caption: 'A product-style mockup showing timer, participant state, and quiet realtime feedback inside one shared study room.'
availability: 'Portfolio artifact: product-style mockup from legacy Study Stream notes. Production outcomes, retention, and source links are not claimed here.'
caseSummary:
  problem: 'Students need accountability, but social study tools can become noisy enough to break focus.'
  role: 'Owned realtime UX framing, full-stack system direction, session lifecycle, and product presentation.'
  decisions:
    - 'Make session state obvious before adding more features.'
    - 'Use presence for accountability, not entertainment.'
    - 'Keep feedback quiet enough to preserve focus.'
  result: 'A focused systems story around realtime state, room lifecycle, and calm collaborative productivity.'
  lesson: 'Realtime UX is useful when it lowers coordination cost without demanding attention.'
proofMoments:
  - title: 'Room lifecycle'
    body: 'Lobby, ready, focus, break, and complete states give the group a shared rhythm.'
    kind: session
    caption: 'State'
  - title: 'Calm presence'
    body: 'Participants can feel accountable without turning the room into a chat-heavy feed.'
    kind: presence
    caption: 'Realtime'
  - title: 'Repeat study habits'
    body: 'Course spaces and analytics support return sessions without making the core focus flow heavier.'
    kind: analytics
    caption: 'Retention'
source_evidence:
  - legacy project archive
  - src/data/projects.ts
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
  - PORTFOLIO_EXTENSION_PLAN.md
status: migrated from legacy project notes and repository evidence
---

## Problem

Studying with other people can help accountability, but collaboration tools often pull attention in the wrong direction. Too much chat, activity, or status noise can make the product compete with the work it is supposed to protect.

Study Stream treats focus as the main product, with realtime features supporting that focus instead of becoming the center.

## System

The experience is built around rooms and sessions. A room gives the group a shared place; a session gives the group a shared state. The important transitions are simple: join, ready, focus, break, complete.

Legacy notes connect the product to React, MongoDB, Agora API, realtime chat, course spaces, and learning analytics. In the portfolio, the strongest story is not the number of features. It is how those features are contained so the user can keep studying.

## Key Decisions

- Make the timer and room state the visual anchor.
- Use participant presence to create accountability without loud social mechanics.
- Keep chat available but secondary to the focus session.
- Support course spaces and learning analytics as follow-up surfaces, not interruptions.
- Design feedback as calm state changes rather than constant notifications.

## Tradeoff

Minimal realtime UI can feel less expressive than a broader collaboration app. That is intentional. For a focus product, fewer interaction paths can be a product advantage.

The technical challenge is that simple UI still requires careful state modeling. Joins, leaves, readiness, session starts, breaks, and completion all need to stay understandable to every participant.

## Reflection

Study Stream gives the portfolio a clear realtime UX story. It shows product judgment around collaboration boundaries, not only the ability to add live features.

The lesson: realtime systems should make shared state obvious, then get out of the way.
