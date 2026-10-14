import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import {
  Eye,
  Maximize2,
  X,
  FileText,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Download
} from 'lucide-react';
import {
  FRAPPE_PROFILES_DATA,
  FRAPPE_ACCESSORIES_CATEGORIES,
  FRAPPE_ACCESSORIES_DATA,
  FRAPPE_TECHNICAL_DOCS,
  FRAPPE_IMAGES
} from '../data/frappeData';
import { useLanguage } from '../context/LanguageContext';

export default function EmeraudeProductPage() {
  const { t } = useLanguage();
  const p = (key) => t(`emeraudeFrappePage.${key}`);

  const [infoUnlocked, setInfoUnlocked] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // Profile modal / drawer state
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Accessory category filter state
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleUnlockInfo = () => {
    setInfoUnlocked(true);
    setTimeout(() => {
      const overviewEl = document.getElementById('overview');
      if (overviewEl) {
        overviewEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  useEffect(() => {
    if (!infoUnlocked) return;
    const sections = ['overview', 'system', 'profiles', 'accessories', 'documentation'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [infoUnlocked]);

  const filteredAccessories = activeCategory === 'all'
    ? FRAPPE_ACCESSORIES_DATA
    : FRAPPE_ACCESSORIES_DATA.filter(acc => acc.category === activeCategory);

  return (
    <div className="bg-[#0b0c10] text-[#e0e6ed] min-h-screen font-sans selection:bg-[#204060] selection:text-white pb-24 pt-24 sm:pt-28">
      {/* GLOBAL WEBSITE NAVBAR */}
      <Navbar />

      {/* BACKGROUND GRAPHICS */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* PRODUCT SUB-NAVBAR */}
      <header className="sticky top-[130px] sm:top-[95px] z-40 bg-[#0b0c10]/95 backdrop-blur-md border-b border-gray-800/80 border-t border-t-gray-700/50 px-3 sm:px-6 py-2.5 sm:py-3 transition-all mt-2 mb-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-6 bg-[#00FFFF] rounded-full inline-block shadow-[0_0_12px_rgba(0,255,255,0.5)]"></span>
            <div>
              <h1 className="text-sm sm:text-lg font-bold tracking-wider text-white uppercase font-mono">EMERAUDE FRAPPE</h1>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">{p('subNavSubtitle')}</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 bg-[#141824]/80 p-1.5 rounded-full border border-gray-800/80 text-xs font-mono">
            {[
              { id: 'overview',      labelKey: 'nav.overview' },
              { id: 'system',        labelKey: 'nav.system' },
              { id: 'profiles',      labelKey: 'nav.profiles' },
              { id: 'accessories',   labelKey: 'nav.accessories' },
              { id: 'documentation', labelKey: 'nav.documentation' },
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${activeSection === item.id
                  ? 'bg-[#00FFFF] text-black font-semibold shadow-lg shadow-[#00FFFF]/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
              >
                {p(item.labelKey)}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-gray-900 border border-gray-700 text-gray-300">
              {p('badge')}
            </span>
          </div>
        </div>
      </header>


      <main className="relative z-10">
        <div className="space-y-16 sm:space-y-32 pt-6 sm:pt-8 transition-all duration-700">
          {/* 3. SECTION 1 — LA FENÊTRE EN ALUMINIUM */}
          <section id="overview" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-800/80 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Text & Features */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-mono tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse"></span>
                  <span>{p('overview.badge')}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {p('overview.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-cyan-300 to-teal-200">{p('overview.titleHighlight')}</span>
                </h2>

                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                  {p('overview.desc')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {p('overview.features').map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#121622]/90 border border-gray-800/90 text-sm font-medium text-gray-200 hover:border-[#00FFFF]/40 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#profiles"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('profiles')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-[#00FFFF] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
                  >
                    <span>{p('overview.cta')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Image 1 (product2-4.jpeg) */}
              <div className="lg:col-span-6">
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#121622] to-black border border-gray-800 p-4 shadow-2xl transition-all duration-500 hover:border-[#00FFFF]/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/80 flex items-center justify-center">
                    <img
                      src="/images/product2-4.jpeg"
                      alt="La Fenêtre en Aluminium - Vue d'ensemble"
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                    <button
                      onClick={() => { setLightboxImage('/images/product2-4.jpeg'); setLightboxTitle('La Fenêtre en Aluminium — Vue d\'ensemble'); }}
                      className="absolute bottom-4 right-4 p-3 bg-black/70 backdrop-blur-md hover:bg-[#00FFFF] hover:text-black text-white rounded-xl border border-white/20 transition-all duration-300"
                      title="Agrandir l'image"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. SECTION 2 — LA COUPE DU PROFILÉ ALUMINIUM */}
          <section id="system" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-800/80 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column (Image 2: product2.jpeg - 3D Technical Cutaway) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#121622] to-black border border-gray-800 p-4 shadow-2xl transition-all duration-500 hover:border-[#00FFFF]/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/80 flex items-center justify-center">
                    <img
                      src="/images/product2.jpeg"
                      alt="La Coupe du Profilé Aluminium - Vue technique 3D"
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                    <button
                      onClick={() => { setLightboxImage('/images/product2.jpeg'); setLightboxTitle('La Coupe du Profilé Aluminium — Section Technique 3D'); }}
                      className="absolute bottom-4 right-4 p-3 bg-black/70 backdrop-blur-md hover:bg-[#00FFFF] hover:text-black text-white rounded-xl border border-white/20 transition-all duration-300"
                      title="Agrandir la coupe technique"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Text & Features */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-mono tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#00FFFF]"></span>
                  <span>{p('system.badge')}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {p('system.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-cyan-300 to-teal-200">{p('system.titleHighlight')}</span>
                </h2>

                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                  {p('system.desc')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {p('system.points').map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#121622]/90 border border-gray-800/90 text-sm font-medium text-gray-200 hover:border-[#00FFFF]/40 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactEl = document.getElementById('contact') || document.querySelector('footer');
                      contactEl?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-transparent border-2 border-[#00FFFF] text-[#00FFFF] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00FFFF] hover:text-black transition-all duration-300"
                  >
                    <span>{p('system.cta')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 4. SYSTEM CONSTRUCTION */}


          {/* 5. PROFILES SECTION */}
          <section id="profiles" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-800 pt-16 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono uppercase">
                    <span>{p('profiles.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">{p('profiles.title')}</h2>
                  <p className="text-lg text-gray-400 font-light">{p('profiles.subtitle')}</p>
                </div>

                <button
                  onClick={() => { setLightboxImage(FRAPPE_IMAGES.profiles); setLightboxTitle(p('profiles.viewOriginal')); }}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-700 text-xs font-mono text-gray-300 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#00FFFF]" />
                  <span>{p('profiles.viewOriginal')}</span>
                </button>
              </div>

              {/* Interactive Table */}
              <div className="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-mono">
                    <thead className="bg-gray-900/90 border-b border-gray-800 text-xs uppercase text-gray-400 tracking-wider">
                      <tr>
                        <th className="py-4 px-6">{p('profiles.colProfile')}</th>
                        <th className="py-4 px-6">{p('profiles.colDesc')}</th>
                        <th className="py-4 px-6 text-right">Ix (cm⁴)</th>
                        <th className="py-4 px-6 text-right">Iy (cm⁴)</th>
                        <th className="py-4 px-6 text-center">{p('profiles.colFiche')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 text-gray-300">
                      {FRAPPE_PROFILES_DATA.map((prof) => (
                        <tr
                          key={prof.ref}
                          onClick={() => setSelectedProfile(prof)}
                          className="hover:bg-[#00FFFF]/10 cursor-pointer transition-colors group"
                        >
                          <td className="py-4 px-6 font-bold text-[#00FFFF] group-hover:underline">
                            {prof.ref}
                          </td>
                          <td className="py-4 px-6 text-gray-300 font-sans">
                            {prof.type}
                          </td>
                          <td className="py-4 px-6 text-right text-gray-200 font-bold">
                            {prof.ix}
                          </td>
                          <td className="py-4 px-6 text-right text-gray-200 font-bold">
                            {prof.iy}
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="inline-flex p-1.5 rounded-lg bg-gray-800 group-hover:bg-[#00FFFF] group-hover:text-black text-gray-400 transition-colors">
                              <ChevronRight className="w-4 h-4" />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-xs font-mono text-gray-400 flex items-center justify-between">
                <span>{p('profiles.note')}</span>
                <span className="text-emerald-400">{p('profiles.refsCount')}</span>
              </div>
            </div>
          </section>

          {/* 6. ACCESSORIES SECTION */}
          <section id="accessories" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-800 pt-16 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-mono uppercase">
                    <span>{p('accessories.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">{p('accessories.title')}</h2>
                  <p className="text-lg text-gray-400 font-light">{p('accessories.subtitle')}</p>
                </div>
              </div>

              {/* Download & Full Technical Sheet Banner */}
              <div className="bg-gradient-to-r from-[#141d28] via-[#121622] to-[#182535] p-6 rounded-2xl border border-[#00FFFF]/30 shadow-xl space-y-4">
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00FFFF] uppercase tracking-widest">
                      <FileText className="w-4 h-4" />
                      <span>{p('accessories.catalogLabel')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{p('accessories.downloadTitle')}</h3>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      {p('accessories.downloadDesc')}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto shrink-0">
                    <a
                      href={FRAPPE_IMAGES.accessories}
                      download="Emeraude_Frappe_Accessoires_MD500.jpeg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-[#00FFFF] hover:bg-cyan-300 text-black font-mono text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-[#00FFFF]/20 transition-all duration-200 text-center"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>{p('accessories.downloadPage1')}</span>
                    </a>
                    <button
                      onClick={() => {
                        setLightboxImage(FRAPPE_IMAGES.accessories);
                        setLightboxTitle("Planche Accessoires Série à frappe MD500");
                      }}
                      className="px-5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-mono text-xs font-bold flex items-center justify-center space-x-2 transition-all duration-200 text-center"
                    >
                      <Eye className="w-4 h-4 shrink-0" />
                      <span>{p('accessories.downloadPage2')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {FRAPPE_ACCESSORIES_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${activeCategory === cat.id
                      ? 'bg-[#00FFFF] text-black font-bold border-cyan-300 shadow-md shadow-[#00FFFF]/20'
                      : 'bg-gray-900 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Professional Nomenclature Table / Cards */}
              <div className="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-mono">
                    <thead className="bg-gray-900/90 border-b border-gray-800 text-xs uppercase text-gray-400 tracking-wider">
                      <tr>
                        <th className="py-4 px-6 w-16 text-center">{p('accessories.colNum')}</th>
                        <th className="py-4 px-6 w-36">{p('accessories.colRef')}</th>
                        <th className="py-4 px-6">{p('accessories.colDesignation')}</th>
                        <th className="py-4 px-6 w-48">{p('accessories.colCategory')}</th>
                        <th className="py-4 px-6 text-center w-52">{p('accessories.colSource')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 text-gray-300">
                      {filteredAccessories
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((acc) => (
                          <tr
                            key={acc.id}
                            className="hover:bg-[#00FFFF]/10 transition-colors group"
                          >
                            <td className="py-4 px-6 text-center text-xs font-bold text-gray-500 group-hover:text-[#00FFFF]">
                              {String(acc.id).padStart(2, '0')}
                            </td>
                            <td className="py-4 px-6 font-bold text-[#00FFFF]">
                              <span className="px-2.5 py-1 rounded bg-gray-900 border border-gray-800 inline-block">
                                {acc.ref}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-gray-200 font-sans font-medium text-base">
                              {acc.name}
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-gray-900 border border-gray-700 text-gray-300">
                                {acc.categoryLabel || acc.category}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center">
                              <button
                                onClick={() => {
                                  setLightboxImage(acc.image);
                                  setLightboxTitle(`${acc.source} — ${acc.ref} (${acc.name})`);
                                }}
                                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-[#00FFFF] hover:text-black border border-gray-700 text-xs text-gray-300 transition-colors"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>{acc.source}</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination controls */}
                {Math.ceil(filteredAccessories.length / itemsPerPage) > 1 && (
                  <div className="p-4 border-t border-gray-800 bg-gray-900/50 flex items-center justify-between font-mono text-xs text-gray-400">
                    <span>
                      {p('accessories.pagination')
                        .replace('{from}', ((currentPage - 1) * itemsPerPage) + 1)
                        .replace('{to}', Math.min(currentPage * itemsPerPage, filteredAccessories.length))
                        .replace('{total}', filteredAccessories.length)}
                    </span>

                    <div className="flex items-center space-x-2">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
                      >
                        {p('accessories.prev')}
                      </button>

                      <div className="flex items-center space-x-1">
                        {Array.from({ length: Math.ceil(filteredAccessories.length / itemsPerPage) }, (_, i) => i + 1).map(page => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${currentPage === page
                              ? 'bg-[#00FFFF] text-black shadow-md shadow-[#00FFFF]/20'
                              : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                              }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button
                        disabled={currentPage === Math.ceil(filteredAccessories.length / itemsPerPage)}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredAccessories.length / itemsPerPage)))}
                        className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
                      >
                        {p('accessories.next')}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 text-xs font-mono text-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>{p('accessories.note')}</span>
                <span className="text-[#00FFFF]">{p('accessories.refsCount')}</span>
              </div>
            </div>
          </section>

          {/* 7. ORIGINAL TECHNICAL DOCUMENTATION */}
          <section id="documentation" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-t border-gray-800 pt-16 space-y-8">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-mono uppercase">
                  <span>{p('documentation.badge')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">{p('documentation.title')}</h2>
                <p className="text-lg text-gray-400 font-light">{p('documentation.subtitle')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FRAPPE_TECHNICAL_DOCS.map((doc) => (
                  <div
                    key={doc.id}
                    className="group rounded-2xl bg-[#121622] border border-gray-800 hover:border-[#00FFFF]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg"
                  >
                    <div
                      onClick={() => { setLightboxImage(doc.image); setLightboxTitle(doc.title); }}
                      className="aspect-[3/4] bg-black relative overflow-hidden cursor-pointer flex items-center justify-center p-2"
                    >
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/30 pointer-events-none" />
                      <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white group-hover:bg-[#00FFFF] group-hover:text-black transition-colors" title="Agrandir">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-5 space-y-4 flex flex-col justify-between flex-grow">
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-[#00FFFF] font-bold uppercase tracking-wider block">
                          {doc.docLabel || p('documentation.docLabel')}
                        </span>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          {doc.subtitle}
                        </p>
                      </div>

                      <a
                        href={doc.image}
                        download={`Frappe_MD500_${doc.title.replace(/\s+/g, '_')}.jpeg`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-[#00FFFF] text-gray-300 hover:text-black font-mono text-xs font-semibold flex items-center justify-center space-x-2 border border-gray-800 hover:border-cyan-400 transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                        <span>{p('documentation.download')}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

      </main >

      {/* ==================================================
          PROFILE EXPANDABLE MODAL / DRAWER
          ================================================== */}
      {
        selectedProfile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProfile(null)}
          >
            <div
              className="relative w-full max-w-md bg-[#121622] border border-gray-700 rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-3.5 right-3.5 p-1.5 text-gray-400 hover:text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-0.5 pr-6">
                <span className="text-[10px] font-mono text-[#00FFFF] uppercase tracking-widest block">{p('profileModal.label')}</span>
                <h3 className="text-xl font-bold text-white font-mono">{selectedProfile.ref}</h3>
                <p className="text-xs text-gray-300 font-medium">{selectedProfile.type}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-center">
                  <span className="text-[10px] font-mono text-gray-500 block mb-0.5 uppercase">{p('profileModal.ixLabel')} (cm⁴)</span>
                  <span className="text-base font-bold text-[#00FFFF] font-mono">{selectedProfile.ix}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-center">
                  <span className="text-[10px] font-mono text-gray-500 block mb-0.5 uppercase">{p('profileModal.iyLabel')} (cm⁴)</span>
                  <span className="text-base font-bold text-[#00FFFF] font-mono">{selectedProfile.iy}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">{p('profileModal.descLabel')}</span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">{selectedProfile.desc}</p>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="px-4 py-2 bg-[#00FFFF] hover:bg-cyan-300 text-black font-semibold font-mono rounded-lg transition-colors text-xs uppercase"
                >
                  {p('profileModal.close')}
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* ==================================================
          HIGH RESOLUTION LIGHTBOX FOR TECHNICAL DRAWINGS
          ================================================== */}
      {
        lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
            <div className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-gray-900/80">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-mono text-white font-bold truncate max-w-[140px] sm:max-w-none">{lightboxTitle || p('lightbox.defaultTitle')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={lightboxImage}
                    download={`Emeraude_${(lightboxTitle || 'document').replace(/\s+/g, '_')}.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{p('lightbox.download')}</span>
                  </a>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="p-2 text-gray-400 hover:text-white rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-4 flex items-center justify-center bg-black overflow-auto">
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="max-w-full max-h-full object-contain cursor-zoom-in"
                />
              </div>

              <div className="px-4 sm:px-6 py-3 border-t border-gray-800 bg-gray-900/80 text-xs font-mono text-gray-400 flex flex-wrap items-center justify-between gap-2">
                <span>{p('lightbox.zoomLabel')}</span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {p('lightbox.close')}
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
}
