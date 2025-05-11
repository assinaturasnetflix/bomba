// src/react-imports.js
import React from 'react';
import { motion } from 'framer-motion';
// Importe ícones específicos que você usará
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaBullhorn, FaDesktop, FaUsersCog, FaChartLine, FaPalette, FaMapMarkerAlt } from 'react-icons/fa';
import { BsChatDots, BsSendFill } from 'react-icons/bs';


const e = React.createElement;

// Agrupe os ícones para facilitar o uso
const Icons = {
  Phone: FaPhoneAlt,
  Envelope: FaEnvelope,
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Linkedin: FaLinkedinIn,
  Twitter: FaTwitter,
  Blog: FaBullhorn, // Exemplo para Blog
  Site: FaDesktop,  // Exemplo para Site Institucional
  Consultoria: FaUsersCog, // Exemplo para Consultoria
  Anuncios: FaChartLine, // Exemplo para Gerenciamento de Anúncios
  Design: FaPalette, // Exemplo para Design Gráfico
  MapMarker: FaMapMarkerAlt,
  Chat: BsChatDots,
  Send: BsSendFill,
};

export { React, e, motion, Icons };
