import { useState, useRef } from 'react';
import { Mail, Send, Globe, CheckCircle, MessageCircle } from 'lucide-react';
import { useIntersectionObserver } from './utils';

export default function Contact() {
  const { ref, visible } = useIntersectionObserver(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00d4ff]/50" />
              <span className="text-[#00d4ff] font-body text-sm tracking-widest uppercase">Get in Touch</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00d4ff]/50" />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
              Let's Work Together
            </h2>
            <p className="font-body text-neutral-500 text-lg max-w-lg mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something great.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#111111] rounded-2xl border border-white/5 p-6">
                <h3 className="font-heading font-semibold text-white text-lg mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={15} className="text-[#00d4ff]" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:hamidriza01@gmail.com" className="font-body text-neutral-300 text-sm hover:text-[#00d4ff] transition-colors">
                        hamidriza01@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle size={15} className="text-[#00d4ff]" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Discord</div>
                      <a href="https://discord.com/users/hr_devs" target="_blank" rel="noopener noreferrer" className="font-body text-neutral-300 text-sm hover:text-[#00d4ff] transition-colors">
                        hr_devs
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Globe size={15} className="text-[#00d4ff]" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-neutral-600 uppercase tracking-wider mb-1">Availability</div>
                      <p className="font-body text-neutral-300 text-sm">Available for projects worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00d4ff]/10 to-transparent border border-[#00d4ff]/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                  <span className="font-heading font-semibold text-white text-sm">Quick Response</span>
                </div>
                <p className="font-body text-neutral-400 text-sm leading-relaxed">
                  I typically respond within 24 hours. For urgent projects, mention it in your message.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#111111] rounded-2xl border border-white/5 p-8">
                {status === 'sent' ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mb-5">
                      <CheckCircle size={28} className="text-[#00d4ff]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">Message Sent!</h3>
                    <p className="font-body text-neutral-500 text-sm">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-5 py-2 rounded-lg text-sm font-body text-[#00d4ff] border border-[#00d4ff]/30 hover:bg-[#00d4ff]/10 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs text-neutral-500 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm font-body placeholder-neutral-700 focus:outline-none focus:border-[#00d4ff]/40 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs text-neutral-500 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm font-body placeholder-neutral-700 focus:outline-none focus:border-[#00d4ff]/40 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-xs text-neutral-500 uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project, goals, and timeline..."
                        required
                        className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-4 py-3 text-white text-sm font-body placeholder-neutral-700 focus:outline-none focus:border-[#00d4ff]/40 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)] transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#00d4ff] text-[#0a0a0a] font-heading font-semibold rounded-xl hover:bg-[#00b8e0] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#0a0a0a]/40 border-t-[#0a0a0a] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
