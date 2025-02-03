'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Product } from '@/app/(pages)/products/products'
import QuickView from '@/app/(pages)/products/components/QuickView'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  
  const categories = ['all', 'balms', 'oils', 'sprays', 'inhalers']

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsQuickViewOpen(true)
  }

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full border-2 border-emerald-600 transition-colors capitalize
              ${selectedCategory === category 
                ? 'bg-emerald-600 text-white' 
                : 'text-emerald-600 hover:bg-emerald-600 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            id={product.id}
            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-80 bg-gray-100">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm capitalize">
                  {product.category}
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
    </>
  )
} 