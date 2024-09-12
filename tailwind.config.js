const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#ebf5ee',
          secondary: '#78a1bb',
          accent: '#283044',
          foreground: '#111827',
          muted: '#6B7280  ',
        }
      },
    },
    plugins: [],
  }
)

