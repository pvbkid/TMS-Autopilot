import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cms } from '../../content/cms';
import ThemeToggle from '../ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/tms-logo.png" alt="TMS" className="h-12 w-auto" />
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">TMS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {cms.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
                  location.pathname === item.href ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-l border-slate-200 dark:border-slate-700 pl-8">
              <ThemeToggle />
            </div>
            <Link
              to="/book-demo"
              className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-sm shadow-brand-500/20"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 p-2"
              id="mobile-menu-button"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {cms.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/book-demo"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
