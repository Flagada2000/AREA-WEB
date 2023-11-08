import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layered-peaks': "url('/public/layered-peaks.svg')",
      },
      colors: {
        "login-card": '#3B276E',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'spin-veryslow': 'spin 60s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
