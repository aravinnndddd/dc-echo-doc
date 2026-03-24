import React from "react";
import { FEATURES } from "../../constants";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
        Powerful Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="p-6 rounded-xl bg-[#2b2d31] border border-[#35373c] hover:border-[#5865F2] transition-colors group"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
              {feature.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
