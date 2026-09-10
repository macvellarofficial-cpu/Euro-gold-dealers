import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { companyInfo, servicesData } from '../data/siteData';

const QuoteModal = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || servicesData[0]?.title || 'Gold Refining',
    quantity: '',
    unit: 'Kilograms',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate brief processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: servicesData[0]?.title || 'Gold Refining',
      quantity: '',
      unit: 'Kilograms',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-charcoal-900 border border-gold-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif text-white font-bold">Quote Request Received</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our mineral trading desk has received your request for <strong className="text-gold-400">{formData.service}</strong>. A dedicated precious metals consultant will contact you within 1 business hour.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Priority</span>
              </a>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium text-xs uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Mineral Desk</span>
            </div>
            <h3 className="text-2xl font-serif text-white font-bold mb-2">
              Request an Official Quote
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Get an accurate quotation for refining, fire assaying, smelting, or export documentation tailored to LBMA market rates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Full Name / Company *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Bullion Traders Ltd"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+256 700 000 000"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Concession Investment / Exploration">Concession Investment / Exploration</option>
                    <option value="General Bullion Trading">General Bullion Trading</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 5"
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Unit
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="Kilograms">Kg</option>
                    <option value="Grams">Grams</option>
                    <option value="Troy Ounces">Oz</option>
                    <option value="Dore Bars">Bars</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Additional Details / Specifications
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify mineral karatage, origin, delivery preferences, or export documentation needs..."
                  className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-charcoal-950 border border-white/5 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>All requests protected under strict Non-Disclosure Agreement (NDA) and Bank of Uganda compliance.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-gold-500/20 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processing Quote...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default QuoteModal;
