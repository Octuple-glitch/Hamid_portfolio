import { Code2, Layers, RefreshCw } from 'lucide-react';
import { useIntersectionObserver } from './utils';

const services = [
  {
    icon: Code2,
    title: 'Custom Website Development',
    description: 'From a simple landing page to a complex web platform — I build pixel-perfect, performant websites tailored to your brand and business goals.',
    features: ['Mobile-first responsive design', 'SEO optimized', 'Fast loading & Core Web Vitals'],
  },
  {
    icon: Layers,
    title: 'Full Stack Web Applications',
    description: 'End-to-end web applications with custom APIs, database design, authentication, and admin dashboards. Scalable architecture that grows with your business.',
    features: ['React / Next.js frontend', 'Node.js + MongoDB backend', 'REST API development'],
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign & Optimization',
    description: 'Is your current website outdated or slow? Transform it into a modern, fast experience that converts visitors into customers.',
    features: ['Performance audits', 'UX/UI modernization', 'Speed optimization'],
  },
];

type Service = typeof services[0];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useIntersectionObserver(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative bg-[#111111] rounded-2xl border border-white/5 p-8 hover:border-[#00d4ff]/20 hover:shadow-[0_0_40px_rgba(0,212,255,0.06)] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/15 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300">
        <Icon size={22} className="text-[#00d4ff]" />
      </div>

      <h3 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
        {service.title}
      </h3>
      <p className="font-body text-neutral-500 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm font-body text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/60 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d4ff]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useIntersectionObserver(0.1);

  return (
    <section id="services" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00d4ff]/50" />
            <span className="text-[#00d4ff] font-body text-sm tracking-widest uppercase">What I Do</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00d4ff]/50" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Services I Offer
          </h2>
          <p className="font-body text-neutral-500 text-lg max-w-xl mx-auto">
            Professional web development services for businesses that want results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
