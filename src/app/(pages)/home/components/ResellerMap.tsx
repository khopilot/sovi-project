'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Map, ShoppingBag, Heart, Home, Store, Thermometer, Search, Navigation, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('@/app/(pages)/home/components/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl" aria-hidden="true" />
  ),
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
  imageUrl?: string; // Optional image URL for the location
}

const getPartnerLogo = (name: string): string | undefined => {
  // First, create a normalized version of the input name (remove extra spaces, case-insensitive)
  const normalizedName = name.trim().toLowerCase();
  
  // Create a mapping with normalized keys
  const logoMap: { [key: string]: string } = {
    // 7-Eleven stores (handle all variations)
    '7-eleven central market': '/images/partners/7-11.png',
    '7-eleven prek leap': '/images/partners/7-11.png',
    '7-eleven prek pnov': '/images/partners/7-11.png',
    '7-eleven siem reap': '/images/partners/7-11.png',
    '7-eleven sihanoukville': '/images/partners/7-11.png',
    '7-eleven prey kei': '/images/partners/7-11.png',
    '7-eleven independence monument': '/images/partners/7-11.png',
    '7-eleven wat phnom': '/images/partners/7-11.png',
    '7-eleven sen sok': '/images/partners/7-11.png',
    '7-eleven battambang': '/images/partners/7-11.png',
    '7-eleven kampong cham': '/images/partners/7-11.png',
    '7-eleven takhmao': '/images/partners/7-11.png',
    
    // Pharmacies
    'medilance pharmacy': '/images/partners/Medilance Pharmacy.jpg',
    'our pharmacy bkk': '/images/partners/Our Pharmacy BKK.jpg',
    'pharmacy chhat': '/images/partners/Pharmacy Chhat.jpg',
    'pharmacy phsar chas': '/images/partners/Pharmacy Phsar Chas.jpg',
    'point sante pharmacy': '/images/partners/Point Sante Pharmacy.jpg',
    
    // Fitness & Sports
    'inter badminton club': '/images/partners/Inter Badminton Club.jpg',
    'interter club': '/images/partners/Interter Club.jpg',
    'kingdom fight gym': '/images/partners/Kingdom Fight Gym.jfif',
    'kun khmer international federation': '/images/partners/Kun Khmer international Federation.jpg',
    'phnom penh sport club': '/images/partners/Phnom Penh Sport CLub.jpg',
    'sen bunthen club': '/images/partners/Sen Bunthen Club.png',
    'the ring fitness club': '/images/partners/The Ring Fitness Club.png',
    'villa martial art': '/images/partners/Villa Martial Art.jpg',
    
    // Retail & Convenience
    'circle k riverside': '/images/partners/Circle K.png',
    'for someone i like': '/images/partners/For Someone I Like.jpg',
    'kabas concept store': '/images/partners/Kabas Concept store.jpg',
    'shop satu': '/images/partners/Shop Satu.jpg',
    'superduper': '/images/partners/SuperDuper.png',
    'total bonjour mart': '/images/partners/Total Bonjour Mart.png',
    
    // Healthcare
    'hrk care': '/images/partners/HRK Care.jpg',
    'aosot plus': '/images/partners/Aosot Plus.jpg',
    
    // Hospitality & Travel
    '21 degree': '/images/partners/21 Degree.jpg',
    'babel guesthouse': '/images/partners/Babel Guesthouse.jpg',
    'phnom penh international airport': '/images/partners/Phnom Penh International Airport.png',
  };

  // Return the logo path for the normalized name
  return logoMap[normalizedName];
};

// Update the imageConfig
const imageConfig = {
  unoptimized: true,
  loading: "lazy" as const,
  style: { objectFit: 'contain' as const },
  priority: false
};

const ResellerMap = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [resellers, setResellers] = useState<Reseller[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const fetchData = async () => {
      try {
        const response = await fetch('/resellers.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        
        const cleanedText = text.trim();
        const data = JSON.parse(cleanedText);
        
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }

        // Add imageUrl to each reseller
        const resellersWithImages = data.map(reseller => ({
          ...reseller,
          imageUrl: getPartnerLogo(reseller.name)
        }));
        
        const validData = resellersWithImages.every(item => 
          item.name && 
          item.address && 
          typeof item.latitude === 'number' && 
          typeof item.longitude === 'number' && 
          item.category
        );

        if (!validData) {
          throw new Error('Some items are missing required fields');
        }

        setResellers(resellersWithImages);
      } catch (error) {
        console.error('Error loading data:', error);
        setResellers([]);
      }
    };
    fetchData();
  }, [isClient]);

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

          {/* Map & Cards Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map Container */}
            <div className="lg:w-2/3">
              <div className="relative rounded-xl overflow-hidden" style={{ height: '500px' }}>
                <MapWithNoSSR 
                  resellers={filteredResellers}
                  hoveredLocation={hoveredLocation}
                  onLocationHover={setHoveredLocation}
                  onLocationClick={(name: string) => {
                    const element = document.getElementById(`location-${name}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              </div>
              
              {/* Legend moved under map */}
              <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-[#F14823] text-sm mb-2">Map Legend</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.slice(1).map((category) => (
                    <div key={category.name} className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${getLocationColor(category.name)}`} />
                      <span className="text-xs text-gray-700">{category.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Cards */}
            <div className="lg:w-1/3 overflow-y-auto rounded-xl" style={{ maxHeight: '500px' }}>
              <div className="grid grid-cols-1 gap-3 pr-2">
                {filteredResellers.map((location, idx) => (
                  <motion.div
                    key={idx}
                    id={`location-${location.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 1) }}
                    className={`
                      bg-white p-3 rounded-lg border transition-all cursor-pointer
                      ${hoveredLocation === location.name 
                        ? 'shadow-md border-[#F14823] transform -translate-y-0.5' 
                        : 'shadow-sm border-gray-100 hover:shadow-md'
                      }
                    `}
                    onMouseEnter={() => setHoveredLocation(location.name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    onClick={() => {
                      setHoveredLocation(location.name);
                      setTimeout(() => setHoveredLocation(null), 1500);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Location Image or Fallback */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        {location.imageUrl ? (
                          <div className="relative w-16 h-16">
                            <Image
                              src={location.imageUrl}
                              alt={location.name}
                              width={64}
                              height={64}
                              className="object-contain"
                              {...imageConfig}
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Store className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>

                      {/* Location Details */}
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-[#F14823] text-base truncate">{location.name}</h4>
                        <p className="text-gray-600 text-sm truncate">{location.address}</p>
                        <p className="text-gray-500 text-xs">{location.city}</p>
                        
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: `${getLocationColor(location.category)}20`, 
                              color: getLocationColor(location.category) 
                            }}>
                            {location.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-2">
                      {/* Get Directions Link */}
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Navigation className="w-3 h-3" />
                        Get Directions
                      </a>

                      {/* View on Maps Link */}
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MapPin className="w-3 h-3" />
                        View on Maps
                      </a>

                      {/* Website Link */}
                      {location.website && (
                        <a 
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit Website
                        </a>
                      )}
                    </div>

                    {/* Notes */}
                    {location.notes && (
                      <p className="text-gray-500 text-xs mt-2 italic">{location.notes}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResellerMap; 