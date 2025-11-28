import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b1224',
        surface: '#0f172a',
        accent: '#7b9bff',
        mint: '#5ff5ce',
      },
      boxShadow: {
        glow: '0 0 60px rgba(95,245,206,0.12)',
      },
    },
  },
  plugins: [flowbite],
};
