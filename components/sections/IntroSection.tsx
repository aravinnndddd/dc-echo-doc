import React from "react";

interface IntroSectionProps {
  onGetStarted: () => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="intro" className="mb-20">
      <span className="text-[#5865F2] font-bold text-xs uppercase tracking-widest bg-[#5865f21a] px-3 py-1 rounded-full mb-4 inline-block">
        Welcome
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
        Presence & Activity <span className="text-[#5865F2]">Redefined</span>
      </h2>
      <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
        A self-hosted Discord presence & activity API designed for portfolios,
        dashboards, and personal websites. Stream real-time statuses and rich
        activities with minimal latency.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#setup"
          onClick={(e) => {
            e.preventDefault();
            onGetStarted();
          }}
          className="bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#5865f24d]"
        >
          Get Started
        </a>
        <a
          href="https://github.com/aravinnndddd/Discord-Echo"
          target="_blank"
          rel="noreferrer"
          className="bg-[#4e5058] hover:bg-[#6d6f78] text-white font-bold py-3 px-8 rounded-lg transition-all"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
