import type { IconType } from "@factorialco/f0-react"
import {
  BookOpen,
  Bookmark,
  CalendarArrowRight,
  CheckCircle,
  Code,
  Download,
  People,
  Person,
  Rocket,
  Shield,
  Sparkles,
} from "@factorialco/f0-react/icons/app"

/**
 * Factorial Campus V2 — content model for the marketplace entry screen.
 *
 * Everything here is curated copy/data for the single product available today
 * (the EU AI Act Compliance Pack) plus the navigation scaffolding that lets the
 * marketplace grow (more categories, more providers) without redesigning.
 *
 * Copy is kept in constants so it stays translatable. No prices live on this
 * surface — pricing belongs to the course/bundle detail screen.
 */

export type AudienceTone = "neutral" | "info" | "positive"

export interface CampusCourse {
  id: string
  title: string
  blurb: string
  /** Who this course is meant for (segmented by role). */
  audienceLabel: string
  audienceTone: AudienceTone
  duration: string
  icon: IconType
  /** Cover image for the course card (role-relevant, EU AI Act themed). */
  image: string
  /** Long-form description shown on the per-course detail page. */
  description: string
  /** Learning objectives — what the learner will be able to do afterwards. */
  objectives: string[]
  /** Competencies / skills certified by completing the course. */
  competencies: string[]
  /** Main topics / modules covered — the syllabus shown on the detail screen. */
  syllabus: string[]
  /** Delivery format (e.g. self-paced video + knowledge checks). */
  format: string
  /** Languages the course is available in. */
  languages: string[]
}

export interface CampusBenefit {
  icon: IconType
  label: string
}

/** A concrete outcome the company gets from rolling out the bundle. */
export interface CampusOutcome {
  icon: IconType
  title: string
  description: string
}

export interface CampusBundle {
  id: string
  title: string
  category: string
  provider: string
  /** The pack's own cover image — never one of its courses' images. */
  image: string
  legal: {
    regulation: string
    article: string
    deadlineLabel: string
  }
  tagline: string
  description: string
  courses: CampusCourse[]
  benefits: CampusBenefit[]
  outcomes: CampusOutcome[]
  /** Acquisition pricing shown in the detail panel. Simple per-seat only. */
  pricing: {
    perSeat: string
    unit: string
    period: string
    billing: string
  }
}

