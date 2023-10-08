/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
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
