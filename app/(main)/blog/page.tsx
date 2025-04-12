"use client";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Next.js Animations",
    excerpt: "A deep dive into animations using Framer Motion in Next.js 15...",
    image: "/images/animation.jpg",
    slug: "/blog/mastering-nextjs-animations",
  },
  {
    id: 2,
    title: "Building a Stunning Portfolio",
    excerpt: "How to create an elite-class portfolio with glowing effects...",
    image: "/images/next.png",
    slug: "/blog/building-stunning-portfolio",
  },
  {
    id: 3,
    title: "State Management with Zustand",
    excerpt: "A lightweight alternative to Redux for your Next.js projects...",
    image: "/images/zutaand1.png",
    slug: "/blog/state-management-zustand",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen p-10  text-white">
      <h1 className="text-4xl font-bold text-center mb-10">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 mt-2">{post.excerpt}</p>
              <a href={post.slug} className="inline-block mt-4 text-blue-400 hover:text-blue-300">Read More →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;