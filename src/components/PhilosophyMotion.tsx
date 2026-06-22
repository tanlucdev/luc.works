import { ScrollRevealText, WordsPullUpMultiStyle } from './MotionText';

const body = 'I believe the best products remove friction rather than add features. My goal is to create experiences that help people think clearly, move faster, and focus on meaningful work.';

export default function PhilosophyMotion() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <WordsPullUpMultiStyle
        segments={[{ text: 'Great software should feel invisible.', className: 'text-[#E1E0CC]' }]}
        className="text-3xl font-normal leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
      />
      <ScrollRevealText text={body} />
    </div>
  );
}
