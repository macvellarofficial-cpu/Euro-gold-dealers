import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Leaf, Flame, ArrowRight, Play, CheckCircle2, 
  Award, Globe, Users, TrendingUp, ChevronDown, ChevronRight, 
  MapPin, Phone, Mail, Clock, Sparkles, ExternalLink, FileText, 
  Compass, Gem, DollarSign, Cog, FileCheck
} from 'lucide-react';
import { 
  companyInfo, heroSlides, keyFeatures, trustedPartners, 
  companyStats, pieChartStats, servicesData, projectsData, 
  communityPartners, blogArticles, faqList, accountSteps 
} from '../data/siteData';

// Dynamic icon mapper helper
const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Flame': return <Flame className="w-6 h-6" />;
    case 'FileCheck': return <FileCheck className="w-6 h-6" />;
    case 'Cog': return <Cog className="w-6 h-6" />;
    case 'DollarSign': return <DollarSign className="w-6 h-6" />;
    case 'Gem': return <Gem className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'Compass': return <Compass className="w-6 h-6" />;
    default: return <Sparkles className="w-6 h-6" />;
  }
};

const getKeyFeatureIcon = (iconName) => {
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-gold-400" />;
    case 'Leaf': return <Leaf className="w-8 h-8 text-emerald-400" />;
    case 'Flame': return <Flame className="w-8 h-8 text-amber-400" />;
    default: return <Sparkles className="w-8 h-8 text-gold-400" />;
  }
};

