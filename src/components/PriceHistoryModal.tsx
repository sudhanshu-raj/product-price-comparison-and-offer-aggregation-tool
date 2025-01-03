import { X } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PriceHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function PriceHistoryModal({ isOpen, onClose, productName }: PriceHistoryModalProps) {
  if (!isOpen) return null;

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Price in ₹',
        data: [
          21000, 18000, 24000, 19000, 23000, 20000, 22000, 17000, 24500, 19500, 22500, 20790
        ], // Random prices
        borderColor: 'rgba(0, 123, 255, 1)',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
        tension: 0.4, // Smooth the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: false, // Hide title
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(tickValue: number | string) {
            return `₹${tickValue}`;
          },
        },
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Price History - {productName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <Line data={data} options={options} />
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-gray-500">
              <p>Lowest Price</p>
              <p className="text-xl font-semibold">₹ 14,999</p>
            </div>
            <div className="text-gray-500">
              <p>Average Price</p>
              <p className="text-xl font-semibold">₹ 28,599</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}