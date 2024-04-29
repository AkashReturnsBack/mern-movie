module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "3rem",
      },
    },
    screens: {
      xxs: "300px",
      xs: "475px",
      sm: "639px",
      md: "768px",
      lg: "1024px",
      xl: "1281px",
      "2xl": "1441px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#753ee9",
        gray: "#f7f7f7",
        purplebg: "#f9f7ff",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        publicsans: ["'Public Sans', sans-serif"],
        montserrat: ["'Montserrat', sans-serif"],
        manrope: ["'Manrope', sans-serif"],
        poppins: ["'Poppins', sans-serif"],
        opensans: ["'Open Sans', sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        home: "url('/HomeBg.jpg')",
        ideal: "url('/bg-gridsm.svg')",
        smallHome: "url('/bg-small.svg')",
        pricing: "url('/bg-pricing.svg')",
        rocketGradient:
          "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 60%);",
        homeGradient:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(117,62,233,0.10985644257703087) 50%, rgba(117,62,233,0.12386204481792717) 100%);",
      },
      boxShadow: {
        card: "-2px -1px 100px 2px #EAE4F6",
        cardOne: "-3px 2px 7.8px -3px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};