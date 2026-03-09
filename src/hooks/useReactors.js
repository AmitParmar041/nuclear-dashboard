import { useState, useEffect } from 'react';

// Simulated API call
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const useReactors = () => {
  const [reactors, setReactors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await delay(1000); // Simulate network delay
        
        // In production, replace with real API call:
        // const response = await fetch('https://api.nuclear-info.com/reactors');
        // const data = await response.json();
        
        const mockData = [
          {
            id: 1,
            name: "Fukushima Daiichi",
            type: "Boiling Water Reactor",
            status: "Decommissioning",
            location: [37.4217, 141.0327],
            output: "0 MW",
            country: "Japan",
            operator: "TEPCO",
            commissioning: "1971",
            capacity: "4,696 MW"
          },
          {
            id: 2,
            name: "Chernobyl",
            type: "RBMK-1000",
            status: "Sheltered",
            location: [51.3890, 30.0970],
            output: "0 MW",
            country: "Ukraine",
            operator: "State Agency",
            commissioning: "1977",
            capacity: "3,200 MW"
          },
          {
            id: 3,
            name: "Three Mile Island",
            type: "Pressurized Water Reactor",
            status: "Decommissioning",
            location: [40.1500, -76.6500],
            output: "0 MW",
            country: "USA",
            operator: "Exelon",
            commissioning: "1978",
            capacity: "1,890 MW"
          },
          {
            id: 4,
            name: "Oconee Nuclear Station",
            type: "Pressurized Water Reactor",
            status: "Operational",
            location: [34.7400, -81.7100],
            output: "2,640 MW",
            country: "USA",
            operator: "Duke Energy",
            commissioning: "1973",
            capacity: "2,640 MW"
          },
          {
            id: 5,
            name: "Palisades Nuclear Plant",
            type: "Pressurized Water Reactor",
            status: "Decommissioning",
            location: [42.2000, -86.3600],
            output: "0 MW",
            country: "USA",
            operator: "Holtec International",
            commissioning: "1971",
            capacity: "811 MW"
          },
          {
            id: 6,
            name: "Barsebäck Nuclear Power Plant",
            type: "Pressurized Water Reactor",
            status: "Decommissioned",
            location: [55.8000, 12.5000],
            output: "0 MW",
            country: "Sweden",
            operator: "Vattenfall",
            commissioning: "1975",
            capacity: "1,600 MW"
          },
          {
            id: 7,
            name: "Kashiwazaki-Kariwa",
            type: "Boiling Water Reactor",
            status: "Operational",
            location: [37.4200, 138.5900],
            output: "7,965 MW",
            country: "Japan",
            operator: "TEPCO",
            commissioning: "1985",
            capacity: "7,965 MW"
          },
          {
            id: 8,
            name: "Kozloduy Nuclear Power Plant",
            type: "VVER-1000",
            status: "Operational",
            location: [43.2300, 23.3000],
            output: "3,960 MW",
            country: "Bulgaria",
            operator: "Kozloduy NPP",
            commissioning: "1974",
            capacity: "3,960 MW"
          }
        ];
        
        setReactors(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { reactors, loading, error };
};