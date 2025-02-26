'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ContactInfo() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-amber-100 rounded-2xl shadow-xl h-full border border-amber-200">
      {/* Decorative element */}
      <div className="absolute -top-20 -right-20 pointer-events-none opacity-10 z-0">
        <Image
          src="/images/Logo/Naga Balm__Brandmark_Gambodge.png"
          alt=""
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>
      
      <div className="p-5 sm:p-6 md:p-8 relative z-10 h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold tracking-tight text-amber-800 font-karla mb-2">
            Contact Information
          </h2>
          <p className="text-sm text-gray-600 font-montserrat">
            Reach out to us through any of these channels
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-4 sm:space-y-5 flex-grow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Address */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 text-[#EE4922]" />
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium text-gray-800 font-karla">Address</h3>
              <address className="mt-1 text-sm text-gray-600 not-italic font-montserrat">
                Coco Khmer Co., Ltd.<br />
                #1529, NR. 2, Chakangre Krom<br />
                Khan Mean Chey, Phnom Penh<br />
                Cambodia
              </address>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6 text-[#EE4922]" />
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium text-gray-800 font-karla">Email</h3>
              <div className="mt-1 text-sm font-montserrat">
                <Link 
                  href="mailto:info@nagabalm.com" 
                  className="text-[#EE4922] hover:text-[#D43812] transition-colors"
                >
                  info@nagabalm.com
                </Link>
              </div>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <FaPhone className="h-5 w-5 sm:h-6 sm:w-6 text-[#EE4922]" />
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium text-gray-800 font-karla">Phone</h3>
              <div className="mt-1 text-sm font-montserrat">
                <Link 
                  href="tel:016269359" 
                  className="text-[#EE4922] hover:text-[#D43812] transition-colors"
                >
                  016 269 359
                </Link>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="border-t border-amber-100 pt-4 sm:pt-5 mt-4 sm:mt-5">
            <h3 className="text-base font-medium text-gray-800 font-karla">Business Hours</h3>
            <dl className="mt-2 text-sm text-gray-600 space-y-1 font-montserrat">
              <div className="flex justify-between">
                <dt>Monday - Friday:</dt>
                <dd>8:00 AM - 5:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday - Sunday:</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </motion.div>
        
        {/* Social Media */}
        <motion.div 
          className="mt-auto pt-4 sm:pt-5 border-t border-amber-100"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-base font-medium text-gray-800 font-karla">Follow Us</h3>
          <div className="mt-3 sm:mt-4 flex space-x-5 sm:space-x-6">
            <Link 
              href="https://www.facebook.com/nagabalmkh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#EE4922] transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link 
              href="https://www.instagram.com/nagabalm?igsh=dWhhYW1sd3M4d2Iy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#EE4922] transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 