/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  darkMode: 'class', // ✅ FIX #8: Habilitar dark mode
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
      red: {
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
      },
      yellow: {
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
      },
      amber: {
        500: '#f59e0b',
        600: '#d97706',
      },
      rose: {
        500: '#f43f5e',
        600: '#e11d48',
      },
      pink: {
        500: '#ec4899',
        600: '#db2777',
      },
      emerald: {
        500: '#10b981',
        600: '#059669',
      },
      teal: {
        600: '#0d9488',
      },
      blue: {
        500: '#3b82f6',
        600: '#2563eb',
      },
      cyan: {
        600: '#0891b2',
      },
      violet: {
        500: '#8b5cf6',
        600: '#7c3aed',
      },
      purple: {
        600: '#9333ea',
      },
      orange: {
        500: '#f97316',
        600: '#ea580c',
      },
      green: {
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
      },
      primary: {
        DEFAULT: '#D4AF37',
        5: 'rgba(212, 175, 55, 0.05)',      // ✅ FIX #11: Adicionar opacidades faltando
        10: 'rgba(212, 175, 55, 0.1)',
        20: 'rgba(212, 175, 55, 0.2)',
        30: 'rgba(212, 175, 55, 0.3)',
        50: '#F9F6EE',
        100: '#F3ECDE',
        200: '#E7DBBE',
        300: '#DBCA9E',
        400: '#CFB97E',
        500: '#D4AF37',
        600: '#B8932D',
        700: '#9C7724',
        800: '#805C1A',
        900: '#644011',
      },
      secondary: {
        DEFAULT: '#2C2C2C',
        50: '#F5F5F5',
        100: '#EBEBEB',
        200: '#D7D7D7',
        300: '#C3C3C3',
        400: '#AFAFAF',
        500: '#2C2C2C',
        600: '#242424',
        700: '#1C1C1C',
        800: '#141414',
        900: '#0C0C0C',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        container: '80rem',
      },
      // ✅ FIX #3: Adicionar gradients ao config
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D4AF37 0%, #B8932D 100%)',
        'gradient-primary-dark': 'linear-gradient(180deg, #B8932D 0%, #9C7724 100%)',
        'gradient-primary-glow': 'linear-gradient(135deg, #D4AF37 0%, #B8932D 50%, #D4AF37 100%)',
        'gradient-dark': 'linear-gradient(to br, #0f172a via-slate-800 to-slate-950)',
      },
      // ✅ FIX #1: Adicionar box shadows para glow effects
      boxShadow: {
        'primary-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'primary-glow-lg': '0 0 40px rgba(212, 175, 55, 0.3)',
      },
      // ✅ FIX #14: Adicionar custom filters
      filter: {
        'brightness-up': 'brightness(1.3)',
        'contrast-up': 'contrast(1.1)',
      },
    },
  },
  plugins: [],
};
