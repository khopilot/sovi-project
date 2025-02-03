'use client'

type PatternStyle = React.CSSProperties & {
  '--s': string;
  '--c1': string;
  '--c2': string;
  '--_g': string;
};

export default function Hero() {
  return (
    <div className="relative py-24 sm:py-32">
      {/* Pattern Background */}
      <div 
        className="absolute inset-0" 
        style={{
          '--s': '100px',
          '--c1': '#FFD36F',
          '--c2': '#FFA500',
          '--_g': '#0000, #0004 5%, var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%, var(--c1) 36% 44%, var(--c2) 46% 54%, var(--c1) 56% 64%, var(--c2) 66% 74%, var(--c1) 76% 84%, var(--c2) 86% 94%, #0004 95%, #0000',
          background: `
            radial-gradient(100% 50% at 100% 0, var(--_g)),
            radial-gradient(100% 50% at 0 50%, var(--_g)),
            radial-gradient(100% 50% at 100% 100%, var(--_g))
          `,
          backgroundColor: '#FFD36F',
          backgroundSize: 'var(--s) calc(2*var(--s))'
        } as PatternStyle} 
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-[#EE4922] sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Have questions about our products or interested in becoming a distributor? 
            We&apos;d love to hear from you. Get in touch with our team and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>
    </div>
  )
}