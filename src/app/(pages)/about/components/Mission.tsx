import Image from 'next/image'

export default function Mission() {
  const missions = [
    {
      title: "Traditional Wisdom",
      description: "Drawing from ancient Cambodian healing practices, our formulation preserves the time-honored remedy of Preng Kola, passed down through generations.",
      image: "/images/about-grid/370182647_262382353402275_462936422139193930_n.jpg",
      imageAlt: "Traditional Cambodian healing practices"
    },
    {
      title: "Handcrafted Excellence",
      description: "Every product is carefully crafted by hand, ensuring the highest quality and attention to detail in our manufacturing process.",
      image: "/images/about-grid/469337321_17914579515030307_4981590020092049347_n.jpg",
      imageAlt: "Handcrafted production process"
    },
    {
      title: "Innovation & Safety",
      description: "We combine traditional methods with modern safety standards and innovative techniques to create effective, reliable products.",
      image: "/images/about-grid/f35175_70a09b0406004ef084d747e4845fe1c0~mv2.jpg",
      imageAlt: "Modern laboratory and safety standards"
    }
  ]

  return (
    <section className="min-h-screen bg-[#FDD16E] flex flex-col justify-center py-16 md:py-24 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.white)_1px,transparent_0)] [background-size:48px_48px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            <span className="block">Our Mission</span>
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 leading-relaxed">
            Bridging tradition with modern innovation to deliver natural healing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image
                  src={mission.image}
                  alt={mission.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 
                  group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">{mission.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex-grow flex flex-col justify-between relative z-10">
                <p className="text-lg text-amber-800 leading-relaxed">{mission.description}</p>
                
                {/* Decorative line */}
                <div className="mt-6 h-1 w-16 bg-amber-500 transform origin-left scale-0 
                  group-hover:scale-100 transition-transform duration-500"></div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/5 
                transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl"></div>
    </section>
  )
} 