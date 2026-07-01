import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, CornerDownLeft, FileText, FolderKanban, Search, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { AskKnowledgeItem, AskSuggestionGroup } from '../data/askKnowledge';

type AskExperienceProps = {
  knowledge: AskKnowledgeItem[];
  suggestionGroups: AskSuggestionGroup[];
};

type AskResult = {
  question: string;
  answer: string;
  sources: AskKnowledgeItem[];
  followUps: string[];
  confidence: 'high' | 'medium' | 'low';
};

const ease = [0.22, 1, 0.36, 1] as const;

const fallback = "I don't have enough information in the portfolio to answer that confidently.";

const unsupportedPatterns = [
  'education',
  'school',
  'university',
  'college',
  'age',
  'salary',
  'rate',
  'available',
  'availability',
  'hire now',
  'employment history',
  'worked before',
  'previous company',
  'client',
  'metrics',
  'user count',
  'revenue',
  'backend',
  'database',
  'auth',
  'source code',
  'repository',
  'repo',
  'live link',
  'deployed',
  'production'
];

const allowedScope = ['project', 'writing', 'engineering', 'product', 'principle', 'philosophy', 'work', 'portfolio', 'frontend', 'ai', 'workflow', 'design', 'cafe', 'study', 'cinematic', 'node', 'react', 'typescript', 'astro', 'contact', 'email', 'phone', 'github', 'linkedin'];

function tokenize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function scoreItem(question: string, item: AskKnowledgeItem) {
  const words = tokenize(question);
  const haystack = `${item.title} ${item.summary} ${item.body} ${item.topics.join(' ')} ${item.entities.join(' ')}`.toLowerCase();
  const title = item.title.toLowerCase();
  let score = 0;

  for (const word of words) {
    if (title.includes(word)) score += 5;
    if (haystack.includes(word)) score += 1;
  }

  for (const entity of item.entities) {
    if (question.toLowerCase().includes(entity.toLowerCase())) score += 12;
  }

  if (/who|contact|email|phone|github|linkedin|social|liên hệ|số điện thoại|skills|kind of work|products/.test(question.toLowerCase()) && item.id === 'profile-luke') score += 7;
  if (/invisible|principle|believe|philosophy|friction/.test(question.toLowerCase()) && item.sourceType === 'philosophy') score += 8;
  if (/writing|essay|article|read/.test(question.toLowerCase()) && item.sourceType === 'writing') score += 7;
  if (/project|built|build|strongest|best|show/.test(question.toLowerCase()) && item.sourceType === 'project') score += 5;

  return score;
}

function pickFollowUps(question: string, sources: AskKnowledgeItem[]) {
  const q = question.toLowerCase();
  const top = sources[0]?.title ?? '';

  if (top === 'CinematicAI') return ['What trade-offs shaped CinematicAI?', 'How does this connect to Luke\'s writing?', 'What evidence is missing?'];
  if (top === 'CafeMaps') return ['Why map-first?', 'How does Luke think about trust?', 'What would improve the project page?'];
  if (top === 'Study Stream') return ['How should realtime UX stay calm?', 'What does session state need to show?', 'Which principles connect to Study Stream?'];
  if (q.includes('writing')) return ['Which article should I read first?', 'How does the writing connect to projects?', 'What does Luke write about AI workflows?'];
  if (q.includes('architecture') || q.includes('frontend')) return ['How does Astro fit this portfolio?', 'Why use React islands?', 'Which project shows frontend judgment?'];
  return ['Which project should I read first?', 'What product principles show up across the work?', 'Where does the portfolio lack evidence?'];
}

function formatList(items: AskKnowledgeItem[], type: AskKnowledgeItem['sourceType']) {
  return items.filter((item) => item.sourceType === type).map((item) => item.title);
}

