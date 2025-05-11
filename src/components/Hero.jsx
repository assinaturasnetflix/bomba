import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-dark-bg text-light-text flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')", // Exemplo de imagem de fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay', // Para mesclar com a cor de fundo
      }}
    >
      <div className="absolute inset-0 bg-dark-bg opacity-70"></div> {/* Overlay escuro */}
      <div className={`container mx-auto text-center z-10 relative transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transforme seu Negócio com os <span className="text-primary">Melhores Serviços</span> de Marketing Digital
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Soluções inovadoras e personalizadas para impulsionar sua marca no mundo online.
        </p>
        <a
          href="#servicos"
          className="bg-primary hover:bg-opacity-80 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          Conheça Nossos Serviços
        </a>
      </div>
    </section>
  );
};

export default Hero;
