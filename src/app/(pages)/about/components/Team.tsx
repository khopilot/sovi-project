'use client';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'

// Define team member types
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Define team section types
interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
}

const Team: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('leadership');

  // Leadership team
  const leadershipTeam: TeamMember[] = [
    {
      name: "Robert Esposito",
      role: "Founder and CEO",
      image: "/images/Staff Photo/Individual/1. Robert Esposito - Founder and CEO.jpg"
    },
    {
      name: "Sovisal Jerry Meach",
      role: "Co-Founder",
      image: "/images/Staff Photo/Individual/2.Sovisal Jerry Meach-Co -Founder.jpg"
    },
    {
      name: "Moeun Putheamony",
      role: "HR & Finance Manager",
      image: "/images/Staff Photo/Individual/3. Moeun Putheamony - HR & Finance Manager.jpg"
    },
    {
      name: "Ses Sarom",
      role: "Sales Supervisor",
      image: "/images/Staff Photo/Individual/4. Ses Sarom - Sale Supervisor.jpg"
    },
    {
      name: "Nou Virak",
      role: "Marketing and Communication Officer",
      image: "/images/Staff Photo/Individual/5. Nou Virak-Makerting and Communication Officer.jpg"
    }
  ];

  // Facility team photos
  const facilityTeamPhotos = [
    "/images/Staff Photo/Facility Team/UYF09743.jpg",
    "/images/Staff Photo/Facility Team/UYF09745.jpg",
    "/images/Staff Photo/Facility Team/UYF09751.jpg",
    "/images/Staff Photo/Individual/Facility Tam/UYF09811.jpg",
    "/images/Staff Photo/Individual/Facility Tam/UYF09818.jpg",
    "/images/Staff Photo/Individual/Facility Tam/UYF09865.jpg",
    "/images/Staff Photo/Individual/Facility Tam/UYF09877.jpg",
    "/images/Staff Photo/Individual/Facility Tam/UYF09884.jpg",
    "/images/Staff Photo/Individual/Facility Tam/UYF09889.jpg"
  ];

  // Group photos
  const groupPhotos = [
    "/images/Staff Photo/All Staff Group Photo/UYF09782.jpg",
    "/images/Staff Photo/All Staff Group Photo/UYF09783.jpg",
    "/images/Staff Photo/All Staff Group Photo/UYF09784.jpg",
    "/images/Staff Photo/All Staff Group Photo/UYF09788.jpg",
    "/images/Staff Photo/All Staff Group Photo/UYF09789.jpg",
    "/images/Staff Photo/All Staff Group Photo/UYF09790.jpg"
  ];

  // Team values
  const values = [
    {
      title: "Artisanal Excellence",
      description: "Every product is handcrafted with precision and care, ensuring the highest quality in every batch.",
      icon: "✨"
    },
    {
      title: "Community Impact",
      description: "We're committed to creating positive change in our local communities through sustainable practices and fair employment.",
      icon: "🌱"
    },
    {
      title: "Traditional Wisdom",
      description: "Our team brings generations of knowledge in traditional Cambodian healing practices.",
      icon: "🧠"
    },
    {
      title: "Modern Standards",
      description: "We combine traditional methods with contemporary quality and safety standards.",
      icon: "🔬"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FDD16E] to-amber-100 py-24 overflow-hidden relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.amber.600)_1px,transparent_0)] 
        [background-size:48px_48px] opacity-5"></div>
        
      {/* Decorative Cloud Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Element 2 - Top Left */}
        <div className="absolute -top-20 -left-20 w-64 md:w-96 opacity-20 transform rotate-12">
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 2.png" 
            alt="Decorative cloud" 
            width={400} 
            height={200}
            className="w-full h-auto"
          />
        </div>
        
        {/* Element 3 - Bottom Right */}
        <div className="absolute bottom-10 right-0 w-80 md:w-[500px] opacity-20 transform -rotate-6">
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 3.png" 
            alt="Decorative cloud" 
            width={500} 
            height={250}
            className="w-full h-auto"
          />
        </div>
        
        {/* Element 4 - Center Right */}
        <div className="absolute top-1/3 -right-20 w-64 md:w-96 opacity-15 transform rotate-12">
          <Image 
            src="/images/Naga Balm Element (Cloud)/Element 4.png" 
            alt="Decorative cloud" 
            width={400} 
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Naga Balm Logo */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 md:w-80"
          >
            <Image
              src="/images/png/Naga Balm_Primary_Wordmark_Primary.png"
              alt="Naga Balm"
              width={320}
              height={100}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        {/* Team Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Our Team
          </h2>
          <p className="text-xl md:text-2xl text-amber-800/90 leading-relaxed">
            Meet the dedicated hands behind every Naga Balm product - a community of skilled artisans and passionate professionals.
          </p>
        </motion.div>

        {/* Team Values */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 relative">
          {/* Decorative Element Behind Values */}
          <div className="absolute -z-10 opacity-10 w-full h-full">
            <Image 
              src="/images/Naga Balm Element (Cloud)/Element 2.png" 
              alt="Decorative cloud" 
              fill
              className="object-contain opacity-20"
            />
          </div>
          
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg
                transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl 
                hover:bg-white/95 relative h-full p-6">
                
                {/* Icon */}
                <div className="text-4xl mb-4">{value.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-amber-900 mb-3">{value.title}</h3>
                
                {/* Description */}
                <p className="text-amber-800/90 text-base leading-relaxed">{value.description}</p>
                
                {/* Decorative elements */}
                <div className="mt-4 flex items-center">
                  <div className="h-0.5 w-12 bg-amber-600 transform origin-left scale-0 
                    group-hover:scale-100 transition-transform duration-500"></div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-amber-600/0 rounded-xl
                  group-hover:border-amber-600/20 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Tabs */}
        <div className="max-w-6xl mx-auto mb-12 relative">
          {/* Decorative Element Behind Tabs */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <Image 
              src="/images/Naga Balm Element (Cloud)/Element 4.png" 
              alt="Decorative cloud" 
              fill
              className="object-contain opacity-10"
            />
          </div>
          
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveTab('leadership')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all mx-2 ${
                activeTab === 'leadership' 
                  ? 'bg-amber-800 text-white shadow-lg' 
                  : 'bg-white/80 text-amber-900 hover:bg-white'
              }`}
            >
              Leadership Team
            </button>
            <button 
              onClick={() => setActiveTab('facility')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all mx-2 ${
                activeTab === 'facility' 
                  ? 'bg-amber-800 text-white shadow-lg' 
                  : 'bg-white/80 text-amber-900 hover:bg-white'
              }`}
            >
              Facility Team
            </button>
            <button 
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all mx-2 ${
                activeTab === 'community' 
                  ? 'bg-amber-800 text-white shadow-lg' 
                  : 'bg-white/80 text-amber-900 hover:bg-white'
              }`}
            >
              Our Community
            </button>
          </div>

          {/* Leadership Team */}
          {activeTab === 'leadership' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-900">{member.name}</h3>
                    <p className="text-amber-700">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Facility Team */}
          {activeTab === 'facility' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {facilityTeamPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-xl shadow-lg group aspect-[4/3]"
                >
                  <Image
                    src={photo}
                    alt="Facility Team Member"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Community Photos */}
          {activeTab === 'community' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {groupPhotos.slice(0, 2).map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative overflow-hidden rounded-xl shadow-lg group aspect-[16/9]"
                  >
                    <Image
                      src={photo}
                      alt="Naga Balm Team"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {groupPhotos.slice(2).map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                    className="relative overflow-hidden rounded-xl shadow-lg group aspect-square"
                  >
                    <Image
                      src={photo}
                      alt="Naga Balm Team"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Team Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20 relative"
        >
          {/* Decorative Element Behind Quote */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <Image 
              src="/images/Naga Balm Element (Cloud)/Element 3.png" 
              alt="Decorative cloud" 
              fill
              className="object-contain opacity-15"
            />
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl
            hover:shadow-2xl transition-shadow duration-500 hover:bg-white/95 relative">
            <blockquote className="relative">
              {/* Large decorative quote marks */}
              <div className="absolute -top-6 -left-4 text-amber-500/20 text-8xl font-serif">&ldquo;</div>
              <div className="absolute -bottom-6 -right-4 text-amber-500/20 text-8xl font-serif">&rdquo;</div>
              
              {/* Quote content */}
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl text-amber-900 leading-relaxed mb-6 italic">
                  We are more than colleagues; we are a family united by a shared passion for preserving 
                  traditional healing wisdom while creating sustainable livelihoods in our community.
                  Every Naga Balm product carries the essence of our collective dedication.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-0.5 w-12 bg-amber-600"></div>
                  <span className="mx-4 text-amber-800 font-medium">The Naga Balm Family</span>
                  <div className="h-0.5 w-12 bg-amber-600"></div>
                </div>
              </div>
            </blockquote>
          </div>
        </motion.div>
        
        {/* Naga Balm Logo Footer */}
        <div className="flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-40 md:w-48"
          >
            <Image
              src="/images/png/Naga Balm_Primary_Wordmark_Primary.png"
              alt="Naga Balm"
              width={200}
              height={60}
              className="w-full h-auto opacity-60"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Team 