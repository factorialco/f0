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

export type OneSuggestion = {
  action: OneAction
  text: string
  /** Length of the matched prefix (0 = substring match, no highlight). */
  matchLen: number
}

const MAX_SUGGESTIONS = 6
const STOP_WORDS = new Set([
  "a", "an", "the", "for", "to", "of", "in", "on", "about", "me", "my", "and",
])

/** Tokens ≥3 chars that aren't stopwords nor the action's own verbs. */
function contentWords(query: string, action: OneAction): string[] {
  return query
    .split(/\s+/)
    .filter(
      (word) =>
        word.length >= 3 && !STOP_WORDS.has(word) && !action.verbs.includes(word)
    )
}

export function buildSuggestions(rawQuery: string): OneSuggestion[] {
  const query = rawQuery.trim().toLowerCase()
  if (query.length < 2) return []

  const verbRows: OneSuggestion[] = []
  const literalRows: OneSuggestion[] = []

  for (const action of ONE_ACTIONS) {
    const verbHit = action.verbs.some((verb) => query.includes(verb))
    const prefix = action.prompts.filter((p) =>
      p.toLowerCase().startsWith(query)
    )
    const contains = action.prompts.filter(
      (p) => !p.toLowerCase().startsWith(query) && p.toLowerCase().includes(query)
    )

    if (verbHit) {
      const topical = contentWords(query, action)
      if (topical.length === 0) {
        // Bare verb ("create…") → the category's default list.
        verbRows.push(
          ...action.prompts
            .slice(0, MAX_SUGGESTIONS)
            .map((text) => ({ action, text, matchLen: 0 }))
        )
      } else {
        // Verb + topic → literal matches first, then topical contains.
        const matches = [
          ...prefix.map((text) => ({ action, text, matchLen: query.length })),
          ...contains.map((text) => ({ action, text, matchLen: 0 })),
          ...action.prompts
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
export function categorySuggestions(actionId: OneActionId): OneSuggestion[] {
  const action = ONE_ACTIONS.find((a) => a.id === actionId)
  if (!action) return []
  return action.prompts
    .slice(0, MAX_SUGGESTIONS)
    .map((text) => ({ action, text, matchLen: 0 }))
}
