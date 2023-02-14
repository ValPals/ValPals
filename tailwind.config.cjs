/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: { 
    fontFamily: {
    poppins: ['Poppins', 'sans-serif'],
    roboto: ['Roboto', 'sans-serif'],
  },
    extend: {colors: {
      'error-red': '#FF0000',
      white: '#FFFFFF',
      black: '#000000',
      grey: '#6b7280',
      pink: '#b784a7',
    },
    backgroundImage: {
      kubernetes: "url('./client/assets/kubernetes.jpg')",
    },
    height: {
      128: '32rem',
    },
    width: {
      120: '20rem',
    },
  },
  },
  plugins: [
    require('tailwindcss/forms'),
  ],
}