export const bundle: CampusBundle = {
  id: "eu-ai-act-compliance-pack",
  title: "EU AI Act Compliance Pack",
  category: "Compliance",
  provider: "Factorial",
  image: "/campus/eu-ai-act-bundle.svg",
  legal: {
    regulation: "EU AI Act",
    article: "Article 4",
    deadlineLabel: "Required before August 2026",
  },
  tagline:
    "Three role-based AI literacy courses that cover your Article 4 obligation — assign once and keep your whole company certified.",
  description:
    "Article 4 of the EU AI Act requires organisations to ensure their staff have sufficient AI literacy. This pack gives every role the right level of training, with audit-ready proof of completion.",
  courses: [
    {
      id: "ai-literacy-essentials",
      title: "AI literacy – All employees",
      blurb:
        "What AI is, how to use it safely day to day, and the responsibilities everyone shares.",
      audienceLabel: "All employees",
      audienceTone: "info",
      duration: "~1h",
      icon: Sparkles,
      image: "/campus/ai-literacy-all-employees.png",
      description:
        "A practical, jargon-free introduction to AI for everyone in the company. Employees learn what AI tools can and can't do, how to use them safely with company and personal data, and the responsibilities they share under the EU AI Act — so the whole workforce reaches the baseline literacy Article 4 requires.",
      objectives: [
        "Describe what AI is and recognise its limits in everyday work",
        "Use AI tools without exposing confidential or personal data",
        "Detect bias, errors and hallucinations before acting on them",
        "Apply the AI Act responsibilities that apply to every employee",
      ],
      competencies: [
        "AI fundamentals",
        "Safe & responsible use",
        "Data protection awareness",
        "Critical evaluation",
      ],
      syllabus: [
        "What AI is — and isn't: models, prompts and their limits",
        "Using AI tools safely with company and personal data",
        "Spotting bias, errors and hallucinations before they cause harm",
        "Everyone's responsibilities under the EU AI Act",
      ],
      format: "Self-paced online · video lessons + knowledge checks",
      languages: ["English", "Spanish", "German", "French", "Italian", "Portuguese"],
    },
    {
      id: "ai-for-people-managers",
      title: "AI literacy – managers",
      blurb:
        "Overseeing AI-assisted decisions, spotting risk, and supporting your team responsibly.",
      audienceLabel: "Managers",
      audienceTone: "neutral",
      duration: "~1.5h",
      icon: People,
      image: "/campus/ai-literacy-managers.png",
      description:
        "Built for people managers who oversee teams using AI. The course covers how to supervise AI-assisted decisions, the risk signals that warrant escalation, and how to document meaningful human oversight — equipping managers to support their teams while keeping the organisation compliant.",
      objectives: [
        "Oversee AI-assisted decisions made across your team",
        "Identify risk signals and know when to escalate",
        "Coach employees on responsible day-to-day AI use",
        "Document meaningful human oversight for audits",
      ],
      competencies: [
        "Managerial oversight",
        "Risk identification",
        "Team enablement",
        "Oversight documentation",
      ],
      syllabus: [
        "Overseeing AI-assisted decisions across your team",
        "Risk signals to watch for and when to escalate",
        "Supporting employees who use AI day to day",
        "Documenting meaningful human oversight",
      ],
      format: "Self-paced online · video lessons + scenario quizzes",
      languages: ["English", "Spanish", "German", "French", "Italian", "Portuguese"],
    },
    {
      id: "high-risk-ai-governance",
      title: "AI literacy – HR, Legal & IT",
      blurb:
        "Obligations for high-risk systems used in hiring and people operations — for decision-makers.",
      audienceLabel: "HR · Legal · IT",
      audienceTone: "positive",
      duration: "~2h",
      icon: Shield,
      image: "/campus/ai-literacy-hr-legal-it.png",
      description:
        "An in-depth course for the decision-makers in HR, Legal and IT who select, deploy and govern high-risk AI systems. It walks through classifying high-risk systems in hiring and people operations, the article-by-article obligations that apply, and the governance, record-keeping and vendor due-diligence needed to stay audit-ready.",
      objectives: [
        "Classify high-risk AI systems used in HR and hiring",
        "Map article-by-article obligations to your processes",
        "Establish governance, record-keeping and audit trails",
        "Run vendor due diligence and conformity checks",
      ],
      competencies: [
        "High-risk system classification",
        "Regulatory compliance",
        "AI governance",
        "Vendor due diligence",
      ],
      syllabus: [
        "Classifying high-risk AI systems in HR and hiring",
        "Article-by-article obligations for decision-makers",
        "Governance, record-keeping and audit trails",
        "Vendor due diligence and conformity checks",
      ],
      format: "Self-paced online · video lessons + case studies",
      languages: ["English", "Spanish", "German", "French", "Italian", "Portuguese"],
    },
  ],
  benefits: [
    { icon: CalendarArrowRight, label: "Valid for 12 months" },
    { icon: CheckCircle, label: "Individual certificate per employee" },
    { icon: Download, label: "Exportable history for audits" },
  ],
  outcomes: [
    {
      icon: Shield,
      title: "Article 4 compliance, covered",
      description:
        "Meet the EU AI Act's AI-literacy obligation across every role, with audit-ready proof for each employee.",
    },
    {
      icon: CheckCircle,
      title: "Lower AI risk day to day",
      description:
        "Teams learn to use AI safely with company and personal data — fewer leaks, errors and biased decisions.",
    },
    {
      icon: Sparkles,
      title: "Real AI skills, not a checkbox",
      description:
        "Employees and managers gain practical literacy they apply in everyday work, not just a certificate.",
    },
    {
      icon: Rocket,
      title: "One rollout for the whole company",
      description:
        "Assign once and certify everyone — from new hires to HR, Legal and IT decision-makers.",
    },
  ],
  pricing: {
    perSeat: "€0.50",
    unit: "/ seat",
    period: "per month",
    billing: "Billed annually",
  },
}

