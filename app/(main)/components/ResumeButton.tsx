// app/(main)/components/ResumeButton.tsx
'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ResumeButton({ className = '' }: { className?: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="/resume.pdf"
      download="Oladeji Johnson Resume.pdf"
      className={`flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-lg hover:shadow-indigo-500/20 ${className}`}
    >
      <Download size={18} />
      Download Resume
    </motion.a>
  );
}
