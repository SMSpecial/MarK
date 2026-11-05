import React from 'react';
import { content, Language } from '../data/translations';
import { Shield, ArrowUp, ExternalLink } from 'lucide-react';
import smLogoImg from '../assets/images/Sm_Blac_bbf8b6c8.jpg';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = content[lang];
  const isRtl = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand lockup */}
          <div className="flex items-center gap-3 text-center md:text-start">
            <img
              src={smLogoImg}
              alt="Special MarK Logo"
              className="w-10 h-10 rounded-full border border-amber-500/40"
            />
            <div>
              <div className="text-base font-bold text-neutral-100">
                {isRtl ? 'العلامة المميزة Special MarK Tech' : 'Special MarK Tech & Creative Agency'}
              </div>
              <div className="text-xs text-neutral-500">
                {isRtl ? 'المقر الرئيسي: شارع وصفي التل (الجاردنز)، عمان، الأردن' : 'Headquarters: Wasfi Al-Tal St (Gardens), Amman, Jordan'}
              </div>
            </div>
          </div>

          {/* Quick Nav Links Mirror */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-400">
            <a href="#vision-matrix" className="hover:text-amber-400 transition-colors">
              {t.nav.visionMatrix}
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              {t.nav.services}
            </a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">
              {t.nav.portfolio}
            </a>
            <a href="#estimator" className="hover:text-amber-400 transition-colors">
              {t.nav.estimator}
            </a>
            <a href="#security" className="hover:text-amber-400 transition-colors">
              {t.nav.security}
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              {t.nav.contact}
            </a>
            <a
              href="https://share.google/1Tq8upDoYwhv8Z9TQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              <span>{t.nav.drivePortfolio}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-neutral-800 hover:border-amber-500/50 text-neutral-400 hover:text-amber-400 bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>{t.footer.rights}</div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-500/90">
              <Shield className="w-3.5 h-3.5" />
              <span>TLS 1.3 / AES-256 Hardened</span>
            </span>
            <span>·</span>
            <span>{t.footer.privacy}</span>
            <span>·</span>
            <span>{t.footer.terms}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
