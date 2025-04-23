/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0eb',
          100: '#ffe0d6',
          200: '#ffc1ad',
          300: '#ff9e7a',
          400: '#ff7d4d',
          500: '#ff6b35', // Primary orange
          600: '#f14f1a',
          700: '#c73a10',
          800: '#a2310f',
          900: '#852d13',
          950: '#481407',
        },
        dark: {
          50: '#f5f6f8',
          100: '#ebedf1',
          200: '#d3d7e0',
          300: '#adb4c5',
          400: '#818da6',
          500: '#63718c',
          600: '#4e5973',
          700: '#40495f',
          800: '#383f51',
          900: '#2d3142', // Dark navy
          950: '#1d2130',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};