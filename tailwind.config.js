/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#24262f',
        primary: '#fed841',
        secondary: '#eb2f5b',
        link: '0000ff',
      },
    },
  },
  plugins: [],
}

