import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Exemplo de comentários estáticos
const staticTestimonials = [
  {
    id: 1,
    name: "Maria Silva",
    company: "CEO da InovaTech",
    comment: "A AC MKT TECH revolucionou nossa presença online! Resultados incríveis em pouco tempo.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "João Pereira",
    company: "Diretor da Soluções Criativas",
    comment: "Profissionalismo e criatividade definem a equipe. O novo site ficou fantástico!",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const Testimonials = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulação de envio
    console.log("Enviando formulário de dúvidas:", { name, email, message });
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay da rede

    // Aqui você integraria com um backend ou serviço de email
    // Exemplo:
    // try {
    //   const response = await fetch('/api/feedback', { method: 'POST', body: JSON.stringify({ name, email, message }) });
    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     setName(''); setEmail(''); setMessage('');
    //   } else {
    //     setSubmitStatus('error');
    //   }
    // } catch (error) {
    //   setSubmitStatus('error');
    // }

    setSubmitStatus('success'); // Simulação de sucesso
    setName(''); setEmail(''); setMessage('');
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 3000); // Limpa status após 3s
  };

  return (
    <section 
      id="comentarios" 
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-dark-bg text-light-text transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Veja alguns feedbacks de quem já transformou seu negócio conosco.
          </p>
        </div>

        {/* Área de Comentários Estáticos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {staticTestimonials.map((testimonial, index) => {
            const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true, threshold: 0.3, delay: index * 200 });
            return (
              <div 
                key={testimonial.id} 
                ref={cardRef}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-out ${cardInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
              </div>
            );
          })}
        </div>

        {/* Formulário de Dúvidas */}
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-center mb-6 text-primary">Tem Alguma Dúvida?</h3>
          <p className="text-center text-gray-300 mb-6">
            Envie sua mensagem ou solicite mais informações sobre nossos serviços.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="doubt-name" className="block text-sm font-medium text-gray-300">Nome</label>
              <input
                type="text"
                id="doubt-name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-light-text"
              />
            </div>
            <div>
              <label htmlFor="doubt-email" className="block text-sm font-medium text-gray-300">E-mail</label>
              <input
                type="email"
                id="doubt-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-light-text"
              />
            </div>
            <div>
              <label htmlFor="doubt-message" className="block text-sm font-medium text-gray-300">Sua Dúvida/Mensagem</label>
              <textarea
                id="doubt-message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-light-text"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isSubmitting ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary'
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
                    Enviar Mensagem
                    <i className="bi bi-arrow-right-short ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
                  </>
                )}
              </button>
            </div>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center">Ocorreu um erro. Tente novamente.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
