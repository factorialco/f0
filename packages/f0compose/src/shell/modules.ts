import type { IconType } from "@factorialco/f0-react"

import {
  Briefcase,
  Building,
  Calendar,
  CheckCircleLine,
  Clock,
  Code,
  DollarBill,
  Files,
  Globe,
  Home,
  Inbox,
  Money,
  PalmTree,
  Person,
  Receipt,
  Settings,
  ShoppingCart,
  Sparkles,
} from "@factorialco/f0-react/icons/app"

/**
 * Module list shaped after the real Factorial sidebar (see screenshot).
 *
 * - Root (no group title): Home, Inbox, Discover
 * - Personal: Profile, My time tracking, Time off, My benefits, My documents,
 *             My projects, My training, Tasks
 * - Company: Organization, Documents, Policies
 * - Finance: Spending (unified), Purchase Invoices, Procurement, Software,
 *            Vendors, Sales
 * - Talent: Recruitment, Performance, Onboarding (kept for prototype targets)
 * - Payroll: Periods, Concepts, Settings (kept for prototype targets)
 */

export type ModuleGroup =
  | "root"
  | "personal"
  | "company"
  | "finance"
  | "talent"
  | "payroll"

export type ModuleId =
  // Root
  | "home"
  | "inbox"
  | "discover"
  // Personal
  | "profile"
  | "my-time-tracking"
  | "time-off"
  | "my-benefits"
  | "my-documents"
  | "my-projects"
  | "my-training"
  | "tasks"
  // Company
  | "organization"
  | "documents"
  | "policies"
  // Finance
  | "spending"
  | "purchase-invoices"
  | "procurement"
  | "software"
  | "vendors"
  | "sales"
  // Talent
  | "recruitment"
  | "performance"
  | "onboarding"
  // Payroll
  | "payroll-periods"
  | "payroll-concepts"
  | "payroll-settings"

export type ModuleDef = {
  id: ModuleId
  label: string
  group: ModuleGroup
  groupLabel: string
  badge?: number
}

export const modules: ModuleDef[] = [
  // Root (no visible group title)
  { id: "home", label: "Home", group: "root", groupLabel: "Root" },
  { id: "inbox", label: "Inbox", group: "root", groupLabel: "Root" },
  { id: "discover", label: "Discover", group: "root", groupLabel: "Root" },

  // Personal
  {
    id: "profile",
    label: "Profile",
    group: "personal",
    groupLabel: "Personal",
  },
  {
    id: "my-time-tracking",
    label: "My time tracking",
    group: "personal",
    groupLabel: "Personal",
  },
  {
    id: "time-off",
    label: "Time off",
    group: "personal",
    groupLabel: "Personal",
  },
  {
    id: "my-benefits",
    label: "My benefits",
    group: "personal",
    groupLabel: "Personal",
  },
  {
    id: "my-documents",
    label: "My documents",
    group: "personal",
    groupLabel: "Personal",
  },
  {
    id: "my-projects",
    label: "My projects",
    group: "personal",
    groupLabel: "Personal",
  },
  {
    id: "my-training",
    label: "My training",
    group: "personal",
    groupLabel: "Personal",
  },
  { id: "tasks", label: "Tasks", group: "personal", groupLabel: "Personal" },

  // Company
  {
    id: "organization",
    label: "Organization",
    group: "company",
    groupLabel: "Company",
  },
  {
    id: "documents",
    label: "Documents",
    group: "company",
    groupLabel: "Company",
  },
  {
    id: "policies",
    label: "Policies",
    group: "company",
    groupLabel: "Company",
  },

  // Finance
  {
    id: "spending",
    label: "Spend management",
    group: "finance",
    groupLabel: "Finance",
  },
  {
    id: "purchase-invoices",
    label: "Purchase Invoices",
    group: "finance",
    groupLabel: "Finance",
  },
  {
    id: "procurement",
    label: "Procurement",
    group: "finance",
    groupLabel: "Finance",
  },
  {
    id: "software",
    label: "Software",
    group: "finance",
    groupLabel: "Finance",
  },
  {
    id: "vendors",
    label: "Vendors",
    group: "finance",
    groupLabel: "Finance",
  },
  { id: "sales", label: "Sales", group: "finance", groupLabel: "Finance" },

  // Talent
  {
    id: "recruitment",
    label: "Recruitment",
    group: "talent",
    groupLabel: "Talent",
  },
  {
    id: "performance",
    label: "Performance",
    group: "talent",
    groupLabel: "Talent",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    group: "talent",
    groupLabel: "Talent",
  },

  // Payroll
  {
    id: "payroll-periods",
    label: "Periods",
    group: "payroll",
    groupLabel: "Payroll",
  },
  {
    id: "payroll-concepts",
    label: "Concepts",
    group: "payroll",
    groupLabel: "Payroll",
  },
  {
    id: "payroll-settings",
    label: "Settings",
    group: "payroll",
    groupLabel: "Payroll",
  },
]

export const moduleById = new Map<ModuleId, ModuleDef>(
  modules.map((m) => [m.id, m])
)

/**
 * Emoji for each module — used as the avatar in catalog cards. Picked to be
 * recognisable at a glance and a bit fun, mirroring the module's intent.
 */
export const emojiForModule: Record<ModuleId, string> = {
  home: "🏠",
  inbox: "📥",
  discover: "🌍",
  profile: "👤",
  "my-time-tracking": "⏱️",
  "time-off": "🌴",
  "my-benefits": "✨",
  "my-documents": "📄",
  "my-projects": "📂",
  "my-training": "🎓",
  tasks: "✅",
  organization: "🏢",
  documents: "📁",
  policies: "📜",
  spending: "💳",
  "purchase-invoices": "🧾",
  procurement: "🛒",
  software: "🧩",
  vendors: "🏬",
  sales: "💵",
  recruitment: "💼",
  performance: "📈",
  onboarding: "🚀",
  "payroll-periods": "📅",
  "payroll-concepts": "💰",
  "payroll-settings": "⚙️",
}

/** Icon for each module — used by the sidebar and the catalog cards. */
export const iconForModule: Record<ModuleId, IconType> = {
  home: Home,
  inbox: Inbox,
  discover: Globe,
  profile: Person,
  "my-time-tracking": Clock,
  "time-off": PalmTree,
  "my-benefits": Sparkles,
  "my-documents": Files,
  "my-projects": Briefcase,
  "my-training": Sparkles,
  tasks: CheckCircleLine,
  organization: Person,
  documents: Files,
  policies: Files,
  spending: Money,
  "purchase-invoices": Receipt,
  procurement: ShoppingCart,
  software: Code,
  vendors: Building,
  sales: DollarBill,
  recruitment: Briefcase,
  performance: Sparkles,
  onboarding: Person,
  "payroll-periods": Calendar,
  "payroll-concepts": Money,
  "payroll-settings": Settings,
}
