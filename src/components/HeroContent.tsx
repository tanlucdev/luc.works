import { motion } from 'framer-motion';
import { ArrowRight, Mail, Search } from 'lucide-react';
import { WordsPullUp } from './MotionText';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroContent() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8 lg:px-10">
      <div className="grid items-end gap-5 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <WordsPullUp
            id="hero-title"
            text="luc.works"
            showAsterisk
            className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
          />
        </div>
        <div className="max-w-md space-y-4 pb-1 md:col-span-4 md:pb-7 lg:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
          >
            Luke, frontend engineer in Vietnam building AI workflow systems, product UX, and modern web experiences.
            <br />
            <br />
            Frontend engineer focused on turning complex ideas into intuitive tools through clean architecture, modern web technologies, and design-driven thinking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all duration-300 hover:gap-3 sm:text-base"
            >
              View Projects
              <span className="grid h-9 w-9 place-items-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#E1E0CC] sm:h-5 sm:w-5" strokeWidth={1.8} />
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-medium text-primary transition-all duration-300 hover:border-primary hover:text-[#E1E0CC] sm:h-[52px] sm:text-base"
            >
              Get In Touch
              <Mail aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>
            <a
              href="/ask"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-primary/20 px-5 text-sm font-medium text-primary/80 transition-all duration-300 hover:border-primary hover:text-[#E1E0CC] sm:h-[52px] sm:text-base"
            >
              Ask Portfolio
              <Search aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
