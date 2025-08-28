import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import barra from '../assets/barra.mp4';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="relative text-black text-center py-8 text-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    >
      {/* Vídeo de fundo */}
      <video
        src={barra}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Conteúdo do footer */}
      <div className="relative z-20">
        <p>&copy; {new Date().getFullYear()} BetoTech Soluções Digitais</p>
        <Link
          to="/privacidade"
          className="inline-block mt-2 underline text-primary hover:text-white transition"
        >
          {t('footer.privacidade')}
        </Link>
      </div>
    </motion.footer>
  );
}
