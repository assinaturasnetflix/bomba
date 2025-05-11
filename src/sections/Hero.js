// src/sections/Hero.js
import { React, e, motion } from '../react-imports';

function Hero() {
  return e(
    'section',
    { id: 'home', className: 'pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark text-center' },
    e('div', { className: 'container mx-auto px-6' },
      e(motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
          className: 'text-4xl md:text-6xl font-bold mb-6 leading-tight'
        },
        'Transforme seu Negócio com os ',
        e('span', { className: 'text-brand-primary' }, 'Melhores Serviços'),
        ' de Marketing Digital'
      ),
      e(motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.5, ease: "easeOut" },
          className: 'text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto'
        },
        'Na AC MKT TECH, combinamos estratégia, tecnologia e criatividade para impulsionar o crescimento da sua marca no universo digital.'
      ),
      e(motion.a,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
          whileHover: { scale: 1.05, backgroundColor: '#FF8585' /* brand-secondary hover */ },
          whileTap: { scale: 0.95 },
          href: '#servicos',
          className: 'bg-brand-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg'
        },
        'Descubra Nossos Serviços'
      )
    )
  );
}

export default Hero;
