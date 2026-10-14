import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, X, Menu } from 'lucide-react';
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from '../common/SocialIcons';

export default function Navbar() {
  const navigate = useNavigate();
  const { t, toggleLanguage, language } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (path) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { href: '/#products', labelKey: 'nav.products' },
    { href: '/#services', labelKey: 'nav.services' },
    { href: '/#why-us',   labelKey: 'nav.projects' },
    { href: '/about',     labelKey: 'nav.about' },
    { href: '/#contact-info', labelKey: 'nav.contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* ─── TOP BAR ─── */}
      <div className="bg-[#050806]/95 border-b border-white/[0.08] backdrop-blur-md py-1.5 px-[5%] font-mono text-[11px] text-gray-300 flex items-center justify-between gap-4">
        {/* Left: Contact Phone & Email */}
        <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar">
          <a
            href="tel:0708123381"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors shrink-0"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span className="font-bold">0708 12 33 81</span>
          </a>

          <span className="text-gray-700 hidden sm:inline">•</span>

          <a
            href="mailto:maalumaluminium.contact@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors shrink-0"
          >
            <Mail className="w-3 h-3 text-emerald-400" />
            <span>maalumaluminium.contact@gmail.com</span>
          </a>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] uppercase text-gray-500 hidden md:inline tracking-wider">
            Suivez-nous :
          </span>

          <a href="https://www.instagram.com/maalumaluminium/" target="_blank" rel="noopener noreferrer" title="Instagram MAALUM"
            className="p-1 rounded-md text-gray-400 hover:text-pink-400 hover:bg-white/5 transition-colors">
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a href="https://www.tiktok.com/@maalumaluminium" target="_blank" rel="noopener noreferrer" title="TikTok MAALUM"
            className="p-1 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition-colors">
            <TikTokIcon className="w-3.5 h-3.5" />
          </a>
          <a href="https://www.facebook.com/maalumaluminium" target="_blank" rel="noopener noreferrer" title="Facebook MAALUM"
            className="p-1 rounded-md text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-colors">
            <FacebookIcon className="w-3.5 h-3.5" />
          </a>
          <a href="https://wa.me/212708123381" target="_blank" rel="noopener noreferrer" title="WhatsApp Direct"
            className="p-1 rounded-md text-gray-400 hover:text-emerald-400 hover:bg-white/5 transition-colors">
            <WhatsAppIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ─── MAIN NAVIGATION BAR ─── */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-[5%] py-[0.9rem] bg-black/75 backdrop-blur-[16px] border-b border-white/5 transition-all duration-300">
        {/* Brand Logo */}
        <div onClick={handleNavClick('/')} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black font-grotesk text-lg shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black font-grotesk tracking-wider text-white">MAALUM</span>
            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">ALUMINIUM</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-[2rem] list-none m-0 p-0 font-mono text-xs">
          {navLinks.map(({ href, labelKey }) => (
            <li key={href}>
              <a href={href} onClick={handleNavClick(href)}
                className="text-gray-300 hover:text-emerald-400 transition-colors uppercase tracking-wider">
                {t(labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button onClick={handleNavClick('/#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-105">
            {t('nav.quote')}
          </button>
          <button onClick={toggleLanguage}
            className="bg-white/5 border border-white/15 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-white/10 hover:border-emerald-500/40 transition-all">
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ─── MOBILE DRAWER OVERLAY ─── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ─── MOBILE DRAWER ─── */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-[#080f0a] border-l border-white/[0.08] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black font-grotesk shadow-[0_0_15px_rgba(16,185,129,0.5)]">M</div>
            <span className="text-base font-black font-grotesk text-white tracking-wider">MAALUM</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navLinks.map(({ href, labelKey }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick(href)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/[0.06] font-mono text-sm uppercase tracking-widest transition-all duration-200 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors shrink-0" />
              {t(labelKey)}
            </a>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="px-4 pb-8 space-y-3 border-t border-white/[0.08] pt-4">
          <button
            onClick={handleNavClick('/#contact')}
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest px-4 py-3 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
          >
            {t('nav.quote')}
          </button>
          <div className="flex items-center gap-3">
            <button onClick={toggleLanguage}
              className="flex-1 bg-white/5 border border-white/15 text-white font-mono text-xs font-bold py-2.5 rounded-xl hover:bg-white/10 transition-all text-center">
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <a href="https://wa.me/212708123381" target="_blank" rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs py-2.5 rounded-xl hover:bg-emerald-500/20 transition-all">
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
