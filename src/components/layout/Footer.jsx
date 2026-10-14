import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUp, Layers, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from '../common/SocialIcons';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050806] border-t border-white/[0.08] text-gray-400 font-inter pt-16 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1 & 2: Brand & Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black font-grotesk text-lg shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                M
              </div>
              <span className="text-xl font-black font-grotesk tracking-wider text-white">
                MAALUM <span className="text-emerald-400 font-mono text-xs font-normal">ALUMINIUM</span>
              </span>
            </div>

            <p className="text-sm font-light text-gray-400 leading-relaxed max-w-sm">
              {t('footer.desc') || "Conception et fabrication sur-mesure de systèmes coulissants et de fenêtres à frappe en aluminium haute performance."}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Garantie 10 Ans
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300">
                100% Algérien
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-2.5">
              {t('footer.navTitle') || "Navigation"}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">Nos Produits</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-emerald-400 transition-colors">Nos Solutions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Nos Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">Pourquoi Nous</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ / Aide</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Demander un Devis</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Gammes Produits */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-2.5">
              {t('footer.productsTitle') || "Nos Gammes"}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">ÉMÉRAUDE COULISSE</a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">ÉMÉRAUDE FRAPPE</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Baies Vitrées Sur-Mesure</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Profilés & Accessoires</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-l-2 border-emerald-500 pl-2.5">
              {t('footer.contactTitle') || "Contact Direct"}
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a href="tel:0708123381" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>0708 12 33 81</span>
              </a>
              <a href="mailto:maalumaluminium.contact@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>maalumaluminium.contact@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Zone Industrielle, Algérie</span>
              </div>
            </div>

            {/* Social media links */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/maalumaluminium/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-300 hover:text-white text-[11px] font-mono flex items-center gap-1.5 transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@maalumaluminium"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-black text-gray-300 hover:text-white text-[11px] font-mono border border-transparent hover:border-white/20 flex items-center gap-1.5 transition-all"
              >
                <TikTokIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>TikTok</span>
              </a>
              <a
                href="https://www.facebook.com/maalumaluminium"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-blue-600 text-gray-300 hover:text-white text-[11px] font-mono flex items-center gap-1.5 transition-all"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>Facebook</span>
              </a>
              <a
                href="https://wa.me/212708123381"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/20 text-emerald-400 hover:text-black text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} MAALUM Aluminium. {t('footer.rights') || "Tous droits réservés."}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-300"
          >
            <span>{t('footer.backToTop') || "Haut de page"}</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
