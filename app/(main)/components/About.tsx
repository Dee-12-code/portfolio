"use client";
import { motion } from 'framer-motion';
import ResumeButton from './ResumeButton';
import Image from 'next/image'; // Import Image from next/image

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group max-w-md mx-auto"
        >
          {/* Use Image component instead of img */}
          <div className="relative w-64 h-64 mx-auto rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
            <Image
              src="/profile.jpg" // Image source
              alt="Oladeji Johnson"
              className="object-cover" // The object-fit property remains the same
              width={256} // Set the width
              height={256} // Set the height
              priority // Optional: helps with faster loading of this image
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I believe <strong className="text-indigo-600 dark:text-indigo-400">frontend development is performance art</strong>.
              Every kilobyte matters, every interaction should delight,
              and accessibility isn&apos;t optional—it&apos;s craftsmanship.
            </p>
            <p>
              What excites me most? <strong className="text-indigo-600 dark:text-indigo-400">Bridging imagination and implementation</strong>.
              Whether it&apos;s recreating designs pixel-perfectly or
              pushing browsers to their limits with animations, I thrive
              where aesthetics meet engineering.
            </p>
            <p>
              Fun fact: I&apos;ve <strong className="text-indigo-600 dark:text-indigo-400">contributed to open-source design systems</strong>
              while helping startups build their MVPs—proving
              that scalable code and rapid iteration can coexist.
            </p>
          </div>

          <div className="mt-8">
            <ResumeButton />
          </div>
          {/* Skills chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {['Micro-Interactions', 'Lighthouse 100', 'WCAG AA+', 'Figma → React', 'WebGL'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
