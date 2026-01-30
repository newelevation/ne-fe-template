/**
 * Tailwind CSS configuration for NE Front-End Template.
 * Uses auto-generated token extend from style-dictionary.
 *
 * @type {import('tailwindcss').Config}
 */
import extend from './extend.generated.js';
import forms from '@tailwindcss/forms';
import animate from 'tailwindcss-animate';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...extend,
      // Manual overrides can be added here if needed
    },
  },
  darkMode: 'class',
  plugins: [
    forms,
    animate,
  ],
};
