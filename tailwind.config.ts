import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Men Africa Company
        primary: {
          DEFAULT: "#1B2B5A",
          50: "#E8EBF2",
          100: "#C5CCE0",
          200: "#9FAACC",
          300: "#7888B8",
          400: "#5B6FA8",
          500: "#3E5699",
          600: "#374D8A",
          700: "#2D4178",
          800: "#243666",
          900: "#1B2B5A",
          950: "#0F1A38",
        },
        gold: {
          DEFAULT: "#B8923B",
          50: "#FAF6ED",
          100: "#F2E8D0",
          200: "#E5D1A1",
          300: "#D4B76F",
          400: "#C6A34F",
          500: "#B8923B",
          600: "#9A7A32",
          700: "#7C6229",
          800: "#5E4A20",
          900: "#403217",
          950: "#2A210F",
        },
        dark: "#333333",
        light: "#F8F9FA",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "count-up": "countUp 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "premium": "0 10px 40px -10px rgba(27, 43, 90, 0.3)",
        "premium-lg": "0 20px 60px -15px rgba(27, 43, 90, 0.4)",
        "gold": "0 10px 40px -10px rgba(184, 146, 59, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;