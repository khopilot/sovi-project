'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Product } from '@/app/(pages)/products/products'

interface QuickViewProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function QuickView({ product, isOpen, onClose }: QuickViewProps) {
  if (!product) return null

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                {/* Mobile Close Button - Fixed at top */}
                <div className="sticky top-0 z-10 flex justify-end p-4 md:hidden bg-white/80 backdrop-blur-sm">
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close dialog"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="relative aspect-[4/3] md:aspect-video w-full">
                  <Image
                    src={product.image}
                    alt={product.name.en}
                    fill
                    className="object-cover"
                  />
                  {/* Desktop Close Button */}
                  <button
                    onClick={onClose}
                    className="hidden md:block absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    aria-label="Close dialog"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 md:p-6 space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <Dialog.Title className="text-xl md:text-2xl font-bold">
                        {product.name.en}
                      </Dialog.Title>
                      <span className="inline-flex px-3 py-1 bg-emerald-600 text-white rounded-full text-sm capitalize shrink-0">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600">{product.description.en}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-emerald-800 mb-2">Key Ingredient</h4>
                        <p className="font-medium text-emerald-700">{product.keyIngredient.name}</p>
                        <p className="text-sm text-emerald-600 mt-1">{product.keyIngredient.benefits}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Recommended For</h4>
                        <p className="text-gray-600">{product.recommendedFor}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Ingredients</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.ingredients.map((ingredient, index) => (
                            <span
                              key={index}
                              className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 