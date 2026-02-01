
export interface Activity {
  name: string;
  type: string;
  details?: string;
  state?: string;
  assets?: {
    largeImage?: string;
    smallImage?: string;
  };
}

export interface UserPresence {
  userId: string;
  username: string;
  avathar: string; // Intentional typo from user requirement
  status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Activity[];
  updatedAt: string;
}

export type SectionId = 'intro' | 'features' | 'setup' | 'config' | 'api' | 'response' | 'ai-helper';
