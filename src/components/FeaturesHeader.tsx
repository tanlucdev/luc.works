import { WordsPullUpMultiStyle } from './MotionText';

export default function FeaturesHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center" id="features-title">
      <WordsPullUpMultiStyle
        segments={[
          { text: 'Building products for curious minds.', className: 'text-[#E1E0CC]' },
          { text: 'Designed with intention. Built with technology.', className: 'text-gray-500' }
        ]}
        replayHash="projects"
        className="text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
      />
    </div>
  );
}
