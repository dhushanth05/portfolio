/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: {
          DEFAULT: '#0b1120',
          hover: '#111827',
          card: 'rgba(11, 17, 32, 0.75)',
        },
        electric: {
          blue: '#00f0ff',
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#38bdf8',
        },
        cyber: {
          dark: '#050814',
          navy: '#090d1f',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 240, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.2))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
