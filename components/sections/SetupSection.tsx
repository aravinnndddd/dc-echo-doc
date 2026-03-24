import React from "react";
import CodeBlock from "../CodeBlock";
import { SETUP_STEPS } from "../../constants";

const SetupSection: React.FC = () => {
  return (
    <section id="setup" className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
        Discord Bot Setup
      </h3>
      <a
        className="underline text-blue-500"
        target="_blank"
        rel="noreferrer"
        href="https://discord.com/developers/applications"
      >
        Discord Developer Portal {"->"}
      </a>
      <div className="space-y-4 mt-2">
        {SETUP_STEPS.map((step, index) => (
          <div
            key={step}
            className="flex gap-4 items-start bg-[#2b2d31] p-4 rounded-lg border border-[#35373c]"
          >
            <div className="w-6 h-6 rounded-full bg-[#5865F2] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs">
              {index + 1}
            </div>
            <p className="text-gray-300 font-medium">{step}</p>
          </div>
        ))}
        <div className="mt-6 p-4 rounded-lg bg-[#f23f431a] border border-[#f23f434d] flex gap-3">
          <span className="text-xl">⚠️</span>
          <p className="text-sm text-[#f23f43] leading-relaxed">
            <strong>Important:</strong> Presence updates are event-based. Users
            must <strong>not</strong> be invisible to emit presence data to the
            bot.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-bold text-white mb-4">
          Quick Installation
        </h4>
        <CodeBlock
          title="Terminal"
          code="https://github.com/aravinnndddd/Discord-Echo.git"
        />
      </div>
    </section>
  );
};

export default SetupSection;
