import type { IconType } from "@factorialco/f0-react"

import {
  ChartLine,
  Clock,
  Pencil,
  Search,
} from "@factorialco/f0-react/icons/app"

/**
 * Suggestion engine ported from Jonathan's one-notch exploration
 * (factorial-composer, `src/framework/shell/oneContent.tsx`), reduced to
 * English and reshaped for the Home prompt bar: same verb-vs-literal
 * matching branches, same caps, plus prefix metadata so the UI can render
 * the matched head in default color and the completion in secondary.
 */

export type OneActionId = "create" | "analyze" | "find" | "automate"

export type OneAction = {
  id: OneActionId
  label: string
  icon: IconType
  /** Trigger words: if the query contains one, the whole category matches. */
  verbs: string[]
  prompts: string[]
}

export const ONE_ACTIONS: OneAction[] = [
  {
    id: "create",
    label: "Create",
    icon: Pencil,
    verbs: ["create", "new", "make", "generate", "draft", "write", "compose"],
    prompts: [
      "Create a new engagement survey",
      "Create an onboarding survey",
      "Create an exit survey",
      "Create an eNPS pulse survey",
      "Create a performance review survey",
      "Create a job posting for a Senior Designer",
      "Create a new time off policy",
      "Create a remote work policy",
      "Create an expense policy",
      "Create a training plan for the sales team",
      "Create a new workflow for approvals",
      "Create an announcement for the company",
    ],
  },
  {
    id: "analyze",
    label: "Analyze",
    icon: ChartLine,
    verbs: ["analyze", "analyse", "report", "compare", "trend", "metric"],
    prompts: [
      "Analyze absenteeism this quarter",
      "Analyze overtime trends by department",
      "Analyze turnover in Sales",
      "Analyze time off usage by team",
      "Analyze hiring pipeline conversion",
      "Analyze salary bands vs market",
      "Analyze engagement survey results",
      "Analyze expense spending by category",
    ],
  },
  {
    id: "find",
    label: "Find",
    icon: Search,
    verbs: ["find", "search", "where", "show", "list", "who"],
    prompts: [
      "Find pending expense approvals",
      "Find my February payslip",
      "Find employees on leave this week",
      "Find contracts expiring this month",
      "Find open job positions",
      "Find the remote work policy",
      "Find pending performance reviews",
      "Find who is working today",
    ],
  },
  {
    id: "automate",
    label: "Automate",
    icon: Clock,
    verbs: ["automate", "routine", "schedule", "remind", "every", "weekly"],
    prompts: [
      "Automate a weekly team hours summary",
      "Automate late arrival alerts",
      "Automate a monthly expense report",
      "Automate onboarding task reminders",
      "Automate contract renewal alerts",
      "Automate a daily attendance digest",
    ],
  },
]

/**
 * The chips under the composer, in order — three only (per Oskar,
 * 2026-08-31): Create, Automate, Analyze.
 *
 * Deliberately a SEPARATE list from ONE_ACTIONS rather than a trim of it:
 * `find` keeps its verbs and prompts in the corpus, so typing "find…"
 * still type-aheads exactly as before; it simply has no chip.
 */
export const CHIP_ACTION_IDS = ["create", "automate", "analyze"] as const

/** The employee frame swaps the analyst chip for Find — self-service is
 *  about locating your own things, not reporting on other people's. */
export const EMPLOYEE_CHIP_ACTION_IDS = ["create", "automate", "find"] as const

const byId = (id: string) => ONE_ACTIONS.find((action) => action.id === id)!

export const CHIP_ACTIONS: OneAction[] = CHIP_ACTION_IDS.map(byId)
export const EMPLOYEE_CHIP_ACTIONS: OneAction[] =
  EMPLOYEE_CHIP_ACTION_IDS.map(byId)

/**
 * Role-aware prompt catalog, transcribed from the tech plan's full
 * inventory ("Eligibility-filtered & role-aware suggestions", Notion,
 * Aug 31). In production a suggestion earns its pill through four gates —
 * module purchased, session policy, `audience` (company-scope prompts are
 * admin-only) and a client-side manager gate — then personal prompts sort
 * LAST inside their group and each group caps at 5.
 *
 * The prototype does not model modules or policies, so this bakes in the
 * RESULT for the two profiles it can show: the doc's "Admin (12 pills)"
 * and "Employee (5 pills)" captures, with the personal prompts already in
 * their last-in-group position.
 *
 * Employee `analyze` is deliberately EMPTY: every Analyze prompt is
 * company-scope, so the audience gate removes the category entirely for
 * non-admins — which is why the doc's employee capture shows only Find
 * and Create.
 */
export type SuggestionRole = "admin" | "employee"

const ROLE_PROMPTS: Record<
  SuggestionRole,
  Partial<Record<OneActionId, string[]>>
