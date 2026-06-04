import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = ['About', 'Projects', 'Services', 'Testimonials', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-all duration-300">
            <Code2 size={16} className="text-[#00d4ff]" />
          </div>
          <span className="font-heading font-semibold text-white tracking-tight">
            Hamid<span className="text-[#00d4ff]">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-body text-neutral-400 hover:text-[#00d4ff] transition-colors duration-200 tracking-wide"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="px-4 py-2 text-sm font-body font-medium bg-[#00d4ff] text-[#0a0a0a] rounded-lg hover:bg-[#00b8e0] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden text-neutral-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111111]/98 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm font-body text-neutral-400 hover:text-[#00d4ff] transition-colors py-2 border-b border-white/5"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="mt-2 w-full px-4 py-2.5 text-sm font-body font-medium bg-[#00d4ff] text-[#0a0a0a] rounded-lg hover:bg-[#00b8e0] transition-all"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
