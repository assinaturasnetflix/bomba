// src/components/Footer.js
import { React, e, Icons } from '../react-imports';
import Icon from './Icon';

function Footer() {
  const footerLinks = [
    { label: 'Termos de Serviço', href: '/termos' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: Icons.Facebook, label: 'Facebook' },
    { href: 'https://instagram.com', icon: Icons.Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: Icons.Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: Icons.Twitter, label: 'Twitter' },
  ];

  return e(
    'footer',
    { className: 'bg-gray-900 py-12 border-t border-gray-700' },
    e('div', { className: 'container mx-auto px-6 text-center text-gray-400' },
      e('div', { className: 'mb-6' },
        e('a', { href: '#home', className: 'text-2xl font-bold text-brand-primary hover:text-brand-secondary transition-colors' }, 'AC MKT TECH')
      ),
      e('nav', { className: 'mb-6' },
        e('ul', { className: 'flex flex-wrap justify-center space-x-4 md:space-x-6' },
          ...footerLinks.map(link =>
            e('li', { key: link.label },
              e('a', { href: link.href, className: 'hover:text-brand-primary transition-colors' }, link.label)
            )
          )
        )
      ),
      e('div', { className: 'flex justify-center space-x-6 mb-8' },
        ...socialLinks.map(link =>
          e('a',
            { key: link.label, href: link.href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': link.label, className: 'text-gray-400 hover:text-brand-primary transition-colors' },
            e(Icon, { icon: link.icon, size: 24 })
          )
        )
      ),
      e('p', { className: 'text-sm' },
        `© ${new Date().getFullYear()} AC MKT TECH. Todos os direitos reservados.`
      ),
      e('p', { className: 'text-xs mt-2' },
        'Design e Desenvolvimento com ❤️' // Pequeno crédito ou slogan
      )
    )
  );
}

export default Footer;
