# Ask Luke Experience Plan

Planning target: add an AI-powered portfolio experience that answers questions about Tan Luc, projects, writing, engineering decisions, product thinking, learning process, and career journey.

Constraint: this plan does not implement the feature. It defines the knowledge, UX, architecture, prompt behavior, and roadmap needed before implementation.

## Product Direction

Ask Luke should feel like a guided conversation with the portfolio, not a generic assistant. The experience should help visitors understand Luke's work, judgment, and trajectory through evidence already present on `luc.works`.

The right product shape is a focused portfolio explainer:

- It answers only from Luke's site content and approved knowledge files.
- It cites or links to relevant project, writing, resume, and philosophy pages.
- It is comfortable saying when evidence is missing.
- It helps visitors ask sharper follow-up questions.
- It sounds personal and thoughtful, but never pretends to be Luke speaking live.

Recommended positioning:

> Ask about Luke's projects, product decisions, engineering approach, and writing.

Avoid positioning:

> Chat with Luke's AI assistant.

That distinction matters. The feature should create trust through specificity, not anthropomorphic polish.

## Phase 1: Knowledge Audit

### Current Knowledge Sources

| Area | Source files | Current value for Ask Luke | Readiness |
| --- | --- | --- | --- |
| Identity and positioning | `src/components/HeroContent.tsx`, `src/components/AboutMotion.tsx`, `src/pages/resume.astro`, `src/layouts/BaseLayout.astro` | Clear role, focus areas, location, contact links, skills | Medium |
| Work philosophy | `content/philosophy.md`, `src/components/PhilosophyMotion.tsx`, `design.md` | Strong belief system around invisible software, reduced friction, focus, inspectable AI workflows | High |
| Projects | `content/projects/*.md`, `src/pages/projects/[slug].astro` | Four documented entries with problem, users, goals, architecture framing, decisions, trade-offs, lessons | Medium-high |
| Writing | `content/writing/*.md`, `src/pages/writing/[slug].astro` | Three short essays about AI workflows, node editors, creative AI tooling | Medium |
| Resume | `src/pages/resume.astro` | Compact role summary, skills, contact links | Low-medium |
| Prior audits | `PROJECT_DISCOVERY_REPORT.md`, `PROJECT_PAGE_AUDIT.md`, `PORTFOLIO_EXTENSION_PLAN.md` | Strong meta-context about content gaps, evidence standards, project priorities | High for internal planning; low for public-facing answers |

### What Already Exists

The portfolio already knows these facts well enough to answer:

- Luke is Tan Luc, also represented as `Luke` in JSON-LD alternate name.
- Luke is a frontend engineer, product builder, and AI workflow developer based in Vietnam.
- Core skills include React, TypeScript, Next.js, Astro, Tailwind CSS, design systems, frontend architecture, AI workflow systems, and product development.
- The portfolio's main philosophy is that great software should feel invisible.
- Luke's product taste favors reduced friction, clear thinking, focus, practical constraints, and visible system state.
- CinematicAI is the strongest flagship project narrative: node-based AI workflows, creative production pipelines, repeatability, execution state, debugging, AI orchestration.
- CafeMaps is the strongest product UX story: curated cafe discovery, map/list coordination, mobile decision-making, trust, context.
- Study Stream is a realtime UX story: shared focus sessions, accountability, participant state, calm collaboration.
- Engineering Focus is better treated as a principles/practice page than a shipped product unless more evidence is added.
- Writing supports the same themes: debuggable AI workflows, meaningful node editors, and creative AI tools beyond generation.

### What Is Missing

Ask Luke will be asked questions the current content cannot safely answer. These are the important gaps.

