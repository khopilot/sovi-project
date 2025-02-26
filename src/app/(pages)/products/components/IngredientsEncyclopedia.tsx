'use client';

import { useState, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog } from '@headlessui/react'
import { BeakerIcon, SparklesIcon, BookOpenIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Search, Leaf, Filter, Droplets, Flame } from 'lucide-react'
import Image from 'next/image'

interface Ingredient {
  name: string
  category: string
  majorBenefit: string
  minorBenefit: string
  useCases: string
  source: string
  khmerTradition: string
  scientificInsight: string
  culturalFact: string
}

interface IngredientsEncyclopediaProps {
  ingredients: Ingredient[]
}

// Category icon mapping
const getCategoryIcon = (category: string) => {
  const categoryMap: Record<string, React.ReactNode> = {
    'Moisturizer': <Droplets className="h-6 w-6 text-azure" />,
    'Product Enhancer': <SparklesIcon className="h-6 w-6 text-gamboge" />,
    'Analgesic': <Flame className="h-6 w-6 text-fire" />,
    'Anti-Inflammatory': <Leaf className="h-6 w-6 text-ice" />,
    'Circulatory Stimulant': <BeakerIcon className="h-6 w-6 text-salmon" />,
    'Counterirritant': <BeakerIcon className="h-6 w-6 text-ochre" />
  };
  
  return categoryMap[category] || <BeakerIcon className="h-6 w-6 text-ice" />;
};

// Get category color class
const getCategoryColorClass = (category: string) => {
  const colorMap: Record<string, string> = {
    'Moisturizer': 'bg-azure/10 text-azure border-azure/20',
    'Product Enhancer': 'bg-gamboge/10 text-gamboge border-gamboge/20',
    'Analgesic': 'bg-fire/10 text-fire border-fire/20',
    'Anti-Inflammatory': 'bg-ice/10 text-ice border-ice/20',
    'Circulatory Stimulant': 'bg-salmon/10 text-salmon border-salmon/20',
    'Counterirritant': 'bg-ochre/10 text-ochre border-ochre/20'
  };
  
  return colorMap[category] || 'bg-ice/10 text-ice border-ice/20';
};

// Get category gradient class
const getCategoryGradientClass = (category: string) => {
  const gradientMap: Record<string, string> = {
    'Moisturizer': 'from-azure/20 to-azure/5 border-azure/10',
    'Product Enhancer': 'from-gamboge/20 to-gamboge/5 border-gamboge/10',
    'Analgesic': 'from-fire/20 to-fire/5 border-fire/10',
    'Anti-Inflammatory': 'from-ice/20 to-ice/5 border-ice/10',
    'Circulatory Stimulant': 'from-salmon/20 to-salmon/5 border-salmon/10',
    'Counterirritant': 'from-ochre/20 to-ochre/5 border-ochre/10'
  };
  
  return gradientMap[category] || 'from-ice/20 to-ice/5 border-ice/10';
};

const getIngredientNameGradient = (category: string) => {
  switch(category) {
    case 'Moisturizer': 
      return 'bg-gradient-to-r from-azure to-azure/70 bg-clip-text text-transparent';
    case 'Product Enhancer': 
      return 'bg-gradient-to-r from-gamboge to-gamboge/70 bg-clip-text text-transparent';
    case 'Analgesic': 
      return 'bg-gradient-to-r from-fire to-fire/70 bg-clip-text text-transparent';
    case 'Anti-Inflammatory': 
      return 'bg-gradient-to-r from-ice to-ice/70 bg-clip-text text-transparent';
    case 'Circulatory Stimulant': 
      return 'bg-gradient-to-r from-salmon to-salmon/70 bg-clip-text text-transparent';
    case 'Counterirritant': 
      return 'bg-gradient-to-r from-ochre to-ochre/70 bg-clip-text text-transparent';
    default: 
      return 'bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent';
  }
};

