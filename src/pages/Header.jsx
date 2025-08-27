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

  // Função de scroll suave
  const scrollToAnchor = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const navLinks = [
    { label: t('header.inicio'), href: '#inicio', isExternal: true },
    { label: t('header.servicos'), href: '#servicos', isExternal: true },
    { label: t('header.contato'), href: '#contato', isExternal: true },
    { label: t('header.privacidade'), href: '/privacidade', isExternal: false }
  ];

  return (
    <motion.header
      className="fixed top-0 w-full bg-black shadow z-[9999]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#inicio" onClick={(e) => scrollToAnchor(e, '#inicio')}>
          <img src={logo} alt="BetoTech Logo" className="h-11" />
        </a>

        {/* Botão hamburguer (mobile) */}
        <button
          className="text-red-600 text-3xl md:hidden focus:outline-none z-[10000]"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          {navLinks.map((link, i) => (
            <motion.li key={i} className="relative group" whileHover="hover">
              {link.isExternal ? (
                <a
                  href={link.href}
                  onClick={(e) => scrollToAnchor(e, link.href)}
                  className="hover:text-red-500 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link to={link.href} onClick={closeMenu} className="hover:text-red-500 transition-colors">
                  {link.label}
                </Link>
              )}
              {/* underline animado */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-red-500"
                initial={{ width: 0 }}
                variants={{ hover: { width: '100%' } }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Botão CTA Desktop */}
        <a
          href="#contato"
          onClick={(e) => scrollToAnchor(e, '#contato')}
          className="hidden md:inline-block bg-red-600 text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition"
        >
          {t('header.botao')} <i className="fi fi-sr-phone-call"></i>
        </a>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-black text-white px-6 pb-4 z-[9998] transition-all duration-300">
          <ul className="flex flex-col gap-4 font-medium">
            {navLinks.map((link, i) => (
              <li key={i}>
                {link.isExternal ? (
                  <a href={link.href} onClick={(e) => scrollToAnchor(e, link.href)}>
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} onClick={closeMenu}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            {/* Botão Chame Já */}
            <li>
              <a
                href="#contato"
                onClick={(e) => scrollToAnchor(e, '#contato')}
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
