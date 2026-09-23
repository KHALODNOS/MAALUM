import './App.css'

function App() {
  return (
    <>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-icon">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="34" height="34" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
              <rect x="9" y="2" width="2.5" height="20" fill="white"/>
              <rect x="2" y="9" width="20" height="2.5" fill="white"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">ALU</span>
            <span className="logo-sub"> INC.</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#produits">Produits</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#realisations">Réalisations</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-devis">Demander un devis</button>
          <span className="flag">🇫🇷</span>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">ALU INC</h1>
          <p className="hero-subtitle">Expert Aluminium sur-mesure à Marrakech</p>
          <a href="#contact" className="btn-contact">Contactez-nous</a>
        </div>

        {/* ─── SERVICES BAR ─── */}
        <div className="services-bar">
          <div className="service-item">
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
              <path d="M28 28 L38 38" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M14 20 Q20 14 26 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M10 30 Q16 24 22 30" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <div className="service-text">
              <span>CONSEIL ET EXPERTISE</span>
              <span>TECHNIQUE</span>
            </div>
          </div>
          <div className="service-divider" />
          <div className="service-item">
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="14" y="8" width="20" height="32" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
              <line x1="21" y1="8" x2="21" y2="40" stroke="white" strokeWidth="2"/>
              <rect x="17" y="14" width="4" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
              <rect x="27" y="14" width="4" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <div className="service-text">
              <span>SERVICE DE MENUISERIE</span>
              <span>SUR MESURE</span>
            </div>
          </div>
          <div className="service-divider" />
          <div className="service-item">
            <svg className="service-icon" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="14" width="36" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
              <path d="M38 22 L50 22 L58 30 L58 36 L38 36 Z" stroke="white" strokeWidth="2.5" fill="none"/>
              <circle cx="14" cy="38" r="4" stroke="white" strokeWidth="2.5" fill="none"/>
              <circle cx="48" cy="38" r="4" stroke="white" strokeWidth="2.5" fill="none"/>
              <line x1="2" y1="22" x2="2" y2="36" stroke="white" strokeWidth="2"/>
            </svg>
            <div className="service-text">
              <span>LOGISTIQUE</span>
              <span>ET LIVRAISON</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP FLOATING BUTTON ─── */}
      <a
        href="https://wa.me/212600000000"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </>
  )
}

export default App
