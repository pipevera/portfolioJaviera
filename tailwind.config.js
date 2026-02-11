/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl" : "1636px"
    },
    fontFamily: {
      made: ["Wix Madefor Text", "sans-serif"],
      yellowTail: ["Yellowtail", "sans-serif"]
    },
    extend: {
      colors: {
        
      }
    }
  },
  plugins: []
};

