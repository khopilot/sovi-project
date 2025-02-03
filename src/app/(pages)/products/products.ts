export interface Product {
    id: string
    name: {
      en: string
      km: string
    }
    description: {
      en: string
      km: string
    }
    ingredients: string[]
    keyIngredient: {
      name: string
      benefits: string
    }
    recommendedFor: string
    image: string
    category: 'balms' | 'oils' | 'sprays' | 'inhalers'
  }
  
  export const products: Product[] = [
    {
      id: 'naga-balm-original',
      name: {
        en: 'Naga Balm Original',
        km: 'ណាហ្គាបាមអូរីជីណល'
      },
      description: {
        en: 'The PAIN RELIEF POWERHOUSE. All-purpose pain relief, your go-to for the daily aches and pains of life. Pain relief from headaches, bug-bites, muscle pain, joint pain.',
        km: 'ថាមពលបំបាត់ការឈឺចាប់។ ការបំបាត់ការឈឺចាប់គ្រប់បែបយ៉ាង សម្រាប់ការឈឺចាប់ប្រចាំថ្ងៃ។'
      },
      ingredients: [
        'Coconut Oil',
        'White Beeswax',
        'Camphor Bark Oil',
        'Peppermint Oil',
        'Eucalyptus Oil',
        'Cajuput Oil',
        'Cypress Oil',
        'Clove Oil'
      ],
      keyIngredient: {
        name: 'Peppermint',
        benefits: 'Relief from tension headaches, bug bites. A topical muscle relaxant for muscle tension and spasms. Improves blood circulation for better healing.'
      },
      recommendedFor: 'All people, families, young children aged 1+',
      image: '/images/NB-Ointment-Original1.jpg',
      category: 'balms'
    },
    {
      id: 'naga-balm-ice',
      name: {
        en: 'Naga Balm Ice',
        km: 'ណាហ្គាបាមអាយស៍'
      },
      description: {
        en: 'NATURALLY COOL. Cooling and soothing through the cooling power of menthol and arnica. Temporary pain relief from joint pain, sore muscles, chest and nasal congestion relief.',
        km: 'ធម្មជាតិត្រជាក់។ ត្រជាក់និងសុខស្រួលតាមរយៈថាមពលត្រជាក់នៃមិនថុលនិងអានីកា។'
      },
      ingredients: [
        'Coconut Oil',
        'White Beeswax',
        'Menthol',
        'Arnica Oil',
        'Eucalyptus Oil',
        'Camphor Bark Oil',
        'Clove Oil'
      ],
      keyIngredient: {
        name: 'Arnica',
        benefits: 'Anti-inflammatory, analgesic, improves circulation, reduces appearance and pain of bruising. When combined with menthol, arnica offers powerful pain relief.'
      },
      recommendedFor: 'Those with sensitive skin, for use on areas of sensitive skin, older people.',
      image: '/images/NB-Ointment-Ice.jpg',
      category: 'balms'
    },
    {
      id: 'naga-balm-fire',
      name: {
        en: 'Naga Balm Fire',
        km: 'ណាហ្គាបាមហ្វាយ'
      },
      description: {
        en: 'NATURALLY FIERY. Soothing heat and increases blood circulation for accelerated recovery. Deeper relief of muscle aches, pulled muscles, bruising, arthritis pain, and nerve pain.',
        km: 'ធម្មជាតិក្តៅ។ កំដៅសុខស្រួលនិងបង្កើនការរត់ឈាមសម្រាប់ការស្តារឡើងវិញលឿន។'
      },
      ingredients: [
        'Chili Infused Coconut Oil',
        'White Beeswax',
        'Camphor Bark Oil',
        'Peppermint Oil',
        'Eucalyptus Oil',
        'Cajuput Oil',
        'Clove Oil',
        'Capsicum Annuum Fruit Extract'
      ],
      keyIngredient: {
        name: 'Capsicum',
        benefits: 'Reduces perception of pain, increases blood flow, anti-inflammatory, and promotes healing through increased blood circulation.'
      },
      recommendedFor: 'Those who need a deep heat balm, athletes, those who do a lot of physical activity.',
      image: '/images/NB-Ointment-Fire.jpg',
      category: 'balms'
    },
    {
      id: 'naga-balm-go',
      name: {
        en: 'Naga Balm Go',
        km: 'ណាហ្គាបាមហ្គូ'
      },
      description: {
        en: 'NATURALLY ENERGIZING. Fastest working with cooling and warming sensations. Best out of all for muscle and joint pain, minor sprains, bruising, and tension headaches.',
        km: 'ថាមពលធម្មជាតិ។ ដំណើរការលឿនបំផុតជាមួយអារម្មណ៍ត្រជាក់និងក្តៅ។'
      },
      ingredients: [
        'Coconut Oil',
        'White Beeswax',
        'Oil of Wintergreen',
        'Menthol',
        'Camphor',
        'Eucalyptus Oil',
        'Cypress Oil',
        'Clove Oil'
      ],
      keyIngredient: {
        name: 'Wintergreen',
        benefits: 'Topical analgesic, anti-inflammatory, provides a cooling and numbing sensation for immediate pain relief. Improves blood circulation to aid in healing. Menthol: Relieves pain by cooling and numbing.'
      },
      recommendedFor: 'Those who enjoy a more minty smell - great for nausea, dizziness, hangover.',
      image: '/images/NB-Ointment-Go.jpg',
      category: 'balms'
    },
    {
      id: 'naga-balm-go-liniment',
      name: {
        en: 'Naga Balm Go Liniment Oil',
        km: 'ប្រេងណាហ្គាបាមហ្គូ'
      },
      description: {
        en: 'LATHER, MASSAGE, GO. A unique, skin-friendly blend of wintergreen infused Naga Balm oils. Muscle and joint activation and recovery. Deep and smooth penetrative heating.',
        km: 'លាប ម៉ាស្សា ទៅ។ ការលាយប្រេងណាហ្គាបាមដែលមានវីនទ័រហ្គ្រីនពិសេស។'
      },
      ingredients: [
        'Coconut Oil',
        'Oil of Wintergreen',
        'Menthol',
        'Camphor',
        'Eucalyptus Oil',
        'Capric/Caprylic Triglyceride',
        'Clove Oil'
      ],
      keyIngredient: {
        name: 'Wintergreen',
        benefits: 'Topical analgesic, anti-inflammatory, provides a cooling and numbing sensation for immediate pain relief. Improves blood circulation to aid in healing.'
      },
      recommendedFor: 'Those who need a deep heat balm, athletes, those who do a lot of physical activity.',
      image: '/images/NB-EnergizingLinimentOil1.jpg',
      category: 'oils'
    },
    {
      id: 'extreme-liniment-oil',
      name: {
        en: 'Extreme Liniment Oil',
        km: 'ប្រេងលីនីមិនខ្លាំង'
      },
      description: {
        en: 'EXTREME RELIEF. The extreme reliever of severe or chronic pain with long-lasting heat. Relief of severe or chronic pain. Great for muscle recovery.',
        km: 'ការបំបាត់ការឈឺចាប់ខ្លាំង។ ការបំបាត់ការឈឺចាប់ធ្ងន់ធ្ងរឬរ៉ាំរ៉ៃជាមួយកំដៅយូរអង្វែង។'
      },
      ingredients: [
        'Chili Infused Coconut Oil',
        'Camphor',
        'Oil of Wintergreen',
        'Peppermint Oil',
        'Eucalyptus Oil',
        'Cajuput Oil',
        'Cypress Oil',
        'Clove Oil'
      ],
      keyIngredient: {
        name: 'Capsicum',
        benefits: 'Reduces perception of pain, increases blood flow, anti-inflammatory, and promotes healing through increased blood circulation.'
      },
      recommendedFor: 'Those who enjoy a more minty smell - great for nausea, dizziness, hangover.',
      image: '/images/NB-ExtremeLinimentOil1.jpg',
      category: 'oils'
    },
    {
      id: 'pain-relief-spray',
      name: {
        en: 'Energizing Pain Relief Spray',
        km: 'ស្ព្រេយ៍បំបាត់ការឈឺចាប់'
      },
      description: {
        en: 'SPRAY, RUB, GO. Immediate relief to get you moving. Its soothing blend of oil of wintergreen and Naga Balm oils will calm your senses and increase alertness. Ethanol based for a quick, immediate, relieving sensation.',
        km: 'បាញ់ លាប ទៅ។ ការបំបាត់ការឈឺចាប់ភ្លាមៗដើម្បីឱ្យអ្នកចល័តបាន។'
      },
      ingredients: [
        'Ethanol',
        'Purified Water',
        'Oil of Wintergreen',
        'Camphor',
        'Eucalyptus Oil',
        'Cypress Oil',
        'Clove Oil'
      ],
      keyIngredient: {
        name: 'Wintergreen',
        benefits: 'Topical analgesic, anti-inflammatory, provides a cooling and numbing sensation for immediate pain relief. Improves blood circulation to aid in healing.'
      },
      recommendedFor: 'Elders with joint pain, those with pain in hard-to-reach places like your back, those who want mess-free pain relief.',
      image: '/images/NB-EngergizingSpray1.jpg',
      category: 'sprays'
    },
    {
      id: 'inhaler-roll-on',
      name: {
        en: 'Inhaler & Roll-On',
        km: 'ឧបករណ៍ស្រូបនិងរ៉ូលអន'
      },
      description: {
        en: 'TWO-IN-ONE RELIEF. A two-in-one touch-free pain relief solution to take on the go. Inhaler: Relief from nausea, congestion, headaches & stress. Roll-On: Touch-free pain relief.',
        km: 'ការបំបាត់ការឈឺចាប់ពីរក្នុងមួយ។ ដំណោះស្រាយបំបាត់ការឈឺចាប់ដោយមិនប៉ះពាល់ពីរក្នុងមួយដើម្បីយកទៅជាមួយ។'
      },
      ingredients: [
        'Inhaler: Menthol, Eucalyptus Oil, Peppermint Oil, Camphor, Pomelo Peel Oil, Wintergreen Oil, Coconut Oil',
        'Roll-On: Menthol, Wintergreen Oil, Camphor, Eucalyptus Oil, Cypress Oil, Clove Oil, Coconut Oil'
      ],
      keyIngredient: {
        name: 'Pomelo Peel Oil',
        benefits: 'Supports healthy lung and airway function. Wintergreen: Topical analgesic, anti-inflammatory, provides a cooling and numbing sensation for immediate pain relief.'
      },
      recommendedFor: 'Those who need a deep heat balm, athletes, those who do a lot of physical activity.',
      image: '/images/NB-Inhaler-RollOn1.jpg',
      category: 'inhalers'
    },
    {
      id: 'mosquito-repellent',
      name: {
        en: 'Mosquito Repellent',
        km: 'ថ្នាំកម្ចាត់មូស'
      },
      description: {
        en: 'EMBRACE LIFE, REPEL MOSQUITOES. The most effective and safe mosquito repellent in Cambodia. Made with 20% Picaridin, it is child safe (6 months up) and skin safe.',
        km: 'រីករាយជាមួយជីវិត បណ្តេញមូស។ ថ្នាំកម្ចាត់មូសដែលមានប្រសិទ្ធភាពនិងសុវត្ថិភាពបំផុតនៅកម្ពុជា។'
      },
      ingredients: [
        'Picaridin',
        'Purified Water',
        'Ethanol'
      ],
      keyIngredient: {
        name: 'Picaridin',
        benefits: 'The most effective and safe mosquito repellent, child safe (6 months up) and skin safe.'
      },
      recommendedFor: 'Safe for children (6 months up) and adults.',
      image: '/images/NB-MosquitoRepellent1.jpg',
      category: 'sprays'
    },
    {
      id: 'medicated-oil',
      name: {
        en: 'Medicated Oil',
        km: 'ប្រេងឱសថ'
      },
      description: {
        en: 'Formulated to effectively relieve nausea, headaches, dizziness, congestion, stomachaches, and small aches and pains.',
        km: 'រូបមន្តដើម្បីបំបាត់ការចង់ក្អួត ឈឺក្បាល វិលមុខ ស្ទះច្រមុះ ឈឺពោះ និងការឈឺចាប់តិចតួច។'
      },
      ingredients: [
        'Methyl Salicylate',
        'Menthol',
        'Peppermint Oil',
        'Eucalyptus Oil',
        'Ginger Oil',
        'Clove Oil',
        'Spiked Lavender',
        'Coconut Oil'
      ],
      keyIngredient: {
        name: 'Methyl Salicylate',
        benefits: 'Formulated to relieve nausea, headaches, dizziness, congestion, and stomachaches.'
      },
      recommendedFor: 'Those suffering from nausea, headaches, or congestion.',
      image: '/images/NB-RollOn.jpg',
      category: 'oils'
    }
  ]
  
  export async function getProducts() {
    return products
  }
  
  export async function getProduct(id: string) {
    const product = products.find(p => p.id === id)
    if (!product) return null
    return product
  } 