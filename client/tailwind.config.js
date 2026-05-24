/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:   { DEFAULT: '#4f46e5', dark: '#3730a3', light: '#818cf8' },
        secondary: { DEFAULT: '#06b6d4', dark: '#0e7490', light: '#67e8f9' },
        accent:    { DEFAULT: '#f59e0b', dark: '#b45309', light: '#fcd34d' },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter',   'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        'gradient-card':    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-warm':    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-cool':    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-green':   'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-orange':  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-sidebar': 'linear-gradient(180deg, #0f0c29 0%, #302b63 100%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'slide-up':   'slideUp 0.6s ease-out',
        'fade-in':    'fadeIn 0.5s ease-in',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        glow:    { from: { boxShadow: '0 0 10px #4f46e5' }, to: { boxShadow: '0 0 30px #818cf8, 0 0 60px #4f46e5' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
      },
    },
  },
  plugins: [],
};