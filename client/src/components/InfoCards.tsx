import React from 'react';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

export function InfoCards() {
  const cards = [
    {
      icon: Target,
      title: "What is a Facebook Page Follow Counter?",
      description: "A Facebook Page Follow Counter tracks the number of users who follow your page, providing insights into your audience growth and reach. It's a crucial metric for measuring your page's popularity and influence.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Why Monitor Page Followers?",
      description: "Tracking followers helps measure brand awareness, content effectiveness, and audience engagement. It's essential for social media marketing strategies and understanding your page's growth trajectory.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Followers vs. Likes",
      description: "While likes show general appreciation, followers actively choose to see your content in their feed. Understanding this difference is key to building a more engaged and loyal audience.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Engagement Metrics",
      description: "Beyond follower count, engagement metrics like comments, shares, and reactions provide deeper insights into how your content resonates with your audience.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Understanding Facebook Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative p-8 text-white">
                <card.icon className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-white/90 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}