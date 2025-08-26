import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-red-600">
          📜 {t('privacy.title')}
        </h1>

        <div className="space-y-4 text-white">
          <h2 className="text-xl sm:text-2xl font-semibold">{t('privacy.termTitle')}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{t('privacy.term1')}</p>
          <p className="text-base sm:text-lg leading-relaxed">{t('privacy.term2')}</p>

          <h2 className="text-xl sm:text-2xl font-semibold pt-6">{t('privacy.policyTitle')}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{t('privacy.policy1')}</p>
          <p className="text-base sm:text-lg leading-relaxed">{t('privacy.policy2')}</p>
          <p className="text-base sm:text-lg leading-relaxed">{t('privacy.policy3')}</p>
          <p className="text-base sm:text-lg leading-relaxed">{t('privacy.policy4')}</p>
        </div>
      </motion.div>
    </section>
  );
}