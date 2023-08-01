/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#097500",
        "secondary-green": "#12DE00",
        "foot-green" : "#0E4509",
        "dark-green" : "#093605",
        "primary-gray" : "#3A3A3A",
        "default-gray" : "#888888",
      },
      screens: {
        smallerMobile: '361px',
        smallmobile: '375px',
        xs: '425px',
        sm: '640px',
        galaxyFold: '717px',
        md: '768px',
        lg: '1024px',
        xl: '1281px',
        xxl: '1419px',
        fhd: '1920px',
      },
    },
  },
  plugins: [],
}
 