/**
 * The free, already-included course that lives in the catalog alongside the
 * paid bundle. The company has it at no cost, so its catalog state is
 * "included" — it isn't bought, it's opened.
 */
export const freeCourse: CampusCourse = {
  id: "eu-ai-act-essentials",
  title: "EU AI Act Essentials",
  blurb:
    "A free, company-wide primer on what the EU AI Act means for everyday work — included with Factorial.",
  audienceLabel: "All employees",
  audienceTone: "info",
  duration: "~30 min",
  icon: Sparkles,
  image: "/campus/ai-literacy-all-employees.png",
  description:
    "A short, free course that introduces the EU AI Act to your whole company in plain language. It explains why the regulation exists, what AI literacy means under Article 4, and the everyday habits that keep employees on the right side of the rules — the perfect starting point before rolling out role-based training.",
  objectives: [
    "Explain what the EU AI Act is and why it exists",
    "Recognise what 'AI literacy' means under Article 4",
    "Adopt safe everyday habits when using AI tools",
    "Know where to go deeper with role-based training",
  ],
  competencies: [
    "AI Act awareness",
    "Responsible AI basics",
    "Compliance mindset",
  ],
  syllabus: [
    "Why the EU AI Act exists and who it affects",
    "AI literacy and the Article 4 obligation, in plain terms",
    "Everyday do's and don'ts when using AI at work",
    "Where role-based training takes you next",
  ],
  format: "Self-paced online · short video + knowledge check",
  languages: ["English", "Spanish", "German", "French", "Italian", "Portuguese"],
}

/**
 * Catalog items all share one visual language (image thumbnail + metadata);
 * what differs is their state. "included" = already owned at no cost (open it);
 * "purchasable" = can be acquired (shows the urgency hook + price); "purchased"
 * = already acquired, managed from the Training module.
 */
export type CatalogItemState = "included" | "purchasable" | "purchased"

export interface BrowseItem {
  id: string
  label: string
  icon: IconType
}

export const browseItems: BrowseItem[] = [
  { id: "all", label: "All courses", icon: BookOpen },
  { id: "saved", label: "Saved", icon: Bookmark },
]

export interface CampusCategory {
  id: string
  label: string
  icon: IconType
  /** Number of products live in this category today. */
  count?: number
  available: boolean
}

export const categories: CampusCategory[] = [
  { id: "compliance", label: "Compliance", icon: Shield, count: 1, available: true },
  { id: "leadership", label: "Leadership", icon: Person, count: 0, available: false },
  { id: "productivity", label: "Productivity", icon: Rocket, count: 0, available: false },
  { id: "technical", label: "Technical skills", icon: Code, count: 0, available: false },
]

