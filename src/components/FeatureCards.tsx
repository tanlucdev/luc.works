import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Code2, MapPinned, UsersRound, Workflow } from 'lucide-react';
import { useRef } from 'react';
import type { Project } from '../data/projects';
import { useHashReplay } from './MotionText';

const ease = [0.22, 1, 0.36, 1] as const;

const icons = {
  workflow: Workflow,
  map: MapPinned,
  users: UsersRound,
  code: Code2
};

type ProjectCard = Omit<Project, 'Content'>;

type FeatureCardsProps = {
  projects: ProjectCard[];
};

export default function FeatureCards({ projects }: FeatureCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const replayKey = useHashReplay('projects');

  return (
    <div ref={ref} className="mt-10 grid gap-3 sm:mt-12 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[520px] lg:grid-cols-4 lg:gap-x-1">
      {projects.map((card, index) => {
        const Icon = icons[card.icon];

        return (
          <motion.article
            key={`${replayKey}-${card.title}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: index * 0.15, duration: 0.75, ease }}
            className="group relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#212121] transition-colors duration-300 hover:bg-[#272727] lg:min-h-0"
          >
            <a href={`/projects/${card.slug}`} className="flex h-full flex-col p-5 outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6 lg:grid lg:grid-rows-[76px_112px_104px_repeat(4,32px)_1fr] lg:pb-8">
              <span className="grid h-10 w-10 place-items-center rounded bg-black/35 text-primary ring-1 ring-primary/10 sm:h-12 sm:w-12">
                <Icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
              </span>
              <div className="mt-8 flex items-start justify-between gap-4 sm:mt-10 lg:mt-0">
                <h3 className="text-2xl font-normal leading-none text-[#E1E0CC] sm:text-3xl">{card.title}</h3>
                <span className="text-xs text-gray-500">({card.number})</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-500 lg:mt-0">{card.description}</p>
              <ul className="mt-7 space-y-3 lg:row-span-4 lg:mt-0 lg:grid lg:grid-rows-[repeat(4,32px)] lg:space-y-0">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-primary transition-colors group-hover:text-[#E1E0CC] lg:absolute lg:bottom-8 lg:left-6 lg:mt-0 lg:pt-0">
                View detail
                <ArrowRight aria-hidden="true" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
              </span>
            </a>
          </motion.article>
        );
      })}
    </div>
  );
}
