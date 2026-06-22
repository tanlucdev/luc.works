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
};

const projectModules = import.meta.glob<MarkdownModule<ProjectFrontmatter>>('../../content/projects/*.md', {
  eager: true
});

const writingModules = import.meta.glob<MarkdownModule<WritingFrontmatter>>('../../content/writing/*.md', {
  eager: true
});

const philosophyModule = import.meta.glob<MarkdownModule<PhilosophyFrontmatter>>('../../content/philosophy.md', {
  eager: true
});

function toEntry<TFrontmatter>(module: MarkdownModule<TFrontmatter>): ContentEntry<TFrontmatter> {
  return {
    ...module.frontmatter,
    Content: module.default
  };
}

export const projects = Object.values(projectModules)
  .map(toEntry)
  .sort((a, b) => a.number.localeCompare(b.number));

export const writing = Object.values(writingModules)
  .map(toEntry)
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
