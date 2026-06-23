import { ScrollRevealText, WordsPullUpMultiStyle } from './MotionText';

const aboutBody = 'I enjoy transforming complex ideas into intuitive digital experiences. My work spans AI workflow systems, product development, frontend architecture, and modern web applications. Across the web, luc.works is the home base for my projects, writing, and contact links. I believe great software should feel invisible — allowing people to focus on their goals rather than the interface itself.';

export default function AboutMotion() {
  return (
    <div className="mt-6">
      <WordsPullUpMultiStyle
        segments={[
          { text: "I'm Luke,", className: 'font-normal' },
          { text: 'a frontend engineer with a design-first mindset.', className: 'font-serif italic' },
          { text: 'I build products that help people focus, create, and work better.', className: 'font-normal' }
        ]}
        replayHash="about"
        className="mx-auto max-w-3xl text-3xl font-normal leading-[0.95] text-[#E1E0CC] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
      />
      <ScrollRevealText text={aboutBody} />
    </div>
  );
}
