import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, ShieldCheck, Mail, Clock } from 'lucide-react';

export default function BookDemo() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 mt-16 min-h-[80vh] flex items-center justify-center transition-colors">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-xl mx-auto transition-colors"
        >
          <div className="w-20 h-20 bg-success-50 dark:bg-success-900/30 text-success-600 dark:text-success-400 rounded-full flex items-center justify-center mx-auto mb-8">
             <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 dark:text-white">You're All Set!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
            An expert from our team will reach out to you within the next 24 hours to finalize your demo schedule.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-brand-600 dark:text-brand-400 font-bold hover:underline"
          >
            Back to form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 mt-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-display font-bold mb-8 italic dark:text-white">Let's Talk.</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Schedule a free, no-obligation demo with one of our experts. We'll walk you through the platform and answer any questions you have about how TMS can benefit your business.
            </p>

            <div className="space-y-8">
              {[
                { icon: Clock, title: "20-Minute Deep Dive", desc: "Short, focused, and tailored to your fleet size." },
                { icon: Mail, title: "Direct Contact", desc: "No automated bots. Real experts answering real questions." },
                { icon: ShieldCheck, title: "Data Privacy First", desc: "We discuss your needs in a secure environment." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 transition-colors">
                    <item.icon className="text-brand-600 dark:text-brand-400 w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-brand-50 dark:bg-slate-800/50 rounded-3xl border border-brand-100 dark:border-slate-700 italic font-medium text-slate-800 dark:text-slate-300 transition-colors">
               "Within 2 months of using TMS, our operational overhead dropped by 30%. The demo was the best 20 minutes we spent on our business this year."
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-none transition-colors">
            <div className="flex items-center space-x-2 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
               <Calendar className="text-brand-600 dark:text-brand-400 w-5 h-5" />
               <span className="font-bold text-slate-900 dark:text-white">Reserve Your Spot</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 transition-all font-medium dark:text-white dark:placeholder-slate-600" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Company Name</label>
                  <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 transition-all font-medium dark:text-white dark:placeholder-slate-600" placeholder="Travel Global Inc." />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Business Email</label>
                <input type="email" required className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 transition-all font-medium dark:text-white dark:placeholder-slate-600" placeholder="support@company.com" />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                <input type="tel" required className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 transition-all font-medium dark:text-white dark:placeholder-slate-600" placeholder="+1 (555) 000-0000" />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Fleet Size</label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-500 transition-all font-medium dark:text-white">
                  <option>1-10 Vehicles</option>
                  <option>11-50 Vehicles</option>
                  <option>50+ Vehicles</option>
                </select>
              </div>

              <button className="w-full bg-brand-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 dark:shadow-none active:scale-95 uppercase tracking-tighter">
                Confirm My Demo
              </button>

              <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
                By submitting this form, you agree to our Privacy Policy. We promise not to spam you. We'll only contact you regarding your demo request.
              </p>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center space-x-2 text-slate-400 dark:text-slate-500 text-sm italic">
               <span>Secured by TMS Cloud Registry</span>
               <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
