'use client';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    period: '2022 — Present',
    type: 'Full-time',
    description:
      'Lead development of enterprise web applications serving 500K+ users. Architected microservices migration, reducing system latency by 40%. Mentored team of 6 junior developers.',
    achievements: [
      'Reduced API response time by 40% through caching and query optimization',
      'Led migration from monolith to microservices architecture',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 — 2022',
    type: 'Full-time',
    description:
      'Built and scaled the core product from MVP to 50K users. Worked closely with founders to define technical roadmap. Implemented real-time features using WebSockets.',
    achievements: [
      'Scaled application from 0 to 50K active users',
      'Built real-time collaboration features with WebSockets',
      'Integrated third-party APIs (Stripe, Twilio, SendGrid)',
    ],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Redis'],
    color: 'from-accent-500 to-accent-600',
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    location: 'New York, NY',
    period: '2019 — 2020',
    type: 'Full-time',
    description:
      'Developed responsive web interfaces for 20+ client projects. Collaborated with designers to create pixel-perfect implementations. Improved Core Web Vitals scores across all projects.',
    achievements: [
      'Delivered 20+ client projects on time and within budget',
      'Improved average Lighthouse score from 65 to 95',
      'Created reusable component library used across all projects',
    ],
    tech: ['React', 'Vue.js', 'SCSS', 'Webpack', 'Figma'],
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2018 — 2019',
    type: 'Freelance',
    description:
      'Started freelancing career building websites for small businesses. Gained hands-on experience with various technologies and client communication skills.',
    achievements: [
      'Completed 15+ freelance projects for small businesses',
      'Learned industry best practices and client management',
      'Built first full-stack application with authentication',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    color: 'from-orange-500 to-amber-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">Career</p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle text-slate-600 mx-auto">
            My professional journey and the impact I&apos;ve made along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} hidden md:flex items-center justify-center shadow-lg z-10`}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary-600 font-semibold">{exp.company}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="text-slate-600 text-sm font-medium">{exp.period}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-primary-500 mt-0.5 shrink-0">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
