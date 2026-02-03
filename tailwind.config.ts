import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jedi-blue': '#4A9EFF',
        'jedi-green': '#5FD35F',
        'sith-red': '#FF4444',
        'dark-side': '#0F0F23',
        'force-glow': '#88CCFF',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #4A9EFF, 0 0 10px #4A9EFF' },
          '100%': { boxShadow: '0 0 10px #4A9EFF, 0 0 20px #4A9EFF, 0 0 30px #4A9EFF' },
        },
      },
    },
  },
  plugins: [],
}
export default config
