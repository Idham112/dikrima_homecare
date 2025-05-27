// tailwind.config.js (at the root of your project)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // If you use a `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Here, you're telling Tailwind what 'font-sans' and 'font-mono' should be.
        // We are using the CSS variables defined by next/font.
        sans: [`var(--font-manrope)`],
        serif: [`var(--font-petrona)`],
      },
      // You can add your theme customizations here later if needed
    },
  },
  plugins: [
    // You can add Tailwind plugins here later if needed
  ],
};
