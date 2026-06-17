/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Phone, ShieldCheck, MapPin, MessageSquare, Landmark, Send, Info } from 'lucide-react';
import MapContainer from './MapContainer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subj, setSubj] = useState('Mineral Export Logistics Inquiry');
  const [content, setContent] = useState('');
  
  const [sentStatus, setSentStatus] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<string>('');

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    setErrorStatus('');

    if (!name || !email || !content) {
      setErrorStatus('Please fully complete the sender name, email, and security message.');
      return;
    }

    // Save mock contact inquiry to local storage
    const saved = localStorage.getItem('eurogold_inquiries');
    const list = saved ? JSON.parse(saved) : [];
    list.push({
      id: Math.random().toString(36).slice(2, 9),
      name,
      email,
      subj,
      content,
      createdAt: new Date().toLocaleDateString(),
    });
    localStorage.setItem('eurogold_inquiries', JSON.stringify(list));

    setSentStatus(true);
    setName('');
    setEmail('');
    setContent('');
  };

  return (
    <div id="contact-view-matrix" className="space-y-12">
      
      {/* Page Title Intro banner */}
      <div className="text-center space-y-3">
        <span className="text-gold-500 uppercase tracking-widest font-mono text-[10px] font-bold block"> Kampala Headquarters </span>
        <h2 className="text-white text-2xl md:text-3xl font-extrabold font-display tracking-tight">Secure Vault Contact & Map</h2>
        <p className="text-xs text-gray-400 max-w-lg mx-auto">
          Contact our secure Nakasero bullion desk, request terminal clearances, coordinate armed transit, or consult our mineral lawyers.
        </p>
      </div>

      {/* Main Map Container Embedded Premium */}
      <section id="map-embed-section-layout">
        <MapContainer />
      </section>

      {/* Two column form & credentials layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: secure contact form */}
        <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-800 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-neutral-900 pb-3">
            <MessageSquare className="w-5 h-5 text-gold-500" />
            <h3 className="text-white font-bold font-display text-sm tracking-wide">Encrypted Communication Desk</h3>
          </div>

          {sentStatus && (
            <div className="p-4 bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 rounded-xl text-xs flex flex-col gap-1">
              <span className="font-bold">✓ Secure Transmission Successful</span>
              <span>We have logged your query into the Euro Gold WP CMS logs. Our secure Kampala dispatch officer will check your email address.</span>
            </div>
          )}

          {errorStatus && (
            <div className="p-3 bg-rose-950/40 text-rose-300 border border-rose-800/40 rounded-xl text-xs font-medium">
              {errorStatus}
            </div>
          )}

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-gray-400 text-xs font-semibold">Representative Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jean-Pierre Laurent"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-lg text-white text-xs focus:outline-none"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-gray-400 text-xs font-semibold">Secure Return Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. laurent@goldtrade.com"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-lg text-white text-xs focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-gray-400 text-xs font-semibold">Vessel / Sourcing Inquiry Subject</label>
              <select
                value={subj}
                onChange={(e) => setSubj(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-lg text-white text-xs focus:outline-none cursor-pointer"
              >
                <option value="Mineral Export Logistics Inquiry">Mineral Export Logistics & Clearing Charges</option>
                <option value="Raw Alluvial Partnership">Raw Gold Dust Buying Rates Inquiry</option>
                <option value="Laboratory Assaying request">Spectroscopy / Fire Assay request</option>
                <option value="Airport Armed Transit Escort">Airport Secure Armored Pickup Escort</option>
                <option value="Corporate Compliance Audit">Corporate Compliance & Legality verification</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-gray-400 text-xs font-semibold">Encrypted Message Body *</label>
              <textarea
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Details of bullion quantities, declared karat purity levels, planned timelines..."
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-lg text-white text-xs focus:outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-black py-2.5 rounded-lg font-bold font-display text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow active:scale-[0.99] transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Broadcast Secure Request</span>
            </button>
          </form>
        </div>

        {/* Right Column: Legality details, certificates and physical location guidelines */}
        <div className="space-y-6">
          
          <div className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2.5 border-b border-neutral-900 pb-3">
              <Landmark className="w-5 h-5 text-gold-500" />
              <h3 className="text-white font-bold font-display text-sm tracking-wide">Kampala Licensing Transparency</h3>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              Euro Gold Dealers Ltd is fully incorporated and operates under pristine commercial bonds in Uganda. We maintain deep transparency indexes with both East African mineral assemblies and overseas buyers.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">Uganda Ministry of Energy Bonded</strong>
                  <span className="text-gray-400 text-[11px]">Licensed Mineral Exporter Reg No: #KLA-G-8292</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">ICGLR Mineral Certificate Alignment</strong>
                  <span className="text-gray-400 text-[11px]">Full compliance regarding conflict-free supply chains.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gray-200 block">Dodd-Frank Compliant Audits</strong>
                  <span className="text-gray-400 text-[11px]">Clear audit trails for all precious metals transiting Kampala vaults.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-950/20 p-5 rounded-2xl border border-orange-900/30 flex gap-3 text-xs items-start">
            <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-white font-semibold">Campus Gate Checkpoint Instructions</h4>
              <p className="text-gray-400 leading-relaxed text-[11px]">
                Pre-scheduled appointments are processed via Gate 1 on Nakasero Road. Vehicles must yield for undercarriage inspections. Please coordinates directly with your security coordinator prior to campus arrival.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
