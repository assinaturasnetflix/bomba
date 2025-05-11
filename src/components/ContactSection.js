// src/sections/ContactSection.js
import { React, e, motion, Icons } from '../react-imports';
import Icon from '../components/Icon';

function ContactSection() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    // Simulação de envio
    console.log('Contato Enviado:', formData);
    setTimeout(() => {
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return e(
    'section',
    { id: 'contato', className: 'py-16 md:py-24 bg-brand-dark' },
    e('div', { className: 'container mx-auto px-6' },
      e('h2', { className: 'text-3xl md:text-4xl font-bold text-center mb-4 text-brand-primary' }, 'Entre em Contato'),
      e('p', { className: 'text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto' },
        'Tem alguma dúvida ou quer um orçamento? Fale conosco!'
      ),
      e('div', { className: 'grid md:grid-cols-2 gap-10 md:gap-16 items-start' },
        // Formulário de Contato
        e('div', { className: 'bg-gray-800 p-8 rounded-xl shadow-2xl' },
          e('h3', { className: 'text-2xl font-semibold mb-6 text-white' }, 'Envie uma Mensagem'),
          e('form', { onSubmit: handleSubmit, className: 'space-y-6' },
            e('div', null,
              e('label', { htmlFor: 'contact-name', className: 'block text-sm font-medium text-gray-300 mb-1' }, 'Nome'),
              e('input', {
                type: 'text', name: 'name', id: 'contact-name', required: true, value: formData.name, onChange: handleChange,
                className: 'w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-brand-primary focus:border-brand-primary text-white placeholder-gray-500'
              })
            ),
            e('div', null,
              e('label', { htmlFor: 'contact-email', className: 'block text-sm font-medium text-gray-300 mb-1' }, 'E-mail'),
              e('input', {
                type: 'email', name: 'email', id: 'contact-email', required: true, value: formData.email, onChange: handleChange,
                className: 'w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-brand-primary focus:border-brand-primary text-white placeholder-gray-500'
              })
            ),
            e('div', null,
              e('label', { htmlFor: 'contact-message', className: 'block text-sm font-medium text-gray-300 mb-1' }, 'Mensagem'),
              e('textarea', {
                name: 'message', id: 'contact-message', rows: 4, required: true, value: formData.message, onChange: handleChange,
                className: 'w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-brand-primary focus:border-brand-primary text-white placeholder-gray-500'
              })
            ),
            e(motion.button,
              {
                type: 'submit',
                disabled: isSubmitting,
                whileHover: { scale: 1.03, filter: 'brightness(1.1)' },
                whileTap: { scale: 0.97 },
                className: 'w-full flex items-center justify-center bg-brand-primary hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-lg disabled:opacity-50'
              },
              isSubmitting ? 'Enviando...' : e(React.Fragment, null, 'Enviar Mensagem ', e(Icon, {icon: Icons.Send, className: 'ml-2'}))
            ),
            submitMessage && e('p', { className: `mt-4 text-center ${submitMessage.includes('sucesso') ? 'text-green-400' : 'text-red-400'}` }, submitMessage)
          )
        ),
        // Informações de Contato e Mapa
        e('div', { className: 'space-y-8' },
          e('div', { className: 'bg-gray-800 p-8 rounded-xl shadow-2xl' },
            e('h3', { className: 'text-2xl font-semibold mb-4 text-white' }, 'Informações de Contato'),
            e('div', { className: 'flex items-center space-x-3 mb-3' },
              e(Icon, { icon: Icons.Phone, className: 'text-brand-primary', size: 20 }),
              e('a', { href: 'tel:865097696', className: 'text-gray-300 hover:text-brand-primary text-lg' }, '865097696')
            ),
            e('div', { className: 'flex items-center space-x-3 mb-3' },
              e(Icon, { icon: Icons.Envelope, className: 'text-brand-primary', size: 20 }),
              e('a', { href: 'mailto:contato@acmkttech.com', className: 'text-gray-300 hover:text-brand-primary text-lg' }, 'contato@acmkttech.com')
            ),
            e('div', { className: 'flex items-start space-x-3' }, // items-start para alinhar ícone com a primeira linha do endereço
              e(Icon, { icon: Icons.MapMarker, className: 'text-brand-primary mt-1', size: 20 }),
              e('p', { className: 'text-gray-300 text-lg' }, 'Av. Exemplo, 123, Cidade, Estado, Moçambique')
            )
          ),
          e('div', { className: 'rounded-xl shadow-2xl overflow-hidden h-80 md:h-96' }, // Altura ajustada
            e('iframe', {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25986792284629!3d40.69767031098542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNova%20Iorque%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1678886555123!5m2!1spt-BR!2sbr", // Substitua pelo seu embed do Google Maps
              width: "100%",
              height: "100%",
              style: { border: 0 },
              allowFullScreen: "",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              title: "Localização da AC MKT TECH"
            })
          )
        )
      )
    )
  );
}

export default ContactSection;
