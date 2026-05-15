/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          red:      '#C1121F',
          redhov:   '#A30F1A',
          charcoal: '#111111',
          surface:  '#F5F5F5',
          light:    '#FAFAFA',
          border:   '#E5E7EB',
          textDark: '#111111',
          textSub:  '#4B5563',
          textMuted:'#9CA3AF',
          // Legacy aliases
          orange:   '#C1121F',
          gold:     '#C1121F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'slide-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide':         'slide 30s linear infinite',
        'slide-reverse': 'slide-reverse 35s linear infinite'
      }
    },
  },
  plugins: [],
}
