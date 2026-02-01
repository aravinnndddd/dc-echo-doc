
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash', title }) => {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[#1e1f22] bg-[#2b2d31]">
      {title && (
        <div className="bg-[#1e1f22] px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider flex justify-between items-center">
          <span>{title}</span>
          <span className="text-[#5865F2]">{language}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
