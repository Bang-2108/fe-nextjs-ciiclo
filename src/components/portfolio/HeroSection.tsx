'use client';

import { Profile } from '@/types';

interface HeroSectionProps {
  profile: Profile | null;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const handleViewCV = () => {
    if (profile?.cv_path) {
      window.open(profile.cv_path, '_blank');
    } else {
      alert('The CV is currently being updated!');
    }
  };

  if (!profile) return null;

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center pt-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-10">
          <div className="w-36 h-36 rounded-full bg-primary-accent p-1 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(255,113,184,0.4)]">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover rounded-full" />
            ) : (
              <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center text-3xl">👩‍💻</div>
            )}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5">
          Hi, I'm <span className="text-primary-accent">{profile.name}</span>
        </h1>

        <h2 className="text-primary-accent text-3xl md:text-4xl font-bold mb-8">
          {profile.role}
        </h2>

        <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          {profile.objective}
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-14">
          <a
            href="projects"
            className="bg-primary-accent hover:bg-primary-hover text-black font-bold px-10 py-4 rounded-2xl transition-all shadow-md"
          >
            View Projects
          </a>

          <button
            onClick={handleViewCV}
            className="border border-primary-accent text-primary-accent hover:bg-primary-accent/10 transition px-10 py-4 rounded-2xl font-semibold"
          >
            <i className="bi bi-box-arrow-up-right"></i> View CV
          </button>
        </div>
      </div>
    </section>
  );
}