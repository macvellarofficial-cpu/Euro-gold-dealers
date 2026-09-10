import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Compass, MapPin, CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Layers, Award, Pickaxe, Mountain
} from 'lucide-react';
import { projectsData, companyInfo } from '../data/siteData';

const Projects = ({ onOpenQuote }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/WhatsApp-Image-2026-08-21-at-12.48.13-AM-1.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Mineral Concessions & Exploration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Strategic Mining <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">Concessions</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Exploring, developing, and operating high-grade gold concessions across Uganda with modern gravity recovery technology and community co-development.
          </p>
        </div>
      </section>

      {/* Flagship Concession Highlight: Yumbe */}
      <section className="py-20 relative bg-charcoal-900/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 border-2 border-gold-500/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/40 text-xs font-bold uppercase tracking-wider">
                  Flagship Concession Asset
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                  79.8 km² Yumbe Gold Project (Northern Uganda)
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Situated in the prolific West Nile greenstone belt, the Yumbe concession represents one of the largest contiguous licensed gold exploration and production blocks in Uganda. With extensive quartz-vein systems and alluvial terraces, the project targets 80 kg in monthly bullion output.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-2">
                  <div className="p-3 rounded-xl bg-charcoal-950 border border-white/10">
                    <p className="text-xs text-gray-400">Total Area</p>
                    <p className="text-xl font-bold text-gold-400">79.8 km²</p>
                  </div>
                  <div className="p-3 rounded-xl bg-charcoal-950 border border-white/10">
                    <p className="text-xs text-gray-400">Production Goal</p>
                    <p className="text-xl font-bold text-gold-400">80 kg / mo</p>
                  </div>
                  <div className="p-3 rounded-xl bg-charcoal-950 border border-white/10">
                    <p className="text-xs text-gray-400">Miners Supported</p>
                    <p className="text-xl font-bold text-gold-400">200+ Local</p>
                  </div>
                  <div className="p-3 rounded-xl bg-charcoal-950 border border-white/10">
                    <p className="text-xs text-gray-400">DGSM License</p>
                    <p className="text-xl font-bold text-emerald-400">Active</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenQuote('Yumbe Concession Investment')}
                    className="px-6 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg shadow-gold-500/20"
                  >
                    <span>Request Yumbe Geological Data</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={companyInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-white border border-white/10 text-xs uppercase tracking-wider font-semibold"
                  >
                    Speak with Chief Geologist
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl relative">
                  <img
                    src="/images/14d46afb-7c32-4cfc-bc4a-76ae6065b5db.jpeg"
                    alt="Yumbe Mining Concession"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-charcoal-950/90 border border-white/10 rounded-xl backdrop-blur-md">
                    <p className="text-xs font-bold text-white">Yumbe District, Northern Uganda</p>
                    <p className="text-[11px] text-gray-400">Equipped with mechanized gravity centrifugal separators</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid (All 4 Projects) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Regional Footprint</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            All Mining & Exploration Operations
          </h2>
          <p className="text-sm text-gray-300">
            From greenfield bedrock drilling in Karamoja to commercial alluvial gravity plants in West Nile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="scroll-mt-32 rounded-3xl bg-charcoal-900/60 border border-gold-500/20 hover:border-gold-400/50 overflow-hidden transition-all shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/90 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase backdrop-blur-sm">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-charcoal-950/90 border border-white/10 text-emerald-400 text-xs font-bold uppercase backdrop-blur-sm">
                    {project.status}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-400">
                    <MapPin className="w-4 h-4" />
                    <span>{project.area}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Operational Highlights:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 p-2 rounded-lg bg-charcoal-950 border border-white/5 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote(`${project.title} Inquiry`)}
                  className="px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-charcoal-950 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Inquire on Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs text-gray-400 font-mono">DGSM Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental & Community Stewardship */}
      <section className="py-20 bg-charcoal-900 border-t border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Ethical Mining & Land Rehabilitation
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            All Euro Gold mining concessions operate under approved Environmental and Social Impact Assessments (ESIA). We commit 10% of operational reserves to progressive backfilling, reforestation, and potable water wells for local communities in Yumbe, Abim, and Kaabong.
          </p>
          <div className="pt-2">
            <Link
              to="/about-us"
              className="px-8 py-3.5 rounded-full bg-charcoal-950 hover:bg-charcoal-800 text-gold-400 border border-gold-500/30 font-bold text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              <span>Learn About Our ESG Policies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
