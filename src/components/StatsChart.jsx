import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { energyComparison } from '../data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold mb-4 text-nuclear-blue">Global Energy Sources</h3>
      <div className="h-64">
        <Bar data={energyComparison} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default StatsChart;