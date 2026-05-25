import { portfolioService } from '@/services/portfolio';
import HeroSection from '@/components/portfolio/HeroSection';
export default async function HomePage() {
  let profile = null;
  try {
    profile = await portfolioService.getProfile();
  } catch (error) {
    console.error("Error fetching profile data on the homepage:", error);
  }
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
        <HeroSection profile={profile} />
      </div>
    </div>
  );
}