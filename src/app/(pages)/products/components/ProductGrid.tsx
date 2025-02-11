'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/app/(pages)/products/products'
import QuickView from '@/app/(pages)/products/components/QuickView'
import { TrendingUp } from 'lucide-react'

type Category = 'all' | 'balms' | 'oils' | 'sprays' | 'inhalers'
type UseCase = 'all' | 'muscle-pain' | 'stiffness' | 'daily-use' | 'sports'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  
  const categories: Category[] = ['all', 'balms', 'oils', 'sprays', 'inhalers']

  // Listen for filter updates from UseCasesSection
  useEffect(() => {
    const handleFilterUpdate = (event: CustomEvent<{ useCase: UseCase }>) => {
      setSelectedUseCase(event.detail.useCase);
      setSelectedCategory('all'); // Reset category filter when use case is selected
      
      // Scroll to products section smoothly
      const productsSection = document.getElementById('products-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('updateProductFilter', handleFilterUpdate as EventListener);

    return () => {
      window.removeEventListener('updateProductFilter', handleFilterUpdate as EventListener);
    };
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesUseCase = selectedUseCase === 'all' || product.useCase.type === selectedUseCase

    return matchesCategory && matchesUseCase
  })

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  const renderCategoryFilters = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16 relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-emerald-500/10 blur-3xl -z-10" />
      <div className="flex flex-col items-center text-center mb-8">
        <h3 className="text-4xl font-bold mb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
            Discover Your Perfect
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Filter through our curated collection of natural wellness products
        </p>
      </div>
      
      <div className="flex justify-center mb-8">
        {(selectedCategory !== 'all' || selectedUseCase !== 'all') && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedCategory('all');
              setSelectedUseCase('all');
            }}
            className="px-6 py-2 text-sm font-medium text-red-500 hover:text-white border-2 border-red-500 hover:bg-red-500 rounded-full transition-all duration-300 flex items-center gap-2 relative group"
          >
            <span className="absolute inset-0 bg-red-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="relative z-10">Reset Filters</span>
          </motion.button>
        )}
      </div>

      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        layout
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`relative px-8 py-3 rounded-xl font-medium transition-all duration-300 capitalize overflow-hidden
              ${selectedCategory === category 
                ? 'text-white shadow-lg shadow-emerald-500/25' 
                : 'text-emerald-700 hover:text-white'
              }`}
            style={{
              background: selectedCategory === category 
                ? 'linear-gradient(135deg, #059669 0%, #0d9488 100%)' 
                : 'transparent'
            }}
          >
            <span className="absolute inset-0 border-2 border-emerald-500 rounded-xl" 
              style={{ 
                opacity: selectedCategory === category ? 0 : 1,
                transform: selectedCategory === category ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }} 
            />
            <span className="relative z-10">{category.replace('-', ' ')}</span>
            {selectedCategory === category && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )

  return (
    <div id="products-section" className="relative px-4 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#10b98130_0%,_transparent_40%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#0d948830_0%,_transparent_40%)] -z-10" />
      
      {/* Filters Section */}
      <div className="mb-16">
        {renderCategoryFilters()}
      </div>

      {/* Products Grid */}
      <motion.div 
        layout
        className="grid grid-cols-12 gap-8 max-w-[1600px] mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={product.id}
              id={product.id}
              className={`group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500
                ${index % 5 === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'}
                ${index % 10 === 3 ? 'md:translate-y-12' : ''}
                ${index % 10 === 7 ? 'md:-translate-y-12' : ''}
              `}
              style={{
                boxShadow: '0 0 40px -10px rgba(0, 0, 0, 0.1)',
                transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`relative ${index % 5 === 0 ? 'h-[500px]' : 'h-[400px]'}`}>
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full" />
                    <div className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-medium text-white shadow-lg relative">
                      {product.category}
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-full" />
                    <div className="px-4 py-1.5 bg-white/90 rounded-full text-sm font-medium text-emerald-600 shadow-lg relative">
                      {product.useCase.type.replace('-', ' ')}
                    </div>
                  </motion.div>
                </div>
                
                <Image
                  src={product.image}
                  alt={product.name.en}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Quick View Button */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickView(product)}
                    className="relative px-8 py-3 overflow-hidden rounded-full group/btn"
                  >
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-md" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium text-gray-900 group-hover/btn:text-white transition-colors duration-300">
                      Quick View
                    </span>
                  </motion.button>
                </div>
              </div>

              <div className="relative z-20 p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">
                  {product.name.en}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/80 mb-6 line-clamp-2 transition-colors duration-500">
                  {product.description.en}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {product.useCase.benefits.slice(0, 3).map((benefit, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-500
                          bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700
                          group-hover:from-white/10 group-hover:to-white/5 group-hover:text-white"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 group-hover:border-white/10 transition-colors duration-500">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-500 group-hover:text-white/60 mb-1">Key Ingredient</div>
                        <div className="font-medium text-emerald-600 group-hover:text-white transition-colors duration-500">
                          {product.keyIngredient.name}
                        </div>
                      </div>
                      {index % 3 === 0 && (
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 group-hover:bg-white/10 transition-colors duration-500">
                          <TrendingUp className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors duration-500" />
                          <span className="text-sm font-medium text-emerald-600 group-hover:text-white transition-colors duration-500">
                            Trending
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <QuickView
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  )
} 