// app/(main)/components/TechStack.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaNodeJs, FaGithub, FaFigma,
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiFramer, SiJquery, SiSpringboot, 
  SiVercel, SiGit,
  SiNetlify
} from 'react-icons/si';
import { 
  TbApi, TbBrandTabler, TbDatabase, TbJson,
  TbHandClick, TbMathFunction
} from 'react-icons/tb';
import { 
  BiCodeAlt, BiData, BiBugAlt
} from 'react-icons/bi';

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-black dark:text-white" /> }
    ]
  },
  {
    title: 'JavaScript Ecosystem',
    items: [
      { name: 'DOM Manipulation', icon: <BiCodeAlt className="text-green-500" /> },
      { name: 'Event Handling', icon: <TbHandClick className="text-blue-400" /> },
      { name: 'APIs & Fetch/Axios', icon: <TbApi className="text-indigo-500" /> },
      { name: 'JS Algorithms', icon: <TbMathFunction className="text-red-500" /> }
    ]
  },
  {
    title: 'Frontend Libraries',
    items: [
       { name: 'Zustand', icon: '🐻' },
      { name: 'jQuery', icon: <SiJquery className="text-blue-600" /> },
      { name: 'React Icons', icon: <TbBrandTabler className="text-gray-700 dark:text-gray-300" /> },
      { name: 'shadcn/ui', icon: <div className="text-black dark:text-white font-bold">UI</div> },
    ]
  },
  {
    title: 'Testing & Debugging',
    items: [
      { name: 'DevTools', icon: <BiBugAlt className="text-yellow-500" /> },
      { name: 'Console Debugging', icon: <BiCodeAlt className="text-gray-500" /> }
    ]
  },
  {
    title: 'Backend & Database',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
      { name: 'RESTful APIs', icon: <TbApi className="text-indigo-400" /> },
      { name: 'JSON', icon: <TbJson className="text-yellow-500" /> }
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'In-memory Data', icon: <TbDatabase className="text-blue-500" /> },
      { name: 'Excel Export', icon: <BiData className="text-green-600" /> }
    ]
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'VS Code', icon: '💻' },
      { name: 'Git', icon: <SiGit className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-cyan-500" /> },
      { name: 'Figma', icon: <FaFigma className="text-purple-500" /> }
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-indigo-500/10 transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)',
                      transition: { duration: 0.2 }
                    }}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2 cursor-default border border-gray-200 dark:border-gray-600"
                  >
                    <span className="text-lg w-5 flex justify-center">
                      {tech.icon}
                    </span>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
