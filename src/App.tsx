import { useState, useEffect } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisionMatrix } from './components/VisionMatrix';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CostEstimator } from './components/CostEstimator';
import { SecurityCenter } from './components/SecurityCenter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [prefillBookingNote, setPrefillBookingNote] = useState<string>('');

  // Sync html lang, dir, and dark class
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleLang = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleOpenBooking = (prefill?: string) => {
    setPrefillBookingNote(prefill || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleScrollToMatrix = () => {
    const el = document.getElementById('vision-matrix');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Showcase */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
          onScrollToMatrix={handleScrollToMatrix}
        />

        {/* Interactive Vision Matrix (Idea-to-Reality Architect) */}
        <VisionMatrix
          lang={lang}
          onSelectProjectVision={(summary) => handleOpenBooking(summary)}
        />

        {/* Services & Capabilities */}
        <ServicesSection
          lang={lang}
          onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* Portfolio & Case Studies */}
        <PortfolioSection
          lang={lang}
          onOpenBooking={(projectRef) => handleOpenBooking(projectRef)}
        />

        {/* Interactive Cost & Timeline Estimator */}
        <CostEstimator
          lang={lang}
          onOpenBooking={(estimateDetails) => handleOpenBooking(estimateDetails)}
        />

        {/* Enterprise Security & Readiness Audit Center */}
        <SecurityCenter
          lang={lang}
          onOpenBooking={(auditNote) => handleOpenBooking(auditNote)}
        />

        {/* Contact & Map Headquarters */}
        <ContactSection lang={lang} />
      </main>

      {/* Quiet Footer */}
      <Footer lang={lang} />

      {/* Consultation Booking Modal */}
      <ConsultationBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        lang={lang}
        prefillNote={prefillBookingNote}
      />

    </div>
  );
}
