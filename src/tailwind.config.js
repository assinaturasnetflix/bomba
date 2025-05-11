/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se que esta linha está correta
  ],
  theme: {
    extend: {
      colors: { // Cores personalizadas (exemplo)
        'primary': '#00A99D', // Um verde-azulado vibrante
        'secondary': '#FF6B6B', // Um coral/vermelho para acentos
        'dark-bg': '#1A202C', // Um cinza escuro para fundos
        'light-text': '#F7FAFC', // Texto claro
        'dark-text': '#2D3748', // Texto escuro
      },
      fontFamily: { // Fontes elegantes (exemplo)
        sans: ['Poppins', 'sans-serif'], // Fonte principal
        serif: ['Merriweather', 'serif'], // Fonte para destaques ou citações
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'subtle-bounce': 'subtleBounce 2s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
          }
