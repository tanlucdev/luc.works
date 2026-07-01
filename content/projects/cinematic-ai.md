---
slug: cinematic-ai
title: CinematicAI
number: "01"
description: 'Node-based AI workflow platform built for creative production pipelines.'
icon: workflow
items:
  - Node-based workflows
  - Dynamic AI models
  - Workflow orchestration
  - Real-time execution
summary: 'A production workflow surface for composing AI models, prompts, inputs, and outputs into repeatable creative pipelines. The focus is speed, clarity, and letting creators understand each step without wrestling with infrastructure.'
role: 'Product builder, frontend architecture, interaction design'
stack:
  - React
  - TypeScript
  - Node workflows
  - AI orchestration
  - Design systems
highlights:
  - Visual node editor for complex generation flows
  - Reusable workflow patterns for creative teams
  - Execution states designed for fast debugging
media:
  type: mockup
  title: Workflow canvas
  caption: 'A product-style mockup showing how brief, prompt, model, review, and debugging states stay visible in one repeatable creative pipeline.'
availability: 'Portfolio artifact: product-style mockup based on documented project direction. Live metrics, source links, and production analytics are not claimed here.'
caseSummary:
  problem: 'Creative AI work becomes hard to repeat when prompts, references, models, and outputs live in disconnected tools.'
  role: 'Owned product framing, frontend architecture direction, interaction model, and portfolio presentation.'
  decisions:
    - 'Use visible nodes because relationships between steps matter.'
    - 'Keep execution state close to the affected node.'
    - 'Treat reusable workflows as a product primitive, not an export afterthought.'
  result: 'A flagship case-study surface that communicates AI workflow thinking without inventing unsupported outcomes.'
  lesson: 'AI product UX needs inspectability before it needs more generation controls.'
proofMoments:
  - title: 'Structure before prompts'
    body: 'The workflow starts with clear inputs and dependencies, so a creator can see what each generation step depends on.'
    kind: workflow
    caption: 'Composition'
  - title: 'State near the work'
    body: 'Queued, running, complete, and failed states belong on the canvas, not in a hidden console or vague loading screen.'
    kind: debug
    caption: 'Execution'
  - title: 'Repeatable patterns'
    body: 'A saved workflow lets teams reuse production logic instead of rebuilding the same chain from a blank prompt.'
    kind: reuse
    caption: 'Reuse'
source_evidence:
  - src/data/projects.ts
  - PROJECT_PAGE_AUDIT.md
  - PROJECT_DISCOVERY_REPORT.md
  - PORTFOLIO_EXTENSION_PLAN.md
status: content draft based on repository evidence
---

## Problem

Creative AI tools often make the first output easy and the second reliable output hard. A creator may have a prompt in one place, references in another, model settings in a third, and no clear memory of why a result worked.

CinematicAI frames that mess as a workflow problem. The goal is not to make another prompt box. The goal is to make the production path visible enough that a person can inspect it, repeat it, and fix it.

## System

The core model is a node canvas. Nodes represent the meaningful parts of a generation flow: brief, references, prompt, model, transformation, review, and export. Edges explain how data moves between those parts.

Execution state is part of the interface. A running model, blocked input, failed output format, or completed review should be visible where it happens. That keeps the user oriented without forcing them to understand infrastructure.

## Key Decisions

- Use a visual workflow because creative production depends on relationships, not only single prompts.
- Keep model, prompt, input, and output boundaries explicit so teams can reuse work without guessing what changed.
- Show failures near the affected node so debugging feels like inspecting the workflow, not hunting through logs.
- Keep the interface restrained: enough state to create trust, not enough decoration to distract from the work.

## Tradeoff

A node editor is heavier than a single prompt box. That weight is worth it only when the user needs repeatability, reuse, and inspection. CinematicAI is therefore framed around production workflows, not casual one-off generation.

The portfolio presentation stays honest: it shows product direction and interaction logic, while avoiding claims about adoption, revenue, or shipped internals that are not documented.

## Reflection

CinematicAI is the strongest technical story in the portfolio because it combines product UX, state design, frontend architecture, and AI workflow thinking.

The lesson is simple: AI products become more professional when they expose the right structure. Generation quality matters, but the surrounding system decides whether people can trust, reuse, and improve the work.