| Missing knowledge | Why it matters | Recommended content |
| --- | --- | --- |
| Career timeline | Visitors will ask how Luke got here, what roles he has held, and what he is seeking next | `content/about/career.md` with timeline, current availability, role preferences, learning path |
| Project provenance | Current project pages repeatedly say implementation source, screenshots, metrics, demos, and live links are missing | Add `evidence`, `status`, `links`, `private_reason`, `date_range`, `role_scope` fields per project |
| Real engineering decisions | Pages describe conceptual decisions, but not exact implementation choices or constraints | Add decision records per project: problem, option chosen, alternatives rejected, trade-off |
| Concrete outcomes | No usage metrics, launch status, user feedback, adoption, performance results, or validation | Add outcome notes only where true; otherwise add explicit `No public metrics yet` notes |
| Screenshots/artifacts | AI answers are more trustworthy when they can point to visuals, demos, diagrams, repos, or private-project notes | Add screenshots, diagrams, architecture sketches, or unavailable notes |
| Learning process | Current content implies product judgment but does not explain how Luke learns or improves | Add `content/about/learning.md`: tools, feedback loops, reading/building habits, reflection style |
| Work preferences | Hiring/collaboration visitors will ask what kinds of teams, products, and problems fit Luke | Add `content/about/working-with-luke.md`: strengths, preferred problems, collaboration style, boundaries |
| Personal voice examples | Ask Luke needs a tone sample to avoid generic chatbot language | Add `content/about/voice.md` with 8-12 approved first-person-ish answer examples |
| FAQ | Common answers need stable wording | Add `content/ask/faq.md` for contact, availability, project links, what is verified, what is private |

### Content To Create Before Building AI

Build these before implementing the answer API. They will make Ask Luke much more useful and reduce hallucination risk.

1. `content/about/profile.md`
   - Short biography.
   - Current role and location.
   - What Luke builds.
   - What problems Luke wants to work on.

2. `content/about/career.md`
   - Timeline with dates or date ranges.
   - Career transitions.
   - Why frontend/product/AI workflows became the focus.
   - Current availability or opportunity preferences.

3. `content/about/learning.md`
   - How Luke learns new tools.
   - How projects become experiments.
   - How AI is used in the development process.
   - What Luke is currently improving.

4. `content/about/working-principles.md`
   - Product principles.
   - Engineering principles.
   - Design principles.
   - AI workflow principles.

5. `content/ask/faq.md`
   - Stable answers for common visitor questions.
   - Contact and collaboration guidance.
   - Clarify what Ask Luke can and cannot answer.

6. Project evidence updates in `content/projects/*.md`
   - Date range.
   - Project status.
   - Role scope.
   - Source/demo links or private-project note.
   - Screenshots/diagrams if available.
   - Verified outcomes or explicit absence of metrics.

## Phase 2: Question Discovery

Rank: `P0` should be answered well at launch. `P1` should be answered after content additions. `P2` can be handled with graceful fallback.

### Projects

| Rank | Question | Readiness |
| --- | --- | --- |
| P0 | What is CinematicAI? | Good |
| P0 | Which project best shows Luke's AI workflow thinking? | Good |
| P0 | What did Luke build in CafeMaps? | Medium |
| P0 | How is Study Stream different from a normal productivity app? | Medium |
| P0 | What is Engineering Focus, and is it a real project? | Good, if honest |
| P1 | Which project best shows product thinking? | Good |
| P1 | Which project best shows frontend architecture? | Medium |
| P1 | What trade-offs shaped CinematicAI? | Medium |
| P1 | What would Luke improve in CafeMaps next? | Medium |
| P1 | Are these projects live? | Weak; needs explicit project links/status |
| P2 | What metrics did CinematicAI achieve? | Not enough info |
| P2 | Can I see the source code? | Not enough info unless links are added |

### Engineering

| Rank | Question | Readiness |
| --- | --- | --- |
| P0 | What technologies does Luke use? | Good |
| P0 | How does Luke think about frontend architecture? | Medium |
| P0 | Why does Luke care about visible system state? | Good |
| P0 | What does Luke mean by AI workflow systems? | Good |
| P1 | How would Luke design a node editor? | Medium-good |
| P1 | How does Luke balance UX and engineering constraints? | Medium |
| P1 | How does Luke use Astro and React islands in this portfolio? | Good |
| P1 | What makes Luke's engineering style different? | Medium |
| P2 | What backend architecture did CinematicAI use? | Not enough info |
| P2 | Which database or auth system does Luke prefer? | Not enough info |

### Product Thinking

| Rank | Question | Readiness |
| --- | --- | --- |
| P0 | What product principles show up across Luke's work? | Good |
| P0 | What does “great software should feel invisible” mean? | Good |
| P0 | How does Luke think about AI product UX? | Good |
| P1 | How does Luke decide what to simplify? | Medium |
| P1 | Why does Luke prefer inspectable AI tools over magic boxes? | Good |
| P1 | What product decision mattered most in CafeMaps? | Medium |
| P1 | How does Luke think about trust in discovery products? | Medium |
| P2 | How did users respond to Luke's products? | Not enough info |

