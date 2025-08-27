import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/betotech.png';

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="fixed top-0 w-full bg-black shadow z-[9999]" // z-index alto para não ser coberto
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#">
          <img src={logo} alt="G-Tech Logo" className="h-11" />
        </a>

        {/* Botão hamburguer visível no mobile */}
        <button
          className="text-red-600 text-3xl md:hidden focus:outline-none z-[10000]" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? (
            // Ícone X
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone hamburguer
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          <li><a href="#servicos" className="hover:text-red-600">{t('header.servicos')}</a></li>
          <li><a href="#contato" className="hover:text-red-600">{t('header.contato')}</a></li>
          <li><Link to="/privacidade" className="hover:text-red-600">{t('header.privacidade')}</Link></li>
        </ul>

        {/* Botão CTA Desktop */}
        <a
          href="#contato"
          className="hidden md:inline-block bg-red-600 text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition"
        >
          {t('header.botao')} <i className="fi fi-sr-phone-call"></i>
        </a>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 w-full bg-black text-white px-6 pb-4 z-[9998] transition-all duration-300"
        >
          <ul className="flex flex-col gap-4 font-medium">
            <li><a href="#quemsomos" onClick={closeMenu}>{t('header.quemSomos')}</a></li>
            <li><a href="#servicos" onClick={closeMenu}>{t('header.servicos')}</a></li>
            <li><a href="#contato" onClick={closeMenu}>{t('header.contato')}</a></li>
            <li><Link to="/privacidade" onClick={closeMenu}>{t('header.privacidade')}</Link></li>
            <li>
              <a
                href="#contato"
                onClick={closeMenu}
                className="mt-2 inline-block bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition"
              >
                {t('header.botao')} <i className="fi fi-sr-phone-call"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
