import { DollarSign } from 'lucide-react';
import { useExchangeRate } from '../hooks/useExchangeRate';

export function ConversionDisplay() {
  const rate = useExchangeRate();

  return (
    <div className="absolute bottom-8 left-8">
      <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <DollarSign className="text-green-400" size={24} />
          <span className="text-3xl font-bold text-white">
            1.00 USD = {rate?.toFixed(2)} BRL
          </span>
        </div>
        <p className="text-sm text-gray-200 mt-2">
          Real-time conversion rate
        </p>
      </div>
    </div>
  );
}