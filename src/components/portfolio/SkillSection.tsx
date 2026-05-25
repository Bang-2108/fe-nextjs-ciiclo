import { GroupedSkills } from '@/types';

interface SkillSectionProps {
  skills: GroupedSkills; 
}

export default function SkillSection({ skills }: SkillSectionProps) {
  const safeSkills = skills || {};

  return (
    <section id="skills" className="py-20 border-t border-white/5 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary-accent">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(safeSkills).map(([category, list]) => (
            <div 
              key={category}
              className="bg-secondary/10 border border-white/10 rounded-[2.5rem] p-8 hover:border-primary-accent/30 transition-all shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-primary-accent rounded-full"></div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                  {category}
                </h3>
              </div>

              <div className="space-y-6">
                {list.map((skill) => (
                  <div key={skill.id} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-accent font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="bg-primary-accent h-full rounded-full shadow-[0_0_10px_rgba(255,113,184,0.5)] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}