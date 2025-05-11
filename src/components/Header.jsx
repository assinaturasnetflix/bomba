import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre Nós' }, // Adicione um ID 'sobre' na seção correspondente
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      id="home"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-dark-bg shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-primary">
          AC MKT TECH
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-light-text hover:text-primary transition-colors duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+258865097696"
            className="text-light-text hover:text-primary transition-colors duration-300"
            aria-label="Ligar para AC MKT TECH"
          >
            <i className="bi bi-telephone-fill text-xl"></i>
          </a>
          {/* Adicione outros ícones de redes sociais aqui se desejar no header */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-light-text focus:outline-none"
            aria-label="Abrir menu"
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-bg bg-opacity-95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-light-text hover:text-primary transition-colors duration-300 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+258865097696"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-light-text hover:text-primary transition-colors duration-300 mt-2"
              aria-label="Ligar para AC MKT TECH"
            >
              <i className="bi bi-telephone-fill text-xl mr-2"></i>
              Ligar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
