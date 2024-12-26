import React from 'react';
import { Facebook } from 'lucide-react';

export function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fadeIn">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Facebook className="w-16 h-16 text-white animate-pulse" />
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold ml-4">SocialTracker</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
            Track and analyze your Facebook page metrics in real-time
          </p>
          <div className="flex justify-center space-x-4">
            <div className="animate-float delay-100">
              <span className="inline-block bg-blue-500/30 backdrop-blur-sm rounded-lg px-4 py-2">
                Real-time Analytics
              </span>
            </div>
            <div className="animate-float delay-200">
              <span className="inline-block bg-blue-500/30 backdrop-blur-sm rounded-lg px-4 py-2">
                Engagement Metrics
              </span>
            </div>
            <div className="animate-float delay-300">
              <span className="inline-block bg-blue-500/30 backdrop-blur-sm rounded-lg px-4 py-2">
                Growth Insights
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}