// src/sections/TestimonialsSection.js
import { React, e, motion, Icons } from '../react-imports';
import Icon from '../components/Icon';

function TestimonialsSection() {
  const [formData, setFormData] = React.useState({ name: '', email: '', comment: '' });
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
    console.log('Feedback Enviado:', formData);
    setTimeout(() => {
      setSubmitMessage('Obrigado pelo seu feedback!');
      setFormData({ name: '', email: '', comment: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return e(
    'section',
    { id: 'depoimentos', className: 'py-16 md:py-24 bg-gray-800' }, // Um pouco mais claro que o dark principal
    e('div', { className: 'container mx-auto px-6' },
      e('h2', { className: 'text-3xl md:text-4xl font-bold text-center mb-4 text-brand-primary' }, 'O que Dizem Nossos Clientes?'),
      e('p', { className: 'text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto' },
        'Adoraríamos ouvir sua opinião sobre nossos serviços!'
      ),
      // AQUI VOCÊ PODERIA ADICIONAR UMA LISTA DE DEPOIMENTOS REAIS SE TIVESSE
      e('div', { className: 'max-w-xl mx-auto bg-brand-dark p-8 rounded-xl shadow-2xl' },
        e('h3', { className: 'text-2xl font-semibold mb-6 text-center text-white' }, 'Deixe seu Comentário'),
        e('form', { onSubmit: handleSubmit, className: 'space-y-6' },
          e('div', null,
            e('label', { htmlFor: 'name', className: 'block text-sm font-medium text-gray-300 mb-1' }, 'Nome'),
            e('input', {
              type: 'text', name: 'name', id: 'name', required: true, value: formData.name, onChange: handleChange,
              className: 'w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-brand-primary focus:border-brand-primary text-white placeholder-gray-500'
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'email', className: 'block text-sm font-medium text-gray-300 mb-1' }, 'E-mail'),
            e('input', {
              type: 'email', name: 'email', id: 'email', required: true, value: formData.email, onChange: handleChange,
              className: 'w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-brand-primary focus:border-brand-primary text-white placeholder-gray-500'
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'comment', className: 'block text-sm font-medium text-gray-300 mb-1' }, 'Comentário'),
            e('textarea', {
              name: 'comment', id: 'comment', rows: 4, required: true, value: formData.comment, onChange: handleChange,
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
            isSubmitting ? 'Enviando...' : e(React.Fragment, null, 'Enviar Opinião ', e(Icon, {icon: Icons.Send, className: 'ml-2'}))
          ),
          submitMessage && e('p', { className: `mt-4 text-center ${submitMessage.includes('Obrigado') ? 'text-green-400' : 'text-red-400'}` }, submitMessage)
        )
      )
    )
  );
}

export default TestimonialsSection;
