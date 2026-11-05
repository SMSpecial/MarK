import fintechImg from '../assets/images/project_fintech_platform_1793309841149.jpg';
import ecommerceImg from '../assets/images/project_ecommerce_luxury_1793309840960.jpg';
import studioImg from '../assets/images/hero_luxury_tech_studio_1793309840868.jpg';

export interface ServiceItem {
  id: string;
  iconName: string;
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  taglineEn: string;
  descAr: string;
  descEn: string;
  featuresAr: string[];
  featuresEn: string[];
  techStack: string[];
  metricsAr: string;
  metricsEn: string;
}

export interface PortfolioItem {
  id: string;
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  category: 'web' | 'mobile' | 'branding' | 'enterprise';
  image: string;
  challengeAr: string;
  challengeEn: string;
  solutionAr: string;
  solutionEn: string;
  resultsAr: string;
  resultsEn: string;
  stack: string[];
  impactMetric: string;
  impactLabelAr: string;
  impactLabelEn: string;
}

export interface SecurityPillar {
  id: string;
  iconName: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  standard: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-cloud",
    iconName: "Globe",
    titleAr: "تطوير المنصات السحابية والويب المتقدمة",
    titleEn: "Web & Enterprise Cloud Platforms",
    taglineAr: "بوابات برمجية فائقة السرعة مصممة للنمو اللامحدود",
    taglineEn: "High-performance full-stack web platforms engineered for scale",
    descAr: "نصمم ونبني مواقع وتطبيقات ويب سحابية بأحدث المعماريات (Microservices & Serverless)، مع سرعة تحميل فائقة وتوافق تام مع كافة الأجهزة ومحركات البحث.",
    descEn: "We architect and engineer responsive, ultra-fast web platforms and SaaS applications utilizing modern full-stack frameworks, high-throughput APIs, and bulletproof cloud infrastructure.",
    featuresAr: [
      "تطوير منصات SaaS وبوابات الأعمال المعقدة",
      "معماريات سحابية مرنة تتحمل ملايين الزيارات",
      "لوحات تحكم متقدمة لإدارة البيانات والعمليات",
      "تكامل فوري مع بوابات الدفع وأنظمة الـ CRM"
    ],
    featuresEn: [
      "Custom SaaS platforms & complex client portals",
      "Scalable cloud architecture handling millions of requests",
      "Executive analytics dashboards & data pipelines",
      "Seamless payment gateway & enterprise CRM integration"
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS / GCP"],
    metricsAr: "زمن استجابة أقل من 120ms مع استقرار بنسبة 99.98%",
    metricsEn: "<120ms API response time with 99.98% platform uptime"
  },
  {
    id: "mobile-apps",
    iconName: "Smartphone",
    titleAr: "تطوير تطبيقات الهواتف الذكية (iOS & Android)",
    titleEn: "Native & Cross-Platform Mobile Apps",
    taglineAr: "تجارب مستخدم انسيابية تضع مشروعك في جيوب ملايين العملاء",
    taglineEn: "Smooth, native-feel mobile applications that delight millions",
    descAr: "تطوير تطبيقات جوال متفوقة تقنياً وبصرياً على متجري Apple App Store و Google Play، مع إشعارات فورية، دعم العمل بدون إنترنت، وربط آمن بأجهزة الاستشعار والموقع الجغرافي.",
    descEn: "Engineered for peak performance on iOS and Android. From real-time geolocation and biometric security to offline-first sync and engaging push notification flows.",
    featuresAr: [
      "تطوير بتطبيقات هجينة عالية الأداء (Flutter / React Native)",
      "تكامل الأمان البيومتري (بصمة الوجه والإصبع)",
      "بوابات دفع محلية ودولية متكاملة وسلسة",
      "دعم متعدد اللغات وواجهات RTL مخصصة"
    ],
    featuresEn: [
      "High-performance native and cross-platform builds",
      "Biometric authentication (FaceID & Fingerprint)",
      "Local & international checkout integrations",
      "Full native RTL and multi-language support"
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "WebSockets"],
    metricsAr: "تقييم 4.9/5 على المتاجر مع أكثر من 500,000 عملية تثبيت",
    metricsEn: "4.9/5 average store rating across 500k+ active installations"
  },
  {
    id: "branding-uiux",
    iconName: "Palette",
    titleAr: "الهوية البصرية الفاخرة وتصميم واجهات المستخدم (UI/UX)",
    titleEn: "Luxury Brand Identity & Bespoke UI/UX Design",
    taglineAr: "لمسات ملكية وتصاميم استثنائية تجعل علامتك لا تُنسى",
    taglineEn: "Bespoke digital artistry and iconic visual presence",
    descAr: "نبتكر هويات بصرية متميزة تعكس الفخامة والقوة المؤسسية، مدعومة بدراسة معمقة لسلوك المستخدم وتصاميم تفاعلية حائزة على جوائز تصنع ارتباطاً عاطفياً مع العملاء.",
    descEn: "We craft distinctive, luxury brand identities and ergonomic user interfaces that captivate high-intent audiences and convert curiosity into enduring brand loyalty.",
    featuresAr: [
      "شعار وهوية ملكية متكاملة بكتيب إرشادات العلامة (Brand Guidelines)",
      "دراسة رحلة العميل وتصميم نماذج تفاعلية تفصيلية (Prototypes)",
      "نظم تصميم قابلة للتوسع (Design Systems & UI Kits)",
      "تصاميم ثلاثية الأبعاد وأصول بصرية تسويقية متكاملة"
    ],
    featuresEn: [
      "Comprehensive luxury brand guidelines and logo identity",
      "Customer journey mapping and interactive micro-prototypes",
      "Scalable multi-platform design systems and token libraries",
      "High-end 3D visual assets and digital collateral"
    ],
    techStack: ["Figma Enterprise", "Cinema 4D", "Adobe Suite", "Design Tokens", "Tailwind CSS"],
    metricsAr: "ارتفاع بنسبة +65% في معدلات التفاعل وبناء الثقة",
    metricsEn: "+65% boost in user retention and brand authority perception"
  },
  {
    id: "marketing-seo",
    iconName: "TrendingUp",
    titleAr: "التسويق الرقمي الموجه وتهيئة محركات البحث (SEO)",
    titleEn: "Performance Marketing, Ads & Elite SEO",
    taglineAr: "تصدر نتائج Google ومضاعفة المبيعات بعوائد استثمارية قياسية",
    taglineEn: "Dominating search rankings and maximizing client acquisition ROI",
    descAr: "حملات تسويقية دقيقة وإدارة إعلانات ممولة على منصات Meta و Google و LinkedIn، بالتوازي مع استراتيجيات تحسين محركات البحث التي تضمن وصولك لجمهورك المستهدف بأقل تكلفة استحواذ.",
    descEn: "Data-driven growth strategies including technical SEO, high-converting paid acquisition campaigns across Google and Meta, and conversion rate optimization (CRO).",
    featuresAr: [
      "تحسين شامل لمحركات البحث (Technical, On-Page & Off-Page SEO)",
      "إدارة الحملات الإعلانية الممولة الموجهة للنتائج",
      "إدارة منصات التواصل الاجتماعي بمحتوى مرئي احترافي",
      "تحليلات دقيقة وتقارير دورية للنمو والعائد على الاستثمار"
    ],
    featuresEn: [
      "Deep technical SEO and national/regional keyword dominance",
      "Precision-targeted PPC campaigns on Google, Meta, & LinkedIn",
      "Curated social media content strategy and high-touch production",
      "Transparent multi-touch attribution and weekly ROI reporting"
    ],
    techStack: ["Google Analytics 4", "Semrush Enterprise", "Meta Ads Manager", "Google Search Console", "Hotjar"],
    metricsAr: "+280% زيادة في الزيارات المجانية وعوائد إعلانية تصل إلى 4.2x",
    metricsEn: "+280% organic traffic surge with an average 4.2x ROAS"
  },
  {
    id: "cybersecurity",
    iconName: "ShieldCheck",
    titleAr: "الأمن السيبراني وحماية البنى التحتية السحابية",
    titleEn: "Cybersecurity & Cloud Defense Hardening",
    taglineAr: "حصون رقمية مشفرة تحمي بياناتك وأصولك من أدق الثغرات",
    taglineEn: "Bank-grade defensive architecture shielding every asset",
    descAr: "تأمين شامل للأنظمة وقواعد البيانات وفق أحدث معايير OWASP و ISO 27001، مع جدران حماية نارية سحابية واختبارات اختراق دورية تضمن مناعة نظامك بنسبة 100%.",
    descEn: "Comprehensive system shielding covering data encryption, automated vulnerability scanners, Cloudflare Enterprise WAF, penetration testing, and zero-trust access policies.",
    featuresAr: [
      "تشفير كامل للبيانات أثناء التخزين والنقل (AES-256 / TLS 1.3)",
      "حماية فائقة ضد هجمات حجب الخدمة (DDoS Mitigation)",
      "اختبارات الاختراق والتدقيق الأمني المسبق (Penetration Testing)",
      "إدارة الصلاحيات الدقيقة والنسخ الاحتياطي التلقائي المشفر"
    ],
    featuresEn: [
      "End-to-end data encryption at rest and in transit (AES-256)",
      "Multi-layered DDoS mitigation and automated rate-limiting",
      "Routine penetration audits and code-level vulnerability reviews",
      "Role-based access controls and encrypted automated snapshots"
    ],
    techStack: ["Cloudflare WAF", "Vault", "Docker Security", "TLS 1.3", "CrowdStrike", "OWASP ZAP"],
    metricsAr: "0% اختراقات مسجلة وحصانة كاملة ضد أكثر من 1.2M محاولة هجومية شهرياً",
    metricsEn: "Zero recorded breaches with 1.2M+ blocked malicious payloads monthly"
  },
  {
    id: "business-dev",
    iconName: "Briefcase",
    titleAr: "تطوير الأعمال والتحول الرقمي والأتمتة",
    titleEn: "Business Development & Intelligent Automation",
    taglineAr: "أتمتة العمليات وربط الأنظمة لرفع الإنتاجية وخفض التكاليف التشغيلية",
    taglineEn: "Streamlining enterprise workflows for maximum operational efficiency",
    descAr: "نساعد الشركات والمؤسسات على رقمنة أعمالها بالكامل وربط الأنظمة الداخلية ببرمجيات أتمتة ذكية توفر مئات ساعات العمل وتسرّع وتيرة اتخاذ القرارات التنفيذية.",
    descEn: "Strategic advisory and technological integration to digitize legacy workflows, connect CRM/ERP databases, and implement automated business pipelines that drive bottom-line profits.",
    featuresAr: [
      "أتمتة مسارات المبيعات وخدمة العملاء الذكية",
      "بناء أنظمة إدارة الموارد المؤسسية (ERP) والـ CRM المخصصة",
      "استشارات التحول الرقمي وإعادة هندسة العمليات",
      "تكامل واجهات الـ API لربط كافة الفروع والمستودعات"
    ],
    featuresEn: [
      "Automated lead-to-sale pipelines and omnichannel CRM",
      "Bespoke ERP architecture and inventory orchestration",
      "Digital transformation consulting and operational audits",
      "Unified API gateways connecting multi-branch systems"
    ],
    techStack: ["Node Microservices", "Zapier / Make", "GraphQL", "Redis", "Postgres", "PowerBI"],
    metricsAr: "توفير أكثر من 40% من تكاليف التشغيل وزيادة سرعة الإنجاز بنسبة 3x",
    metricsEn: "40% reduction in manual overhead with 3x faster turnaround"
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "quantum-edge",
    titleAr: "منصة Quantum Edge لإدارة الأصول المالية والاستثمار",
    titleEn: "Quantum Edge Enterprise FinTech Platform",
    clientAr: "مجموعة استثمارية رائدة",
    clientEn: "Global Capital Holdings",
    category: "enterprise",
    image: fintechImg,
    challengeAr: "الحاجة إلى لوحة تحكم استثمارية موحدة تعرض بيانات مالية حية بمليارات الدولارات مع أمان بنكي فائق ومعدل تحديث يصل لأجزاء من الثانية.",
    challengeEn: "Required a low-latency financial dashboard managing multi-billion dollar portfolios with bank-grade encryption and sub-second analytics updates.",
    solutionAr: "قمنا بتطوير منصة ويب فائقة الأداء باستخدام React 19 وهندسة WebSockets مشفرة، مع تصاميم بصرية داكنة مستوحاة من الذهب والزجاج المعتم.",
    solutionEn: "Engineered an ultra-fast telemetry dashboard using React 19, typed WebSockets, and custom gold-accented dark mode glassmorphism interfaces.",
    resultsAr: "إدارة أكثر من 4.8 تريليون دولار بأمان مطلق ودون انقطاع لثانية واحدة.",
    resultsEn: "Secured live tracking for $4.8T+ in managed volume with 100% data integrity.",
    stack: ["React 19", "TypeScript", "WebSockets", "Node.js", "PostgreSQL", "Cloudflare"],
    impactMetric: "$4.8T+",
    impactLabelAr: "حجم الأصول المدارة عبر المنصة",
    impactLabelEn: "Live Portfolio Volume Monitored"
  },
  {
    id: "obsidian-luxury",
    titleAr: "متجر Obsidian الفاخر للساعات والمقتنيات الثمينة",
    titleEn: "Obsidian Haute Horlogerie Digital Showcase",
    clientAr: "دار أزياء وساعات فاخرة",
    clientEn: "Haute Horlogerie Maison",
    category: "branding",
    image: ecommerceImg,
    challengeAr: "ابتكار متجر رقمي فخم وتطبيق جوال يمنح مقتني الساعات الفاخرة تجربة تسوق توازي زيارة صالات العرض الملكية في لندن وجنيف.",
    challengeEn: "Deliver an experiential digital storefront and mobile commerce suite mirroring the VIP white-glove experience of private European boutiques.",
    solutionAr: "تصميم هوية بصرية ملكية بالأسود المطفي والذهب المنقوش، مع واجهة تفاعلية ثلاثية الأبعاد تسمح باستعراض الساعات بدقة متناهية.",
    solutionEn: "Crafted a bespoke luxury aesthetic featuring tactile gold foil accents, high-res 3D product inspection, and seamless one-touch checkout.",
    resultsAr: "ارتفاع متوسط قيمة سلة الشراء بنسبة +140% ونمو المبيعات الدولية بنسبة 3.5x.",
    resultsEn: "+140% surge in average order value and 3.5x international client growth.",
    stack: ["Next.js", "Figma", "Stripe Luxury", "Tailwind CSS", "Three.js", "AWS"],
    impactMetric: "+140%",
    impactLabelAr: "زيادة في متوسط قيمة الطلب",
    impactLabelEn: "Average Order Value Lift"
  },
  {
    id: "special-mark-studio",
    titleAr: "المنظومة الرقمية لمقر Special MarK التقني",
    titleEn: "Special MarK Command Architecture",
    clientAr: "مؤسسة العلامة المميزة",
    clientEn: "Special MarK Tech",
    category: "web",
    image: studioImg,
    challengeAr: "بناء منصة تفاعلية سحابية تمثل الوجه التقني الأرقى في الشرق الأوسط وتلبي خيال كل زائر يبحث عن حلول برمجية مخصصة.",
    challengeEn: "Build a flagship digital ecosystem embodying the pinnacle of MENA engineering prowess and satisfying every client's creative ambition.",
    solutionAr: "هندسة معمارية متكاملة تضم مصفوفة الأفكار التفاعلية، حاسبة التكلفة الفورية، نظام الحجز الآلي، ودرع الأمان السيبراني.",
    solutionEn: "Integrated dynamic Vision Matrix, real-time cost scoping calculator, zero-latency scheduling, and certified security armor.",
    resultsAr: "تجربة مستخدم حائزة على إعجاب الشركاء ومعدل تحويل قياسي بنسبة 28%.",
    resultsEn: "Exceptional client satisfaction benchmark with a 28% inbound conversion rate.",
    stack: ["React 19", "Tailwind CSS v4", "TypeScript", "Express", "Vite", "Motion"],
    impactMetric: "99.99%",
    impactLabelAr: "استقرار وثبات النظام البرمجي",
    impactLabelEn: "System Uptime & Stability"
  },
  {
    id: "wasfi-erp",
    titleAr: "بوابة الأتمتة المؤسسية والـ ERP لشركات الخدمات",
    titleEn: "Wasfi Enterprise ERP & Workflow Automation",
    clientAr: "مجموعة صناعية وتجارية في الأردن",
    clientEn: "Industrial Holdings Jordan",
    category: "enterprise",
    image: studioImg,
    challengeAr: "تشتت البيانات بين المستودعات والمبيعات والمحاسبة وتأخر إصدار الفواتير والتقارير التنفيذية.",
    challengeEn: "Data fragmentation across warehouses, field sales, and accounting causing weekly reporting bottlenecks.",
    solutionAr: "منظومة ERP مركزية مترابطة مع تطبيق جوال للمندوبين وقارئات باركود ونظام محاسبي متوافق مع الفوترة الإلكترونية الأردنية.",
    solutionEn: "Centralized ERP suite featuring automated electronic invoicing compliance, inventory tracking, and field rep mobile apps.",
    resultsAr: "تقليص الدورة المحاسبية من 7 أيام إلى لحظات وتوفير 35% من المصاريف الإدارية.",
    resultsEn: "Accounting reconciliation reduced from 7 days to real-time, saving 35% in overhead.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"],
    impactMetric: "-35%",
    impactLabelAr: "تخفيض التكاليف التشغيلية",
    impactLabelEn: "Reduction in Operational Overhead"
  }
];

