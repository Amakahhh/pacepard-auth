import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#030333",
        "bg-primary": "#030333",
        "primary-foreground": "#ffffff",
      },
      fontFamily: {
        "neue-montreal": ["NeueMontreal-Regular", "sans-serif"],
        "neue-montreal-italic": ["NeueMontreal-RegularItalic", "sans-serif"],

        "neue-montreal-bold": ["NeueMontreal-Bold", "sans-serif"],
        "neue-montreal-bold-italic": ["NeueMontreal-BoldItalic", "sans-serif"],

        "neue-montreal-light": ["NeueMontreal-Light", "sans-serif"],
        "neue-montreal-light-italic": [
          "NeueMontreal-LightItalic",
          "sans-serif",
        ],

        "neue-montreal-medium": ["NeueMontreal-Medium", "sans-serif"],
        "neue-montreal-medium-italic": [
          "NeueMontreal-MediumItalic",
          "sans-serif",
        ],

        "neue-montreal-heavy": ["NeueMontreal-Heavy", "sans-serif"],
        "neue-montreal-heavy-italic": [
          "NeueMontreal-HeavyItalic",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
