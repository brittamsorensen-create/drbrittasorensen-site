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
          50:  '#f0f9f9',
          100: '#d0eaea',
          200: '#a2d4d4',
          300: '#6eb8b8',
          400: '#3f9898',
          500: '#2a7474',
          600: '#226262',
          700: '#1a5050',
          800: '#133e3e',
          900: '#0c2d2d',
        },
        stone: {
          50:  '#faf9f7',
          100: '#f4f1eb',
          200: '#e6e0d4',
          300: '#d2c9ba',
        },
        terracotta: {
          50:  '#fdf4ee',
          100: '#fae3d1',
          200: '#f4c09d',
          300: '#e89a6e',
          400: '#d9734a',
          500: '#c4562a',
          600: '#a84421',
          700: '#8a3418',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
