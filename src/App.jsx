import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout & Reusable Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import PartnersLicenses from './pages/PartnersLicenses';
import AccountHolders from './pages/AccountHolders';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top on navigation helper
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenQuote = (serviceName = '') => {
    setQuoteDefaultService(serviceName || '');
    setQuoteModalOpen(true);
  };

  const handleOpenVideo = () => {
    setVideoModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-charcoal-950 text-white selection:bg-gold-500 selection:text-charcoal-950">
        
        {/* Global Navigation Bar */}
        <Header onOpenQuote={() => handleOpenQuote('')} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<Home onOpenQuote={handleOpenQuote} onOpenVideo={handleOpenVideo} />} 
            />
            <Route 
              path="/about-us" 
              element={<AboutUs onOpenQuote={handleOpenQuote} />} 
            />
            <Route 
              path="/services" 
              element={<Services onOpenQuote={handleOpenQuote} />} 
            />
            <Route 
              path="/projects" 
              element={<Projects onOpenQuote={handleOpenQuote} />} 
            />
            <Route 
              path="/partners-licenses" 
              element={<PartnersLicenses onOpenQuote={handleOpenQuote} />} 
            />
            <Route 
              path="/account-holders" 
              element={<AccountHolders />} 
            />
            <Route 
              path="/blog" 
              element={<Blog />} 
            />
            <Route 
              path="/contact-us" 
              element={<ContactUs />} 
            />
            <Route 
              path="/privacy-policy" 
              element={<PrivacyPolicy />} 
            />
            <Route 
              path="/terms-of-service" 
              element={<TermsOfService />} 
            />
            {/* Catch-all fallback */}
            <Route 
              path="*" 
              element={<Home onOpenQuote={handleOpenQuote} onOpenVideo={handleOpenVideo} />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp Contact Badge */}
        <WhatsAppButton />

        {/* Quote Request Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultService={quoteDefaultService}
        />

        {/* Video Presentation Modal */}
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
