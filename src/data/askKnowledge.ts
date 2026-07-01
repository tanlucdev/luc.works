export type AskSourceType = 'profile' | 'project' | 'writing' | 'philosophy' | 'resume';

export type AskKnowledgeItem = {
  id: string;
  title: string;
  summary: string;
  body: string;
  url: string;
  sourceType: AskSourceType;
  topics: string[];
  entities: string[];
  confidence: 'high' | 'medium' | 'low';
  relatedProjectSlugs?: string[];
  relatedWritingSlugs?: string[];
};

export type AskSuggestionGroup = {
  label: string;
  questions: string[];
};

export const askSuggestions: AskSuggestionGroup[] = [
  {
    label: 'Basic info',
    questions: ['How can I contact Luke quickly?', 'What is Luke\'s GitHub?', 'What is Luke\'s LinkedIn?']
  },
  {
    label: 'Projects',
    questions: ['Which project best shows Luke\'s AI workflow thinking?', 'What did Luke build in CafeMaps?', 'How is Study Stream different from a normal productivity app?']
  },
  {
    label: 'Engineering',
    questions: ['How does Luke think about frontend architecture?', 'Why does Luke care about visible system state?', 'How would Luke design a node editor?']
  },
  {
    label: 'Product',
    questions: ['Which project shows the strongest product thinking?', 'What does great software should feel invisible mean?', 'How does Luke think about AI product UX?']
  },
  {
    label: 'Writing',
    questions: ['What can I learn from Luke\'s writing?', 'How does his writing connect to CinematicAI?', 'What should I ask Luke about his work?']
  }
];

