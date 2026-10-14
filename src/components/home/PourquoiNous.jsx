import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Award, Clock, Users, BadgeCheck, Zap, TrendingUp, ArrowRight
} from 'lucide-react';

// ─── Reveal hook ─────────────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
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
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Bento card ──────────────────────────────────────────────────────────────
function BentoCard({
  children, className = '', delay = '0ms', glowColor = 'transparent', style = {}
}) {
  const [ref, visible] = useReveal(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-[#0a0a0a] overflow-hidden transition-all duration-500 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
        transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}, border-color 0.3s ease`,
        borderColor: hovered ? 'rgba(255,255,255,0.14)' : undefined,
        boxShadow: hovered ? `0 32px 72px -16px ${glowColor}` : undefined,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radial glow on hover */}
      <div
        className="absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${glowColor}, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function PourquoiNous() {
  const { t } = useLanguage();
  const [divRef, divVisible] = useReveal(0.1);

  return (
    <section id="why-us" className="py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* ── Section divider ── */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
          {t('why.badge')}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Section title ── */}
      <div
        ref={divRef}
        className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        style={{
          opacity: divVisible ? 1 : 0,
          transform: divVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              MAALUM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-grotesk tracking-tight text-white leading-none">
            {t('why.title')}
          </h2>
        </div>
        <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed border-l border-white/10 pl-5">
          {t('why.subtitle')}
        </p>
      </div>

      {/* ── BENTO GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

        {/* ── CARD 1 — Heritage (tall, spans 2 rows on lg) ── */}
        <BentoCard
          className="lg:row-span-2 flex flex-col justify-between p-8 min-h-[340px]"
          delay="0ms"
          glowColor="rgba(16,185,129,0.18)"
        >
          {/* Top */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-black font-mono tracking-tight text-white leading-tight">
              {t('why.cards.heritage.title')}
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t('why.cards.heritage.desc')}
            </p>
          </div>

          {/* Big stat */}
          <div className="mt-8 pt-8 border-t border-white/[0.07]">
            <div className="text-7xl font-black font-grotesk text-emerald-400 leading-none tracking-tight">
              <Counter target={15} suffix="+" />
            </div>
            <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mt-2">
              {t('why.cards.heritage.stat')}
            </p>
          </div>
        </BentoCard>

        {/* ── CARD 2 — Projets réalisés ── */}
        <BentoCard
          className="flex flex-col justify-between p-8 min-h-[180px]"
          delay="80ms"
          glowColor="rgba(99,102,241,0.18)"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="text-base font-black font-mono tracking-tight text-white">
                {t('why.cards.projects.title')}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {t('why.cards.projects.desc')}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.07]">
            <div className="text-5xl font-black font-grotesk text-indigo-400 leading-none">
              <Counter target={500} suffix="+" />
            </div>
            <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mt-1">
              {t('why.cards.projects.stat')}
            </p>
          </div>
        </BentoCard>

        {/* ── CARD 3 — Délais garantis ── */}
        <BentoCard
          className="flex flex-col justify-between p-8 min-h-[180px]"
          delay="160ms"
          glowColor="rgba(245,158,11,0.18)"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-base font-black font-mono tracking-tight text-white">
              {t('why.cards.delays.title')}
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t('why.cards.delays.desc')}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.07]">
            <div className="text-5xl font-black font-grotesk text-amber-400 leading-none">
              <Counter target={98} suffix="%" />
            </div>
            <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mt-1">
              {t('why.cards.delays.stat')}
            </p>
          </div>
        </BentoCard>

        {/* ── CARD 4 — Équipes certifiées ── */}
        <BentoCard
          className="flex flex-col justify-between p-8 min-h-[180px]"
          delay="240ms"
          glowColor="rgba(59,130,246,0.18)"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <h3 className="text-base font-black font-mono tracking-tight text-white">
              {t('why.cards.team.title')}
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t('why.cards.team.desc')}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.07]">
            <div className="text-5xl font-black font-grotesk text-blue-400 leading-none">
              <Counter target={100} suffix="%" />
            </div>
            <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest mt-1">
              {t('why.cards.team.stat')}
            </p>
          </div>
        </BentoCard>

        {/* ── CARD 5 — Qualité matériaux ── */}
        <BentoCard
          className="flex flex-col justify-between p-8 min-h-[180px]"
          delay="320ms"
          glowColor="rgba(20,184,166,0.18)"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
              <BadgeCheck className="w-4 h-4 text-teal-400" />
            </div>
            <h3 className="text-base font-black font-mono tracking-tight text-white">
              {t('why.cards.quality.title')}
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t('why.cards.quality.desc')}
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.07]">
            <div className="flex flex-wrap gap-2 mt-1">
              {['ISO', 'CE', 'NF'].map(label => (
                <span
                  key={label}
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/25 text-teal-300 font-mono font-black text-[10px] tracking-widest"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </BentoCard>

        {/* ── CARD 6 — Réactivité CTA (wide, full width on md, spans 2 cols on lg) ── */}
        <BentoCard
          className="md:col-span-2 lg:col-span-1 flex flex-col justify-between p-8 min-h-[180px] bg-gradient-to-br from-emerald-950/60 to-[#0a0a0a]"
          delay="400ms"
          glowColor="rgba(16,185,129,0.22)"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-3">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-black font-mono tracking-tight text-white">
              {t('why.cards.reactivity.title')}
            </h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              {t('why.cards.reactivity.desc')}
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_36px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 group"
          >
            {t('why.cta')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </BentoCard>
      </div>

      {/* ── Bottom trust bar ── */}
      <div className="mt-6 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex flex-wrap items-center justify-between gap-6">
        <p className="text-[11px] font-mono text-gray-600 uppercase tracking-widest">
          {t('why.trust.label')}
        </p>
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          {[
            { key: 'why.trust.i1', icon: '🏅' },
            { key: 'why.trust.i2', icon: '🔒' },
            { key: 'why.trust.i3', icon: '🌍' },
            { key: 'why.trust.i4', icon: '⚡' },
          ].map(({ key, icon }) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-base">{icon}</span>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                {t(key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
