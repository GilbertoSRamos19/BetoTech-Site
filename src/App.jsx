import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Privacy from "./pages/Privacy";

import LanguageSwitcher from "./components/LanguageSwitcher";
import WhatsAppButton from "./components/WhatsAppButton";
import ConsentModal from './components/ConsentModal';

// Componente da página inicial
function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// App principal com rotas e elementos globais
export default function App() {
  return (
    <Router>
      {/* Componentes globais sempre visíveis */}
      <LanguageSwitcher />
      <WhatsAppButton />
      <ConsentModal />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidade" element={<Privacy />} />
      </Routes>
    </Router>
  );
}
