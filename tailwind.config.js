/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#231f20",
          "200": "#151515",
        },
        darkgray: "#c4aea8",
        whitesmoke: "#f6f5f3",
      },
      spacing: {},
      fontFamily: {
        abel: "Abel",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
