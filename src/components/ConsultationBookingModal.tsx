import React, { useState, useEffect } from 'react';
import { content, Language } from '../data/translations';
import {
  X,
  Calendar as CalendarIcon,
  Video,
  Building,
  Phone,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  prefillNote?: string;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  prefillNote = ''
}) => {
  const t = content[lang];
  const isRtl = lang === 'ar';

  const [format, setFormat] = useState<'video' | 'in_person' | 'phone'>('in_person');
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-02');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [projectBrief, setProjectBrief] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (prefillNote) {
      setProjectBrief(prefillNote);
    }
  }, [prefillNote]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `SM-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const handleCopyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const timeSlots = [
    '10:00 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl border border-neutral-700 bg-neutral-900 p-6 sm:p-8 space-y-6 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SPECIAL MARK ARCHITECTURAL SESSION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-100">
                {t.booking.title}
              </h3>
              <p className="text-xs text-neutral-400">
                {t.booking.subtitle}
              </p>
            </div>

            {/* Format Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {t.booking.formatLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    id: 'in_person',
                    labelAr: 'مقرنا (عمان - وصفي التل)',
                    labelEn: 'HQ (Wasfi Al-Tal Amman)',
                    icon: Building
                  },
                  {
                    id: 'video',
                    labelAr: 'اتصال مرئي (Google Meet)',
                    labelEn: 'Video (Google Meet)',
                    icon: Video
                  },
                  {
                    id: 'phone',
                    labelAr: 'مكالمة هاتفية مباشرة',
                    labelEn: 'Direct Phone Call',
                    icon: Phone
                  }
                ].map(fmt => {
                  const Icon = fmt.icon;
                  const isSelected = format === fmt.id;
                  return (
                    <button
                      type="button"
                      key={fmt.id}
                      onClick={() => setFormat(fmt.id as any)}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/80 shadow-sm'
                          : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-center line-clamp-1">
                        {isRtl ? fmt.labelAr : fmt.labelEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">
                  {t.booking.dateLabel}
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                  />
                  <CalendarIcon className="w-4 h-4 text-neutral-500 absolute end-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">
                  {t.booking.timeLabel}
                </label>
                <select
                  value={selectedTime}
                  onChange={e => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Info */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">
                    {t.booking.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isRtl ? "مثال: م. أحمد الخالد" : "e.g. Johnathan Smith"}
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">
                    {t.booking.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+962 7 9000 0000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">
                  {t.booking.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">
                  {t.booking.detailsLabel}
                </label>
                <textarea
                  rows={3}
                  value={projectBrief}
                  onChange={e => setProjectBrief(e.target.value)}
                  placeholder={isRtl ? "اكتب تفاصيل إضافية عن فكرتك أو متطلباتك..." : "Share a summary of your vision, timeline, and expectations..."}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded-md shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              {t.booking.submit}
            </button>

          </form>
        ) : (
          /* Confirmation Ticket Card */
          <div className="space-y-6 text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neutral-100">
                {t.booking.confirmedTitle}
              </h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto">
                {isRtl
                  ? `أهلاً بك يا ${fullName}! تم تسجيل موعد الاستشارة التقنية في ${selectedDate} عند الساعة ${selectedTime}.`
                  : `Welcome ${fullName}! Your architectural consultation is scheduled for ${selectedDate} at ${selectedTime}.`}
              </p>
            </div>

            {/* VIP Pass */}
            <div className="p-4 rounded-xl border border-amber-500/40 bg-neutral-950 max-w-sm mx-auto space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                {t.booking.ticketCode}
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-mono font-bold text-gold-gradient">
                  {ticketId}
                </span>
                <button
                  onClick={handleCopyTicket}
                  className="p-1 text-neutral-400 hover:text-white"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                Location: Wasfi Al-Tal St, Amman / Google Meet
              </div>
            </div>

            {/* WhatsApp Quick Connect */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/962790000000?text=${encodeURIComponent(
                  `مرحباً Special MarK، أرغب بتأكيد تذكرة الاستشارة التقنية برقم ${ticketId} باسم ${fullName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.booking.whatsappDirect}</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded transition-colors"
              >
                {t.services.closeModal}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
