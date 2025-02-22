export interface FeaturedProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  keyIngredient: string;
}

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'naga-balm-ice',
    name: 'Naga Balm Ice',
    description: 'NATURALLY COOL. Cooling and soothing through the cooling power of menthol and arnica. Temporary pain relief from joint pain, sore muscles, chest and nasal congestion relief.',
    image: '/images/NB-Ointment-Ice.jpg',
    category: 'Cooling Relief',
    keyIngredient: 'Arnica & Menthol'
  },
  {
    id: 'extreme-liniment-oil',
    name: 'Naga Balm Extreme Liniment Oil',
    description: 'EXTREME RELIEF. The extreme reliever of severe or chronic pain with long-lasting heat. Relief of severe or chronic pain. Great for muscle recovery.',
    image: '/images/NB-ExtremeLinimentOil1.jpg',
    category: 'Deep Heat',
    keyIngredient: 'Capsicum & Wintergreen'
  },
  {
    id: 'inhaler-roll-on',
    name: 'Naga Balm Roll-On',
    description: 'TWO-IN-ONE RELIEF. A two-in-one touch-free pain relief solution to take on the go. Inhaler: Relief from nausea, congestion, headaches & stress.',
    image: '/images/NB-Inhaler-RollOn1.jpg',
    category: 'On-The-Go Relief',
    keyIngredient: 'Pomelo Peel & Wintergreen'
  },
  {
    id: 'mosquito-repellent',
    name: 'Naga Balm Mosquito Repellent',
    description: 'EMBRACE LIFE, REPEL MOSQUITOES. The most effective and safe mosquito repellent in Cambodia. Made with 20% Picaridin, it is child safe (6 months up) and skin safe.',
    image: '/images/NB-MosquitoRepellent1.jpg',
    category: 'Protection',
    keyIngredient: 'Picaridin'
  }
]; 