
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'promotional-photo': "url('./assets/hero.e5918858.png')",

      }),
      backgroundColor: theme => ({
        'outsite-green': "rgba(109,197,155)"
      }),
      colors: theme => ({
        'outsite-green': "rgba(109,197,155)"
      }),
      zIndex: {
        '-1': '-1'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