### Learning

| Rank | Question | Readiness |
| --- | --- | --- |
| P0 | What is Luke currently focused on learning? | Weak |
| P1 | How does Luke learn new technologies? | Weak |
| P1 | How has Luke's thinking about AI tools changed? | Medium, inferred from writing |
| P1 | What did Luke learn from building this portfolio? | Medium |
| P2 | What books, courses, or mentors shaped Luke? | Not enough info |

### Career

| Rank | Question | Readiness |
| --- | --- | --- |
| P0 | Who is Luke? | Medium |
| P0 | What kind of work is Luke interested in? | Medium |
| P0 | How can I contact Luke? | Good |
| P1 | What roles is Luke best suited for? | Medium |
| P1 | What is Luke's career journey? | Weak |
| P1 | Is Luke available for freelance or full-time work? | Weak |
| P2 | Where has Luke worked before? | Not enough info |
| P2 | What is Luke's education background? | Not enough info |

### Philosophy

| Rank | Question | Readiness |
| --- | --- | --- |
| P0 | What does Luke believe about software? | Good |
| P0 | What does Luke believe about AI tools? | Good |
| P0 | What does Luke mean by product design removing friction? | Good |
| P1 | What values guide Luke's engineering decisions? | Medium-good |
| P1 | How personal should software feel? | Medium |
| P2 | What does Luke think about the future of AI? | Not enough info unless framed narrowly |

### Launch Question Set

Use these as empty-state suggestions because the current knowledge base can answer them safely:

- What kind of products does Luke build?
- Which project best shows Luke's AI workflow thinking?
- Explain CinematicAI like I am a hiring manager.
- What does Luke mean by “great software should feel invisible”?
- How does Luke think about frontend architecture?
- What can I learn from Luke's writing?
- Which project shows the strongest product thinking?
- What should I ask Luke about his work?

## Phase 3: Knowledge Architecture

### Recommended Content Sources

Primary public sources:

- `content/projects/*.md`
- `content/writing/*.md`
- `content/philosophy.md`
- `src/pages/resume.astro`
- `src/components/HeroContent.tsx`
- `src/components/AboutMotion.tsx`
- `src/components/ContactMotion.tsx`
- `src/layouts/BaseLayout.astro` JSON-LD

Internal planning sources:

- `PROJECT_DISCOVERY_REPORT.md`
- `PROJECT_PAGE_AUDIT.md`
- `PORTFOLIO_EXTENSION_PLAN.md`

Use internal planning sources to decide content gaps and response constraints. Do not expose them as normal cited public sources unless an answer is about the portfolio's own content strategy.

Future sources:

- `content/about/*.md`
- `content/ask/faq.md`
- `content/ask/answer-style.md`
- `public/project-assets/**` for images/diagrams metadata

### Knowledge Document Shape

Create a normalized build-time knowledge manifest later, for example `src/data/askKnowledge.ts` or generated `src/data/askKnowledge.generated.json`.

Each knowledge item should include:

```ts
type AskKnowledgeItem = {
  id: string;
  title: string;
  body: string;
  summary: string;
  sourcePath: string;
  publicUrl?: string;
  sourceType: 'project' | 'writing' | 'philosophy' | 'resume' | 'about' | 'faq' | 'internal-audit';
  topics: string[];
  entities: string[];
  status: 'verified' | 'draft' | 'inferred' | 'missing-evidence';
  confidence: 'high' | 'medium' | 'low';
  evidencePaths: string[];
  lastUpdated?: string;
};
```

Recommended metadata fields per source:

- `sourceType`: project, writing, philosophy, resume, about, FAQ.
- `topic`: projects, engineering, product, learning, career, philosophy.
- `entity`: CinematicAI, CafeMaps, Study Stream, Engineering Focus, Luke, portfolio.
- `status`: verified, draft, inferred, missing evidence.
- `publicUrl`: path visitors can open.
- `private`: true/false for non-public source handling.
- `answerAllowed`: true/false if a source should influence answers.

### Indexing Strategy

Start simple because the content set is small.

Recommended launch strategy:

