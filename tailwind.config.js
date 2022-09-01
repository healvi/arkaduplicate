/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      colors: {
        brandColor: '#0977BE',
        blueColor: '#005BAF',
        SeblueColor: '#1E95DD',
        greenColor: '#08A524',
        yellowColor: '#F7DE06',
        orangeColor: '#FF8017',
        redColor: '#F63C52',
        secondary: '#5A5C60',
      },
      padding: {
        '5px': '5px',
      }
    }
   ,
   screens: {
    '2xl': {'min': '1280px','max': '1535px'},
    // => @media (max-width: 1535px) { ... }

    'xl': {'min': '1024px','max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'min': '768px','max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'min': '640px','max': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }
  },
    container : {
      sm : "640px",
      md : "768px",	
      lg : "1024px",
      xl : "1220px",
      '2xl' : "1536px"	
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '5px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    flexBasis: {
      'menu': 'calc(100% - 180px)',
      '180': '180px',
      '130': '130px',
      '1/9': '12.2%',
      '1/2' : '50%',
      '1/3' : '33,33%',
    }
  },
  plugins: [],
}
