import React from 'react';
import { motion } from 'motion/react';
import { cms } from '../content/cms';

export default function About() {
  return (
    <div className="pt-32 pb-20 mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-display font-bold mb-12 text-center dark:text-white">About TMS</h1>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-4">{cms.about.missionTitle}</h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                "{cms.about.mission}"
              </p>
            </section>

            <section className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm leading-relaxed">
              <h2 className="text-2xl font-bold mb-6 italic text-slate-900 dark:text-white">{cms.about.storyTitle}</h2>
              <div className="text-slate-600 dark:text-slate-400 space-y-6">
                {cms.about.story.split('. ').map((para, i) => (
                  <p key={i}>{para}.</p>
                ))}
              </div>
            </section>

            <section className="text-center pt-12">
               <h3 className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-sm mb-8">Our Core Values</h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {['Security', 'Simplicity', 'Integrity', 'Success'].map((val) => (
                    <div key={val} className="text-slate-900 dark:text-white font-bold">{val}</div>
                  ))}
               </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