1. Parse markdown frontmatter and body at build time.
2. Convert homepage/resume static copy into explicit markdown knowledge files before indexing.
3. Split documents by semantic sections, not arbitrary token windows.
4. Store source metadata with every chunk.
5. Use hybrid retrieval:
   - keyword search for exact project names, technologies, and page titles.
   - embedding similarity for conceptual questions.
6. Return top 4-6 chunks to the answer model.
7. Require answer citations from retrieved chunks.

Chunking rules:

- One chunk per markdown section, including heading.
- Keep frontmatter summary as its own chunk.
- Keep project `Problem`, `Architecture`, `Technical Decisions`, `Product Decisions`, `Trade-offs`, `Results`, and `Lessons Learned` separate.
- Keep writing intro and each article section separate.
- Keep resume/profile as short chunks: identity, skills, contact, availability.

### Retrieval Strategy

Routing before retrieval:

- If question mentions a project title, boost that project by exact slug/title/entity match.
- If question asks about contact, availability, resume, or who Luke is, retrieve profile/resume/FAQ first.
- If question asks about beliefs, retrieve philosophy and writing first.
- If question asks about implementation details, retrieve project architecture and technical decisions first.
- If question asks about metrics, outcomes, live links, education, work history, or availability, retrieve FAQ/profile and enforce missing-info fallback if absent.

Answer synthesis:

- Use retrieved chunks as the only source of truth.
- Prefer concise synthesis over dumping excerpts.
- Include 1-3 source links when useful.
- Show uncertainty when source status is `draft`, `inferred`, or `missing-evidence`.
- Ask a helpful follow-up only when it advances the visitor's intent.

### Metadata Requirements

The current frontmatter already has useful fields: `slug`, `title`, `summary`, `role`, `stack`, `highlights`, `source_evidence`, `status`.

Add these before implementation:

```yaml
date_range: ''
status_label: '' # concept, prototype, shipped, private, archived
visibility: public | private | partially-public
role_scope:
  - ''
links:
  - label: ''
    href: ''
    kind: live | repo | demo | article | unavailable-note
evidence_level: high | medium | low
answer_boundaries:
  - ''
```

For writing:

```yaml
published_at: ''
updated_at: ''
canonical_topic: ''
related_projects:
  - cinematic-ai
```

For about/profile:

```yaml
updated_at: ''
confidence: high
public_answer: true
```

## Phase 4: AI Experience Design

### Page Concept

Route: `/ask`

Name: `Ask Luke`

Purpose: a focused question interface for exploring Luke's portfolio through the site's own knowledge.

The page should feel like an interactive index into Luke's work. It should not look like a support chat widget floating on top of the site.

### Layout

Use the existing visual language:

- Black background.
- Warm ivory text.
- Sparse panels.
- 8px radius.
- Uppercase micro-labels.
- Large but restrained page title.
- Compact suggested questions.
- Source links as quiet metadata, not badges everywhere.

Recommended structure:

- Top nav: `luc.works`, `Projects`, `Writing`, `Contact`.
- Hero area: `Ask Luke` title and one-sentence scope.
- Main input: large text area or single-line prompt box with submit icon.
- Suggested question groups: Projects, Engineering, Product, Philosophy.
- Answer area: response, sources, related follow-ups.
- Optional side rail on desktop: source context used for current answer.

### Empty State

Tone should be clear, not cutesy.

Example:

> Ask about Luke's projects, product decisions, engineering approach, or writing. Answers are based on this portfolio, and will say when something is not documented.

Suggested questions:

- What kind of products does Luke build?
- Which project best shows his AI workflow thinking?
- How does Luke approach frontend architecture?
- What does “great software should feel invisible” mean?
- What can I learn from his writing?
- Which project should I read first?

### Conversation Flow

1. Visitor opens `/ask`.
2. Page shows scope, suggested questions, and input.
3. Visitor asks a question.
4. UI enters answering state with calm loader text like `Reading portfolio context...`.
5. API retrieves relevant knowledge chunks.
6. Model writes answer with source links and confidence-aware wording.
7. UI shows:
   - answer text.
   - `Sources` links.
   - `Try next` follow-up prompts.
8. Visitor can ask follow-up. Conversation history is used only for pronouns and topic continuity; retrieval still happens per turn.

### Suggested Question Behavior

Suggested questions should adapt after an answer.

Examples:

