import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    // Simulação de envio
    console.log("Enviando formulário de contato:", { name, email, message });
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setName(''); setEmail(''); setMessage('');
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  // Para o mapa, use um iframe do Google Maps. Gere o seu em maps.google.com -> share -> embed a map.
  // Substitua o src abaixo pelo seu link de embed.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799077539!2d-74.25987039858005!3d40.69767006334655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1678886500000!5m2!1spt-BR!2sbr"; // Exemplo, substitua!

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-gray-100 transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Estamos prontos para ouvir sobre seu projeto e ajudar a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-dark-text mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Seu Melhor E-mail</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  } transition-colors duration-300 ease-in-out group`}
                >
                  {isSubmitting ? (
                     <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Contato
                      <i className="bi bi-send ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                    </>
                  )}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Ocorreu um erro. Tente novamente mais tarde.</p>
              )}
            </form>
          </div>

          {/* Informações de Contato e Mapa */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-dark-text mb-4">Informações de Contato</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <i className="bi bi-telephone-fill text-primary text-xl mr-3"></i>
                  <a href="tel:+258865097696" className="hover:text-primary">+258 86 509 7696</a>
                </p>
                <p className="flex items-center">
                  <i className="bi bi-envelope-fill text-primary text-xl mr-3"></i>
                  <a href="mailto:contato@acmkttech.com" className="hover:text-primary">contato@acmkttech.com</a> {/* Coloque seu email */}
                </p>
                <p className="flex items-start">
                  <i className="bi bi-geo-alt-fill text-primary text-xl mr-3 mt-1"></i>
                  <span>Av. Exemplo, 123, Bairro Modelo<br />Cidade, Estado - Moçambique</span> {/* Coloque seu endereço */}
                </p>
              </div>
            </div>

            <div className="rounded-lg shadow-xl overflow-hidden h-80 md:h-96">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da AC MKT TECH"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
