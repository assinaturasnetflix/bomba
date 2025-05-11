// src/components/Header.js
import { React, e, motion, Icons } from '../react-imports';
import Icon from './Icon'; // Se você criou o componente Icon.js

function Header() {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: Icons.Facebook },
    { href: 'https://instagram.com', icon: Icons.Instagram },
    { href: 'https://linkedin.com', icon: Icons.Linkedin },
  ];

  return e(
    motion.header,
    {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: 'fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md shadow-lg py-4 px-6 md:px-12'
    },
    e('div', { className: 'container mx-auto flex flex-col md:flex-row justify-between items-center' },
      // Logo e Contato Rápido (Esquerda)
      e('div', { className: 'flex flex-col md:flex-row items-center mb-4 md:mb-0' },
        e('a', { href: '#home', className: 'text-3xl font-bold text-brand-primary hover:text-brand-secondary transition-colors' }, 'AC MKT TECH'),
        e('div', { className: 'flex items-center space-x-4 md:ml-6 mt-2 md:mt-0' },
          e(Icon, { icon: Icons.Phone, className: 'text-brand-primary', size: 18 }),
          e('a', { href: 'tel:+55865097696', className: 'text-sm hover:text-brand-primary' }, '865097696')
        )
      ),

      // Menu e Sociais (Direita)
      e('div', { className: 'flex flex-col md:flex-row items-center' },
        e('nav', { className: 'mb-4 md:mb-0 md:mr-6' },
          e('ul', { className: 'flex space-x-4 md:space-x-6' },
            ...menuItems.map(item =>
              e('li', { key: item.label },
                e('a', { href: item.href, className: 'text-brand-light hover:text-brand-primary font-medium transition-colors' }, item.label)
              )
            )
          )
        ),
        e('div', { className: 'flex space-x-4' },
          ...socialLinks.map(link =>
            e('a', { key: link.href, href: link.href, target: '_blank', rel: 'noopener noreferrer', className: 'text-brand-light hover:text-brand-primary transition-colors' },
              e(Icon, { icon: link.icon, size: 20 })
            )
          )
        )
      )
    ),
    // Frase de Destaque - movida para seção Hero para melhor layout
  );
}

export default Header;
