import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Wrench, Layers, ShieldCheck, Ruler, Truck, Star } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Ruler,
    key: 'solutions.items.conception',
    accentColor: '#10b981',
    glowColor: 'rgba(16,185,129,0.28)',
    delay: '0ms',
  },
  {
    icon: Layers,
    key: 'solutions.items.fabrication',
    accentColor: '#6366f1',
    glowColor: 'rgba(99,102,241,0.28)',
    delay: '100ms',
  },
  {
    icon: ShieldCheck,
    key: 'solutions.items.etancheite',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.28)',
    delay: '200ms',
  },
  {
    icon: Wrench,
    key: 'solutions.items.installation',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.28)',
    delay: '300ms',
  },
  {
    icon: Truck,
    key: 'solutions.items.livraison',
    accentColor: '#ec4899',
    glowColor: 'rgba(236,72,153,0.28)',
    delay: '400ms',
  },
  {
    icon: Star,
    key: 'solutions.items.surmesure',
    accentColor: '#14b8a6',
    glowColor: 'rgba(20,184,166,0.28)',
    delay: '500ms',
  },
];

function useReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function SolutionCard({ icon: Icon, accentColor, glowColor, delay, titleKey, descKey, t }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className="group relative flex flex-col gap-5 p-7 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm transition-all duration-500 hover:border-white/20 cursor-default overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
        '--glow': glowColor,
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 24px 64px -12px ${glowColor}`; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Subtle radial glow bg */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: accentColor }}
      />

      {/* Icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${accentColor}1a`, border: `1px solid ${accentColor}40` }}
      >
        <Icon style={{ color: accentColor }} className="w-5 h-5" />
      </div>

      {/* Text */}
      <div className="space-y-2">
        <h3 className="text-base font-black font-mono tracking-tight text-white transition-colors duration-300" style={{ '--c': accentColor }}>
          {t(titleKey)}
        </h3>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          {t(descKey)}
        </p>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />
    </div>
  );
}

export default function NosSolutions() {
  const { t } = useLanguage();
  const [bannerRef, bannerVisible] = useReveal(0.1);
  const [headerRef, headerVisible] = useReveal(0.1);

  return (
    <section id="solutions" className="py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">

      {/* ── Section divider ── */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
          {t('solutions.badge')}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Hero banner ── */}
      <div
        ref={bannerRef}
        className="relative rounded-3xl overflow-hidden mb-20 border border-white/[0.07]"
        style={{
          opacity: bannerVisible ? 1 : 0,
          transform: bannerVisible ? 'translateY(0)' : 'translateY(36px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        <img
          src="/images/noSolution.png"
          alt="MAALUM — Solutions industrielles aluminium"
          className="w-full object-cover"
          style={{ maxHeight: '440px', objectPosition: 'center 30%' }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/92 via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                MAALUM
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-[3.25rem] font-black font-grotesk tracking-tight text-white leading-none mb-5">
              {t('solutions.title')}
            </h2>
            <p className="text-gray-400 text-base font-light leading-relaxed mb-8 max-w-md">
              {t('solutions.subtitle')}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_24px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.65)] hover:-translate-y-0.5"
            >
              {t('solutions.cta')}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Top-right badge */}
        <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          {t('solutions.cornerBadge')}
        </span>
      </div>

      {/* ── Grid header ── */}
      <div
        ref={headerRef}
        className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
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
              6&nbsp;{t('solutions.badge')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-grotesk tracking-tight text-white leading-none">
            {t('solutions.gridTitle')}
          </h2>
        </div>
        <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed border-l border-white/10 pl-5">
          {t('solutions.gridSubtitle')}
        </p>
      </div>

      {/* ── Solutions grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SOLUTIONS.map(({ icon, accentColor, glowColor, delay, key }) => (
          <SolutionCard
            key={key}
            icon={icon}
            accentColor={accentColor}
            glowColor={glowColor}
            delay={delay}
            titleKey={`${key}.title`}
            descKey={`${key}.desc`}
            t={t}
          />
        ))}
      </div>

      {/* ── Stats strip ── */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.07]">
        {[
          { stat: '15+', labelKey: 'solutions.stats.years' },
          { stat: '500+', labelKey: 'solutions.stats.projects' },
          { stat: '100%', labelKey: 'solutions.stats.custom' },
          { stat: '24/7', labelKey: 'solutions.stats.support' },
        ].map(({ stat, labelKey }) => (
          <div
            key={labelKey}
            className="group flex flex-col items-center justify-center gap-1.5 py-9 bg-[#0a0a0a] hover:bg-white/[0.03] transition-colors duration-300"
          >
            <span className="text-3xl font-black font-grotesk text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
              {stat}
            </span>
            <span className="text-[11px] font-mono text-gray-600 uppercase tracking-widest text-center px-3 leading-tight">
              {t(labelKey)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
