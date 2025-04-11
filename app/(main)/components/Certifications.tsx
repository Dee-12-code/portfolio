'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const certs = [
  { name: "Front-End Development", issuer: "Axia Africa", year: "2025" },
  { name: "Software Engineer", issuer: "Walmart GlobalTech (USA)", year: "2025" },
  { name: "Software Engineer", issuer: "Hewlett Packard Enterprise (HPE)", year: "2025" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2024" },
  { name: "Front-End Development Libraries", issuer: "freeCodeCamp", year: "2024" },
];

export default function Certifications() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (scrollContainerRef.current) {
        if (event.key === 'ArrowRight') {
          // Scroll right when the right arrow key is pressed
          scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        } else if (event.key === 'ArrowLeft') {
          // Scroll left when the left arrow key is pressed
          scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
      }
    };

    // Add the event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section
      className="py-12 bg-gray-50 dark:bg-gray-900/30"
      aria-label="Certifications section"
    >
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-8 text-center"
        >
          Certifications
        </motion.h3>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar px-4"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-72 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="h-12 mb-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                <span className="font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                  {cert.issuer}
                </span>
              </div>
              <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Issued {cert.year}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <span className="text-gray-500 dark:text-gray-300 text-sm">
            Scroll to see more <span className="inline-block transform animate-pulse">👉</span>
          </span>
        </div>
      </div>
    </section>
  );
}
