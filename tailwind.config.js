/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#f3f4f6',

          secondary: '#1e40af',

          accent: '#00ffff',

          neutral: '#dbeafe',

          'base-100': '#ffffff',

          info: '#0000ff',

          success: '#00ff00',

          warning: '#00ff00',

          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
