import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { cms } from '../content/cms';

export default function Features() {
  return (
    <div className="pt-32 pb-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-block bg-brand-50 dark:bg-slate-900 text-brand-600 dark:text-brand-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6 transition-colors"
          >
            Capabilities
          </motion.div>
          <h1 className="text-5xl font-display font-bold mb-6 dark:text-white">Designed for Growth</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A comprehensive suite of tools designed to handle every aspect of your travel agency operations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {cms.features.map((feature, idx) => {
            const Icon = (Icons as any)[feature.icon] || Icons.Zap;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white dark:bg-black p-5 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/5 transition-all relative overflow-hidden"
              >
                {feature.comingSoon && (
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-[8px] md:text-[10px] px-2 py-1 rounded-full font-black uppercase">
                    Coming Soon
                  </div>
                )}
                
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-50 dark:bg-slate-800 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:bg-brand-600 transition-colors">
                  <Icon className="text-brand-600 dark:text-brand-400 w-5 h-5 md:w-7 md:h-7 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-xs md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="pt-4 md:pt-6 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 md:mb-2">Benefit</p>
                  <p className="text-slate-900 dark:text-white font-medium text-xs md:text-sm">
                    {feature.benefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
