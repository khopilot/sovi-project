import Image from 'next/image'

export default function History() {
  const timeline = [
    {
      year: "Origins",
      title: "Traditional Roots",
      description: "Founded on the ancient healing traditions of Preng Kola, a time-honored Cambodian remedy passed down through generations.",
      image: "/images/about-grid/430720496_388817580758751_2341257138742686116_n.jpg"
    },
    {
      year: "Evolution",
      title: "Modernizing Tradition",
      description: "Developed a unique formulation that preserves traditional effectiveness while meeting modern safety and quality standards.",
      image: "/images/about-grid/391671432_294858683487975_2328397320296936_n.jpg"
    },
    {
      year: "2023",
      title: "New Chapter",
      description: "Relaunched with a renewed commitment to quality, operating from our purpose-built cosmetics-grade manufacturing facility in Chak Angre Krom.",
      image: "/images/about-grid/391619663_294858813487962_4740528239290929594_n.jpg"
    },
    {
      year: "Today",
      title: "Handcrafted Excellence",
      description: "Continuing our dedication to handcrafted production, where every product is made with care and attention to detail.",
      image: "/images/about-grid/420033960_348959618077881_592468932604044747_n.jpg"
    }
  ]

  return (
    <section className="py-16 md:py-32 bg-[#FDD16E] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.white)_1px,transparent_0)] [background-size:48px_48px] opacity-10"></div>
      
      {/* Decorative Clouds */}
      {/* First cloud - opposite to first timeline item (right side) */}
      <div className="absolute top-[15%] left-0 w-[520px] h-[520px] -translate-x-[13%] transition-transform duration-1000 hover:translate-x-[-8%]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt=""
          fill
          className="object-contain transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      
      {/* Second cloud - opposite to second timeline item (left side) */}
      <div className="absolute top-[40%] right-0 w-[520px] h-[520px] translate-x-[13%] transition-transform duration-1000 hover:translate-x-[8%]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt=""
          fill
          className="object-contain transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      
      {/* Third cloud - opposite to third timeline item (right side) */}
      <div className="absolute top-[65%] left-0 w-[520px] h-[520px] -translate-x-[13%] transition-transform duration-1000 hover:translate-x-[-8%]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt=""
          fill
          className="object-contain transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      
      {/* Fourth cloud - opposite to fourth timeline item (left side) */}
      <div className="absolute top-[75%] right-0 w-[520px] h-[520px] translate-x-[13%] transition-transform duration-1000 hover:translate-x-[8%]">
        <Image
          src="/images/png/cloud-balm.avif"
          alt=""
          fill
          className="object-contain transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4 md:mb-6">Our Journey</h2>
          <p className="text-lg md:text-xl text-amber-800">
            From traditional roots to modern innovation, our story is one of 
            preserving heritage while embracing progress.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600"></div>
            
            <div className="space-y-32">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line with Gradient */}
                  <div 
                    className={`absolute top-1/2 w-[calc(50%-3rem)] h-0.5 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-amber-400/20 to-amber-400`}
                    style={{ [index % 2 === 0 ? 'right' : 'left']: '50%' }}
                  ></div>
                  
                  {/* Content Container */}
                  <div className={`flex items-center justify-${index % 2 === 0 ? 'end' : 'start'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-24' : 'text-left pl-24'}`}>
                      <div className="group">
                        {/* Image Container */}
                        <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-60"></div>
                        </div>

                        {/* Year Badge */}
                        <div className={`inline-block mb-4 px-4 py-1 rounded-full bg-amber-800 text-amber-100 text-sm font-semibold
                          transform transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-700`}>
                          {item.year}
                        </div>
                        
                        {/* Content Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl transform transition-all duration-300
                          group-hover:-translate-y-1 group-hover:shadow-2xl">
                          <h3 className="text-2xl font-bold text-amber-900 mb-4">{item.title}</h3>
                          <p className="text-amber-800">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-amber-400 border-4 border-[#FDD16E]
                        transform transition-all duration-300 hover:scale-150 hover:bg-amber-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-amber-500">
                {/* Image */}
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-60"></div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 top-20 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-[#FDD16E]"></div>
                </div>
                
                {/* Content */}
                <div className="group">
                  <div className="mb-2 text-amber-800 font-bold">{item.year}</div>
                  <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300
                    group-hover:-translate-y-1 group-hover:shadow-xl">
                    <h3 className="text-xl font-bold text-amber-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-amber-800">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 