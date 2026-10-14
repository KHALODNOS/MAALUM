// Data extracted strictly from reference images 1-6 for EMERAUDE COULISSE

export const IMAGES = {
  hero: '/images/product1 (2).jpeg',         // Image 1: Installed sliding door
  system: '/images/product1 (1).jpeg',       // Image 2: Technical cutaway system construction
  profiles: '/images/product1 (3).jpeg',     // Image 3: General table of profiles & inertia
  dimensions: '/images/product1 (4).jpeg',   // Image 4: Dimensions for Ouvrants simple vitrage
  accessories1: '/images/product1 (5).jpeg', // Image 5: Accessories catalogue page 1
  accessories2: '/images/product1 (6).jpeg', // Image 6: Accessories catalogue page 2
};

export const SYSTEM_COMPONENTS = [
  { id: '01', title: 'Profils aluminium', desc: 'Structure rigide et dormants/ouvrants conçus pour une stabilité optimale.' },
  { id: '02', title: 'Système de coulissement', desc: 'Rails d\'encadrement et galets de roulement haute précision pour une glisse fluide.' },
  { id: '03', title: 'Vitrage', desc: 'Conception adaptée aux simples et doubles vitrages selon les références d\'ouvrants.' },
  { id: '04', title: 'Étanchéité', desc: 'Joints d\'étanchéité, feutrines et bouchons anti-vent/eau pour une protection maximale.' },
  { id: '05', title: 'Accessoires', desc: 'Poignées, fermetures, embouts et pièces d\'assemblage dédiés au système Emeraude.' },
];

export const PROFILES_DATA = [
  { ref: 'MD360', type: 'Dormant sans couvre-joint', ix: '3.38 cm⁴', iy: '10.29 cm⁴', image: IMAGES.profiles, desc: 'Dormant sans couvre-joint pour système coulissant Emeraude.' },
  { ref: 'MD362', type: 'Dormant avec couvre-joint', ix: '7.10 cm⁴', iy: '11.27 cm⁴', image: IMAGES.profiles, desc: 'Dormant avec couvre-joint intégré pour finition soignée.' },
  { ref: 'MD363', type: 'Dormant 3 rails sans couvre-joint', ix: '5.13 cm⁴', iy: '36.41 cm⁴', image: IMAGES.profiles, desc: 'Dormant 3 rails sans couvre-joint pour baies à multiple vantaux.' },
  { ref: 'MD366', type: 'Dormant sans couvre-joint', ix: '4.41 cm⁴', iy: '12.84 cm⁴', image: IMAGES.profiles, desc: 'Dormant sans couvre-joint pour encadrement spécifique.' },
  { ref: 'MD364', type: 'Dormant avec couvre-joint', ix: '8.3 cm⁴', iy: '14.83 cm⁴', image: IMAGES.profiles, desc: 'Dormant avec couvre-joint pour pose en rénovation/neuf.' },
  { ref: 'MD333', type: 'Montant latéral SV', ix: '4.39 cm⁴', iy: '2.25 cm⁴', image: IMAGES.profiles, desc: 'Montant latéral pour simple vitrage (SV).' },
  { ref: 'MD335', type: 'Montant latéral SV renforcé', ix: '6.2 cm⁴', iy: '5.31 cm⁴', image: IMAGES.profiles, desc: 'Montant latéral pour simple vitrage (SV) renforcé.' },
  { ref: 'MD343', type: 'Montant central SV', ix: '2.70 cm⁴', iy: '2.70 cm⁴', image: IMAGES.profiles, desc: 'Montant central de chicane pour simple vitrage.' },
  { ref: 'MD340', type: 'Montant central SV', ix: '2.15 cm⁴', iy: '2.84 cm⁴', image: IMAGES.profiles, desc: 'Montant central pour simple vitrage.' },
  { ref: 'MD345', type: 'Montant central SV renforcé', ix: '4.41 cm⁴', iy: '12.41 cm⁴', image: IMAGES.profiles, desc: 'Montant central pour simple vitrage avec renfort.' },
  { ref: 'MD346', type: 'Montant central SV renforcé', ix: '5.98 cm⁴', iy: '22.60 cm⁴', image: IMAGES.profiles, desc: 'Montant central renforcé haute résistance.' },
  { ref: 'MD353', type: 'Traverse SV', ix: '3.88 cm⁴', iy: '1.82 cm⁴', image: IMAGES.profiles, desc: 'Traverse haute et basse pour simple vitrage.' },
];

export const DIMENSIONS_PROFILES = [
  {
    ref: 'MD333',
    name: 'Ouvrant Simple Vitrage Standard',
    section: 'Ouvrants simple vitrage',
    image: IMAGES.dimensions,
    details: 'Profil ouvrant pour simple vitrage avec hauteur de gorge standard et logement pour joint feutre.',
  },
  {
    ref: 'MD335',
    name: 'Ouvrant Renforcé avec Logement Galet',
    section: 'Ouvrants simple vitrage',
    image: IMAGES.dimensions,
    details: 'Profil d\'encadrement bas/haut pour ouvrant simple vitrage avec gorge renforcée.',
  },
  {
    ref: 'MD343',
    name: 'Profil Intermédiaire / Chicane',
    section: 'Ouvrants simple vitrage',
    image: IMAGES.dimensions,
    details: 'Section transversale du profil de jonction chicane pour étanchéité centrale.',
  },
  {
    ref: 'MD340',
    name: 'Profil Traverse / Rive',
    section: 'Ouvrants simple vitrage',
    image: IMAGES.dimensions,
    details: 'Section de profil avec cotes de découpe et d\'assemblage d\'angle.',
  },
];