export const securityPillars: SecurityPillar[] = [
  {
    id: "encryption",
    iconName: "Lock",
    titleAr: "تشفير عسكري للبيانات (AES-256 & TLS 1.3)",
    titleEn: "Military-Grade Data Encryption (AES-256)",
    descAr: "جميع البيانات الحساسة، وقواعد البيانات، ومسارات الاتصال مشفرة بأقوى خوارزميات التشفير العالمية، مما يستحيل معه اعتراض البيانات أو قراءتها.",
    descEn: "All customer records, database volumes, and transmission packets are hardened with TLS 1.3 and AES-256 bit encryption at rest and in transit.",
    standard: "FIPS 140-2 Validated"
  },
  {
    id: "nda-protection",
    iconName: "FileCheck",
    titleAr: "اتفاقية عدم الإفصاح (NDA) وحماية الملكية الفكرية",
    titleEn: "Legally Binding NDA & 100% IP Ownership",
    descAr: "نوقع اتفاقية سرية رسمية قبل مناقشة أي تفاصيل. الكود البرمجي بالكامل والتصاميم هي ملك حصري لك بنسبة 100% دون أي قيود.",
    descEn: "We execute ironclad NDAs before project kickoff. You retain 100% perpetual ownership of all source code, design assets, and intellectual property.",
    standard: "Strict IP Rights Transfer"
  },
  {
    id: "owasp-defense",
    iconName: "ShieldAlert",
    titleAr: "تحصين كامل ضد ثغرات OWASP Top 10",
    titleEn: "OWASP Top 10 Bulletproof Hardening",
    descAr: "حماية استباقية ضد حقن SQL، وهجمات XSS، وتزوير الطلبات CSRF، وثغرات المصادقة، عبر تدقيق برمجي آلي ويدوي على كل تحديث.",
    descEn: "Proactive defenses against SQL injection, XSS, CSRF, broken access controls, and token tampering verified through automated CI/CD audits.",
    standard: "OWASP Top 10 Compliant"
  },
  {
    id: "ddos-waf",
    iconName: "Server",
    titleAr: "جدار حماية سحابي وحماية ضد الـ DDoS",
    titleEn: "Enterprise Cloudflare WAF & Anti-DDoS",
    descAr: "درع شبكي عالمي يصد هجمات إغراق الخوادم الضخمة في أجزاء من الثانية ويضمن بقاء موقعك وتطبيقاتك متاحة على مدار الساعة.",
    descEn: "Global edge network neutralizing multi-gigabit denial-of-service barrages in milliseconds while enforcing intelligent bot mitigation.",
    standard: "Cloudflare Enterprise Tier"
  },
  {
    id: "backup-recovery",
    iconName: "Database",
    titleAr: "نسخ احتياطي فوري متكرر واستعادة عند الكوارث",
    titleEn: "Automated Encrypted Backups & Disaster Recovery",
    descAr: "نسخ احتياطية موزعة جغرافياً في مراكز بيانات متعددة لضمان استرجاع البيانات خلال دقائق معدودة في أي ظرف طارئ.",
    descEn: "Geographically redundant snapshot clustering ensuring rapid zero-data-loss recovery with verified RPO and RTO thresholds.",
    standard: "99.999999999% Durability"
  },
  {
    id: "rbac-access",
    iconName: "Key",
    titleAr: "إدارة دقيقة للصلاحيات والمصادقة متعددة العوامل",
    titleEn: "Zero-Trust Role-Based Access & MFA",
    descAr: "منع وصول أي فرد غير مخول للأنظمة الحساسة وتطبيق تسجيل الدخول الثنائي (2FA) ومراقبة وتوثيق كافة الأنشطة الإدارية.",
    descEn: "Granular attribute-based authorization, mandatory hardware/TOTP 2FA, and cryptographically signed audit trail logs for all administrative actions.",
    standard: "Zero-Trust Architecture"
  }
];

