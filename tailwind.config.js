module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "carbon-image":
          "url('https://poloclub.princeton.edu/wp-content/uploads/sites/210/2014/02/003-metal-and-carbon-fiber-pattern-background-texture.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#064e3b",

          secondary: "#1db990",

          accent: "#6ee7b7",

          neutral: "#064e3b",

          "base-100": "#18342b",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
};
