import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  FileText,
  Send,
  MessageSquare,
  Upload,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Ruler,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
  Layers,
  Maximize2,
  Building,
  RotateCcw
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

export default function DemanderDevis() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useReveal(0.1);
  const [formRef, formVisible] = useReveal(0.08);

  // Form state
  const [selectedRange, setSelectedRange] = useState('coulisse');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: 'villa',
    details: '',
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / quote generation
    setTimeout(() => {
      const generatedRef = `MAAL-${Math.floor(1000 + Math.random() * 9000)}`;
      setRefNumber(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppSend = () => {
    const rangeName =
      selectedRange === 'coulisse'
        ? 'ÉMÉRAUDE COULISSE'
        : selectedRange === 'frappe'
        ? 'ÉMÉRAUDE FRAPPE'
        : 'Projet Sur-Mesure';

    const text = `Bonjour MAALUM,%0A%0AJe souhaite demander un devis gratuit pour un projet en aluminium.%0A%0A📌 *Gamme:* ${rangeName}%0A👤 *Nom:* ${formData.fullName || 'Non spécifié'}%0A📞 *Tél:* ${formData.phone || 'Non spécifié'}%0A📍 *Ville/Wilaya:* ${formData.city || 'Non spécifiée'}%0A🏢 *Type:* ${formData.projectType}%0A📝 *Détails:* ${formData.details || 'Aucun détail'}`;

    window.open(`https://wa.me/212708123381?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      projectType: 'villa',
      details: '',
    });
    setAttachedFile(null);
    setIsSubmitted(false);
  };

  const benefits = [
    {
      icon: Clock,
      title: t('devisForm.benefits.0.title') || "Réponse sous 24h",
      desc: t('devisForm.benefits.0.desc') || "Étude rapide réalisée par nos ingénieurs."
    },
    {
      icon: ShieldCheck,
      title: t('devisForm.benefits.1.title') || "Devis 100% Gratuit",
      desc: t('devisForm.benefits.1.desc') || "Sans aucun engagement de votre part."
    },
    {
      icon: Ruler,
      title: t('devisForm.benefits.2.title') || "Sur-Mesure Garanti",
      desc: t('devisForm.benefits.2.desc') || "Adaptation parfaite à vos plans architecturaux."
    },
    {
      icon: MapPin,
      title: t('devisForm.benefits.3.title') || "Livraison Nationale",
      desc: t('devisForm.benefits.3.desc') || "Couverture et pose sur les 58 wilayas."
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Ambient background blur */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* ── Section divider ── */}
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.25em]">
          {t('devisForm.badge') || "Étude & Devis Gratuit"}
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
              <FileText className="w-3.5 h-3.5" />
              {t('devisForm.badge') || "Étude & Devis Gratuit"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-grotesk tracking-tight text-white leading-none">
            {t('devisForm.title') || "DEMANDER UN DEVIS SUR-MESURE"}
          </h2>
        </div>
        <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed border-l border-white/10 pl-5">
          {t('devisForm.subtitle') || "Remplissez le formulaire ci-dessous ou contactez directement nos ingénieurs. Notre bureau d'études vous transmet une étude chiffrée gratuite sous 24h."}
        </p>
      </div>

      {/* ── Grid Layout ── */}
      <div
        ref={formRef}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        style={{
          opacity: formVisible ? 1 : 0,
          transform: formVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s',
        }}
      >
        {/* ── Left Column: Benefits & Direct Contacts (5 cols) ── */}
        <div className="lg:col-span-5 space-y-6">

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-emerald-500/30 transition-all duration-300 space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold font-grotesk text-white">
                    {b.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Direct Support Contact Card */}
          <div className="p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#111814] to-[#0a0a0a] space-y-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-white/[0.07] pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black font-grotesk text-white">
                  Bureau d'Études MAALUM
                </h3>
                <p className="text-xs font-mono text-emerald-400">
                  Assistance commerciale & technique
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">Téléphone Direct</div>
                  <div className="text-white font-bold">0708 12 33 81</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">Courriel</div>
                  <div className="text-white font-bold">maalumaluminium.contact@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase">Siège & Ateliers</div>
                  <div className="text-white font-bold">Zone Industrielle, Algérie</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>Horaires bureau:</span>
              <span className="text-emerald-400 font-bold">Lun - Sam : 08h00 - 17h00</span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Interactive Form (7 cols) ── */}
        <div className="lg:col-span-7">
          <div className="p-6 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0f1712] via-[#0a0e0b] to-[#0a0a0a] shadow-2xl relative overflow-hidden">
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

            {isSubmitted ? (
              /* ── Success Screen ── */
              <div className="py-12 px-4 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                    {t('devisForm.success.ref') || "Référence dossier"}: {refNumber}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black font-grotesk text-white">
                    {t('devisForm.success.title') || "Demande enregistrée avec succès !"}
                  </h3>
                  <p className="text-sm text-gray-400 font-light max-w-md mx-auto leading-relaxed">
                    {t('devisForm.success.desc') || "Merci pour votre confiance. Notre bureau d'études analyse vos données et vous contactera sous 24h ouvrées."}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Envoyer aussi sur WhatsApp</span>
                  </button>

                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs tracking-wider transition-all"
                  >
                    <RotateCcw className="w-4 h-4 text-gray-400" />
                    <span>{t('devisForm.success.newDemand') || "Soumettre une autre demande"}</span>
                  </button>
                </div>
              </div>
            ) : (
              /* ── Form View ── */
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* ── STEP 1: Gamme selector ── */}
                <div className="space-y-3">
                  <label className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                    {t('devisForm.step1Title') || "1. Choisissez la gamme de produit"}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: 'coulisse',
                        title: t('devisForm.ranges.coulisse') || 'ÉMÉRAUDE COULISSE',
                        icon: Layers,
                        subtitle: 'Baies & Coulissants'
                      },
                      {
                        id: 'frappe',
                        title: t('devisForm.ranges.frappe') || 'ÉMÉRAUDE FRAPPE',
                        icon: Maximize2,
                        subtitle: 'Fenêtres & Portes'
                      },
                      {
                        id: 'custom',
                        title: t('devisForm.ranges.custom') || 'Sur-Mesure',
                        icon: Sparkles,
                        subtitle: 'Projet Spécial'
                      },
                    ].map((range) => {
                      const IconComponent = range.icon;
                      const isSelected = selectedRange === range.id;
                      return (
                        <button
                          type="button"
                          key={range.id}
                          onClick={() => setSelectedRange(range.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                              : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <IconComponent className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-gray-500'}`} />
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-gray-600'}`}>
                              {isSelected && <CheckCircle2 className="w-3 h-3 text-black" />}
                            </div>
                          </div>
                          <div>
                            <div className={`text-xs font-bold font-grotesk ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                              {range.title}
                            </div>
                            <div className="text-[10px] font-mono text-gray-500">
                              {range.subtitle}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ── STEP 2: Client Info ── */}
                <div className="space-y-4 pt-2">
                  <label className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                    {t('devisForm.step2Title') || "2. Vos coordonnées"}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                        {t('devisForm.labels.fullName') || "Nom & Prénom *"}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Ex: Mohamed Benali"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                        {t('devisForm.labels.phone') || "Téléphone / WhatsApp *"}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ex: 0550 12 34 56"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                        {t('devisForm.labels.email') || "Adresse e-mail"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: contact@exemple.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                      />
                    </div>

                    {/* Wilaya / City */}
                    <div>
                      <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                        {t('devisForm.labels.city') || "Wilaya / Ville *"}
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Ex: Alger, Oran, Sétif..."
                        className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter"
                      />
                    </div>
                  </div>
                </div>

                {/* ── STEP 3: Project Details & File Upload ── */}
                <div className="space-y-4 pt-2">
                  <label className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                    {t('devisForm.step3Title') || "3. Détails de votre projet & plans"}
                  </label>

                  {/* Project Type Select */}
                  <div>
                    <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                      {t('devisForm.labels.projectType') || "Type de projet"}
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-[#141b16] border border-white/[0.08] focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all font-inter"
                    >
                      <option value="villa">{t('devisForm.projectTypes.villa') || "Villa / Résidence privée"}</option>
                      <option value="promotion">{t('devisForm.projectTypes.promotion') || "Promotion immobilière / Bâtiment"}</option>
                      <option value="renovation">{t('devisForm.projectTypes.renovation') || "Rénovation"}</option>
                      <option value="commercial">{t('devisForm.projectTypes.commercial') || "Local commercial / Bureau"}</option>
                    </select>
                  </div>

                  {/* Details Textarea */}
                  <div>
                    <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                      {t('devisForm.labels.details') || "Détails & Dimensions estimées"}
                    </label>
                    <textarea
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Indiquez le nombre de baies/fenêtres, dimensions approximatives, couleur aluminium ou exigences particulières..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all font-inter resize-none"
                    />
                  </div>

                  {/* File Attachment Upload */}
                  <div>
                    <label className="text-xs text-gray-400 font-mono mb-1.5 block">
                      {t('devisForm.labels.file') || "Joindre un plan ou métré (PDF, PNG, JPG)"}
                    </label>
                    <div className="relative border border-dashed border-white/20 hover:border-emerald-500 rounded-xl p-4 text-center transition-colors bg-white/[0.01]">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.png,.jpg,.jpeg,.dwg"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                        <Upload className="w-4 h-4 text-emerald-400" />
                        <span>
                          {attachedFile ? (
                            <strong className="text-emerald-400 font-mono">{attachedFile.name}</strong>
                          ) : (
                            "Cliquez ou glissez votre fichier ici"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Submit Buttons ── */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t('devisForm.labels.submitting') || "Traitement en cours..."}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('devisForm.labels.submit') || "Envoyer ma demande de devis"}</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-white font-mono text-xs tracking-wider transition-all duration-300 hover:border-emerald-500/40"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>{t('devisForm.labels.whatsappSubmit') || "Envoyer directement sur WhatsApp"}</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
