import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, Car } from 'lucide-react';
import { cms } from '../content/cms';
import ComplianceAnimation from '../components/home/ComplianceAnimation';
import AvailabilityAnimation from '../components/home/AvailabilityAnimation';
import ControlAnimation from '../components/home/ControlAnimation';
import SplitTextAnimation from '../components/home/SplitTextAnimation';

const CarCursor = () => {
  const [trail, setTrail] = React.useState<{x: number, y: number, id: number}[]>([]);
  const [mouseState, setMouseState] = React.useState({ x: -100, y: -100, isMovingLeft: false });

  React.useEffect(() => {
    let idCounter = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMouseState((prev) => {
        const dx = e.clientX - prev.x;
        // Determine direction to flip the car
        const isMovingLeft = dx < -1.5 ? true : dx > 1.5 ? false : prev.isMovingLeft;
        return { x: e.clientX, y: e.clientY, isMovingLeft };
      });
      
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: idCounter++ }];
        return newTrail.slice(-12); // Keep last 12 points for the trail
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuously remove oldest points to create the vanishing effect when stopped
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Hide cursor until initial mouse movement is detected
  if (mouseState.x === -100) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-brand-500 dark:bg-brand-400 rounded-full blur-[1px]"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index / trail.length) * 0.6,
            transform: `translate(-50%, -50%) scale(${index / trail.length})`,
          }}
        />
      ))}
      <div
        className="absolute text-brand-600 dark:text-brand-400 drop-shadow-xl transition-transform duration-150"
        style={{
          left: mouseState.x,
          top: mouseState.y,
          transform: `translate(-50%, -50%) scaleX(${mouseState.isMovingLeft ? -1 : 1})`,
        }}
      >
        <Car className="w-8 h-8 fill-brand-50 dark:fill-slate-900" />
      </div>
    </div>
  );
};

export default function Home() {
  const animations = [
    { component: ComplianceAnimation, text: "Never Miss a Renewal Again." },
    { component: AvailabilityAnimation, text: "Find the Right Vehicle, Instantly." },
    { component: ControlAnimation, text: "Your Entire Operation, at a Glance." },
  ];

  const [activeAnim, setActiveAnim] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveAnim((prev) => (prev + 1) % animations.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-16 md:cursor-none md:[&_*]:cursor-none">
      <div className="hidden md:block">
        <CarCursor />
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/hero-bg.jpg"
            alt="Transportation Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/90 to-white dark:from-slate-950/80 dark:via-slate-950/95 dark:to-slate-950 transition-colors duration-300"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-slate-900 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-brand-100 dark:border-slate-800 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="dark:text-brand-300">Trusted App for Corporate Travel Agencies</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
                {cms.hero.headline}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mb-10">
                {cms.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
                >
                  <span>{cms.hero.ctaPrimary}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo-video"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 text-slate-900 dark:text-white font-bold hover:text-brand-600 dark:hover:text-brand-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:border-brand-600 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-all">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span>{cms.hero.ctaSecondary}</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/3] flex items-center justify-center"
            >
              {/* Dynamic Animated Graphics */}
              <div className="w-full h-full relative">
                {animations.map((anim, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute inset-0 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeAnim === idx ? 1 : 0,
                      y: activeAnim === idx ? 0 : 20,
                      pointerEvents: activeAnim === idx ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex-1">
                      <anim.component />
                    </div>
                    <div className="mt-8 text-center">
                      <p className="text-2xl font-display font-semibold text-slate-800 dark:text-slate-200">
                        {anim.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Animation Indicators */}
              <div className="absolute -bottom-8 flex space-x-2">
                {animations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAnim(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeAnim === idx ? 'bg-brand-600 w-8' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Text Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SplitTextAnimation
            text="The best solution for the Travel Providers & Partners"
            className="text-center text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
          />
        </div>
      </section>

      {/* Quick Features Highlight */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6 dark:text-white">Why Modern Travel Agencies Choose TMS</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Stop juggling spreadsheets and manual tracking. Gain full visibility into your operations with a single, secure platform.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Reduce Overhead", desc: "Automate repetitive tasks and compliance checks to save hours of manual work every week." },
                { title: "Scale Confidently", desc: "Our multi-tenant architecture grows with your business, from 10 to 1,000+ vehicles." },
                { title: "Enhance Safety", desc: "Always know your drivers are licensed and your vehicles are road-ready with real-time alerts." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                   <div className="shrink-0 w-12 h-12 bg-success-50 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="text-success-600 w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-lg font-bold mb-2 dark:text-white">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
