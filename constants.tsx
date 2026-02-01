
import React from 'react';

export const COLORS = {
  blurple: '#5865F2',
  dark: '#313338',
  darker: '#2b2d31',
  sidebar: '#1e1f22',
  text: '#dbdee1',
  heading: '#ffffff',
  online: '#23a55a',
  idle: '#f0b232',
  dnd: '#f23f43',
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
        smallImage: "https://picsum.photos/100/100?sig=2"
      }
    }
  ],
  updatedAt: new Date().toISOString()
};

export const SETUP_STEPS = [
  "Go to Discord Developer Portal",
  "Create an application → Add Bot",
  "Enable Privileged Gateway Intents: Presence Intent & Server Members Intent",
  "Copy the Bot Token",
  "Invite the bot to your server"
];
