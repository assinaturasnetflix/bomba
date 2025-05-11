// src/components/ServiceCard.js
import { React, e, motion, Icons } from '../react-imports';
import Icon from './Icon'; // Se você criou o componente Icon.js

function ServiceCard({ service }) {
  const ServiceIcon = Icons[service.iconKey] || Icons.Blog; // Fallback icon

  return e(
    motion.div,
    {
      className: 'bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-brand-primary/30 transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col items-center text-center',
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    e(Icon, { icon: ServiceIcon, size: 48, className: 'text-brand-primary mb-6' }),
    e('h3', { className: 'text-2xl font-semibold mb-3 text-white' }, service.name),
    e('p', { className: 'text-gray-400 mb-4 text-sm leading-relaxed flex-grow' }, service.description),
    e('p', { className: 'text-3xl font-bold text-brand-primary mt-auto' }, `${service.price} MT`)
  );
}

export default ServiceCard;
