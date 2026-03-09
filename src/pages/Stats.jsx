import { useSafetyStats } from '../hooks/useSafetyStats';
import { Activity, Globe, Zap, ShieldCheck } from 'lucide-react';

const Stats = () => {
  const { stats, loading, error } = useSafetyStats();

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-reactor-green"></div>
          <span className="ml-4 text-gray-600">Loading statistics...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading statistics: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-nuclear-blue mb-8">Energy Statistics</h1>
      
      {/* Live Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-reactor-green">
          <Activity className="text-reactor-green mb-3" size={32} />
          <h3 className="text-3xl font-bold text-nuclear-blue">{stats?.totalReactors}</h3>
          <p className="text-gray-600">Total Reactors Worldwide</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <Zap className="text-green-500 mb-3" size={32} />
          <h3 className="text-3xl font-bold text-nuclear-blue">{stats?.operationalReactors}</h3>
          <p className="text-gray-600">Operational Reactors</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
          <Globe className="text-blue-500 mb-3" size={32} />
          <h3 className="text-3xl font-bold text-nuclear-blue">{stats?.countries}</h3>
          <p className="text-gray-600">Countries Using Nuclear</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
          <ShieldCheck className="text-purple-500 mb-3" size={32} />
          <h3 className="text-3xl font-bold text-nuclear-blue">{stats?.totalCapacity}</h3>
          <p className="text-gray-600">Total Capacity</p>
        </div>
      </div>

      {/* Safety Statistics */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-nuclear-blue">Safety Metrics</h3>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>Deaths per TWh (Nuclear)</span>
              <span className="font-bold text-green-600">0.07</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Deaths per TWh (Coal)</span>
              <span className="font-bold text-red-600">24.6</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Deaths per TWh (Oil)</span>
              <span className="font-bold text-orange-600">18.4</span>
            </li>
          </ul>
          <p className="mt-6 text-gray-500 text-sm italic">
            *Data based on statistical analysis of energy production fatalities.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-nuclear-blue">Annual Production</h3>
          <div className="text-center">
            <div className="text-5xl font-bold text-reactor-green mb-2">{stats?.annualProduction}</div>
            <p className="text-gray-600">Electricity Generated Annually</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;