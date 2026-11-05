import React from 'react';
import { content, Language } from '../data/translations';
import { Sparkles, Calendar, ArrowRight, ArrowLeft, Shield, MapPin, CheckCircle2, Star } from 'lucide-react';
import heroBgImg from '../assets/images/hero_luxury_tech_studio_1793309840868.jpg';
import smLogoImg from '../assets/images/Sm_Blac_bbf8b6c8.jpg';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onScrollToMatrix: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onScrollToMatrix }) => {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Studio Visual with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Special MarK Luxury Tech Studio"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/95 to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy - Left / Right according to language */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Subtle editorial kicker (not a pill badge) */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-100 leading-[1.15] text-balance">
              <span>{t.hero.titlePart1} </span>
              <span className="text-gold-gradient font-black">
                {t.hero.titleHighlight}
              </span>
              <span> {t.hero.titlePart2}</span>
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed text-balance">
              {t.hero.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScrollToMatrix}
                className="px-6 py-3.5 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-neutral-950" />
                <span>{t.hero.ctaMatrix}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaBook}</span>
              </button>
            </div>

            {/* Key Trust Markers */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-2 gap-4 text-xs text-neutral-400 border-t border-neutral-800/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{t.hero.trustHQ}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{t.hero.trustSecurity}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{t.hero.trustClients}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{t.hero.trustQuality}</span>
              </div>
            </div>

          </div>

          {/* Focal Visual Card - Luxury Golden Emblem in 3D frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-neutral-800 to-neutral-900 shadow-2xl shadow-amber-500/10">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-950 relative flex items-center justify-center p-8 group">
                
                {/* Background radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)]" />

                {/* Primary Emblem Asset uploaded by user */}
                <img
                  src={smLogoImg}
                  alt="Special MarK Crown & Wreath Official Logo"
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
                />

                {/* Subtle caption bottom */}
                <div className="absolute bottom-4 inset-x-0 text-center z-20">
                  <span className="text-[11px] font-mono tracking-widest text-amber-300/80 uppercase">
                    Amman, Jordan · Special MarK Tech
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
