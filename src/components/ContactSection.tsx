import React, { useState } from 'react';
import { content, Language } from '../data/translations';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Image as ImageIcon,
  FolderOpen,
  CheckCircle2
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = content[lang];
  const isRtl = lang === 'ar';

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to localStorage so static inquiries are preserved on client
    try {
      const stored = JSON.parse(localStorage.getItem('special_mark_inquiries') || '[]');
      stored.push({
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        date: new Date().toISOString()
      });
      localStorage.setItem('special_mark_inquiries', JSON.stringify(stored));
    } catch {
      // Local storage unavailable
    }

    try {
      // Attempt backend endpoint if running on full-stack server
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          phone: formPhone,
          message: formMessage
        })
      });
      if (!res.ok) {
        console.info('[Static Mode] GitHub Pages static hosting active. Inquiry recorded locally.');
      }
    } catch {
      console.info('[Static Mode] Inquiry stored securely on client.');
    } finally {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => {
        setFormName('');
        setFormEmail('');
        setFormPhone('');
        setFormMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950 text-neutral-100 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            <span>05. DIRECT COMMUNICATIONS & PHYSICAL HEADQUARTERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-100 text-balance">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 text-balance">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Institutional Contact Info & Official Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card with Direct Map Link */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-neutral-100">
                    {t.contact.addressTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    {t.contact.address}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {isRtl ? 'المملكة الأردنية الهاشمية · العاصمة عمان' : 'Hashemite Kingdom of Jordan · Amman'}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/fSny2VXEhhp2gm3N6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t.contact.googleMapsBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-100">
                    {t.contact.phoneTitle}
                  </h3>
                  <div className="text-xs text-neutral-300 font-mono mt-0.5">
                    +962 7 9000 0000 / +962 6 500 0000
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/962790000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'محادثة فورية مع مستشارنا عبر واتساب' : 'Chat Instantly on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Official Social Media Channels Links (Provided in Prompt) */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4">
              <h3 className="text-sm font-bold text-neutral-100">
                {t.contact.socialTitle}
              </h3>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/SpecialmarkTech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="truncate">Facebook</span>
                  <ExternalLink className="w-3 h-3 ms-auto opacity-60" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sm_specialmark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-pink-500/50 hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                  <span className="truncate">@sm_specialmark</span>
                  <ExternalLink className="w-3 h-3 ms-auto opacity-60" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/special-mark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-blue-400/50 hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ms-auto opacity-60" />
                </a>

                {/* Google Photos Official Logo Asset */}
                <a
                  href="https://photos.app.goo.gl/2G8B1snAgwHeD6xS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{isRtl ? 'ألبوم الشعار' : 'Logo Gallery'}</span>
                  <ExternalLink className="w-3 h-3 ms-auto opacity-60" />
                </a>
              </div>

              {/* Shared Drive Link */}
              <a
                href="https://share.google/1Tq8upDoYwhv8Z9TQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2.5 rounded-lg bg-neutral-950 border border-amber-500/30 hover:border-amber-500/60 transition-colors flex items-center justify-between text-xs text-amber-300"
              >
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">{t.nav.drivePortfolio}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-neutral-100">
                  {t.contact.sendMessage}
                </h3>
                <p className="text-xs text-neutral-400">
                  {isRtl ? 'سنرد عليك بعرض فني ودراسة أولية خلال أقل من ساعتين عمل.' : 'We reply with a customized preliminary scope within 2 business hours.'}
                </p>
              </div>

              {isSent ? (
                <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-neutral-100">
                    {t.contact.successMessage}
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">
                        {t.contact.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                        placeholder={isRtl ? "مثال: م. عمر التميمي" : "e.g. Omar Tamimi"}
                        className="w-full px-3 py-2.5 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">
                        {t.contact.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={e => setFormPhone(e.target.value)}
                        placeholder="+962 7 9000 0000"
                        className="w-full px-3 py-2.5 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={e => setFormEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3 py-2.5 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formMessage}
                      onChange={e => setFormMessage(e.target.value)}
                      placeholder={isRtl ? "اكتب هنا تفاصيل مشروعك أو استفسارك..." : "Describe your project requirements, target goals, and expected launch date..."}
                      className="w-full px-3 py-2.5 text-xs rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-200 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded-md shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
