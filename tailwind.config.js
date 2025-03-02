module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This scans all React component files
  ],

  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', // Example of a larger size
        '12xl': '12rem',
      },
    },
  },
  plugins: [],
};
