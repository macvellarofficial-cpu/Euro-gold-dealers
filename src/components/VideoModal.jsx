import React, { useEffect } from 'react';
import { X, Play, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/siteData';

const VideoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-charcoal-900 border border-gold-500/30 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl z-10 animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-charcoal-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base">
                {companyInfo.name} • Official Operations & Refining Showcase
              </h3>
              <p className="text-xs text-gray-400">
                High-Purity 99.9% Gold Smelting, Assaying & Bank of Uganda Certified Refining
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
            title="Euro Gold Video Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer Info */}
        <div className="p-4 sm:p-6 bg-charcoal-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2 text-gold-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Refining facilities certified by Directorate of Geological Survey and Mines (DGSM)</span>
          </div>
          <a
            href={companyInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold tracking-wider uppercase transition-colors"
          >
            Book In-Person Facility Tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
