'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Product } from '@/app/(pages)/products/products'
import QuickView from '@/app/(pages)/products/components/QuickView'

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
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-700">Product Type</h3>
        {(selectedCategory !== 'all' || selectedUseCase !== 'all') && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedUseCase('all');
            }}
            className="px-4 py-2 text-sm rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border-2 transition-colors capitalize
              ${selectedCategory === category 
                ? 'bg-emerald-600 text-white border-emerald-600' 
                : 'text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white'
              }`}
          >
            {category.replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div id="products-section">
      {/* Filters Section */}
      <div className="mb-12 space-y-8">
        {renderCategoryFilters()}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            id={product.id}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-80 bg-gray-100">
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm capitalize">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm capitalize">
                  {product.useCase.type.replace('-', ' ')}
                </span>
              </div>
              <Image
                src={product.image}
                alt={product.name.en}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <button
                  onClick={() => handleQuickView(product)}
                  className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-emerald-600 hover:text-white"
                >
                  Quick View
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name.en}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{product.description.en}</p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.useCase.benefits.map((benefit, index) => (
                    <span key={index} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col text-sm text-gray-500">
                  <span className="font-medium mb-1">Key Ingredient:</span>
                  <div className="bg-emerald-50 p-2 rounded">
                    <p className="font-semibold text-emerald-700">{product.keyIngredient.name}</p>
                    <p className="text-sm mt-1">{product.keyIngredient.benefits}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <QuickView
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  )
} 