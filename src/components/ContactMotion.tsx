import { motion, useInView } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { useRef } from 'react';
import { WordsPullUpMultiStyle } from './MotionText';

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: 'Email', href: 'mailto:hi@luc.works', Icon: Mail }
];

export default function ContactMotion() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="mx-auto max-w-5xl text-center">
      <WordsPullUpMultiStyle
        segments={[{ text: "Let's build something meaningful.", className: 'text-[#E1E0CC]' }]}
        className="text-3xl font-normal leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.35, duration: 0.8, ease }}
        className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#DEDBC8] md:text-base"
      >
        Open to collaborations, product opportunities, and interesting technical challenges.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.8, ease }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <a href="mailto:hi@luc.works" className="group inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all duration-300 hover:gap-3 sm:text-base">
          Contact Me
          <span className="grid h-9 w-9 place-items-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
            <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#E1E0CC] sm:h-5 sm:w-5" strokeWidth={1.8} />
          </span>
        </a>
        <a
          href="/resume/"
          className="group inline-flex h-12 items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:text-[#E1E0CC] sm:h-[52px] sm:text-base"
        >
          View Resume
          <FileText aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} />
        </a>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.65, duration: 0.8, ease }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} className="inline-flex h-11 items-center gap-2 rounded-full bg-[#212121] px-4 text-sm text-gray-400 transition-colors duration-300 hover:text-[#E1E0CC]" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <Icon aria-hidden="true" className="h-4 w-4 text-primary" strokeWidth={1.8} />
              {label}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
