import { useLanguage } from '../../context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-[100px] overflow-hidden bg-[url('/images/slider-bg.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      <div className="relative z-[2] max-w-[800px] px-[20px] flex flex-col items-center">
        <h1 className="font-grotesk text-[clamp(3rem,8vw,6rem)] font-black text-white m-0 tracking-[-0.03em] leading-none mb-[1rem]">{t('hero.title')}</h1>
        <p className="font-inter text-[clamp(1rem,2vw,1.4rem)] text-[#f0f4f8]/90 font-light tracking-[0.15em] uppercase mb-[2.5rem] max-w-[600px] leading-[1.6]">{t('hero.subtitle')}</p>
        <a href="#contact" className="inline-block bg-transparent text-white font-grotesk font-semibold text-[0.95rem] tracking-[0.1em] uppercase px-[2rem] py-[1rem] border-2 border-white cursor-pointer transition-all hover:bg-white hover:text-black hover:-translate-y-1">{t('hero.cta')}</a>
      </div>

      {/* ─── SERVICES BAR ─── */}
      <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-around items-center bg-black/40 backdrop-blur-[10px] border-t border-white/10 px-[2rem] py-[1.5rem] z-[2]">
        <div className="flex items-center gap-[1rem] my-2 md:my-0">
          <svg className="w-[48px] h-[48px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
            <path d="M28 28 L38 38" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M14 20 Q20 14 26 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M10 30 Q16 24 22 30" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          <div className="flex flex-col text-[0.7rem] font-bold tracking-[0.15em] text-[#f0f4f8] leading-[1.4] max-w-[120px]">
            <span>{t('hero.services.s1')}</span>
          </div>
        </div>
        <div className="hidden md:block w-px h-[40px] bg-white/15" />
        <div className="flex items-center gap-[1rem] my-2 md:my-0">
          <svg className="w-[48px] h-[48px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="8" width="20" height="32" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
            <line x1="21" y1="8" x2="21" y2="40" stroke="white" strokeWidth="2"/>
            <rect x="17" y="14" width="4" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
            <rect x="27" y="14" width="4" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="flex flex-col text-[0.7rem] font-bold tracking-[0.15em] text-[#f0f4f8] leading-[1.4] max-w-[120px]">
            <span>{t('hero.services.s2')}</span>
          </div>
        </div>
        <div className="hidden md:block w-px h-[40px] bg-white/15" />
        <div className="flex items-center gap-[1rem] my-2 md:my-0">
          <svg className="w-[48px] h-[48px]" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="14" width="36" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
            <path d="M38 22 L50 22 L58 30 L58 36 L38 36 Z" stroke="white" strokeWidth="2.5" fill="none"/>
            <circle cx="14" cy="38" r="4" stroke="white" strokeWidth="2.5" fill="none"/>
            <circle cx="48" cy="38" r="4" stroke="white" strokeWidth="2.5" fill="none"/>
            <line x1="2" y1="22" x2="2" y2="36" stroke="white" strokeWidth="2"/>
          </svg>
          <div className="flex flex-col text-[0.7rem] font-bold tracking-[0.15em] text-[#f0f4f8] leading-[1.4] max-w-[120px]">
            <span>{t('hero.services.s3')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
