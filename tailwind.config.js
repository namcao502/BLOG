/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b6ffaa",

          secondary: "#f27de6",

          accent: "#ea9862",

          neutral: "#21242b",

          "base-100": "#3d4d57",

          info: "#347dcb",

          success: "#1cd494",

          warning: "#eba53d",

          error: "#e4214b",
        },
      },
    ],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: ["tailwindcss, autoprefixer", require("daisyui")],
};