export interface IndustryOption {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: string;
}

export const industryOptions: IndustryOption[] = [
  { id: "fintech", nameAr: "التقنية المالية والمصارف (FinTech)", nameEn: "FinTech & Banking", icon: "Landmark" },
  { id: "ecommerce", nameAr: "المتاجر الفاخرة والتجارة الإلكترونية", nameEn: "Luxury E-Commerce & Retail", icon: "ShoppingBag" },
  { id: "healthcare", nameAr: "الصحة والمستشفيات والعيادات", nameEn: "Healthcare & MedTech", icon: "HeartPulse" },
  { id: "realestate", nameAr: "العقارات وإدارة الممتلكات", nameEn: "Real Estate & Architecture", icon: "Building2" },
  { id: "education", nameAr: "التعليم والمنصات التدريبية", nameEn: "EdTech & Academy Platforms", icon: "GraduationCap" },
  { id: "logistics", nameAr: "اللوجستيات وإدارة الأساطيل", nameEn: "Logistics & Fleet Operations", icon: "Truck" },
  { id: "hospitality", nameAr: "الضيافة والمطاعم الراقية", nameEn: "Hospitality & Dining", icon: "UtensilsCrossed" },
  { id: "creative", nameAr: "الشركات الناشئة والمبتكرة", nameEn: "Creative Startups & Labs", icon: "Sparkles" }
];

