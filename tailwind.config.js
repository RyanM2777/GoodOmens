/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tealGreen: {
          DEFAULT: '#008080', // Teal green default color
          '50': '#e6f2f2',
          '100': '#cce5e5',
          '200': '#99cccc',
          '300': '#66b2b2',
          '400': '#339999',
          '500': '#008080', // Base teal green color
          '600': '#006666',
          '700': '#004d4d',
          '800': '#003333',
          '900': '#001a1a',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
