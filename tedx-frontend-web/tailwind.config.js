const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: '#EAFAFC', //light
      pm: '#E62B1E', //primary main
      pl: '#B2EBF2', //primary light
      pd: '#FF0000', //primary dark
      sem: '#FFA000', //secondary main
      sel: '#FFECB3', //secondary light
      sed: '#FF6F00', //secondary dark
      am: '#EC437D', //accent main
      al: '#F8BBD0', //accent light
      ad: '#1E0644', //accent dark
      tp: '#212121', //text primary
      ts: '#757575', //text secondary
      td: '#9E9E9E', //text disabled
      dark: '#424242', //paper dark
      black: '#000000', //deafault dark
      white: '#FFFFFF', //white
    },
    extend: {},
  },
  
  plugins: [require('tw-elements/dist/plugin')],
});
