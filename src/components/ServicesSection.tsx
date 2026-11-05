import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import { servicesData, ServiceItem } from '../data/mockData';
import {
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Cpu,
  BarChart3
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-amber-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Natural Editorial Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>01. CORE ENGINEERING & DESIGN CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance">
            {t.services.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 text-balance">
            {t.services.description}
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const formattedIndex = (index + 1).toString().padStart(2, '0');
            const title = isRtl ? service.titleAr : service.titleEn;
            const tagline = isRtl ? service.taglineAr : service.taglineEn;
            const desc = isRtl ? service.descAr : service.descEn;
            const metrics = isRtl ? service.metricsAr : service.metricsEn;

            return (
              <div
                key={service.id}
                className="group relative rounded-xl border border-neutral-800/90 bg-neutral-900/40 hover:bg-neutral-900/80 p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Editorial Index & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-amber-400 transition-colors">
                      {formattedIndex}.
                    </span>
                    <div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/60 group-hover:border-amber-500/40 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs font-medium text-amber-400/90">
                      {tagline}
                    </p>
                  </div>

                  {/* Prose */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {desc}
                  </p>

                  {/* Metric Proof Badge */}
                  <div className="pt-2 flex items-center gap-2 text-xs text-neutral-300 border-t border-neutral-800/80">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate font-mono">{metrics}</span>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-4 flex items-center justify-between border-t border-neutral-800/60">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-neutral-300 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(title)}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
                  >
                    {isRtl ? 'طلب الخدمة' : 'Request Service'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detailed Inspection Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-xl border border-neutral-700 bg-neutral-900 p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 end-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-neutral-800 border border-amber-500/40">
                {getServiceIcon(activeModalService.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-100">
                  {isRtl ? activeModalService.titleAr : activeModalService.titleEn}
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {isRtl ? activeModalService.taglineAr : activeModalService.taglineEn}
                </p>
              </div>
            </div>

            {/* Modal Description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {isRtl ? activeModalService.descAr : activeModalService.descEn}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {isRtl ? 'ما ستحصل عليه في هذه الخدمة:' : 'Included Deliverables & Capabilities:'}
              </h4>
              <div className="space-y-2">
                {(isRtl ? activeModalService.featuresAr : activeModalService.featuresEn).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {isRtl ? 'التقنيات والأدوات المعتمدة:' : 'Certified Technologies & Tooling:'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium text-amber-300 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                {t.services.closeModal}
              </button>

              <button
                onClick={() => {
                  const serviceName = isRtl ? activeModalService.titleAr : activeModalService.titleEn;
                  setActiveModalService(null);
                  onOpenBooking(serviceName);
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded transition-all cursor-pointer shadow-md shadow-amber-500/20"
              >
                {isRtl ? 'حجز استشارة لهذا الحل' : 'Schedule Discovery for this Service'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
