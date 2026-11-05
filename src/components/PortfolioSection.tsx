import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import { portfolioData, PortfolioItem } from '../data/mockData';
import {
  ExternalLink,
  FolderOpen,
  X,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
  onOpenBooking: (projectRef?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'branding' | 'enterprise'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-neutral-900/40 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>02. PROVEN RECORD OF EXCELLENCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance">
            {t.portfolio.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 text-balance">
            {t.portfolio.description}
          </p>
        </div>

        {/* Filter Controls (Segmented clean functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { key: 'all', label: t.portfolio.filterAll },
            { key: 'enterprise', label: t.portfolio.filterEnterprise },
            { key: 'branding', label: t.portfolio.filterBranding },
            { key: 'web', label: t.portfolio.filterWeb }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === tab.key
                  ? 'bg-amber-400 text-neutral-950 shadow-sm shadow-amber-500/20'
                  : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => {
            const title = isRtl ? project.titleAr : project.titleEn;
            const client = isRtl ? project.clientAr : project.clientEn;
            const impactLabel = isRtl ? project.impactLabelAr : project.impactLabelEn;

            return (
              <div
                key={project.id}
                className="group rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Media Image Container with Fallback */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Impact Metric Badge on media */}
                  <div className="absolute bottom-3 start-3 bg-neutral-950/90 backdrop-blur-md px-3 py-1.5 rounded border border-amber-500/30 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-bold font-mono text-amber-300">
                      {project.impactMetric}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {impactLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      {client}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2">
                      {isRtl ? project.solutionAr : project.solutionEn}
                    </p>
                  </div>

                  {/* Tech Badges & Action */}
                  <div className="pt-4 border-t border-neutral-800/80 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800"
                        >
                          {item}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="text-[10px] font-mono text-neutral-500 self-center">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 px-3 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{t.portfolio.viewDetails}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Prominent Google Drive Repository Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl border border-amber-500/30 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-start">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <FolderOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-100">
                {isRtl ? 'هل ترغب في تصفح سحابة ملفات المشاريع والعروض التقنية؟' : 'Looking for complete presentation decks & live client briefs?'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                {isRtl ? 'شاركنا مجلداً سحابياً شاملاً يحتوي على دراسات الجدوى، الهويات البصرية، والحلول التقنية المنفذة.' : 'Access our curated institutional Google Drive repository with architecture decks and visual identity guidelines.'}
              </p>
            </div>
          </div>

          <a
            href="https://share.google/1Tq8upDoYwhv8Z9TQ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded shadow-md shadow-amber-500/20 transition-all inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>{t.portfolio.openDrive}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Case Study Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-xl border border-neutral-700 bg-neutral-900 p-6 sm:p-8 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 end-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-amber-400">
                {isRtl ? selectedProject.clientAr : selectedProject.clientEn}
              </span>
              <h3 className="text-xl font-bold text-neutral-100">
                {isRtl ? selectedProject.titleAr : selectedProject.titleEn}
              </h3>
            </div>

            {/* Media */}
            <div className="rounded-lg overflow-hidden aspect-[16/9] border border-neutral-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.titleEn}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>{t.portfolio.challenge}</span>
                </h4>
                <p className="text-neutral-300">
                  {isRtl ? selectedProject.challengeAr : selectedProject.challengeEn}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>{t.portfolio.solution}</span>
                </h4>
                <p className="text-neutral-300">
                  {isRtl ? selectedProject.solutionAr : selectedProject.solutionEn}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>{t.portfolio.results}</span>
                </h4>
                <p className="text-neutral-200 font-medium">
                  {isRtl ? selectedProject.resultsAr : selectedProject.resultsEn}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                {t.portfolio.technologies}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-amber-300 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
              >
                {t.services.closeModal}
              </button>

              <button
                onClick={() => {
                  const title = isRtl ? selectedProject.titleAr : selectedProject.titleEn;
                  setSelectedProject(null);
                  onOpenBooking(title);
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                {isRtl ? 'طلب مشروع مماثل' : 'Request Similar Project'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
