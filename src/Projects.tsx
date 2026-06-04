import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from './utils';

const projects = [
  {
    title: 'Belkhi Restaurant',
    description: 'A full stack restaurant website with dynamic menu, online booking system, and a beautiful modern design. Built for a real client.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-[#00d4ff]/20 to-transparent',
    accent: '#00d4ff',
    category: 'Restaurant Website',
    liveUrl: 'https://belkhi-flame.vercel.app/',
    githubUrl: 'https://github.com/Octuple-glitch',
  },
  {
    title: 'Decent Beauty Lounge',
    description: 'A sleek, elegant website for a beauty salon — showcasing services, gallery, and booking. Designed to attract and convert new customers.',
    stack: ['React', 'Tailwind CSS', 'Node.js'],
    gradient: 'from-[#ff6bab]/20 to-transparent',
    accent: '#ff6bab',
    category: 'Beauty & Wellness',
    liveUrl: 'https://decentbeautylounge.vercel.app/',
    githubUrl: 'https://github.com/Octuple-glitch',
  },
  {
    title: 'Hamid Barber',
    description: 'A premium luxury barbershop website with services showcase, gallery, testimonials, and an online booking system. Dark, sophisticated design.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    gradient: 'from-[#c9a84c]/20 to-transparent',
    accent: '#c9a84c',
    category: 'Barbershop Website',
    liveUrl: 'https://v0-website-ux-enhancement.vercel.app/',
    githubUrl: 'https://github.com/Octuple-glitch',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, visible } = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="group relative h-full bg-[#111111] rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)] transition-all duration-400">
        <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${project.accent}50, transparent)` }} />

        <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
            />
            <div className="text-center relative z-10">
              <div className="font-heading font-bold text-4xl text-white/10 mb-2">{project.title}</div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-body border"
                style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
              >
                {project.category}
              </div>
            </div>
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
          </svg>
        </div>

        <div className="p-6">
          <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-neutral-500 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-neutral-400 text-xs font-body"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-body font-medium text-[#0a0a0a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              style={{ background: project.accent }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-body font-medium text-neutral-400 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useIntersectionObserver(0.1);

  return (
    <section id="projects" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00d4ff]/50" />
            <span className="text-[#00d4ff] font-body text-sm tracking-widest uppercase">Portfolio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00d4ff]/50" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Featured Projects
          </h2>
          <p className="font-body text-neutral-500 text-lg max-w-xl mx-auto">
            Real websites built for real clients — from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
