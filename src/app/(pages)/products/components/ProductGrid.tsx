'use client'

import { useState, useCallback, memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '../products'
import QuickView from './QuickView'

interface ProductGridProps {
  products: Product[]
}

const ProductCard = memo(function ProductCard({ 
  product, 
  onQuickView 
}: { 
  product: Product
  onQuickView: (product: Product) => void 
}) {
  const handleQuickView = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onQuickView(product)
  }, [onQuickView, product])

  return (
    <motion.div 
      id={product.id}
      onClick={handleQuickView}
      className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 w-full bg-gradient-to-br from-emerald-50 to-white">
        <Image
          src={product.image}
          alt={product.name.en}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          priority
        />
      </div>

      <div className="p-4 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
            {product.category}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
            {product.useCase.type.replace('-', ' ')}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 mb-2">
          {product.name.en}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.description.en}
        </p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {product.useCase.benefits.slice(0, 2).map((benefit, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 text-xs text-emerald-700 bg-emerald-50 rounded-full"
              >
                {benefit}
              </span>
            ))}
            {product.useCase.benefits.length > 2 && (
              <span className="inline-flex items-center px-2 py-0.5 text-xs text-emerald-700 bg-emerald-50 rounded-full">
                +{product.useCase.benefits.length - 2} more
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <motion.span 
              className="text-sm font-medium text-emerald-600 hover:text-emerald-500 flex items-center gap-1 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Quick view
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

const ProductGrid = memo(function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleQuickView = useCallback((product: Product) => {
    setSelectedProduct(product)
  }, [])

  const handleCloseQuickView = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  if (products.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-500">No products found matching your criteria.</p>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={handleQuickView}
          />
        ))}
      </motion.div>

      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={handleCloseQuickView}
        />
      )}
    </>
  )
})

export default ProductGrid 