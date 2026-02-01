import React, { useState, useEffect } from "react";
import { COLORS, SETUP_STEPS, EXAMPLE_RESPONSE } from "./constants";
import { SectionId } from "./types";
import CodeBlock from "./components/CodeBlock";
import EndpointCard from "./components/EndpointCard";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("intro");

  const scrollTo = (id: SectionId) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = [
        "intro",
        "features",
        "setup",
        "config",
        "api",
        "response",
        "ai-helper",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SidebarItem = ({
    id,
    label,
    icon,
  }: {
    id: SectionId;
    label: string;
    icon: string;
  }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all group ${
        activeSection === id
          ? "bg-[#404249] text-white"
          : "text-gray-400 hover:bg-[#35373c] hover:text-gray-200"
      }`}
    >
      <span className="opacity-70 group-hover:opacity-100">{icon}</span>
      {label}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-[#313338]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-full bg-[#1e1f22] p-4 flex flex-col hidden md:flex border-r border-[#2b2d31] z-50">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 bg-[#5865F2] rounded-xl flex items-center justify-center text-white shadow-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
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
          <SidebarItem id="intro" label="Introduction" icon="-" />
          <SidebarItem id="features" label="Features" icon="-" />
          <SidebarItem id="setup" label="Bot Setup" icon="-" />
          <SidebarItem id="config" label="Configuration" icon="-" />

          <div className="pt-6">
            <p className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Developer
            </p>
            <SidebarItem id="api" label="API Reference" icon="-" />
            <SidebarItem id="response" label="Data Schema" icon="-" />
            <SidebarItem id="ai-helper" label="AI Assistant" icon="-" />
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

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl mx-auto w-full">
        {/* Mobile Header (Visible only on small screens) */}
        <div className="md:hidden flex items-center justify-between mb-8 pb-4 border-b border-[#2b2d31]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5865F2] rounded-lg flex items-center justify-center text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </div>
            <h1 className="text-white font-bold text-lg">Discord Echo</h1>
          </div>
        </div>

        {/* Intro */}
        <section id="intro" className="mb-20">
          <span className="text-[#5865F2] font-bold text-xs uppercase tracking-widest bg-[#5865f21a] px-3 py-1 rounded-full mb-4 inline-block">
            Welcome
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Presence & Activity{" "}
            <span className="text-[#5865F2]">Redefined</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
            A self-hosted Discord presence & activity API designed for
            portfolios, dashboards, and personal websites. Stream real-time
            statuses and rich activities with minimal latency.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#setup"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("setup");
              }}
              className="bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-[#5865f24d]"
            >
              Get Started
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="bg-[#4e5058] hover:bg-[#6d6f78] text-white font-bold py-3 px-8 rounded-lg transition-all"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
            Powerful Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Universal Status",
                desc: "Real-time sync of Online, Idle, and DND statuses with clean indicators.",
                icon: "🟢",
              },
              {
                title: "Rich Activity",
                desc: "Detailed VS Code file/workspace info and various gaming activities.",
                icon: "💻",
              },
              {
                title: "Spotify Integration",
                desc: "Album art, track name, and artist tracking built-in.",
                icon: "🎧",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#2b2d31] border border-[#35373c] hover:border-[#5865F2] transition-colors group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bot Setup */}
        <section id="setup" className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
            Discord Bot Setup
          </h3>
          <a
            className="underline text-blue-500"
            target="_blank"
            href="https://discord.com/developers/applications"
          >
            Discord Developer Portal {"->"}
          </a>
          <div className="space-y-4 mt-2">
            {SETUP_STEPS.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-[#2b2d31] p-4 rounded-lg border border-[#35373c]"
              >
                <div className="w-6 h-6 rounded-full bg-[#5865F2] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs">
                  {i + 1}
                </div>
                <p className="text-gray-300 font-medium">{step}</p>
              </div>
            ))}
            <div className="mt-6 p-4 rounded-lg bg-[#f23f431a] border border-[#f23f434d] flex gap-3">
              <span className="text-xl">⚠️</span>
              <p className="text-sm text-[#f23f43] leading-relaxed">
                <strong>Important:</strong> Presence updates are event-based.
                Users must <strong>not</strong> be invisible to emit presence
                data to the bot.
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

        {/* Config */}
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

        {/* API Reference */}
        <section id="api" className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#2b2d31] pb-4">
            API Endpoints
          </h3>
          <div className="space-y-4">
            <EndpointCard
              method="GET"
              path="/api/activities"
              description="Retrieve activities for all tracked users in the system."
            />
            <EndpointCard
              method="GET"
              path="/api/activities/:userId"
              description="Get detailed presence data for a specific Discord user by their ID."
            />
            <EndpointCard
              method="GET"
              path="/api/stream"
              description="Initiate a Server-Sent Events (SSE) connection for real-time presence updates."
            />
          </div>
        </section>

        {/* Response Example */}
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
              <code className="bg-[#1e1f22] text-white px-1 rounded">
                avathar
              </code>{" "}
              contains an intentional typo for backward compatibility with
              legacy client implementations.
            </p>
          </div>
          <CodeBlock
            language="json"
            title="Sample Payload"
            code={JSON.stringify(EXAMPLE_RESPONSE, null, 2)}
          />
        </section>

        {/* AI Helper */}

        {/* Footer */}
        <footer className="py-12 border-t border-[#2b2d31] text-center">
          <p className="text-gray-500 text-sm">
            Built for developers by{" "}
            <a href="https://aravind-p.vercel.app/" target="_blank">
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
      </main>
    </div>
  );
};

export default App;
