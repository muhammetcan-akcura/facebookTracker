import React from 'react';
import { BarChart3, TrendingUp, Clock, Shield, Users, Heart, Share2, MessageCircle } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Track your page performance with comprehensive graphs and reports'
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your follower and engagement growth daily'
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Understand your audience demographics and behavior'
    },
    {
      icon: Heart,
      title: 'Engagement Metrics',
      description: 'Track likes, reactions, and overall engagement rates'
    },
    {
      icon: Share2,
      title: 'Share Analysis',
      description: 'Monitor content sharing and viral potential'
    },
    {
      icon: MessageCircle,
      title: 'Comment Tracking',
      description: 'Analyze comment patterns and sentiment'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get instant updates on your page metrics'
    },
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Your data is protected with enterprise-grade security'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Why Choose SocialTracker?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get powerful insights into your Facebook page performance with our comprehensive analytics tools
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group">
                <feature.icon className="w-6 h-6 text-blue-600 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}