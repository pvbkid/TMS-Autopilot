import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Car } from 'lucide-react';

export default function AvailabilityAnimation() {
  const cars = [
    { x: 20, y: 30, available: true },
    { x: 50, y: 15, available: false },
    { x: 80, y: 40, available: true },
    { x: 30, y: 70, available: true },
    { x: 70, y: 75, available: false },
  ];

  return (
    <div className="relative w-full h-full bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col transition-colors">
      {/* Map Background Placeholder */}
      <div className="flex-1 relative bg-slate-100 dark:bg-slate-900/50 p-4 transition-colors">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        
        {cars.map((car, idx) => (
          <motion.div
            key={idx}
            className={`absolute p-1 bg-white dark:bg-slate-800 rounded-lg shadow-md flex items-center justify-center border ${car.available ? 'border-brand-600' : 'border-slate-200 dark:border-slate-700'}`}
            style={{ left: `${car.x}%`, top: `${car.y}%` }}
            animate={{ 
              opacity: car.available ? 1 : [1, 0.4],
              scale: car.available ? [1, 1.1, 1] : 1,
            }}
            transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
          >
             <Car className={`w-4 h-4 ${car.available ? 'text-brand-600' : 'text-slate-400'}`} />
          </motion.div>
        ))}

        <div className="absolute inset-x-0 bottom-0 p-4">
          <motion.div 
            className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-3 border border-slate-200 dark:border-slate-800 transition-colors"
            animate={{ y: [20, 0] }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded bg-brand-50 dark:bg-slate-800 flex items-center justify-center transition-colors">
                <MapPin className="text-brand-600 w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Available Vehicles</p>
                <p className="text-[8px] text-slate-500 dark:text-slate-400">9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden transition-colors">
              <motion.div 
                className="h-full bg-brand-500 w-0"
                animate={{ width: "100%" }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
