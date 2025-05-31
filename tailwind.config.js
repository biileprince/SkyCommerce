export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: "#ff7f50",
        accent: "#f59e0b",
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        amber: {
          400: "#fbbf24",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
        "card-hover":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(14,165,233,0.1) 100%)",
      },
      boxShadow: {
        card: "0 4px 24px -2px rgba(14, 165, 233, 0.15)",
        nav: "0 4px 30px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
