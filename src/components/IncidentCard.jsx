import { AlertTriangle, Calendar, MapPin, ShieldAlert } from 'lucide-react';

const IncidentCard = ({ name, year, location, type, severity, casualties, description, lessons }) => {
  const severityColors = {
    'Level 7 (Major)': 'bg-red-100 text-red-700',
    'Level 6 (Major)': 'bg-orange-100 text-orange-700',
    'Level 5 (Accident with Wider Risk)': 'bg-yellow-100 text-yellow-700',
    'Level 4 (Accident with Local Risk)': 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${severityColors[severity]}`}>
            {severity}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-white/90">
          <Calendar size={16} />
          <span>{year}</span>
          <span className="mx-2">•</span>
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="text-red-500" size={20} />
          <span className="font-semibold text-gray-700">{type}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="text-reactor-green" size={18} />
            <span className="font-semibold text-gray-700">Casualties</span>
          </div>
          <p className="text-gray-600">{casualties}</p>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-semibold text-nuclear-blue mb-2">Lessons Learned:</h4>
          <p className="text-gray-600 text-sm">{lessons}</p>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;