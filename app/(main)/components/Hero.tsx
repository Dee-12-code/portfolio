"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="block">Hi 👋, I&apos;m </span>
          <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
            Oladeji
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Frontend specialist crafting performant, accessible digital experiences with 
          <span className="text-indigo-500 dark:text-indigo-400"> micro-interactions</span> and 
          <span className="text-emerald-500 dark:text-emerald-400"> pixel-perfect</span> implementation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-lg hover:shadow-indigo-500/20"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center flex-wrap gap-4"
        >
          {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}