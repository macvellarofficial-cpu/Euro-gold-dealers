/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Navigation, Compass, ShieldAlert, KeyRound, Building } from 'lucide-react';

export default function MapContainer() {
  const [mapType, setMapType] = useState<'osm' | 'blueprint'>('osm');

  // Coordinates of Nakasero Kampala
  const latitude = 0.3195;
  const longitude = 32.5761;
  const zoom = 16;
  const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005}%2C${latitude - 0.003}%2C${longitude + 0.005}%2C${latitude + 0.003}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div id="office-location-map" className="bg-black/90 p-1 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-neutral-950 px-6 py-4 flex flex-wrap items-center justify-between border-b border-neutral-900 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-semibold font-display text-base tracking-wide">Secure Kampala Office</h4>
            <p className="text-xs text-gray-400">Plot 24, Nakasero Road, Nakasero Lane, Kampala, Uganda</p>
          </div>
        </div>

        <div className="flex gap-2 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => setMapType('osm')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              mapType === 'osm' ? 'bg-gold-500 text-black shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            Satellite Map
          </button>
          <button
            onClick={() => setMapType('blueprint')}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              mapType === 'blueprint' ? 'bg-gold-500 text-black shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            Security Access Layout
          </button>
        </div>
      </div>

      <div className="relative h-[320px] bg-neutral-950">
        {mapType === 'osm' ? (
          <div className="w-full h-full relative">
            <iframe
              title="Kampala Office Location"
              width="100%"
              height="100%"
              style={{ border: 'none', filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              src={iframeSrc}
            />
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-[10px] text-gray-400 px-2 py-0.5 rounded border border-neutral-800">
              © OpenStreetMap contributors
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-slate-950 p-6 flex flex-col justify-between font-mono relative overflow-hidden">
            {/* Grid background for blueprint feel */}
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            <div className="flex justify-between items-start z-10">
              <div className="text-emerald-400 text-[10px] flex items-center gap-1.5 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-800/40">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span>GRID: 0.3195° N, 32.5761° E</span>
              </div>
              <div className="text-[10px] text-amber-500 bg-amber-950/40 border border-amber-800/40 px-2 py-1 rounded flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>HIGH SECURITY PERIMETER</span>
              </div>
            </div>

            <div className="my-auto text-center z-10 px-4">
              <div className="inline-flex p-3 bg-gold-400/10 border border-gold-400/30 rounded-full text-gold-400 mb-2">
                <Building className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-white tracking-wide font-display mt-1">EURO GOLD HQ - FORTRESS BUILDING</p>
              <p className="text-xs text-gray-400 mt-1.5 max-w-md mx-auto leading-relaxed">
                Vault, Assaying Laboratory & Secured Loading Bay. Pre-clearance and background checks required for all visitor entry.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-between z-10 text-[10px] text-gray-500 border-t border-neutral-900 pt-3">
              <span className="flex items-center gap-1">
                <KeyRound className="w-3.5 h-3.5 text-gold-500" /> Armed Escort Available From Entebbe Airport
              </span>
              <span className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-blue-400" /> Heli-pad Landing Zone - Nakasero Base
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-neutral-950 p-5 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-neutral-950 text-xs">
        <div className="border-r border-neutral-900/60 pr-2">
          <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold block mb-1">Secure Shipping Address</span>
          <span className="text-white font-medium">Euro Gold Dealers Ltd</span>
          <p className="text-gray-400 mt-0.5">Plot 24 Nakasero Rd, Nakasero Lane, Kampala General Post Office P.O. Box 7183, Kampala, Uganda</p>
        </div>
        <div className="border-r border-neutral-900/60 pr-2">
          <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold block mb-1">Transit / Airport Escorts</span>
          <span className="text-white font-medium">Armed Airport Clearance Coordinator</span>
          <p className="text-gray-400 mt-0.5">Customized Armored Transport from Entebbe International Airport (EBB) directly to Kampala Vaults.</p>
        </div>
        <div>
          <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold block mb-1">Secure Hotline</span>
          <p className="text-gold-400 font-bold font-mono text-sm leading-6">+256 (0) 414 492 882</p>
          <p className="text-gold-400/80 font-bold font-mono text-sm leading-5">+256 (0) 772 121 990</p>
          <span className="text-gray-400 text-[10px]">E-mail: secure@eurogolddealers.com</span>
        </div>
      </div>
    </div>
  );
}
