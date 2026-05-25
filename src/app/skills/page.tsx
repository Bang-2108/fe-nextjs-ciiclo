import { portfolioService } from '@/services/portfolio';
import SkillSection from '@/components/portfolio/SkillSection';
export default async function SkillsPage() {
  let skills = {};
  try {
    skills = await portfolioService.getSkills();
  } catch (error) {
    console.error("Error fetching skills data:", error);
  }
  return (
    <div className="pt-10">
      <SkillSection skills={skills} />
    </div>
  );
}