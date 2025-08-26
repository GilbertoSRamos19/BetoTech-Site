import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const contatos = [

    {
      nome: 'Falar com Gilberto',
      numero: '5531994464353',
      mensagem: 'Olá! Gostaria de solicitar um serviço.',
    },
 
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[9999] group text-sm font-medium">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center bg-[#18d15c] text-black shadow-lg rounded-full px-4 py-2 hover:scale-105 transition cursor-pointer"
      >
        <span className="mr-3">Posso te ajudar?</span>
        <img src="../icons/whatsapp.png" alt="WhatsApp" className="w-9 h-9" />
      </button>

      {open && (
        <div className="mt-2 space-y-2 bg-green-500 rounded-lg shadow-lg p-3 w-53">
          {contatos.map((contato, index) => (
            <a
              key={index}
              href={`https://wa.me/${contato.numero}?text=${encodeURIComponent(contato.mensagem)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-black hover:text-white transition"
            >
              {contato.nome}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