function buildAnswer(question: string, knowledge: AskKnowledgeItem[]): AskResult {
  const trimmed = question.trim();
  const lower = trimmed.toLowerCase();
  const scored = knowledge
    .map((item) => ({ item, score: scoreItem(trimmed, item) }))
    .sort((a, b) => b.score - a.score);
  const sources = scored.filter(({ score }) => score > 1).slice(0, 4).map(({ item }) => item);
  const topSources = sources.length ? sources : knowledge.filter((item) => ['profile-luke', 'philosophy-invisible-software'].includes(item.id));

  if (/contact|email|mail|phone|github|linkedin|social|liên hệ|số điện thoại|điện thoại/.test(lower)) {
    return {
      question: trimmed,
      answer: 'Basic contact info for Luke:\nEmail: hi@luc.works\nPhone: 0878272222\nGitHub: https://github.com/tanlucdev\nLinkedIn: https://www.linkedin.com/in/tanlucdev/',
      sources: knowledge.filter((item) => item.id === 'profile-luke'),
      followUps: ['What kind of products does Luke build?', 'Which project should I read first?', 'What is Luke focused on?'],
      confidence: 'high'
    };
  }

  if (unsupportedPatterns.some((pattern) => lower.includes(pattern))) {
    return {
      question: trimmed,
      answer: `${fallback} The closest documented context is that Luke works across frontend engineering, product building, AI workflow systems, and the projects shown on this site. The portfolio intentionally avoids inventing unavailable details like metrics, private implementation choices, source links, or live status.`,
      sources: topSources.slice(0, 3),
      followUps: ['What is documented about the projects?', 'Which project shows engineering decisions?', 'What evidence is missing?'],
      confidence: 'low'
    };
  }

  if (!allowedScope.some((term) => lower.includes(term)) && sources.length === 0) {
    return {
      question: trimmed,
      answer: `${fallback} Ask Luke is scoped to projects, writing, engineering decisions, product decisions, and personal working principles documented in the portfolio.`,
      sources: topSources.slice(0, 2),
      followUps: ['What kind of products does Luke build?', 'What can I learn from Luke\'s writing?', 'Which project shows AI workflow thinking?'],
      confidence: 'low'
    };
  }

  if (/what should i ask|suggest|question/.test(lower)) {
    return {
      question: trimmed,
      answer: 'Good questions here are the ones that connect work to judgment: ask how CinematicAI handles AI workflow complexity, why CafeMaps uses map-first discovery, how Study Stream balances realtime presence with focus, or what the writing says about visible system state.',
      sources: knowledge.filter((item) => ['project-cinematic-ai', 'project-cafe-maps', 'writing-debuggable-ai-workflows'].includes(item.id)),
      followUps: ['Which project best shows Luke\'s AI workflow thinking?', 'Which project shows the strongest product thinking?', 'What does visible system state mean?'],
      confidence: 'high'
    };
  }

  if (/writing|essay|article|read/.test(lower)) {
    const titles = formatList(knowledge, 'writing');
    return {
      question: trimmed,
      answer: `Luke's writing mostly supports the same themes as the projects: debuggable AI workflows, meaningful node editors, and creative AI tools that need more than generation. The current writing set includes ${titles.join(', ')}. The strongest thread is that complex tools should expose structure, state, reuse, and failure surfaces instead of hiding them behind a magic prompt box.`,
      sources: knowledge.filter((item) => item.sourceType === 'writing'),
      followUps: pickFollowUps(trimmed, knowledge.filter((item) => item.sourceType === 'writing')),
      confidence: 'medium'
    };
  }

  if (/best|strongest|shows|show/.test(lower) && /ai|workflow|cinematic|node/.test(lower)) {
    return {
      question: trimmed,
      answer: 'CinematicAI is the strongest documented AI workflow project. The portfolio frames it as a node-based workflow surface for composing AI models, prompts, inputs, and outputs into repeatable creative pipelines. The related writing reinforces the same decision: AI tools become more trustworthy when users can see structure, execution state, reuse, and failure paths. The current content does not document live metrics, screenshots, backend details, or production outcomes.',
      sources: knowledge.filter((item) => ['project-cinematic-ai', 'writing-debuggable-ai-workflows', 'writing-node-editors-state'].includes(item.id)),
      followUps: pickFollowUps(trimmed, knowledge.filter((item) => item.id === 'project-cinematic-ai')),
      confidence: 'medium'
    };
  }

  if (/product thinking|strongest product|trust|discovery/.test(lower)) {
    return {
      question: trimmed,
      answer: 'CafeMaps is the clearest product UX story, while CinematicAI is the strongest AI workflow story. CafeMaps shows product thinking through curated discovery, map/list coordination, mobile-first scanning, and trust in recommendations. CinematicAI shows product judgment through repeatability, inspectability, and visible execution state. Both fit the broader portfolio principle: reduce friction so the user can make a decision or complete work faster.',
      sources: knowledge.filter((item) => ['project-cafe-maps', 'project-cinematic-ai', 'philosophy-invisible-software'].includes(item.id)),
      followUps: ['Why map-first?', 'How does Luke think about AI product UX?', 'Which project should a hiring manager read first?'],
      confidence: 'medium'
    };
  }

  if (/frontend|architecture|engineering|astro|react|typescript|tailwind|islands/.test(lower)) {
    return {
      question: trimmed,
      answer: 'Luke\'s frontend architecture style, as documented here, is compact and product-led: Astro for content-focused routes, React islands where motion or client-side behavior is needed, TypeScript for structured metadata, Tailwind for the visual system, and design-system consistency across pages. Engineering Focus is explicit that broad engineering claims should be grounded in real artifacts, so it treats the portfolio implementation as evidence rather than pretending there is a separate shipped engineering product.',
      sources: knowledge.filter((item) => ['project-engineering-focus', 'writing-node-editors-state', 'philosophy-invisible-software'].includes(item.id)),
      followUps: pickFollowUps(trimmed, knowledge.filter((item) => item.id === 'project-engineering-focus')),
      confidence: 'medium'
    };
  }

  if (/invisible|principle|philosophy|believe|friction|working principles/.test(lower)) {
    return {
      question: trimmed,
      answer: 'The portfolio\'s central principle is that great software should feel invisible. In practice, that means removing friction rather than adding features: CinematicAI makes workflow state visible, CafeMaps shortens the path from discovery to decision, Study Stream keeps shared focus calm, and Engineering Focus favors understandable component and design-system boundaries. The principle is not about hiding all complexity; it is about exposing the right complexity at the right moment.',
      sources: knowledge.filter((item) => ['philosophy-invisible-software', 'project-cinematic-ai', 'project-cafe-maps', 'project-study-stream'].includes(item.id)),
      followUps: ['Which projects show that principle?', 'How does this affect engineering choices?', 'How does it show up in AI workflow UX?'],
      confidence: 'high'
    };
  }

  if (!sources.length) {
    return {
      question: trimmed,
      answer: `${fallback} The documented scope covers Luke's projects, writing, engineering decisions, product decisions, and working principles.`,
      sources: topSources.slice(0, 2),
      followUps: ['What kind of products does Luke build?', 'Which project shows product thinking?', 'What can I learn from the writing?'],
      confidence: 'low'
    };
  }

  const [primary, secondary] = sources;
  const extra = secondary ? ` It connects with ${secondary.title}, which adds context around ${secondary.summary.charAt(0).toLowerCase()}${secondary.summary.slice(1)}` : '';
  const caveat = sources.some((source) => source.confidence !== 'high') ? ' Some project content is documented as draft-level portfolio evidence, so unsupported details like metrics, source code, live status, or backend internals should not be inferred.' : '';

  return {
    question: trimmed,
    answer: `${primary.summary}${extra}.${caveat}`,
    sources: sources.slice(0, 3),
    followUps: pickFollowUps(trimmed, sources),
    confidence: sources.every((source) => source.confidence === 'high') ? 'high' : 'medium'
  };
}

