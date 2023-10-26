/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      Noir_Bouton: "#1c1c1c",
      Noir_branche: "#333333",
      Blanc_branche: "#f8f4e9",
      Blanc_cadre: "#cac9c5",
      Bleu_lunettes: "#6a82a4",
      Brun_lunettes: "#b98053",
      Noir_lunettes: "#373737",
      verre: "655D5B",
      verre_antibleu: "1D1D1B",
      bg: "#F2F4F8",
      white: "#ffffff",
      black: "#000000",
     },
    
     fontSize: {
      xl: "1rem",
      IIxl: "1.125rem",
      IIIxl: "1.25rem",
      IVxl: "1.5rem",
      Vxl: "1.875rem",
      VIxl: "2.25rem",
      VIIxl: "3rem",
      VIIIxl: "3.75rem",
      IXxl: "4.5rem",
      Xxl: "6rem",
      XIxl: "8rem"
     },
     fontFamily: {
      nunitosans: ['Nunito Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
     },
     borderRadius: {
      none: '0',
      xs: '0.125rem',
      sm: '0.3125rem',
      default: '0.4375rem',
      lg: '2.1875rem',
      xl: '5.0888671875rem',
      full: '9999px'
     },
     extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
     }
    },
  plugins: [ ],
}