const IngredientCard = memo(function IngredientCard({ 
  ingredient,
  onSelect
}: { 
  ingredient: Ingredient
  onSelect: (ingredient: Ingredient) => void
}) {
  const categoryColorClass = getCategoryColorClass(ingredient.category);
  
  // Get brandmark logo based on category - using a static string instead of a function
  const brandmarkLogo = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': 
        return "/images/Logo/Naga Balm__Brandmark_Ice.png";
      case 'Product Enhancer': 
        return "/images/Logo/Naga Balm__Brandmark_Gambodge.png";
      case 'Analgesic': 
        return "/images/Logo/Naga Balm__Brandmark_Fire.png";
      case 'Anti-Inflammatory': 
        return "/images/Logo/Naga Balm__Brandmark_Ice.png";
      case 'Circulatory Stimulant': 
        return "/images/Logo/Naga Balm__Brandmark_White.png";
      case 'Counterirritant': 
        return "/images/Logo/Naga Balm__Brandmark_Gambodge.png";
      default: 
        return "/images/Logo/Naga Balm__Brandmark_Black.png";
    }
  })();
  
  // Get background image based on category
  const backgroundImage = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': 
        return "/images/Naga Balm Element (Cloud)/Background 1.png";
      case 'Product Enhancer': 
        return "/images/Naga Balm Element (Cloud)/Background 2.png";
      case 'Analgesic': 
        return "/images/Naga Balm Element (Cloud)/Background 3.png";
      case 'Anti-Inflammatory': 
        return "/images/Naga Balm Element (Cloud)/Background 4.png";
      case 'Circulatory Stimulant': 
        return "/images/Naga Balm Element (Cloud)/Background 1.png";
      case 'Counterirritant': 
        return "/images/Naga Balm Element (Cloud)/Background 2.png";
      default: 
        return "/images/Naga Balm Element (Cloud)/Background 3.png";
    }
  })();
  
  // Get text color class based on category
  const textColorClass = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': return 'text-azure';
      case 'Product Enhancer': return 'text-gamboge';
      case 'Analgesic': return 'text-fire';
      case 'Anti-Inflammatory': return 'text-ice';
      case 'Circulatory Stimulant': return 'text-salmon';
      case 'Counterirritant': return 'text-ochre';
      default: return 'text-gray-700';
    }
  })();
  
  // Get explicit gradient for the top bar
  const explicitGradient = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': return 'bg-gradient-to-r from-azure to-azure/70';
      case 'Product Enhancer': return 'bg-gradient-to-r from-gamboge to-gamboge/70';
      case 'Analgesic': return 'bg-gradient-to-r from-fire to-fire/70';
      case 'Anti-Inflammatory': return 'bg-gradient-to-r from-ice to-ice/70';
      case 'Circulatory Stimulant': return 'bg-gradient-to-r from-salmon to-salmon/70';
      case 'Counterirritant': return 'bg-gradient-to-r from-ochre to-ochre/70';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-300';
    }
  })();
  
  return (
    <motion.div
      onClick={() => onSelect(ingredient)}
      className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Background image layer */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient overlay to improve content readability */}
        <div className={`absolute inset-0 ${explicitGradient} opacity-80 backdrop-blur-[1px]`}></div>
      </div>
      
      {/* Top accent bar based on category - using explicit gradient */}
      <div className={`h-3 w-full ${explicitGradient} relative z-10`} />
      
      {/* Brandmark watermark - increased opacity and adjusted position */}
      <div className="absolute right-3 bottom-3 opacity-40 pointer-events-none z-10">
        <Image 
          src={brandmarkLogo} 
          alt="Naga Balm Brandmark" 
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
      
      <div className="p-6 bg-white/40 backdrop-blur-sm relative z-10">
        <div className="flex items-start gap-3 mb-4">
          <div className={`p-3 rounded-full ${categoryColorClass.split(' ')[0]} shadow-md`}>
            {getCategoryIcon(ingredient.category)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {ingredient.name}
            </h3>
            <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColorClass}`}>
              {ingredient.category}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {ingredient.majorBenefit.replace(/\[oai_citation_attribution:[^\]]+\]\([^)]+\)/g, '')}
        </p>

        <div className="flex justify-end">
          <motion.div 
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${textColorClass} bg-white/80 border border-current shadow-sm`}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
})

