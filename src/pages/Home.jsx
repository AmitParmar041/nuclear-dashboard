import { Link } from 'react-router-dom';
import ReactorMap from '../components/ReactorMap';
import StatsChart from '../components/StatsChart';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-nuclear-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1569049929500-5b92740e4030?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">The Future of <span className="text-reactor-green">Clean Energy</span></h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Explore the world's nuclear infrastructure, analyze safety data, and understand the role of nuclear power in a sustainable future.</p>
          <Link to="/reactors" className="bg-reactor-green hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center gap-2 mx-auto">
            Explore Reactors <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-reactor-green">
            <ShieldCheck className="text-reactor-green mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">Safety First</h3>
            <p className="text-gray-600">Real-time monitoring of reactor safety protocols and historical incident data.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-blue-500">
            <Zap className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2">High Output</h3>
            <p className="text-gray-600">Nuclear energy provides consistent baseload power with zero carbon emissions.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-purple-500">
            <div className="text-purple-500 mb-4 text-4xl font-bold">🌍</div>
            <h3 className="text-xl font-bold mb-2">Global Impact</h3>
            <p className="text-gray-600">Tracking reactors across 30+ countries to understand global energy distribution.</p>
          </div>
        </div>
      </section>

      {/* Map & Chart Section */}
      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-nuclear-blue">Global Reactor Locations</h2>
          <ReactorMap />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6 text-nuclear-blue">Energy Mix Analysis</h2>
          <StatsChart />
          <div className="bg-nuclear-blue text-white p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">Did you know?</h4>
            <p className="text-gray-300">One uranium fuel pellet (the size of a gummy bear) contains as much energy as 1 ton of coal, 149 gallons of oil, or 17,000 cubic feet of natural gas.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;