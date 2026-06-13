tailwind_config = """/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#050505',
        'surface': '#0D0D0D',
        'surface-container-lowest': '#050505',
        'surface-container-highest': '#1F1F1F',
        'surface-container': '#151515',
        'surface-container-high': '#1F1F1F',
        'on-surface': '#FFFFFF',
        'on-surface-variant': '#D1D1D1',
        'primary': '#E10600',
        'on-primary': '#FFFFFF',
        'primary-container': '#FF2D20',
        'on-primary-container': '#FFFFFF',
        brand: {
          red:    '#E10600',
          hover:  '#FF2D20',
        }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      keyframes: {
        slide:          { '0%': { transform: 'translateX(0)' },    '100%': { transform: 'translateX(-50%)' } },
        float:          { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulse:          { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.5 } }
      },
      animation: {
        'slide':         'slide 35s linear infinite',
        'float':         'float 4s ease-in-out infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}"""
with open('tailwind.config.js', 'w') as f: f.write(tailwind_config)
