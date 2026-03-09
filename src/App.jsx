import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reactors from './pages/Reactors';
import Stats from './pages/Stats';
import Education from './pages/Education';
import Incidents from './pages/Incidents';
import Safety from './pages/Safety';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactors" element={<Reactors />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/education" element={<Education />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/safety" element={<Safety />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;