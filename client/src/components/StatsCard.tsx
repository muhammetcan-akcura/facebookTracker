import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
  delay?: number;
}

export function StatsCard({ icon: Icon, title, value, change, positive, delay = 0 }: StatsCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4">
        <div className="bg-blue-50 p-4 rounded-xl group">
          <Icon className="w-8 h-8 text-blue-600 transition-transform group-hover:scale-110" />
        </div>
        <div>
          <h3 className="text-lg text-gray-600">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${positive ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
              {positive ? '↑' : '↓'} {change} 
              <span className="text-gray-500 text-xs">last 30 days</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}