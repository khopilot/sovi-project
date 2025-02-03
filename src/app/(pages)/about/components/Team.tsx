import Image from 'next/image'

export default function Team() {
  const values = [
    {
      title: "Artisanal Excellence",
      description: "Every product is handcrafted with precision and care, ensuring the highest quality in every batch.",
      image: "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
    },
    {
      title: "Local Expertise",
      description: "Our team brings generations of knowledge in traditional Cambodian healing practices.",
      image: "/images/about-grid/391671432_294858683487975_2328397320296936_n.jpg"
    },
    {
      title: "Modern Standards",
      description: "We combine traditional methods with contemporary quality and safety standards.",
      image: "/images/about-grid/391619663_294858813487962_4740528239290929594_n.jpg"
    }
  ]

  return (
    <section className="min-h-screen bg-[#FDD16E] flex flex-col justify-center py-16 md:py-24 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.white)_1px,transparent_0)] [background-size:48px_48px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Team Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
            <span className="block">Our Team</span>
          </h2>
          <p className="text-xl md:text-2xl text-amber-800 leading-relaxed">
            Meet the dedicated hands behind every Naga Balm product.
          </p>
        </div>

        {/* Team Values */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 
                  group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex-grow flex flex-col justify-between relative z-10">
                <p className="text-lg text-amber-800 leading-relaxed">{value.description}</p>
                
                {/* Decorative line */}
                <div className="mt-6 h-1 w-16 bg-amber-500 transform origin-left scale-0 
                  group-hover:scale-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="relative">
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-amber-900 italic leading-relaxed mb-6">
                &ldquo;We believe in the power of human touch - from mixing formulations to labeling each product, 
                our hands-on approach ensures that every Naga Balm product carries the essence of our dedication.&rdquo;
              </p>
            </div>
            {/* Decorative quote marks */}
            <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-amber-500/20 text-9xl">&ldquo;</div>
            <div className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6 text-amber-500/20 text-9xl">&rdquo;</div>
          </blockquote>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl"></div>
    </section>
  )
} 