import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Building2,
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from '../common/SocialIcons';

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

export default function ContactSection() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useReveal(0.1);
  const [bodyRef, bodyVisible] = useReveal(0.08);

  const [formData, setFormData] = useState({
    subject: 'general',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <section id="contact-info" className="py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* ── Section divider ── */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
          {t('contactSection.badge') || "Contact & Localisation"}
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
              <Mail className="w-3.5 h-3.5" />
              {t('contactSection.badge') || "Contact & Localisation"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-grotesk tracking-tight text-white leading-none">
            {t('contactSection.title') || "RESTONS EN CONTACT"}
          </h2>
        </div>
        <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed border-l border-white/10 pl-5">
          {t('contactSection.subtitle') || "Une question, une demande de renseignement ou un partenariat ? Nos équipes sont à votre écoute pour vous accompagner."}
        </p>
      </div>

      {/* ── Body Grid ── */}
      <div
        ref={bodyRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        style={{
          opacity: bodyVisible ? 1 : 0,
          transform: bodyVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
        }}
      >
        {/* ── Left Column: Contact Cards + Map (5 cols) ── */}
        <div className="lg:col-span-5 space-y-6">

          {/* Contact Details List */}
          <div className="p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#111814] via-[#0c120e] to-[#0a0a0a] space-y-6 shadow-xl">
            <h3 className="text-xl font-black font-grotesk text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              {t('contactSection.info.title') || "Nos Coordonnées"}
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:0708123381"
                className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-4 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">
                    {t('contactSection.info.phone') || "Téléphone"}
                  </div>
                  <div className="text-sm font-bold text-white font-mono">
                    0708 12 33 81
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:maalumaluminium.contact@gmail.com"
                className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-4 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">
                    {t('contactSection.info.email') || "Email"}
                  </div>
                  <div className="text-sm font-bold text-white font-mono break-all">
                    maalumaluminium.contact@gmail.com
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-4 hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">
                    {t('contactSection.info.address') || "Adresse Siège & Usine"}
                  </div>
                  <div className="text-sm font-bold text-white font-grotesk">
                    Zone Industrielle, Algérie
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-4 hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">
                    {t('contactSection.info.hours') || "Horaires d'ouverture"}
                  </div>
                  <div className="text-xs font-bold text-white font-mono">
                    {t('contactSection.info.hoursDetail') || "Du Lundi au Samedi : 08h00 - 17h00"}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links Block */}
            <div className="pt-4 border-t border-white/[0.07] space-y-3">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Suivez-nous sur les réseaux
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/maalumaluminium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-white/10 hover:border-transparent text-gray-300 hover:text-white font-mono text-xs font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:text-white" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@maalumaluminium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-black border border-white/10 hover:border-white/40 text-gray-300 hover:text-white font-mono text-xs font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <TikTokIcon className="w-4 h-4 text-cyan-400" />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.facebook.com/maalumaluminium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-600 border border-white/10 hover:border-transparent text-gray-300 hover:text-white font-mono text-xs font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-400" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://wa.me/212708123381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-black font-mono text-xs font-black flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#0a0f0c] overflow-hidden p-2 group shadow-xl">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#121c16]">
              {/* Styled Dark Map Simulation */}
              <iframe
                title="MAALUM Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.807873919013!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f000000000%3A0x0!2zMzbCsDQ1JzEzLjciTiAzwrAwMyczMS43IkU!5e0!3m2!1sfr!2sdz!4v1620000000000!5m2!1sfr!2sdz"
                className="w-full h-full grayscale invert opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-emerald-400 animate-bounce" />
                <span>Siège MAALUM Aluminium</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Right Column: Contact Form (7 cols) ── */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0f1712] via-[#0a0e0b] to-[#0a0a0a] shadow-2xl relative overflow-hidden">

            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6 space-y-1">
              <h3 className="text-2xl font-black font-grotesk text-white">
                {t('contactSection.form.title') || "Envoyez-nous un message"}
              </h3>
              <p className="text-xs text-gray-500 font-light">
                Remplissez le formulaire ci-dessous et recevez une réponse sous 24h.
              </p>
            </div>

            {isSent ? (
              /* Success View */
              <div className="py-12 px-4 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black font-grotesk text-white">
                    {t('contactSection.form.successTitle') || "Message envoyé avec succès !"}
                  </h4>
                  <p className="text-sm text-gray-400 font-light max-w-sm mx-auto leading-relaxed">
                    {t('contactSection.form.successDesc') || "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFormData({ subject: 'general', name: '', phone: '', email: '', message: '' });
                    setIsSent(false);
                  }}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest transition-all"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              /* Form View */
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Subject Selector */}
                <div>
                  <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                    {t('contactSection.form.subject') || "Sujet de votre demande"}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#141b16] border border-white/[0.08] focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all font-inter"
                  >
                    <option value="general">{t('contactSection.form.subjects.general') || "Renseignement général"}</option>
                    <option value="sav">{t('contactSection.form.subjects.sav') || "Suivi de commande / SAV"}</option>
                    <option value="catalog">{t('contactSection.form.subjects.catalog') || "Demande de documentation"}</option>
                    <option value="partner">{t('contactSection.form.subjects.partner') || "Partenariat / Architecte"}</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                      {t('contactSection.form.name') || "Nom complet *"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                      {t('contactSection.form.phone') || "Téléphone *"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0550 00 00 00"
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                    {t('contactSection.form.email') || "Adresse email *"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@exemple.com"
                    className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                    {t('contactSection.form.message') || "Votre message *"}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contactSection.form.placeholderMessage') || "Écrivez votre message ici..."}
                    className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSending ? (
                    <span>{t('contactSection.form.sending') || "Envoi en cours..."}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contactSection.form.send') || "Envoyer le message"}</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
