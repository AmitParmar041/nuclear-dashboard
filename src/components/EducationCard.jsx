import { BookOpen, Zap, Factory, RefreshCw } from 'lucide-react';

const EducationCard = ({ title, icon, content, details }) => {
  const iconMap = {
    '⚛️': BookOpen,
    '⚡': Zap,
    '🏭': Factory,
    '🔄': RefreshCw,
  };

  const IconComponent = iconMap[icon] || BookOpen;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 border-l-4 border-reactor-green">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-reactor-green/10 p-3 rounded-lg">
          <IconComponent className="text-reactor-green" size={32} />
        </div>
        <h3 className="text-xl font-bold text-nuclear-blue">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
      <details className="group">
        <summary className="text-reactor-green cursor-pointer font-semibold hover:text-green-600">
          Learn More →
        </summary>
        <p className="text-gray-600 mt-2 pl-4 border-l-2 border-gray-200">
          {details}
        </p>
      </details>
    </div>
  );
};

export default EducationCard;