import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Card({ title, bullets, delay }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex flex-col h-full justify-between"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, delay }}
    >
      <h3
        className="mb-4 text-black font-semibold"
        style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
        }}
      >
        {title}
      </h3>

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

  return (
    <section
      id="servicos"
      className="py-24 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      <motion.h2
        className="text-center font-bold text-white mb-12"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
      >
        <i className="fi fi-sr-settings mr-2"></i> {t('services.titulo')}
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
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <Card title={s.title} bullets={s.bullets} delay={i * 0.1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
