import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import { Calculator, Check, ArrowRight, ArrowLeft, Shield, Clock, DollarSign } from 'lucide-react';

interface CostEstimatorProps {
  lang: Language;
  onOpenBooking: (estimateDetails: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  lang,
  onOpenBooking
}) => {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [platform, setPlatform] = useState<'mobile' | 'web' | 'brand' | 'ecosystem'>('web');
  const [designTier, setDesignTier] = useState<'standard' | 'luxury'>('luxury');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'multilingual',
    'security_waf',
    'payments'
  ]);

  const addonOptions = [
    { id: 'multilingual', nameAr: 'دعم متعدد اللغات وواجهات RTL كاملة', nameEn: 'Bilingual AR/EN & Full RTL Engine', cost: 600, weeks: 1 },
    { id: 'payments', nameAr: 'ربط بوابات الدفع الإلكتروني (Stripe, CliQ, Visa)', nameEn: 'Payment Gateway Integration (Stripe, CliQ, Cards)', cost: 850, weeks: 1 },
    { id: 'realtime', nameAr: 'نظام إشعارات ومحادثات حية (Real-Time WebSockets)', nameEn: 'Real-Time Chat & Push Notifications', cost: 1100, weeks: 1.5 },
    { id: 'security_waf', nameAr: 'درع الحماية السحابية المتقدم واختبار الاختراق', nameEn: 'Enterprise Cloudflare WAF & Penetration Test', cost: 1200, weeks: 1 },
    { id: 'analytics', nameAr: 'لوحة قياس وتحليلات تنفيذية للبيانات (Admin Dashboard)', nameEn: 'Executive Analytics & BI Admin Dashboard', cost: 1400, weeks: 2 },
    { id: 'ai_engine', nameAr: 'دمج محرك ذكاء اصطناعي وأتمتة ذكية', nameEn: 'AI Recommendation & Smart Automation Engine', cost: 1800, weeks: 2 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Compute Base Cost & Duration
  let baseCost = 2500;
  let baseWeeks = 4;

  if (platform === 'mobile') {
    baseCost = 3500;
    baseWeeks = 6;
  } else if (platform === 'brand') {
    baseCost = 1800;
    baseWeeks = 3;
  } else if (platform === 'ecosystem') {
    baseCost = 5500;
    baseWeeks = 8;
  }

  if (designTier === 'luxury') {
    baseCost += 1200;
    baseWeeks += 1.5;
  }

  // Calculate Addons
  const addonsCost = selectedAddons.reduce((acc, curr) => {
    const item = addonOptions.find(o => o.id === curr);
    return acc + (item ? item.cost : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((acc, curr) => {
    const item = addonOptions.find(o => o.id === curr);
    return acc + (item ? item.weeks : 0);
  }, 0);

  const totalMinCost = Math.round(baseCost + addonsCost);
  const totalMaxCost = Math.round(totalMinCost * 1.35);
  const totalWeeks = Math.ceil(baseWeeks + addonsWeeks);

  const handleBookWithEstimate = () => {
    const summary = `${isRtl ? 'تقدير حاسبة النطاق' : 'Scoping Calculator Estimate'}: ${platform} | ${designTier} | ${selectedAddons.length} ${isRtl ? 'إضافات' : 'addons'} (~$${totalMinCost.toLocaleString()} - $${totalMaxCost.toLocaleString()})`;
    onOpenBooking(summary);
  };

  return (
    <section id="estimator" className="py-20 bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <Calculator className="w-4 h-4" />
            <span>03. TRANSPARENT PROJECT SCOPING & INVESTMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance">
            {t.estimator.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 text-balance">
            {t.estimator.description}
          </p>
        </div>

        {/* Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Platform */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.estimator.step1}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {[
                  { id: 'web', nameAr: 'منصة ويب وسحابة (Web / SaaS)', nameEn: 'Web & SaaS Platform' },
                  { id: 'mobile', nameAr: 'تطبيق هاتف (iOS & Android)', nameEn: 'Mobile App (iOS/Android)' },
                  { id: 'brand', nameAr: 'هوية بصرية فاخرة وتصميم UI/UX', nameEn: 'Luxury UI/UX & Brand Identity' },
                  { id: 'ecosystem', nameAr: 'منظومة كاملة (ويب + تطبيق + هوية)', nameEn: 'Full Ecosystem (Web + App + Brand)' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setPlatform(item.id as any)}
                    className={`p-3 text-xs text-start font-medium rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      platform === item.id
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/80 shadow-sm'
                        : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    <span>{isRtl ? item.nameAr : item.nameEn}</span>
                    {platform === item.id && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Design Tier */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.estimator.step2}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'standard', nameAr: 'تصميم عصري أنيق ومتقن (Modern Clean)', nameEn: 'Modern Clean Business Tier' },
                  { id: 'luxury', nameAr: 'فخامة مطلقة، تفاعلات دقيقة و3D (Bespoke Royal Luxury)', nameEn: 'Bespoke Royal Luxury & 3D Interactivity' }
                ].map(tier => (
                  <button
                    key={tier.id}
                    onClick={() => setDesignTier(tier.id as any)}
                    className={`p-3 text-xs text-start font-medium rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      designTier === tier.id
                        ? 'bg-amber-500/15 text-amber-300 border-amber-500/80 shadow-sm'
                        : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    <span>{isRtl ? tier.nameAr : tier.nameEn}</span>
                    {designTier === tier.id && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Addons & Security Modules */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.estimator.step3}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonOptions.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 text-xs text-start rounded-lg border transition-all cursor-pointer flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-amber-500/10 text-neutral-200 border-amber-500/60'
                          : 'bg-neutral-900/40 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-amber-400 border-amber-400 text-neutral-950' : 'border-neutral-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-tight">{isRtl ? addon.nameAr : addon.nameEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Scoping Summary Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-amber-500/40 bg-neutral-900 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              <div className="border-b border-neutral-800 pb-4">
                <span className="text-[11px] font-mono tracking-wider text-amber-400 uppercase">
                  ESTIMATION TIER · SPECIAL MARK AMMAN
                </span>
                <h3 className="text-lg font-bold text-neutral-100 mt-1">
                  {t.estimator.summary}
                </h3>
              </div>

              {/* Cost Range */}
              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.estimator.estimatedCost}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gold-gradient font-mono num-tabular">
                  ${totalMinCost.toLocaleString()} – ${totalMaxCost.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-500 font-mono">
                  ≈ {(totalMinCost * 0.71).toFixed(0)} – {(totalMaxCost * 0.71).toFixed(0)} JOD (دينار أردني)
                </div>
              </div>

              {/* Time Duration */}
              <div className="p-4 rounded-lg bg-neutral-950/80 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.estimator.estimatedTime}</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-neutral-100 font-mono num-tabular">
                  {totalWeeks} {t.estimator.weeks}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {isRtl ? 'مقسمة إلى دورات عمل متسارعة (Agile Sprints) مع تسليمات مرحلية حية' : 'Divided into milestone Agile sprints with staging previews'}
                </div>
              </div>

              {/* Included Guarantees */}
              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'يشمل اتفاقية NDA وتنازل كامل عن الملكية الفكرية' : 'Includes signed NDA & 100% perpetual IP rights transfer'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'ضمان صيانة ودعم فني مستمر لمدة 30 يوماً بعد الإطلاق' : '30 days complimentary post-launch support and warranty'}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleBookWithEstimate}
                className="w-full py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.estimator.bookWithEstimate}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
