"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, ChevronUp, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail('');
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <footer className="relative bg-background text-zinc-300">
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground">
                ALCHPREP
              </h2>
              <p className="text-sm text-zinc-500 mt-1">Test & Interview Platform</p>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Empowering talent acquisition with AI-driven assessments and seamless interview experiences for modern organizations.
            </p>
            <div className="flex items-center text-zinc-500 mb-4">
              <MapPin className="w-4 h-4 mr-2 text-zinc-400" />
              <span className="text-sm">Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Platform</h3>
            <ul className="space-y-3">
              {['Assessment Builder', 'Live Interviews', 'Skill Tests', 'Analytics Dashboard', 'API Integration', 'Mobile App'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-foreground transition-colors duration-200 flex items-center group">
                    <span className="w-1 h-1 bg-foreground rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Solutions</h3>
            <ul className="space-y-3">
              {['For Startups', 'Enterprise', 'HR Teams', 'Technical Hiring', 'Campus Recruitment', 'Remote Interviews'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-foreground transition-colors duration-200 flex items-center group">
                    <span className="w-1 h-1 bg-foreground rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Support</h3>
            <ul className="space-y-3 mb-8">
              {['Help Center', 'Documentation', 'Contact Us', 'System Status', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-foreground transition-colors duration-200 flex items-center group">
                    <span className="w-1 h-1 bg-foreground rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-zinc-500">
                <Mail className="w-4 h-4 mr-3 text-zinc-400" />
                <span className="text-sm">hello@alchprep.dev</span>
              </div>
              <div className="flex items-center text-zinc-500">
                <Phone className="w-4 h-4 mr-3 text-zinc-400" />
                <span className="text-sm">+91 80-xxxx-xxxx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Stay Updated
              </h3>
              <p className="text-zinc-400">Get the latest updates on new features and hiring trends.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto">
              <div className="flex items-center">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="flex-1 lg:w-80 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-l-lg focus:outline-none focus:border-zinc-500 text-zinc-50 placeholder-zinc-400"
    required
  />
  <Button
    type="submit"
    className="px-6 py-3 bg-zinc-50 hover:bg-zinc-200 text-zinc-900 font-medium transition-all duration-300 hover:shadow-lg rounded-r-lg"
  >
    Subscribe
  </Button>
</div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 lg:mb-0">
            © 2025 AlchPrep. All rights reserved. Made with ❤️ in Bengaluru.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center text-zinc-500 hover:text-foreground transition-colors duration-200 group"
          >
            <span className="text-sm mr-2">Back to top</span>
            <ChevronUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-zinc-900 border border-zinc-700 text-zinc-50 px-4 py-3 rounded-lg shadow-xl flex items-center space-x-3 min-w-[320px]">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-zinc-50 text-zinc-900 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Successfully subscribed!</h4>
              <p className="text-zinc-400 text-xs mt-1">You'll receive updates about new features and hiring trends.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}