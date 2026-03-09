import { Link } from 'react-router-dom';
import { Atom } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-nuclear-blue text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Atom className="text-reactor-green" size={32} />
          <span>NuClear<span className="text-reactor-green">Info</span></span>
        </Link>
        <div className="space-x-6 hidden md:block">
          <Link to="/" className="hover:text-reactor-green transition">Home</Link>
          <Link to="/reactors" className="hover:text-reactor-green transition">Reactors</Link>
          <Link to="/stats" className="hover:text-reactor-green transition">Statistics</Link>
          <Link to="/education" className="hover:text-reactor-green transition">Education</Link>
          <Link to="/incidents" className="hover:text-reactor-green transition">Incidents</Link>
          <Link to="/safety" className="hover:text-reactor-green transition">Safety</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;