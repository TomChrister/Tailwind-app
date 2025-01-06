/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './login.html',
    './index.html',
    './profile.html',
    './create.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#333439',
        customGray2: '#292a2e',
      }
    },
  },
  plugins: [],
}
