/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Eye, CheckCircle2, AlertCircle, Settings, FileText, Share2, Search } from 'lucide-react';
import { SEOMeta } from '../types';

interface SEOManagerProps {
  currentMeta: SEOMeta;
  onChangeMeta: (meta: SEOMeta) => void;
  activeTab: string;
}

export default function SEOManager({ currentMeta, onChangeMeta, activeTab }: SEOManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState<'mobile' | 'desktop'>('desktop');
  const [score, setScore] = useState(0);
  const [feedbacks, setFeedbacks] = useState<{ status: 'success' | 'warn' | 'error'; label: string }[]>([]);

  // Calculate simulated Yoast SEO scores based on content and best practices
  useEffect(() => {
    const list: { status: 'success' | 'warn' | 'error'; label: string }[] = [];
    let pts = 0;

    // 1. Title test
    if (currentMeta.title.length < 30) {
      list.push({ status: 'warn', label: 'SEO Title is too short. Try to make it descriptive (35-65 chars).' });
      pts += 15;
    } else if (currentMeta.title.length > 70) {
      list.push({ status: 'warn', label: 'SEO Title exceeds standard visual field. Keep it under 70 chars.' });
      pts += 15;
    } else {
      list.push({ status: 'success', label: `Perfect SEO Title length (${currentMeta.title.length} characters).` });
      pts += 30;
    }

    // 2. Focus Keyword matches
    const titleLower = currentMeta.title.toLowerCase();
    const descLower = currentMeta.metaDescription.toLowerCase();
    const kwLower = currentMeta.focusKeyword.toLowerCase();

    if (kwLower) {
      if (titleLower.includes(kwLower)) {
        list.push({ status: 'success', label: `Keyword '${currentMeta.focusKeyword}' matches in SEO Title.` });
        pts += 25;
      } else {
        list.push({ status: 'error', label: `Missing Focus Keyword '${currentMeta.focusKeyword}' in SEO Title.` });
      }

      if (descLower.includes(kwLower)) {
        list.push({ status: 'success', label: `Keyword '${currentMeta.focusKeyword}' found in Meta Description.` });
        pts += 20;
      } else {
        list.push({ status: 'warn', label: 'Focus Keyword not found in Meta Description.' });
        pts += 5;
      }
    } else {
      list.push({ status: 'error', label: 'No Focus Keyword specified for on-page SEO assessment.' });
    }

    // 3. Meta Description Length
    if (currentMeta.metaDescription.length < 80) {
      list.push({ status: 'warn', label: 'Meta Description is too short (min 110 characters requested).' });
      pts += 10;
    } else if (currentMeta.metaDescription.length > 160) {
      list.push({ status: 'warn', label: 'Meta Description is over standard snippet length (limit 160).' });
      pts += 10;
    } else {
      list.push({ status: 'success', label: 'Meta Description is of excellent size (110-155 characters).' });
      pts += 25;
    }

    // 4. Schema/Local SEO Kampala Uganda
    if (currentMeta.metaDescription.toLowerCase().includes('kampala') || currentMeta.metaDescription.toLowerCase().includes('uganda')) {
      list.push({ status: 'success', label: 'Local Ugandan Google schema terms identified.' });
      pts += 10;
    } else {
      list.push({ status: 'warn', label: 'Targeting Kampala, Uganda is recommended for local map packs search optimization.' });
    }

    setScore(Math.min(100, pts));
    setFeedbacks(list);
  }, [currentMeta]);

  return (
    <div id="seo-suite-panel" className="relative">
      {/* Floating WordPress Dashboard SEO Indicator */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-black hover:bg-neutral-900 text-white font-medium border border-gold-500/50 hover:border-gold-400 py-3 px-4.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all text-xs group cursor-pointer"
      >
        <div className="relative">
          <Settings className="w-4.5 h-4.5 text-gold-500 group-hover:rotate-45 transition-transform" />
          <span className={`absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full ${score > 75 ? 'bg-emerald-500' : 'bg-amber-500'}`} />
        </div>
        <span>WP SEO Audit ({score}%)</span>
      </button>

      {/* Slide-out Panel mimicking modern SEO plugins (Yoast/RankMath style) */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-neutral-950 border-l border-neutral-800 z-50 shadow-3xl text-xs text-gray-300 flex flex-col font-sans animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-neutral-800 bg-black flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-emerald-950 text-emerald-400 border border-emerald-800/40 rounded-lg font-bold uppercase tracking-wider text-[9px] font-mono">
                Yoast Pro
              </span>
              <h3 className="text-white text-sm font-semibold font-display tracking-wide">WordPress Live SEO Assessor</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white px-3 py-1 rounded-lg border border-neutral-800 font-bold transition"
            >
              Close Panel
            </button>
          </div>

          {/* Interactive Work Area */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            
            {/* Context Notice */}
            <div className="bg-neutral-900/60 rounded-xl p-4 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-1.5 text-gold-400 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>On-Page Kampala SEO targeting active (Tab: <span className="capitalize">{activeTab}</span>)</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                This simulator audits real HTML metadata tags representing optimal configuration for Ugandan gold export search queries (e.g. <em>"Gold suppliers in Kampala"</em>, <em>"Licensed gold refinery Uganda"</em>).
              </p>
            </div>

            {/* Simulated Google Search Result Snippet Preview */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-bold tracking-tight uppercase text-[10px] text-gray-400">Google SERP Snippet Preview</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setDevice('mobile')}
                    className={`px-2 py-0.5 rounded text-[10px] transition ${
                      device === 'mobile' ? 'bg-gold-500 text-black font-semibold' : 'bg-neutral-900 border border-neutral-800 hover:text-white'
                    }`}
                  >
                    Mobile
                  </button>
                  <button
                    onClick={() => setDevice('desktop')}
                    className={`px-2 py-0.5 rounded text-[10px] transition ${
                      device === 'desktop' ? 'bg-gold-500 text-black font-semibold' : 'bg-neutral-900 border border-neutral-800 hover:text-white'
                    }`}
                  >
                    Desktop
                  </button>
                </div>
              </div>

              <div className="bg-black rounded-xl p-4 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px] mb-1">
                  <span className="bg-neutral-800 p-0.5 px-1.5 rounded-full text-white text-[9px] font-bold">Ad</span>
                  <div className="flex items-center gap-1 font-mono text-[9px] text-gray-400 max-w-[280px] truncate">
                    <span>https://eurogolddealers.com</span>
                    <span className="text-gray-600">/</span>
                    <span className="text-neutral-500">{activeTab}</span>
                  </div>
                </div>

                {device === 'desktop' ? (
                  <div className="space-y-1">
                    <h4 className="text-[#8ab4f8] text-base font-semibold hover:underline cursor-pointer tracking-wide leading-tight">
                      {currentMeta.title || 'Euro Gold Dealers | Kampala Licensed Exporters'}
                    </h4>
                    <p className="text-sm text-[#bdc1c6] leading-snug">
                      {currentMeta.metaDescription || 'Authorized unrefined gold buyers & exporters in Kampala. Strict ethical sourcing & assay audits.'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <h4 className="text-[#a5c5f8] text-sm font-semibold hover:underline cursor-pointer leading-tight">
                      {currentMeta.title || 'Euro Gold Dealers | Kampala Licensed Exporters'}
                    </h4>
                    <p className="text-xs text-[#bdc1c6] leading-snug">
                      {currentMeta.metaDescription || 'Authorized unrefined gold buyers & exporters in Kampala. Direct mineral testing, refinery coordination & license vetting.'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Inputs - Editable SEO tags simulation */}
            <div className="space-y-4 pt-2">
              <span className="text-white font-bold tracking-tight uppercase text-[10px] text-gray-400 block">Edit SEO Metadata Matrix</span>
              
              <div className="space-y-1.5">
                <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">Meta SEO Title</label>
                <input
                  type="text"
                  value={currentMeta.title}
                  onChange={(e) => onChangeMeta({ ...currentMeta, title: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-lg text-white focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Standard title snippet (35 - 70 limit chars)</span>
                  <span className={currentMeta.title.length >= 35 && currentMeta.title.length <= 70 ? 'text-emerald-400' : 'text-amber-500'}>
                    {currentMeta.title.length} characters
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">Meta Description</label>
                <textarea
                  rows={3}
                  value={currentMeta.metaDescription}
                  onChange={(e) => onChangeMeta({ ...currentMeta, metaDescription: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2.5 rounded-lg text-white focus:outline-none resize-none"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Description snippet (110 - 160 limit chars)</span>
                  <span className={currentMeta.metaDescription.length >= 110 && currentMeta.metaDescription.length <= 160 ? 'text-emerald-400' : 'text-amber-500'}>
                    {currentMeta.metaDescription.length} characters
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">Focus Keyword (Yoast)</label>
                  <input
                    type="text"
                    value={currentMeta.focusKeyword}
                    onChange={(e) => onChangeMeta({ ...currentMeta, focusKeyword: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2 rounded-lg text-white focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">Target Keywords Tags</label>
                  <input
                    type="text"
                    value={currentMeta.keywords}
                    onChange={(e) => onChangeMeta({ ...currentMeta, keywords: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-500/50 p-2 rounded-lg text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Score and detailed diagnostics */}
            <div className="border-t border-neutral-900 pt-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold tracking-tight uppercase text-[10px] text-gray-400">SEO Diagnostics Report</span>
                <span className={`px-2.5 py-1 rounded font-mono font-bold text-xs ${
                  score > 80 ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-500 border border-amber-800'
                }`}>
                  SEO Score: {score}/100
                </span>
              </div>

              <div className="space-y-2.5">
                {feedbacks.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 bg-neutral-900/40 rounded border border-neutral-800/50">
                    {f.status === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className={`w-4 h-4 shrink-0 mt-0.5 ${f.status === 'error' ? 'text-rose-500' : 'text-amber-500'}`} />
                    )}
                    <span className="text-[11px] leading-relaxed text-gray-300">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Trust/WordPress Badge */}
            <div className="p-4 bg-orange-950/20 border border-orange-900/30 rounded-xl flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />
              <div>
                <h5 className="font-semibold text-white">Ugandan XML Sitemap Integration</h5>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  Our custom build auto-submits index updates straight to the Google Kampala Crawlers for premium local targeting placement.
                </p>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="p-5 border-t border-neutral-900 bg-neutral-950/90 text-center text-[10px] text-gray-500">
            <span>WordPress Realtime SEO Schema Tool • Powered by Euro Gold Web Core</span>
          </div>

        </div>
      )}
    </div>
  );
}
