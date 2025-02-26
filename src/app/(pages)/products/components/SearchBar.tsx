'use client'

import { useState, useCallback, memo, useRef, useEffect } from 'react'
import type { ReactElement } from 'react'
import { Combobox } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowUpRight } from 'lucide-react'
import type { Product } from '../products'
import Image from 'next/image'
import { useIsClient } from '@/hooks/useIsClient'

interface SearchBarProps {
  products: Product[]
  onSelect: (product: Product) => void
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  selectedCategory: string
  searchQuery: string
}

const MAX_RECENT_SEARCHES = 5

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'balms', name: 'Balms' },
  { id: 'oils', name: 'Oils' },
  { id: 'sprays', name: 'Sprays' },
  { id: 'inhalers', name: 'Inhalers' }
]

const SearchBar = memo(function SearchBar({
  products,
  onSelect,
  onSearch,
  onCategoryChange,
  selectedCategory,
  searchQuery
}: SearchBarProps): ReactElement {
  const isClient = useIsClient()
  const [query, setQuery] = useState<string>(searchQuery || '')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (isClient) {
      const saved = localStorage.getItem('recentSearches')
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          setRecentSearches(parsed)
        } catch (e) {
          console.error('Failed to parse recent searches:', e)
          setRecentSearches([])
        }
      }
    }
  }, [isClient])

  useEffect(() => {
    if (searchQuery !== query) {
      setQuery(searchQuery)
    }
  }, [searchQuery, query])

  useEffect(() => {
    if (isClient && recentSearches.length > 0) {
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
    }
  }, [recentSearches, isClient])

  useEffect(() => {
    if (query === '') {
      setFilteredProducts([])
    } else {
      const filtered = products.filter((product) => {
        const searchTerms = [
          product.name.en.toLowerCase(),
          product.category.toLowerCase(),
          product.useCase.type.toLowerCase(),
          ...product.useCase.benefits.map(b => b.toLowerCase())
        ]
        const searchQuery = query.toLowerCase()
        return searchTerms.some(term => term.includes(searchQuery))
      })
      setFilteredProducts(filtered)
    }
  }, [query, products])

  const handleSearch = useCallback((value: string) => {
    setQuery(value)
    onSearch(value)
  }, [onSearch])

  const addToRecentSearches = useCallback((term: string) => {
    if (!term) return
    setRecentSearches(prev => {
      const filtered = prev.filter(t => t !== term)
      return [term, ...filtered].slice(0, MAX_RECENT_SEARCHES)
    })
  }, [])

  const handleSelect = useCallback((product: Product) => {
    addToRecentSearches(product.name.en)
    onSelect(product)
    setIsOpen(false)
    setQuery('')
  }, [addToRecentSearches, onSelect])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredProducts.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && filteredProducts[selectedIndex]) {
          handleSelect(filteredProducts[selectedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        break
    }
  }, [isOpen, filteredProducts, selectedIndex, handleSelect])

  const handleCategorySelect = useCallback((categoryId: string) => {
    onCategoryChange(categoryId)
  }, [onCategoryChange])

  if (!isClient) {
    return (
      <div className="relative z-10 mb-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                value={searchQuery || ''}
                readOnly
                className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                placeholder="Search products..."
                aria-label="Search products"
              />
            </div>
            <div className="w-full sm:w-48">
              <div className="w-full rounded-lg border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6">
                All Products
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      className="relative z-10 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow duration-200"
              placeholder="Search products..."
              aria-label="Search products"
            />

            <AnimatePresence>
              {isOpen && (query || recentSearches.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
                >
                  {query ? (
                    <ul ref={listRef} className="max-h-96 overflow-auto py-2">
                      {filteredProducts.map((product, index) => (
                        <motion.li
                          key={product.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                            index === selectedIndex ? 'bg-emerald-50' : ''
                          }`}
                          onClick={() => handleSelect(product)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-lg bg-gray-100 overflow-hidden">
                              <Image
                                src={product.image}
                                alt={product.name.en}
                                fill
                                className="object-contain p-1"
                                sizes="40px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {product.name.en}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {product.category}
                              </p>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-2">
                      <div className="px-4 py-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-xs font-medium text-gray-500">Recent searches</span>
                      </div>
                      <ul>
                        {recentSearches.map((term, index) => (
                          <motion.li
                            key={term}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleSearch(term)}
                          >
                            <span className="text-sm text-gray-600">{term}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Category Filter */}
          <div className="w-full sm:w-48">
            <Combobox value={selectedCategory} onChange={handleCategorySelect}>
              <div className="relative">
                <Combobox.Input
                  className="w-full rounded-lg border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6 transition-shadow duration-200"
                  displayValue={(categoryId: string) => 
                    categories.find(cat => cat.id === categoryId)?.name || ''
                  }
                  onChange={(event) => handleCategorySelect(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Combobox.Button>

                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {categories.map((category) => (
                    <Combobox.Option
                      key={category.id}
                      value={category.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 transition-colors duration-150 ${
                          active ? 'bg-emerald-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {category.name}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

export default SearchBar 