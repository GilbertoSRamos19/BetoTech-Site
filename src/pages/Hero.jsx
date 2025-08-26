import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import leaoVideo from '../assets/hero.mp4';
import mobileVideo from '../assets/mobile.mp4';

export default function Hero() {
  const { t } = useTranslation();
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth <= 768 ? mobileVideo : leaoVideo
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const updateVideo = (e) => {
      setVideoSrc(e.matches ? mobileVideo : leaoVideo);
    };

    // Listener inicial e nas mudanças
    updateVideo(mediaQuery);
    mediaQuery.addEventListener('change', updateVideo);

    return () => {
      mediaQuery.removeEventListener('change', updateVideo);
    };
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-black px-4 pt-16 overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay escuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 mix-blend-overlay pointer-events-none z-0" />

      {/* Título */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        {t('hero.title.line1')}<br />{t('hero.title.line2')}
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
      >
        {t('hero.subtitle')}
      </motion.p>

      {/* Botão */}
      <motion.a
        href="#servicos"
        className="mt-10 inline-block bg-red-600 text-black px-8 py-3 rounded-full font-semibold hover:bg-red-300 transition z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.6 }}
      >
        {t('hero.button')}
      </motion.a>
    </section>
  );
}
