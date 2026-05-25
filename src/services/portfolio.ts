import { fetchFromApi } from './api';
import { Profile, GroupedSkills } from '@/types'; 
export const portfolioService = {
  getProfile: (): Promise<Profile> => fetchFromApi('/public/profile'),
  getSkills: (): Promise<GroupedSkills> => fetchFromApi('/public/skills'),
};