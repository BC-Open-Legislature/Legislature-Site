module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#d0a1a1',
          500: '#c68e8e',
          600: '#bd7b7b',
          700: '#b36868',
          800: '#aa5555',
          900: '#a04242',
        },
        secondary: {
          400: '#808080',
          500: '#999999',
          600: '#b3b3b3',
          700: '#cccccc',
          800: '#e6e6e6',
          900: '#ffffff',
        },
        tertiary: {
          400: '#ffe3ab',
          500: '#ffdd9a',
          600: '#ffd889',
          700: '#ffd279',
          800: '#ffcd68',
          900: '#ffc757',
        },
        black: {
          400: '#8b8b8b',
          500: '#737373',
          600: '#5c5c5c',
          700: '#454545',
          800: '#2d2d2d',
          900: '#161616',
        },
        party: {
          green: '#b1f492',
          ndp: '#f4c192',
          liberals: '#9296f4',
          other: '#d592f4',
          independent: '#b7b7b7',
        },
        choice: {
          yes: '#c4f492',
          no: '#f49292',
          other: '#d9b88e',
          none: '#b7b7b7',
        },
        link: '#3e68b9',
      },
    },
  },
  plugins: [],
};