function SourceIcon({ type }: { type: AskKnowledgeItem['sourceType'] }) {
  if (type === 'writing') return <BookOpen aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />;
  if (type === 'project') return <FolderKanban aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />;
  return <FileText aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />;
}

const answerLinkPattern = /((?:https?:\/\/|www\.)[^\s<]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
const trailingPunctuationPattern = /[.,!?;:]+$/;

function linkHref(value: string) {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return `mailto:${value}`;

  const href = value.startsWith('www.') ? `https://${value}` : value;

  try {
    const url = new URL(href);
    return ['http:', 'https:'].includes(url.protocol) ? url.toString() : null;
  } catch {
    return null;
  }
}

function renderAnswerText(answer: string) {
  return answer.split(answerLinkPattern).map((part, index) => {
    const trailing = part.match(trailingPunctuationPattern)?.[0] ?? '';
    const linkText = trailing ? part.slice(0, -trailing.length) : part;
    const href = linkHref(linkText);

    if (!href) return part;

    return (
      <span key={`${linkText}-${index}`}>
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="break-words text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-[#E1E0CC]">
          {linkText}
        </a>
        {trailing}
      </span>
    );
  });
}

export default function AskExperience({ knowledge, suggestionGroups }: AskExperienceProps) {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState<AskResult | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const relatedProjects = useMemo(() => {
    const slugs = new Set(result?.sources.flatMap((source) => source.relatedProjectSlugs ?? []) ?? ['cinematic-ai', 'cafe-maps']);
    return knowledge.filter((item) => item.sourceType === 'project' && Array.from(slugs).some((slug) => item.url.includes(slug))).slice(0, 3);
  }, [knowledge, result]);

  const relatedWriting = useMemo(() => {
    const slugs = new Set(result?.sources.flatMap((source) => source.relatedWritingSlugs ?? []) ?? ['designing-ai-workflows-people-can-debug', 'what-creative-ai-tools-need-besides-generation']);
    return knowledge.filter((item) => item.sourceType === 'writing' && Array.from(slugs).some((slug) => item.url.includes(slug))).slice(0, 3);
  }, [knowledge, result]);

  function ask(nextQuestion: string) {
    if (!nextQuestion.trim()) return;
    setQuestion(nextQuestion);
    setIsThinking(true);
    window.setTimeout(() => {
      setResult(buildAnswer(nextQuestion, knowledge));
      setIsThinking(false);
    }, 360);
  }

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    ask(question);
  }

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-8">
      <nav aria-label="Ask" className="flex items-center justify-between gap-4 py-3 text-xs text-gray-500 sm:text-sm">
        <a href="/" className="transition-colors hover:text-primary">luc.works</a>
        <div className="flex items-center gap-4">
          <a href="/projects" className="transition-colors hover:text-primary">Projects</a>
          <a href="/writing" className="transition-colors hover:text-primary">Writing</a>
          <a href="mailto:hi@luc.works" className="transition-colors hover:text-primary">Contact</a>
        </div>
      </nav>

      <section className="grid gap-8 pt-14 md:grid-cols-12 md:items-end md:pt-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.24em] text-primary/70">Portfolio guide</p>
          <h1 className="mt-5 text-[17vw] font-medium leading-[0.82] text-[#E1E0CC] sm:text-[14vw] md:text-[11vw] lg:text-[9vw]">Ask Luke</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.8, ease }} className="max-w-xl md:col-span-4">
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">Ask about projects, product decisions, engineering approach, or writing. Answers are based on this portfolio and stop when the evidence stops.</p>
        </motion.div>
      </section>

      <section className="mt-10 grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.8fr)] lg:gap-1">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.75, ease }} className="rounded-[8px] bg-[#101010] p-4 sm:p-6">
          <form onSubmit={onSubmit} className="rounded-[8px] bg-[#212121] p-3 ring-1 ring-white/5 focus-within:ring-primary/30 sm:p-4">
            <label htmlFor="ask-question" className="text-xs uppercase tracking-[0.22em] text-primary/70">Question</label>
            <div className="mt-3 flex gap-3">
              <textarea
                id="ask-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about CinematicAI, CafeMaps, frontend architecture, product trade-offs..."
                rows={3}
                className="min-h-[116px] flex-1 resize-none bg-transparent text-base leading-relaxed text-[#E1E0CC] outline-none placeholder:text-gray-600 sm:text-lg"
              />
              <button type="submit" aria-label="Ask" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-black transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <CornerDownLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {isThinking ? (
              <motion.div key="loading" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease }} className="mt-4 rounded-[8px] bg-[#171717] p-5 text-sm text-gray-400">
                <span className="inline-flex items-center gap-2"><Search aria-hidden="true" className="h-4 w-4 animate-pulse text-primary" strokeWidth={1.7} /> Reading portfolio context...</span>
              </motion.div>
            ) : result ? (
              <motion.article key={result.question} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease }} className="mt-4 rounded-[8px] bg-[#171717] p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Answer</p>
                <p className="mt-4 max-w-3xl whitespace-pre-line break-words text-base leading-relaxed text-[#DEDBC8] sm:text-lg">{renderAnswerText(result.answer)}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  <span>Confidence: {result.confidence}</span>
                  <span aria-hidden="true">/</span>
                  <span>Grounded in portfolio content</span>
                </div>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/70">Sources</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.sources.map((source) => (
                      <a key={source.id} href={source.url} className="inline-flex items-center gap-2 rounded-full bg-[#242424] px-3 py-2 text-sm text-gray-300 transition-colors hover:text-primary">
                        <SourceIcon type={source.sourceType} />
                        {source.title}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/70">Try next</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.followUps.map((item) => (
                      <button key={item} type="button" onClick={() => ask(item)} className="rounded-full bg-[#242424] px-3 py-2 text-sm text-gray-300 transition-colors hover:text-primary">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.article>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.55, ease }} className="mt-4 rounded-[8px] bg-[#171717] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded bg-black/35 text-primary ring-1 ring-primary/10"><Sparkles aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} /></span>
                  <div>
                    <p className="text-base leading-relaxed text-[#DEDBC8]">This is an interactive index into the portfolio, not a general chatbot.</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">It can connect projects, writing, product choices, engineering decisions, and working principles. If the portfolio does not document something, it says so.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.aside initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.28, duration: 0.75, ease }} className="rounded-[8px] bg-[#101010] p-4 sm:p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Suggested questions</p>
          <div className="mt-5 space-y-5">
            {suggestionGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm text-gray-500">{group.label}</p>
                <div className="mt-2 space-y-2">
                  {group.questions.map((item) => (
                    <button key={item} type="button" onClick={() => ask(item)} className="group flex w-full items-start justify-between gap-3 rounded-[8px] bg-[#212121] px-4 py-3 text-left text-sm leading-snug text-gray-300 transition-colors hover:bg-[#272727] hover:text-[#E1E0CC]">
                      <span>{item}</span>
                      <ArrowRight aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 -rotate-45 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.aside>
      </section>

      <section className="mt-3 grid gap-3 lg:grid-cols-2 lg:gap-1">
        <div className="rounded-[8px] bg-[#101010] p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Related projects</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {relatedProjects.map((item) => (
              <a key={item.id} href={item.url} className="group rounded-[8px] bg-[#212121] p-4 transition-colors hover:bg-[#272727]">
                <p className="text-lg leading-none text-[#E1E0CC]">{item.title}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">{item.summary}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-[8px] bg-[#101010] p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Related writing</p>
          <div className="mt-5 space-y-2">
            {relatedWriting.map((item) => (
              <a key={item.id} href={item.url} className="group flex items-start justify-between gap-4 rounded-[8px] bg-[#212121] p-4 transition-colors hover:bg-[#272727]">
                <span>
                  <span className="block text-base leading-tight text-[#E1E0CC]">{item.title}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-gray-500">{item.summary}</span>
                </span>
                <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 -rotate-45 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
