import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import brFlag from '../assets/br.png';
import usFlag from '../assets/us.png';
import esFlag from '../assets/es.png';

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { i18n: currentI18n } = useTranslation();
  const ref = useRef();

  const handleChange = (lng) => {
    currentI18n.changeLanguage(lng);
    setOpen(false);
  };

  // Mapeamento de bandeiras para o idioma atual
  const flags = {
    pt: brFlag,
    en: usFlag,
    es: esFlag,
  };

  const currentFlag = flags[currentI18n.language] || brFlag; // fallback para português

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-[9999]" ref={ref}>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-black text-white p-2 rounded-full border border-white hover:bg-red-600 transition flex items-center gap-2"
        >
          {/* Exibe a bandeira do idioma atual */}
          <img src={currentFlag} alt="Idioma atual" className="w-7 h-7 rounded-full" />
          <i className={`fi fi-rr-angle-${open ? 'up' : 'down'} text-sm`}></i>
        </button>

        {open && (
          <div className="absolute right-3 mt-4 bg-black text-white rounded-lg shadow-lg w-40 overflow-hidden border border-gray-200">
            <button
              onClick={() => handleChange('pt')}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-red-600 transition hover:text-black"
            >
              <img src={brFlag} alt="Português" className="w-7 h-7" />
              <span>Por-Br</span>
            </button>
            <button
              onClick={() => handleChange('en')}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-red-600 transition hover:text-black"
            >
              <img src={usFlag} alt="English" className="w-7 h-7" />
              <span>Eng-Us</span>
            </button>
            <button
              onClick={() => handleChange('es')}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-red-600 transition hover:text-black"
            >
              <img src={esFlag} alt="Español" className="w-7 h-7" />
              <span>Esp-Es</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
