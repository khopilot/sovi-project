'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error: unknown) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }
  }
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl h-full flex flex-col border border-amber-200">
      {/* Decorative element */}
      <div className="absolute -top-20 -right-20 pointer-events-none opacity-10 z-0">
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Fire.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>
      
      <div className="p-5 sm:p-6 md:p-8 relative z-10 flex-grow flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold tracking-tight text-fire font-karla mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-gray-600 font-montserrat mb-4 sm:mb-6">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 flex-grow flex flex-col"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-y-4 sm:gap-y-5 gap-x-4 sm:grid-cols-2 flex-grow">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-montserrat">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-fire focus:ring-fire sm:text-sm font-montserrat"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-fire focus:ring-fire sm:text-sm font-montserrat"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-montserrat">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-fire focus:ring-fire sm:text-sm font-montserrat"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 font-montserrat">
                Subject
              </label>
              <div className="mt-1">
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-fire focus:ring-fire sm:text-sm font-montserrat"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="distributor">Become a Distributor</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-montserrat">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-amber-300 shadow-sm focus:border-fire focus:ring-fire sm:text-sm font-montserrat"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-4">
            <motion.button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-fire px-4 sm:px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#D43812] focus:outline-none focus:ring-2 focus:ring-fire focus:ring-offset-2 disabled:opacity-70 font-karla transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus === 'submitting' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </motion.button>
          </div>
          
          {/* Form status messages */}
          {formStatus === 'success' && (
            <motion.div 
              className="rounded-md bg-green-50 p-4 mt-4 border border-green-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">Message sent successfully! We&apos;ll be in touch soon.</p>
                </div>
              </div>
            </motion.div>
          )}
          
          {formStatus === 'error' && (
            <motion.div 
              className="rounded-md bg-red-50 p-4 mt-4 border border-red-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">There was an error sending your message. Please try again.</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  )
} 