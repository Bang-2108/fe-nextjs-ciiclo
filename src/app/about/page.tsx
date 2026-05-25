import { portfolioService } from '@/services/portfolio';
import AboutSection from '@/components/portfolio/AboutSection';

export default async function AboutPage() {
  let profile = null;
  try {
    profile = await portfolioService.getProfile();
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
  return (
    <div className="pt-10">
      <AboutSection profile={profile} />
    </div>
  );
}