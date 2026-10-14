/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        surface: {
          DEFAULT: '#0d1520',
          2: '#121c2a',
        },
        'mp-surface': '#0e0f1c',
        'mp-surface2': '#13142a',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'orb-float': 'orbFloat 8s ease-in-out infinite',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        'fade-in-img': 'fadeInImg 0.35s ease',
        'particle-fade': 'particleFade 6s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -30px)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeInImg: {
          from: { opacity: '0', transform: 'scale(1.02)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        particleFade: {
          '0%, 100%': { opacity: '0', transform: 'translateY(0)' },
          '50%': { opacity: '0.6', transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
