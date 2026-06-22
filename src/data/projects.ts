export type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  icon: 'workflow' | 'map' | 'users' | 'code';
  items: string[];
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: 'cinematic-ai',
    number: '01',
    title: 'CinematicAI',
    description: 'Node-based AI workflow platform built for creative production pipelines.',
    icon: 'workflow',
    items: ['Node-based workflows', 'Dynamic AI models', 'Workflow orchestration', 'Real-time execution'],
    summary:
      'A production workflow surface for composing AI models, prompts, inputs, and outputs into repeatable creative pipelines. The focus is speed, clarity, and letting creators understand each step without wrestling with infrastructure.',
    role: 'Product builder, frontend architecture, interaction design',
    stack: ['React', 'TypeScript', 'Node workflows', 'AI orchestration', 'Design systems'],
    highlights: ['Visual node editor for complex generation flows', 'Reusable workflow patterns for creative teams', 'Execution states designed for fast debugging']
  },
  {
    slug: 'cafe-maps',
    number: '02',
    title: 'CafeMaps',
    description: 'A location discovery platform helping people find great cafes through curated experiences.',
    icon: 'map',
    items: ['Location discovery', 'Curated cafes', 'Maps integration', 'Modern user experience'],
    summary:
      'A discovery product for finding cafes by mood, location, and real visiting context. The experience centers around quick scanning, trustworthy curation, and map-first navigation.',
    role: 'Frontend engineering, product UX, mapping experience',
    stack: ['Next.js', 'TypeScript', 'Maps API', 'Geospatial UI', 'Responsive design'],
    highlights: ['Curated lists paired with map exploration', 'Mobile-first browsing flow', 'Place detail structure for fast decisions']
  },
  {
    slug: 'study-stream',
    number: '03',
    title: 'Study Stream',
    description: 'A collaborative productivity platform designed to help students stay focused.',
    icon: 'users',
    items: ['Collaborative focus sessions', 'Real-time interaction', 'Productivity tools', 'Community driven'],
    summary:
      'A focused study environment that combines shared sessions, lightweight accountability, and productivity tools. The product is shaped around reducing friction before a session starts and keeping the room calm once people are working.',
    role: 'Frontend systems, realtime UX, product design',
    stack: ['React', 'TypeScript', 'Realtime events', 'Session state', 'Productivity UX'],
    highlights: ['Shared focus rooms with clear session state', 'Realtime participant feedback', 'Simple productivity patterns designed for repeat use']
  },
  {
    slug: 'engineering-focus',
    number: '04',
    title: 'Engineering Focus',
    description: 'Frontend systems shaped by clean architecture, strong UX, and AI-powered development workflows.',
    icon: 'code',
    items: ['React & Next.js', 'TypeScript architecture', 'Design systems', 'AI-powered tooling'],
    summary:
      'A collection of engineering practices and product work around building stable frontend systems: clean component boundaries, accessible interfaces, maintainable styling, and pragmatic AI-assisted workflows.',
    role: 'Frontend engineer, systems thinker, AI workflow developer',
    stack: ['React', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Component architecture built for iteration', 'Design systems with practical constraints', 'AI tooling used to accelerate product development']
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
