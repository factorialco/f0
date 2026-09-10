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
    id: "personal-document",
    title: "Review your updated employment document",
    subtitle: "One document awaiting your review · sample data",
    ctaLabel: "Review document",
  },
]
