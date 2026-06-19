
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { F0AnalyticsDashboard, StandardLayout } from "@factorialco/f0-react"
import {
  Add,
  CalendarArrowDown,
  ChartLine,
  CheckCircle,
  Delete,
  PersonMinus,
  Sparkles,
  Upload,
} from "@factorialco/f0-react/icons/app"
import {
  OneDataCollection,
  Page,
  PageHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import { applySort } from "@/lib/applySort"

import { BudgetsTab } from "./budgets/BudgetsTab"
import { OptimizePanel } from "./panels/OptimizePanel"
import { RenewalPanel } from "./panels/RenewalPanel"
import { OffboardingModal } from "./panels/OffboardingModal"
import { OverlapBanner } from "./panels/OverlapBanner"
import { OverlapPanel, type OverlapGroup } from "./panels/OverlapPanel"

// ── Types ─────────────────────────────────────────────────────────────────────

type CompoundTone =
  | "neutral"
  | "secondary"
  | "positive"
  | "critical"
  | "warning"
  | "info"
  | "selected"

type SaasCategory =
  | "productivity"
  | "design"
  | "engineering"
  | "sales"
  | "security"

type SaasApp = {
  id: string
  name: string
  logo: string
  category: SaasCategory
  // null means "not seat-based" (variable, shadow-it) or "pending"
  active: number | null
  seats: number | null
  // null = unknown cost, 0 = free (check isFree flag), number = monthly EUR
  monthlyEur: number | null
  isFree?: boolean
  isVariableCost?: boolean
  avgMonthlyEur?: number        // for variable cost apps
  renewalDate: Date | null
  autoRenew?: boolean
  cancelling?: boolean
  shadowIT?: boolean
  pendingSetup?: boolean
  // multiple simultaneous alerts (high cost + low usage + expiring soon)
  isCriticalMultiAlert?: boolean
}

// ── Tab config ────────────────────────────────────────────────────────────────

type TabId = "overview" | "applications" | "inbox" | "contracts" | "spend" | "budgets"

const tabs: { id: TabId; label: string }[] = [
  { id: "overview",     label: "Overview" },
  { id: "applications", label: "Applications" },
  { id: "inbox",        label: "Mailbox" },
  { id: "contracts",    label: "Contracts" },
  { id: "spend",        label: "Spend" },
  { id: "budgets",      label: "Budgets" },
]

const VALID_TABS = new Set<string>(tabs.map((t) => t.id))

// ── Dataset ───────────────────────────────────────────────────────────────────

const categoryLabels: Record<SaasCategory, string> = {
  productivity: "Productivity",
  design:       "Design",
  engineering:  "Engineering",
  sales:        "Sales",
  security:     "Security",
}

// Today is 2026-05-21 (from context). Dates computed relative to that.
const saasApps: SaasApp[] = [
  // ── Normal / healthy ──────────────────────────────────────────────────────
  {
    id: "github",           name: "GitHub",             logo: "/logos/github.png",
    category: "engineering", active: 38, seats: 40,   monthlyEur: 800,
    renewalDate: new Date("2026-10-15"),
  },
  {
    id: "google-workspace", name: "Google Workspace",   logo: "/logos/google-workspace.png",
    category: "productivity", active: 115, seats: 120, monthlyEur: 2400,
    renewalDate: new Date("2026-11-01"),
  },
  {
    id: "salesforce",       name: "Salesforce",         logo: "/logos/salesforce.png",
    category: "sales",       active: 41, seats: 45,   monthlyEur: 4500,
    renewalDate: new Date("2026-09-01"),
  },

  // ── 100% usage — full capacity ────────────────────────────────────────────
  {
    id: "datadog",          name: "Datadog",            logo: "/logos/datadog.png",
    category: "engineering", active: 30, seats: 30,   monthlyEur: 2400,
    renewalDate: new Date("2026-06-30"),
  },

  // ── 0% usage — completely inactive ───────────────────────────────────────
  {
    id: "box",              name: "Box",                logo: "/logos/box.png",
    category: "productivity", active: 0,  seats: 50,  monthlyEur: 600,
    renewalDate: new Date("2026-06-15"),
  },

  // ── Low usage ─────────────────────────────────────────────────────────────
  {
    id: "notion",           name: "Notion",             logo: "/logos/notion.png",
    category: "productivity", active: 18, seats: 50,  monthlyEur: 750,
    renewalDate: new Date("2026-07-01"),
  },
  {
    id: "dropbox",          name: "Dropbox",            logo: "/logos/dropbox.png",
    category: "productivity", active: 8,  seats: 30,  monthlyEur: 450,
    renewalDate: new Date("2026-09-30"),
  },

  // ── Expired contract ──────────────────────────────────────────────────────
  {
    id: "zoom",             name: "Zoom",               logo: "/logos/zoom.png",
    category: "productivity", active: 45, seats: 60,  monthlyEur: 1200,
    renewalDate: new Date("2026-05-07"),
  },

  // ── Auto-renewal active ───────────────────────────────────────────────────
  {
    id: "slack",            name: "Slack",              logo: "/logos/slack.png",
    category: "productivity", active: 98, seats: 120, monthlyEur: 1200,
    renewalDate: new Date("2026-12-01"),
    autoRenew: true,
  },

  // ── Free tier ─────────────────────────────────────────────────────────────
  {
    id: "google-meet",      name: "Google Meet",        logo: "/logos/google-meet.png",
    category: "productivity", active: 89, seats: 100, monthlyEur: 0,
    isFree: true,
    renewalDate: null,
  },

  // ── Unknown cost ─────────────────────────────────────────────────────────
  {
    id: "intercom",         name: "Intercom",           logo: "/logos/intercom.png",
    category: "sales",       active: 16, seats: 20,   monthlyEur: null,
    renewalDate: null,
  },

  // ── Variable / pay-per-use cost ───────────────────────────────────────────
  {
    id: "aws",              name: "AWS",                logo: "/logos/aws.png",
    category: "engineering", active: null, seats: null, monthlyEur: null,
    isVariableCost: true,    avgMonthlyEur: 1840,
    renewalDate: null,
  },

  // ── Pending setup (just connected, not configured) ────────────────────────
  {
    id: "linear",           name: "Linear",             logo: "/logos/linear.png",
    category: "engineering", active: null, seats: null, monthlyEur: null,
    pendingSetup: true,
    renewalDate: null,
  },

  // ── Being cancelled ───────────────────────────────────────────────────────
  {
    id: "adobe",            name: "Adobe Creative Cloud", logo: "/logos/adobe.png",
    category: "design",      active: 10, seats: 12,   monthlyEur: 1200,
    renewalDate: new Date("2026-08-20"),
    cancelling: true,
  },

  // ── Critical — multiple simultaneous alerts ───────────────────────────────
  {
    id: "hubspot",          name: "HubSpot",            logo: "/logos/hubspot.png",
    category: "sales",       active: 5,  seats: 24,   monthlyEur: 1800,
    renewalDate: new Date("2026-06-15"),
    isCriticalMultiAlert: true,
  },

  // ── Shadow IT / unapproved ────────────────────────────────────────────────
  {
    id: "chatgpt",          name: "ChatGPT Teams",      logo: "/logos/chatgpt.png",
    category: "productivity", active: null, seats: null, monthlyEur: 240,
    shadowIT: true,
    renewalDate: null,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function daysUntil(date: Date | null): number | null {
  if (date === null) return null
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.ceil((date.getTime() - Date.now()) / msPerDay)
}

function renewalTone(days: number): CompoundTone {
  if (days <= 0)  return "critical"
  if (days <= 30) return "critical"
  if (days <= 90) return "warning"
  return "neutral"
}

function formatRenewalDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function formatEur(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount)
}

// ── Derived state helpers ─────────────────────────────────────────────────────

function isFull(app: SaasApp) {
  return app.active !== null && app.seats !== null && app.seats > 0 && app.active >= app.seats
}

function isUnused(app: SaasApp) {
  return app.active === 0 && app.seats !== null && app.seats > 0
}

function isLowUsage(app: SaasApp) {
  if (app.active === null || app.seats === null || app.seats === 0) return false
  const pct = app.active / app.seats
  return pct < 0.5 && !isFull(app) && !isUnused(app)
}

function isExpired(app: SaasApp) {
  const d = daysUntil(app.renewalDate)
  return d !== null && d <= 0
}

function isExpiringSoon(app: SaasApp, maxDays = 90) {
  const d = daysUntil(app.renewalDate)
  return d !== null && d > 0 && d <= maxDays
}

// ── Urgency score — lower = more urgent (for default sort) ────────────────────

function urgencyScore(app: SaasApp): number {
  if (app.isCriticalMultiAlert) return 1   // HubSpot
  if (isExpired(app))           return 2   // Zoom
  if (isUnused(app))            return 3   // Box
  if (app.shadowIT)             return 4   // ChatGPT
  if (isExpiringSoon(app, 30) || app.cancelling) return 5  // Datadog, Adobe
  if (isLowUsage(app))          return 6   // Notion, Dropbox
  if (app.pendingSetup)         return 7   // Linear
  return 8                                 // healthy — sorted by monthly cost desc
}

// ── Summary stats ─────────────────────────────────────────────────────────────

const appsWithSeats = saasApps.filter((r) => r.seats !== null && r.seats > 0 && r.active !== null)
const SUMMARY_TOTAL_SEATS  = saasApps.reduce((s, r) => s + (r.seats ?? 0), 0)
const SUMMARY_USAGE_PCT    = appsWithSeats.length > 0
  ? Math.round(
      appsWithSeats.reduce((s, r) => s + (r.active ?? 0), 0) /
      appsWithSeats.reduce((s, r) => s + (r.seats ?? 0), 0) * 100
    )
  : 0
const SUMMARY_MONTHLY      = saasApps.reduce((s, r) => s + (r.monthlyEur ?? r.avgMonthlyEur ?? 0), 0)
const SUMMARY_EXPIRING_SOON = saasApps.filter((r) => {
  const d = daysUntil(r.renewalDate)
  return d !== null && d <= 90
}).length

// ── Team → app mapping ────────────────────────────────────────────────────────

const TEAM_APP_IDS: Record<string, string[]> = {
  engineering: ["github", "datadog", "aws", "linear", "slack", "google-workspace", "zoom"],
  design:      ["adobe", "notion", "box", "dropbox", "slack", "google-workspace"],
  sales:       ["salesforce", "hubspot", "intercom", "zoom", "google-meet", "slack", "google-workspace"],
}

const overviewFilters = {
  team: {
    type: "in" as const,
    label: "Team",
    options: {
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "design",      label: "Design" },
        { value: "sales",       label: "Sales" },
      ],
    },
  },
} as const

