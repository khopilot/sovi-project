'use client'

import { Product } from '@/app/(pages)/products/products'
import SearchBar from './SearchBar'

interface SearchWrapperProps {
  products: Product[]
}

export default function SearchWrapper({ products }: SearchWrapperProps) {
  const handleSelect = (product: Product) => {
    const element = document.getElementById(product.id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="mb-12">
      <SearchBar products={products} onSelect={handleSelect} />
    </div>
  )
} 