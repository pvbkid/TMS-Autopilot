import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, TrendingUp, Users, Car } from 'lucide-react';

export default function ControlAnimation() {
  const stats = [
    { label: 'Total Vehicles', value: 50, icon: Car, color: 'text-blue-500' },
    { label: 'Active Drivers', value: 45, icon: Users, color: 'text-green-500' },
    { label: 'Upcoming Trips', value: 5, icon: TrendingUp, color: 'text-brand-600' },
  ];

  return (
    <div className="w-full h-full bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col shadow-2xl relative overflow-hidden">
      {/* Decorative pulse background */}
      <div className="absolute inset-0 bg-brand-500/5 animate-pulse" />
      
      <div className="flex items-center space-x-2 mb-8 relative z-10">
        <LayoutDashboard className="text-brand-500 w-5 h-5" />
        <span className="text-sm font-semibold text-white">Live Operations Dashboard</span>
      </div>
      
      <div className="grid grid-cols-1 gap-4 relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-slate-700/50 ${stat.color}`}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">{stat.label}</p>
                  <motion.p 
                    className="text-2xl font-bold text-white font-display"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, delay: idx * 1 }}
                  >
                    {stat.value}
                  </motion.p>
                </div>
              </div>
              
              <div className="w-16 h-8 flex items-end">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full bg-brand-500/30 mx-0.5 rounded-t"
                    style={{ height: '20%' }}
                    animate={{ height: [`${20 + i*10}%`, `${60 + i*5}%`, `${20 + i*10}%`] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto flex justify-between items-center relative z-10">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-brand-500"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
            />
          ))}
        </div>
        <span className="text-[10px] text-slate-500 font-mono italic">SYST: OK_CORE_STABLE</span>
      </div>
    </div>
  );
}
