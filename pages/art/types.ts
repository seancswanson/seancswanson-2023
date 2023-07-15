export interface Cover {
  animation_preview?: string;
  animation_full?: string;
  animation_source?: string;
  id?: number;
  still_url?: string;
}

export interface Project {
  title: string;
  type: string;
  description: string;
  created_at: string;
  updated_at?: string;
  slug: string;
  featured: boolean;
  published_at?: string;
  hash_id?: string;
  permalink?: string;
  tech: string[];
  featuredTech: string[];
  cover: Cover;
}

export interface ArtProjectProps {
  project: Project;
}
export interface ArtProjectsProps {
  projects: {
    data: Project[];
  };
}
