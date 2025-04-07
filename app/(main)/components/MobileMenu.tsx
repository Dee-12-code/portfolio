// app/(main)/components/MobileMenu.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ResumeButton from './ResumeButton'; // Import the ResumeButton component

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" inset-0 z-30 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut' }}
              className=" top-0 right-0 z-40 w-4/5 h-full bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-700 dark:text-gray-300"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block text-2xl font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                  <ResumeButton /> {/* Reuse the same component */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}