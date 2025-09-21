export default function Timeline() {
  const timelineEvents = [
    {
      year: 'c. 776 BCE',
      title: 'Traditional date of first recorded ancient Olympic Games in Olympia',
      color: 'yellow'
    },
    {
      year: '1896',
      title: 'First modern Summer Olympics held in Athens',
      color: 'blue'
    },
    {
      year: '1924',
      title: 'First Winter Olympic Games held in Chamonix',
      color: 'blue'
    },
    {
      year: 'Present',
      title: 'Olympic continues to evolve with new nations, athletes, and global reach',
      color: 'green'
    }
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'yellow': return 'border-yellow-400 bg-yellow-50'
      case 'blue': return 'border-blue-400 bg-blue-50'
      case 'green': return 'border-green-400 bg-green-50'
      default: return 'border-gray-400 bg-gray-50'
    }
  }

  return (
    <section id="Timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Olympic Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Key moments in Olympic history</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8'}`}>
                  <div className={`border-2 rounded-xl p-6 ml-12 md:ml-0 ${getColorClasses(event.color)}`}>
                    <div className="font-bold text-lg text-gray-900 mb-2">{event.year}</div>
                    <p className="text-gray-700 text-sm">{event.title}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}