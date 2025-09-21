import Image from 'next/image'
import Heropic from '../../public/Heropic.png'

export default function Hero() {
  return (
    <div className="relative min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={Heropic}
          alt="Olympic Games Athletes"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for better text readability - remove if not needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-[70vh] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Olympic Games
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/95 max-w-xl">
            A global celebration of sport, culture and human excellence — 
            Summer & Winter editions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300">
              Learn the History
            </button>
            <button className="border-2 border-white/90 bg-transparent backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Compare Summer vs Winter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}