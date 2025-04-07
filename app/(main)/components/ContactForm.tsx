'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState({
    submitting: false,
    status: { ok: false, msg: '' },
  });

  const validate = (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      return 'Please enter your name';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email';
    }

    if (!message || message.trim().length === 0) {
      return 'Message cannot be empty';
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Set time field value
    const now = new Date().toLocaleString();
    const timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement;
    if (timeInput) timeInput.value = now;

    const formData = new FormData(formRef.current);
    const error = validate(formData);

    if (error) {
      setState({ submitting: false, status: { ok: false, msg: error } });
      return;
    }

    setState({ submitting: true, status: { ok: false, msg: '' } });

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      formRef.current.reset();
      setState({
        submitting: false,
        status: { ok: true, msg: 'Message sent successfully!' },
      });
    } catch (err) {
      console.error(err);
      setState({
        submitting: false,
        status: { ok: false, msg: 'Failed to send. Please try again.' },
      });
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Hidden Time Field */}
      <input type="hidden" name="time" />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 disabled:opacity-50"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Message */}
      {state.status.msg && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mt-4 text-sm ${
            state.status.ok
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
          }`}
        >
          {state.status.msg}
        </motion.div>
      )}
    </form>
  );
}
