module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      outline: {
        blc: "1px solid black",
      },
      minWidth: {
        "1/3": "30%",
      },
      width: {
        "3/10": "30%",
        "45%": "45%",
      },
    },
  },
  variants: { extend: {} },
  plugins: [require("tailwind-scrollbar-hide")],
};
