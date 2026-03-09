import { historicalIncidents } from '../data';
import IncidentCard from '../components/IncidentCard';
import { AlertTriangle, Calendar, MapPin, ShieldAlert, ShieldCheck, BookOpen } from 'lucide-react';

const Incidents = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
          <AlertTriangle className="text-red-500" size={20} />
          <span className="text-red-500 font-semibold">Historical Safety Data</span>
        </div>
        <h1 className="text-5xl font-bold text-nuclear-blue mb-4">Nuclear Incidents & Safety</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding past incidents helps us build a safer future. 
          Learn about historical events and the improvements they inspired.
        </p>
      </section>

      {/* Safety Statistics */}
      <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-nuclear-blue mb-6 text-center">Safety Statistics</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <ShieldCheck className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-green-600 mb-2">0.07</h3>
            <p className="text-gray-600">Deaths per TWh (Nuclear)</p>
          </div>
          <div className="text-center p-6 bg-red-50 rounded-xl">
            <AlertTriangle className="text-red-500 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-red-600 mb-2">24.6</h3>
            <p className="text-gray-600">Deaths per TWh (Coal)</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <AlertTriangle className="text-orange-500 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-orange-600 mb-2">18.4</h3>
            <p className="text-gray-600">Deaths per TWh (Oil)</p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-6 italic">
          *Data based on statistical analysis of energy production fatalities per terawatt-hour.
        </p>
      </section>

      {/* Historical Incidents */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-reactor-green" size={32} />
          <h2 className="text-3xl font-bold text-nuclear-blue">Historical Incidents</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {historicalIncidents.map((incident) => (
            <IncidentCard key={incident.id} {...incident} />
          ))}
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="bg-nuclear-blue text-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Improved Design</h3>
            <p className="text-gray-300">Modern reactors have passive safety systems that don't require power to function.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Better Training</h3>
            <p className="text-gray-300">Operators undergo rigorous training and simulation exercises before handling reactors.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">International Standards</h3>
            <p className="text-gray-300">IAEA standards ensure consistent safety protocols across all nuclear facilities.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Transparency</h3>
            <p className="text-gray-300">Open communication with the public builds trust and ensures proper emergency response.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Incidents;