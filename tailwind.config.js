/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#0f3b3b',
          800: '#1a5252',
          700: '#226262',
          600: '#2a7474',
        },
        stone: {
          50: '#faf9f7',
          100: '#f2f0eb',
        },
        terracotta: {
          500: '#c4622d',
          400: '#d4744a',
        },
      },
    },
  },
  plugins: [],
}

