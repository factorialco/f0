import type { IconType } from "@factorialco/f0-react"

import {
  Briefcase,
  Calendar,
  CheckCircleLine,
  Clock,
  Files,
  Globe,
  Home,
  Inbox,
  Money,
  PalmTree,
  Person,
  Settings,
  Sparkles,
  Wallet,
} from "@factorialco/f0-react/icons/app"

/**
 * Module list shaped after the real Factorial sidebar (see screenshot).
 *
 * - Root (no group title): Home, Inbox, Discover
 * - Personal: Profile, My time tracking, Time off, My benefits, My documents,
 *             My spending, My projects, My training, Tasks
 * - Company: Organization, Documents, Policies
 * - Talent: Recruitment, Performance, Onboarding (kept for prototype targets)
 * - Payroll: Periods, Concepts, Settings (kept for prototype targets)
 */

export type ModuleGroup =
  | "root"
  | "personal"
  | "company"
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
  | "my-spending"
  | "my-projects"
  | "my-training"
  | "tasks"
  // Company
  | "organization"
  | "documents"
  | "policies"
  | "engagement"
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
    id: "my-spending",
    label: "My spending",
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

  {
    id: "engagement",
    label: "Engagement",
    group: "company",
    groupLabel: "Company",
  },

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
  "my-spending": "💳",
  "my-projects": "📂",
  "my-training": "🎓",
  tasks: "✅",
  organization: "🏢",
  documents: "📁",
  policies: "📜",
  engagement: "💬",
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
  "my-spending": Wallet,
  "my-projects": Briefcase,
  "my-training": Sparkles,
  tasks: CheckCircleLine,
  organization: Person,
  documents: Files,
  policies: Files,
  engagement: Sparkles,
  recruitment: Briefcase,
  performance: Sparkles,
  onboarding: Person,
  "payroll-periods": Calendar,
  "payroll-concepts": Money,
  "payroll-settings": Settings,
}
