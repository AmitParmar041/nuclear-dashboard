import { nuclearEducation } from '../data';
import EducationCard from '../components/EducationCard';
import { BookOpen, Lightbulb, Target, ShieldCheck, Zap, Globe } from 'lucide-react';

const Education = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-reactor-green/10 px-4 py-2 rounded-full mb-4">
          <BookOpen className="text-reactor-green" size={20} />
          <span className="text-reactor-green font-semibold">Learn Nuclear Energy</span>
        </div>
        <h1 className="text-5xl font-bold text-nuclear-blue mb-4">Understanding Nuclear Power</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the science, technology, and safety behind nuclear energy. 
          Knowledge is the key to understanding this powerful energy source.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-reactor-green" size={32} />
          <h2 className="text-3xl font-bold text-nuclear-blue">Key Concepts</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {nuclearEducation.map((item) => (
            <EducationCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Nuclear Energy Benefits */}
      <section className="bg-nuclear-blue text-white rounded-2xl p-8 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Target className="text-reactor-green" size={32} />
          <h2 className="text-3xl font-bold">Why Nuclear Energy Matters</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Zero Emissions</h3>
            <p className="text-gray-300">Nuclear power plants produce no carbon dioxide during operation, making them a key solution for climate change.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">Reliable Power</h3>
            <p className="text-gray-300">Nuclear plants operate 24/7, providing consistent baseload power regardless of weather conditions.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-reactor-green">High Energy Density</h3>
            <p className="text-gray-300">A small amount of uranium produces enormous amounts of energy, reducing fuel transportation needs.</p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-nuclear-blue mb-8 text-center">Quick Facts</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-reactor-green mb-2">90%</div>
            <p className="text-gray-600">of nuclear fuel is used efficiently</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-reactor-green mb-2">100+</div>
            <p className="text-gray-600">years of safe nuclear operation</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-reactor-green mb-2">30+</div>
            <p className="text-gray-600">countries use nuclear power</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-reactor-green mb-2">10%</div>
            <p className="text-gray-600">of global electricity comes from nuclear</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;