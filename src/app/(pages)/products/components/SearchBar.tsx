'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Clock, ArrowUpRight } from 'lucide-react'
import { Product } from '@/app/(pages)/products/products'
import Image from 'next/image'

interface SearchBarProps {
  products: Product[]
  onSelect: (product: Product) => void
}

const MAX_RECENT_SEARCHES = 5

export default function SearchBar({ products, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recentSearches')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
    }
  }, [recentSearches])

  const filteredProducts = query === ''
    ? []
    : products.filter((product) => {
        const searchTerms = [
          product.name.en.toLowerCase(),
          product.category.toLowerCase(),
          product.useCase.type.toLowerCase(),
          ...product.useCase.benefits.map(b => b.toLowerCase())
        ]
        return searchTerms.some(term => term.includes(query.toLowerCase()))
      })

  const addToRecentSearches = (term: string) => {
    if (!term) return
    setRecentSearches(prev => {
      const filtered = prev.filter(t => t !== term)
      return [term, ...filtered].slice(0, MAX_RECENT_SEARCHES)
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
        if (selectedIndex >= 0 && filteredProducts[selectedIndex]) {
          const selected = filteredProducts[selectedIndex]
          handleSelect(selected)
        }
        break
      case 'Escape':
        setIsOpen(false)
        break
    }
  }

  const handleSelect = (product: Product) => {
    addToRecentSearches(product.name.en)
    onSelect(product)
    setIsOpen(false)
    setQuery('')
  }

  const highlightMatch = (text: string) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="bg-emerald-100 text-emerald-800">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    )
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
            setSelectedIndex(-1)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full h-12 pl-12 pr-4 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
          placeholder="Search by name, category, or benefits..."
        />
      </div>

      <AnimatePresence>
        {isOpen && (query || recentSearches.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
          >
            {query === '' && recentSearches.length > 0 && (
              <div className="p-2">
                <div className="flex items-center justify-between px-2 py-1.5 text-sm text-gray-500">
                  <span className="font-medium">Recent Searches</span>
                  <button
                    onClick={() => setRecentSearches([])}
                    className="text-xs hover:text-red-500 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                {recentSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(term)
                      inputRef.current?.focus()
                    }}
                    className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Clock className="w-4 h-4" />
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            )}

            {filteredProducts.length > 0 && (
              <ul ref={listRef} className="max-h-[60vh] overflow-auto">
                {filteredProducts.map((product, index) => (
                  <motion.li
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelect(product)}
                    className={`
                      relative px-4 py-3 cursor-pointer transition-all duration-200
                      ${selectedIndex === index ? 'bg-emerald-50' : 'hover:bg-gray-50'}
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name.en}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-900">
                            {highlightMatch(product.name.en)}
                          </p>
                          <ArrowUpRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500 truncate">
                          {product.category} • {product.useCase.type.replace('-', ' ')}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            )}

            {query && filteredProducts.length === 0 && (
              <div className="px-4 py-8 text-center">
                <p className="text-gray-500">No products found for &ldquo;{query}&rdquo;</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 