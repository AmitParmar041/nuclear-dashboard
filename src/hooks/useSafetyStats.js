import { useState, useEffect } from 'react';

// Simulated API call
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const useSafetyStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        await delay(800); // Simulate network delay
        
        // In production, replace with real API call:
        // const response = await fetch('https://api.nuclear-info.com/safety/stats');
        // const data = await response.json();
        
        const mockData = {
          totalReactors: 440,
          operationalReactors: 413,
          decommissioningReactors: 27,
          countries: 31,
          totalCapacity: "370,000 MW",
          annualProduction: "2,600 TWh"
        };
        
        setStats(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return { stats, loading, error };
};