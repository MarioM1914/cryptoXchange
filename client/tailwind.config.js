/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'purple': '#9A6AFF',
      'midnight': '#1E2029',
      'lightgray': '#E3E3E3'
    },
  },
  plugins: [require("flowbite/plugin")],
};
