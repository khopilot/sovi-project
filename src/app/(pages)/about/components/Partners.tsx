import Image from 'next/image'
import styles from './Hero.module.css'

export default function Partners() {
  const partners = [
    {
      name: "7-11",
      logo: "/images/partners/7-11.png",
      description: "Convenience Store Chain"
    },
    {
      name: "21 Degree",
      logo: "/images/partners/21 Degree.jpg",
      description: "Retail Partner"
    },
    {
      name: "Aosot Plus",
      logo: "/images/partners/Aosot Plus.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Babel Guesthouse",
      logo: "/images/partners/Babel Guesthouse.jpg",
      description: "Hospitality Partner"
    },
    {
      name: "Circle K",
      logo: "/images/partners/Circle K.png",
      description: "Convenience Store Chain"
    },
    {
      name: "For Someone I Like",
      logo: "/images/partners/For Someone I Like.jpg",
      description: "Retail Partner"
    },
    {
      name: "HRK Care",
      logo: "/images/partners/HRK Care.jpg",
      description: "Healthcare Partner"
    },
    {
      name: "Inter Badminton Club",
      logo: "/images/partners/Inter Badminton Club.jpg",
      description: "Sports & Fitness Partner"
    },
    {
      name: "Interter Club",
      logo: "/images/partners/Interter Club.jpg",
      description: "Sports Club Partner"
    },
    {
      name: "Kabas Concept Store",
      logo: "/images/partners/Kabas Concept store.jpg",
      description: "Retail Partner"
    },
    {
      name: "Kingdom Fight Gym",
      logo: "/images/partners/Kingdom Fight Gym.jfif",
      description: "Martial Arts Partner"
    },
    {
      name: "Kun Khmer International Federation",
      logo: "/images/partners/Kun Khmer international Federation.jpg",
      description: "Martial Arts Federation"
    },
    {
      name: "Medilance Pharmacy",
      logo: "/images/partners/Medilance Pharmacy.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Our Pharmacy BKK",
      logo: "/images/partners/Our Pharmacy BKK.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Pharmacy Chhat",
      logo: "/images/partners/Pharmacy Chhat.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Pharmacy Phsar Chas",
      logo: "/images/partners/Pharmacy Phsar Chas.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Phnom Penh International Airport",
      logo: "/images/partners/Phnom Penh International Airport.png",
      description: "Travel Retail Partner"
    },
    {
      name: "Phnom Penh Sport Club",
      logo: "/images/partners/Phnom Penh Sport CLub.jpg",
      description: "Sports & Fitness Partner"
    },
    {
      name: "Point Sante Pharmacy",
      logo: "/images/partners/Point Sante Pharmacy.jpg",
      description: "Pharmacy Partner"
    },
    {
      name: "Sen Bunthen Club",
      logo: "/images/partners/Sen Bunthen Club.png",
      description: "Sports Club Partner"
    },
    {
      name: "Shop Satu",
      logo: "/images/partners/Shop Satu.jpg",
      description: "Retail Partner"
    },
    {
      name: "SuperDuper",
      logo: "/images/partners/SuperDuper.png",
      description: "Retail Partner"
    },
    {
      name: "The Ring Fitness Club",
      logo: "/images/partners/The Ring Fitness Club.png",
      description: "Fitness Partner"
    },
    {
      name: "Total Bonjour Mart",
      logo: "/images/partners/Total Bonjour Mart.png",
      description: "Convenience Store Partner"
    },
    {
      name: "Villa Martial Art",
      logo: "/images/partners/Villa Martial Art.jpg",
      description: "Martial Arts Partner"
    }
  ]

  return (
    <section className="py-16 md:py-32 bg-[#FDD16E] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.white)_1px,transparent_0)] [background-size:48px_48px] opacity-10"></div>

      {/* Decorative Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left cloud */}
        <div className={`absolute -left-[250px] top-[10%] w-[600px] h-[600px] ${styles.cloudFloat1}`}>
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* Top right cloud */}
        <div className={`absolute -right-[200px] top-[15%] w-[450px] h-[450px] ${styles.cloudFloat2}`}>
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* Bottom left cloud */}
        <div className={`absolute -left-[180px] bottom-[10%] w-[500px] h-[500px] ${styles.cloudFloat3}`}>
          <Image
            src="/images/png/cloud-balm.avif"
            alt=""
            fill
            className="object-contain opacity-90"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4 md:mb-6">
            Our Partners
          </h2>
          <p className="text-lg md:text-xl text-amber-800">
            Working together with trusted partners across Cambodia to deliver quality and authenticity in every product.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo Container */}
              <div className="relative w-full aspect-square mb-4 bg-white/80 rounded-xl 
                overflow-hidden flex items-center justify-center p-3">
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-amber-900/80 opacity-0 group-hover:opacity-100
                    transition-all duration-500 flex items-center justify-center p-2">
                    <h3 className="text-white text-center font-bold text-lg md:text-xl
                      transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="text-sm font-semibold text-amber-900 mb-1 line-clamp-2">
                  {partner.name}
                </h3>
                <p className="text-xs text-amber-700 line-clamp-1">
                  {partner.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 
                  border-amber-200 rounded-tl-2xl transition-all duration-300 
                  group-hover:border-amber-400"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 
                  border-amber-200 rounded-br-2xl transition-all duration-300 
                  group-hover:border-amber-400"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-amber-800 mb-6">
            Interested in partnering with us?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 
              border border-transparent text-base font-medium rounded-md 
              text-white bg-amber-600 hover:bg-amber-700 
              transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
} 