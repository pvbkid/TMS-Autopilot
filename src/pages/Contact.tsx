import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cms } from '../content/cms';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 mt-16 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
             <h1 className="text-6xl font-display font-bold mb-8 italic dark:text-white">Get in Touch.</h1>
             <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">Whether you have a technical question or want to explore partnership opportunities, our team is here to help.</p>
             
             <div className="space-y-12">
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-transparent dark:border-slate-800">
                      <Mail className="text-brand-600 w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email us</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{cms.contact.email}</p>
                   </div>
                </div>

                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-transparent dark:border-slate-800">
                      <Phone className="text-brand-600 w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Call us</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{cms.contact.phone}</p>
                   </div>
                </div>

                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-transparent dark:border-slate-800">
                      <MapPin className="text-brand-600 w-5 h-5" />
                   </div>
                   <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Visit us</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white italic">{cms.contact.address}</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="flex-1">
             <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-12 lg:p-20 border border-transparent dark:border-slate-800">
                <h2 className="text-3xl font-display font-bold mb-10 dark:text-white">Send a Message</h2>
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full name</label>
                         <input type="text" className="w-full bg-white dark:bg-slate-950 dark:text-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-500 shadow-sm dark:shadow-none dark:placeholder-slate-600" placeholder="John Doe" />
                      </div>
                      <div className="space-y-4">
                         <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email address</label>
                         <input type="email" className="w-full bg-white dark:bg-slate-950 dark:text-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-500 shadow-sm dark:shadow-none dark:placeholder-slate-600" placeholder="john@company.com" />
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Subject</label>
                      <input type="text" className="w-full bg-white dark:bg-slate-950 dark:text-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-500 shadow-sm dark:shadow-none dark:placeholder-slate-600" placeholder="Enterprise Partnership Query" />
                   </div>

                   <div className="space-y-4">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Message</label>
                      <textarea className="w-full bg-white dark:bg-slate-950 dark:text-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-500 shadow-sm dark:shadow-none min-h-[150px] dark:placeholder-slate-600" placeholder="Tell us about your operations..."></textarea>
                   </div>

                   <button className="bg-slate-900 dark:bg-brand-600 text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 dark:hover:bg-brand-700 transition-all shadow-xl dark:shadow-brand-500/20 group">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
