/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0612',
          secondary: '#110A1A',
          card: '#161022',
          elevated: '#1E1530',
        },
        brand: {
          dark: '#F8FAFC',
          blue: '#6366F1',
          emerald: '#10B981',
          indigo: '#A78BFA',
          slate: '#C4B5FD',
          gray: '#A78BFA',
          cyan: '#22D3EE',
          purple: '#C084FC',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-script)', 'Great Vibes', 'cursive'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
