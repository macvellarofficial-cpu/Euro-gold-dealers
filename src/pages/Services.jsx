import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Flame, FileCheck, Cog, DollarSign, Gem, Users, 
  Compass, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone
} from 'lucide-react';
import { servicesData, companyInfo } from '../data/siteData';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Flame': return <Flame className="w-7 h-7" />;
    case 'FileCheck': return <FileCheck className="w-7 h-7" />;
    case 'Cog': return <Cog className="w-7 h-7" />;
    case 'DollarSign': return <DollarSign className="w-7 h-7" />;
    case 'Gem': return <Gem className="w-7 h-7" />;
    case 'Users': return <Users className="w-7 h-7" />;
    case 'Compass': return <Compass className="w-7 h-7" />;
    default: return <Sparkles className="w-7 h-7" />;
  }
};

const serviceImages = {
  'gold-refining': '/images/EURO-GOLD-12.jpg',
  'assaying': '/images/Proud-to-showcase-our-commitment-to-precision-and-world-class-refining.At-Euro-Gold-Refinery-SMC.jpg',
  'gold-smelting': '/images/freepicdownloader.com-industrial-lost-wax-casting-pouring-filling-out-ceramic-shells-with-molten-steel-from-ladle-large.jpg',
  'transaction-handling': '/images/EURO-GOLD-40-scaled.jpg',
  'gemstone-processing': '/images/freepicdownloader.com-directly-shot-multi-colored-candies-table-large.jpg',
  'mineral-advocacy': '/images/mani-con-coltan-2.jpg',
  'mineral-consultancy': '/images/Officials-check-out-gold-samples-1.webp'
};

const Services = ({ onOpenQuote }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Services Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/EURO-GOLD-26-1-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Certified Mineral Value Addition</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our Refining & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">Trading Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            State-of-the-art metallurgical infrastructure in Wakiso, providing high-precision chemical refining, certified fire assaying, induction smelting, and international bullion export solutions.
          </p>
        </div>
      </section>

      {/* Services Navigation Strip */}
      <div className="sticky top-20 z-30 bg-charcoal-900/95 backdrop-blur-md border-b border-white/10 py-4 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 overflow-x-auto text-xs font-bold uppercase tracking-wider">
          {servicesData.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="text-gray-400 hover:text-gold-400 transition-colors whitespace-nowrap"
            >
              {svc.title}
            </a>
          ))}
        </div>
      </div>

      {/* Detailed Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {servicesData.map((svc, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={svc.id}
              id={svc.id}
              className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-charcoal-900/60 border border-gold-500/20 hover:border-gold-400/40 transition-all duration-300 shadow-2xl"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Side (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
                      {getServiceIcon(svc.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">Service 0{index + 1}</span>
                      <p className="text-xs text-gray-400 font-medium">{svc.tagline}</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-white">
                    {svc.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-300">Technical Highlights & Standards:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-charcoal-950/80 border border-white/5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenQuote(svc.title)}
                      className="px-6 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-gold-500/20"
                    >
                      <span>Request {svc.title} Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={companyInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full bg-charcoal-950 hover:bg-charcoal-800 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Imagery Side (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative group">
                    <img
                      src={serviceImages[svc.id] || '/images/EURO-GOLD-12.jpg'}
                      alt={svc.title}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-charcoal-950/90 border border-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Compliant with BoU & DGSM Regulations</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-charcoal-900 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Custom Metallurgical & Bullion Requirements?
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Our specialized trading desk assists institutional clients with large consignments, custom casting sizes, and secure bonded transport across Africa, Dubai, and Europe.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuote('Custom Consignment')}
              className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Request Custom Consultation
            </button>
            <Link
              to="/contact-us"
              className="px-8 py-3.5 rounded-full bg-charcoal-950 hover:bg-charcoal-800 text-white border border-white/10 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Visit Our Wakiso Facility
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
