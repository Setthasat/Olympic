import { Flame, Medal, MessageCircleMore } from "lucide-react";
import Double from "../../public/Double.svg";
import Fire from "../../public/Fire.svg";
import Olympiclogo from "../../public/Olympiclogo.svg";

export default function CeremoniesSymbols() {
  const symbols = [
    {
      img: Fire,
      title: "Olympic Flame",
      description:
        "The Olympic Flame is one of the most recognized symbols worldwide, connecting the ancient and modern Games.",
    },
    {
      img: Olympiclogo,
      title: "Olympic Rings",
      description:
        "The five interlocking rings represent the unity of the five inhabited continents and meet in a spirit of competition.",
    },
    {
      img: Double,
      title: "Olympic Motto",
      description:
        '"Citius, Altius, Fortius" - Faster, Higher, Stronger - encourages athletes to strive for excellence and progress.',
    },
  ];

  return (
    <section id="Ceremonies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ceremonies & Symbols
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The traditions that unite the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {symbols.map((symbol, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-start shadow-sm hover:shadow-md transition-shadow flex flex-col items-start"
            >
              <img
                src={symbol.img.src}
                alt={symbol.title}
                className="mb-4 h-16 w-16 object-contain"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {symbol.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {symbol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
