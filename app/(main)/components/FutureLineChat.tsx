"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

const presetResponses: Record<string, string> = {
  "tech": "⚙️ My tech stack? React, Next.js, Tailwind, Framer Motion & TypeScript — basically the Avengers of frontend 💪",
  "projects": "🚀 Check out Deji's 🔥 projects below — he builds like he's got cheat codes.",
  "contact": "📬 Wanna reach out? Hit that 'Contact Me' button or send a carrier pigeon 🕊️ (but email works better tbh).",
  "futureline": "🧠 FutureLine is your friendly portfolio sidekick, built by Deji to bring futuristic vibes. And I mean *futuristic futuristic* 🤖",
};

export default function FutureLineChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Yo! I’m FutureLine. Ask me something 👇"
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleQuestion = (key: keyof typeof presetResponses) => {
    setMessages((prev) => [...prev, `🧑‍💻 You: ${key}`]);
    
    // Fake typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, `🤖 ${presetResponses[key]}`]);
    }, 1500); // Typing for 1.5 seconds before reply
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle FutureLine Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 font-bold text-indigo-600 dark:text-indigo-400 bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
              👽 FutureLine
            </div>
            <div className="p-4 space-y-2 text-sm max-h-60 overflow-y-auto text-gray-800 dark:text-gray-200">
              {messages.map((msg, idx) => (
                <div key={idx} className="whitespace-pre-wrap">{msg}</div>
              ))}
              {isTyping && <div className="text-gray-500 dark:text-gray-400 italic">FutureLine is typing...</div>}
            </div>
            <div className="p-3 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-wrap gap-2 justify-center">
              {Object.keys(presetResponses).map((key) => (
                <button
                  key={key}
                  onClick={() => handleQuestion(key as keyof typeof presetResponses)}
                  className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs hover:bg-indigo-700 transition"
                >
                  {key}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