export const solutionTypes = [
  { id: "mobile", nameAr: "تطبيق هاتف ذكي فائق السرعة (iOS & Android)", nameEn: "Ultra-Fast Mobile App (iOS & Android)" },
  { id: "web_saas", nameAr: "منصة ويب سحابية ونظام SaaS مخصص", nameEn: "Cloud Web Platform & Bespoke SaaS" },
  { id: "branding_uiux", nameAr: "هوية بصرية ملكية وتجربة مستخدم (UI/UX)", nameEn: "Luxury Brand Identity & UI/UX Design System" },
  { id: "erp_automation", nameAr: "منظومة إدارة مؤسسية وأتمتة ذكية (ERP)", nameEn: "Enterprise ERP & Workflow Automation" },
  { id: "full_ecosystem", nameAr: "منظومة رقمية متكاملة (ويب + جوال + علامة)", nameEn: "Full Digital Ecosystem (Web + App + Brand)" }
];

export const aestheticVibes = [
  { id: "luxury_dark", nameAr: "فخامة داكنة ولمسات ذهبية ملكية (Royal Gold & Obsidian)", nameEn: "Royal Gold & Dark Obsidian Luxury" },
  { id: "futuristic_tech", nameAr: "تقني مستقبلي وشاشات بيانات متطورة (Futuristic Tech)", nameEn: "Futuristic Glass & Dynamic Telemetry" },
  { id: "minimal_editorial", nameAr: "تبسيطي راقٍ وخطوط نقية (Minimalist Editorial)", nameEn: "Refined Minimalist Editorial" },
  { id: "authoritative_corp", nameAr: "مؤسسي رصين وواثق (Authoritative Corporate)", nameEn: "Authoritative Blue-Chip Corporate" }
];

