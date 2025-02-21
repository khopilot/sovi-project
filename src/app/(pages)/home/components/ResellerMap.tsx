'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Map, ShoppingBag, Heart, Home, Store, Thermometer, Search } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/app/(pages)/home/components/MapComponent'), {
  ssr: false,
});

interface Reseller {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
  city: string;
  website: string;
  notes: string;
}

const ResellerMap = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [resellers, setResellers] = useState<Reseller[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/resellers.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        console.log('Raw response:', text);
        
        const cleanedText = text.trim();
        const data = JSON.parse(cleanedText);
        
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }

        console.log('Loaded resellers:', data.length, data);
        
        const validData = data.every(item => 
          item.name && 
          item.address && 
          typeof item.latitude === 'number' && 
          typeof item.longitude === 'number' && 
          item.category
        );

        if (!validData) {
          throw new Error('Some items are missing required fields');
        }

        setResellers(data);
      } catch (error) {
        console.error('Error loading data:', error);
        setResellers([]);
      }
    };
    fetchData();
  }, []);

  const categories = [
    { name: 'all', label: 'All Locations', icon: Map },
    { name: 'Pharmacy', label: 'Pharmacies', icon: Thermometer },
    { name: 'Fitness & Sports', label: 'Fitness', icon: ShoppingBag },
    { name: 'Retail & Convenience', label: 'Retail', icon: Store },
    { name: 'Healthcare', label: 'Healthcare', icon: Heart },
    { name: 'Hospitality & Travel', label: 'Hospitality', icon: Home }
  ];

  const getLocationColor = (category: string) => {
    switch (category) {
      case 'Pharmacy':
        return 'text-red-500';
      case 'Fitness & Sports':
        return 'text-blue-500';
      case 'Retail & Convenience':
        return 'text-green-500';
      case 'Healthcare':
        return 'text-purple-500';
      case 'Hospitality & Travel':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  // Filter & search logic - made case-insensitive
  const filteredResellers = resellers
    .filter((r) => {
      if (selectedCategory === 'all') return true;
      return r.category.toLowerCase() === selectedCategory.toLowerCase();
    })
    .filter((r) => {
      if (!searchQuery) return true;
      const searchLower = searchQuery.toLowerCase();
      return (
        r.name.toLowerCase().includes(searchLower) ||
        r.address.toLowerCase().includes(searchLower) ||
        r.city.toLowerCase().includes(searchLower) ||
        r.category.toLowerCase().includes(searchLower) ||
        (r.notes && r.notes.toLowerCase().includes(searchLower))
      );
    });

  // Debug counters
  console.log('Total resellers:', resellers.length);
  console.log('Filtered resellers:', filteredResellers.length);
  console.log('Selected category:', selectedCategory);
  console.log('Current resellers:', resellers);

  // Add counter display
  const totalLocations = resellers.length;
  const filteredLocations = filteredResellers.length;

  return (
    <section className="relative py-24 md:py-32 bg-[#97D6E3] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#FDD26E]/50" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo above title */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/images/Naga Balm__SecondaryLogomark_Black.png"
              alt="Naga Balm Logo"
              width={96}
              height={96}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="text-gray-700 text-lg font-medium mb-4 block">Find Us</span>
          <h2 className="font-karla text-headline text-gray-800 tracking-tight uppercase">
            Our Reseller Network
          </h2>
          <p className="font-karla text-subheading text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover where to find Naga Balm products across Cambodia. Our trusted network of resellers 
            ensures you can access our natural healing solutions wherever you are.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Location Counter */}
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredLocations} of {totalLocations} locations
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>

          {/* Search & Category Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end mb-6">
            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-lg font-semibold text-gray-800">Filter by Category:</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-sm
                      ${selectedCategory === category.name
                        ? 'bg-[#F14823] text-white shadow-lg transform -translate-y-0.5'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search bar */}
            <div className="mt-4 sm:mt-0 flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl w-full sm:w-auto">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search locations..."
                className="bg-transparent outline-none text-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-xl overflow-hidden" style={{ height: '600px' }}>
            <MapWithNoSSR 
              resellers={filteredResellers}
              selectedCategory={selectedCategory}
              onLocationClick={(name: string) => {
                const element = document.getElementById(`location-${name}`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>

          {/* Location Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
            {filteredResellers.map((location, idx) => (
              <motion.div
                key={idx}
                id={`location-${location.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 1) }}
                className="bg-white p-4 rounded-xl shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-[#F14823] text-lg">{location.name}</h4>
                <p className="text-gray-600 text-sm">{location.address}</p>
                <p className="text-gray-500 text-xs">{location.city}</p>
                <p className="text-gray-500 text-xs mt-1">{location.category}</p>
                {location.notes && (
                  <p className="text-gray-500 text-xs mt-1 italic">{location.notes}</p>
                )}
                {location.website && (
                  <a 
                    href={location.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-700 mt-1 block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h4 className="font-semibold text-[#F14823] mb-2">Map Legend</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categories.slice(1).map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${getLocationColor(category.name)}`} />
                  <span className="text-sm text-gray-700">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResellerMap; 