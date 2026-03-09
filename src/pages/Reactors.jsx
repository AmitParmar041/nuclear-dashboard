import { useReactors } from '../hooks/useReactors';
import { MapPin, Activity, AlertCircle, Search } from 'lucide-react';
import { useState } from 'react';

const Reactors = () => {
  const { reactors, loading, error } = useReactors();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter reactors based on search term
  const filteredReactors = reactors.filter(reactor =>
    reactor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reactor.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reactor.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Loading State
  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-reactor-green"></div>
          <span className="ml-4 text-gray-600">Loading reactor data...</span>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading reactors: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-nuclear-blue mb-8 text-center">
        Reactor Database
      </h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name, type, or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-reactor-green"
          />
        </div>
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredReactors.length} of {reactors.length} reactors
      </p>

      {/* Reactor Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReactors.map((reactor) => (
          <div key={reactor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300 border border-gray-100">
            <div className="h-2 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-nuclear-blue">{reactor.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  reactor.status === 'Operational' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {reactor.status}
                </span>
              </div>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Activity size={16} />
                  <span>{reactor.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{reactor.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>Output: {reactor.output}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={16} />
                  <span>Capacity: {reactor.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={16} />
                  <span>Operator: {reactor.operator}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={16} />
                  <span>Commissioned: {reactor.commissioning}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredReactors.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-xl font-bold text-gray-600 mb-2">No Reactors Found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
};

export default Reactors;