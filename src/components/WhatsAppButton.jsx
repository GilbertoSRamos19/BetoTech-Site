import React from 'react';

export default function WhatsAppButton() {
  const numero = '5531994464353';
  const mensagem = 'Olá! Gostaria de solicitar um serviço.';
  const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] group">
      <a
        href={linkWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#18d15c] text-black shadow-lg rounded-full p-3 hover:scale-105 transition cursor-pointer"
      >
        <img
          src="../icons/whatsapp.png"
          alt="WhatsApp"
          className="w-9 h-9"
        />
      </a>

      {/* Tooltip */}
    <span className="absolute right-16 bottom-2 bg-[#18d15c] text-black text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
  Posso ajudar
    </span>
    </div>
  );
}