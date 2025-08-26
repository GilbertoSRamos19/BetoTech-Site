import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ConsentModal() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('consentAccepted');
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-black text-white p-4 rounded-xl shadow-lg z-50 max-w-xl mx-auto">
      <h3 className="text-lg font-bold mb-2">{t('consent.titulo')}</h3>
      <p className="mb-4 text-sm">{t('consent.texto')}</p>
      <button
        onClick={handleAccept}
        className="bg-red-600 text-black px-4 py-2 rounded hover:bg-red-600 transition bg-center"
      >
        {t('consent.aceitar')}
      </button>
    </div>
  );
}
