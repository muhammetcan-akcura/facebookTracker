import React, { useState } from 'react';
import { Header } from './Header';
import { SearchBox } from './SearchBox';
import { Stats } from './Stats';
import { Features } from './Features';

interface PageStats {
  pageName: string;
  followers: number;
  likes: number;
  shares: number;
  comments: number;
}

export function FacebookStats() {
  const [url, setUrl] = useState('');
  const [stats, setStats] = useState<PageStats | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setStats({
        pageName: "Demo Facebook Sayfası",
        followers: 125000,
        likes: 98000,
        shares: 45000,
        comments: 32000
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBox
        url={url}
        onUrlChange={setUrl}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <Stats stats={stats} />
      <Features />
    </div>
  );
}