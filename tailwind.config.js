module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blc: "1px solid black",
      },
      minWidth: {
        "1/3": "30%",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
