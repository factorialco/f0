import { Comment } from "@factorialco/f0-react/icons/app"

import { needsYouTasks, type NeedsYouTask } from "../fixtures"

// Additional simulated measurements for the report, not production records.
// Candidate identities and phase/status rows remain sourced from PR #48.
export const REPORT_SAMPLE = {
  stalledCandidateId: "c4",
  daysWithoutProgress: 9,
  expenseBudget: 10000,
  expenseActual: 11800,
}

export const BIRTHDAY_SAMPLE = {
  firstName: "Leslie",
  lastName: "Alexander",
  seed: "leslie",
  date: new Date(2026, 8, 10),
}

export const PERSONAL_TASKS: NeedsYouTask[] = [
  {
    ...needsYouTasks[2],
    id: "personal-modelo-145",
    title: "Complete Modelo 145 for 2026",
    subtitle: "Due tomorrow",
    ctaLabel: "Complete document",
  },
  {
    ...needsYouTasks[0],
    id: "personal-ai-survey",
    icon: Comment,
    title: "Complete the AI Adoption survey",
    subtitle: "Due this week",
    ctaLabel: "Complete survey",
  },
  {
    ...needsYouTasks[0],
    id: "personal-forms",
    icon: Comment,
    title: "Review your pending forms",
    subtitle: "3 forms to complete",
    ctaLabel: "Review forms",
  },
]

export const HOME_FOCUS_LABELS = {
  personal: "Personal tasks",
  team: "Team updates",
  recruitment: "Hiring",
}
export const ONE_USAGE = { plan: "Pro", used: 250, total: 1000 }
