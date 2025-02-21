'use client';

import { useEffect, useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import { ExternalLink, Navigation } from 'lucide-react';
import Image from 'next/image';
import { Store } from 'lucide-react';

interface Reseller {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  category: string;
  city: string;
  website: string;
  notes: string;
  imageUrl?: string;
}

interface MapComponentProps {
  resellers: Reseller[];
  onLocationClick: (name: string) => void;
  hoveredLocation: string | null;
  onLocationHover: (name: string | null) => void;
}

// Create a client-only wrapper component
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl" aria-hidden="true" />
    );
  }

  return <div className="w-full h-full">{children}</div>;
};

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Center of Cambodia approximately
const center: [number, number] = [12.5, 104.9];
const defaultZoom = 7;

const getMarkerColor = (category: string) => {
  switch (category) {
    case 'Pharmacy':
      return '#EF4444'; // red
    case 'Fitness & Sports':
      return '#3B82F6'; // blue
    case 'Retail & Convenience':
      return '#10B981'; // green
    case 'Healthcare':
      return '#8B5CF6'; // purple
    case 'Hospitality & Travel':
      return '#F59E0B'; // amber
    default:
      return '#6B7280'; // gray
  }
};

// Update the Image configuration
const imageConfig = {
  unoptimized: true,
  loading: "lazy" as const,
  style: { objectFit: 'contain' as const },
  priority: false
};

const MapComponent = ({ resellers, onLocationClick, hoveredLocation, onLocationHover }: MapComponentProps) => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Import Leaflet CSS
    import('leaflet/dist/leaflet.css');

    // Fix Leaflet default icon path issues
    delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, [isClient]);

  const createMarkerIcon = useCallback((category: string, isHovered: boolean) => {
    return L.divIcon({
      html: `
        <div class="w-6 h-6 transform ${isHovered ? 'scale-125' : ''} transition-transform duration-200">
          <svg viewBox="0 0 24 24" fill="${getMarkerColor(category)}" stroke="white" stroke-width="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" fill="white"/>
          </svg>
        </div>
      `,
      className: `custom-marker ${isHovered ? 'marker-hovered' : ''}`,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24]
    });
  }, []);

  useEffect(() => {
    if (map && resellers.length > 0) {
      const bounds = L.latLngBounds(
        resellers.map(r => [r.latitude, r.longitude])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, resellers]);

  return (
    <ClientOnly>
      <MapContainer
        center={center}
        zoom={defaultZoom}
        style={{ height: '100%', width: '100%' }}
        ref={setMap}
        className="rounded-xl shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {resellers.map((reseller, index) => {
          const isHovered = hoveredLocation === reseller.name;
          return (
            <Marker
              key={`${reseller.name}-${index}`}
              position={[reseller.latitude, reseller.longitude]}
              icon={createMarkerIcon(reseller.category, isHovered)}
              eventHandlers={{
                click: () => onLocationClick(reseller.name),
                mouseover: () => onLocationHover(reseller.name),
                mouseout: () => onLocationHover(null)
              }}
            >
              <Popup>
                <div className="p-4 min-w-[250px]">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    {/* Location Image or Fallback */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                      {reseller.imageUrl ? (
                        <div className="relative w-12 h-12">
                          <Image
                            src={reseller.imageUrl}
                            alt={reseller.name}
                            width={48}
                            height={48}
                            className="object-contain"
                            {...imageConfig}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Store className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Location Details */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-lg text-gray-900 truncate">{reseller.name}</h3>
                      <p className="text-gray-600 text-sm truncate">{reseller.address}</p>
                      <p className="text-gray-600 text-sm">{reseller.city}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" 
                      style={{ backgroundColor: `${getMarkerColor(reseller.category)}20`, color: getMarkerColor(reseller.category) }}>
                      {reseller.category}
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-2">
                    {/* Get Directions */}
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${reseller.latitude},${reseller.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Navigation className="w-3 h-3" />
                      Get Directions
                    </a>

                    {/* Website Link */}
                    {reseller.website && (
                      <a
                        href={reseller.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Visit Website
                      </a>
                    )}
                  </div>

                  {/* Notes */}
                  {reseller.notes && (
                    <p className="text-gray-500 mt-2 text-xs italic border-t border-gray-100 pt-2">{reseller.notes}</p>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </ClientOnly>
  );
};

export default MapComponent; 