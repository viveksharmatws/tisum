/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '370px',
        'xssm' :  '450px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',      
        '2xl': '1536px',
      },
      colors: {
        'white': '#FFF',
        'yellow': '#FED7AA',
        "gray": "#334155",
        "gray_two": " #667085",
        "gray_three": "#99A3B8",
        "gray_four": "#E8E8E8",
        "gray_four" : "#D7E2F2",
        "black": "#0F151D",
        "yellow_light": "#FDF9F4"
      },
      fontFamily: {
        "poppins": ["var(--font-poppins)"],
        "poly": ["var(--font-poly)"],
      },
      maxHeight: {
        "0": "0",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
