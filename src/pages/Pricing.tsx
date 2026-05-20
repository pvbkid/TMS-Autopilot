import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cms } from '../content/cms';

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 mt-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 text-slate-900 dark:text-white">
          <h1 className="text-5xl font-display font-bold mb-6">Choose Your Plan</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Choose a plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cms.pricing.tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl border p-10 flex flex-col ${
                tier.highlighted 
                  ? 'bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 border-purple-500 shadow-2xl z-10' 
                  : tier.popular 
                  ? 'bg-white dark:bg-slate-900 border-brand-500 shadow-2xl scale-105 z-10' 
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              {tier.popular && !tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  tier.highlighted ? 'text-white' : 'dark:text-white'
                }`}>{tier.name}</h3>
                <p className={`text-sm font-medium ${
                  tier.highlighted ? 'text-white/90' : 'text-slate-500 dark:text-slate-400'
                }`}>{tier.description}</p>
              </div>

              <div className="mb-8 items-baseline space-x-1">
                <span className={`text-5xl font-display font-bold ${
                  tier.highlighted ? 'text-white' : 'dark:text-white'
                }`}>{tier.price}</span>
                <span className={`text-sm font-medium ${
                  tier.highlighted ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'
                }`}>{tier.unit}</span>
              </div>

              <div className="flex-1 mb-10">
                <p className={`text-xs font-black uppercase tracking-widest mb-6 ${
                  tier.highlighted ? 'text-white/70' : 'text-slate-400'
                }`}>What's Included</p>
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className={`flex items-start space-x-3 text-sm ${
                      tier.highlighted ? 'text-white/90' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                        tier.highlighted ? 'text-white' : 'text-success-500'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={tier.name === 'Enterprise' ? '/contact' : '/book-demo'}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all ${
                  tier.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg'
                    : tier.popular 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-12 max-w-4xl mx-auto shadow-sm">
           <h3 className="text-2xl font-bold mb-4 dark:text-white">Dedicated to IT Sector Service Providers?</h3>
           <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
             TMS is specifically optimized for agencies providing cab/bus services to corporate firms. Ask about our multi-tenant setup for large operations.
           </p>
           <Link to="/contact" className="text-brand-600 font-bold hover:underline">
             Speak with our industry experts →
           </Link>
        </div>
      </div>
    </div>
  );
}
