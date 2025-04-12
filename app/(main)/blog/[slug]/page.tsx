'use client';
import { motion } from "framer-motion";
import { useRouter, useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Next.js Animations",
    slug: "mastering-nextjs-animations",
    date: "March 10, 2025",
    content: `
Animations in Next.js 15 can elevate your UI from 'meh' to 'MIND-BLOWN'. 🚀  
With Framer Motion, you get a sleek, declarative syntax to bring your components to life.

Let's talk setup first:  
\`\`\`bash
npm install framer-motion
\`\`\`

Now you can wrap your component like this:

\`\`\`tsx
import { motion } from 'framer-motion';

const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    👋 Hey! I fade in!
  </motion.div>
);
\`\`\`

You can add exit animations, delays, staggered transitions... you name it.
The magic happens when you combine route transitions with layout animations,
giving your app that premium feel.

Whether you're building a portfolio or a full-scale SaaS, good animation = better UX.
Go animate something today, bruh. Framer Motion got your back 💃.
    `,
  },
  {
    id: 2,
    title: "Building a Stunning Portfolio",
    slug: "building-stunning-portfolio",
    date: "February 28, 2025",
    content: `
Your portfolio isn’t just a website — it’s your superhero cape in dev-world. 🦸‍♂️

You want glowing effects? Use Tailwind's \`drop-shadow\`, mix it with gradients, 
and boom — your projects pop. Here's a quick snippet:

\`\`\`html
<h1 class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
  Hello World
</h1>
\`\`\`

Use animations, dark/light themes, and responsive layouts to wow recruiters.
Showcase your *top 3 projects* on the home page. Add context — tools used, challenges faced, etc.

Also:  
- Have a custom 404 page  
- Use a headless CMS or markdown for blog content  
- Use Next.js Image component for optimized media

Long story short: make them say, “Who built this masterpiece?”  
Then drop your name like it’s hot. 🔥
    `,
  },
  {
    id: 3,
    title: "State Management with Zustand",
    slug: "state-management-zustand",
    date: "February 15, 2025",
    content: `
Zustand is that quiet genius of the state world. No boilerplate. No Provider hell. Just vibes. 🌊

Start with:

\`\`\`bash
npm install zustand
\`\`\`

Then create your store:

\`\`\`tsx
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
\`\`\`

You can use the store anywhere:

\`\`\`tsx
const Counter = () => {
  const { count, increase } = useStore();
  return (
    <button onClick={increase}>
      Count: {count}
    </button>
  );
};
\`\`\`

Zustand also supports persistence, devtools, and middleware — but unlike Redux, 
you won't cry setting them up 😅. It’s lightweight but powerful — perfect for 
modern Next.js apps.
    `,
  },
];

type BlogPosts = {
  id: number;
  title: string;
  slug: string;
  date: string;
  content: string;
};

export default function BlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState<BlogPosts | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const foundBlog = blogPosts.find((post) => post.slug === params.slug);
      setBlog(foundBlog || null);
    }
  }, [params?.slug]);

  if (blog === null) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  if (!blog) {
    return notFound();
  }

  return (
    <motion.section
      className="py-12 md:py-20 bg-gray-950 text-gray-100 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          className="mb-8 text-yellow-400 font-medium hover:text-yellow-300 transition-colors flex items-center gap-1"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </motion.button>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {blog.title}
        </motion.h1>

        <motion.p
          className="text-gray-400 text-sm md:text-base mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {blog.date}
        </motion.p>

        <motion.div
          className="text-gray-100 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ReactMarkdown
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <div className="my-6">
                    <SyntaxHighlighter
                      style={dracula as React.CSSProperties}
                      language={match[1]}
                      PreTag="div"
                      showLineNumbers
                      customStyle={{
                        borderRadius: '0.75rem',
                        padding: '1.5rem',
                        background: '#1e1e2e',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                      {...props}
                    >
                      {String(children).trim()}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="bg-gray-800 px-2 py-1 rounded-md text-sm font-mono text-yellow-300">
                    {children}
                  </code>
                );
              },
              p({ children }) {
                return <p className="mb-6">{children}</p>;
              },
              ul({ children }) {
                return <ul className="mb-6 pl-6 list-disc space-y-2">{children}</ul>;
              },
              li({ children }) {
                return <li className="mb-2">{children}</li>;
              },
              h2({ children }) {
                return <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-100">{children}</h2>;
              },
              h3({ children }) {
                return <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-100">{children}</h3>;
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </motion.section>
  );
}