- After CinematicAI answer: `What trade-offs shaped it?`, `How does this connect to Luke's writing?`, `What evidence is missing?`
- After CafeMaps answer: `Why map-first?`, `How does Luke think about trust?`, `What would improve the project page?`
- After philosophy answer: `Which projects show that principle?`, `How does this affect engineering choices?`

### Fallback Behavior

Fallback should feel trustworthy, not apologetic.

Use this pattern:

> I don't have enough information in the portfolio to answer that confidently. What I can say from the current content is...

Then include the nearest grounded answer if useful.

Common fallback cases:

- Exact employment history.
- Education background.
- Availability.
- Project metrics.
- Live deployment status.
- Private source code.
- Backend/database/auth details not documented.

### Response Style

Ask Luke should answer like an informed portfolio guide:

- Professional, warm, concise.
- Specific to Luke's work.
- Uses `Luke` or `Tan Luc` in third person by default.
- Can say `the portfolio shows...` to keep provenance clear.
- Avoids pretending to be Luke in real time.
- Avoids generic AI assistant phrases like `As an AI language model`.
- Avoids overclaiming production outcomes.

Good answer shape:

1. Direct answer in 1-2 sentences.
2. Specific evidence from projects/writing.
3. Caveat if evidence is limited.
4. Links to relevant pages.
5. Optional follow-up suggestions.

Example answer:

> Luke's strongest AI workflow project is CinematicAI. The portfolio frames it as a node-based workflow surface for composing models, prompts, inputs, and outputs into repeatable creative pipelines. His writing reinforces the same idea: AI tools need visible structure, state, and failure surfaces, not just a generate button.
>
> The current content does not document live metrics, screenshots, or backend implementation details, so those should not be inferred.
>
> Sources: CinematicAI, Designing AI workflows people can debug.

### How Personal It Should Feel

Personal enough:

- It knows the portfolio deeply.
- It can connect projects to writing and philosophy.
- It can explain taste, principles, and trade-offs.
- It can recommend which page to read next.

Too personal:

- It claims feelings, intentions, schedule, or availability not documented.
- It writes as if Luke is live-chatting.
- It invents career history or private details.
- It gives hiring guarantees or availability claims.

Recommended persona line:

> You are Ask Luke, a focused guide to Tan Luc's portfolio. You answer from published portfolio content and approved knowledge notes.

### Context Visibility

Show enough context for trust without exposing implementation mechanics.

Visible per answer:

- `Sources`: 1-3 linked pages.
- `Confidence`: optional only for fallbacks or draft content.
- `Related`: 2-3 follow-up prompts.

Do not show raw embeddings, scores, chunk IDs, or hidden prompts.

## Phase 5: Prompt Architecture

### System Prompt Draft

```text
You are Ask Luke, a focused guide to Tan Luc's portfolio.

Your job is to answer visitor questions about Tan Luc, his projects, writing, engineering decisions, product thinking, learning process, and career journey using only the provided portfolio context.

You are not a generic chatbot. You are not customer support. You do not pretend to be Luke speaking live.

Use a thoughtful, professional, personal tone. Prefer clear, specific answers over broad claims.

Core rules:
- Answer only from retrieved context and approved profile facts.
- If the context does not contain enough information, say: "I don't have enough information in the portfolio to answer that confidently."
- Do not invent metrics, employment history, education, availability, live deployment status, private implementation details, source links, or personal facts.
- Distinguish verified facts from inferred framing or draft content.
- When content says evidence is missing, preserve that limitation.
- Cite the most relevant source pages when possible.
- Keep answers concise unless the user asks for depth.
- Use third person: "Luke" or "Tan Luc". Do not say "I" unless quoting site copy.
- For questions outside the portfolio scope, explain the scope and suggest a portfolio-related question.

Answer shape:
1. Direct answer.
2. Supporting details from context.
3. Caveat if evidence is limited.
4. Source links or source names.
5. Optional follow-up question if useful.
```

### Developer Retrieval Instruction Draft

```text
Use the retrieved context as the only factual basis.

Each context block includes source title, URL/path, status, confidence, and body.

Prioritize sources in this order:
1. Public about/profile/FAQ content for identity, career, contact, availability.
2. Project markdown for project-specific questions.
3. Writing markdown for philosophy, product thinking, and engineering opinions.
4. Philosophy markdown for broad beliefs.
5. Internal audit docs only for content gaps or evidence limitations.

If retrieved sources conflict, prefer higher confidence and newer public profile/project content. Mention uncertainty only if useful.
```

