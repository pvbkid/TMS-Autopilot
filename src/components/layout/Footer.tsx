import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { cms } from '../../content/cms';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-white mb-6">
              <Car className="w-6 h-6" />
              <span className="font-display font-bold text-xl tracking-tight">TMS</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Modern SaaS solution for travel agencies serving the corporate world. Streamline your fleet and driver management effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              {cms.navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-500" />
                <span>{cms.contact.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-500" />
                <span>{cms.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>{cms.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-white font-semibold mb-6">Ready to Scale?</h4>
            <Link
              to="/book-demo"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-all w-full text-center"
            >
              Start Free Demo
            </Link>
            <p className="mt-4 text-xs text-slate-500 text-center">
              No credit card required.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Travel Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
