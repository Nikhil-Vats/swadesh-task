module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#032C28',
          secondary: '#0F524B',
          faded: '#0f524b1a'
        },
        yellow: {
          primary: '#CB912C',
          faded: '#F5F3F0'
        }
      },
      boxShadow: {
        custom: '0px 34px 44px rgba(229, 224, 217, 0.6)'
      },
      gridTemplateColumns: {
        custom: '1fr auto'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