export const randomIdeaBank = [
  {
    titleAr: "منصة حجز يخوت وسيارات فارهة مع محفظة رقمية مشفرة",
    titleEn: "Bespoke Luxury Fleet & Yacht Charter Platform with Crypto Escrow",
    industry: "ecommerce",
    type: "full_ecosystem",
    vibe: "luxury_dark",
    blueprintAr: "منصة ويب وتطبيق جوال يتيحان للأثرياء حجز وتأجير الأصول الفارهة في الخليج وعمان، مع عقود ذكية وتأمين بيومتري كامل.",
    blueprintEn: "Dual web & iOS/Android platform enabling ultra-high-net-worth clients to charter private yachts and supercars with smart escrow verification.",
    stack: ["React 19", "Flutter", "Node.js", "WebSockets", "AES-256 Vault"],
    stagesAr: "4 أسابيع تصميم النموذج الأولي · 6 أسابيع التطوير والربط · أسبوعان لاختبارات الأمان والتدقيق"
  },
  {
    titleAr: "تطبيق استشارات طبية عن بُعد متصل بأجهزة الفحص الذكية",
    titleEn: "Telehealth AI-Integrated Clinic with Connected IoT Vitals Monitor",
    industry: "healthcare",
    type: "mobile",
    vibe: "minimal_editorial",
    blueprintAr: "منظومة عيادات متطورة تسمح للمرضى بمقابلة استشاريي عمان عبر الفيديو وربط نتائج التحاليل ونبضات القلب مباشرة بملف طبي مشفر.",
    blueprintEn: "Encrypted telemedicine portal featuring real-time biometric telemetry, physician calendar scheduling, and HIPAA-compliant health vaults.",
    stack: ["Flutter", "WebRTC", "PostgreSQL", "Tailwind CSS", "FastAPI"],
    stagesAr: "3 أسابيع تجربة المستخدم · 6 أسابيع تطوير WebRTC والتشفير · أسبوعان للاعتماد الطبي والتدشين"
  },
  {
    titleAr: "نظام إدارة عقارات ومجمعات سكنية مع بوابة دفع وملاك ذكية",
    titleEn: "Next-Gen PropTech Ecosystem for Luxury Gated Communities",
    industry: "realestate",
    type: "web_saas",
    vibe: "futuristic_tech",
    blueprintAr: "بوابة سحابية لإدارة عقود الإيجار، وتصاريح دخول الزوار عبر رموز QR، وطلبات الصيانة مع دفع الفواتير الإلكترونية المباشر.",
    blueprintEn: "Unified cloud ERP for high-end residential towers in Amman, coordinating QR access badges, facility maintenance tickets, and rent billing.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Cloudflare WAF"],
    stagesAr: "4 أسابيع تخطيط المنظومة · 5 أسابيع هندسة لوحات التحكم · أسبوعان لربط بوابات الدفع والـ QR"
  },
  {
    titleAr: "منصة تداول أسهم وحصص شركات ناشئة مع تحليلات ذكاء اصطناعي",
    titleEn: "Equity Crowdfunding & Secondary Venture Portal",
    industry: "fintech",
    type: "full_ecosystem",
    vibe: "luxury_dark",
    blueprintAr: "نظام استثماري متكامل يربط المستثمرين بالفرص الواعدة في الأردن والمنطقة، مع فحوصات KYC آلية وتدقيق مالي مشفر.",
    blueprintEn: "Bank-grade venture capital investment portal offering automated KYC/AML verification, live dividend dashboards, and zero-latency transaction ledgers.",
    stack: ["React 19", "Golang", "PostgreSQL", "Docker", "Zero-Trust Cloudflare"],
    stagesAr: "5 أسابيع هندسة الأمان والـ KYC · 7 أسابيع المحرك المالي · 3 أسابيع اختبارات الاختراق الشاملة"
  }
];
