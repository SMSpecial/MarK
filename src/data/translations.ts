export type Language = 'ar' | 'en';

export interface TranslationContent {
  brand: {
    nameAr: string;
    nameEn: string;
    fullName: string;
    tagline: string;
    location: string;
    locationDetail: string;
  };
  nav: {
    services: string;
    visionMatrix: string;
    portfolio: string;
    estimator: string;
    security: string;
    contact: string;
    bookConsultation: string;
    drivePortfolio: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaMatrix: string;
    ctaBook: string;
    ctaDrive: string;
    trustHQ: string;
    trustSecurity: string;
    trustClients: string;
    trustQuality: string;
  };
  matrix: {
    title: string;
    subtitle: string;
    description: string;
    industryLabel: string;
    typeLabel: string;
    vibeLabel: string;
    randomIdeaBtn: string;
    resultTitle: string;
    architecture: string;
    recommendedStack: string;
    milestones: string;
    securityFeatures: string;
    requestBtn: string;
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    learnMore: string;
    closeModal: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    description: string;
    filterAll: string;
    filterWeb: string;
    filterMobile: string;
    filterBranding: string;
    filterEnterprise: string;
    viewDetails: string;
    openDrive: string;
    challenge: string;
    solution: string;
    results: string;
    technologies: string;
  };
  estimator: {
    title: string;
    subtitle: string;
    description: string;
    step1: string;
    step2: string;
    step3: string;
    summary: string;
    estimatedCost: string;
    estimatedTime: string;
    weeks: string;
    bookWithEstimate: string;
  };
  security: {
    title: string;
    subtitle: string;
    description: string;
    auditToolTitle: string;
    auditToolDesc: string;
    checkNow: string;
  };
  booking: {
    title: string;
    subtitle: string;
    formatLabel: string;
    dateLabel: string;
    timeLabel: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    detailsLabel: string;
    submit: string;
    confirmedTitle: string;
    ticketCode: string;
    whatsappDirect: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressTitle: string;
    address: string;
    googleMapsBtn: string;
    phoneTitle: string;
    emailTitle: string;
    socialTitle: string;
    sendMessage: string;
    fullName: string;
    email: string;
    phone: string;
    message: string;
    sendBtn: string;
    successMessage: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
    securityPolicy: string;
  };
}

