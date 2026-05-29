import { fetchFromApi, postToApi } from './api';
import { Profile, GroupedSkills } from '@/types'; 
export const portfolioService = {
  getProfile: (): Promise<Profile> => fetchFromApi('/public/profile'),
  getSkills: (): Promise<GroupedSkills> => fetchFromApi('/public/skills'),
  getProjects: (): Promise<any> => fetchFromApi('/public/projects'),
  sendContactMessage: (payload: { name: string; email: string; subject?: string; message: string }): Promise<any> => 
    postToApi('/public/contact', payload),
};