/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, Award, Scale, Navigation, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Landmark } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onEstimateValuation: () => void;
}

export default function HomePage({ onNavigate, onEstimateValuation }: HomePageProps) {
  
  const services = [
    {
      id: 'sourcing',
      title: 'Gold Sourcing & Mining liaison',
      description: 'Acquiring high-purity unrefined alluvial gold dust and dore bars directly from authorized artisanal miners and regional partnerships.',
      benefits: ['Direct miners alliance', 'Strict background compliance checks', 'Pre-audited supply metrics'],
      icon: <Landmark className="w-5 h-5 text-gold-500" />,
    },
    {
      id: 'refinery',
      title: 'Secure Refinery Coordination',
      description: 'Facilitating top-tier unrefined smelting and casting. Partnered with the absolute best refining facilities in Kampala and internationally.',
      benefits: ['High-capacity induction furnace partners', 'Conversion to Swiss 999.9 bar purity', 'Fully sealed transport guarantees'],
      icon: <Sparkles className="w-5 h-5 text-gold-500" />,
    },
    {
      id: 'assaying',
      title: 'Spectroscopy & Laboratory Assaying',
      description: 'Accurate and rapid mineral density testing. Precise fire assay, XRF scanner analysis, and chemical cupellation procedures done before your eyes.',
      benefits: ['X-Ray Fluorescence scanner verification', 'Certified stamped assay records', 'True micro-weight scale accuracy'],
      icon: <Scale className="w-5 h-5 text-gold-500" />,
    },
    {
      id: 'documentation',
      title: 'Ugandan legal Export Documentation',
      description: 'Navigating mineral export clearances. We prepare Certificate of Origin documents, Kampala Ministry of Energy clearance stamps, and airline logistics.',
      benefits: ['Dodd-Frank Compliance Certificates', 'Official Uganda Customs clearance priority', 'Registered transit security bond'],
      icon: <Shield className="w-5 h-5 text-gold-500" />,
    },
  ];

  return (
    <div id="home-view-grid" className="space-y-16">
      
      {/* Premium Hero Banner Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black rounded-3xl border border-neutral-900 p-8 md:p-12 text-center md:text-left shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3.5 py-1.5 rounded-full text-gold-400 font-mono text-[10px] font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span>Certified Gold Sourcing — Licensed Kampala Exporters</span>
            </div>

            <h1 className="text-white font-extrabold font-display leading-[1.1] text-3xl md:text-5xl tracking-normal">
              Ethical Sourcing & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-amber-500 font-extrabold">
                Secure Kampala Refining
              </span>
            </h1>

            <p className="text-gray-400 leading-relaxed text-sm max-w-xl">
              Euro Gold Dealers provides premium, transparent precious metals brokerage, fire-assaying verification, refinery coordination, and legal mineral clearance. Operating securely out of Kampala, Uganda under strict ethical mining guidelines.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={() => onNavigate('booking')}
                className="bg-gold-500 hover:bg-gold-400 text-black py-3 px-6 rounded-xl font-bold font-display text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition cursor-pointer"
              >
                <span>Book Vault Intake Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onEstimateValuation}
                className="bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-6 rounded-xl font-bold font-display text-xs uppercase tracking-wider border border-neutral-800 hover:border-gold-500/40 flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>Calculate Value</span>
                <Scale className="w-4 h-4 text-gold-500" />
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Visual Highlights list - High-Contrast Dark Cards */}
            <div className="p-4 bg-neutral-900/80 rounded-2xl border border-neutral-800 flex items-start gap-3">
              <div className="p-2 bg-gold-500/10 rounded-xl text-gold-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold font-display text-sm">Pre-Entry Security Clearance</h4>
                <p className="text-xs text-gray-400 mt-1">Our Nakasero HQ operates with fully armed security checkpoints and direct customs police escorts.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-900/80 rounded-2xl border border-neutral-800 flex items-start gap-3">
              <div className="p-2 bg-gold-500/10 rounded-xl text-gold-500">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold font-display text-sm">True Weight and Purity Stamps</h4>
                <p className="text-xs text-gray-400 mt-1">Transparent fire laboratory methods ensure unrefined gold values match global LBMA bullion levels exactly.</p>
              </div>
            </div>

            <div className="p-4 bg-neutral-900/80 rounded-2xl border border-neutral-800 flex items-start gap-3">
              <div className="p-2 bg-gold-500/10 rounded-xl text-gold-500">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold font-display text-sm">International Export Channel</h4>
                <p className="text-xs text-gray-400 mt-1">Weekly air-freight transport lines directly from Entebbe Airport (EBB) to major global refining centers.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Corporate Numbers Stats Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
          <div className="space-y-1">
            <span className="text-gold-500 font-mono font-extrabold text-2xl tracking-tight">12+ Years</span>
            <span className="text-gray-400 block pb-0.5 font-medium">Licensed Exporter</span>
          </div>
          <div className="space-y-1 md:border-l border-neutral-900">
            <span className="text-white font-mono font-extrabold text-2xl tracking-tight">99.98%</span>
            <span className="text-gray-400 block pb-0.5 font-medium">Purity Precision Rate</span>
          </div>
          <div className="space-y-1 md:border-l border-neutral-900">
            <span className="text-gold-500 font-mono font-extrabold text-2xl tracking-tight">3,400+</span>
            <span className="text-gray-400 block pb-0.5 font-medium">Verified Assays Scaled</span>
          </div>
          <div className="space-y-1 md:border-l border-neutral-900">
            <span className="text-white font-mono font-extrabold text-2xl tracking-tight">No-Conflict</span>
            <span className="text-gray-400 block pb-0.5 font-medium">Sourcing Guarantee</span>
          </div>
        </div>

      </section>

      {/* Services Showcase - Sourcing, Refining, Assaying, Documentation */}
      <section id="services-grid-anchors" className="space-y-10">
        <div className="text-center space-y-2">
          <span className="text-gold-500 uppercase tracking-widest font-mono text-[10px] font-bold block"> Kampala Operations Suite </span>
          <h2 className="text-white text-2xl md:text-3xl font-extrabold font-display tracking-tight">Key Sourcing & Logistics Services</h2>
          <p className="text-xs text-gray-400 max-w-lg mx-auto">
            Providing fully audited gold transactions backed by rigorous technology, advanced science, and complete regulatory alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between hover:border-gold-500/30 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-neutral-900 rounded-xl group-hover:bg-gold-500/10 group-hover:text-gold-500/90 transition-all border border-neutral-800">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-bold font-display text-base tracking-wide">{service.title}</h3>
                </div>

                <p className="text-gray-400 leading-relaxed text-xs">{service.description}</p>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-gray-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-gray-500 font-mono text-[10px] font-bold uppercase">Section 0{idx + 1}</span>
                <button
                  onClick={() => onNavigate('booking')}
                  className="text-gold-500 hover:text-gold-400 font-semibold font-display text-xs flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Book and Coordinate</span>
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Trust & Community / Security Protocol Features banner */}
      <section className="bg-neutral-950/60 p-8 rounded-3xl border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950 to-black select-none">
        
        <div className="lg:col-span-7 space-y-4">
          <span className="text-gold-500 font-bold uppercase font-mono tracking-widest text-[9px] block">Security Clearance & Kampala Escorts</span>
          <h3 className="text-white font-extrabold font-display text-xl md:text-2xl tracking-wide leading-snug">
            Safe Mineral Sourcing & Armored Security Patrols
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs">
            At Euro Gold Dealers, physical safety of cargo transit is paramount. We understand the vulnerabilities of precious metal transit in East Africa. Thus, we maintain official partnerships with vetted regional transport divisions (G4S and armored security divisions) to facilitate guaranteed passage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300 font-medium pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> Fully monitored CCTV vault intake slots
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> Custom Airport-to-Vault armored transfers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> Micro-weight calibrated testing scales
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" /> Absolute customer asset privacy NDA
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-black p-5 rounded-2xl border border-neutral-800 space-y-4 relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="bg-amber-950/40 border border-amber-800 text-amber-500 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase">
              Emergency Signal Line
            </span>
            <p className="text-white font-display font-bold text-sm tracking-wide">Secure Kampala Gateway Desk</p>
            <p className="text-xs text-gray-400">
              Need immediate airport escort or clearing documentation support? Direct transit communications can be initiated below.
            </p>
            <div className="pt-2 font-mono text-base font-bold text-gold-500 space-y-1">
              <p>+256 (0) 772 121 990</p>
              <p className="text-xs text-gray-400 font-sans font-normal">24/7 Secure Transit Response Office</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 text-xs py-2 px-3 rounded-xl transition cursor-pointer text-center font-bold"
            >
              Request Access Directions
            </button>
          </div>
        </div>

      </section>

      {/* Vetted Customer Testimonials */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-gold-500 font-bold uppercase font-mono tracking-widest text-[9px] block">Client Vetting Records</span>
          <h3 className="text-white font-extrabold font-display text-xl md:text-2xl tracking-wide">Client Testimonials & Safe Cargo Records</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">See how we assist overseas gold trade and refining partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <p className="text-gray-300 leading-relaxed italic">
              "We purchased unrefined gold dore bars from Euro Gold Dealers. They facilitated laboratory fire assays transparently and handled Entebbe customs documentation smoothly. A reliable asset in Kampala."
            </p>
            <div className="border-t border-neutral-900 pt-3.5 mt-5 flex items-center gap-2.5">
              <span className="bg-gold-500/10 text-gold-400 font-bold font-display w-8 h-8 rounded-full flex items-center justify-center border border-gold-500/20">
                AK
              </span>
              <div>
                <span className="text-white font-semibold block">Al-Kasimi Minerals</span>
                <span className="text-gray-500 block text-[10px]">Dubai Gold Exchange Partner</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <p className="text-gray-300 leading-relaxed italic">
              "Assaying was incredibly fast. We sat with their laboratory desk techs at the Nakasero Road offices while they did spectrometer density analysis on our alluvial gold sample. 10/10 trust factor."
            </p>
            <div className="border-t border-neutral-900 pt-3.5 mt-5 flex items-center gap-2.5">
              <span className="bg-gold-500/10 text-gold-400 font-bold font-display w-8 h-8 rounded-full flex items-center justify-center border border-gold-500/20">
                NM
              </span>
              <div>
                <span className="text-white font-semibold block">Nile Mining Cooperative</span>
                <span className="text-gray-500 block text-[10px]">Nakasero Sourcing Member</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <p className="text-gray-300 leading-relaxed italic">
              "Their expertise in preparing mineral export documents is unmatched in East Africa. Every export clearance complied perfectly with Ministry of Energy standards. Zero customs delay."
            </p>
            <div className="border-t border-neutral-900 pt-3.5 mt-5 flex items-center gap-2.5">
              <span className="bg-gold-500/10 text-gold-400 font-bold font-display w-8 h-8 rounded-full flex items-center justify-center border border-gold-500/20">
                SL
              </span>
              <div>
                <span className="text-white font-semibold block">Sigurd Larsen Swiss SA</span>
                <span className="text-gray-500 block text-[10px]">Zurich Smelter Representative</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