const Home = ({ onOpenQuote, onOpenVideo }) => {
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // FAQ Accordion State (open index 0 by default)
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Testimonial Partner Tab
  const [activePartner, setActivePartner] = useState(0);

  return (
    <div className="bg-charcoal-950 text-white min-h-screen overflow-hidden">
      
      {/* =========================================================================
          1. HERO SECTION & SLIDER WITH 3 FLOATING OVERLAPPING CARDS
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
        {/* Slide Background Images */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-900/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-black/50" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Government & Refinery Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-gold-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold">
                {heroSlides[currentSlide].badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-md">
              {heroSlides[currentSlide].title.includes('•') ? (
                <>
                  <span>{heroSlides[currentSlide].title.split('•')[0]}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500 block">
                    {heroSlides[currentSlide].title.split('•')[1]}
                  </span>
                </>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gold-400">
                  {heroSlides[currentSlide].title}
                </span>
              )}
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to={heroSlides[currentSlide].ctaPrimaryLink}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-charcoal-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-gold-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>{heroSlides[currentSlide].ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {heroSlides[currentSlide].ctaSecondaryLink.startsWith('http') ? (
                <a
                  href={heroSlides[currentSlide].ctaSecondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-white border border-gold-500/30 hover:border-gold-400 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-sm flex items-center gap-2"
                >
                  <span>{heroSlides[currentSlide].ctaSecondary}</span>
                </a>
              ) : (
                <Link
                  to={heroSlides[currentSlide].ctaSecondaryLink}
                  className="px-6 py-3.5 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-white border border-gold-500/30 hover:border-gold-400 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-sm flex items-center gap-2"
                >
                  <span>{heroSlides[currentSlide].ctaSecondary}</span>
                </Link>
              )}

              <button
                onClick={onOpenVideo}
                className="p-3.5 rounded-full bg-white/10 hover:bg-gold-500/20 border border-white/20 text-white hover:text-gold-400 transition-all flex items-center gap-2"
                title="Watch Refinery Video Tour"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
            </div>

            {/* Slider Dots Indicator */}
            <div className="flex items-center gap-3 pt-6">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* 3 Floating Feature Cards Overlapping Bottom */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFeatures.map((feat) => (
              <div
                key={feat.id}
                className="bg-charcoal-900/90 border border-gold-500/30 hover:border-gold-400 rounded-2xl p-7 shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-charcoal-950 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold-500/40 transition-all">
                    {getKeyFeatureIcon(feat.icon)}
                  </div>
                  <h2 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {feat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-white/5">
                  <Link
                    to={feat.link}
                    className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider group-hover:text-gold-300 transition-colors"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for overlapping cards */}
      <div className="h-28" />

      {/* =========================================================================
          2. INSTITUTIONAL & GOV PARTNERS TICKER RIBBON
      ========================================================================= */}
      <section className="py-12 border-y border-white/10 bg-charcoal-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Recognized & Certified by Leading National & Global Institutions
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="ticker-track flex items-center gap-10 whitespace-nowrap">
            {[...trustedPartners, ...trustedPartners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-charcoal-950/80 border border-white/5 hover:border-gold-500/40 transition-colors group shrink-0"
              >
                {partner.logoImg ? (
                  <img 
                    src={partner.logoImg} 
                    alt={partner.name} 
                    className="h-8 w-auto max-w-[90px] object-contain filter brightness-95 contrast-125" 
                  />
                ) : (
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400"></div>
                )}
                <div>
                  <p className="text-xs font-bold text-gray-200 group-hover:text-gold-300 font-mono tracking-wider">
                    {partner.logoText}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase">
                    {partner.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHO WE ARE & VIDEO SHOWCASE SECTION
      ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                About Euro Gold Dealers
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Euro Gold Dealers is one of Uganda’s most distinguished and licensed mineral trading, refining, and export facilitation firms. Headquartered in Wakiso / Kampala with regional trading desks across the Great Lakes region and the United Arab Emirates, we bridge local mineral extraction with global bullion markets.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                As an official supplier and certified refinery partner to the Bank of Uganda under the national gold reserve program, our high-capacity induction furnaces and XRF spectrometry laboratories guarantee unmatched 99.9% purity and strict international compliance.
              </p>

              {/* Stats Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {companyStats.map((st, i) => (
                  <div key={i} className="p-4 rounded-xl bg-charcoal-900 border border-white/10 text-center">
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-400 mb-1">{st.value}</p>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">{st.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about-us"
                  className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/partners-licenses"
                  className="px-6 py-3 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gray-300 hover:text-white border border-white/10 text-xs uppercase tracking-wider transition-colors"
                >
                  View DGSM Licenses
                </Link>
              </div>
            </div>

            {/* Right: Video / Imagery Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src="/images/Proud-to-showcase-our-commitment-to-precision-and-world-class-refining.At-Euro-Gold-Refinery-SMC.jpg"
                  alt="Euro Gold Refinery Facility"
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/20 transition-colors" />

                {/* Play Button Trigger */}
                <button
                  onClick={onOpenVideo}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 active:scale-95 z-10"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-charcoal-950/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Uganda Refining & Export Operations</p>
                      <p className="text-[11px] text-gray-400">Plot 38 Kitala, Off Entebbe Rd, Wakiso District</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. STRATEGIC GOVERNMENT & INSTITUTIONAL PARTNERSHIPS
      ========================================================================= */}
      <section className="py-20 bg-charcoal-900/60 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
              <Award className="w-4 h-4" />
              <span>Institutional Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Official Partner to Bank of Uganda & Ministry of Energy
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Euro Gold Dealers plays a pivotal role in Uganda’s national economic formalization, ensuring local artisanal and industrial mineral production complies with international bullion standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BoU Partnership Card */}
            <div className="p-8 rounded-2xl bg-charcoal-950 border border-gold-500/30 hover:border-gold-400 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  Sovereign Reserve Partner
                </div>
                <BuildingBankIcon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                Bank of Uganda Domestic Gold Reserve Program
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Euro Gold Dealers signed landmark supply agreements with the Bank of Uganda (BoU) to purchase and refine domestic gold to build sovereign gold reserves. This national strategy mitigates currency depreciation, formalizes artisanal gold miners, and strengthens foreign exchange reserves.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Regular supply of 99.9% fine certified gold bullion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Eliminating illegal cross-border smuggling networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Providing prompt liquidity and fair market pricing to local miners</span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  to="/partners-licenses"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300"
                >
                  <span>Learn about BoU Agreement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Ministry of Energy & Mineral Development Card */}
            <div className="p-8 rounded-2xl bg-charcoal-950 border border-gold-500/30 hover:border-gold-400 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  DGSM Regulatory Compliance
                </div>
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                Ministry of Energy and Mineral Development
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Operating under the Directorate of Geological Survey and Mines (DGSM), Euro Gold Dealers holds 9 mineral licenses and 10 operational certifications, strictly adhering to the 2022 Mining and Minerals Act for complete traceability and tax governance.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Official export clearance and URA royalty settlement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Mercury-free and environmentally scrubbed processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Formal conflict-free regional mineral tracking certificate</span>
                </li>
              </ul>
              <div className="pt-3">
                <Link
                  to="/partners-licenses"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300"
                >
                  <span>View All 9 DGSM Licenses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. INVESTMENT OPPORTUNITIES & 79.8 KM² YUMBE MINING SITE
      ========================================================================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 border border-gold-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-wider">
                  Flagship Mining Asset
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                  Investment Opportunities: 79.8 km² Gold Concession in Yumbe
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Euro Gold Dealers holds a premier 79.8 km² gold exploration and mining concession in Yumbe District, Northern Uganda. The site contains proven high-yield alluvial and quartz-vein gold reserves, equipped with mechanized processing machinery and full environmental approvals.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/10">
                    <p className="text-xs text-gray-400">Total Concession</p>
                    <p className="text-lg font-bold text-gold-400">79.8 km²</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/10">
                    <p className="text-xs text-gray-400">Monthly Target</p>
                    <p className="text-lg font-bold text-gold-400">80 kg</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/10">
                    <p className="text-xs text-gray-400">Methodology</p>
                    <p className="text-lg font-bold text-gold-400">Gravity Recovery</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to="/projects#yumbe-project"
                    className="px-6 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-gold-500/20"
                  >
                    <span>Concession Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => onOpenQuote('Concession Investment / Exploration')}
                    className="px-6 py-3.5 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white border border-gold-500/40 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Request Investor Prospectus
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative">
                  <img
                    src="/images/WhatsApp-Image-2026-08-21-at-12.48.13-AM-1.jpeg"
                    alt="Yumbe Mining Concession Site"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-charcoal-950/90 border border-white/10 p-3 rounded-xl backdrop-blur-md">
                    <p className="text-xs font-bold text-white">Yumbe District, Northern Uganda</p>
                    <p className="text-[11px] text-gray-400">Fully licensed under DGSM & National Environmental Authority</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. REFINERY & MINERAL SERVICES (ALL 7 SERVICES)
      ========================================================================= */}
      <section className="py-24 bg-charcoal-900/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <Cog className="w-4 h-4" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Comprehensive Mineral Services
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                From high-purity chemical refining and fire assaying to international customs clearing and mineral investment consultancy.
              </p>
            </div>
            <div>
              <Link
                to="/services"
                className="px-6 py-3 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 border border-gold-500/30 hover:border-gold-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 7 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="bg-charcoal-950 border border-gold-500/20 hover:border-gold-400 rounded-2xl p-7 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-charcoal-900 border border-white/10 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 group-hover:border-gold-500/40 transition-colors">
                    {getServiceIcon(svc.icon)}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gold-400/90 font-medium mb-3">
                    {svc.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6 text-xs text-gray-400">
                    {svc.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/services#${svc.id}`}
                    className="text-xs font-bold text-gray-300 hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onOpenQuote(svc.title)}
                    className="px-3.5 py-1.5 rounded-full bg-gold-400/10 hover:bg-gold-400 hover:text-charcoal-950 text-gold-400 text-xs font-semibold transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. EXCELLENCE ACROSS BORDERS - RADIAL PIE CHARTS (75%, 87%, 95%, 92%)
      ========================================================================= */}
      <section className="py-24 relative overflow-hidden bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
              <TrendingUp className="w-4 h-4" />
              <span>Proven Performance Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Excellence Across Borders
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Audited operational statistics demonstrating our scale, global distribution, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pieChartStats.map((stat, idx) => {
              // SVG circular progress calculation: r=45, circumference = 2 * PI * 45 = 282.74
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (stat.percent / 100) * circumference;

              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-charcoal-900/60 border border-gold-500/20 hover:border-gold-400/50 text-center transition-all group hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        className="text-charcoal-800"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                      />
                      {/* Progress circle with gold stroke */}
                      <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        className="text-gold-400 group-hover:text-gold-300 transition-all duration-1000 ease-out"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                        {stat.percent}%
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. MINING PROJECTS SHOWCASE
      ========================================================================= */}
      <section className="py-24 bg-charcoal-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <Compass className="w-4 h-4" />
                <span>Exploration & Operations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Strategic Mining Projects
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                Discover our licensed mining and mineral exploration operations spanning Northern and Eastern Uganda.
              </p>
            </div>
            <div>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectsData.map((prj) => (
              <div
                key={prj.id}
                className="bg-charcoal-950 border border-white/10 hover:border-gold-500/40 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-charcoal-950/80 border border-gold-500/40 text-gold-400 text-[10px] font-bold uppercase backdrop-blur-sm">
                      {prj.area}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      {prj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                      {prj.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {prj.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/projects#${prj.id}`}
                    className="w-full py-2.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 border border-white/5 hover:border-gold-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Explore Project</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. COMMUNITY & ARTISANAL MINING PARTNERS
      ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <Users className="w-4 h-4" />
                <span>Empowering Artisanal Miners</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Community Partnerships Across Uganda
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Euro Gold Dealers works hand-in-hand with regional mining cooperatives in Mubende, Kakooka, Yumbe, and Busia. By providing clean gravity processing, zero mercury education, and fair trade assaying, we ensure miners receive maximum value for their hard work.
              </p>

              {/* Cooperative Tab Selector */}
              <div className="space-y-3 pt-2">
                {communityPartners.map((cp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePartner(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      activePartner === idx
                        ? 'bg-charcoal-900 border-gold-400 text-white shadow-lg'
                        : 'bg-charcoal-950 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-bold text-white">{cp.name}</p>
                      <p className="text-xs text-gold-400">{cp.role}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${activePartner === idx ? 'text-gold-400 translate-x-1' : 'text-gray-500'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Testimonial Display */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-900/80 border border-gold-500/30 relative backdrop-blur-md shadow-2xl">
                <div className="text-5xl font-serif text-gold-400/40 mb-4">“</div>
                <blockquote className="text-lg sm:text-xl text-gray-200 font-serif italic leading-relaxed mb-6">
                  {communityPartners[activePartner].quote}
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400 font-bold text-lg">
                    {communityPartners[activePartner].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{communityPartners[activePartner].name}</p>
                    <p className="text-xs text-gold-400">{communityPartners[activePartner].role}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          10. RECENT NEWS & MEDIA ARTICLES
      ========================================================================= */}
      <section className="py-24 bg-charcoal-900/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <FileText className="w-4 h-4" />
                <span>Industry Insights & Press</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Recent News & Publications
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                Official press releases, sovereign bullion contracts, and regulatory updates in East Africa.
              </p>
            </div>
            <div>
              <Link
                to="/blog"
                className="px-6 py-3 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 border border-gold-500/30 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogArticles.map((art) => (
              <article
                key={art.id}
                className="bg-charcoal-950 border border-white/10 hover:border-gold-500/40 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-charcoal-950/80 border border-white/10 text-gold-400 text-[10px] font-bold">
                      {art.date}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      {art.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/blog#${art.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (10-ITEM ACCORDION)
      ========================================================================= */}
      <section className="py-24 relative bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Answers to Common Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-300">
              Learn about our refining operations, Bank of Uganda partnerships, legal compliance, and bullion export procedures.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {faqList.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-charcoal-900/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 hover:text-gold-400 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fade-in">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center p-6 rounded-2xl bg-charcoal-900 border border-gold-500/20">
            <p className="text-xs text-gray-300 mb-3">Have a question not covered here?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Ask on WhatsApp</span>
              </a>
              <Link
                to="/contact-us"
                className="px-5 py-2.5 rounded-full bg-charcoal-800 hover:bg-charcoal-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Contact Trading Desk
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          12. ACCOUNT HOLDERS ONBOARDING 4-STEP BANNER
      ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">Institutional Access</span>
            <h2 className="text-3xl font-serif font-bold text-white">How to Become an Account Holder</h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Join leading international gold buyers, commercial miners, and institutional trading houses with a verified Euro Gold corporate account.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accountSteps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-charcoal-950 border border-white/10 relative">
                <span className="text-3xl font-serif font-bold text-gold-400/30 block mb-2">{s.step}</span>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/account-holders"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest hover:shadow-xl hover:shadow-gold-500/20 transition-all inline-flex items-center gap-2"
            >
              <span>Apply for Account Holder ID</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          13. GET IN TOUCH & OFFICE CONTACT CARDS
      ========================================================================= */}
      <section className="py-24 relative bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info & Offices (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-400">
                <MapPin className="w-4 h-4" />
                <span>Visit Our Facilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Get In Touch With Euro Gold Dealers
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you are selling raw mined dore gold, seeking certified Bank of Uganda refinery services, or establishing international bullion logistics, our executive team is ready to serve you.
              </p>

              {/* Head Office Card */}
              <div className="p-6 rounded-2xl bg-charcoal-900 border border-gold-500/30 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  {companyInfo.headOffice.title}
                </p>
                <div className="space-y-2 text-xs text-gray-300">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{companyInfo.headOffice.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{companyInfo.phonePrimary} / {companyInfo.phoneSecondary}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{companyInfo.emailPrimary}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{companyInfo.workingHoursWeekday}</span>
                  </p>
                </div>
              </div>

              {/* Regional Footprint Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-charcoal-900/60 border border-white/10 text-xs">
                  <p className="font-bold text-white">Dubai Bullion Desk</p>
                  <p className="text-gray-400 text-[11px]">Business Bay, Dubai</p>
                </div>
                <div className="p-3.5 rounded-xl bg-charcoal-900/60 border border-white/10 text-xs">
                  <p className="font-bold text-white">Kenya Office</p>
                  <p className="text-gray-400 text-[11px]">Westlands, Nairobi</p>
                </div>
                <div className="p-3.5 rounded-xl bg-charcoal-900/60 border border-white/10 text-xs">
                  <p className="font-bold text-white">DRC Office</p>
                  <p className="text-gray-400 text-[11px]">Commercial Center, Bunia</p>
                </div>
              </div>

            </div>

            {/* Right: Embedded Interactive Map (6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 h-full min-h-[380px] shadow-2xl relative">
                <iframe
                  title="Euro Gold Dealers Head Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.27438466103!2d32.48270831640625!3d0.06173099999999981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d853e5e6e76cf%3A0x6b17a1e1e92d7768!2sEntebbe%2C%20Uganda!5e0!3m2!1sen!2sug!4v1710000000000!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-3 left-3 bg-charcoal-950/90 border border-white/10 px-3 py-2 rounded-lg text-xs backdrop-blur-sm">
                  <p className="font-bold text-white">Plot 38 Kitala, Off Entebbe Rd, Wakiso</p>
                  <p className="text-gray-400 text-[10px]">15 mins from Entebbe International Airport</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

// Helper SVG Icon for bank building
const BuildingBankIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
  </svg>
);

export default Home;
