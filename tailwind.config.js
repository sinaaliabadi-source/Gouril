/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gouril: {
          primary: '#6A5ACD',
          secondary: '#8EE1FF',
          accent: '#F5A524',
          dark: '#0A0A12'
        }
      },
      boxShadow: {
        glow: '0 10px 60px rgba(110, 82, 255, 0.35)',
        card: '0 12px 50px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 20% 20%, rgba(110,82,255,0.25), transparent 35%), radial-gradient(circle at 80% 0%, rgba(245,165,36,0.25), transparent 30%), radial-gradient(circle at 60% 70%, rgba(142,225,255,0.2), transparent 35%)'
      }
    },
  },
  plugins: [],
};
