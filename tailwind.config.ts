import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        fire: '#FA4616',
        ice: {
          DEFAULT: '#97D6E3',
          light: '#BFE5ED', // Lighter version of #97D6E3
        },
        gamboge: '#F1A91E',
        // Secondary Colors
        salmon: '#F58B6F',
        bubblegum: '#FFBE9F',
        azure: '#4EC3E0',
        ochre: '#CC8A00',
        buttercup: '#FDD26E',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        hanuman: ['Hanuman', 'serif'],
      },
      fontSize: {
        // Headlines - 55px/65px
        'headline': ['3.4375rem', {
          lineHeight: '4.0625rem',
          fontWeight: '700',
          letterSpacing: '0.02em',
        }],
        // Sub-headings - 17px/24px
        'subheading': ['1.0625rem', {
          lineHeight: '1.5rem',
          fontWeight: '400',
        }],
        // Body - 17px/23px
        'body': ['1.0625rem', {
          lineHeight: '1.4375rem',
          fontWeight: '400',
        }],
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '65ch',
            color: 'inherit',
            a: {
              color: '#97D6E3',
              '&:hover': {
                color: '#BFE5ED',
              },
            },
            strong: {
              color: 'inherit',
            },
            h1: {
              fontFamily: 'Karla, sans-serif',
              fontWeight: '700',
              textTransform: 'uppercase',
            },
            h2: {
              fontFamily: 'Karla, sans-serif',
            },
            h3: {
              fontFamily: 'Karla, sans-serif',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
