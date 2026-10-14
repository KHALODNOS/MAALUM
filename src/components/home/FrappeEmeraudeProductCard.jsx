import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, Lock, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FEATURES = [
  { icon: Wind,     labelFr: 'Étanchéité renforcée',   labelEn: 'Enhanced weatherproofing' },
  { icon: Lock,     labelFr: 'Sécurité intégrée',      labelEn: 'Integrated security' },
  { icon: Sparkles, labelFr: 'Esthétique moderne',     labelEn: 'Modern aesthetics' },
];

export default function FrappeEmeraudeProductCard() {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-[#0a1215] to-[#060c0f] border border-cyan-900/40 hover:border-cyan-400/60 transition-all duration-500 shadow-2xl hover:shadow-[0_32px_80px_-12px_rgba(0,255,255,0.18)]">

      {/* ── Image block ── */}
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: '16/10' }}>
        <img
          src="/images/product2-4.jpeg"
          alt={t('catalog.emeraudeFrappe.title')}
          className="w-full h-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c0f] via-[#060c0f]/20 to-transparent" />

        {/* Badge */}
        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-cyan-400 text-black font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)]">
          <span className="w-1.5 h-1.5 rounded-full bg-black/50 inline-block" />
          {t('catalog.emeraudeFrappe.badge')}
        </span>

        {/* Ref watermark */}
        <span className="absolute bottom-5 right-5 text-[10px] font-mono text-cyan-400/50 uppercase tracking-widest">
          REF&nbsp;·&nbsp;EM-FRAP
        </span>
      </div>

      {/* ── Content block ── */}
      <div className="flex flex-col flex-1 p-7 gap-5">

        {/* Title + desc */}
        <div className="space-y-2">
          <h3 className="text-2xl font-black font-mono tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
            {t('catalog.emeraudeFrappe.title')}
          </h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            {t('catalog.emeraudeFrappe.desc')}
          </p>
        </div>

        {/* Feature pills */}
        <ul className="flex flex-wrap gap-2">
          {FEATURES.map(({ icon: Icon, labelFr, labelEn }) => (
            <li key={labelFr} className="inline-flex items-center gap-1.5 bg-cyan-500/8 border border-cyan-500/20 rounded-full px-3 py-1 text-[11px] text-cyan-300 font-mono">
              <Icon className="w-3 h-3 shrink-0" />
              {isFr ? labelFr : labelEn}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-5 border-t border-cyan-900/40 flex items-center justify-between">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            {t('catalog.ref')}&nbsp;EM-FRAP
          </span>
          <Link
            to="/frappe-emeraude"
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.35)] hover:shadow-[0_0_32px_rgba(0,255,255,0.6)]"
          >
            {t('catalog.seeMore')}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
