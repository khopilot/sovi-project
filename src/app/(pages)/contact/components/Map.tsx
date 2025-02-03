import Image from 'next/image'

export default function Map() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Our Location</h3>
      
      <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
        <Image
          src="/images/map.jpg"
          alt="Map showing Naga Balm location"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Map Overlay */}
        <div className="absolute inset-0 bg-emerald-900/10" />
        
        {/* Location Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-emerald-500 rounded-full animate-ping" />
            <div className="relative w-4 h-4 bg-emerald-600 rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>Located in the heart of Phnom Penh, our facility is easily accessible from major roads.</p>
      </div>
    </div>
  )
} 