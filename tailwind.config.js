/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: '#050922',
        darker: '#030613',
        'neon-blue': '#00F5FF',
        'neon-pink': '#FF00E4',
        'neon-purple': '#9D00FF',
        'neon-green': '#39FF14',
        'space-gray': '#1A1F35',
        'space-blue': '#0A1128',
      },
      backgroundColor: {
        'glass': 'rgba(10, 17, 40, 0.4)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(0, 245, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 255, 0.1) 1px, transparent 1px)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 8px #00F5FF, 0 0 12px #00F5FF' },
          '50%': { textShadow: '0 0 16px #00F5FF, 0 0 24px #00F5FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      boxShadow: {
        'neon': '0 0 5px #00F5FF, 0 0 10px #00F5FF',
        'neon-pink': '0 0 5px #FF00E4, 0 0 10px #FF00E4',
      },
    },
  },
  plugins: [],
};