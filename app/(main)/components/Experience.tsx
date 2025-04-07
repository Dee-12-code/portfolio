// app/(main)/components/Experience.tsx
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2025",
    role: "Software Engineer (Simulation)",
    company: "Hewlett Packard Enterprise",
    details: [
        "Collaborated with a team of engineers to design and develop software solutions in a dynamic, fast-paced environment.",
        "Contributed to the development of RESTful web services using Java Spring Boot to manage employee data, ensuring optimal functionality and performance.",
        "Created and maintained backend solutions to handle JSON data and integrated them with existing systems for seamless communication.",
        "Led unit testing efforts for Java Spring Boot applications to assess performance and ensure high-quality code and functionality.",
        "Assisted in creating API documentation and troubleshooting technical issues to ensure the smooth operation of web services.",
        "Gained hands-on experience with cloud computing, data management, and software engineering best practices."
    ]
  },
  {
    year: "2025",
    role: "Frontend Developer Intern",
    company: "Axia Africa",
    details: [
      "Developed reusable component library for fintech products",
      "Reduced bundle size by 30% through code splitting",
      "Mentored junior developers on React best practices"
    ]
  },
  {
    year: "2024",
    role: "Certifications",
    company: "freeCodeCamp",
    details: [
      "Responsive Web Design certification",
      "JavaScript Algorithms certification",
      "Front End Libraries certification"
    ]
  },
  {
    year: "2022 - present",
    role: "Frontend Developer",
    company: "Freelance",
    details: [
        "Developed and designed responsive, user-friendly websites for clients across various industries, ensuring high performance and seamless user experience.",
        "Utilized modern web technologies such as HTML5, CSS3, JavaScript, React, and Next.js to build scalable and interactive web applications.",
        "Implemented backend functionalities with APIs, database integration, and server-side logic to enhance website performance and client satisfaction.",
        "Collaborated with clients to understand project requirements, provide technical solutions, and deliver projects on time, often within tight deadlines."
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Professional Journey
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 md:-translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:flex-row"
              >
                {/* Year marker */}
                <div className="w-16 flex-shrink-0 flex items-start md:justify-center">
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900 z-10" />
                  <p className="ml-8 md:ml-0 text-gray-500 dark:text-gray-400 font-medium">
                    {exp.year}
                  </p>
                </div>
                
                {/* Content card */}
                <div className={`mt-2 md:mt-0 flex-1 ${i % 2 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                  <div className={`p-6 rounded-xl shadow-md ${
                    i % 2 
                      ? "bg-white dark:bg-gray-800 md:ml-8" 
                      : "bg-indigo-50 dark:bg-indigo-900/30 md:mr-8"
                  }`}>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-indigo-600 dark:text-indigo-300 mb-3">{exp.company}</p>
                    <ul className={`space-y-2 ${
                      i % 2 ? "md:pl-4" : "md:pr-4"
                    }`}>
                      {exp.details.map((detail, j) => (
                        <li 
                          key={j} 
                          className="text-gray-700 dark:text-gray-300 relative"
                        >
                          <span className={`absolute top-2 ${
                            i % 2 ? "-left-3" : "md:-right-3 -left-3"
                          } w-2 h-2 rounded-full bg-indigo-400`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}