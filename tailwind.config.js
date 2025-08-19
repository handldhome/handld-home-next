/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#4343B4",
          cream: "#FFF5E1"
        }
      },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