const overviewPresets = [
  { label: "Engineering", filter: { team: ["engineering"] } },
  { label: "Design",      filter: { team: ["design"] } },
  { label: "Sales",       filter: { team: ["sales"] } },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function appsForFilters(filters: Record<string, any>): SaasApp[] {
  const teams: string[] = Array.isArray(filters.team) && filters.team.length > 0
    ? filters.team as string[]
    : []
  if (teams.length === 0) return saasApps
  const ids = new Set(teams.flatMap((t) => TEAM_APP_IDS[t] ?? []))
  return saasApps.filter((a) => ids.has(a.id))
}

// ── Chart data helpers (filter-reactive) ──────────────────────────────────────

function computeSpendByCategory(apps: SaasApp[]) {
  return (Object.keys(categoryLabels) as SaasCategory[])
    .map((cat) => ({
      name: categoryLabels[cat],
      value: apps.reduce(
        (s, a) => s + (a.category === cat ? (a.monthlyEur ?? a.avgMonthlyEur ?? 0) : 0),
        0
      ),
    }))
    .filter((c) => c.value > 0)
}

function computeUtilizationData(apps: SaasApp[]) {
  return apps
    .filter(
      (a) =>
        a.active !== null &&
        a.seats !== null &&
        a.seats > 0 &&
        !a.shadowIT &&
        !a.pendingSetup &&
        !a.isVariableCost
    )
    .map((a) => ({
      name: a.name,
      pct: Math.round(((a.active as number) / (a.seats as number)) * 100),
    }))
    .sort((a, b) => b.pct - a.pct)
}

function computeHealthBuckets(apps: SaasApp[]) {
  let healthy = 0, actionNeeded = 0, lowUsage = 0, untracked = 0
  for (const a of apps) {
    if (a.shadowIT || a.pendingSetup) { untracked++; continue }
    if (a.isCriticalMultiAlert || isExpired(a) || isUnused(a) || isExpiringSoon(a, 30) || a.cancelling) { actionNeeded++; continue }
    if (isLowUsage(a)) { lowUsage++; continue }
    healthy++
  }
  return [
    { name: "Healthy",       value: healthy },
    { name: "Action Needed", value: actionNeeded },
    { name: "Low Usage",     value: lowUsage },
    { name: "Untracked",     value: untracked },
  ].filter((b) => b.value > 0)
}

function computeMonthlyTotal(apps: SaasApp[]) {
  return apps.reduce((s, a) => s + (a.monthlyEur ?? a.avgMonthlyEur ?? 0), 0)
}

function computeAvgUtilization(apps: SaasApp[]) {
  const withSeats = apps.filter((a) => a.seats !== null && a.seats > 0 && a.active !== null)
  if (withSeats.length === 0) return 0
  return Math.round(
    withSeats.reduce((s, a) => s + (a.active ?? 0), 0) /
    withSeats.reduce((s, a) => s + (a.seats ?? 0), 0) * 100
  )
}

// Global baseline for trend scaling
const GLOBAL_MONTHLY = saasApps.reduce((s, a) => s + (a.monthlyEur ?? a.avgMonthlyEur ?? 0), 0)
const TREND_BASELINE = [17200, 17800, 18100, 18500, 19000, GLOBAL_MONTHLY]

// ── Overlap detection ─────────────────────────────────────────────────────────

const OVERLAP_RULES: { category: string; ids: string[] }[] = [
  { category: "sales/CRM",            ids: ["salesforce", "hubspot", "intercom"] },
  { category: "storage",              ids: ["box", "dropbox"] },
  { category: "video calling",        ids: ["zoom", "google-meet"] },
]

const overlapGroups: OverlapGroup[] = OVERLAP_RULES.flatMap((rule) => {
  const matched = saasApps.filter((a) => rule.ids.includes(a.id))
  if (matched.length < 2) return []
  return [{
    category: rule.category,
    apps: matched.map((a) => a.name),
    monthlyCost: matched.reduce((s, a) => s + (a.monthlyEur ?? a.avgMonthlyEur ?? 0), 0),
  }]
}).sort((a, b) => b.monthlyCost - a.monthlyCost)

// ── Presets ───────────────────────────────────────────────────────────────────

const categoryPresets = (
  Object.entries(categoryLabels) as [SaasCategory, string][]
).map(([value, label]) => ({ label, filter: { category: [value] } }))

// ── Cell renderers (pure helpers) ─────────────────────────────────────────────


function renderUsage(app: SaasApp) {
  if (app.pendingSetup)                return { type: "compound" as const, value: { segments: [{ type: "text" as const, value: "Pending setup", tone: "secondary" as const }] } }
  if (app.shadowIT || app.isVariableCost) return "-"
  if (app.active === null || app.seats === null) return "-"
  if (app.seats === 0) return { type: "tag" as const, value: { label: "Not set up" } }
  if (isUnused(app))   return { type: "alertTag" as const, value: { level: "critical" as const, label: "0% · Unused" } }
  const pct = Math.round((app.active / app.seats) * 100)
  if (pct >= 80) return { type: "tag" as const, value: { label: `${pct}% · ${app.active}/${app.seats}`, icon: CheckCircle } }
  const level = pct >= 50 ? "warning" : "critical"
  return { type: "alertTag" as const, value: { level: level as "warning" | "critical", label: `${pct}% · ${app.active}/${app.seats}` } }
}

function renderSeats(app: SaasApp) {
  if (app.seats === null || app.pendingSetup || app.shadowIT || app.isVariableCost) {
    return {
      type: "compound" as const,
      value: { segments: [{ type: "text" as const, value: "-", tone: "secondary" as const }] },
    }
  }
  if (app.active === null || app.seats === 0) {
    return {
      type: "compound" as const,
      value: { segments: [{ type: "text" as const, value: app.seats.toString(), tone: "secondary" as const }] },
    }
  }
  return {
    type: "compound" as const,
    value: { segments: [{ type: "number" as const, value: app.seats, tone: "neutral" as const }] },
  }
}

function renderMonthlyCost(app: SaasApp) {
  if (app.isFree) {
    return {
      type: "compound" as const,
      value: { segments: [{ type: "text" as const, value: "Free", tone: "neutral" as const }] },
    }
  }
  if (app.isVariableCost) {
    return {
      type: "compound" as const,
      value: {
        segments: [
          { type: "text" as const, value: `${formatEur(app.avgMonthlyEur ?? 0)} avg`, tone: "neutral" as const },
        ],
      },
    }
  }
  if (app.monthlyEur === null) {
    return {
      type: "compound" as const,
      value: { segments: [{ type: "text" as const, value: "Unknown", tone: "secondary" as const }] },
    }
  }
  if (app.monthlyEur === 0) return "-"
  // Fully unused app — surface the full cost as wasted
  if (isUnused(app)) {
    return formatEur(app.monthlyEur)
  }
  return formatEur(app.monthlyEur)
}

function renderRenewal(app: SaasApp) {
  if (app.cancelling && app.renewalDate) {
    return {
      type: "compound" as const,
      value: {
        separator: " · ",
        segments: [
          { type: "text" as const, value: "Cancelling", tone: "warning" as const },
          { type: "text" as const, value: formatRenewalDate(app.renewalDate), tone: "secondary" as const },
        ],
      },
    }
  }
  if (app.renewalDate === null) {
    return {
      type: "compound" as const,
      value: { segments: [{ type: "text" as const, value: "-", tone: "secondary" as const }] },
    }
  }
  const days = daysUntil(app.renewalDate) as number
  if (days <= 0) {
    return {
      type: "compound" as const,
      value: {
        segments: [
          { type: "text" as const, value: `Expired on ${formatRenewalDate(app.renewalDate)}`, tone: "critical" as const },
        ],
      },
    }
  }
  const segments: { type: "text"; value: string; tone: CompoundTone }[] = [
    { type: "text", value: `${days}d`, tone: renewalTone(days) },
    { type: "text", value: formatRenewalDate(app.renewalDate), tone: "secondary" },
  ]
  if (app.autoRenew) {
    segments.push({ type: "text", value: "Auto-renews", tone: "secondary" })
  }
  return {
    type: "compound" as const,
    value: { separator: " · ", segments },
  }
}

// ── Optimistic update helpers ─────────────────────────────────────────────────

function applyOptimisticRevoke(app: SaasApp, revokedCount: number): SaasApp {
  if (app.active === null || app.monthlyEur === null) return app
  const newActive  = Math.max(0, app.active - revokedCount)
  const perSeat    = app.seats ? app.monthlyEur / app.seats : 0
  const newMonthly = Math.round(app.monthlyEur - revokedCount * perSeat)
  return { ...app, active: newActive, monthlyEur: newMonthly }
}

// ── Overview tab ──────────────────────────────────────────────────────────────

function OverviewTab() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type F = Record<string, any>

  const items = useMemo(
    () => [
      // ── Row 1: KPI metrics ───────────────────────────────────────────────────
      {
        id: "metric-spend",
        type: "metric" as const,
        title: "Monthly Spend",
        description: "Total SaaS spend for selected team",
        format: { type: "currency" as const, currency: "EUR" },
        fetchData: async (f: F) => {
          const apps = appsForFilters(f)
          const total = computeMonthlyTotal(apps)
          return { value: total, previousValue: Math.round(total * 0.94) }
        },
      },
      {
        id: "metric-apps",
        type: "metric" as const,
        title: "Active Apps",
        description: "Apps used by this team",
        fetchData: async (f: F) => {
          const apps = appsForFilters(f)
          return { value: apps.length, previousValue: Math.max(1, apps.length - 2) }
        },
      },
      {
        id: "metric-utilization",
        type: "metric" as const,
        title: "Avg Utilization",
        description: "Across seat-based apps",
        format: { type: "percent" as const },
        fetchData: async (f: F) => {
          const apps = appsForFilters(f)
          return { value: computeAvgUtilization(apps), previousValue: 71 }
        },
      },
      {
        id: "metric-expiring",
        type: "metric" as const,
        title: "Expiring Soon",
        description: "Contracts due within 90 days",
        fetchData: async (f: F) => {
          const apps = appsForFilters(f)
          const count = apps.filter((a) => {
            const d = daysUntil(a.renewalDate)
            return d !== null && d <= 90
          }).length
          return { value: count }
        },
      },

      // ── Row 2: Spend charts ──────────────────────────────────────────────────
      {
        id: "chart-spend-by-category",
        type: "chart" as const,
        title: "Spend by Category",
        description: "Monthly cost breakdown",
        chart: {
          type: "pie" as const,
          innerRadius: 0.5,
          showLegend: true,
          showLabels: false,
          valueFormatter: (v: number) => formatEur(v),
        },
        fetchData: async (f: F) => ({
          series: {
            name: "Monthly spend",
            data: computeSpendByCategory(appsForFilters(f)),
          },
        }),
      },
      {
        id: "chart-spend-trend",
        type: "chart" as const,
        title: "Spend Trend",
        description: "SaaS spend over the last 6 months",
        chart: {
          type: "line" as const,
          showArea: true,
          showDots: true,
          showLegend: false,
          valueFormatter: (v: number) => formatEur(v),
        },
        fetchData: async (f: F) => {
          const apps = appsForFilters(f)
          const current = computeMonthlyTotal(apps)
          const ratio = GLOBAL_MONTHLY > 0 ? current / GLOBAL_MONTHLY : 1
          return {
            categories: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
            series: [
              {
                name: "Monthly Spend",
                data: TREND_BASELINE.map((v) => Math.round(v * ratio)),
              },
            ],
          }
        },
      },

      // ── Row 3: Utilization & health ──────────────────────────────────────────
      {
        id: "chart-utilization",
        type: "chart" as const,
        title: "License Utilization",
        description: "Active seats as % of purchased seats",
        chart: {
          type: "bar" as const,
          orientation: "horizontal" as const,
          showLegend: false,
          showLabels: true,
          valueFormatter: (v: number) => `${v}%`,
        },
        fetchData: async (f: F) => {
          const data = computeUtilizationData(appsForFilters(f))
          return {
            categories: data.map((d) => d.name),
            series: [{ name: "Utilization", data: data.map((d) => d.pct) }],
          }
        },
      },
      {
        id: "chart-app-health",
        type: "chart" as const,
        title: "App Health",
        description: "Apps grouped by status",
        chart: {
          type: "pie" as const,
          innerRadius: 0.5,
          showLegend: true,
          showLabels: false,
          valueFormatter: (v: number) => `${v} apps`,
        },
        fetchData: async (f: F) => ({
          series: {
            name: "Apps",
            data: computeHealthBuckets(appsForFilters(f)),
          },
        }),
      },
    ],
    []
  )

  return (
    <div className="flex min-h-full flex-1 flex-col overflow-auto py-5">
      <F0AnalyticsDashboard
        navigationFilters={{
          date: {
            type: "date-navigator",
            defaultValue: new Date("2026-06-01"),
            granularity: ["month", "quarter", "year"],
          },
        }}
        filters={overviewFilters}
        presets={overviewPresets}
        items={items}
      />
    </div>
  )
}

