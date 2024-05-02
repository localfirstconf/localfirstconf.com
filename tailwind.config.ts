import type {Config} from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-passion-one)'],
        mono: ['var(--font-roboto-mono)']
      },
      colors: {
        magenta: {DEFAULT: '#EF8AF9'},
        blue: {DEFAULT: '#3581F6'},
        orange: {DEFAULT: '#C77F4A'}
      },
      animation: {
        blink: 'blink 1s step-start infinite'
      },
      keyframes: {
        blink: {'50%': {opacity: '0'}}
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
