import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        circularWhite: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 110px);',
        circularWhiteLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #fff 5px, #fff 60px);',
        circularWhitesm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 4px, #fff 5px, #fff 40px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.6) 2px, #1b1b1b 8px, #1b1b1b 110px);',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.6) 2px, #1b1b1b 8px, #1b1b1b 60px);',
        circularDarksm: 'repeating-radial-gradient(rgba(255,255,255,0.6) 4px, #1b1b1b 8px, #1b1b1b 40px);'

      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E609"
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite'
      },
      textUnderlineOffset: {
        8: "14px"
      }
    },
    screens: {
      "2xl" : {max:"1535px"},
      xl: {max: "1279px"},
      lg: {max: "1023px"},
      md: {max: "767px"},
      sm: {max: "639px"},
      xs: {max: "479px"}
    }
  },
  plugins: [],
}
export default config
