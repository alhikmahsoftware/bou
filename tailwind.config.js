// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./nuxt.config.{js,ts}",
//     "./node_modules/flowbite/**/*.{js,ts}",
//   ],
//   theme: {
//     extend: {
//       // colors: {
//       //   primary: "#00234B",
//       //   lightblue: "#003A7E",
//       //   lightestblue: "#225E9D",
//       // },
//       colors: {
//         primary: {
//           50: "#eff6ff",
//           100: "#dbeafe",
//           200: "#bfdbfe",
//           300: "#93c5fd",
//           400: "#60a5fa",
//           500: "#3b82f6",
//           600: "#2563eb",
//           700: "#1d4ed8",
//           800: "#1e40af",
//           900: "#1e3a8a",
//           950: "#172554",
//         },
//         // primary: "#3C50E0",
//         lightblue: "#003A7E",
//         lightestblue: "#225E9D",
//       },
//       fontFamily: {
//         poppins: "'Poppins', sans-serif;",
//       },
//       backgroundImage: {
//         university: "url('/assets/images/university.jpg')",
//       },
//       variants: {
//         extend: {
//           display: ["peer-hover"],
//         },
//       },
//     },
//   },
//   plugins: [require("flowbite/plugin")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00234B",
        lightblue: "#003A7E",
        lightestblue: "#225E9D",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      },
      backgroundImage: {
        university: "url('/assets/images/university.jpg')",
        one: "url('/assets/images/bgOne.jpg')",
        two: "url('/assets/images/bgTwo.jpg')",
        three: "url('/assets/images/bgThree.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