export const content: Record<Language, TranslationContent> = {
  ar: {
    brand: {
      nameAr: "العلامة المميزة",
      nameEn: "Special MarK",
      fullName: "العلامة المميزة Special MarK للتقنية والتصميم",
      tagline: "حيث تتحول الرؤى المبتكرة إلى علامات فارقة تقود المستقبل الرقمي",
      location: "عمان، الأردن",
      locationDetail: "شارع وصفي التل (الجاردنز)، عمان، الأردن"
    },
    nav: {
      services: "الخدمات التقنية",
      visionMatrix: "مصفوفة الأفكار",
      portfolio: "معرض المشاريع",
      estimator: "حاسبة التكلفة",
      security: "الأمان والضمان",
      contact: "تواصل معنا",
      bookConsultation: "احجز استشارة تقنية",
      drivePortfolio: "مجلد الأعمال السحابي"
    },
    hero: {
      badge: "المؤسسة الرائدة في التطوير الرقمي والهندسة التقنية الفاخرة",
      titlePart1: "نصنع لكل طموح ورؤية",
      titleHighlight: "علامة مميزة",
      titlePart2: "تفوق التوقعات وتبقى في الصدارة",
      subtitle: "منظومة تقنية وهندسية متكاملة في عمان - الأردن. نبتكر منصات الويب السحابية، تطبيقات الهواتف الذكية، الهويات البصرية الملكية، وأنظمة الحماية المنيعة بأعلى مقاييس الجودة العالمية.",
      ctaMatrix: "استكشف مصفوفة الأفكار",
      ctaBook: "احجز استشارة مباشرة",
      ctaDrive: "تصفح سحابة المشاريع",
      trustHQ: "المقر الرئيسي: شارع وصفي التل - عمان",
      trustSecurity: "حماية سيبرانية مشفرة وتوقيع اتفاقيات NDA",
      trustClients: "+120 مشروع تقني ناجح",
      trustQuality: "معايير برمجية عالمية 99.98% استقرار"
    },
    matrix: {
      title: "مصفوفة تحويل الخيال إلى واقع رقمي",
      subtitle: "مهما كانت الفكرة التي تدور في مخيلتك، ستجد هندستها وحلولها هنا بدقة متناهية",
      description: "صممنا هذه الأداة التفاعلية لتطابق خيالك واحتياجك بدقة، سواء كنت رائد أعمال، صاحب شركة ناشئة، أو مؤسسة كبرى تبحث عن نقلة نوعية استثنائية.",
      industryLabel: "1. اختر مجال عملك أو فكرتك:",
      typeLabel: "2. ما هو نوع الحل التقني المطلوب؟",
      vibeLabel: "3. الطابع والأسلوب الهندسي المفضل:",
      randomIdeaBtn: "✨ اقترح عليّ فكرة مبتكرة جديدة",
      resultTitle: "الهندسة المعمارية المقترحة لمشروعك",
      architecture: "المخطط الهيكلي ومنطق المنظومة:",
      recommendedStack: "حزمة التقنيات والبرمجيات الموصى بها:",
      milestones: "مراحل التنفيذ المجدولة:",
      securityFeatures: "طبقات الحماية المدمجة بالحل:",
      requestBtn: "اعتماد هذه الرؤية وحجز جلسة تنفيذ"
    },
    services: {
      title: "حلول تقنية متكاملة تصنع الفارق",
      subtitle: "منظومة شاملة تغطي كافة مراحل الابتكار الرقمي والهندسة المتقدمة",
      description: "نجمع بين الدقة البرمجية العالية، التصميم الفاخر الذي يخطف الأنظار، واستراتيجيات النمو الرقمي التي تضمن التفوق السوقي المستدام.",
      learnMore: "استعراض تفاصيل الخدمة والتقنيات",
      closeModal: "إغلاق"
    },
    portfolio: {
      title: "سجل الإنجازات والمشاريع البارزة",
      subtitle: "نماذج حية لأعمال استثنائية تم تنفيذها لشركاء النجاح في المنطقة والعالم",
      description: "كل مشروع يحمل بصمة 'العلامة المميزة' في الأداء، السرعة، الجمالية البصرية، والحصانة الأمنية الكاملة.",
      filterAll: "كافة المشاريع",
      filterWeb: "المنصات السحابية والويب",
      filterMobile: "تطبيقات الهواتف الذكية",
      filterBranding: "الهويات البصرية والتصميم",
      filterEnterprise: "الأنظمة المؤسسية والـ ERP",
      viewDetails: "تفاصيل المشروع والنتائج",
      openDrive: "فتح مجلد المشاريع الكامل على Google Drive",
      challenge: "التحدي ومتطلبات العمل:",
      solution: "الحل التقني المنفذ:",
      results: "الأثر والنتائج المحققة:",
      technologies: "التقنيات المستخدمة:"
    },
    estimator: {
      title: "حاسبة نطاق وتكلفة المشاريع التفاعلية",
      subtitle: "شفافية مطلقة وتقدير واقعي للميزانية والجدول الزمني خلال لحظات",
      description: "حدد مواصفات مشروعك للحصول على تصور فوري للمدة الزمنية ونطاق التكلفة التقديري المتوافق مع متطلباتك.",
      step1: "نوع المنصة أو الخدمة الأساسية",
      step2: "مستوى التصميم والتجربة البصرية",
      step3: "المزايا الإضافية وأنظمة الأمان المطلوبة",
      summary: "ملخص النطاق التقني:",
      estimatedCost: "النطاق الاستثماري التقديري:",
      estimatedTime: "المدة الزمنية المقدرة:",
      weeks: "أسابيع عمل",
      bookWithEstimate: "تثبيت هذا التقدير ومناقشته مع مهندسينا"
    },
    security: {
      title: "درع الحماية السيبرانية والأمان الشامل",
      subtitle: "كل سطر برمجي ومحتوى تقني محصن بأحدث معايير الأمان الدولية",
      description: "ندرك أن بياناتك وأفكارك هي رأس مالك الأثمن. لذلك نطبق أعلى بروتوكولات الحماية والتشفير والسرية التامة في كل مشروع.",
      auditToolTitle: "فاحص جاهزية الأمان السريع",
      auditToolDesc: "هل موقعك أو تطبيقك الحالي محمي ضد الهجمات والثغرات؟ اختبر جاهزيتك واطلب تقرير تدقيق أمني مجاني.",
      checkNow: "بدء فحص الحماية الآن"
    },
    booking: {
      title: "احجز جلسة استشارة تقنية مجانية",
      subtitle: "تحدث مباشرة مع مستشارينا ومهندسينا في شارع وصفي التل أو عبر اتصال مرئي",
      formatLabel: "طريقة الاستشارة المفضلة:",
      dateLabel: "تاريخ المقابلة:",
      timeLabel: "الوقت المناسب:",
      nameLabel: "الاسم الكامل:",
      emailLabel: "البريد الإلكتروني:",
      phoneLabel: "رقم الهاتف / الواتساب:",
      detailsLabel: "نبذة عن فكرتك أو مشروعك:",
      submit: "تأكيد حجز الاستشارة والحصول على تذكرة الحضور",
      confirmedTitle: "تم تأكيد موعدك بنجاح في Special MarK",
      ticketCode: "رمز الحجز المرجعي VIP:",
      whatsappDirect: "تواصل سريع عبر واتساب لتأكيد الحضور"
    },
    contact: {
      title: "تواصل مع مؤسسة العلامة المميزة",
      subtitle: "أبوابنا وفريقنا الهندسي في خدمتك دائماً في عمان - الأردن وعالمياً",
      addressTitle: "موقعنا ومقرنا الرسمي:",
      address: "عمان، الأردن - شارع وصفي التل (الجاردنز)",
      googleMapsBtn: "فتح الموقع الدقيق على Google Maps",
      phoneTitle: "الهاتف والواتساب المباشر:",
      emailTitle: "المراسلات الرسمية:",
      socialTitle: "قنوات التواصل ومنصاتنا الرسمية:",
      sendMessage: "أرسل رسالة فورية للإدارة الهندسية",
      fullName: "الاسم الكريم",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف مع رمز الدولة",
      message: "تفاصيل طلبك أو فكرتك بالتفصيل...",
      sendBtn: "إرسال الرسالة الآن",
      successMessage: "شكراً لتواصلك! تلقينا رسالتك وسيتواصل معك مستشارنا التقني خلال دقائق."
    },
    footer: {
      rights: "جميع الحقوق محفوظة © 2026 لمؤسسة العلامة المميزة Special MarK Tech. عمان - الأردن.",
      privacy: "سياسة الخصوصية وسرية البيانات",
      terms: "شروط الخدمة واتفاقيات NDA",
      securityPolicy: "ميثاق الأمان السيبراني"
    }
  },
  en: {
    brand: {
      nameAr: "العلامة المميزة",
      nameEn: "Special MarK",
      fullName: "Special MarK Tech & Creative Agency",
      tagline: "Where Bold Visions Evolve into Distinctive Digital Landmarks",
      location: "Amman, Jordan",
      locationDetail: "Wasfi Al-Tal Street (Gardens), Amman, Jordan"
    },
    nav: {
      services: "Services",
      visionMatrix: "Vision Matrix",
      portfolio: "Portfolio",
      estimator: "Cost Estimator",
      security: "Security & Trust",
      contact: "Contact",
      bookConsultation: "Book Consultation",
      drivePortfolio: "Cloud Drive"
    },
    hero: {
      badge: "Premier Software Engineering & Luxury Digital Agency",
      titlePart1: "Engineering Every Vision Into A",
      titleHighlight: "Distinctive Landmark",
      titlePart2: "That Dominates The Digital Era",
      subtitle: "A world-class technology powerhouse headquartered in Amman, Jordan. We engineer scalable cloud platforms, iOS/Android mobile apps, luxury brand identities, and bank-grade cyber architectures.",
      ctaMatrix: "Explore Vision Matrix",
      ctaBook: "Schedule Discovery Call",
      ctaDrive: "Explore Google Drive Portfolio",
      trustHQ: "HQ: Wasfi Al-Tal St, Amman, Jordan",
      trustSecurity: "AES-256 Encrypted & Signed NDA Protection",
      trustClients: "120+ High-Performance Deployments",
      trustQuality: "99.98% System Uptime Benchmark"
    },
    matrix: {
      title: "Interactive Project Vision Architect",
      subtitle: "Whatever idea lives in your imagination, discover its bespoke architecture and engineering roadmap right here",
      description: "Designed so every entrepreneur, founder, or enterprise seeking innovation finds an exact match to their vision, stack, and aesthetic ambition.",
      industryLabel: "1. Select your target industry or domain:",
      typeLabel: "2. What technical solution do you require?",
      vibeLabel: "3. Architectural aesthetic & tone:",
      randomIdeaBtn: "✨ Spark An Innovative Concept",
      resultTitle: "Custom Engineering Blueprint",
      architecture: "System Blueprint & Core Logic:",
      recommendedStack: "Recommended Modern Tech Stack:",
      milestones: "Execution Roadmap & Delivery Sprints:",
      securityFeatures: "Integrated Cyber Protection Shield:",
      requestBtn: "Adopt Blueprint & Request Consultation"
    },
    services: {
      title: "Full-Spectrum Technology Solutions",
      subtitle: "From ideation and luxury branding to scalable software and enterprise security",
      description: "We merge cutting-edge engineering precision with bespoke luxury design and data-backed digital marketing to ensure market dominance.",
      learnMore: "Explore Service Architecture & Tech",
      closeModal: "Close"
    },
    portfolio: {
      title: "Featured Milestones & Case Studies",
      subtitle: "High-impact digital products shipped for partners across the MENA region and globally",
      description: "Each project bears the indelible hallmark of Special MarK: speed, visual distinction, rock-solid security, and business growth.",
      filterAll: "All Projects",
      filterWeb: "Cloud & Web Platforms",
      filterMobile: "Mobile Applications",
      filterBranding: "Brand Identity & UI/UX",
      filterEnterprise: "Enterprise Systems & ERP",
      viewDetails: "View Case Study & Impact",
      openDrive: "Open Complete Archive on Google Drive",
      challenge: "The Business Challenge:",
      solution: "Engineered Solution:",
      results: "Measurable Impact & Outcomes:",
      technologies: "Tech Stack Employed:"
    },
    estimator: {
      title: "Smart Project Scope & Cost Estimator",
      subtitle: "Transparent engineering timelines and realistic investment ranges in real time",
      description: "Configure your target specifications to receive instant timeline and budget benchmarks tailored to your needs.",
      step1: "Core Platform & Delivery Channel",
      step2: "Visual Design & Experience Tier",
      step3: "Advanced Features & Security Infrastructure",
      summary: "Technical Scope Summary:",
      estimatedCost: "Estimated Investment Range:",
      estimatedTime: "Estimated Timeline:",
      weeks: "Business Weeks",
      bookWithEstimate: "Lock In Estimate & Schedule Engineering Call"
    },
    security: {
      title: "Enterprise Cybersecurity & Shield",
      subtitle: "Every line of code and user asset is shielded by global cryptographic standards",
      description: "Your intellectual property and customer data are your most valuable assets. We guarantee total confidentiality, zero-trust security, and complete legal protection.",
      auditToolTitle: "Instant Security Readiness Checker",
      auditToolDesc: "Is your existing website or app exposed to vulnerabilities? Run a diagnostic and request a complimentary security report.",
      checkNow: "Run Security Diagnosis"
    },
    booking: {
      title: "Book A Strategic Tech Consultation",
      subtitle: "Meet directly with our senior architects at our Wasfi Al-Tal Amman HQ or via secure video call",
      formatLabel: "Preferred Consultation Format:",
      dateLabel: "Preferred Date:",
      timeLabel: "Preferred Time Window:",
      nameLabel: "Full Name:",
      emailLabel: "Email Address:",
      phoneLabel: "Phone / WhatsApp Number:",
      detailsLabel: "Project Brief or Core Idea:",
      submit: "Confirm Booking & Generate VIP Access Pass",
      confirmedTitle: "Consultation Successfully Confirmed with Special MarK",
      ticketCode: "VIP Reference Pass:",
      whatsappDirect: "Fast WhatsApp Confirmation"
    },
    contact: {
      title: "Connect With Special MarK",
      subtitle: "Our engineering headquarters in Amman, Jordan is ready to bring your vision to life",
      addressTitle: "Official Headquarters Location:",
      address: "Amman, Jordan - Wasfi Al-Tal Street (Gardens)",
      googleMapsBtn: "Open Exact Location in Google Maps",
      phoneTitle: "Direct Line & WhatsApp:",
      emailTitle: "Official Inquiries:",
      socialTitle: "Official Digital Channels & Ecosystem:",
      sendMessage: "Send Direct Message to Engineering Leadership",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number with Country Code",
      message: "Tell us about your project, timeline, and requirements...",
      sendBtn: "Send Message Now",
      successMessage: "Thank you for reaching out! Our lead technology consultant will contact you shortly."
    },
    footer: {
      rights: "All rights reserved © 2026 Special MarK Tech & Creative Agency. Amman, Jordan.",
      privacy: "Privacy Policy & Data Confidentiality",
      terms: "Terms of Service & Non-Disclosure (NDA)",
      securityPolicy: "Cybersecurity Protocol"
    }
  }
};
