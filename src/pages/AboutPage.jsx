import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowRight, Award, Target, Eye, Heart,
  CheckCircle2, MapPin, Phone, Mail
} from 'lucide-react';

// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.2);
  const started = useRef(false);
  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Value card ───────────────────────────────────────────────────────────────
function ValueCard({ icon: Icon, accent, delay, titleKey, descKey, t }) {
  const [ref, visible] = useReveal();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      className="relative flex flex-col gap-4 p-7 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden transition-all duration-500 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
        borderColor: hovered ? 'rgba(255,255,255,0.14)' : undefined,
        boxShadow: hovered ? `0 24px 60px -12px ${accent}44` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-500"
        style={{ background: accent, opacity: hovered ? 0.12 : 0 }}
      />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300"
        style={{
          background: `${accent}18`,
          border: `1px solid ${accent}35`,
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-base font-black font-mono tracking-tight text-white">{t(titleKey)}</h3>
        <p className="text-sm text-gray-500 font-light leading-relaxed">{t(descKey)}</p>
      </div>
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}

// ─── Timeline item ────────────────────────────────────────────────────────────
function TimelineItem({ year, titleKey, descKey, t, delay, align = 'right' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className="relative flex items-start gap-4 sm:gap-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${align === 'right' ? '-20px' : '20px'})`,
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
      }}
    >
      {/* Year bubble */}
      <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-emerald-500/30 bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)] z-10">
        <span className="font-grotesk font-black text-emerald-400 text-sm leading-none">{year}</span>
      </div>
      {/* Content */}
      <div className="pt-3 space-y-1.5 flex-1">
        <h4 className="text-base font-black font-mono text-white tracking-tight">{t(titleKey)}</h4>
        <p className="text-sm text-gray-500 font-light leading-relaxed">{t(descKey)}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { t } = useLanguage();
  const [heroRef, heroVisible] = useReveal(0.05);
  const [storyRef, storyVisible] = useReveal(0.1);
  const [statsRef, statsVisible] = useReveal(0.1);

  const VALUES = [
    { icon: Award,   accent: '#10b981', delay: '0ms',   titleKey: 'about.values.excellence.title', descKey: 'about.values.excellence.desc' },
    { icon: Target,  accent: '#6366f1', delay: '100ms', titleKey: 'about.values.precision.title',  descKey: 'about.values.precision.desc'  },
    { icon: Eye,     accent: '#f59e0b', delay: '200ms', titleKey: 'about.values.innovation.title', descKey: 'about.values.innovation.desc' },
    { icon: Heart,   accent: '#ec4899', delay: '300ms', titleKey: 'about.values.client.title',     descKey: 'about.values.client.desc'     },
  ];

  const TIMELINE = [
    { year: '2009', titleKey: 'about.timeline.y2009.title', descKey: 'about.timeline.y2009.desc', delay: '0ms'   },
    { year: '2013', titleKey: 'about.timeline.y2013.title', descKey: 'about.timeline.y2013.desc', delay: '100ms' },
    { year: '2017', titleKey: 'about.timeline.y2017.title', descKey: 'about.timeline.y2017.desc', delay: '200ms' },
    { year: '2021', titleKey: 'about.timeline.y2021.title', descKey: 'about.timeline.y2021.desc', delay: '300ms' },
    { year: '2024', titleKey: 'about.timeline.y2024.title', descKey: 'about.timeline.y2024.desc', delay: '400ms' },
  ];

  return (
    <div className="font-inter bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />

      {/* ════════════════════════════════════════════
          HERO — full-width image + overlay text
      ════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          ref={heroRef}
          className="absolute inset-0 transition-transform duration-[1.2s] ease-out"
          style={{ transform: heroVisible ? 'scale(1)' : 'scale(1.06)' }}
        >
          <img
            src="/images/ABOUT USS.png"
            alt="MAALUM — À propos"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-[#0a0a0a]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20 pt-32 sm:pt-36">
          <div
            className="max-w-2xl"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                MAALUM — {t('about.badge')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-grotesk tracking-tight text-white leading-none mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
              {t('about.hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#notre-histoire"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_24px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 group"
              >
                {t('about.hero.cta1')}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/[0.06] font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300"
              >
                {t('about.hero.cta2')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════ */}
      <div
        ref={statsRef}
        className="border-y border-white/[0.07] bg-white/[0.02]"
        style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
          {[
            { target: 15, suffix: '+', labelKey: 'about.stats.years'    },
            { target: 500,suffix: '+', labelKey: 'about.stats.projects' },
            { target: 98, suffix: '%', labelKey: 'about.stats.delays'   },
            { target: 24, suffix: '/7',labelKey: 'about.stats.support'  },
          ].map(({ target, suffix, labelKey }) => (
            <div key={labelKey} className="flex flex-col items-center justify-center py-8 sm:py-10 gap-1.5 bg-[#0a0a0a]">
              <span className="text-3xl sm:text-4xl font-black font-grotesk text-emerald-400">
                <Counter target={target} suffix={suffix} />
              </span>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest text-center leading-tight px-3">
                {t(labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          NOTRE HISTOIRE — split layout
      ════════════════════════════════════════════ */}
      <section id="notre-histoire" className="py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

          {/* Left — image collage */}
          <div
            ref={storyRef}
            className="relative"
            style={{
              opacity: storyVisible ? 1 : 0,
              transform: storyVisible ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden border border-white/[0.07] aspect-[4/5]">
              <img
                src="/images/ABOUT USS.png"
                alt="MAALUM atelier"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent rounded-3xl" />
            </div>

            {/* Floating badge — founded */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#0f1a14] border border-emerald-500/30 rounded-2xl p-4 sm:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">{t('about.founded')}</p>
              <p className="text-4xl font-black font-grotesk text-white leading-none">2009</p>
            </div>

            {/* Floating badge — location */}
            <div className="absolute -top-4 left-2 sm:-top-6 sm:-left-0 md:-left-6 bg-[#111] border border-white/10 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-xl">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{t('about.location')}</p>
                <p className="text-sm font-black font-mono text-white">Algérie</p>
              </div>
            </div>
          </div>

          {/* Right — story text */}
          <div
            style={{
              opacity: storyVisible ? 1 : 0,
              transform: storyVisible ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s',
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                {t('about.story.eyebrow')}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-grotesk tracking-tight text-white leading-tight mb-6">
              {t('about.story.title')}
            </h2>

            <div className="space-y-4 text-gray-400 font-light leading-relaxed text-base">
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
              <p>{t('about.story.p3')}</p>
            </div>

            {/* Checklist */}
            <ul className="mt-8 space-y-3">
              {['about.story.c1', 'about.story.c2', 'about.story.c3', 'about.story.c4'].map(key => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 font-light">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          NOS VALEURS
      ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">{t('about.values.badge')}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black font-grotesk tracking-tight text-white text-center mb-12">
          {t('about.values.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(v => (
            <ValueCard key={v.titleKey} {...v} t={t} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TIMELINE
      ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">{t('about.timeline.badge')}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black font-grotesk tracking-tight text-white text-center mb-14">
          {t('about.timeline.title')}
        </h2>

        {/* Timeline list */}
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/15 to-transparent" />

          <div className="space-y-10">
            {TIMELINE.map(item => (
              <TimelineItem key={item.year} {...item} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTACT STRIP
      ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-[#0a0a0a] p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{t('about.contact.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-black font-grotesk text-white leading-tight">
              {t('about.contact.title')}
            </h2>
            <p className="text-gray-500 text-base font-light max-w-md">
              {t('about.contact.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="tel:0708123381"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/[0.06] font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 group"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              {t('about.contact.call')}
            </a>
            <a
              href="mailto:maalumaluminium.contact@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 group"
            >
              <Mail className="w-4 h-4" />
              {t('about.contact.email')}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
