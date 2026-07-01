import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Writing } from '../data/content';

const ease = [0.22, 1, 0.36, 1] as const;

type WritingCard = Omit<Writing, 'Content'>;

type WritingCardsProps = {
  articles: WritingCard[];
};

export default function WritingCards({ articles }: WritingCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasMounted, setHasMounted] = useState(false);
  const [featured, ...rest] = articles;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!featured) return null;

  return (
    <div ref={ref} className="mt-10 grid gap-2 sm:mt-12">
      <motion.a
        key={hasMounted ? 'featured-motion' : 'featured-static'}
        href={`/writing/${featured.slug}`}
        initial={hasMounted ? { opacity: 0, scale: 0.96 } : false}
        animate={!hasMounted || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.75, ease }}
        className="group grid gap-8 rounded-[8px] bg-[#101010] p-5 outline-none transition-colors hover:bg-[#171717] focus-visible:ring-2 focus-visible:ring-primary sm:p-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Featured note</p>
          <h2 className="mt-5 text-4xl font-normal leading-[0.95] text-[#E1E0CC] sm:text-5xl md:text-6xl">{featured.title}</h2>
        </div>
        <div>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">{featured.dek}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-primary/20 px-3 py-1 text-xs text-primary/75">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-8 inline-flex items-center gap-2 text-sm text-primary transition-colors group-hover:text-[#E1E0CC]">
            Read note
            <ArrowRight aria-hidden="true" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
          </span>
        </div>
      </motion.a>

      {rest.map((article, index) => (
        <motion.a
          key={`${hasMounted ? 'motion' : 'static'}-${article.slug}`}
          href={`/writing/${article.slug}`}
          initial={hasMounted ? { opacity: 0, scale: 0.96 } : false}
          animate={!hasMounted || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.12 + index * 0.1, duration: 0.7, ease }}
          className="group grid gap-4 rounded-[8px] bg-[#171717] p-5 outline-none transition-colors hover:bg-[#212121] focus-visible:ring-2 focus-visible:ring-primary sm:p-6 md:grid-cols-[minmax(160px,0.34fr)_minmax(0,1fr)_auto] md:items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/60">{article.category}</p>
            <p className="mt-3 text-xs text-gray-500">2 min read</p>
          </div>
          <div>
            <h2 className="text-2xl font-normal leading-tight text-[#E1E0CC]">{article.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">{article.dek}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm text-primary transition-colors group-hover:text-[#E1E0CC] md:justify-self-end">
            Read
            <ArrowRight aria-hidden="true" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
          </span>
        </motion.a>
      ))}
    </div>
  );
}
