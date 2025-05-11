// src/App.js
import { React, e } from './react-imports';

import Header from './components/Header';
import Hero from './sections/Hero';
import ServicesSection from './sections/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return e(
    'div',
    { className: 'bg-brand-dark text-brand-light font-sans' }, // font-sans definido no tailwind.config.js
    e(Header, null),
    e('main', null,
      e(Hero, null),
      e(ServicesSection, null),
      e(TestimonialsSection, null),
      e(ContactSection, null)
    ),
    e(Footer, null)
  );
}

export default App;