// ── Applications tab ──────────────────────────────────────────────────────────

function ApplicationsTab() {
  const [apps, setApps]                = useState<SaasApp[]>(saasApps)
  const [optimizeApp, setOptimizeApp]  = useState<SaasApp | null>(null)
  const [renewalApp, setRenewalApp]    = useState<SaasApp | null>(null)
  const [offboardOpen, setOffboardOpen] = useState(false)
  const [overlapApp, setOverlapApp]    = useState<OverlapGroup | null>(null)
  const [overlapDismissed, setOverlapDismissed] = useState(false)

  const handleRevokeConfirm = (revokedApp: SaasApp, count: number) => {
    setApps((prev) =>
      prev.map((a) =>
        a.id === revokedApp.id ? applyOptimisticRevoke(a, count) : a
      )
    )
  }

  const source = useDataCollectionSource<SaasApp>(
    {
      search: { enabled: true },
      filters: {
        category: {
          type: "in" as const,
          label: "Category",
          options: {
            options: (
              Object.entries(categoryLabels) as [SaasCategory, string][]
            ).map(([value, label]) => ({ value, label })),
          },
        },
      },
      presets: categoryPresets,
      currentFilters: {},
      summaries: { _footer: { type: "sum" as const } },
      sortings: {
        name:        { label: "App" },
        category:    { label: "Category" },
        usage:       { label: "Usage" },
        seats:       { label: "Seats" },
        monthlyEur:  { label: "Monthly Cost" },
        renewalDate: { label: "Renews In" },
      },
      primaryActions: () => ({
        label: "Connect app",
        icon: Add,
        onClick: () => {},
      }),
      secondaryActions: () => [
        { label: "Offboard employee", icon: PersonMinus, onClick: () => setOffboardOpen(true) },
        { label: "Export",            icon: Upload,      onClick: () => {} },
      ],
      selectable: (item: SaasApp) => item.id,
      bulkActions: () => ({
        primary: [
          { label: "Export",         id: "export",  icon: Upload   },
          { label: "Compare costs",  id: "compare", icon: ChartLine },
          { type: "separator" as const },
          { label: "Remove",         id: "remove",  icon: Delete, critical: true },
        ],
        secondary: [] as never[],
      }),
      itemActions: (item: SaasApp) => {
        const unused  = item.seats !== null && item.active !== null ? item.seats - item.active : 0
        const days    = daysUntil(item.renewalDate)
        const expiring = days !== null && days > 0 && days <= 90

        if (item.shadowIT) {
          return [
            { label: "Approve app",  icon: Add,    onClick: () => {} },
            { label: "Block app",    icon: Delete, onClick: () => {}, critical: true },
          ]
        }

        if (item.pendingSetup) {
          return [
            { label: "Complete setup", icon: Sparkles, onClick: () => {} },
            { type: "separator" as const },
            { label: "Remove app", onClick: () => {}, critical: true },
          ]
        }

        type A = { label: string; icon?: typeof Add | typeof Sparkles | typeof CalendarArrowDown | typeof Delete; onClick: () => void; critical?: boolean }
        type S = { type: "separator" }
        const actions: (A | S)[] = []

        if (unused > 0 && !item.cancelling && !item.isFree) {
          actions.push({ label: "Optimize licences", icon: Sparkles, onClick: () => setOptimizeApp(item) })
        }
        if (expiring && !item.cancelling) {
          actions.push({ label: "Review renewal", icon: CalendarArrowDown, onClick: () => setRenewalApp(item) })
        }
        if (isExpired(item)) {
          actions.push({ label: "Renew now", icon: CalendarArrowDown, onClick: () => setRenewalApp(item) })
        }
        if (isFull(item)) {
          actions.push({ label: "Request more seats", onClick: () => {} })
        }

        if (actions.length > 0) actions.push({ type: "separator" })

        actions.push(
          { label: "View details",   onClick: () => {} },
          { label: "Manage seats",   onClick: () => {} },
          { label: "View contract",  onClick: () => {} },
        )

        if (!item.cancelling) {
          actions.push({ type: "separator" })
          actions.push({ label: "Remove app", onClick: () => {}, critical: true })
        } else {
          actions.push({ label: "View cancellation details", onClick: () => {} })
        }

        return actions
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.category)
            ? (filters.category as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = apps
            .filter((r) => (wanted.length === 0 ? true : wanted.includes(r.category)))
            .filter((r) => (term === "" ? true : r.name.toLowerCase().includes(term)))

          const hasSort = sortings && sortings.length > 0

          const sorted = hasSort
            ? applySort(filtered, sortings, (r, field) => {
                switch (field) {
                  case "name":        return r.name.toLowerCase()
                  case "category":    return r.category
                  case "usage":       return r.active !== null && r.seats ? r.active / r.seats : -1
                  case "seats":       return r.seats ?? -1
                  case "monthlyEur":  return r.monthlyEur ?? r.avgMonthlyEur ?? -1
                  case "renewalDate": return r.renewalDate ? r.renewalDate.getTime() : Infinity
                  default:            return null
                }
              })
            : [...filtered].sort((a, b) => {
                const diff = urgencyScore(a) - urgencyScore(b)
                if (diff !== 0) return diff
                // within same priority group: sort by monthly cost desc
                return (b.monthlyEur ?? b.avgMonthlyEur ?? 0) - (a.monthlyEur ?? a.avgMonthlyEur ?? 0)
              })

          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          const records = sorted.slice(start, start + perPage)

          return {
            type: "pages" as const,
            records,
            summaries: saasApps[0],
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
    },
    []
  )

  return (
    <StandardLayout>
      {/* Overlap detection banner */}
      {!overlapDismissed && overlapGroups.length > 0 && (
        <OverlapBanner
          groups={overlapGroups}
          onViewAnalysis={(g) => setOverlapApp(g)}
          onDismiss={() => setOverlapDismissed(true)}
        />
      )}

      <OneDataCollection
        source={source}
        onBulkAction={() => {}}
        onSelectItems={() => {}}
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: 1,
              columns: [
                {
                  id: "name",
                  label: "App",
                  sorting: "name",
                  summaryPlaceholder: `Total · ${saasApps.length} apps`,
                  render: (item: SaasApp) => ({
                    type: "company" as const,
                    value: { name: item.name, src: item.logo },
                  }),
                },
                {
                  id: "category",
                  label: "Category",
                  sorting: "category",
                  summaryPlaceholder: "",
                  render: (item: SaasApp) => ({
                    type: "tag" as const,
                    value: { label: categoryLabels[item.category] },
                  }),
                },
                {
                  id: "seats",
                  label: "Seats",
                  sorting: "seats",
                  summaryPlaceholder: SUMMARY_TOTAL_SEATS.toString(),
                  render: (item: SaasApp) => renderSeats(item),
                },
                {
                  id: "usage",
                  label: "Usage",
                  sorting: "usage",
                  summaryPlaceholder: `${SUMMARY_USAGE_PCT}% avg`,
                  render: (item: SaasApp) => renderUsage(item),
                },
                {
                  id: "monthlyEur",
                  label: "Monthly Cost",
                  sorting: "monthlyEur",
                  align: "right" as const,
                  summaryPlaceholder: `${formatEur(SUMMARY_MONTHLY)}/mo`,
                  render: (item: SaasApp) => renderMonthlyCost(item),
                },
                {
                  id: "renewalDate",
                  label: "Renews In",
                  sorting: "renewalDate",
                  summaryPlaceholder:
                    SUMMARY_EXPIRING_SOON > 0
                      ? `${SUMMARY_EXPIRING_SOON} expiring soon`
                      : "All good",
                  render: (item: SaasApp) => renderRenewal(item),
                },
              ],
            },
          },
        ]}
      />

      {/* Panels */}
      <OptimizePanel
        app={
          optimizeApp
            ? {
                id: optimizeApp.id,
                name: optimizeApp.name,
                seats: optimizeApp.seats ?? 0,
                active: optimizeApp.active ?? 0,
                monthlyEur: optimizeApp.monthlyEur ?? 0,
              }
            : null
        }
        onClose={() => setOptimizeApp(null)}
        onConfirm={(_app, count) => {
          handleRevokeConfirm(optimizeApp!, count)
          setOptimizeApp(null)
        }}
      />
      <RenewalPanel
        app={
          renewalApp
            ? {
                id: renewalApp.id,
                name: renewalApp.name,
                active: renewalApp.active ?? 0,
                seats: renewalApp.seats ?? 0,
                monthlyEur: renewalApp.monthlyEur ?? 0,
                renewalDate: renewalApp.renewalDate,
              }
            : null
        }
        daysUntil={daysUntil(renewalApp?.renewalDate ?? null)}
        onClose={() => setRenewalApp(null)}
      />
      <OffboardingModal
        isOpen={offboardOpen}
        onClose={() => setOffboardOpen(false)}
      />
      <OverlapPanel
        group={overlapApp}
        onClose={() => setOverlapApp(null)}
      />
    </StandardLayout>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export function SaasManagementPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const rawTab = searchParams.get("saas-tab")
  const activeTab: TabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as TabId) : "overview"

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams(searchParams)
    if (id === "overview") next.delete("saas-tab")
    else next.set("saas-tab", id)
    setSearchParams(next)
  }

  const tabsWithNav = tabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "documents",
              name: "SaaS Management",
              href: "/p/factorial-it/saas-management",
            }}
            actions={[]}
          />
          <Tabs key={activeTab} tabs={tabsWithNav} activeTabId={activeTab} />
        </>
      }
    >
      {activeTab === "overview"     && <OverviewTab />}
      {activeTab === "applications" && <ApplicationsTab />}
      {activeTab === "inbox"        && <PlaceholderTab label="Inbox" />}
      {activeTab === "contracts"    && <PlaceholderTab label="Contracts" />}
      {activeTab === "spend"        && <PlaceholderTab label="Spend" />}
      {activeTab === "budgets"      && <BudgetsTab />}
    </Page>
  )
}

function PlaceholderTab({ label }: { label: string }) {
  return (
    <div className="p-6 text-f1-foreground-secondary text-base">
      {label} content coming soon.
    </div>
  )
}
