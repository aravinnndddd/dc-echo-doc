
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

export type SectionId = 'intro' | 'features' | 'setup' | 'config' | 'api' | 'response';

export interface SidebarNavItem {
  id: SectionId;
  label: string;
  icon: string;
  group: 'guide' | 'developer';
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

export interface EndpointItem {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
}
