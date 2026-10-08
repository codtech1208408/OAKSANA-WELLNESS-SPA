import React, { useState, useEffect } from 'react';
import { X, Globe, CheckCircle2, Copy, ExternalLink, ShieldCheck, Search, FileText } from 'lucide-react';
import { SEO_CONFIG } from '../data/seoConfig';

export default function SEOConsoleModal({ isOpen, onClose }) {
  const [gscToken, setGscToken] = useState('');
  const [gaId, setGaId] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const savedGsc = localStorage.getItem('oaksana_gsc_verification') || SEO_CONFIG.googleSiteVerification || '';
    const savedGa = localStorage.getItem('oaksana_ga_id') || SEO_CONFIG.googleAnalyticsId || '';
    setGscToken(savedGsc);
    setGaId(savedGa);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://oaksanawellness.com';
  const metaTagSnippet = `<meta name="google-site-verification" content="${gscToken || 'YOUR_VERIFICATION_CODE_HERE'}" />`;

  const handleSave = (e) => {
    e.preventDefault();
    if (gscToken) {
      localStorage.setItem('oaksana_gsc_verification', gscToken.trim());
      // Update DOM tag immediately
      let meta = document.querySelector('meta[name="google-site-verification"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'google-site-verification');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', gscToken.trim());
    }
    if (gaId) {
      localStorage.setItem('oaksana_ga_id', gaId.trim());
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const copySnippet = () => {
    navigator.clipboard.writeText(metaTagSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-spa-dark-card border border-spa-gold/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-spa-cream-soft relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-spa-gold/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-spa-gold/10 border border-spa-gold/30 flex items-center justify-center text-spa-gold">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-spa-cream tracking-wide">
                SEO & Google Search Console
              </h2>
              <p className="text-xs text-spa-gold font-sans tracking-wider">
                Oaksana Wellness Spa Indexing Suite
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-spa-cream-soft/60 hover:text-spa-gold transition-colors rounded-lg hover:bg-spa-gold/10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Diagnostics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-spa-dark border border-spa-gold/20 hover:border-spa-gold/60 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-spa-gold" />
              <div>
                <span className="block text-xs font-semibold text-spa-cream group-hover:text-spa-gold">sitemap.xml</span>
                <span className="text-[10px] text-spa-cream-soft/60">5 Live URLs</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-spa-gold/50 group-hover:text-spa-gold" />
          </a>

          <a
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-spa-dark border border-spa-gold/20 hover:border-spa-gold/60 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-spa-gold" />
              <div>
                <span className="block text-xs font-semibold text-spa-cream group-hover:text-spa-gold">robots.txt</span>
                <span className="text-[10px] text-emerald-400">Googlebot Ready</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-spa-gold/50 group-hover:text-spa-gold" />
          </a>

          <a
            href="https://search.google.com/search-console"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-spa-dark border border-spa-gold/20 hover:border-spa-gold/60 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-spa-gold" />
              <div>
                <span className="block text-xs font-semibold text-spa-cream group-hover:text-spa-gold">Google Console</span>
                <span className="text-[10px] text-spa-cream-soft/60">Open Dashboard</span>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-spa-gold/50 group-hover:text-spa-gold" />
          </a>
        </div>

        {/* Google Search Console Step-by-Step Instructions */}
        <div className="p-4 rounded-xl bg-spa-dark/70 border border-spa-gold/20 mb-6 space-y-3">
          <div className="flex items-center gap-2 text-spa-gold font-medium text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 text-spa-gold" />
            <span>How to verify in Google Search Console:</span>
          </div>
          <ol className="list-decimal list-inside text-xs text-spa-cream-soft/80 space-y-1.5 pl-1 leading-relaxed">
            <li>Go to <strong className="text-spa-cream">search.google.com/search-console</strong> and click <strong>Add Property</strong> (choose URL prefix: <code className="text-spa-gold font-mono">{currentUrl}</code>).</li>
            <li>Select <strong>HTML tag</strong> as the verification method.</li>
            <li>Copy the code inside <code className="text-spa-gold font-mono">content="..."</code> and paste it in the field below.</li>
            <li>In Google Search Console, go to <strong>Sitemaps</strong> and submit <strong className="text-spa-gold">sitemap.xml</strong>.</li>
          </ol>
        </div>

        {/* Verification Settings Form */}
        <form onSubmit={handleSave} className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-spa-cream mb-1.5">
              Google Site Verification Token (HTML tag content)
            </label>
            <input
              type="text"
              value={gscToken}
              onChange={(e) => setGscToken(e.target.value)}
              placeholder="e.g. AbC123XyZ_google_site_verification_code"
              className="w-full px-4 py-2.5 rounded-lg bg-spa-dark border border-spa-gold/30 text-spa-cream text-sm focus:outline-none focus:border-spa-gold focus:ring-1 focus:ring-spa-gold placeholder:text-spa-cream-soft/30"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-spa-cream mb-1.5">
              Google Analytics 4 Measurement ID (Optional)
            </label>
            <input
              type="text"
              value={gaId}
              onChange={(e) => setGaId(e.target.value)}
              placeholder="e.g. G-XXXXXXXXXX"
              className="w-full px-4 py-2.5 rounded-lg bg-spa-dark border border-spa-gold/30 text-spa-cream text-sm focus:outline-none focus:border-spa-gold focus:ring-1 focus:ring-spa-gold placeholder:text-spa-cream-soft/30"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-spa-gold to-spa-gold-light text-spa-dark text-xs font-semibold tracking-wider uppercase hover:brightness-110 transition-all shadow-gold-glow"
            >
              Save Verification Credentials
            </button>
            {saveSuccess && (
              <span className="text-emerald-400 text-xs font-medium animate-fadeIn flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Saved &amp; Applied!
              </span>
            )}
          </div>
        </form>

        {/* HTML Tag Snippet */}
        <div className="p-4 rounded-xl bg-black/60 border border-spa-gold/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-spa-cream-soft/70">
              Generated Verification Meta Tag
            </span>
            <button
              type="button"
              onClick={copySnippet}
              className="inline-flex items-center gap-1 text-[11px] text-spa-gold hover:underline"
            >
              <Copy className="w-3 h-3" />
              <span>{isCopied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          <pre className="text-xs font-mono text-spa-cream/90 bg-spa-dark/90 p-3 rounded-lg overflow-x-auto border border-spa-gold/10">
            {metaTagSnippet}
          </pre>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-spa-gold/20 text-center">
          <p className="text-[11px] text-spa-cream-soft/60">
            LocalBusiness DaySpa &amp; FAQ Schema.org JSON-LD structured data is active across all pages.
          </p>
        </div>

      </div>
    </div>
  );
}
