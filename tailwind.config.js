/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#E1062C',
          hover:  '#C40024',
          tint:   'rgba(225,6,44,0.06)',
          tint2:  'rgba(225,6,44,0.12)',
        }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      keyframes: {
        slide:          { '0%': { transform: 'translateX(0)' },    '100%': { transform: 'translateX(-50%)' } },
        'slide-reverse':{ '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        float:          { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        shimmer:        { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'slide':         'slide 35s linear infinite',
        'slide-reverse': 'slide-reverse 42s linear infinite',
        'float':         'float 4s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
