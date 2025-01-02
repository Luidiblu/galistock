import { useState, useEffect } from 'react';
import { fetchExchangeRate } from '../services/api';

export function useExchangeRate() {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    const updateRate = async () => {
      const currentRate = await fetchExchangeRate();
      setRate(currentRate);
    };

    updateRate();
    // Update rate every 5 minutes
    const interval = setInterval(updateRate, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return rate;
}