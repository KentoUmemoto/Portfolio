/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-left':
          'fade-in-left 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'fade-in-top': 'fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'fade-in-top': {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
    iconsPlugin({ collections: getIconCollections(['logos', 'lucide']) }),
    typography,
  ],
  daisyui: {
    themes: ['corporate', 'business'],
  },
}
