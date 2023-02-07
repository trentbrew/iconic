/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      border: {
        DEFAULT: '1.5px',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
      fontFamily: {
        mono: 'monospace',
      },
    },
  },
  plugins: [require('daisyui')],
}
