import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '../data/siteData';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Support and Quick Contact" className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Floating greeting bubble */}
      {showTooltip && (
        <div className="bg-charcoal-900 border border-gold-500/30 text-white rounded-2xl p-3.5 shadow-2xl max-w-xs mb-1 animate-fade-in relative backdrop-blur-md">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-charcoal-800 border border-white/20 rounded-full text-gray-400 hover:text-white flex items-center justify-center text-xs transition-colors"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-semibold text-gold-400">Euro Gold Trading Desk</span>
          </div>
          <p className="text-xs text-gray-300 leading-snug">
            Need live gold pricing, refining inquiries, or export paperwork? Chat directly with our Kampala bullion desk.
          </p>
        </div>
      )}

      {/* Main WhatsApp Button with pulse ring */}
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Euro Gold Dealers on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Shockwave Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none duration-1000"></span>
        <span className="absolute -inset-1 rounded-full border-2 border-emerald-400/40 pointer-events-none animate-pulse"></span>
        
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </aside>
  );
};

export default WhatsAppButton;
