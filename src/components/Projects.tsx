'use client';

import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  liveDemoUrl: string;
  githubUrl: string;
  featured: boolean;
  sortOrder: number;
}

const projectColors = [
  'from-blue-500 to-cyan-500',
  'from-violet-500 to-purple-500',
  'from-orange-500 to-red-500',
  'from-green-500 to-teal-500',
  'from-pink-500 to-rose-500',
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  const parseTechStack = (techStack: string): string[] => {
    try {
      return JSON.parse(techStack);
    } catch {
      return techStack.split(',').map((t) => t.trim());
    }
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle text-slate-600 mx-auto">
            A selection of projects I&apos;ve built, ranging from web applications to developer tools.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {(['all', 'featured'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 capitalize ${
                filter === tab
                  ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab === 'all' ? 'All Projects' : 'Featured'}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-slate-200" />
                <div className="p-6">
                  <div className="h-5 bg-slate-200 rounded mb-3" />
                  <div className="h-16 bg-slate-100 rounded mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-slate-200 rounded-full" />
                    <div className="h-6 w-16 bg-slate-200 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              const techTags = parseTechStack(project.techStack);
              const gradient = projectColors[idx % projectColors.length];
              return (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-hover"
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative text-center text-white">
                      <div className="text-5xl mb-2">💻</div>
                      <div className="text-sm font-medium opacity-80">Project Preview</div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        ⭐ Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {techTags.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {techTags.length > 4 && (
                        <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          +{techTags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-semibold rounded-lg hover:shadow-md transition-all duration-200"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-16 text-slate-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-medium">No projects found.</p>
            <p className="text-sm mt-1">Try visiting /api/seed to populate the database first.</p>
          </div>
        )}
      </div>
    </section>
  );
}