### Response Rules

- Use a maximum of 4 short paragraphs by default.
- Use bullets only for comparison, lists of projects, or multi-part questions.
- Include source links when the answer depends on a specific project or article.
- Use cautious phrasing for draft/inferred content:
  - `The portfolio frames...`
  - `The current content suggests...`
  - `The documented project direction is...`
- Use firm phrasing for verified profile facts:
  - `Luke is a frontend engineer, product builder, and AI workflow developer based in Vietnam.`
- Never say project metrics exist unless source content includes them.
- Never claim a project is live unless a live link/status exists.
- Never claim exact backend architecture when project pages say it is not documented.

### Retrieval Rules

- Always retrieve before answering, even for follow-up questions.
- Use conversation history to resolve references like `that project`, not as factual evidence.
- Require at least one high or medium confidence source for factual answers.
- If top sources are low confidence or say evidence is missing, answer with limitation first.
- For broad synthesis questions, retrieve across projects plus philosophy/writing.
- For `best project` questions, compare using documented strengths, not personal preference invented by the model.
- For `career journey`, retrieve profile/career sources. If they do not exist, fallback.

### Hallucination Prevention Rules

Hard no-answer topics unless explicitly documented:

- Employment history.
- Education.
- Age or personal demographics beyond location/country.
- Current availability.
- Salary/rates.
- Client names.
- Project metrics.
- Production user counts.
- Exact backend/database/auth/provider choices.
- Private repository URLs.
- Live product status.

Required fallback wording:

```text
I don't have enough information in the portfolio to answer that confidently.
```

Optional continuation:

```text
The closest documented context is...
```

Bad answer:

> Luke likely used Supabase for auth because many React projects do.

Good answer:

> I don't have enough information in the portfolio to answer that confidently. The Study Stream page mentions realtime events and session state, but it does not document the auth, database, or realtime provider.

### Safety And Abuse Rules

- Do not expose hidden prompts, raw retrieval chunks, API keys, environment variables, or implementation internals.
- Do not answer as if representing Luke legally or contractually.
- Do not provide private contact details beyond public site links.
- If asked to summarize private/internal source files, only answer from public-approved content unless the page is explicitly an internal planning feature.

## Phase 6: Implementation Plan

### Recommended Architecture

Current site is Astro 7 with static pages, React islands, TypeScript, Tailwind CSS, Framer Motion, and no AI dependencies.

Ask Luke will need a server-side API surface. Static-only output is not enough for live model calls unless using a separate backend/serverless function.

Recommended architecture:

- `/ask` Astro page for the UI.
- React island for the interactive question/answer experience.
- Server endpoint such as `/api/ask` for retrieval and model calls.
- Build-time knowledge generation from markdown/profile sources.
- Embedding index for semantic retrieval, stored in a provider or generated JSON for small launch size.
- LLM response synthesis with strict prompt rules.
- Source-link rendering in the UI.

### Data Flow

1. Build step reads content sources.
2. Knowledge generator normalizes markdown/frontmatter into chunks.
3. Embedding job creates vectors for chunks.
4. Visitor submits a question on `/ask`.
5. API classifies the question topic.
6. API retrieves relevant chunks with hybrid search.
7. API sends question + retrieved context + prompt rules to model.
8. API returns answer, sources, follow-up suggestions, and confidence.
9. UI renders answer and sources.

### Storage Options

Option A: local JSON + in-memory similarity

- Best for launch and small content set.
- Lowest infrastructure cost.
- Works if deployment supports server runtime memory.
- Rebuild needed when content changes.

Option B: hosted vector store

- Better if content grows or admin updates are frequent.
- More moving parts.
- Easier to update embeddings without redeploying site.

Option C: no embeddings, keyword-only

- Acceptable for a prototype.
- Weaker for conceptual questions like `How does Luke think about trust?`.

Recommendation: start with Option A plus keyword boosting. Move to hosted vector storage only after the content base grows.

### Data Sources To Implement First

Do before UI/API work:

- Add `content/about/profile.md`.
- Add `content/about/career.md`.
- Add `content/about/learning.md`.
- Add `content/about/working-principles.md`.
- Add `content/ask/faq.md`.
- Add missing project metadata fields to `content/projects/*.md`.
- Add explicit `published_at`/`updated_at` to writing files.

### UX Roadmap

