import React from "react";
import CodeBlock from "../CodeBlock";

const ConfigSection: React.FC = () => {
  return (
    <section id="config" className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
        Configuration
      </h3>
      <p className="text-gray-400 mb-6">
        Create a{" "}
        <code className="text-white bg-[#1e1f22] px-1.5 py-0.5 rounded">
          .env
        </code>{" "}
        file in your project root.
      </p>
      <CodeBlock
        language="env"
        title=".env example"
        code={`DISCORD_TOKEN=your_discord_bot_token_here
ALLOWED_ORIGINS=http://localhost:5173,https://your-site.com
PORT=3000`}
      />
    </section>
  );
};

export default ConfigSection;
