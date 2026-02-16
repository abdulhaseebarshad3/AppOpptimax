/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <-- include all JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "var(--primary)",
//         secondary: "var(--secondary)",
//         accent: "var(--accent)",

//         dark: "var(--dark)",
//         darker: "var(--darker)",

//         info: "var(--info)",
//         primaryHover: "var(--primary-hover)",

//         muted: "var(--text-muted)",
//       },
//     },
//   },
//   plugins: [],
// };
