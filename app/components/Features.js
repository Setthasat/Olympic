import { Globe, Trophy, Calendar, Sparkles } from "lucide-react";

export default function Features() {
  const features = [
    {
      color: "#0085C3",
      icon: Globe,
      title: "What",
      description:
        "Athletes from over 200 nations participate in these prestigious Olympic Games every 2 years.",
    },
    {
      color: "#009F3D",
      icon: Trophy,
      title: "Why",
      description:
        "To promote the elite most events to foster international friendship and peace through sport.",
    },
    {
      color: "#F4C430",
      icon: Calendar,
      title: "When",
      description:
        "Held every four years for each games, with separate events for Summer and Winter Olympics.",
    },
    {
      color: "#DF0024",
      icon: Sparkles,
      title: "Who",
      description:
        "Organized by the IOC, athletes from over 200 nations compete at the highest level.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-start bg-white rounded-2xl shadow-sm p-10"
            >
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg mb-4">
                <feature.icon
                  className="h-8 w-8"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
