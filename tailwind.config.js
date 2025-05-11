// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Mantenha jsx aqui caso use em outros projetos
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#00A99D', // Um verde-azulado moderno
        'brand-secondary': '#FF6B6B', // Um coral para destaque
        'brand-dark': '#1A202C', // Quase preto para fundos pesados
        'brand-light': '#F7FAFC', // Um cinza muito claro
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Exemplo de fonte moderna
      },
    },
  },
  plugins: [],
}
