/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        softRed: "rgba(214, 10, 11, 0.5)",
        darkRed: "#D60A0B",
        white: "#FFFFFF",
        green: "#28C2A0",
        blue: "#14238A",
        dark: '#000000',
        black: '#112211',
      },
      fontFamily: {
        montagu: ['Montagu Slab', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom-bottom': '0 4px 0 #131F73',
      },
    },
  },
  plugins: [],
};
