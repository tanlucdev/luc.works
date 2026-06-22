import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

type WordsPullUpProps = {
  text: string;
  className?: string;
  id?: string;
  showAsterisk?: boolean;
};

type Segment = {
  text: string;
  className?: string;
};

export function WordsPullUp({ text, className = '', id, showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const words = useMemo(() => text.split(' '), [text]);

  return (
    <div ref={ref} id={id} className={className} aria-label={text}>
      <span className="inline-flex flex-wrap" aria-hidden="true">
        {words.map((word, index) => {
          const isLast = index === words.length - 1;
          return (
            <motion.span
              key={`${word}-${index}`}
              className="mr-[0.18em] inline-block will-change-transform last:mr-0"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: index * 0.08, duration: 0.8, ease }}
            >
              {showAsterisk && isLast ? (
                <span className="relative inline-block">
                  {word}
                  <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em] leading-none">*</span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          );
        })}
      </span>
    </div>
  );
}

export function WordsPullUpMultiStyle({ segments, className = '' }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const words = useMemo(
    () => segments.flatMap((segment) => segment.text.split(' ').filter(Boolean).map((word) => ({ word, className: segment.className ?? '' }))),
    [segments]
  );
  const label = segments.map((segment) => segment.text).join(' ');

  return (
    <div ref={ref} className={className} aria-label={label}>
      <span className="inline-flex flex-wrap justify-center gap-x-[0.18em]" aria-hidden="true">
        {words.map(({ word, className: wordClass }, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={`inline-block will-change-transform ${wordClass}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: index * 0.08, duration: 0.8, ease }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

function AnimatedLetter({ char, index, total, scrollYProgress }: { char: string; index: number; total: number; scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const charProgress = index / total;
  const opacity = useTransform(scrollYProgress, [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function ScrollRevealText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <p ref={ref} className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-[#DEDBC8] sm:mt-10 sm:text-sm md:text-base">
      {chars.map((char, index) => (
        <AnimatedLetter key={`${char}-${index}`} char={char} index={index} total={chars.length} scrollYProgress={scrollYProgress} />
      ))}
    </p>
  );
}
