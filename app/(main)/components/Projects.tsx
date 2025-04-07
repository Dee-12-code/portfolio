'use client';
import Image from "next/image";

import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Personalized Virtual Assistant Platform (in development)",
    description: "A custom-built Android virtual assistant with wake-word activation and integrated features for productivity.",
    tags: ["React", "Next.js", "Tailwind CSS", "Android", "JavaScript"],
    category: "frontend",
    image: "/images/futureline.png"
  },
  {
    id: 2,
    title: "AI-Powered Career Development Assistant",
    description: "A web app utilizing AI to provide career insights, job recommendations, and skill development resources.",
    tags: ["React", "Node.js", "Machine Learning", "AI", "JavaScript"],
    category: "frontend",
    image: "/images/career.png"  // Replace with actual image path
  },
  {
    id: 3,
    title: "Task Manager Web App",
    description: "A web app for task creation, categorization, and progress tracking using Next.js, React, and Zustand for state management.",
    tags: ["React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
    category: "frontend",
    image: "/images/Task.png"
  },
  {
    id: 4,
    title: "AI-Powered Personal Finance Tracker",
    description: "An app that helps users track and manage their finances, with AI-powered suggestions for saving and budgeting.",
    tags: ["React", "Node.js", "AI", "JavaScript", "Tailwind CSS"],
    category: "frontend",
    image: "/images/finance.png"
  },
  {
    id: 5,
    title: "Attendance Tracker System",
    description: "A web-based system with QR code generation for attendance tracking, featuring an admin dashboard and staff login.",
    tags: ["JavaScript", "Node.js", "MongoDB", "Express", "QR Code"],
    category: "backend",
    image: "/images/qrtracker.png"
  },
  {
    id: 6,
    title: "Markdown Previewer",
    description: "A tool that converts Markdown input into HTML, providing real-time previewing with interactive features.",
    tags: ["JavaScript", "React", "Markdown", "Frontend"],
    category: "frontend",
    image: "/images/Markdown.png"
  },
  {
    id: 7,
    title: "Ed-Circle",
    description: "A platform to create and manage online classes, featuring course creation, lesson management, and student tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Frontend"],
    category: "frontend",
    image: "/images/Ed-circle.png"
  }
];

const categories = ['all', 'frontend', 'backend', 'animation', 'accessibility'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all ${
                expandedProject === project.id ? 'md:col-span-2' : ''
              }`}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <button 
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-400 text-sm font-medium"
                  >
                    {expandedProject === project.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                        <li>Implemented performant animations with Framer Motion</li>
                        <li>Achieved 100 Lighthouse performance score</li>
                        <li>Fully responsive across all device sizes</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
