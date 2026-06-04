import { Star, Quote } from 'lucide-react';
import { useIntersectionObserver } from './utils';

const testimonials = [
  {
    name: 'Lars Eriksson',
    role: 'CEO, Nordicware AB',
    location: 'Stockholm, Sweden',
    avatar: 'LE',
    rating: 5,
    text: 'Hamid completely transformed our outdated website into a modern, fast platform. Our lead generation increased by 60% in the first month. He was professional, communicated clearly, and delivered ahead of schedule. I highly recommend him to any business looking for quality web development.',
  },
  {
    name: 'Maria Hofmann',
    role: 'Owner, Bistro Maria',
    location: 'Berlin, Germany',
    avatar: 'MH',
    rating: 5,
    text: 'We needed an online booking system and a beautiful menu website for our restaurant. Hamid delivered exactly what we envisioned — and more. Our customers love the new site, and online reservations have doubled. Fantastic work at a fair price.',
  },
  {
    name: "James O'Sullivan",
    role: 'Director, GrowthFirst Agency',
    location: 'Dublin, Ireland',
    avatar: 'JO',
    rating: 5,
    text: "We have worked with many developers over the years, but Hamid stands out for his attention to detail and business mindset. He does not just write code — he understands what the website needs to achieve. Our new landing page converts at 3x the rate of the old one.",
  },
];

type Testimonial = typeof testimonials[0];

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const { ref, visible } = useIntersectionObserver(0.05);

  return (
    <div
      ref={ref}
      className={`relative bg-[#111111] rounded-2xl border border-white/5 p-8 hover:border-white/10 hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote size={28} className="text-[#00d4ff]/15 mb-4" />

      <div className="flex gap-1 mb-5">
        {Array(t.rating).fill(0).map((_, s) => (
          <Star key={s} size={14} className="text-[#00d4ff] fill-[#00d4ff]" />
        ))}
      </div>

      <p className="font-body text-neutral-400 text-sm leading-relaxed mb-8 italic">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#00d4ff]/5 border border-[#00d4ff]/20 flex items-center justify-center shrink-0">
          <span className="font-heading font-semibold text-[#00d4ff] text-xs">{t.avatar}</span>
        </div>
        <div>
          <div className="font-heading font-semibold text-white text-sm">{t.name}</div>
          <div className="font-body text-neutral-600 text-xs">{t.role}</div>
          <div className="font-body text-neutral-700 text-xs">{t.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useIntersectionObserver(0.1);

  return (
    <section id="testimonials" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00d4ff]/50" />
            <span className="text-[#00d4ff] font-body text-sm tracking-widest uppercase">Client Reviews</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00d4ff]/50" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            What Clients Say
          </h2>
          <p className="font-body text-neutral-500 text-lg max-w-xl mx-auto">
            Real feedback from businesses across Europe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
