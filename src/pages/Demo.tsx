import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Demo() {
  const steps = [
    { time: '0:00-0:15', label: 'Dashboard & Metrics overview' },
    { time: '0:15-0:45', label: 'Adding vehicles & uploads' },
    { time: '0:45-1:15', label: 'Driver management setup' },
    { time: '1:15-1:45', label: 'Smart Availability Search' },
    { time: '1:45-2:00', label: 'Automated Expiry Alerts' },
  ];

  return (
    <div className="pt-32 pb-20 mt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-5xl font-display font-bold mb-4 italic dark:text-white">See TMS in Action</h1>
           <p className="text-xl text-slate-600 dark:text-slate-400">Watch our 2-minute walkthrough to see how TMS can streamline your operation.</p>
        </div>

        <div className="bg-slate-900 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-8 border-white dark:border-slate-800">
           <video 
             className="w-full h-full object-cover"
             controls
             preload="metadata"
           >
             <source src="/tms-demo.mp4" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
           <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">What we cover in the video</h2>
              <div className="space-y-6">
                 {steps.map((step, i) => (
                   <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-900 dark:text-white font-bold">{step.label}</span>
                      <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">{step.time}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-brand-600 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6 italic">Ready for a deeper dive?</h3>
              <p className="text-brand-100 mb-10 leading-relaxed">
                While the video gives an overview, a personalized demo allows us to show you exactly how TMS fits into your specific business model.
              </p>
              <ul className="space-y-4 mb-10">
                 {['Custom Workflows', 'Team Permissions', 'API Integrations'].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-sm font-semibold">
                       <CheckCircle2 className="w-5 h-5 text-brand-300" />
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
              <Link
                to="/book-demo"
                className="w-full bg-white text-brand-600 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-50 transition-all"
              >
                <span>Schedule My Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
