import { Sun, Snowflake } from 'lucide-react'
export default function SummerVsWinter() {
  return (
    <section id="SummerVSWinter" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Summer vs Winter Olympics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Two distinct celebrations of athletic excellence</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Summer Olympics */}
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3"><Sun size={48} /></span>
              <h3 className="text-2xl font-bold">Summer Olympics</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-white/90 text-sm">Hosted in major cities worldwide with comprehensive facilities, spectator accommodation</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sports</h4>
                <p className="text-white/90 text-sm">Features Athletics, Swimming, Gymnastics, Team sports and much more in varied environments</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Athletes</h4>
                <p className="text-white/90 text-sm">Over 10,000 athletes from around the world</p>
              </div>
            </div>
          </div>
          
          {/* Winter Olympics */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3"><Snowflake size={48} /></span>
              <h3 className="text-2xl font-bold">Winter Olympics</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-white/90 text-sm">Alpine, Nordic, Figure Skating, Ice Hockey, Snowboard disciplines</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Sports</h4>
                <p className="text-white/90 text-sm">Features Alpine, Nordic, Figure Skating, Ice Hockey, Snowboard disciplines</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Athletes</h4>
                <p className="text-white/90 text-sm">Over athletes from ski-equipped nation alone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}