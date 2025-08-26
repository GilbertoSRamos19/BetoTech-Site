import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 👈 Tradução aqui
import barra from '../assets/barra.png';


export default function Footer() {
  const { t } = useTranslation(); // 👈 Ativa tradução

  return (
    <motion.footer
      style={{
        backgroundImage: `url(${barra})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="bg-red-500 text-black text-center py-4 text-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
    >
      <p>
        &copy; {new Date().getFullYear()} G-Tech Soluções Digitais
      </p>
      <Link
        to="/privacidade"
        className="inline-block mt-2 underline text-blue-600 hover:text-blue-800 transition"
      >
        {t('footer.privacidade')}
      </Link>
    </motion.footer>
  );
}
