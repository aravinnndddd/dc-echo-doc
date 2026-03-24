import React from "react";
import { SIDEBAR_ITEMS } from "../../constants";
import { SectionId } from "../../types";

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const SidebarItem: React.FC<{
  id: SectionId;
  label: string;
  icon: string;
  isActive: boolean;
  onClick: (id: SectionId) => void;
}> = ({ id, label, icon, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all group ${
      isActive
        ? "bg-[#404249] text-white"
        : "text-gray-400 hover:bg-[#35373c] hover:text-gray-200"
    }`}
  >
    <span className="opacity-70 group-hover:opacity-100">{icon}</span>
    {label}
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const guideItems = SIDEBAR_ITEMS.filter((item) => item.group === "guide");
  const developerItems = SIDEBAR_ITEMS.filter(
    (item) => item.group === "developer",
  );

  return (
    <aside className="fixed left-0 top-0 w-64 h-full bg-[#1e1f22] p-4 flex flex-col hidden md:flex border-r border-[#2b2d31] z-50">
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-10 h-10rounded-xl flex items-center justify-center text-white shadow-lg">
          <img src="/logo.png" alt="Discord Echo logo" className=" scale-150" />
        </div>
        <div>
          <h1 className="text-white font-bold leading-none">Discord Echo</h1>
          <p className="text-[10px] text-[#5865F2] font-mono mt-1">
            v1.4.2 stable
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
          Guide
        </p>
        {guideItems.map((item) => (
          <SidebarItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeSection === item.id}
            onClick={onNavigate}
          />
        ))}

        <div className="pt-6">
          <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Developer
          </p>
          {developerItems.map((item) => (
            <SidebarItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              isActive={activeSection === item.id}
              onClick={onNavigate}
            />
          ))}
        </div>
      </nav>

      <div className="mt-auto pt-4 border-t border-[#2b2d31]">
        <div className="bg-[#2b2d31] p-3 rounded-lg">
          <p className="text-[10px] text-gray-500 font-medium">STATUS</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(35,165,90,0.5)]"></div>
            <p className="text-xs text-gray-300 font-medium">
              All systems normal
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
