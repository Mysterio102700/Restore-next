/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx}', // Includes JavaScript and TypeScript in the pages directory
	  './components/**/*.{js,ts,jsx,tsx}', // Includes JavaScript and TypeScript in the components directory
	  './app/**/*.{js,ts,jsx,tsx}', // Includes the app directory if you are using Next.js 13+ App Router
	  './public/index.html', // Optional, only if you have custom HTML
	],
	theme: {
	  extend: {},
	},
	plugins: [],
  }
  