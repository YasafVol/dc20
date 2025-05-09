// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'yellow-accent': '#FFBE0B',
        'orange-secondary': '#FB5607',
        'magenta-error': '#FF006E',
        'purple-primary': '#8338EC',
        'blue-info': '#3A86FF',
        // Define your dark background shades
        'dark-bg-primary': '#111827', // Example: Tailwind gray-900
        'dark-bg-secondary': '#1F2937', // Example: Tailwind gray-800
        // Define your light text shades
        'light-text-primary': '#E5E7EB', // Example: Tailwind gray-200
        'light-text-secondary': '#D1D5DB', // Example: Tailwind gray-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Make Inter the default sans-serif
      },
    },
  },
  // ... plugins
}