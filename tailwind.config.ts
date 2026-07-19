import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Custom brand colors
        cyan: {
          400: '#00E5FF',
          500: '#00D4EE',
          DEFAULT: '#00E5FF',
        },
        electric: {
          blue: '#1E88E5',
        },
        emerald: {
          neon: '#00FF9C',
        },
        violet: {
          neon: '#9D4EDD',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #00E5FF, 0 0 10px #00E5FF' },
          '50%': { boxShadow: '0 0 20px #00E5FF, 0 0 40px #00E5FF, 0 0 60px #00E5FF' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'trace': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'radar': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0,229,255,0.3), 0 0 40px rgba(0,229,255,0.1)',
        'cyan-glow-lg': '0 0 40px rgba(0,229,255,0.4), 0 0 80px rgba(0,229,255,0.2)',
        'emerald-glow': '0 0 20px rgba(0,255,156,0.3)',
        'blue-glow': '0 0 20px rgba(30,136,229,0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
