import { Github, Instagram, Code2, Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center">
                <Code2 size={16} className="text-[#00d4ff]" />
              </div>
              <span className="font-heading font-semibold text-white">
                Hamid Riza<span className="text-[#00d4ff]">.</span>
              </span>
            </div>
            <p className="font-body text-neutral-600 text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer building fast, modern websites for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Projects', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-left font-body text-sm text-neutral-600 hover:text-[#00d4ff] transition-colors py-1"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/Octuple-glitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-neutral-500 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all duration-200"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.instagram.com/ahmed.web.0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-neutral-500 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://discord.com/users/hr_devs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-neutral-500 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all duration-200"
              >
                <MessageCircle size={16} />
              </a>
            </div>
            <a
              href="mailto:hamidriza01@gmail.com"
              className="font-body text-sm text-neutral-600 hover:text-[#00d4ff] transition-colors"
            >
              hamidriza01@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-neutral-700">
            Built by Hamid Riza &copy; 2026
          </p>
          <p className="font-body text-xs text-neutral-800 flex items-center gap-1">
            Made with <Heart size={12} className="text-[#00d4ff]/40 fill-[#00d4ff]/40" /> for clients worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
