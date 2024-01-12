/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#424241",
        "background-light": "#f5f5f5",
        "primary-main": "#f44336",
        "primary-dark": "#ba000d",
        "primary-light": "#ff7961",
        "secondary-main": "#2b62ed",
        "secondary-dark": "#0039cb",
        "secondary-light": "#757de8",
      },
      boxShadow: {
        "rod-glow": "0 0 15px 3px rgba(255, 255, 255, 0.7)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      // Extend the animation section
      animation: {
        shake: "shake 0.25s cubic-bezier(.20,.05,.10,.98) both",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
