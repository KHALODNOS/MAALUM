import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  FileText,
  Sparkles,
  CheckCircle2,
  Headphones,
  ArrowRight,
  Clock,
  ShieldCheck,
  Building2
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

export default function BesoinDaide() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useReveal(0.1);
  const [contentRef, contentVisible] = useReveal(0.08);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(1); // Default open first question

  // Fallback items if translation key missing
  const rawItems = t('faq.items');
  const items = Array.isArray(rawItems) ? rawItems : [];

  const categories = [
    { key: 'all', label: t('faq.categories.all') || 'Toutes les questions' },
    { key: 'devis', label: t('faq.categories.devis') || 'Devis & Tarifs' },
    { key: 'produits', label: t('faq.categories.produits') || 'Produits & Sur-mesure' },
    { key: 'garantie', label: t('faq.categories.garantie') || 'Pose & Garanties' },
  ];

  // Filter items
  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-28 px-6 max-w-7xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      {/* ── Section divider ── */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
          {t('faq.badge') || "Besoin d'aide ?"}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Section title ── */}
      <div
        ref={headerRef}
        className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
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
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              {t('faq.badge') || "Besoin d'aide ?"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-grotesk tracking-tight text-white leading-none">
            {t('faq.title') || "FOIRE AUX QUESTIONS & ASSISTANCE"}
          </h2>
        </div>
        <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed border-l border-white/10 pl-5">
          {t('faq.subtitle') || "Trouvez des réponses rapides à vos questions sur nos menuiseries aluminium, nos devis et nos services d'installation."}
        </p>
      </div>

      {/* ── Main Layout: Grid 12 cols ── */}
      <div
        ref={contentRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
        }}
      >
        {/* ── Left Column: Categories + Search + FAQ Accordion (8 cols) ── */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">

          {/* Search bar & Category filters */}
          <div className="space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('faq.searchPlaceholder') || "Rechercher une question..."}
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500/60 focus:bg-white/[0.05] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 font-inter"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white transition-colors font-mono"
                >
                  Effacer
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-emerald-500 text-black font-black shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                        : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3 pt-2">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <HelpCircle className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 text-sm font-light">
                  Aucune question ne correspond à votre recherche.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-3 text-xs text-emerald-400 hover:underline font-mono"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              filteredItems.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-emerald-500/40 bg-gradient-to-r from-emerald-950/30 via-white/[0.03] to-[#0a0a0a] shadow-[0_8px_32px_rgba(16,185,129,0.08)]'
                        : 'border-white/[0.07] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-emerald-400 shadow-[0_0_8px_#10b981]' : 'bg-gray-600'}`} />
                        <span className="text-base md:text-lg font-bold font-grotesk tracking-tight text-white leading-snug">
                          {item.q}
                        </span>
                      </div>
                      <div className={`p-2 rounded-lg transition-transform duration-300 ${isOpen ? 'bg-emerald-500/20 text-emerald-400 rotate-180' : 'bg-white/5 text-gray-400'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-300 font-light leading-relaxed border-t border-white/[0.05]">
                        <p className="mt-2 text-gray-300">{item.a}</p>
                        <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center gap-4 text-xs font-mono text-emerald-400/90">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            Expertise MAALUM
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="flex items-center gap-1.5 text-gray-400">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            Normes & Qualité certifiées
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* ── Right Column: High-End Visual Card & Direct Support (5 cols) ── */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">
          <div className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111814] to-[#0a0a0a] overflow-hidden p-6 md:p-8 space-y-6 shadow-2xl hover:border-emerald-500/40 transition-all duration-500">

            {/* Glowing Top Radial */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Image Banner */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Assistance Technique & Conseil Aluminium MAALUM"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md text-black px-3 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {t('faq.responseBadge') || "Réponse en < 24h"}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  MAALUM Aluminium
                </span>
                <span className="text-emerald-400 font-bold">100% sur-mesure</span>
              </div>
            </div>

            {/* Content info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-black font-grotesk tracking-tight text-white">
                  {t('faq.cardTitle') || "Un projet spécifique ?"}
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {t('faq.cardDesc') || "Nos conseillers techniques sont à votre disposition pour vous guider pas à pas dans votre choix et établir une étude sur-mesure."}
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5 pt-2 border-t border-white/[0.07]">
              {[
                "Étude personnalisée de vos métrés",
                "Conseils sur le choix des profilés",
                "Devis gratuit détaillé sous 24h"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 group/btn"
              >
                <FileText className="w-4 h-4" />
                <span>{t('faq.ctaDevis') || "Obtenir un devis gratuit"}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>

              <a
                href="https://wa.me/213708123381"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-mono text-xs tracking-wider transition-all duration-300 hover:border-emerald-500/40"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{t('faq.ctaContact') || "Discuter sur WhatsApp"}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
