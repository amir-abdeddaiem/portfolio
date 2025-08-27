import type { Project } from "./types"

export const projectsData: Project[] = [
  {
    id: "crepuscule-prod",
    title: {
      en: "Full-stack Application for Crépuscule Prod",
      fr: "Application Full-stack pour Crépuscule Prod",
      ar: "تطبيق متكامل لشركة Crépuscule Prod",
    },
    description: {
      en: "Event management platform with custom animations and admin dashboard",
      fr: "Plateforme de gestion d'événements avec animations personnalisées et tableau de bord admin",
      ar: "منصة إدارة الفعاليات مع رسوم متحركة مخصصة ولوحة تحكم إدارية",
    },
    fullDescription: {
      en: "Built with Next.js and MongoDB, featuring a custom loading animation, event scheduling, reservation system, and comprehensive administrative dashboard for managing events and bookings. The platform includes real-time notifications, payment integration, and detailed analytics for event organizers.",
      fr: "Développée avec Next.js et MongoDB, avec animation de chargement personnalisée, planification d'événements, système de réservation et tableau de bord administratif complet. La plateforme inclut des notifications en temps réel, l'intégration de paiement et des analyses détaillées pour les organisateurs d'événements.",
      ar: "تم تطويره باستخدام Next.js و MongoDB، يتضمن رسوم متحركة مخصصة للتحميل، جدولة الأحداث، نظام الحجز، ولوحة تحكم إدارية شاملة لإدارة الأحداث والحجوزات. تتضمن المنصة إشعارات فورية وتكامل الدفع وتحليلات مفصلة لمنظمي الأحداث.",
    },
    technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS", "TypeScript"],
    image: "/placeholder.svg?height=400&width=600&text=Crépuscule+Prod+Platform",
    category: "web",
  },
  {
    id: "pet-owners-platform",
    title: {
      en: "Pet Owners Platform",
      fr: "Plateforme pour Propriétaires d'Animaux",
      ar: "منصة أصحاب الحيوانات الأليفة",
    },
    description: {
      en: "Full-stack platform with role-based access and pet services",
      fr: "Plateforme full-stack avec accès basé sur les rôles et services pour animaux",
      ar: "منصة متكاملة مع وصول قائم على الأدوار وخدمات الحيوانات الأليفة",
    },
    fullDescription: {
      en: "A comprehensive platform built with Next.js and MongoDB, featuring role-based access control, service reservation system, pet matching functionality, and lost pet reporting system. The platform connects pet owners with veterinarians, pet sitters, and other pet-related services in their area.",
      fr: "Une plateforme complète développée avec Next.js et MongoDB, avec contrôle d'accès basé sur les rôles, système de réservation de services, fonctionnalité de matching d'animaux et système de signalement d'animaux perdus. La plateforme connecte les propriétaires d'animaux avec les vétérinaires, les gardiens d'animaux et autres services liés aux animaux dans leur région.",
      ar: "منصة شاملة تم تطويرها باستخدام Next.js و MongoDB، تتضمن التحكم في الوصول القائم على الأدوار، نظام حجز الخدمات، وظيفة مطابقة الحيوانات الأليفة، ونظام الإبلاغ عن الحيوانات المفقودة. تربط المنصة أصحاب الحيوانات الأليفة بالأطباء البيطريين ومربي الحيوانات الأليفة والخدمات الأخرى المتعلقة بالحيوانات الأليفة في منطقتهم.",
    },
    technologies: ["Next.js", "MongoDB", "Node.js", "Authentication", "Socket.io"],
    image: "/placeholder.svg?height=400&width=600&text=Pet+Owners+Platform",
    category: "web",
  },
  {
    id: "ecommerce-php",
    title: {
      en: "E-commerce Site (PHP)",
      fr: "Site E-commerce (PHP)",
      ar: "موقع التجارة الإلكترونية (PHP)",
    },
    description: {
      en: "Product and order management system built with PHP",
      fr: "Système de gestion de produits et commandes développé en PHP",
      ar: "نظام إدارة المنتجات والطلبات مطور بـ PHP",
    },
    fullDescription: {
      en: "A complete e-commerce solution developed in PHP with comprehensive product catalog management, order processing system, and administrative tools for inventory management. Features include shopping cart functionality, payment gateway integration, and customer account management.",
      fr: "Une solution e-commerce complète développée en PHP avec gestion complète du catalogue produits, système de traitement des commandes et outils administratifs pour la gestion des stocks. Les fonctionnalités incluent le panier d'achat, l'intégration de passerelle de paiement et la gestion des comptes clients.",
      ar: "حل تجارة إلكترونية كامل تم تطويره بـ PHP مع إدارة شاملة لكتالوج المنتجات، نظام معالجة الطلبات، وأدوات إدارية لإدارة المخزون. تشمل الميزات وظائف عربة التسوق وتكامل بوابة الدفع وإدارة حسابات العملاء.",
    },
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"],
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+PHP+Site",
    category: "web",
  },
  {
    id: "stock-management",
    title: {
      en: "Stock Management Application",
      fr: "Application de Gestion de Stock",
      ar: "تطبيق إدارة المخزون",
    },
    description: {
      en: "Administrative tool built with .NET for inventory management",
      fr: "Outil administratif développé avec .NET pour la gestion d'inventaire",
      ar: "أداة إدارية مطورة بـ .NET لإدارة المخزون",
    },
    fullDescription: {
      en: "A robust stock management application built with .NET framework to streamline administrative processes, featuring inventory tracking, automated alerts, and comprehensive reporting tools. The application includes barcode scanning, supplier management, and real-time stock level monitoring.",
      fr: "Une application robuste de gestion de stock développée avec le framework .NET pour rationaliser les processus administratifs, avec suivi d'inventaire, alertes automatisées et outils de reporting complets. L'application inclut la lecture de codes-barres, la gestion des fournisseurs et le suivi en temps réel des niveaux de stock.",
      ar: "تطبيق قوي لإدارة المخزون تم تطويره باستخدام إطار عمل .NET لتبسيط العمليات الإدارية، يتضمن تتبع المخزون، التنبيهات الآلية، وأدوات التقارير الشاملة. يشمل التطبيق مسح الباركود وإدارة الموردين ومراقبة مستويات المخزون في الوقت الفعلي.",
    },
    technologies: [".NET", "C#", "SQL Server", "WPF", "Entity Framework"],
    image: "/placeholder.svg?height=400&width=600&text=Stock+Management+App",
    category: "desktop",
  },
  {
    id: "mobile-quiz-app",
    title: {
      en: "Mobile Quiz App",
      fr: "Application Mobile de Quiz",
      ar: "تطبيق الاختبارات المحمول",
    },
    description: {
      en: "Flutter app with user management and timed quizzes",
      fr: "Application Flutter avec gestion d'utilisateurs et quiz chronométrés",
      ar: "تطبيق Flutter مع إدارة المستخدمين والاختبارات المؤقتة",
    },
    fullDescription: {
      en: "A mobile quiz application created with Flutter, Dart, and Firebase, featuring comprehensive user management system, timed quiz functionality, score tracking, and real-time leaderboards. The app supports multiple quiz categories, difficulty levels, and offline mode for uninterrupted learning.",
      fr: "Une application mobile de quiz créée avec Flutter, Dart et Firebase, avec système complet de gestion d'utilisateurs, fonctionnalité de quiz chronométrés, suivi des scores et classements en temps réel. L'application prend en charge plusieurs catégories de quiz, niveaux de difficulté et mode hors ligne pour un apprentissage ininterrompu.",
      ar: "تطبيق اختبارات محمول تم إنشاؤه باستخدام Flutter و Dart و Firebase، يتضمن نظام إدارة مستخدمين شامل، وظيفة الاختبارات المؤقتة، تتبع النقاط، وقوائم المتصدرين في الوقت الفعلي. يدعم التطبيق فئات اختبارات متعددة ومستويات صعوبة ووضع عدم الاتصال للتعلم المتواصل.",
    },
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development", "Cloud Firestore"],
    image: "/placeholder.svg?height=400&width=600&text=Mobile+Quiz+App",
    category: "mobile",
  },
  {
    id: "restaurant-dashboard",
    title: {
      en: "Restaurant Evaluation Dashboard",
      fr: "Tableau de Bord d'Évaluation de Restaurant",
      ar: "لوحة تقييم المطاعم",
    },
    description: {
      en: "Interactive data visualization dashboard built with Power BI",
      fr: "Tableau de bord de visualisation de données interactif avec Power BI",
      ar: "لوحة تحكم تفاعلية لتصور البيانات مطورة بـ Power BI",
    },
    fullDescription: {
      en: "An interactive dashboard built with Power BI for restaurant performance evaluation, featuring comprehensive data visualization, customer feedback analysis, and business intelligence insights. The dashboard provides real-time metrics, trend analysis, and actionable recommendations for restaurant management.",
      fr: "Un tableau de bord interactif développé avec Power BI pour l'évaluation des performances de restaurant, avec visualisation complète des données, analyse des commentaires clients et insights de business intelligence. Le tableau de bord fournit des métriques en temps réel, une analyse des tendances et des recommandations exploitables pour la gestion de restaurant.",
      ar: "لوحة تحكم تفاعلية تم تطويرها باستخدام Power BI لتقييم أداء المطاعم، تتضمن تصور شامل للبيانات، تحليل تعليقات العملاء، ورؤى ذكاء الأعمال. توفر لوحة التحكم مقاييس في الوقت الفعلي وتحليل الاتجاهات وتوصيات قابلة للتنفيذ لإدارة المطاعم.",
    },
    technologies: ["Power BI", "Data Analysis", "SQL", "Dashboard Design", "DAX"],
    image: "/placeholder.svg?height=400&width=600&text=Restaurant+Dashboard",
    category: "analytics",
  },
]
