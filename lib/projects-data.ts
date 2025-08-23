import type { Project } from "./types"

export const projectsData: Project[] = [
  {
    id: "1",
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
      en: "Built with Next.js and MongoDB, featuring a custom loading animation, event scheduling, reservation system, and comprehensive administrative dashboard for managing events and bookings.",
      fr: "Développée avec Next.js et MongoDB, avec animation de chargement personnalisée, planification d'événements, système de réservation et tableau de bord administratif complet.",
      ar: "تم تطويره باستخدام Next.js و MongoDB، يتضمن رسوم متحركة مخصصة للتحميل، جدولة الأحداث، نظام الحجز، ولوحة تحكم إدارية شاملة لإدارة الأحداث والحجوزات.",
    },
    technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
  },
  {
    id: "2",
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
      en: "A comprehensive platform built with Next.js and MongoDB, featuring role-based access control, service reservation system, pet matching functionality, and lost pet reporting system.",
      fr: "Une plateforme complète développée avec Next.js et MongoDB, avec contrôle d'accès basé sur les rôles, système de réservation de services, fonctionnalité de matching d'animaux et système de signalement d'animaux perdus.",
      ar: "منصة شاملة تم تطويرها باستخدام Next.js و MongoDB، تتضمن التحكم في الوصول القائم على الأدوار، نظام حجز الخدمات، وظيفة مطابقة الحيوانات الأليفة، ونظام الإبلاغ عن الحيوانات المفقودة.",
    },
    technologies: ["Next.js", "MongoDB", "Node.js", "Authentication"],
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
  },
  {
    id: "3",
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
      en: "A complete e-commerce solution developed in PHP with comprehensive product catalog management, order processing system, and administrative tools for inventory management.",
      fr: "Une solution e-commerce complète développée en PHP avec gestion complète du catalogue produits, système de traitement des commandes et outils administratifs pour la gestion des stocks.",
      ar: "حل تجارة إلكترونية كامل تم تطويره بـ PHP مع إدارة شاملة لكتالوج المنتجات، نظام معالجة الطلبات، وأدوات إدارية لإدارة المخزون.",
    },
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    image: "/placeholder.svg?height=300&width=400",
    category: "web",
  },
  {
    id: "4",
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
      en: "A robust stock management application built with .NET framework to streamline administrative processes, featuring inventory tracking, automated alerts, and comprehensive reporting tools.",
      fr: "Une application robuste de gestion de stock développée avec le framework .NET pour rationaliser les processus administratifs, avec suivi d'inventaire, alertes automatisées et outils de reporting complets.",
      ar: "تطبيق قوي لإدارة المخزون تم تطويره باستخدام إطار عمل .NET لتبسيط العمليات الإدارية، يتضمن تتبع المخزون، التنبيهات الآلية، وأدوات التقارير الشاملة.",
    },
    technologies: [".NET", "C#", "SQL Server", "WPF"],
    image: "/placeholder.svg?height=300&width=400",
    category: "desktop",
  },
  {
    id: "5",
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
      en: "A mobile quiz application created with Flutter, Dart, and Firebase, featuring comprehensive user management system, timed quiz functionality, score tracking, and real-time leaderboards.",
      fr: "Une application mobile de quiz créée avec Flutter, Dart et Firebase, avec système complet de gestion d'utilisateurs, fonctionnalité de quiz chronométrés, suivi des scores et classements en temps réel.",
      ar: "تطبيق اختبارات محمول تم إنشاؤه باستخدام Flutter و Dart و Firebase، يتضمن نظام إدارة مستخدمين شامل، وظيفة الاختبارات المؤقتة، تتبع النقاط، وقوائم المتصدرين في الوقت الفعلي.",
    },
    technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    image: "/placeholder.svg?height=300&width=400",
    category: "mobile",
  },
  {
    id: "6",
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
      en: "An interactive dashboard built with Power BI for restaurant performance evaluation, featuring comprehensive data visualization, customer feedback analysis, and business intelligence insights.",
      fr: "Un tableau de bord interactif développé avec Power BI pour l'évaluation des performances de restaurant, avec visualisation complète des données, analyse des commentaires clients et insights de business intelligence.",
      ar: "لوحة تحكم تفاعلية تم تطويرها باستخدام Power BI لتقييم أداء المطاعم، تتضمن تصور شامل للبيانات، تحليل تعليقات العملاء، ورؤى ذكاء الأعمال.",
    },
    technologies: ["Power BI", "Data Analysis", "SQL", "Dashboard Design"],
    image: "/placeholder.svg?height=300&width=400",
    category: "analytics",
  },
]
