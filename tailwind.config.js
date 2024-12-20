/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all pages
    './components/**/*.{js,ts,jsx,tsx}', // Include all components
    './app/**/*.{js,ts,jsx,tsx}', // For Next.js 13+ App Directory
    './public/index.html', // If you have a public index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
