import { Landmark, Rocket } from 'lucide-react'

export default function OlympicHistory() {
  return (
    <section id="History" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Olympic History</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From ancient Greece to the modern global celebration</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ancient Origins */}
          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white  font-bold"><Landmark /></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Ancient Origins</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Originated in ancient Greece as religious and athletic festivals honoring Zeus. Held from the 8th century BCE until the end of the Roman era.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Held every four years in Olympia
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Included running, wrestling, pentathlon, chariot racing
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Religious and cultural events as much as athletic competition
              </li>
            </ul>
          </div>
          
          {/* Modern Revival */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold"><Rocket /></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Modern Revival</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Revived by Baron Pierre de Coubertin in the late 19th century to promote international understanding through sport.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                First modern Olympic Athens, 1896
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Winter Olympics began in 1924 in Chamonix, France
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                IOC coordinates the Olympic Movement globally
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}