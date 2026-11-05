import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import smLogoImg from '../assets/images/Sm_Blac_bbf8b6c8.jpg';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenBooking: (prefill?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  isDark,
  onToggleTheme,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[lang];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-neutral-950/85 dark:bg-neutral-950/85 border-b border-neutral-800/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark and Emblem */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <img
            src={smLogoImg}
            alt="Special MarK Emblem"
            className="w-10 h-10 object-contain rounded-full border border-amber-500/40 shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gold-gradient whitespace-nowrap">
              {lang === 'ar' ? 'العلامة المميزة' : 'Special MarK'}
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono">
              TECH & CREATIVE HQ
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#vision-matrix"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {t.nav.visionMatrix}
          </a>
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {t.nav.services}
          </a>
          <a
            href="#portfolio"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#estimator"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {t.nav.estimator}
          </a>
          <a
            href="#security"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {t.nav.security}
          </a>
          <a
            href="#contact"
            className="hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Primary Actions & Utility Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switch */}
          <button
            onClick={onToggleLang}
            className="px-2.5 py-1.5 text-xs font-semibold text-neutral-300 hover:text-amber-400 border border-neutral-700/80 rounded hover:border-amber-500/50 transition-colors whitespace-nowrap shrink-0"
            title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            {lang === 'ar' ? 'EN' : 'العربية'}
          </button>

          {/* Theme Switch */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-neutral-400 hover:text-amber-400 border border-neutral-800 rounded transition-colors shrink-0"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Google Drive Link */}
          <a
            href="https://share.google/1Tq8upDoYwhv8Z9TQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-amber-300 border border-neutral-800 hover:border-amber-500/40 rounded transition-colors whitespace-nowrap shrink-0"
          >
            <span>{t.nav.drivePortfolio}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Primary Action CTA Button */}
          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.nav.bookConsultation}
          </button>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white border border-neutral-800 rounded"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-b border-neutral-800 bg-neutral-950 space-y-3">
          <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-200">
            <a
              href="#vision-matrix"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              {t.nav.visionMatrix}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              {t.nav.estimator}
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              {t.nav.security}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              {t.nav.contact}
            </a>
            <a
              href="https://share.google/1Tq8upDoYwhv8Z9TQ"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 flex items-center justify-between text-amber-400"
            >
              <span>{t.nav.drivePortfolio}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
