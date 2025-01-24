import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        standard: ['Figtree', 'sans-serif'],
      },
      fontSize: {
        h1: ['44px', { lineHeight: '54px', fontWeight: '900' }],
        h2: ['32px', { lineHeight: '48px', fontWeight: '900' }],
        h4: ['24px', { lineHeight: '36px', fontWeight: '700' }],
        h5: ['22px', { lineHeight: '30px', fontWeight: '700' }],
        h6: ['18px', { lineHeight: '26px', fontWeight: '700' }],
        h7: ['18px', { lineHeight: '28px', fontWeight: '700' }],
        t2: ['22px', { lineHeight: '32px', fontWeight: '600' }],
        t3: ['20px', { lineHeight: '30px', fontWeight: '600' }],
        t4: ['18px', { lineHeight: '28px', fontWeight: '600' }],
        t5: ['16px', { lineHeight: '24px', fontWeight: '600' }],
        a2: ['22px', { lineHeight: '32px', fontWeight: '500' }],
        a3: ['20px', { lineHeight: '30px', fontWeight: '500' }],
        a4: ['18px', { lineHeight: '28px', fontWeight: '500' }],
        a5: ['16px', { lineHeight: '24px', fontWeight: '500' }],
        a6: ['14px', { lineHeight: '24px', fontWeight: '500' }],
        a7: ['12px', { lineHeight: '22px', fontWeight: '500' }],
        b2: ['22px', { lineHeight: '32px', fontWeight: '400' }],
        b3: ['20px', { lineHeight: '30px', fontWeight: '400' }],
        b4: ['18px', { lineHeight: '28px', fontWeight: '400' }],
        b5: ['16px', { lineHeight: '20px', fontWeight: '400' }],
        b6: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        b7: ['12px', { lineHeight: '18px', fontWeight: '400' }],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          default: '#3386FF',
          100: '#56C1FA ',
          200: '#7ED1FE  ',
        },
        secondary: {
          default: '#3F3844',
          300: '#B0B0B0',
          400: '#E4E7EC',
          500: '#98A2B3',
          600: '#F2F8F2',
        },
        outline: {
          blue: '#DEEDFE',
          grey: '#E4E7EC',
          bg: '#E4E5E6',
          darkGrey: '#D7D7D7',
        },
        warning: {
          DEFAULT: '#F8BD26',
          100: '#FEF9F2',
          200: '#FEF3E5',
          300: '#DEA922',
        },
        warm: {
          100: '#FC7537 ',
          200: '#FE8248 ',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
