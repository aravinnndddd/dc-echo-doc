import { EndpointItem, FeatureItem, SectionId, SidebarNavItem } from "./types";

export const COLORS = {
  blurple: "#5865F2",
  dark: "#313338",
  darker: "#2b2d31",
  sidebar: "#1e1f22",
  text: "#dbdee1",
  heading: "#ffffff",
  online: "#23a55a",
  idle: "#f0b232",
  dnd: "#f23f43",
};

export const EXAMPLE_RESPONSE = {
  userId: "712683910238122",
  username: "Arv",
  avathar: "https://picsum.photos/200/200",
  status: "online",
  activities: [
    {
      name: "Visual Studio Code",
      type: "Playing",
      details: "Editing hero.tsx",
      state: "Workspace: Portfolio",
      assets: {
        largeImage: "https://picsum.photos/400/400?sig=1",
        smallImage: "https://picsum.photos/100/100?sig=2",
      },
    },
  ],
  updatedAt: new Date().toISOString(),
};

export const SETUP_STEPS = [
  "Go to Discord Developer Portal",
  "Create an application → Add Bot",
  "Enable Privileged Gateway Intents: Presence Intent & Server Members Intent",
  "Copy the Bot Token",
  "Invite the bot to your server",
];

export const SECTIONS: SectionId[] = [
  "intro",
  "features",
  "setup",
  "config",
  "api",
  "response",
];

export const SIDEBAR_ITEMS: SidebarNavItem[] = [
  { id: "intro", label: "Introduction", icon: "-", group: "guide" },
  { id: "features", label: "Features", icon: "-", group: "guide" },
  { id: "setup", label: "Bot Setup", icon: "-", group: "guide" },
  { id: "config", label: "Configuration", icon: "-", group: "guide" },
  { id: "api", label: "API Reference", icon: "-", group: "developer" },
  { id: "response", label: "Data Schema", icon: "-", group: "developer" },
];

export const FEATURES: FeatureItem[] = [
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
];

export const ENDPOINTS: EndpointItem[] = [
  {
    method: "GET",
    path: "/api/activities",
    description: "Retrieve activities for all tracked users in the system.",
  },
  {
    method: "GET",
    path: "/api/activities/:userId",
    description:
      "Get detailed presence data for a specific Discord user by their ID.",
  },
];
