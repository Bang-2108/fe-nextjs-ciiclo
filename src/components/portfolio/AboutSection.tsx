import { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile | null;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  if (!profile) return null;

  return (
    <section id="about" className="py-20 bg-black text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <h2 className="text-5xl font-bold text-center">
          About <span className="text-primary-accent">Me</span>
        </h2>

        <div className="space-y-8">
          <div className="bg-[#111] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-6">
            <div className="flex items-center gap-4 text-primary-accent">
              <i className="bi bi-person-badge text-2xl"></i>
              <h3 className="text-xl font-bold uppercase tracking-widest">Bio</h3>
            </div>
            <p className="text-text-muted leading-relaxed text-lg whitespace-pre-line">
              {profile.bio}
            </p>
          </div>

          <div className="bg-[#111] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-6">
            <div className="flex items-center gap-4 text-primary-accent">
              <i className="bi bi-mortarboard text-2xl"></i>
              <h3 className="text-xl font-bold uppercase tracking-widest">Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-200 font-bold text-xl">{profile.education}</p>
              <p className="text-primary-accent font-medium">2023 - 2026</p>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-6">
            <div className="flex items-center gap-4 text-primary-accent">
              <i className="bi bi-target text-2xl"></i>
              <h3 className="text-xl font-bold uppercase tracking-widest">Career Objective</h3>
            </div>
            <p className="text-text-muted leading-relaxed italic text-lg">
              {profile.objective}
            </p>
          </div>
        </div>

        <div className="bg-[#111] p-10 rounded-[2.5rem] border border-primary-accent/10 shadow-xl">
          <h3 className="text-center text-2xl font-bold mb-10 uppercase tracking-widest text-gray-300">Quick Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-primary-accent mb-2">{profile.stats_projects}+</div>
              <div className="text-gray-500 uppercase text-xs font-bold tracking-widest">Projects</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">{profile.stats_internships}</div>
              <div className="text-gray-500 uppercase text-xs font-bold tracking-widest">Internships</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">{profile.stats_experience}</div>
              <div className="text-gray-500 uppercase text-xs font-bold tracking-widest">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}