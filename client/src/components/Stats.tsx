import { Users, ThumbsUp, Share2, MessageCircle } from 'lucide-react';
import { StatsCard } from './StatsCard';

interface StatsProps {
  stats: {
    pageName: string;
    followers: number;
    likes: number;
    shares: number;
    comments: number;
  } | null;
}

export function Stats({ stats }: StatsProps) {
  if (!stats) return null;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('tr-TR', { notation: 'compact' }).format(num);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        {stats.pageName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={Users}
          title="Takipçiler"
          value={formatNumber(stats.followers)}
          change="12.5%"
          positive={true}
        />
        <StatsCard
          icon={ThumbsUp}
          title="Beğeniler"
          value={formatNumber(stats.likes)}
          change="8.3%"
          positive={true}
        />
        <StatsCard
          icon={Share2}
          title="Paylaşımlar"
          value={formatNumber(stats.shares)}
          change="5.2%"
          positive={true}
        />
        <StatsCard
          icon={MessageCircle}
          title="Yorumlar"
          value={formatNumber(stats.comments)}
          change="15.7%"
          positive={true}
        />
      </div>
    </div>
  );
}