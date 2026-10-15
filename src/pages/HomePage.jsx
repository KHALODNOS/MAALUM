import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/home/HeroSection'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import EmeraudeProductCard from '../components/home/EmeraudeProductCard'
import FrappeEmeraudeProductCard from '../components/home/FrappeEmeraudeProductCard'
import NosSolutions from '../components/home/NosSolutions'
import NosServices from '../components/home/NosServices'
import PourquoiNous from '../components/home/PourquoiNous'
import BesoinDaide from '../components/home/BesoinDaide'
import DemanderDevis from '../components/home/DemanderDevis'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/layout/Footer'
import { useLanguage } from '../context/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="font-inter bg-[#0a0a0a] text-white min-h-screen w-full overflow-x-hidden relative">
      <Navbar />
      <HeroSection />

      {/* ─── PRODUCTS SECTION ─── */}
      <section id="products" className="py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto">

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
            {t('catalog.badge')}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Section header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                2&nbsp;{t('catalog.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-grotesk tracking-tight text-white leading-none">
              {t('catalog.title')}
            </h2>
          </div>
          <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed border-l border-white/10 pl-5">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* 2-Product Grid — equal columns, no orphan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          <EmeraudeProductCard />
          <FrappeEmeraudeProductCard />
        </div>
      </section>

      {/* ─── NOS SOLUTIONS SECTION ─── */}
      <NosSolutions />

      {/* ─── NOS SERVICES SECTION ─── */}
      <NosServices />

      {/* ─── POURQUOI NOUS CHOISIR ─── */}
      <PourquoiNous />

      {/* ─── BESOIN D'AIDE / FAQ ─── */}
      <BesoinDaide />

      {/* ─── DEMANDER UN DEVIS ─── */}
      <DemanderDevis />

      {/* ─── CONTACT & LOCALISATION ─── */}
      <ContactSection />

      {/* ─── FOOTER ─── */}
      <Footer />

      <WhatsAppButton />
    </div>
  )
}
