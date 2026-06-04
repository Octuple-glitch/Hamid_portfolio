import { ArrowDown, Zap } from 'lucide-react';
import { ParticleCanvas } from './utils';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#00d4ff]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/25 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-body mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse-slow" />
          Available for freelance — currently accepting projects
        </div>

        {/* Heading */}
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 animate-fade-up">
          Hi, I'm{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00b8e0]">
              Hamid Riza
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00d4ff]/50 to-transparent" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-body text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          Full Stack Web Developer —{' '}
          <span className="text-neutral-200">
            I build fast, modern websites for businesses worldwide
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <button
            onClick={() => scrollTo('projects')}
            className="group flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0a0a] font-heading font-semibold rounded-xl hover:bg-[#00b8e0] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:-translate-y-0.5"
          >
            <Zap size={18} />
            See My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-8 py-4 border border-[#00d4ff]/40 text-[#00d4ff] font-heading font-semibold rounded-xl hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/70 transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}>
          {[
            { value: '5+', label: 'Projects Delivered' },
            { value: '2+', label: 'Years Experience' },
            { value: '5+', label: 'Happy Clients' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-heading font-bold text-3xl text-white">{value}</div>
              <div className="font-body text-sm text-neutral-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 hover:text-[#00d4ff] transition-colors animate-bounce"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
