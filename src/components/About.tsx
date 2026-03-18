'use client';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main visual block */}
              <div className="w-full aspect-square max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-primary-100 to-accent-400/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto mb-6 shadow-lg">
                    AJ
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-primary-200 rounded-full w-3/4 mx-auto" />
                    <div className="h-3 bg-primary-100 rounded-full w-2/4 mx-auto" />
                    <div className="h-3 bg-primary-200 rounded-full w-5/6 mx-auto" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-slate-700">Available for Work</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-slate-100">
                <div className="text-sm font-semibold text-slate-700">📍 San Francisco, CA</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="section-title">
              Passionate Developer,{' '}
              <span className="gradient-text">Problem Solver</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Hello! I&apos;m Alex, a Full Stack Developer with over 5 years of experience
                building web applications that are both functional and beautiful. I specialize
                in React, Next.js, Node.js, and TypeScript, with a strong foundation in
                database design and cloud infrastructure.
              </p>
              <p>
                My journey in tech started when I built my first website at 15, and I&apos;ve
                been hooked ever since. I love the challenge of taking complex problems and
                turning them into elegant, user-friendly solutions.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open-source projects,
                writing technical articles, hiking, or exploring the latest in AI and
                machine learning.
              </p>
            </div>

            {/* Key info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Alex Johnson' },
                { label: 'Email', value: 'alex@example.com' },
                { label: 'Location', value: 'San Francisco, CA' },
                { label: 'Availability', value: 'Open to offers' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-slate-700 font-medium mt-0.5">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
