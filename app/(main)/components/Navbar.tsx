'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ResumeButton from './ResumeButton';

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Oladeji
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center justify-end w-full"> {/* Align to the right */}
          {['About', 'Projects', 'Experience', 'Contact'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </motion.a>
        </div>
      </div>
      {isClick && (
        <div className="flex items-end justify-end w-[80%] top-0 right-0 z-[10000] h-full shadow-xl"> {/* Set width to 80% and center */}
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium py-2"
                onClick={toggleNavbar}>
                {item}
              </Link>
            ))}
             <ResumeButton />
          </div>
        </div>
      )}
    </nav>
  );
}
