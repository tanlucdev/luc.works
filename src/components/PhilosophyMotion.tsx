import { ScrollRevealText, WordsPullUpMultiStyle } from './MotionText';

type PhilosophyMotionProps = {
  headline: string;
  body: string;
};

export default function PhilosophyMotion({ headline, body }: PhilosophyMotionProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <WordsPullUpMultiStyle
        segments={[{ text: headline, className: 'text-[#E1E0CC]' }]}
        replayHash="work"
        className="text-3xl font-normal leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
      />
      <ScrollRevealText text={body} />
    </div>
  );
}
