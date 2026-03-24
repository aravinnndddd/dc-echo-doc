import React from "react";
import CodeBlock from "../CodeBlock";
import { EXAMPLE_RESPONSE } from "../../constants";

const ResponseSection: React.FC = () => {
  return (
    <section id="response" className="mb-20">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
        Data Schema
      </h3>
      <p className="text-gray-400 mb-6">
        All endpoints return the following standardized JSON structure.
      </p>
      <div className="bg-[#2b2d31] p-4 mb-6 rounded-lg border border-[#f0b2324d] flex gap-3">
        <span className="text-xl">💡</span>
        <p className="text-sm text-[#f0b232] leading-relaxed">
          <strong>Note:</strong> The field name{" "}
          <code className="bg-[#1e1f22] text-white px-1 rounded">avathar</code>{" "}
          contains an intentional typo for backward compatibility with legacy
          client implementations.
        </p>
      </div>
      <CodeBlock
        language="json"
        title="Sample Payload"
        code={JSON.stringify(EXAMPLE_RESPONSE, null, 2)}
      />
    </section>
  );
};

export default ResponseSection;
