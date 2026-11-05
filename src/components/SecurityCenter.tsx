import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import { securityPillars } from '../data/mockData';
import {
  ShieldCheck,
  Lock,
  FileCheck,
  ShieldAlert,
  Server,
  Database,
  Key,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Check
} from 'lucide-react';

interface SecurityCenterProps {
  lang: Language;
  onOpenBooking: (auditNote?: string) => void;
}

export const SecurityCenter: React.FC<SecurityCenterProps> = ({
  lang,
  onOpenBooking
}) => {
  const t = content[lang];
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Diagnostic states
  const [answers, setAnswers] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: true,
    3: false
  });

  const diagnosticQuestions = [
    {
      qAr: "هل موقعك وتطبيقاتك الحالية مشفرة بالكامل ببروتوكول TLS 1.3 وشهادة SSL صالحة؟",
      qEn: "Are your current applications fully encrypted via TLS 1.3 and active SSL certificates?"
    },
    {
      qAr: "هل قمت بإجراء اختبار اختراق أمني (Penetration Test) للتأكد من خلوك من ثغرات OWASP؟",
      qEn: "Have you conducted an independent penetration test to verify immunity against OWASP flaws?"
    },
    {
      qAr: "هل تتوفر لديك نسخ احتياطية مؤتمتة ومشفرة يتم تخزينها خارج الخادم الرئيسي؟",
      qEn: "Do you have automated, encrypted off-site backups with proven disaster recovery times?"
    },
    {
      qAr: "هل تلزم فريق العمل والمشرفين بالمصادقة الثنائية (2FA) ولديك صلاحيات وصول محددة؟",
      qEn: "Do you mandate 2FA and zero-trust role-based access for all administrative panels?"
    }
  ];

  const handleToggleAnswer = (index: number) => {
    setAnswers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const trueCount = Object.values(answers).filter(Boolean).length;
  const scorePercent = (trueCount / diagnosticQuestions.length) * 100;

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Lock': return <Lock className="w-5 h-5 text-amber-400" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'Key': return <Key className="w-5 h-5 text-emerald-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="security" className="py-20 bg-neutral-900/60 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>04. ENTERPRISE CYBER DEFENSE & DATA INTEGRITY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance">
            {t.security.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 text-balance">
            {t.security.description}
          </p>
        </div>

        {/* Security Pillars 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityPillars.map(pillar => {
            const title = isRtl ? pillar.titleAr : pillar.titleEn;
            const desc = isRtl ? pillar.descAr : pillar.descEn;

            return (
              <div
                key={pillar.id}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 space-y-4 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                      {pillar.standard}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-100">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-xs text-neutral-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'مفعل ومعتمد افتراضياً في كافة المشاريع' : 'Standard compliance across all projects'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Security Readiness Audit Tool */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  INTERACTIVE READINESS AUDIT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">
                  {t.security.auditToolTitle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {t.security.auditToolDesc}
                </p>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {diagnosticQuestions.map((item, idx) => {
                  const isChecked = !!answers[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => handleToggleAnswer(idx)}
                      className={`w-full p-3 rounded-lg border text-start text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-neutral-900 text-neutral-200 border-emerald-500/50'
                          : 'bg-neutral-900/40 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span className="leading-snug">
                        {isRtl ? item.qAr : item.qEn}
                      </span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-emerald-500 border-emerald-500 text-neutral-950' : 'border-neutral-700'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Diagnostic Score Result Box */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-neutral-800 bg-neutral-900/80 space-y-6 text-center">
              <div className="space-y-1">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  {isRtl ? 'مؤشر الحصانة والأمان التقديري' : 'Calculated Cyber Defense Score'}
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-gold-gradient py-2 num-tabular">
                  {scorePercent}%
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium">
                  {scorePercent >= 75 ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {isRtl ? 'مستوى أمان مرتفع مع توصيات تحسين' : 'High baseline with optimization room'}
                    </span>
                  ) : (
                    <span className="text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      {isRtl ? 'يوجد ثغرات محتملة بحاجة لتدقيق فوري' : 'Critical gaps require immediate hardening'}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                {isRtl
                  ? 'يقوم خبراء الأمن السيبراني في Special MarK بفحص كامل الشيفرة البرمجية وقواعد البيانات وتقديم تقرير مفصل بنقاط الضعف مجاناً.'
                  : 'Special MarK cybersecurity engineers perform non-invasive penetration scanning and deliver a comprehensive vulnerability report.'}
              </p>

              <button
                onClick={() => onOpenBooking(`طلب تدقيق أمني (نتيجة الفحص الأولي: ${scorePercent}%)`)}
                className="w-full py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isRtl ? 'طلب تقرير تدقيق أمني مجاني' : 'Request Free Security Audit Report'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
