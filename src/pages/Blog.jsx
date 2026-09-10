import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FileText, Calendar, ArrowRight, X, Sparkles, 
  Share2, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { blogArticles, companyInfo } from '../data/siteData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const artId = hash.replace('#', '');
      const found = blogArticles.find(a => a.id === artId);
      if (found) {
        setActiveArticle(found);
      }
    }
  }, [hash]);

  const categories = ['All', 'Partnerships & Media', 'Operations', 'Industry Insights', 'Editorial'];

  const filteredArticles = selectedCategory === 'All'
    ? blogArticles
    : blogArticles.filter(a => a.category === selectedCategory);

  return (
    <div className="bg-charcoal-950 text-white min-h-screen">
      
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-charcoal-900 border-b border-gold-500/20">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/IMG-20260409-WA0006-1024x682.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <FileText className="w-3.5 h-3.5" />
            <span>Media & Commodity Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">Publications</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Latest press statements, central banking agreements, mining concessions, and mineral policy developments across East Africa.
          </p>
        </div>
      </section>

      {/* Categories Filter Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-400 text-charcoal-950 font-bold shadow-lg shadow-gold-500/20'
                  : 'bg-charcoal-900 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              id={art.id}
              className="scroll-mt-32 rounded-3xl bg-charcoal-900/60 border border-gold-500/20 hover:border-gold-400/50 overflow-hidden transition-all shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/90 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase backdrop-blur-sm">
                    {art.category}
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-charcoal-950/80 text-gray-300 text-xs flex items-center gap-2 backdrop-blur-sm">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{art.date}</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors">
                    {art.title}
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(art)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-wider"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400">Euro Gold Media Desk</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveArticle(null)}
          />
          <div className="relative bg-charcoal-900 border border-gold-500/30 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl z-10 my-8">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-charcoal-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-gold-400/20 text-gold-400 text-xs font-bold uppercase">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  {activeArticle.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {activeArticle.title}
              </h2>

              <div className="rounded-2xl overflow-hidden h-72">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
                <p className="font-semibold text-white">
                  {activeArticle.excerpt}
                </p>
                <p>
                  {activeArticle.content}
                </p>
                <p>
                  Euro Gold Dealers continues to maintain physical custody, state-of-the-art induction smelting systems, and automated assay calibration to guarantee that domestic gold production meets international London Bullion Market Association (LBMA) standards.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Authorized Press Dispatch</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-gold-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
