import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  MessageCircle, Globe, ShieldCheck, Sparkles, Building 
} from 'lucide-react';
import { companyInfo } from '../data/siteData';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    department: 'Bullion Trading Desk',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/EURO-GOLD-40-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Official Corporate Desks</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">{companyInfo.name}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Connect with our headquarters in Wakiso / Kampala or our regional trading and bullion desks across Dubai, Nairobi, and Bunia.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Uganda Head Office Card */}
            <div className="p-8 rounded-3xl bg-charcoal-900 border-2 border-gold-500/40 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  Global Headquarters
                </span>
                <ShieldCheck className="w-5 h-5 text-gold-400" />
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-white">
                {companyInfo.headOffice.title}
              </h2>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                  <span>{companyInfo.headOffice.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <div className="flex flex-col">
                    <a href={`tel:${companyInfo.phonePrimary}`} className="hover:text-gold-400 transition-colors">
                      {companyInfo.phonePrimary}
                    </a>
                    <a href={`tel:${companyInfo.phoneSecondary}`} className="hover:text-gold-400 transition-colors">
                      {companyInfo.phoneSecondary}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <div className="flex flex-col">
                    <a href={`mailto:${companyInfo.emailPrimary}`} className="hover:text-gold-400 transition-colors">
                      {companyInfo.emailPrimary}
                    </a>
                    <a href={`mailto:${companyInfo.emailSales}`} className="hover:text-gold-400 transition-colors">
                      {companyInfo.emailSales}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <p>{companyInfo.workingHoursWeekday}</p>
                    <p>{companyInfo.workingHoursSaturday}</p>
                    <p className="text-gray-400">{companyInfo.workingHoursSunday}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Inquiries</span>
                </a>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400">
                Regional Desks & Branch Operations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyInfo.regionalOffices.map((office, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-charcoal-900/70 border border-white/10 space-y-2">
                    <p className="text-sm font-bold text-white">{office.title}</p>
                    <p className="text-xs text-gray-400">{office.address}, {office.city}</p>
                    <p className="text-xs text-gold-400 font-mono">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900 border border-gold-500/30 shadow-2xl">
              
              <div className="mb-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Trading Desk Dispatch</span>
                <h2 className="text-3xl font-serif font-bold text-white">Send Us a Direct Message</h2>
                <p className="text-xs sm:text-sm text-gray-300">
                  Whether booking an in-person refining appointment, selling dore bars, or scheduling export clearing.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 text-gold-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Message Transmitted</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry has been routed to our <strong className="text-gold-400">{formData.department}</strong>. A trader will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        department: 'Bullion Trading Desk',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-charcoal-800 text-white hover:bg-charcoal-700 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+256 700 000 000"
                        className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Company / Entity (Optional)</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Bullion Capital Ltd"
                        className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Target Department</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="Bullion Trading Desk">Bullion Trading Desk</option>
                        <option value="Refining & Assaying Laboratory">Refining & Assaying Laboratory</option>
                        <option value="Bank of Uganda Reserve Liaison">Bank of Uganda Reserve Liaison</option>
                        <option value="Export Logistics & Customs Clearing">Export Logistics & Customs Clearing</option>
                        <option value="Mining Concessions & Yumbe Site">Mining Concessions & Yumbe Site</option>
                        <option value="Compliance & DGSM Legal Affairs">Compliance & DGSM Legal Affairs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Inquiry Subject *</label>
                      <input
                        type="text"
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. 5kg Gold Dore Refining"
                        className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Message Details *</label>
                    <textarea
                      rows="4"
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify estimated gold quantity, purity/origin, timeframe, or desired service..."
                      className="w-full bg-charcoal-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-gold-500/20 hover:from-gold-400 hover:to-gold-300 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <span>Submitting Inquiry...</span> : (
                      <>
                        <span>Submit Message to Trading Desk</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-gold-500/30 h-96 shadow-2xl relative">
          <iframe
            title="Euro Gold Dealers Wakiso Head Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.27438466103!2d32.48270831640625!3d0.06173099999999981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d853e5e6e76cf%3A0x6b17a1e1e92d7768!2sEntebbe%2C%20Uganda!5e0!3m2!1sen!2sug!4v1710000000000!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>

    </div>
  );
};

export default ContactUs;
