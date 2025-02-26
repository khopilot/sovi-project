'use client'

import { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import type { Product } from '../products'
import SearchBar from './SearchBar'
import ProductGrid from './ProductGrid'

interface SearchWrapperProps {
  products: Product[]
}

const SearchWrapper = memo(function SearchWrapper({ products }: SearchWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'balms' | 'oils' | 'sprays' | 'inhalers'>('all')

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query.trim())
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    if (['all', 'balms', 'oils', 'sprays', 'inhalers'].includes(category)) {
      setSelectedCategory(category as 'all' | 'balms' | 'oils' | 'sprays' | 'inhalers')
    }
  }, [])

  const filteredProducts = products.filter(product => {
    const searchTerms = [
      product.name.en.toLowerCase(),
      product.description.en.toLowerCase(),
      product.category.toLowerCase(),
      product.keyIngredient.name.toLowerCase(),
      product.keyIngredient.benefits.toLowerCase(),
      ...product.useCase.benefits.map(b => b.toLowerCase()),
      ...product.ingredients.map(i => i.toLowerCase())
    ]
    const query = searchQuery.toLowerCase()
    
    const matchesSearch = 
      searchQuery === '' || 
      searchTerms.some(term => term.includes(query))

    const matchesCategory = 
      selectedCategory === 'all' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  const handleSelect = useCallback((product: Product) => {
    try {
      const element = document.getElementById(product.id)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
        // Add a highlight effect
        element.classList.add('ring-4', 'ring-emerald-200', 'ring-offset-4')
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-emerald-200', 'ring-offset-4')
        }, 2000)
      }
    } catch (error) {
      console.error('Error scrolling to product:', error)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <SearchBar 
          products={products}
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onSelect={handleSelect}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {filteredProducts.length === 0 ? (
                'No products found'
              ) : (
                <>
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                  {searchQuery && <> for &ldquo;<span className="font-medium text-gray-900">{searchQuery}</span>&rdquo;</>}
                  {selectedCategory !== 'all' && (
                    <> in <span className="font-medium text-gray-900">{selectedCategory}</span></>
                  )}
                </>
              )}
            </p>
          </div>
        </div>

        <ProductGrid products={filteredProducts} />
      </motion.div>
    </motion.div>
  )
})

export default SearchWrapper 