'use client';

import { useEffect, useCallback, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

interface MapComponentProps {
  resellers: Reseller[];
  selectedCategory: string;
  onLocationClick: (name: string) => void;
}

// Center of Cambodia approximately
const center: [number, number] = [12.5, 104.9];
const defaultZoom = 7;

const getMarkerColor = (category: string) => {
  switch (category) {
    case 'Pharmacy':
      return '#EF4444';
    case 'Fitness & Sports':
      return '#3B82F6';
    case 'Retail & Convenience':
      return '#10B981';
    case 'Healthcare':
      return '#8B5CF6';
    case 'Hospitality & Travel':
      return '#F59E0B';
    default:
      return '#6B7280';
  }
};

const MapComponent = ({ resellers, selectedCategory, onLocationClick }: MapComponentProps) => {
  const [map, setMap] = useState<L.Map | null>(null);

  const createMarkerIcon = useCallback((category: string) => {
    return L.divIcon({
      html: `<div class="flex items-center justify-center w-8 h-8">
              <div class="w-6 h-6 transform -translate-y-3 relative">
                <svg viewBox="0 0 24 24" fill="${getMarkerColor(category)}" class="w-full h-full filter drop-shadow">
                  <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center transform -translate-y-1">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>`,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
  }, []);

  // Fit bounds when resellers change
  useEffect(() => {
    if (map && resellers.length > 0) {
      const bounds = L.latLngBounds(
        resellers.map(r => [r.latitude, r.longitude])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, resellers]);

  return (
    <MapContainer
      center={center}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%' }}
      ref={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {resellers.map((reseller, index) => (
        <Marker
          key={`${reseller.name}-${index}`}
          position={[reseller.latitude, reseller.longitude]}
          icon={createMarkerIcon(reseller.category)}
          eventHandlers={{
            click: () => onLocationClick(reseller.name)
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{reseller.name}</h3>
              <p className="text-gray-600">{reseller.address}</p>
              <p className="text-gray-600">{reseller.city}</p>
              {reseller.website && (
                <a
                  href={reseller.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Website
                </a>
              )}
              {reseller.notes && (
                <p className="text-gray-500 mt-2 text-sm italic">{reseller.notes}</p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent; 