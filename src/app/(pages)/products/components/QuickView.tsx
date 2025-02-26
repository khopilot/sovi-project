'use client'

import { Fragment, useEffect, useCallback, memo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import type { Product } from '../products'
import { XMarkIcon, BeakerIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/outline'

interface QuickViewProps {
  product: Product
  onClose: () => void
}

const QuickView = memo(function QuickView({ product, onClose }: QuickViewProps) {
  const [mounted, setMounted] = useState(false)

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    setMounted(true)
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [handleEscape])

  if (!mounted) {
    return null
  }

  return (
    <Transition appear show={mounted} as={Fragment}>
      <Dialog 
        as="div" 
        className="fixed inset-0 z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
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
              <Dialog.Panel className="relative w-full max-w-6xl transform rounded-2xl bg-white shadow-2xl transition-all">
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Column - Image with Ingredients Overlay */}
                  <div className="relative min-h-[28rem] lg:min-h-[32rem] bg-gradient-to-br from-emerald-50 to-white overflow-hidden rounded-l-2xl">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <Image
                        src={product.image}
                        alt={product.name.en}
                        fill
                        className="object-contain transition-transform duration-300 hover:scale-105"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        priority
                      />
                    </div>
                    {/* Ingredients Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="h-5 w-5 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h4 className="font-semibold text-gray-900">Full Ingredients List</h4>
                      </div>
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-gray-600 text-sm">
                        {product.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 flex-shrink-0" />
                            <span className="line-clamp-1" title={ingredient}>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="p-6 lg:p-8">
                    {/* Header & Tags */}
                    <div className="mb-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 shadow-sm">
                          {product.category}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
                          {product.useCase.type.replace('-', ' ')}
                        </span>
                      </div>
                      <Dialog.Title className="text-2xl font-bold tracking-tight text-gray-900">
                        {product.name.en}
                      </Dialog.Title>
                      <p className="mt-1 text-lg text-gray-500 font-medium">
                        {product.name.km}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="prose prose-emerald max-w-none mb-8">
                      <p className="text-gray-600 text-lg leading-relaxed">{product.description.en}</p>
                      <p className="text-gray-500 mt-2">{product.description.km}</p>
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-4">
                      {/* Key Ingredient */}
                      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <BeakerIcon className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <h4 className="font-semibold text-emerald-900">Key Ingredient</h4>
                        </div>
                        <p className="text-emerald-800 font-medium mb-1">{product.keyIngredient.name}</p>
                        <p className="text-emerald-700 leading-relaxed">{product.keyIngredient.benefits}</p>
                      </div>

                      {/* Benefits */}
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <SparklesIcon className="h-5 w-5 text-purple-600 flex-shrink-0" />
                          <h4 className="font-semibold text-purple-900">Benefits</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.useCase.benefits.map((benefit, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/80 text-purple-800 shadow-sm"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <HeartIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <h4 className="font-semibold text-blue-900">Recommended For</h4>
                        </div>
                        <div className="space-y-2">
                          {product.recommendedFor.split('✔️').filter(Boolean).map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <p className="text-blue-800 leading-tight flex-1">
                                {benefit.trim()}
                              </p>
                            </div>
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
})

export default QuickView 