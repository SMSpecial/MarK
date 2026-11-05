import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import {
  industryOptions,
  solutionTypes,
  aestheticVibes,
  randomIdeaBank
} from '../data/mockData';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Clock,
  ArrowRight,
  ArrowLeft,
  Workflow,
  Check
} from 'lucide-react';
import smSealImg from '../assets/images/SpecialMarK_c5069095.jpg';

interface VisionMatrixProps {
  lang: Language;
  onSelectProjectVision: (summary: string) => void;
}

export const VisionMatrix: React.FC<VisionMatrixProps> = ({
  lang,
  onSelectProjectVision
}) => {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [selectedIndustry, setSelectedIndustry] = useState<string>('fintech');
  const [selectedType, setSelectedType] = useState<string>('full_ecosystem');
  const [selectedVibe, setSelectedVibe] = useState<string>('luxury_dark');

  // Spark random idea handler
  const handleSparkIdea = () => {
    const randomIndex = Math.floor(Math.random() * randomIdeaBank.length);
    const idea = randomIdeaBank[randomIndex];
    setSelectedIndustry(idea.industry);
    setSelectedType(idea.type);
    setSelectedVibe(idea.vibe);
  };

  // Get active descriptors
  const currentIndustry = industryOptions.find(i => i.id === selectedIndustry) || industryOptions[0];
  const currentType = solutionTypes.find(s => s.id === selectedType) || solutionTypes[0];
  const currentVibe = aestheticVibes.find(v => v.id === selectedVibe) || aestheticVibes[0];

  // Dynamic Blueprint Generator logic
  const getDynamicStack = () => {
    switch (selectedType) {
      case 'mobile':
        return ['Flutter 3.x', 'React Native', 'Swift / Kotlin', 'Firebase Cloud', 'WebSockets', 'AES-256 Vault'];
      case 'web_saas':
        return ['React 19', 'Next.js 15', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'Cloudflare WAF'];
      case 'branding_uiux':
        return ['Figma Enterprise', 'Cinema 4D', 'Design Tokens', 'Tailwind CSS v4', 'Adobe Suite'];
      case 'erp_automation':
        return ['Docker', 'Node Microservices', 'PostgreSQL', 'Redis Queue', 'PowerBI', 'REST / GraphQL'];
      default:
        return ['React 19', 'Flutter iOS/Android', 'Node.js', 'PostgreSQL', 'Cloud Armor', 'Stripe / HyperPay'];
    }
  };

  const getDynamicBlueprint = () => {
    const indName = isRtl ? currentIndustry.nameAr : currentIndustry.nameEn;
    const typeName = isRtl ? currentType.nameAr : currentType.nameEn;
    const vibeName = isRtl ? currentVibe.nameAr : currentVibe.nameEn;

    if (isRtl) {
      return `منظومة هندسية مخصصة لقطاع "${indName}" مبنية كـ "${typeName}"، تتبنى أسلوب "${vibeName}". تتضمن معالجة بيانات آنية مشفرة، بنية خدمات مصغرة قابلة للتوسع، وواجهات مستخدم فائقة الاستجابة تمنح علامتك مكانة ريادية.`;
    } else {
      return `Tailored digital architecture for the "${indName}" industry engineered as a "${typeName}", styled in "${vibeName}". Featuring encrypted data pipelines, horizontally scalable microservices, and bespoke high-conversion interfaces.`;
    }
  };

  const getDynamicMilestones = () => {
    if (isRtl) {
      return [
        'المرحلة 1: التخطيط المعماري وهندسة تدفق المستخدم (أسبوع 1-2)',
        'المرحلة 2: تصميم الهوية والنماذج التفاعلية الحية UI/UX (أسبوع 2-4)',
        'المرحلة 3: التطوير البرمجي وبناء واجهات الـ API وقواعد البيانات (أسبوع 4-8)',
        'المرحلة 4: التدقيق الأمني، اختبارات الاختراق، والتدشين الرسمي (أسبوع 8-10)'
      ];
    }
    return [
      'Sprint 1: Architecture Blueprinting & Data Schemas (W1-2)',
      'Sprint 2: Bespoke UI/UX & Interactive Prototyping (W2-4)',
      'Sprint 3: Core Engineering & High-Throughput APIs (W4-8)',
      'Sprint 4: Security Hardening, Penetration Testing & Launch (W8-10)'
    ];
  };

  const getDynamicSecurity = () => {
    if (isRtl) {
      return [
        'تشفير قواعد البيانات والاتصالات بمستوى AES-256 & TLS 1.3',
        'توقيع اتفاقية سرية تامة (NDA) ونقل الملكية الفكرية بنسبة 100%',
        'حماية ضد هجمات حجب الخدمة (DDoS) وجدار حماية Cloudflare WAF',
        'نظام صلاحيات صارم ومصادقة ثنائية (MFA) لكافة لوحات التحكم'
      ];
    }
    return [
      'End-to-End Cryptographic Encryption (AES-256 & TLS 1.3)',
      'Ironclad NDA with 100% Perpetual IP Ownership Transfer',
      'Automated DDoS Shielding & Cloudflare Enterprise WAF',
      'Zero-Trust Role-Based Access Control & Mandatory 2FA'
    ];
  };

  const handleAdopt = () => {
    const summary = `${isRtl ? 'مشروع مخصص' : 'Custom Project'}: ${isRtl ? currentIndustry.nameAr : currentIndustry.nameEn} | ${isRtl ? currentType.nameAr : currentType.nameEn} | ${isRtl ? currentVibe.nameAr : currentVibe.nameEn}`;
    onSelectProjectVision(summary);
  };

  return (
    <section id="vision-matrix" className="py-20 bg-neutral-900/60 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Workflow className="w-4 h-4" />
            <span>SPECIAL MARK VISION ARCHITECT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance">
            {t.matrix.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 text-balance">
            {t.matrix.description}
          </p>

          <div className="pt-2">
            <button
              onClick={handleSparkIdea}
              className="px-4 py-2 text-xs font-semibold text-amber-300 hover:text-amber-200 bg-neutral-800/80 hover:bg-neutral-800 border border-amber-500/40 hover:border-amber-400 rounded transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.matrix.randomIdeaBtn}</span>
            </button>
          </div>
        </div>

        {/* Matrix Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Industry Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.matrix.industryLabel}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {industryOptions.map(ind => {
                  const isSelected = selectedIndustry === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`px-3 py-2.5 text-xs text-start font-medium rounded border transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/70 shadow-sm'
                          : 'bg-neutral-950/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <span className="truncate">{isRtl ? ind.nameAr : ind.nameEn}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Solution / Tech Type */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.matrix.typeLabel}
              </label>
              <div className="space-y-1.5">
                {solutionTypes.map(type => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full px-3 py-2.5 text-xs text-start font-medium rounded border transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/70 shadow-sm'
                          : 'bg-neutral-950/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <span className="truncate">{isRtl ? type.nameAr : type.nameEn}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Aesthetic Vibe */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.matrix.vibeLabel}
              </label>
              <div className="space-y-1.5">
                {aestheticVibes.map(vibe => {
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => setSelectedVibe(vibe.id)}
                      className={`w-full px-3 py-2.5 text-xs text-start font-medium rounded border transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/70 shadow-sm'
                          : 'bg-neutral-950/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      <span className="truncate">{isRtl ? vibe.nameAr : vibe.nameEn}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Blueprint Output Presentation Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-amber-500/30 bg-neutral-950 p-6 sm:p-8 space-y-6 shadow-xl shadow-amber-500/5 relative overflow-hidden">
              
              {/* Corner Watermark / Accent */}
              <div className="absolute top-0 end-0 p-4 opacity-15 pointer-events-none">
                <img
                  src={smSealImg}
                  alt="Special MarK Seal"
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Title & Status */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-[11px] font-mono tracking-wider text-amber-400 uppercase">
                    ARCHITECTURAL BLUEPRINT #SM-{(selectedIndustry.length * 93).toString().padStart(4, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-100 mt-1">
                    {t.matrix.resultTitle}
                  </h3>
                </div>
                <div className="text-end">
                  <span className="text-xs text-neutral-400 font-mono">
                    {isRtl ? 'الأردن · عمان' : 'Amman, Jordan'}
                  </span>
                </div>
              </div>

              {/* Blueprint Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.matrix.architecture}</span>
                </h4>
                <p className="text-sm text-neutral-200 leading-relaxed bg-neutral-900/60 p-4 rounded border border-neutral-800">
                  {getDynamicBlueprint()}
                </p>
              </div>

              {/* Recommended Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.matrix.recommendedStack}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {getDynamicStack().map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium text-amber-300 bg-neutral-900 px-2.5 py-1 rounded border border-amber-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Milestones Sprints */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.matrix.milestones}</span>
                </h4>
                <div className="space-y-1.5">
                  {getDynamicMilestones().map((mile, idx) => (
                    <div key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{mile}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Shield Included */}
              <div className="space-y-2 pt-2 border-t border-neutral-800">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.matrix.securityFeatures}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-400">
                  {getDynamicSecurity().map((sec, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA To Adopt */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
                <div className="text-xs text-neutral-400">
                  <span>{isRtl ? 'جاهز لمناقشة هذا المخطط؟' : 'Ready to build this architecture?'}</span>
                </div>
                <button
                  onClick={handleAdopt}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded shadow-md shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.matrix.requestBtn}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
