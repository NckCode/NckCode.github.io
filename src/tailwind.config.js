// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        animation: {
          background: 'gradientShift 15s ease infinite',
        },
        keyframes: {
          gradientShift: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        backgroundSize: {
          '200%': '200% 200%',
        },
      },
    },
    plugins: [],
  };
  