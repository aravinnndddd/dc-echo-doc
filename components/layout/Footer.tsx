import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#2b2d31] text-center">
      <p className="text-gray-500 text-sm">
        Built for developers by{" "}
        <a
          href="https://aravind-p.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-[#5865F2]">Aravind</span>
        </a>
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
        >
          Docs
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
        >
          GitHub
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
