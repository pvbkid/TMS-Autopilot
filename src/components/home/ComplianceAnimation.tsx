import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ComplianceAnimation() {
  const items = [
    { label: 'Insurance Expiry', due: '2 days' },
    { label: 'PUC Due', due: 'Today' },
    { label: 'License Renewal', due: 'Tomorrow' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
      <div className="w-full max-w-sm p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="text-brand-600 w-5 h-5" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white">Compliance Calendar</span>
        </div>
        
        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-colors"
              animate={{ 
                borderColor: idx === 0 ? ["transparent", "#ef4444", "#10b981"] : "transparent",
                backgroundColor: idx === 0 ? ["transparent", "rgba(239, 68, 68, 0.1)", "rgba(16, 185, 129, 0.1)"] : "transparent"
              }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.5, 0.8] }}
            >
              <div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{item.label}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Expiring in {item.due}</p>
              </div>
              
              <div className="relative">
                {idx === 0 ? (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 1, 0],
                      x: [0, 0, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 4, times: [0, 0.4, 0.6] }}
                    className="absolute"
                  >
                    <AlertCircle className="text-red-500 w-5 h-5" />
                  </motion.div>
                ) : null}
                
                <motion.div
                  animate={{ 
                    opacity: idx === 0 ? [0, 0, 1] : 1,
                    scale: idx === 0 ? [0.8, 0.8, 1] : 1
                  }}
                  transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.9] }}
                >
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-4 right-4 animate-pulse">
        <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">
          URGENT ALERT
        </div>
      </div>
    </div>
  );
}
