import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importando as imagens
import ArtesImg from '../assets/Artes.jpg';
import ConsultoriaImg from '../assets/Consultoria.jpg';
import DesenvolvimentoImg from '../assets/Desenvolvimento.jpg';
import SitesImg from '../assets/sites.jpg';
import InstalacaoImg from '../assets/Instalação.jpg';

function Card({ bullets, image, delay }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col h-full justify-between"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, delay }}
    >
      {/* Apenas a imagem */}
      <img
        src={image}
        alt=""
        className="w-full mx-auto object-cover rounded-lg mb-4"
      />

      <ul
        className="list-disc list-inside text-gray-700 flex-grow space-y-1"
        style={{
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        }}
      >
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const services = t('services.lista', { returnObjects: true }) || [];

  const images = [
    DesenvolvimentoImg,
    InstalacaoImg,
    ConsultoriaImg,
    ArtesImg,
    SitesImg,
  ];

  return (
    <section
      id="servicos"
      className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      <motion.h2
        className="text-center text-white mb-12"
        style={{
          fontSize: 'clamp(9rem, 5vw, 3rem)',
          fontFamily: "'Great Vibes', cursive", // Fonte aplicada apenas aqui
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        {t('services.titulo')}
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <Card
                bullets={s.bullets}
                image={images[i]}
                delay={i * 0.1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
