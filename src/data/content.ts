type MarkdownComponent = any;

type MarkdownModule<TFrontmatter> = {
  frontmatter: TFrontmatter;
  default: MarkdownComponent;
};

export type ProjectIcon = 'workflow' | 'map' | 'users' | 'code';

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  number: string;
  description: string;
  icon: ProjectIcon;
  items: string[];
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  status?: string;
  source_evidence?: string[];
};

export type WritingFrontmatter = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  tags: string[];
  status?: string;
  source_evidence?: string[];
};

export type PhilosophyFrontmatter = {
  title: string;
  label: string;
  headline: string;
  body: string;
  status?: string;
  source_evidence?: string[];
};

export type ContentEntry<TFrontmatter> = TFrontmatter & {
  Content: MarkdownComponent;
  sectionLinks: SectionLink[];
};

export type SectionLink = {
  title: string;
  href: string;
};

const projectModules = import.meta.glob<MarkdownModule<ProjectFrontmatter>>('../../content/projects/*.md', {
  eager: true
});

const projectRawModules = import.meta.glob<string>('../../content/projects/*.md', {
  eager: true,
  import: 'default',
  query: '?raw'
});

const writingModules = import.meta.glob<MarkdownModule<WritingFrontmatter>>('../../content/writing/*.md', {
  eager: true
});

const writingRawModules = import.meta.glob<string>('../../content/writing/*.md', {
  eager: true,
  import: 'default',
  query: '?raw'
});

const philosophyModule = import.meta.glob<MarkdownModule<PhilosophyFrontmatter>>('../../content/philosophy.md', {
  eager: true
});

function slugifyHeading(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function extractSectionLinks(markdown = ''): SectionLink[] {
  return [...markdown.matchAll(/^##\s+(.+)$/gm)].map((match) => {
    const title = match[1].trim();

    return {
      title,
      href: `#${slugifyHeading(title)}`
    };
  });
}

function toEntry<TFrontmatter>(module: MarkdownModule<TFrontmatter>, markdown?: string): ContentEntry<TFrontmatter> {
  return {
    ...module.frontmatter,
    Content: module.default,
    sectionLinks: extractSectionLinks(markdown)
  };
}

export const projects = Object.entries(projectModules)
  .map(([path, module]) => toEntry(module, projectRawModules[path]))
  .sort((a, b) => a.number.localeCompare(b.number));

export const writing = Object.entries(writingModules)
  .map(([path, module]) => toEntry(module, writingRawModules[path]))
  .sort((a, b) => a.title.localeCompare(b.title));

export const philosophy = toEntry(Object.values(philosophyModule)[0]);

export type Project = (typeof projects)[number];
export type Writing = (typeof writing)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getWritingBySlug(slug: string) {
  return writing.find((article) => article.slug === slug);
}
