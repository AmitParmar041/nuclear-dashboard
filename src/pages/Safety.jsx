import { safetyInformation } from '../data';
import { ShieldCheck, AlertTriangle, BookOpen, Lock, Radio, Users } from 'lucide-react';

const Safety = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
          <ShieldCheck className="text-green-500" size={20} />
          <span className="text-green-500 font-semibold">Safety First</span>
        </div>
        <h1 className="text-5xl font-bold text-nuclear-blue mb-4">Nuclear Safety Protocols</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nuclear power is one of the safest energy sources when proper protocols are followed. 
          Learn about the multiple layers of protection in place.
        </p>
      </section>

      {/* Safety Principles */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Lock className="text-reactor-green" size={32} />
          <h2 className="text-3xl font-bold text-nuclear-blue">Defense in Depth</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {safetyInformation.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 border-l-4 border-reactor-green">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-reactor-green/10 p-3 rounded-lg">
                  {item.icon === '🛡️' && <ShieldCheck className="text-reactor-green" size={32} />}
                  {item.icon === '🔒' && <Lock className="text-reactor-green" size={32} />}
                  {item.icon === '🚨' && <AlertTriangle className="text-reactor-green" size={32} />}
                  {item.icon === '♻️' && <BookOpen className="text-reactor-green" size={32} />}
                </div>
                <h3 className="text-xl font-bold text-nuclear-blue">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <details className="group">
                <summary className="text-reactor-green cursor-pointer font-semibold hover:text-green-600">
                  View Details →
                </summary>
                <p className="text-gray-600 mt-2 pl-4 border-l-2 border-gray-200">
                  {item.details}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Radiation Protection */}
      <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Radio className="text-reactor-green" size={32} />
          <h2 className="text-3xl font-bold text-nuclear-blue">Radiation Protection Principles</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Time</h3>
            <p className="text-gray-600">Minimize time spent near radiation sources to reduce exposure.</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <h3 className="text-xl font-bold text-green-600 mb-3">Distance</h3>
            <p className="text-gray-600">Maximize distance from radiation sources (inverse square law).</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <h3 className="text-xl font-bold text-purple-600 mb-3">Shielding</h3>
            <p className="text-gray-600">Use appropriate materials (lead, concrete, water) to block radiation.</p>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="bg-nuclear-blue text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-reactor-green" size={32} />
          <h2 className="text-3xl font-bold">Emergency Response</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Alert Levels</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Unusual:</strong> Potential safety issue</li>
              <li><strong>Alert:</strong> Actual or potential degradation</li>
              <li><strong>Site Area Emergency:</strong> Significant release possible</li>
              <li><strong>General Emergency:</strong> Actual or imminent major release</li>
            </ul>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Public Safety</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Evacuation Zones:</strong> 10-mile and 50-mile zones</li>
              <li><strong>Shelter-in-Place:</strong> Stay indoors, close windows</li>
              <li><strong>Potassium Iodide:</strong> Protects thyroid from radioactive iodine</li>
              <li><strong>Communication:</strong> Regular updates to public and authorities</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;