import React from 'react';
import { portfolioService } from '@/services/portfolio';
import SkillSection from '@/components/portfolio/SkillSection';
import { GroupedSkills } from '@/types';
export const revalidate = 60;
export default async function SkillsPage() {
  let skills: GroupedSkills = {};
  try {
    const data = await portfolioService.getSkills();
    skills = data || {};
  } catch (error) {
    console.error('Failed to fetch skills in server component:', error);
  }
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-28">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            My <span className="text-pink-400">Skills</span>
          </h1>
        </div>
        <SkillSection skills={skills} />
      </div>
    </div>
  );
}