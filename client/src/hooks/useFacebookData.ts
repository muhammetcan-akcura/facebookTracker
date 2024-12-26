// src/hooks/useFacebookStats.ts
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { facebookApi } from '../api/facebook';

export const useFacebookStats = () => {
  const [url, setUrl] = useState('');
  
  const { data: stats, isLoading, refetch } = useQuery({
    queryKey: ['facebookStats', url],
    queryFn: () => facebookApi.getFollowerCount(url),
    enabled: false, // İlk başta otomatik çalışmasını engelle
    staleTime: 1000 * 60 * 5
  });

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      await refetch();
    }
  };

  return {
    url,
    stats,
    loading: isLoading,
    handleUrlChange,
    handleSubmit
  };
};