export const ACCESSORIES_CATEGORIES = [
  { id: 'all', label: 'Tous les accessoires' },
  { id: 'etancheite', label: 'Étanchéité' },
  { id: 'bouchons', label: 'Bouchons & Embouts' },
  { id: 'evacuation', label: 'Évacuation d\'eau' },
  { id: 'galets', label: 'Galets & Roulements' },
  { id: 'fermetures', label: 'Fermetures & Verrous' },
  { id: 'autres', label: 'Autres accessoires' },
];

export const ACCESSORIES_DATA = [
  { id: 1, ref: 'RKE 310', name: 'Kit d’étanchéité (2 rails)', category: 'etancheite', image: IMAGES.accessories1, docPage: '01' },
  { id: 2, ref: 'RKE 311', name: 'Kit d’étanchéité (3 rails)', category: 'etancheite', image: IMAGES.accessories1, docPage: '01' },
  { id: 3, ref: '33.705', name: 'Joint brosse 7 × 5 mm avec film', category: 'etancheite', image: IMAGES.accessories1, docPage: '01' },
  { id: 4, ref: 'CB 33.75', name: 'Bouchon pour montants latéraux MD335 et MD375', category: 'bouchons', image: IMAGES.accessories1, docPage: '01' },
  { id: 5, ref: 'CB 33.85', name: 'Bouchon pour montants centraux MD345 et MD385', category: 'bouchons', image: IMAGES.accessories1, docPage: '01' },
  { id: 6, ref: 'CB 33.86', name: 'Bouchon pour montants centraux MD346 et MD386', category: 'bouchons', image: IMAGES.accessories1, docPage: '01' },
  { id: 7, ref: '6312', name: 'Busette d’évacuation à clapet', category: 'evacuation', image: IMAGES.accessories1, docPage: '01' },
  { id: 8, ref: '6318', name: 'Clapet anti-retour à bille', category: 'evacuation', image: IMAGES.accessories1, docPage: '01' },
  { id: 9, ref: '6317', name: 'Bouchon cache-vis', category: 'bouchons', image: IMAGES.accessories1, docPage: '01' },
  { id: 10, ref: 'BE 0650', name: 'Bouchon dormant', category: 'bouchons', image: IMAGES.accessories1, docPage: '01' },
  { id: 11, ref: 'KEMERC', name: 'Bloc matrice Émeraude coulissante', category: 'autres', image: IMAGES.accessories1, docPage: '01' },
  { id: 12, ref: 'AM120', name: 'Presse pneumatique', category: 'autres', image: IMAGES.accessories1, docPage: '01' },
  { id: 13, ref: 'EQ 36x9', name: 'Équerre à pion 35.9x9 pour dormants MD360, MD363, MD364 et MD366', category: 'autres', image: IMAGES.accessories2, docPage: '02' },
  { id: 14, ref: 'RT 33.20', name: 'Galet fixe simple', category: 'galets', image: IMAGES.accessories2, docPage: '02' },
  { id: 15, ref: 'GEM 33.30', name: 'Galet réglable simple à aiguilles', category: 'galets', image: IMAGES.accessories2, docPage: '02' },
  { id: 16, ref: 'GEM 33.40', name: 'Galet réglable double à aiguilles', category: 'galets', image: IMAGES.accessories2, docPage: '02' },
  { id: 17, ref: 'RT 33.30', name: 'Galet réglable simple à billes', category: 'galets', image: IMAGES.accessories2, docPage: '02' },
  { id: 18, ref: 'RT 33.40', name: 'Galet réglable double à billes', category: 'galets', image: IMAGES.accessories2, docPage: '02' },
  { id: 19, ref: 'FRMIA', name: 'Fermeture MIA automatique', category: 'fermetures', image: IMAGES.accessories2, docPage: '02' },
  { id: 20, ref: 'FR 33.60', name: 'Fermeture ALPHA automatique', category: 'fermetures', image: IMAGES.accessories2, docPage: '02' },
  { id: 21, ref: 'FR 33.80', name: 'Fermeture ALPHA avec clé + gâche', category: 'fermetures', image: IMAGES.accessories2, docPage: '02' },
  { id: 22, ref: 'GH 70', name: 'Gâche à glisser', category: 'fermetures', image: IMAGES.accessories2, docPage: '02' },
];

export const TECHNICAL_DOCS = [
  { id: 'profiles', title: 'Profils & Inerties', subtitle: 'Tableau général des profils et des valeurs Ix / Iy', image: IMAGES.profiles },
  { id: 'dimensions', title: 'Dimensions Techniques', subtitle: 'Sections et cotes d\'ouvrants simple vitrage', image: IMAGES.dimensions },
  { id: 'accessories1', title: 'Accessoires — 01', subtitle: 'Joints, feutrines, bouchons et clapets d\'évacuation', image: IMAGES.accessories1 },
  { id: 'accessories2', title: 'Accessoires — 02', subtitle: 'Galets, équerres d\'assemblage et serrures de fermeture', image: IMAGES.accessories2 },
];