> = {
  admin: {
    analyze: [
      "Weekly evolution of active headcount",
      "Weekly time tracking report",
      "Weekly time off report",
      "Give me the salary cost by department",
    ],
    find: [
      "Who is on vacation today?",
      "How many overtime hours did my team work this month?",
      "Who hasn't clocked in today?",
      "How many terminations has the company had this month?",
      "Do I have any pending time off requests to approve?",
    ],
    create: [
      "Create an onboarding course for new hires",
      "Create a data protection (GDPR) course",
      // personal — sorts last, fits while Create has slack
      "Request time off for me",
    ],
  },
  employee: {
    // Company-scope Analyze prompts are admin-only (audience gate).
    analyze: [],
    // All five are documented employee-scope prompts: the first is
    // "shown" for every role in the eligibility table, the rest are the
    // PoC's personal set (tech plan, Part 1) — vacation days left, next
    // leave, who's out, next holiday. `timeScheduling` covers them all.
    find: [
      "Who is on vacation today?",
      "How many vacation days do I have left?",
      "When's my next approved leave?",
      "Who's out in the next two weeks?",
      "When is the next public holiday?",
    ],
    // Only THREE employee-scope creates exist in the curated catalog
    // ("In-Product Prompt Suggestions by Module", Jun 10 — prompts drawn
    // from 91,497 real conversations filtered to >60% success). Every
    // other Create in that catalog is admin or manager scope (courses,
    // surveys, dashboards, contracts, shift schedules), so this group
    // stops at three rather than being padded with invented prompts.
    create: [
      // TIME_OFF/Create — `createLeave`, called out in the tech plan as
      // "genuinely executable" today.
      "Request time off for next Friday",
      // EXPENSES/Create.
      "Upload these receipts as expenses",
      // PERFORMANCE/Action — peer feedback, the one performance entry
      // that is not reviewer-only.
      "Give feedback to a team member",
    ],
    // INFERRED, NOT from the docs: One's catalog has no Automate entries
    // at all (its categories are Analyze/Find/Create, and the PoC's are
    // Find/Requests/Pay). The chip exists in the Figma frame, so these
    // are personal-scope stand-ins — the admin's team-wide automations
    // would be stripped by the same gates. Replace when real routine
    // entries land.
    automate: [
      "Automate a reminder before my time off starts",
      "Automate a reminder to submit my expenses",
      "Automate a weekly summary of my hours",
    ],
  },
}

/**
 * Documented but NOT surfaced, kept here so the next person does not have
 * to re-derive them:
 *  · Pay (payrollCompensation): "When's my next payday?", "Show me my
 *    latest payslip" — real prompts, but the PoC files them under a `pay`
 *    group this prototype has no chip for.
 *  · "What's the status of my requests?" — in the PoC set, but the tech
 *    plan records it hitting a PERMISSIONS ERROR on the leave-request
 *    source locally. Do not ship it without re-verifying.
 *  · "What's pending in my inbox?" — the highest-intent employee question,
 *    explicitly DROPPED because no agent skill covers the Inbox.
 */

/** The prompts this role can actually act on; falls back to the shared
 *  corpus for categories the catalog does not gate (Automate for admin). */
function promptsFor(action: OneAction, role: SuggestionRole): string[] {
  return ROLE_PROMPTS[role][action.id] ?? action.prompts
}

export type OneSuggestion = {
  action: OneAction
  text: string
  /** Length of the matched prefix (0 = substring match, no highlight). */
  matchLen: number
}

const MAX_SUGGESTIONS = 6
const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "for",
  "to",
  "of",
  "in",
  "on",
  "about",
  "me",
  "my",
  "and",
])

/** Tokens ≥3 chars that aren't stopwords nor the action's own verbs. */
function contentWords(query: string, action: OneAction): string[] {
  return query
    .split(/\s+/)
    .filter(
      (word) =>
        word.length >= 3 &&
        !STOP_WORDS.has(word) &&
        !action.verbs.includes(word)
    )
}

export function buildSuggestions(
  rawQuery: string,
  role: SuggestionRole
): OneSuggestion[] {
  const query = rawQuery.trim().toLowerCase()
  if (query.length < 2) return []

  const verbRows: OneSuggestion[] = []
  const literalRows: OneSuggestion[] = []

  for (const action of ONE_ACTIONS) {
    const prompts = promptsFor(action, role)
    if (prompts.length === 0) continue
    const verbHit = action.verbs.some((verb) => query.includes(verb))
    const prefix = prompts.filter((p) => p.toLowerCase().startsWith(query))
    const contains = prompts.filter(
      (p) =>
        !p.toLowerCase().startsWith(query) && p.toLowerCase().includes(query)
    )

    if (verbHit) {
      const topical = contentWords(query, action)
      if (topical.length === 0) {
        // Bare verb ("create…") → the category's default list.
        verbRows.push(
          ...prompts
            .slice(0, MAX_SUGGESTIONS)
            .map((text) => ({ action, text, matchLen: 0 }))
        )
      } else {
        // Verb + topic → literal matches first, then topical contains.
        const matches = [
          ...prefix.map((text) => ({ action, text, matchLen: query.length })),
          ...contains.map((text) => ({ action, text, matchLen: 0 })),
          ...prompts
            .filter((p) => topical.some((w) => p.toLowerCase().includes(w)))
            .filter((p) => !prefix.includes(p) && !contains.includes(p))
            .map((text) => ({ action, text, matchLen: 0 })),
        ]
        verbRows.push(...matches.slice(0, MAX_SUGGESTIONS))
      }
    } else {
      literalRows.push(
        ...prefix.map((text) => ({ action, text, matchLen: query.length })),
        ...contains.map((text) => ({ action, text, matchLen: 0 }))
      )
    }
  }

  // A named verb wins over bare literal matches (same precedence as the
  // one-notch: verbGroups.length ? verbGroups : topicGroups).
  const rows = verbRows.length > 0 ? verbRows : literalRows
  const seen = new Set<string>()
  return rows
    .filter((row) => (seen.has(row.text) ? false : (seen.add(row.text), true)))
    .slice(0, MAX_SUGGESTIONS)
}

/** Chip click → the category's default suggestions, same row style. */
export function categorySuggestions(
  actionId: OneActionId,
  role: SuggestionRole
): OneSuggestion[] {
  const action = ONE_ACTIONS.find((a) => a.id === actionId)
  if (!action) return []
  return promptsFor(action, role)
    .slice(0, MAX_SUGGESTIONS)
    .map((text) => ({ action, text, matchLen: 0 }))
}
