import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { WordsPullUp } from './MotionText';

const ease = [0.22, 1, 0.36, 1] as const;

type DetailMotionProps = {
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  titleClassName: string;
  role?: string;
  highlights?: string[];
};

export default function DetailMotion({ eyebrow, title, summary, tags, titleClassName, role, highlights = [] }: DetailMotionProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="grid min-h-[calc(100vh-96px)] content-between gap-12 pt-14 md:pt-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12 xl:gap-x-16">
        <div className="min-w-0 lg:col-span-7">
          <motion.p key={hasMounted ? 'eyebrow-motion' : 'eyebrow-static'} initial={hasMounted ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease }} className="text-xs uppercase tracking-[0.24em] text-primary/70">
            {eyebrow}
          </motion.p>
          <WordsPullUp text={title} className={titleClassName} />
        </div>
        <motion.div key={hasMounted ? 'summary-motion' : 'summary-static'} initial={hasMounted ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.9, ease }} className="max-w-xl lg:col-span-4 lg:col-start-9">
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/20 px-3 py-1 text-xs text-primary/80">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {(role || highlights.length > 0) && (
        <motion.div key={hasMounted ? 'meta-motion' : 'meta-static'} initial={hasMounted ? { opacity: 0, y: 24 } : false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.85, ease }} className="grid gap-4 pb-10 md:grid-cols-3 md:pb-14">
          {role && (
            <section className="rounded-[8px] bg-[#1F1F1F] p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Role</p>
              <p className="mt-5 text-lg leading-snug text-[#E1E0CC]">{role}</p>
            </section>
          )}

          {highlights.length > 0 && (
            <section className="rounded-[8px] bg-[#1F1F1F] p-5 sm:p-6 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Highlights</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {highlights.map((highlight) => (
                  <li key={highlight} className="border-l border-primary/30 pl-4 text-sm leading-relaxed text-gray-400">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </motion.div>
      )}
    </div>
  );
}
