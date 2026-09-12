/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
        },
        toan: '#3b82f6',
        tiengviet: '#ec4899',
        tienganh: '#8b5cf6',
        khoahoc: '#10b981',
        tinhoc: '#f59e0b',
        lichsudialy: '#ef4444'
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
