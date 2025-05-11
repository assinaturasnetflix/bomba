// src/sections/ServicesSection.js
import { React, e } from '../react-imports';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    id: 1,
    name: 'Blog com Administração',
    description: 'Criação e gerenciamento completo de blogs otimizados para SEO, com conteúdo relevante e engajador para sua audiência.',
    price: '15000',
    iconKey: 'Blog'
  },
  {
    id: 2,
    name: 'Site Institucional Moderno',
    description: 'Desenvolvimento de sites institucionais responsivos, com design profissional e foco na experiência do usuário.',
    price: '20000',
    iconKey: 'Site'
  },
  {
    id: 3,
    name: 'Consultoria Digital Estratégica',
    description: 'Análise completa da sua presença online e elaboração de estratégias personalizadas para alcançar seus objetivos.',
    price: '5000',
    iconKey: 'Consultoria'
  },
  {
    id: 4,
    name: 'Gerenciamento de Anúncios Online',
    description: 'Criação e otimização de campanhas de anúncios no Google Ads, Facebook Ads e Instagram Ads para máximo ROI.',
    price: '8000',
    iconKey: 'Anuncios'
  },
  {
    id: 5,
    name: 'Design Gráfico Personalizado',
    description: 'Criação de identidades visuais, logotipos, materiais gráficos e posts para redes sociais que fortalecem sua marca.',
    price: '12000',
    iconKey: 'Design'
  }
];

function ServicesSection() {
  return e(
    'section',
    { id: 'servicos', className: 'py-16 md:py-24 bg-brand-dark' },
    e('div', { className: 'container mx-auto px-6' },
      e('h2', { className: 'text-3xl md:text-4xl font-bold text-center mb-4 text-brand-primary' }, 'Nossos Serviços'),
      e('p', { className: 'text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto' },
        'Oferecemos soluções completas para destacar sua empresa no mercado digital. Veja como podemos ajudar:'
      ),
      e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10' },
        ...servicesData.map(service => e(ServiceCard, { key: service.id, service }))
      )
    )
  );
}

export default ServicesSection;