const IngredientDetail = memo(function IngredientDetail({
  ingredient,
  onClose
}: {
  ingredient: Ingredient
  onClose: () => void
}) {
  // Clean citation links from text
  const cleanText = (text: string) => {
    return text.replace(/\[oai_citation_attribution:[^\]]+\]\([^)]+\)/g, '');
  };
  
  const categoryColorClass = getCategoryColorClass(ingredient.category);
  const gradientClass = getCategoryGradientClass(ingredient.category);
  
  // Get brandmark logo based on category - using a static string instead of a function
  const brandmarkLogo = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': 
        return "/images/Logo/Naga Balm__Brandmark_Ice.png";
      case 'Product Enhancer': 
        return "/images/Logo/Naga Balm__Brandmark_Gambodge.png";
      case 'Analgesic': 
        return "/images/Logo/Naga Balm__Brandmark_Fire.png";
      case 'Anti-Inflammatory': 
        return "/images/Logo/Naga Balm__Brandmark_Ice.png";
      case 'Circulatory Stimulant': 
        return "/images/Logo/Naga Balm__Brandmark_White.png";
      case 'Counterirritant': 
        return "/images/Logo/Naga Balm__Brandmark_Gambodge.png";
      default: 
        return "/images/Logo/Naga Balm__Brandmark_Black.png";
    }
  })();
  
  // Get background image based on category
  const backgroundImage = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': 
        return "/images/Naga Balm Element (Cloud)/Background 1.png";
      case 'Product Enhancer': 
        return "/images/Naga Balm Element (Cloud)/Background 2.png";
      case 'Analgesic': 
        return "/images/Naga Balm Element (Cloud)/Background 3.png";
      case 'Anti-Inflammatory': 
        return "/images/Naga Balm Element (Cloud)/Background 4.png";
      case 'Circulatory Stimulant': 
        return "/images/Naga Balm Element (Cloud)/Background 1.png";
      case 'Counterirritant': 
        return "/images/Naga Balm Element (Cloud)/Background 2.png";
      default: 
        return "/images/Naga Balm Element (Cloud)/Background 3.png";
    }
  })();
  
  // Get text color class based on category
  const textColorClass = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': return 'text-azure';
      case 'Product Enhancer': return 'text-gamboge';
      case 'Analgesic': return 'text-fire';
      case 'Anti-Inflammatory': return 'text-ice';
      case 'Circulatory Stimulant': return 'text-salmon';
      case 'Counterirritant': return 'text-ochre';
      default: return 'text-gray-700';
    }
  })();
  
  // Get explicit gradient for the top bar
  const explicitGradient = (() => {
    switch(ingredient.category) {
      case 'Moisturizer': return 'bg-gradient-to-r from-azure to-azure/70';
      case 'Product Enhancer': return 'bg-gradient-to-r from-gamboge to-gamboge/70';
      case 'Analgesic': return 'bg-gradient-to-r from-fire to-fire/70';
      case 'Anti-Inflammatory': return 'bg-gradient-to-r from-ice to-ice/70';
      case 'Circulatory Stimulant': return 'bg-gradient-to-r from-salmon to-salmon/70';
      case 'Counterirritant': return 'bg-gradient-to-r from-ochre to-ochre/70';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-300';
    }
  })();
  
  // Get color for minor benefits section
  const getMinorBenefitsColor = () => {
    const color = ingredient.category === 'Moisturizer' ? 'azure' : 
                  ingredient.category === 'Product Enhancer' ? 'gamboge' : 
                  ingredient.category === 'Analgesic' ? 'fire' : 
                  ingredient.category === 'Anti-Inflammatory' ? 'ice' : 
                  ingredient.category === 'Circulatory Stimulant' ? 'salmon' : 
                  ingredient.category === 'Counterirritant' ? 'ochre' : 'azure';
    return {
      gradient: `from-${color}/20 to-${color}/5`,
      border: `border-${color}/10`,
      text: `text-${color}`
    };
  };
  
  // Get color for traditional use section
  const getTraditionalUseColor = () => {
    const color = ingredient.category === 'Moisturizer' ? 'gamboge' : 
                  ingredient.category === 'Product Enhancer' ? 'fire' : 
                  ingredient.category === 'Analgesic' ? 'ice' : 
                  ingredient.category === 'Anti-Inflammatory' ? 'salmon' : 
                  ingredient.category === 'Circulatory Stimulant' ? 'ochre' : 
                  ingredient.category === 'Counterirritant' ? 'azure' : 'gamboge';
    return {
      gradient: `from-${color}/20 to-${color}/5`,
      border: `border-${color}/10`,
      text: `text-${color}`
    };
  };
  
  // Get colors for the right side sections
  const getScientificInsightsColor = () => {
    const color = ingredient.category === 'Moisturizer' ? 'ice' : 
                  ingredient.category === 'Product Enhancer' ? 'azure' : 
                  ingredient.category === 'Analgesic' ? 'gamboge' : 
                  ingredient.category === 'Anti-Inflammatory' ? 'fire' : 
                  ingredient.category === 'Circulatory Stimulant' ? 'ochre' : 
                  ingredient.category === 'Counterirritant' ? 'salmon' : 'ice';
    return {
      gradient: `from-${color}/10 to-white`,
      border: `border-${color}/10`,
      text: `text-${color}`
    };
  };
  
  const getSourceColor = () => {
    const color = ingredient.category === 'Moisturizer' ? 'fire' : 
                  ingredient.category === 'Product Enhancer' ? 'salmon' : 
                  ingredient.category === 'Analgesic' ? 'azure' : 
                  ingredient.category === 'Anti-Inflammatory' ? 'gamboge' : 
                  ingredient.category === 'Circulatory Stimulant' ? 'ice' : 
                  ingredient.category === 'Counterirritant' ? 'fire' : 'fire';
    return {
      gradient: `from-${color}/10 to-white`,
      border: `border-${color}/10`,
      text: `text-${color}`
    };
  };
  
  const getKhmerTraditionColor = () => {
    const color = ingredient.category === 'Moisturizer' ? 'salmon' : 
                  ingredient.category === 'Product Enhancer' ? 'ochre' : 
                  ingredient.category === 'Analgesic' ? 'salmon' : 
                  ingredient.category === 'Anti-Inflammatory' ? 'ochre' : 
                  ingredient.category === 'Circulatory Stimulant' ? 'azure' : 
                  ingredient.category === 'Counterirritant' ? 'gamboge' : 'salmon';
    return {
      gradient: `from-${color}/10 to-white`,
      border: `border-${color}/10`,
      text: `text-${color}`
    };
  };
  
  const getCulturalFactColor = () => {
    const color = ingredient.category === 'Moisturizer' ? 'buttercup' : 
                  ingredient.category === 'Product Enhancer' ? 'ice' : 
                  ingredient.category === 'Analgesic' ? 'ochre' : 
                  ingredient.category === 'Anti-Inflammatory' ? 'azure' : 
                  ingredient.category === 'Circulatory Stimulant' ? 'fire' : 
                  ingredient.category === 'Counterirritant' ? 'ice' : 'buttercup';
    return {
      gradient: `from-${color}/10 to-white`,
      border: `border-${color}/10`,
      text: `text-${color}`
    };
  };
  
  // Get color values for each section
  const minorBenefitsColor = getMinorBenefitsColor();
  const traditionalUseColor = getTraditionalUseColor();
  const scientificInsightsColor = getScientificInsightsColor();
  const sourceColor = getSourceColor();
  const khmerTraditionColor = getKhmerTraditionColor();
  const culturalFactColor = getCulturalFactColor();
  
  return (
    <Dialog.Panel 
      className="relative w-full max-w-6xl transform rounded-2xl bg-white shadow-2xl transition-all overflow-hidden"
    >
      {/* Remove the background image layer and keep only a subtle gradient */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"
      />
      
      {/* Top accent bar based on category */}
      <div className={`h-4 w-full ${explicitGradient} relative z-10`} />
      
      {/* Brandmark watermark - increased opacity and adjusted position */}
      <div className="absolute right-12 top-12 opacity-40 pointer-events-none z-10">
        <Image 
          src={brandmarkLogo} 
          alt="Naga Balm Brandmark" 
          width={288}
          height={288}
          className="object-contain"
        />
      </div>
      
      <button
        type="button"
        className="absolute right-4 top-6 z-20 rounded-full bg-white/90 p-2.5 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ice transition-all duration-200 shadow-md"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-8 bg-white/60 backdrop-blur-md relative z-10">
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-white/80 p-4 rounded-xl shadow-sm border border-gray-100">
            <div className={`p-4 rounded-full ${categoryColorClass.split(' ')[0]} shadow-md`}>
              {getCategoryIcon(ingredient.category)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                <span className={getIngredientNameGradient(ingredient.category)}>
                  {ingredient.name}
                </span>
              </h2>
              <span className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${categoryColorClass}`}>
                {ingredient.category}
              </span>
            </div>
          </div>

          <div className="prose prose-ice max-w-none">
            {/* Major Benefit card with background image */}
            <div 
              className={`relative rounded-xl p-5 border backdrop-blur-sm shadow-sm overflow-hidden`}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay for better readability */}
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-90`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <SparklesIcon className={`h-5 w-5 ${textColorClass} flex-shrink-0`} />
                  <h4 className="font-semibold text-gray-900">Major Benefit</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.majorBenefit)}</p>
              </div>
            </div>

            {/* Minor Benefits card with background image */}
            <div 
              className={`relative rounded-xl p-5 mt-4 border shadow-sm overflow-hidden`}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay for better readability */}
              <div className={`absolute inset-0 bg-gradient-to-r ${minorBenefitsColor.gradient} opacity-90`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className={`h-5 w-5 ${minorBenefitsColor.text} flex-shrink-0`} />
                  <h4 className="font-semibold text-gray-900">Minor Benefits</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.minorBenefit)}</p>
              </div>
            </div>

            {/* Traditional Use card with background image */}
            <div 
              className={`relative rounded-xl p-5 mt-4 border shadow-sm overflow-hidden`}
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay for better readability */}
              <div className={`absolute inset-0 bg-gradient-to-r ${traditionalUseColor.gradient} opacity-90`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpenIcon className={`h-5 w-5 ${traditionalUseColor.text} flex-shrink-0`} />
                  <h4 className="font-semibold text-gray-900">Traditional Use</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.useCases)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Scientific Insights card with background image */}
          <div 
            className={`relative rounded-xl p-6 border shadow-sm overflow-hidden`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better readability */}
            <div className={`absolute inset-0 bg-gradient-to-r ${scientificInsightsColor.gradient} opacity-90`}></div>
            
            <div className="relative z-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BeakerIcon className={`h-5 w-5 ${scientificInsightsColor.text}`} />
                Scientific Insights
              </h4>
              <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.scientificInsight)}</p>
            </div>
          </div>

          {/* Source card with background image */}
          <div 
            className={`relative rounded-xl p-6 border shadow-sm overflow-hidden`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better readability */}
            <div className={`absolute inset-0 bg-gradient-to-r ${sourceColor.gradient} opacity-90`}></div>
            
            <div className="relative z-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Leaf className={`h-5 w-5 ${sourceColor.text}`} />
                Source
              </h4>
              <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.source)}</p>
            </div>
          </div>

          {/* Khmer Tradition card with background image */}
          <div 
            className={`relative rounded-xl p-6 border shadow-sm overflow-hidden`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better readability */}
            <div className={`absolute inset-0 bg-gradient-to-r ${khmerTraditionColor.gradient} opacity-90`}></div>
            
            <div className="relative z-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpenIcon className={`h-5 w-5 ${khmerTraditionColor.text}`} />
                Khmer Tradition
              </h4>
              <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.khmerTradition)}</p>
            </div>
          </div>

          {/* Cultural Fact card with background image */}
          <div 
            className={`relative rounded-xl p-6 border shadow-sm overflow-hidden`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better readability */}
            <div className={`absolute inset-0 bg-gradient-to-r ${culturalFactColor.gradient} opacity-90`}></div>
            
            <div className="relative z-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <SparklesIcon className={`h-5 w-5 ${culturalFactColor.text}`} />
                Cultural Fact
              </h4>
              <p className="text-gray-700 leading-relaxed">{cleanText(ingredient.culturalFact)}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with category-based styling */}
      <div className={`p-4 ${explicitGradient} bg-opacity-10 border-t border-gray-200 flex justify-between items-center`}>
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full bg-white/80 shadow-sm`}>
            {getCategoryIcon(ingredient.category)}
          </div>
          <span className="text-sm font-medium text-gray-700">Naga Balm Ingredient</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">Share this ingredient:</span>
          <div className="flex gap-2">
            <button className={`p-2 rounded-full bg-white/80 ${textColorClass} hover:bg-white transition-colors duration-200 shadow-sm`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button className={`p-2 rounded-full bg-white/80 ${textColorClass} hover:bg-white transition-colors duration-200 shadow-sm`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </button>
            <button className={`p-2 rounded-full bg-white/80 ${textColorClass} hover:bg-white transition-colors duration-200 shadow-sm`}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.170 14.999c-.538.021-1.053.235-1.53.646-.477.412-.718.975-.718 1.691 0 .716.241 1.279.718 1.691.477.411.992.625 1.53.646.56-.021 1.086-.235 1.573-.646.487-.412.731-.975.731-1.691 0-.716-.244-1.279-.731-1.691-.487-.411-1.013-.625-1.573-.646zm9.66 0c-.538.021-1.053.235-1.53.646-.477.412-.718.975-.718 1.691 0 .716.241 1.279.718 1.691.477.411.992.625 1.53.646.56-.021 1.086-.235 1.573-.646.487-.412.731-.975.731-1.691 0-.716-.244-1.279-.731-1.691-.487-.411-1.013-.625-1.573-.646zm9.66 0c-.538.021-1.053.235-1.53.646-.477.412-.718.975-.718 1.691 0 .716.241 1.279.718 1.691.477.411.992.625 1.53.646.56-.021 1.086-.235 1.573-.646.487-.412.731-.975.731-1.691 0-.716-.244-1.279-.731-1.691-.487-.411-1.013-.625-1.573-.646zm9.66 0c-.538.021-1.053.235-1.53.646-.477.412-.718.975-.718 1.691 0 .716.241 1.279.718 1.691.477.411.992.625 1.53.646.56-.021 1.086-.235 1.573-.646.487-.412.731-.975.731-1.691 0-.716-.244-1.279-.731-1.691-.487-.411-1.013-.625-1.573-.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  )
})

const IngredientsEncyclopedia = memo(function IngredientsEncyclopedia({ ingredients }: IngredientsEncyclopediaProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...new Set(ingredients.map(i => i.category))]

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.trim())
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  const filteredIngredients = ingredients.filter(ingredient => {
    const searchTerms = [
      ingredient.name.toLowerCase(),
      ingredient.category.toLowerCase(),
      ingredient.majorBenefit.toLowerCase(),
      ingredient.minorBenefit.toLowerCase(),
      ingredient.useCases.toLowerCase(),
    ]
    const query = searchQuery.toLowerCase()
    
    const matchesSearch = 
      searchQuery === '' || 
      searchTerms.some(term => term.includes(query))

    const matchesCategory = 
      selectedCategory === 'all' || 
      ingredient.category.toLowerCase() === selectedCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-ice/20 to-transparent"></div>
      
      <motion.div 
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block mb-4">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1 relative z-10">
              <span className="bg-gradient-to-r from-fire via-gamboge to-azure bg-clip-text text-transparent">
                Ingredients Encyclopedia
              </span>
            </h1>
            <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-fire via-gamboge to-azure rounded-full"></div>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the natural ingredients that make our products effective, and learn about their traditional uses and scientific benefits.
        </p>
      </motion.div>

      <motion.div 
        className="mb-8 space-y-4 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-fire" aria-hidden="true" />
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-fire/30 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fire sm:text-sm sm:leading-6 transition-shadow duration-200"
              placeholder="Search ingredients..."
            />
          </div>

          <div className="flex-shrink-0 relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Filter className="h-5 w-5 text-gamboge" aria-hidden="true" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gamboge/30 focus:ring-2 focus:ring-inset focus:ring-gamboge sm:text-sm sm:leading-6 appearance-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gamboge" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-500 flex items-center">
          <div className="h-1.5 w-20 bg-gradient-to-r from-fire via-gamboge to-azure rounded-full mr-3"></div>
          {filteredIngredients.length === 0 ? (
            'No ingredients found'
          ) : (
            <>
              Showing {filteredIngredients.length} ingredient{filteredIngredients.length !== 1 ? 's' : ''}
              {searchQuery && <> for &ldquo;<span className="font-medium text-fire">{searchQuery}</span>&rdquo;</>}
              {selectedCategory !== 'all' && (
                <> in <span className="font-medium text-gamboge">{selectedCategory}</span></>
              )}
            </>
          )}
        </div>
      </motion.div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 relative">
        {filteredIngredients.map((ingredient, index) => (
          <motion.div
            key={ingredient.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 0.4, 
              delay: index % 3 * 0.1 // Stagger effect based on column position
            }}
          >
            <IngredientCard
              ingredient={ingredient}
              onSelect={setSelectedIngredient}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {filteredIngredients.length === 0 && (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-fire/20 via-gamboge/20 to-azure/20 flex items-center justify-center">
            <BeakerIcon className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No ingredients found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter to find what you&apos;re looking for.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-fire to-gamboge hover:from-fire/90 hover:to-gamboge/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fire"
            >
              Reset filters
            </button>
          </div>
        </motion.div>
      )}

      {/* Ingredient Detail Modal */}
      <AnimatePresence>
        {selectedIngredient && (
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            open={!!selectedIngredient}
            onClose={() => setSelectedIngredient(null)}
          >
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                <div className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" />
                
                <motion.div
                  className="relative z-10 w-full max-w-6xl mx-auto"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <IngredientDetail
                    ingredient={selectedIngredient}
                    onClose={() => setSelectedIngredient(null)}
                  />
                </motion.div>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
})

export default IngredientsEncyclopedia 