import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  MessageSquare, Pencil, Settings, HardHat, Truck, HeadphonesIcon,
  ChevronRight, ArrowRight
} from 'lucide-react';

// ─── Service data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    num: '01',
    icon: MessageSquare,
    key: 'services.items.conseil',
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.22)',
  },
  {
    num: '02',
    icon: Pencil,
    key: 'services.items.etude',
    accent: '#6366f1',
    glow: 'rgba(99,102,241,0.22)',
  },
  {
    num: '03',
    icon: Settings,
    key: 'services.items.fabrication',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.22)',
  },
  {
    num: '04',
    icon: HardHat,
    key: 'services.items.pose',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.22)',
  },
  {
    num: '05',
    icon: Truck,
    key: 'services.items.livraison',
    accent: '#ec4899',
    glow: 'rgba(236,72,153,0.22)',
  },
  {
    num: '06',
    icon: HeadphonesIcon,
    key: 'services.items.sav',
    accent: '#14b8a6',
    glow: 'rgba(20,184,166,0.22)',
  },
];

const PROCESS_STEPS = [
  { key: 'services.process.contact', num: '1' },
  { key: 'services.process.devis',   num: '2' },
  { key: 'services.process.prod',    num: '3' },
  { key: 'services.process.pose',    num: '4' },
  { key: 'services.process.livraison', num: '5' },
];

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

// ─── Single accordion row ─────────────────────────────────────────────────────
function ServiceRow({ num, icon: Icon, accent, glow, titleKey, descKey, t, delay, index }) {
  const [open, setOpen] = useState(false);
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className="group border-b border-white/[0.07] last:border-0 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
      }}
      onClick={() => setOpen(v => !v)}
    >
      {/* Row header */}
      <div
        className="flex items-center gap-5 py-6 transition-all duration-300"
        style={{ paddingLeft: open ? '8px' : '0' }}
        onMouseEnter={e => { e.currentTarget.parentElement.style.boxShadow = `inset 3px 0 0 ${accent}`; }}
        onMouseLeave={e => { if (!open) e.currentTarget.parentElement.style.boxShadow = 'none'; }}
      >
        {/* Number */}
        <span
          className="font-grotesk font-black text-[2rem] leading-none tabular-nums shrink-0 transition-colors duration-300"
          style={{ color: open ? accent : 'rgba(255,255,255,0.12)' }}
        >
          {num}
        </span>

        {/* Icon bubble */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: open ? `${accent}22` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${open ? accent + '50' : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          <Icon
            className="w-4 h-4 transition-colors duration-300"
            style={{ color: open ? accent : 'rgba(255,255,255,0.4)' }}
          />
        </div>

        {/* Title */}
        <span
          className="flex-1 font-mono font-black text-sm md:text-base uppercase tracking-tight transition-colors duration-300"
          style={{ color: open ? '#fff' : 'rgba(255,255,255,0.75)' }}
        >
          {t(titleKey)}
        </span>

        {/* Chevron */}
        <ChevronRight
          className="w-4 h-4 shrink-0 transition-all duration-300"
          style={{
            color: open ? accent : 'rgba(255,255,255,0.2)',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      {/* Expandable desc */}
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <p className="pb-6 pl-[calc(2rem+2.5rem+1.25rem)] pr-6 text-sm text-gray-400 font-light leading-relaxed">
          {t(descKey)}
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function NosServices() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useReveal(0.1);
  const [processRef, processVisible] = useReveal(0.1);

  return (
    <section id="services" className="py-28 px-6 max-w-7xl mx-auto">

      {/* ── Section divider ── */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
          {t('services.badge')}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Header + accordion layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">

        {/* LEFT — sticky header + CTA */}
        <div
          ref={headerRef}
          className="lg:sticky lg:top-28 flex flex-col gap-8"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              MAALUM — {t('services.badge')}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-black font-grotesk tracking-tight text-white leading-[1.05]">
            {t('services.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-base font-light leading-relaxed border-l-2 border-emerald-500/40 pl-4">
            {t('services.subtitle')}
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-emerald-500 border border-white/10 hover:border-transparent text-white hover:text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 group"
          >
            {t('services.cta')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Mini quality badge */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] mt-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-emerald-400 font-black font-grotesk text-xs">✓</span>
            </div>
            <div>
              <p className="text-white font-mono font-black text-[11px] uppercase tracking-widest mb-0.5">
                {t('services.guarantee.title')}
              </p>
              <p className="text-gray-600 text-xs font-light leading-tight">
                {t('services.guarantee.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — accordion list */}
        <div className="divide-y-0">
          {SERVICES.map(({ num, icon, key, accent, glow }, i) => (
            <ServiceRow
              key={key}
              num={num}
              icon={icon}
              accent={accent}
              glow={glow}
              titleKey={`${key}.title`}
              descKey={`${key}.desc`}
              t={t}
              delay={`${i * 80}ms`}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ── Process timeline ── */}
      <div
        ref={processRef}
        className="mt-24"
        style={{
          opacity: processVisible ? 1 : 0,
          transform: processVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Timeline header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
            {t('services.processLabel')}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Connector line (lg only) */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent z-0" />

          {PROCESS_STEPS.map(({ key, num }, i) => (
            <div
              key={key}
              className="relative z-10 flex flex-col items-center text-center gap-3"
              style={{
                opacity: processVisible ? 1 : 0,
                transform: processVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.55s ease ${i * 100}ms, transform 0.55s ease ${i * 100}ms`,
              }}
            >
              {/* Dot */}
              <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.12)]">
                <span className="font-grotesk font-black text-emerald-400 text-base">{num}</span>
              </div>
              <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest leading-tight px-1">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
