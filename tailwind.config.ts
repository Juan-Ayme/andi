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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))', 
        
        primary: {
          '50': 'rgb(var(--color-primary-50) / <alpha-value>)',
          '100': 'rgb(var(--color-primary-100) / <alpha-value>)',
          '200': 'rgb(var(--color-primary-200) / <alpha-value>)',
          '300': 'rgb(var(--color-primary-300) / <alpha-value>)',
          '400': 'rgb(var(--color-primary-400) / <alpha-value>)',
          '500': 'rgb(var(--color-primary-500) / <alpha-value>)',
          '600': 'rgb(var(--color-primary-600) / <alpha-value>)',
          '700': 'rgb(var(--color-primary-700) / <alpha-value>)',
          '800': 'rgb(var(--color-primary-800) / <alpha-value>)',
          '900': 'rgb(var(--color-primary-900) / <alpha-value>)',
          '950': 'rgb(var(--color-primary-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        
        secondary: {
          '50': 'rgb(var(--color-secondary-50) / <alpha-value>)',
          '100': 'rgb(var(--color-secondary-100) / <alpha-value>)',
          '200': 'rgb(var(--color-secondary-200) / <alpha-value>)',
          '300': 'rgb(var(--color-secondary-300) / <alpha-value>)',
          '400': 'rgb(var(--color-secondary-400) / <alpha-value>)',
          '500': 'rgb(var(--color-secondary-500) / <alpha-value>)',
          '600': 'rgb(var(--color-secondary-600) / <alpha-value>)',
          '700': 'rgb(var(--color-secondary-700) / <alpha-value>)',
          '800': 'rgb(var(--color-secondary-800) / <alpha-value>)',
          '900': 'rgb(var(--color-secondary-900) / <alpha-value>)',
          '950': 'rgb(var(--color-secondary-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        
        accent: {
          '50': 'rgb(var(--color-accent-50) / <alpha-value>)',
          '100': 'rgb(var(--color-accent-100) / <alpha-value>)',
          '200': 'rgb(var(--color-accent-200) / <alpha-value>)',
          '300': 'rgb(var(--color-accent-300) / <alpha-value>)',
          '400': 'rgb(var(--color-accent-400) / <alpha-value>)',
          '500': 'rgb(var(--color-accent-500) / <alpha-value>)',
          '600': 'rgb(var(--color-accent-600) / <alpha-value>)',
          '700': 'rgb(var(--color-accent-700) / <alpha-value>)',
          '800': 'rgb(var(--color-accent-800) / <alpha-value>)',
          '900': 'rgb(var(--color-accent-900) / <alpha-value>)',
          '950': 'rgb(var(--color-accent-950) / <alpha-value>)',
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        
        neutral: {
          '50': 'rgb(var(--color-neutral-50) / <alpha-value>)',
          '100': 'rgb(var(--color-neutral-100) / <alpha-value>)',
          '200': 'rgb(var(--color-neutral-200) / <alpha-value>)',
          '300': 'rgb(var(--color-neutral-300) / <alpha-value>)',
          '400': 'rgb(var(--color-neutral-400) / <alpha-value>)',
          '500': 'rgb(var(--color-neutral-500) / <alpha-value>)',
          '600': 'rgb(var(--color-neutral-600) / <alpha-value>)',
          '700': 'rgb(var(--color-neutral-700) / <alpha-value>)',
          '800': 'rgb(var(--color-neutral-800) / <alpha-value>)',
          '900': 'rgb(var(--color-neutral-900) / <alpha-value>)',
          '950': 'rgb(var(--color-neutral-950) / <alpha-value>)',
        },
        
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slide-down': {
          from: {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;