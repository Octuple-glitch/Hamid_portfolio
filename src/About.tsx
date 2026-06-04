import { useIntersectionObserver } from './utils';

const skills = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js',
  'JavaScript', 'TypeScript', 'HTML / CSS', 'REST APIs', 'Git',
  'Tailwind CSS', 'PostgreSQL',
];

export default function About() {
  const { ref, visible } = useIntersectionObserver(0.15);

  return (
    <section id="about" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d4ff] font-body text-sm tracking-widest uppercase">About Me</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00d4ff]/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                Turning ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00b8e0]">
                  digital reality
                </span>
              </h2>
              <p className="font-body text-neutral-400 text-lg leading-relaxed mb-8">
                I'm a full stack developer with expertise in React, Node.js, Express, MongoDB and Next.js. I help small and medium businesses get modern, fast, and beautiful websites that actually bring in customers.
              </p>
              <p className="font-body text-neutral-500 text-base leading-relaxed mb-10">
                With a strong foundation in both front-end and back-end development, I deliver complete solutions — from pixel-perfect designs to robust APIs and database architectures. Every project I take on is treated as if it were my own business.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Availability', value: 'Open to Work' },
                  { label: 'Work Style', value: 'Remote / Worldwide' },
                  { label: 'Languages', value: 'English, Urdu, Hindi, Persian, Pashto' },
                  { label: 'Response', value: 'Within 24 hours' },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-xl border border-white/5 bg-[#111111]">
                    <div className="font-body text-xs text-neutral-600 uppercase tracking-wider mb-1">{label}</div>
                    <div className="font-heading font-medium text-white text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative mb-10">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-[#00d4ff]/5 border border-[#00d4ff]/10 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/30" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 font-heading text-5xl font-bold text-white/5 select-none">&lt;/&gt;</div>
                  <div className="relative z-10 text-center px-8">
                    <div className="font-heading font-bold text-5xl text-white mb-2">HR</div>
                    <div className="font-body text-[#00d4ff] text-sm tracking-widest">FULL STACK DEV</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-[#111111] border border-[#00d4ff]/30 rounded-lg text-[#00d4ff] text-xs font-body shadow-lg">
                  React Expert
                </div>
                <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-[#111111] border border-white/10 rounded-lg text-neutral-300 text-xs font-body shadow-lg">
                  5-star rated
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-white text-lg mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-body font-medium hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
