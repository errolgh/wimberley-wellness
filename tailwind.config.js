/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        bone: '#E3D7BF',
        asparagus: '#415A44',
        ghostWhite: '#FAFCFE',
        beaver: '#9A8A74',
        pastelBrown: '#7C6C57',
        brightGray: '#EEEEEE',
      },
    },
  },
  plugins: [],
}