/** Static UI copy, kept here so it stays in one place and translatable. */
export const campusCopy = {
  pageTitle: "Factorial Campus",
  pageSubtitle:
    "Expert-built training your company can buy and roll out — curated by Factorial, starting with compliance.",
  searchPlaceholder: "Search courses…",
  sectionCompliance: {
    title: "Compliance",
    description: "AI and regulatory training to keep your company compliant.",
  },
  whatsInside: "What's inside",
  legalCallout: {
    title: "Why this matters now",
    description:
      "From August 2026, Article 4 of the EU AI Act requires organisations to ensure their workforce is AI-literate. This pack gives you audit-ready proof of compliance across every role.",
  },
  comingSoon: {
    title: "More tracks coming soon",
    description:
      "Leadership, productivity and technical-skills courses are on the way — and soon you'll be able to browse training from other providers too.",
    cta: "Request a topic",
  },
  bundleCta: "View bundle",
  saveCta: "Save",
  browseLabel: "Browse",
  categoriesLabel: "Categories",
  soonTag: "Soon",
  catalog: {
    bundleBadge: "Bundle · 3 courses",
    states: {
      included: { tag: "Included", caption: "Free · already available" },
      purchasable: { tag: "Due Aug 2026", caption: "per seat" },
      purchased: { tag: "Purchased", caption: "Managed in Training" },
    },
    actions: {
      openCourse: "Open course",
      viewBundle: "View bundle",
      viewInTraining: "View in Training",
    },
  },
  detail: {
    coursesTitle: "What's inside",
    coursesDescription:
      "Three role-based courses, sold together as one bundle — not separately. Each role gets exactly the level of AI literacy the EU AI Act expects.",
    learnLabel: "What you'll learn",
    formatLabel: "Format",
    languagesLabel: "Languages",
    viewCourseCta: "View details",
    backToBundle: "Back to bundle",
    backToCampus: "Back to catalog",
    descriptionLabel: "About this course",
    objectivesLabel: "Learning objectives",
    competenciesLabel: "Competencies you'll gain",
    contentLabel: "Course content",
    certificationTitle: "Certification & proof",
    certificationDescription:
      "Every employee earns verifiable proof of completion, so you can show auditors your whole workforce is covered.",
    outcomesTitle: "What your company gets",
    outcomesDescription:
      "Beyond the certificate — the concrete outcomes of rolling this pack out across your teams.",
    deadlineCalloutTitle: "Required before August 2026",
    deadlineCalloutDescription:
      "This pack covers your Article 4 obligation under the EU AI Act. Roll it out before the August 2026 deadline to keep your whole company compliant.",
  },
  checkout: {
    choosePlanTitle: "Choose your plan",
    choosePlanSubtitle: "Select the plan that best fits your company",
    bestValue: "Best value",
    subscriptionLabel: "Your subscription",
    billingMonthly: "Monthly",
    reviewOrder: "Review my order",
    title: "Complete your plan upgrade",
    subtitle: "Review and complete your selection.",
    summaryTitle: "Order summary",
    totalLabel: "Total",
    invoiceDate: "Jun 3, 2026",
    invoiceOn: "will be added to your next invoice on",
    taxesNote: "Taxes not included.",
    amountDueToday: "Amount due today",
    terms: "I agree to the terms and conditions and the privacy policy.",
    confirmPay: "Confirm and pay",
    back: "Back",
    close: "Close",
    successHeading: "All set!",
    successTitle: "Payment complete",
    successDescription:
      "This module has been added to your workspace. You can start using it right away.",
    setupGuide: "Setup guide",
  },
  /** The LMS the courses live in — what an existing-Trainings client adds to host the AI literacy content. */
  lmsPlan: {
    name: "LMS + AI Literacy Program",
    variant: "Business",
    description:
      "The LMS that hosts your AI literacy courses — assign training by role and track completion.",
    seatPrice: 2.5,
    seats: 37,
    currency: "€",
    seatCaption: "per seat/month",
    perPersonCaption: "per person/month",
    productTitle: "Learning Management System (LMS)",
    productDescription:
      "LMS with built-in AI Literacy training and completion tracking. Stay ready for EU AI Act Article 4.",
    businessLabel: "Business",
    features: [
      "LMS Business features",
      "Assign AI literacy training by role",
      "Includes ready-made AI literacy content by Factorial",
      "Generate audit-ready certificates and records",
      "Manage renewals and new joiners automatically",
    ],
    plans: [
      { id: "lms-ai", name: "LMS + AI Literacy Program", seatPrice: 2.5, bestValue: true },
      { id: "lms", name: "LMS", seatPrice: 2, bestValue: false },
    ],
  },
  acquisition: {
    unitCaption: "per seat · per month, billed annually",
    quoteNote: "Final price arrives as a custom quote based on your headcount.",
    addToCart: "Add to cart",
    inCart: "Added to cart",
    cartHint:
      "Adds the bundle to your cart — you'll request a custom quote from there. This isn't a direct purchase.",
    bundleNote: "The three courses are purchased together, not separately.",
    purchasedNote:
      "You own this bundle. Assign seats and track completion from the Training module.",
  },
} as const
