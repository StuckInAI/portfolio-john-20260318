'use client';

import { useState, useEffect } from 'react';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiencyLevel: number;
}

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Tools: '🛠️',
};

const categoryColors: Record<string, string> = {
  Frontend: 'from-blue-500 to-cyan-400',
  Backend: 'from-violet-500 to-purple-400',
  Tools: 'from-orange-500 to-amber-400',
};

export default function Skills() {
  const [skillsData, setSkillsData] = useState<Record<string, Skill[]>>({});
  const [loading, setLoading] = useState(true);
  const [seeded, setSeeded] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Auto-seed on first load
        if (!seeded) {
          await fetch('/api/seed');
          setSeeded(true);
        }
        const res = await fetch('/api/skills');
        const data = await res.json();
        setSkillsData(data);
      } catch (err) {
        console.error('Failed to fetch skills:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [seeded]);

  if (loading) {
    return (
      <section id="skills" className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Skills</p>
            <h2 className="section-title">Loading skills...</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-slate-200 rounded mb-6" />
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="mb-4">
                    <div className="h-4 bg-slate-200 rounded mb-2" />
                    <div className="h-2 bg-slate-100 rounded" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span> & Technologies
          </h2>
          <p className="section-subtitle text-slate-600 mx-auto">
            Technologies and tools I&apos;ve mastered over years of professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[category] || 'from-slate-500 to-slate-400'} flex items-center justify-center text-xl shadow-md`}
                >
                  {categoryIcons[category] || '💡'}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{category}</h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs font-semibold text-primary-600">
                        {skill.proficiencyLevel}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category] || 'from-primary-500 to-accent-500'}`}
                        style={{ width: `${skill.proficiencyLevel}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech badges */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Jest', 'Cypress', 'Prisma', 'tRPC', 'Zustand', 'Redux', 'Webpack', 'Vite', 'Nginx', 'CI/CD'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full shadow-sm hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
