/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Calendar, Clock, ShieldCheck, Download, Check, ClipboardCopy, Sparkles, UserCheck, Printer } from 'lucide-react';
import { Booking } from '../types';

interface BookingFormProps {
  initialWeight?: number;
  initialProduct?: string;
  onBookingSuccess: (booking: Booking) => void;
}

export default function BookingForm({ initialWeight = 0.5, initialProduct = '', onBookingSuccess }: BookingFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passportId, setPassportId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [desiredService, setDesiredService] = useState('Laboratory Fire Assaying & XRF Scan');
  const [productWeight, setProductWeight] = useState(initialWeight || 0.5);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [notes, setNotes] = useState('');
  
  // Security checks
  const [secChecked, setSecChecked] = useState(false);
  const [originDeclaration, setOriginDeclaration] = useState(false);

  // States
  const [error, setError] = useState('');
  const [successBooking, setSuccessBooking] = useState<Booking | null>(null);

  const timeSlots = [
    '09:00 AM - 10:30 AM (Secured Vault Intake)',
    '10:30 AM - 12:00 PM (Laboratory Assaying Slot A)',
    '01:00 PM - 02:30 PM (Laboratory Assaying Slot B)',
    '02:30 PM - 04:00 PM (Export Documentation & Custom Clearance)',
    '04:00 PM - 05:30 PM (Private Bulk Bullion Advisory)',
  ];

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !phone || !passportId || !date || !timeSlot) {
      setError('Please provide all required identification details, date, and time slot.');
      return;
    }

    if (!secChecked || !originDeclaration) {
      setError('You must accept mineral regulation guidelines and background security screenings.');
      return;
    }

    const refCode = `KLA-EGD-${Math.floor(100000 + Math.random() * 900000)}`;

    const newBooking: Booking = {
      id: Math.random().toString(16).slice(2, 10),
      fullName,
      email,
      phone,
      passportId,
      companyName: companyName || undefined,
      desiredService,
      productOfInterest: initialProduct || undefined,
      estimatedWeightKg: Number(productWeight),
      date,
      timeSlot,
      securityDisclaimerAccepted: true,
      notes: notes || undefined,
      bookingRef: refCode,
      createdAt: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
      status: 'Pending Verification',
    };

    // Save list of bookings to localStorage
    const saved = localStorage.getItem('eurogold_bookings');
    const list: Booking[] = saved ? JSON.parse(saved) : [];
    list.push(newBooking);
    localStorage.setItem('eurogold_bookings', JSON.stringify(list));

    // Update parent
    onBookingSuccess(newBooking);

    // Save in local state to render secure pass
    setSuccessBooking(newBooking);
  };

  const handlePrint = () => {
    window.print();
  };

  if (successBooking) {
    return (
      <div id="booking-pass-container" className="bg-neutral-900 rounded-3xl border-2 border-gold-500 p-1 max-w-2xl mx-auto overflow-hidden shadow-2xl animate-in fade-in duration-500">
        <div id="booking-pass-design" className="bg-black text-gray-300 p-6 md:p-8 space-y-6 select-none relative">
          
          {/* Security watermark background lines */}
          <div className="absolute inset-x-0 top-1/3 h-24 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent pointer-events-none transform -rotate-12" />

          <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-neutral-800 gap-4">
            <div>
              <span className="bg-gold-500/10 text-gold-400 border border-gold-500/20 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest font-bold uppercase block w-max mb-1.5">
                SECURED ACCESS PERMIT
              </span>
              <h3 className="text-white font-bold font-display text-lg tracking-wider">EURO GOLD DEALERS LTD</h3>
              <p className="text-xs text-gray-400">Plot 24, Nakasero Road, Kampala, Uganda</p>
            </div>
            <div className="bg-neutral-950 p-2.5 border border-neutral-800 rounded-xl text-center">
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider block">Permit ID</span>
              <span className="text-gold-400 font-mono font-bold text-sm">{successBooking.bookingRef}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs">
            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] block">Appointee Name</span>
              <p className="text-white font-medium text-sm">{successBooking.fullName}</p>
              {successBooking.companyName && <p className="text-gray-400">Co: {successBooking.companyName}</p>}
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] block">ID / Passport Ref</span>
              <p className="text-white font-mono text-sm">{successBooking.passportId}</p>
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] block">Assigned Service Desk</span>
              <p className="text-gold-400 font-medium">{successBooking.desiredService}</p>
            </div>

            <div className="space-y-1">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] block">Assay Cargo Weight</span>
              <p className="text-white font-medium">{successBooking.estimatedWeightKg} kg (declared)</p>
            </div>

            <div className="space-y-1 pt-2 border-t border-neutral-900">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] block font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-500" /> Appointment Date
              </span>
              <p className="text-white font-semibold">{new Date(successBooking.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="space-y-1 pt-2 border-t border-neutral-900">
              <span className="text-gray-500 uppercase tracking-widest text-[10px] block font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-500" /> Time slot
              </span>
              <p className="text-white font-semibold">{successBooking.timeSlot}</p>
            </div>
          </div>

          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Campus Access Directives & Safety Protocols:</span>
            </div>
            <ul className="text-[10px] text-gray-400 space-y-1.5 list-disc pl-4.5 leading-relaxed">
              <li>Please present this digital pass or printed voucher alongside a valid passport / National ID at the Nakasero Gate-1 Gatehouse.</li>
              <li>Armored vault storage deposits of over 5kg may request fully equipped guard escorts directly from Entebbe Airport by notifying our hotline.</li>
              <li>All physical mineral materials will be weighed and assayed on-premises in the presence of the client under close CCTV coverage.</li>
            </ul>
          </div>

          {/* Barcode Mock Representation representing genuine paperwork security */}
          <div className="flex flex-col items-center justify-center pt-4 border-t border-neutral-900 gap-2">
            <div className="bg-white p-2.5 rounded flex flex-col items-center">
              <div className="h-10 w-64 bg-[repeating-linear-gradient(90deg,#000_0px,#000_2px,#fff_2px,#fff_8px,#000_8px,#000_10px,#fff_10px,#fff_14px)]" />
              <span className="text-[9px] text-gray-600 font-mono mt-1 tracking-[6px] font-bold">{successBooking.bookingRef}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Security Clearance Status: {successBooking.status}
            </span>
          </div>

          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={handlePrint}
              className="bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 px-5 rounded-xl text-xs font-semibold flex items-center gap-2 border border-neutral-800 transition cursor-pointer"
            >
              <Printer className="w-4 h-4 text-gold-500" />
              <span>Print Secure Pass</span>
            </button>
            <button
              onClick={() => setSuccessBooking(null)}
              className="bg-gold-500 hover:bg-gold-400 text-black py-2.5 px-5 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div id="booking-calendar-module" className="bg-neutral-950 rounded-2xl border border-neutral-800 p-6 md:p-8 shadow-xl space-y-6 max-w-2xl mx-auto">
      <div className="text-center space-y-1.5">
        <span className="text-gold-500 uppercase tracking-widest font-mono text-[10px] font-bold block"> Kampala Secure Access Booking Desk </span>
        <h3 className="text-white text-xl font-bold font-display tracking-tight">Schedule Vault Deposit or Assaying</h3>
        <p className="text-xs text-gray-400 max-w-md mx-auto">
          Reserve private laboratory spaces, customs clearing advice, or bullion vault intake under military-grade privacy.
        </p>
      </div>

      {error && (
        <div className="p-3 bg-rose-950/40 text-rose-300 border border-rose-800 text-xs rounded-xl flex items-center gap-2.5">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}

      <form onSubmit={handleBooking} className="space-y-4">
        
        {/* Personal details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Full Representative Name *</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Jean-Pierre Laurent"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Passport or National ID No. *</label>
            <input
              type="text"
              required
              value={passportId}
              onChange={(e) => setPassportId(e.target.value)}
              placeholder="e.g. UG918274B"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none font-mono"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Secure Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="laurent@goldtrade-int.com"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Encrypted Phone / Tel Line *</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +256 772 121 990"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Corporate / Cargo Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Company Name (If corporate)</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Swiss Refining Partners Pty"
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Declared Weight Estimate (KG)</label>
            <input
              type="number"
              step="0.1"
              min="0.1"
              value={productWeight}
              onChange={(e) => setProductWeight(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none font-mono"
            />
          </div>
        </div>

        {/* Selected Service and Timing */}
        <div className="space-y-1">
          <label className="text-gray-400 text-xs font-medium">Selected Service Slot</label>
          <select
            value={desiredService}
            onChange={(e) => setDesiredService(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none cursor-pointer"
          >
            <option value="Laboratory Fire Assaying & XRF Scan">Laboratory Fire Assaying & XRF Spectrometer Verification</option>
            <option value="Secure Refinery Coordination & Smelting">Secure Refinery Coordination & Smelting</option>
            <option value="Government Export Documentation consulting">Mineral License Clearance & Export Customs Processing</option>
            <option value="Gold Sourcing & Mining Partnership Setup">Alluvial Gold Custom Sourcing Consultation</option>
            <option value="Institutional Bullion Purchase Inquiry">Institutional Bullion Purchase & Secure Logistics Vaulting</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Preferred Booking Date *</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]} // prevent backward dating
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-gray-300 text-xs focus:outline-none cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <label className="text-gray-400 text-xs font-medium">Time Slot Availability *</label>
            <select
              required
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-xl text-white text-xs focus:outline-none cursor-pointer"
            >
              <option value="">-- Choose Access Window --</option>
              {timeSlots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Security Disclaimers */}
        <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800/80 space-y-3">
          <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold block">Mineral Vetting & Legal Accords</span>
          
          <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-gray-400 select-none">
            <input
              type="checkbox"
              checked={secChecked}
              onChange={(e) => setSecChecked(e.target.checked)}
              className="accent-gold-500 h-4 w-4 shrink-0 mt-0.5 rounded border-neutral-800 bg-neutral-900"
            />
            <span>
              I understand all mineral materials entered into Kampala Vaults undergo X-Ray Fluorescence scanning and fire certification. I consent to full campus background security vetting.
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-gray-400 select-none">
            <input
              type="checkbox"
              checked={originDeclaration}
              onChange={(e) => setOriginDeclaration(e.target.checked)}
              className="accent-gold-500 h-4 w-4 shrink-0 mt-0.5 rounded border-neutral-800 bg-neutral-900"
            />
            <span>
              I warrant that the gold resources presented have clean domestic origins certified under legal Ugandan mining acts or approved regional mineral clearance guidelines.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gold-500 hover:bg-gold-400 text-black py-3 rounded-xl font-bold font-display text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition cursor-pointer"
        >
          <UserCheck className="w-4.5 h-4.5" />
          <span>Submit Request & Generate Entry Pass</span>
        </button>

      </form>
    </div>
  );
}
