import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Maximize2, Shield } from 'lucide-react';
import { IMAGES } from '../../data/emeraudeData';
import { useLanguage } from '../../context/LanguageContext';

const FEATURES = [
  { icon: Layers,    labelFr: 'Profils haute inertie',   labelEn: 'High-inertia profiles' },
  { icon: Maximize2, labelFr: 'Grandes baies vitrées',   labelEn: 'Large glazed openings' },
  { icon: Shield,    labelFr: 'Étanchéité optimale',     labelEn: 'Optimal sealing' },
];

export default function EmeraudeProductCard() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-[#0f1a14] to-[#0a0f0b] border border-emerald-900/40 hover:border-emerald-500/60 transition-all duration-500 shadow-2xl hover:shadow-[0_32px_80px_-12px_rgba(16,185,129,0.25)]">

      {/* ── Image block ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img
          src={IMAGES.hero}
          alt={t('catalog.emeraudeCoulisse.title')}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b] via-[#0a0f0b]/30 to-transparent" />

        {/* Badge */}
        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-emerald-500 text-black font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)]">
          <span className="w-1.5 h-1.5 rounded-full bg-black/50 inline-block" />
          {t('catalog.emeraudeCoulisse.badge')}
        </span>

        {/* Ref watermark */}
        <span className="absolute bottom-5 right-5 text-[10px] font-mono text-emerald-500/50 uppercase tracking-widest">
          REF&nbsp;·&nbsp;EM-COUL
        </span>
      </div>

      {/* ── Content block ── */}
      <div className="flex flex-col flex-1 p-7 gap-5">

        {/* Title + desc */}
        <div className="space-y-2">
          <h3 className="text-2xl font-black font-mono tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300">
            {t('catalog.emeraudeCoulisse.title')}
          </h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            {t('catalog.emeraudeCoulisse.desc')}
          </p>
        </div>

        {/* Feature pills */}
        <ul className="flex flex-wrap gap-2">
          {FEATURES.map(({ icon: Icon, labelFr, labelEn }) => (
            <li key={labelFr} className="inline-flex items-center gap-1.5 bg-emerald-500/8 border border-emerald-500/20 rounded-full px-3 py-1 text-[11px] text-emerald-300 font-mono">
              <Icon className="w-3 h-3 shrink-0" />
              {isFr ? labelFr : labelEn}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-5 border-t border-emerald-900/40 flex items-center justify-between">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            {t('catalog.ref')}&nbsp;EM-COUL
          </span>
          <Link
            to="/emeraude"
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_rgba(16,185,129,0.6)]"
          >
            {t('catalog.seeMore')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