#### Step 1: Static Ask Page Design

- Add `/ask` route.
- Add nav link from homepage and maybe projects/writing nav.
- Build empty state, suggested questions, answer shell, source list shell.
- No AI yet; use static placeholder response for visual testing.

#### Step 2: Knowledge Manifest

- Add content parser/generator.
- Normalize markdown sections into `AskKnowledgeItem` records.
- Include public URLs and source metadata.
- Add tests or script output validation for missing metadata.

#### Step 3: Retrieval Prototype

- Implement keyword search first.
- Add exact boosts for project titles, tags, and topics.
- Add embedding similarity after the manifest is stable.
- Create a retrieval debug script that prints selected chunks for sample questions.

#### Step 4: Answer API

- Add `/api/ask` endpoint.
- Validate input length.
- Retrieve chunks.
- Call answer model with strict prompt.
- Return structured JSON:

```ts
type AskResponse = {
  answer: string;
  sources: { title: string; url: string; sourceType: string }[];
  followUps: string[];
  confidence: 'high' | 'medium' | 'low';
  refused: boolean;
};
```

#### Step 5: Conversation UI

- Add message list.
- Add loading state.
- Add retry state.
- Add suggested follow-ups.
- Add source links.
- Keep history local to the session.

#### Step 6: Trust And Quality Pass

- Add fallback states for missing evidence.
- Add small note: `Answers are based on this portfolio.`
- Add rate limiting and abuse protection.
- Add analytics for unanswered questions, without storing sensitive user content unless consented.

#### Step 7: Evaluation Set

- Create `content/ask/evals.json` or similar.
- Include 40-60 expected questions across projects, engineering, product, learning, career, philosophy.
- Mark expected behavior: answer, fallback, cite source, refuse unsupported claim.

### Engineering Roadmap

| Stage | Work | Exit criteria |
| --- | --- | --- |
| 0 | Content additions | Profile/career/learning/FAQ exist; project statuses explicit |
| 1 | Static `/ask` UI | Page matches site design; suggested questions work visually |
| 2 | Knowledge manifest | All public sources produce chunks with metadata |
| 3 | Retrieval | Sample questions retrieve expected sources |
| 4 | API | Endpoint returns grounded structured answers |
| 5 | UI integration | Conversation works with loading, errors, sources, follow-ups |
| 6 | Evals | Unsupported questions trigger fallback; supported questions cite correct sources |
| 7 | Launch polish | Rate limits, privacy note, nav integration, responsive QA |

### Quality Bar

Ask Luke is launch-ready only when:

- It can answer all P0 questions with source-backed specificity.
- It refuses unsupported career/project details cleanly.
- It links to relevant project/writing pages.
- It does not claim metrics, live status, or exact implementation details absent from content.
- It sounds like a portfolio guide, not a generic chat assistant.
- Mobile UI is comfortable for reading and follow-up questions.
- Empty state makes the feature scope obvious.

### Launch Scope

Recommended v1:

- `/ask` page.
- 8-12 curated suggested questions.
- One conversation thread per page load.
- Source-backed answers.
- Follow-up suggestions.
- Missing-info fallback.
- No account, no saved history, no voice input, no file upload, no floating widget.

Explicitly out of scope for v1:

- General web search.
- Answering as Luke in first person.
- Scheduling meetings.
- Resume parsing.
- Multi-user memory.
- Admin CMS.
- Project metrics unless content is added.

## Content Recommendations Before Implementation

Priority order:

1. Add a real about/profile knowledge file. This fixes the biggest identity/career gap.
2. Add project status and evidence metadata. This prevents unsupported claims.
3. Add career and learning pages. These unlock high-value visitor questions.
4. Add FAQ. This stabilizes contact, availability, project links, and fallback language.
5. Add source/demo/private notes for each project. This helps Ask Luke answer practical hiring questions.
6. Add more writing only if it adds new judgment, not repeated AI workflow themes.

## Final Recommendation

Build Ask Luke as an evidence-grounded portfolio guide, not a chatbot. The current portfolio already has enough philosophical and project framing for a strong prototype, but it needs profile, career, learning, availability, and project-evidence content before the AI should launch publicly.

The most important product decision is restraint: Ask Luke should be useful because it knows when to stop. A visitor should leave thinking, `This portfolio is thoughtful and honest`, not `This chatbot is confident`.
