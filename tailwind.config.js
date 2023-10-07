/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    iconsPlugin({ collections: getIconCollections(['logos', 'lucide']) }),
  ],
}
