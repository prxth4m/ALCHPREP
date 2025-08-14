const config = {
  plugins: ["@tailwindcss/postcss"],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages Router (if you're using it)
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // If you use a 'src' directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
