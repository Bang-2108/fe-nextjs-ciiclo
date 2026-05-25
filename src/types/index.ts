export interface Profile {
  id: number;
  name: string;
  role: string;
  bio: string;
  education: string;
  objective: string;
  avatar: string | null;
  cv_path: string | null;
  stats_experience: number;
  stats_projects: number;
  stats_internships: number;
}

export interface Skill {
  id: number;
  profile_id: number;
  name: string;
  percentage: number;
  category: string;
  is_featured: boolean;
  sort_order: number;
}

export interface GroupedSkills {
  [category: string]: Skill[];
}