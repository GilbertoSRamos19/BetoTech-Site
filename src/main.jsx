import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@flaticon/flaticon-uicons/css/all/all.css';
import './i18n'; // Importing i18n configuration

// --- Importações do Swiper ---
import 'swiper/css'; // Estilos base do Swiper
import 'swiper/css/pagination'; // Estilos para a paginação (bolinhas)
import 'swiper/css/navigation'; // Estilos para as setas de navegação

// --- SEU CSS PERSONALIZADO DO SWIPER ---
// É CRUCIAL que este arquivo seja importado DEPOIS dos estilos padrão do Swiper,
// para que suas regras de estilo sobrescrevam as padrões.
import './styles/swiper-custom.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);