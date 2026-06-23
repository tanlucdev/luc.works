import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import type { Writing } from '../data/content';

const ease = [0.22, 1, 0.36, 1] as const;

type WritingCard = Omit<Writing, 'Content'>;

type WritingCardsProps = {
  articles: WritingCard[];
};

export default function WritingCards({ articles }: WritingCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="mt-10 grid gap-2 sm:mt-12">
      {articles.map((article, index) => (
        <motion.article
          key={article.slug}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: index * 0.15, duration: 0.75, ease }}
          className="group relative overflow-hidden rounded-[8px] bg-[#212121] transition-colors duration-300 hover:bg-[#272727]"
        >
          <a href={`/writing/${article.slug}`} className="grid gap-5 p-5 outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.6fr)_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/70">{article.category}</p>
              <p className="mt-3 text-xs text-gray-500">2 min read</p>
            </div>
            <div>
              <h2 className="text-2xl font-normal leading-tight text-[#E1E0CC] sm:text-3xl md:text-[2rem]">{article.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">{article.dek}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map((tag) => (
                  <li key={tag} className="rounded-full bg-black/25 px-3 py-1 text-xs text-gray-400">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-primary transition-colors group-hover:text-[#E1E0CC] md:justify-self-end">
              Read
              <ArrowRight aria-hidden="true" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </span>
          </a>
        </motion.article>
      ))}
    </div>
  );
}
