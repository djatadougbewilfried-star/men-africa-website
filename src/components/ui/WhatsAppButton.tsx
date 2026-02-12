"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpenState, setIsOpenState] = useState(false);

  const toggleOpen = () => {
    setIsOpenState(!isOpenState);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpenState && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-4 mb-2 w-72">
          <p className="text-gray-700 text-sm mb-3">
            Bonjour ! Comment pouvons-nous vous aider ?
          </p>
          <a
            href="https://wa.me/2250757740596"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-medium"
          >
            Demarrer la conversation
          </a>
        </div>
      )}
      <button
        onClick={toggleOpen}
        aria-label={isOpenState ? "Fermer WhatsApp" : "Ouvrir WhatsApp"}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        {isOpenState ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
      </button>
    </div>
  );
}
