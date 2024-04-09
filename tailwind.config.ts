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
        magenta: {DEFAULT: '#EF8AF9'}
      }
    }
  },
  plugins: []
}
export default config
