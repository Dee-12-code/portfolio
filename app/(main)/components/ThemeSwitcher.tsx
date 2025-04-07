'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg z-50"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}