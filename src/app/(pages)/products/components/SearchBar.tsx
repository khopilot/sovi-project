'use client'

import { useState } from 'react'
import { Product } from '@/app/(pages)/products/products'

interface SearchBarProps {
  products: Product[]
  onSelect: (product: Product) => void
}

export default function SearchBar({ products, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const filteredProducts = query === ''
    ? []
    : products.filter((product) =>
        product.name.en.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        placeholder="Search products..."
      />

      {isOpen && filteredProducts.length > 0 && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto rounded-md py-1 text-base">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => {
                  onSelect(product)
                  setIsOpen(false)
                  setQuery('')
                }}
                className="cursor-pointer px-4 py-2 hover:bg-emerald-100"
              >
                {product.name.en}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 