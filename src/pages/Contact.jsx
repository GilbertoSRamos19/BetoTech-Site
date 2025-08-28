// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envia os dados pro EmailJS
    emailjs
      .send(
        'BetoTech', // substitua pelo seu ID do serviço
        'template_suzur16', // substitua pelo ID do template
        {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
        },
        'DCZ4jrUMg1QNkAdjy' // substitua pela sua Public Key
      )
      .then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 4000);
          setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
        },
        (error) => {
          console.error('Erro ao enviar:', error);
          alert('Erro ao enviar. Tente novamente mais tarde.');
        }
      );
  };

  return (
    <section
      id="contato"
      className="relative bg-black/70 text-white py-24 px-4 md:px-6 overflow-hidden"
    >
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/70 backdrop-blur-md p-6 sm:p-10 rounded-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        {/* Lado Esquerdo - Contatos */}
        <div className="space-y-6">
          <h2
            className="font-bold"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}
          >
            {t('contact.titulo')}
          </h2>
          <p
            className="text-gray-300 leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}
          >
            {t('hero.subtitle')}
          </p>

          <ul style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)' }} className="space-y-4">
            <li className="flex flex-wrap items-start gap-2">
              <i className="fi fi-rr-envelope text-red-600 mt-1" />
              <span>
                {t('contact.email')}:&nbsp;
                <a
                  href="mailto:gilbertosramos19@hotmail.com"
                  className="underline text-blue-400 break-all"
                >
                  gilbertosramos19@hotmail.com
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fi fi-rs-map-marker text-red-600 mt-1" />
              <span>{t('contact.endereco')}</span>
            </li>
          </ul>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 text-left w-full"
        >
          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              {t('contact.form.nome')}
            </label>
            <input
              type="text"
              name="nome"
              placeholder={t('contact.form.nome')}
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-3 h-12 rounded bg-white text-black text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              name="email"
              placeholder="contato@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              {t('contact.form.whats')}
            </label>
            <input
              type="tel"
              name="telefone"
              placeholder="(xx) 9 9999-9999"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black text-sm sm:text-base"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              {t('contact.form.objetivo')}
            </label>
            <textarea
              rows={4}
              name="mensagem"
              placeholder={t('contact.form.objetivo')}
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black text-sm sm:text-base"
              required
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-black font-bold py-3 px-6 rounded hover:bg-red-600 transition w-full sm:w-auto max-w-xs text-sm sm:text-base"
            >
              {t('contact.form.botao')}
            </button>
          </div>

          {sent && (
            <div className="md:col-span-2 text-center">
              <p className="text-green-600 font-semibold mt-4 text-sm sm:text-base">
                {t('contact.form.sucesso')}
              </p>
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
}
