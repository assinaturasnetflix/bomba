import React from 'react';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    icon: 'bi-pencil-square',
    title: 'Blog Completo com Administração',
    description: 'Criação e gestão de blogs otimizados para SEO, com conteúdo relevante para seu público.',
    price: '15000 MT',
  },
  {
    icon: 'bi-laptop',
    title: 'Criação de Sites Institucionais',
    description: 'Desenvolvimento de sites modernos, responsivos e focados na experiência do usuário.',
    price: '20000 MT',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Consultoria Digital Completa',
    description: 'Análise e estratégia digital personalizada para alavancar seus resultados online.',
    price: '5000 MT',
  },
  {
    icon: 'bi-megaphone',
    title: 'Gerenciamento de Anúncios Online',
    description: 'Campanhas eficazes no Google Ads e Facebook Ads para atingir seu público-alvo.',
    price: '8000 MT',
  },
  {
    icon: 'bi-palette',
    title: 'Design Gráfico Personalizado',
    description: 'Criação de identidades visuais, logotipos e materiais gráficos impactantes.',
    price: '12000 MT',
  },
];

const ServiceCard = ({ icon, title, description, price, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Começa a animação quando 20% do card está visível
    delay: index * 150, // Adiciona um pequeno delay para cada card
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-2xl p-8 m-4 transform transition-all duration-700 ease-out hover:shadow-primary/30 hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex justify-center mb-6">
        <i className={`${icon} text-5xl text-primary`}></i>
      </div>
      <h3 className="text-2xl font-semibold text-dark-text mb-3 text-center">{title}</h3>
      <p className="text-gray-600 mb-4 text-center text-sm">{description}</p>
      <p className="text-3xl font-bold text-primary text-center mt-6">{price}</p>
      <div className="text-center mt-8">
        <a 
          href="#contato" 
          className="bg-secondary hover:bg-opacity-80 text-white font-medium py-2 px-6 rounded-lg shadow transform hover:scale-105 transition-all duration-300"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma gama completa de soluções de marketing digital para impulsionar o seu sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
