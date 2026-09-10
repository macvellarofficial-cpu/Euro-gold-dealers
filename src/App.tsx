/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SEOMeta, Booking } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import GoldTicker from './components/GoldTicker';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import BookingForm from './components/BookingForm';
import ContactPage from './components/ContactPage';
import AdminPortal from './components/AdminPortal';
import SEOManager from './components/SEOManager';
import { ShieldCheck, Database, Award, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  // Pre-fill states for appointment scheduling
  const [initialWeight, setInitialWeight] = useState<number>(0.5);
  const [initialProduct, setInitialProduct] = useState<string>('');

  // SEO states mimicking high-end Yoast WordPress SEO plugins
  const [seoMeta, setSeoMeta] = useState<SEOMeta>({
    title: 'Euro Gold Dealers | Sourcing & Refining Kampala Uganda',
    metaDescription: 'Licensed unrefined gold buyers & exporters in Kampala, Uganda. Direct mineral testing, refinery coordination, & Dodd-Frank compliant export clearance.',
    keywords: 'gold dealers Kampala, Uganda gold export, gold assaying Kampala, licensed gold dealers, gold dust Kampala',
    focusKeyword: 'gold dealers Kampala',
    ogImage: '',
  });

  const handleSelectProductForInquiry = (productName: string, defaultWeight: number) => {
    setInitialProduct(productName);
    setInitialWeight(defaultWeight);
    setActiveTab('booking');
    setShowAdmin(false);
    
    // Smooth scroll to work area
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEstimateValuation = () => {
    setActiveTab('booking');
    setShowAdmin(false);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handleBookingSuccess = (booking: Booking) => {
    // Optional handle booking logic at app level
    console.log('Secure lead stored:', booking);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07080a] text-gray-100 font-sans antialiased text-xs">
      
      {/* Real-time Ugandan gold price ticker */}
      <GoldTicker />

      {/* Website Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        showAdmin={showAdmin} 
        setShowAdmin={setShowAdmin} 
      />

      {/* Dynamic Main Body Column */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-12">
        
        {/* If Admin tab is checked, view our Custom WordPress Dashboard */}
        {showAdmin ? (
          <div className="space-y-6">
            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-wider font-mono text-[10px]">
                <Database className="w-4 h-4" />
                <span>WordPress Core Interface / Site-Owner Backoffice</span>
              </div>
              <h2 className="text-white text-xl font-bold font-display tracking-tight">EG Dealers Kampala Leads Admin</h2>
              <p className="text-gray-400 text-xs">
                Manage incoming client appointment requests, perform diagnostic fire assays with our lab software simulation, and review SEO sitemaps.
              </p>
            </div>
            
            <AdminPortal />
          </div>
        ) : (
          /* Client facing sections */
          <div className="space-y-10">
            {activeTab === 'home' && (
              <div className="space-y-16">
                <HomePage 
                  onNavigate={setActiveTab} 
                  onEstimateValuation={handleEstimateValuation} 
                />
                
                {/* Integration of customized Calculator on home layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="text-center space-y-2 mb-8">
                    <span className="text-gold-500 uppercase tracking-widest font-mono text-[9px] font-bold block"> Interactive Exchange Rates </span>
                    <h3 className="text-white text-xl font-bold font-display">Live Metallic Assay Value Estimator</h3>
                    <p className="text-gray-400 text-xs max-w-sm mx-auto">Convert unrefined ounces or grams instantly based on Kampala spot pricing discounts.</p>
                  </div>
                  <HomePageCalculator onScheduleAppointment={handleSelectProductForInquiry} />
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <ProductPage 
                onSelectProduct={handleSelectProductForInquiry} 
              />
            )}

            {activeTab === 'booking' && (
              <BookingForm 
                initialWeight={initialWeight}
                initialProduct={initialProduct}
                onBookingSuccess={handleBookingSuccess} 
              />
            )}

            {activeTab === 'contact' && (
              <ContactPage />
            )}
          </div>
        )}

      </main>

      {/* WordPress-style SEO Auditor Manager Floating Panel */}
      <SEOManager 
        currentMeta={seoMeta} 
        onChangeMeta={setSeoMeta} 
        activeTab={activeTab} 
      />

      {/* Trust site footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        setShowAdmin={setShowAdmin} 
      />
    </div>
  );
}

// Internal customized wrapper inside homepage for perfect layout flow
import GoldCalculator from './components/GoldCalculator';
function HomePageCalculator({ onScheduleAppointment }: { onScheduleAppointment: (product: string, weight: number) => void }) {
  return (
    <div className="bg-neutral-950 p-2 rounded-2xl border border-neutral-900 shadow-2xl">
      <GoldCalculator onScheduleAppointment={onScheduleAppointment} />
    </div>
  );
}
