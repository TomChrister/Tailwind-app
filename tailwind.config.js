/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './feed.html', './profile.html',
    './scr/**/*.{js,jsx,ts,tsx}'
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