export const askKnowledge: AskKnowledgeItem[] = [
  {
    id: 'profile-luke',
    title: 'Luke profile',
    summary: 'Luke is a frontend engineer, product builder, and AI workflow developer based in Vietnam.',
    body: 'The portfolio presents Luke as a frontend engineer, product builder, and AI workflow developer based in Vietnam. His work focuses on AI-powered products, workflow systems, thoughtful digital experiences, clean architecture, modern frontend engineering, and design-driven product thinking. Public contact details include hi@luc.works, phone 0878272222, GitHub https://github.com/tanlucdev, and LinkedIn https://www.linkedin.com/in/tanlucdev/.',
    url: '/resume/',
    sourceType: 'profile',
    topics: ['identity', 'career', 'contact', 'email', 'phone', 'github', 'linkedin', 'skills', 'frontend', 'product', 'ai workflows'],
    entities: ['Luke', 'luc.works', 'portfolio', 'tanlucdev'],
    confidence: 'high'
  },
  {
    id: 'project-cinematic-ai',
    title: 'CinematicAI',
    summary: 'Node-based AI workflow platform for creative production pipelines, with visible structure, repeatable workflows, AI orchestration, and execution states.',
    body: 'CinematicAI is the flagship AI workflow project in the portfolio. It is framed as a production workflow surface for composing AI models, prompts, inputs, and outputs into repeatable creative pipelines. The documented product direction favors visual composition over a simple prompt interface, reusable workflow patterns, visible execution state, debugging cues, and hiding unnecessary infrastructure from creators. The portfolio does not document live metrics, screenshots, backend services, persistence, auth, or exact runtime implementation.',
    url: '/projects/cinematic-ai/',
    sourceType: 'project',
    topics: ['projects', 'ai workflows', 'node editor', 'frontend architecture', 'product decisions', 'engineering decisions', 'creative ai', 'debugging'],
    entities: ['CinematicAI'],
    confidence: 'medium',
    relatedProjectSlugs: ['engineering-focus'],
    relatedWritingSlugs: ['designing-ai-workflows-people-can-debug', 'building-node-based-editors-without-hiding-system-state', 'what-creative-ai-tools-need-besides-generation']
  },
  {
    id: 'project-cafe-maps',
    title: 'CafeMaps',
    summary: 'Cafe discovery product centered on curated recommendations, map-first browsing, mobile decision-making, trust, and scannable place details.',
    body: 'CafeMaps is documented as a location discovery product for finding cafes by mood, location, and visiting context. It pairs curated lists with map exploration, supports mobile-first browsing, and structures place details for fast decisions. Product decisions include favoring curation over generic search breadth, coordinating map and list state, using spatial comparison for cafe choice, and prioritizing trust and relevance. The portfolio does not document user metrics, active deployment, screenshots, source links, data coverage, or exact Maps API configuration.',
    url: '/projects/cafe-maps/',
    sourceType: 'project',
    topics: ['projects', 'product decisions', 'ux', 'maps', 'trust', 'mobile', 'discovery'],
    entities: ['CafeMaps'],
    confidence: 'medium',
    relatedProjectSlugs: ['study-stream'],
    relatedWritingSlugs: ['what-creative-ai-tools-need-besides-generation']
  },
  {
    id: 'project-study-stream',
    title: 'Study Stream',
    summary: 'Collaborative productivity product for calm focus sessions, realtime participant feedback, session state, and lightweight accountability.',
    body: 'Study Stream is framed as a collaborative productivity platform for shared study sessions. It combines focus rooms, realtime participant feedback, explicit session state, and simple productivity patterns for repeat use. Product decisions include using social presence for accountability rather than entertainment, reducing friction before a session starts, and keeping room feedback calm enough for focused work. Exact realtime provider, event schema, auth model, backend, screenshots, and outcomes are not documented.',
    url: '/projects/study-stream/',
    sourceType: 'project',
    topics: ['projects', 'realtime ux', 'product decisions', 'session state', 'focus', 'collaboration'],
    entities: ['Study Stream'],
    confidence: 'medium',
    relatedProjectSlugs: ['engineering-focus'],
    relatedWritingSlugs: ['designing-ai-workflows-people-can-debug']
  },
  {
    id: 'project-engineering-focus',
    title: 'How I Build',
    summary: 'Principles page about frontend systems, clean component boundaries, design systems, Astro, React islands, TypeScript, Tailwind, and pragmatic AI-assisted workflows.',
    body: 'How I Build is a principles and practice page rather than a separate shipped product. The portfolio itself is a compact Astro site using React islands for motion, TypeScript, Tailwind CSS, Framer Motion, lucide-react, shared layout metadata, and a dark visual design system. Documented decisions include using Astro for content-focused routes, React only where motion or client behavior is useful, markdown content, consistent Tailwind patterns, and honest framing when project evidence is limited.',
    url: '/projects/engineering-focus/',
    sourceType: 'project',
    topics: ['projects', 'engineering decisions', 'frontend architecture', 'design systems', 'astro', 'react', 'typescript', 'tailwind'],
    entities: ['How I Build', 'Engineering Focus', 'portfolio'],
    confidence: 'medium',
    relatedProjectSlugs: ['cinematic-ai'],
    relatedWritingSlugs: ['building-node-based-editors-without-hiding-system-state']
  },
  {
    id: 'philosophy-invisible-software',
    title: 'Great software should feel invisible',
    summary: 'Luke favors products that remove friction, help people think clearly, move faster, and focus on meaningful work.',
    body: 'The portfolio philosophy says great software should feel invisible. The strongest documented product principle is reducing friction rather than adding features. Across the work, that means making AI workflows inspectable, cafe discovery faster and more trustworthy, study sessions calm, and frontend architecture easier to understand and change. Working principles include building focused interfaces, using architecture to make complexity easier to change, treating design systems as practical constraints, making AI workflows inspectable, and avoiding unsupported claims.',
    url: '/#philosophy',
    sourceType: 'philosophy',
    topics: ['philosophy', 'product decisions', 'engineering decisions', 'working principles', 'ux', 'ai workflows'],
    entities: ['Luke', 'portfolio'],
    confidence: 'high',
    relatedProjectSlugs: ['cinematic-ai', 'cafe-maps', 'study-stream', 'engineering-focus'],
    relatedWritingSlugs: ['designing-ai-workflows-people-can-debug', 'what-creative-ai-tools-need-besides-generation']
  },
  {
    id: 'writing-debuggable-ai-workflows',
    title: 'Designing AI workflows people can debug',
    summary: 'AI workflow tools need visible structure, state, and failure surfaces, not only generation controls.',
    body: 'This writing connects CinematicAI to a product lesson: AI tools become more trustworthy when people can see how work moves through the system. It argues that prompt boxes can hide work structure, execution state is part of the product, reusable workflows require returning to and adjusting past structure, and failure needs an inspectable surface. It does not claim verified production outcomes for CinematicAI.',
    url: '/writing/designing-ai-workflows-people-can-debug/',
    sourceType: 'writing',
    topics: ['writing', 'ai workflows', 'product ux', 'frontend architecture', 'debugging', 'state'],
    entities: ['CinematicAI'],
    confidence: 'medium',
    relatedProjectSlugs: ['cinematic-ai'],
    relatedWritingSlugs: ['building-node-based-editors-without-hiding-system-state', 'what-creative-ai-tools-need-besides-generation']
  },
  {
    id: 'writing-node-editors-state',
    title: 'Building node-based editors without hiding system state',
    summary: 'Visual editors are useful when they reveal relationships and state, not when they decorate hidden complexity.',
    body: 'This writing frames node editors as tools for revealing relationships and state. Nodes should own specific responsibilities, connections should explain data flow, running or failed states should stay close to the affected nodes, and reusable workflow patterns need clear boundaries. The article stays at product and architecture principles because implementation source for CinematicAI is not present in the portfolio repository.',
    url: '/writing/building-node-based-editors-without-hiding-system-state/',
    sourceType: 'writing',
    topics: ['writing', 'node editor', 'state design', 'frontend architecture', 'ai workflows', 'engineering decisions'],
    entities: ['CinematicAI'],
    confidence: 'medium',
    relatedProjectSlugs: ['cinematic-ai', 'engineering-focus'],
    relatedWritingSlugs: ['designing-ai-workflows-people-can-debug']
  },
  {
    id: 'writing-creative-ai-tools',
    title: 'What creative AI tools need besides generation',
    summary: 'Creative AI products need repeatability, context, inspection, and workflow memory around the model call.',
    body: 'This writing argues that generation is only one part of a creative AI product. The product work around the model call includes repeatability, context, inspection, workflow memory, and reusable structures. It connects directly to CinematicAI while explicitly avoiding claims about collaboration mechanics, permissions, storage, outcomes, or implementation artifacts that are not documented.',
    url: '/writing/what-creative-ai-tools-need-besides-generation/',
    sourceType: 'writing',
    topics: ['writing', 'creative ai', 'workflow systems', 'product design', 'ai workflows', 'product decisions'],
    entities: ['CinematicAI'],
    confidence: 'medium',
    relatedProjectSlugs: ['cinematic-ai'],
    relatedWritingSlugs: ['designing-ai-workflows-people-can-debug']
  }
];

export const restrictedAnswerTopics = [
  'employment history',
  'education',
  'age',
  'salary',
  'rates',
  'availability',
  'client names',
  'metrics',
  'production user counts',
  'backend',
  'database',
  'auth',
  'private repository',
  'live deployment status'
];
