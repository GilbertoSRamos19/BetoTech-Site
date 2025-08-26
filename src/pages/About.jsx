import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Tradução

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="quemsomos"
      className="py-20 px-4 sm:px-6 bg-black text-white relative overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <i className="fi fi-sr-users-alt mr-2"></i>{t('about.quemSomos.titulo')}
        </h2>
        <p className="mb-6 text-base sm:text-lg leading-relaxed">{t('about.quemSomos.texto')}</p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <i className="fi fi-br-bullseye-arrow mr-2"></i>{t('about.missao.titulo')}
        </h2>
        <p className="mb-6 text-base sm:text-lg leading-relaxed">{t('about.missao.texto')}</p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <i className="fi fi-br-overview mr-2"></i>{t('about.visao.titulo')}
        </h2>
        <p className="mb-6 text-base sm:text-lg leading-relaxed">{t('about.visao.texto')}</p>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <i className="fi fi-ss-benefit-diamond mr-2"></i>{t('about.valores.titulo')}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
          <li>{t('about.valores.itens.0')}</li>
          <li>{t('about.valores.itens.1')}</li>
          <li>{t('about.valores.itens.2')}</li>
          <li>{t('about.valores.itens.3')}</li>
          <li>{t('about.valores.itens.4')}</li>
        </ul>
      </motion.div>
    </section>
  );
}
