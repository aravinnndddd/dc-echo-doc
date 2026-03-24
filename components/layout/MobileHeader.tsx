import React from "react";

const MobileHeader: React.FC = () => {
  return (
    <div className="md:hidden flex items-center justify-between mb-8 pb-4 border-b border-[#2b2d31]">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white">
          <img
            src="/logo.png"
            alt="Discord Echo logo"
            className="scale-150 object-contain"
          />
        </div>
        <h1 className="text-white font-bold text-lg">Discord Echo</h1>
      </div>
    </div>
  );
};

export default MobileHeader;
