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
      letterSpacing: {
        widerer: '0.3em',
      },
    },
  },
  plugins: [
    ({ theme, addUtilities }: { theme: any, addUtilities: any }) => { // Notez que nous n'avons pas besoin d'importer plugin de 'postcss'.
      const neonUtilities: { [key: string]: object } = {}; // Add type annotation for neonUtilities
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object' && colors[color]['500'] && colors[color]['700']) {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities, ['responsive', 'hover']);
    },
      require("tailwindcss-animate")
],
};
export default config
