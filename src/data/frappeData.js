// Data for EMERAUDE FRAPPE (Casement / Ouvrant & Dormant à Frappe)

export const FRAPPE_IMAGES = {
  hero: '/images/product2.jpeg',
  system: '/images/product2-4.jpeg',
  profiles: '/images/product2-5.jpeg',     // Profils aluminium table
  accessories: '/images/product2-2.jpeg',  // Accessoires table (Série à frappe MD500)
  coup: '/images/product2.jpeg',          // La coupe 3D
};

export const FRAPPE_PROFILES_DATA = [
  {
    ref: 'MD521',
    type: 'Dormant sans couvre-joint',
    ix: '2.2',
    iy: '5',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Dormant sans couvre-joint pour système à frappe Émeraude.'
  },
  {
    ref: 'MD523',
    type: 'Dormant avec couvre-joint',
    ix: '3.8',
    iy: '6.3',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Dormant avec couvre-joint intégré pour finition soignée et pose facile.'
  },
  {
    ref: 'MD531',
    type: 'Ouvrant fenêtre',
    ix: '5.4',
    iy: '10',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Profilé ouvrant pour fenêtre à la française / oscillo-battante standard.'
  },
  {
    ref: 'MD533',
    type: 'Ouvrant fenêtre',
    ix: '20.6',
    iy: '15.7',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Profilé ouvrant fenêtre renforcé pour grandes dimensions et vitrage lourd.'
  },
  {
    ref: 'MD540',
    type: 'Traverse',
    ix: '8.7',
    iy: '8',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Traverse intermédiaire et meneau pour division des ensembles vitrés.'
  },
  {
    ref: 'MD542',
    type: 'Traverse',
    ix: '20.2',
    iy: '10.1',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Traverse intermédiaire renforcée à haute résistance mécanique.'
  },
  {
    ref: '5060',
    type: 'Battement 2 vantaux',
    ix: '8.3',
    iy: '6.7',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Profilé de battement central pour fenêtres et portes-fenêtres à 2 vantaux.'
  },
  {
    ref: '5041',
    type: 'Traverse renforcée',
    ix: '44.2',
    iy: '11.3',
    image: FRAPPE_IMAGES.profiles,
    desc: 'Traverse à inertie supérieure renforcée pour grandes portées.'
  },
];

export const FRAPPE_ACCESSORIES_CATEGORIES = [
  { id: 'all', label: 'Tous les accessoires' },
  { id: 'equerres', label: 'Équerres' },
  { id: 'paumelles', label: 'Paumelles' },
  { id: 'poignees', label: 'Poignées / Béquilles' },
  { id: 'cremones', label: 'Crémones' },
];

export const FRAPPE_ACCESSORIES_DATA = [
  {
    id: 1,
    ref: '1303',
    name: 'Équerre à 36x10 pour dormants MD521, MD523 et MD531',
    category: 'equerres',
    categoryLabel: 'Équerres',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 2,
    ref: '4303-Bis',
    name: 'Équerre à pion 36x36 pour ouvrants MD533 Bis',
    category: 'equerres',
    categoryLabel: 'Équerres',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 3,
    ref: '5700',
    name: 'Paumelle réversible',
    category: 'paumelles',
    categoryLabel: 'Paumelles',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 4,
    ref: '5601',
    name: 'Paumelle réversible lourde 100 kg',
    category: 'paumelles',
    categoryLabel: 'Paumelles',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 5,
    ref: '5602',
    name: 'Béquille porte CONFORT',
    category: 'poignees',
    categoryLabel: 'Poignées / Béquilles',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 6,
    ref: 'ST5701',
    name: 'Béquille porte GEMINIS',
    category: 'poignees',
    categoryLabel: 'Poignées / Béquilles',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 7,
    ref: 'ST5702',
    name: 'Béquille SIRIUS',
    category: 'poignees',
    categoryLabel: 'Poignées / Béquilles',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 8,
    ref: '5603',
    name: 'Crémone CONFORT + kit OF',
    category: 'cremones',
    categoryLabel: 'Crémones',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 9,
    ref: 'ST5703',
    name: 'Crémone LEO + kit OF',
    category: 'cremones',
    categoryLabel: 'Crémones',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
  {
    id: 10,
    ref: 'ST5704',
    name: 'Crémone SIRIUS + kit OF',
    category: 'cremones',
    categoryLabel: 'Crémones',
    source: 'Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docPage: 'MD500'
  },
];

export const FRAPPE_TECHNICAL_DOCS = [
  {
    id: 'profiles',
    title: 'Profils Aluminium & Inerties',
    subtitle: 'Tableau des profilés à frappe et valeurs Ix / Iy',
    image: FRAPPE_IMAGES.profiles,
    docLabel: 'Planche Technique Profilés'
  },
  {
    id: 'accessories',
    title: 'Accessoires Série à Frappe',
    subtitle: 'Nomenclature officielle Série à frappe MD500',
    image: FRAPPE_IMAGES.accessories,
    docLabel: 'Catalogue Accessoires MD500'
  },
  {
    id: 'coup',
    title: 'Coupe 3D du Profilé',
    subtitle: 'Section géométrique et assemblage thermique',
    image: FRAPPE_IMAGES.coup,
    docLabel: 'Vue 3D Isométrique'
  },
];
