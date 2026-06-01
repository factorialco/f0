/**
 * Pools of random phrases the storybook mock streams as fake assistant
 * responses. Each call to `pickRandom*()` returns one entry — kept short
 * so the streaming animation finishes in a reasonable demo timeframe.
 */

const RESPONSE_PHRASES = [
  "Pulling that data together — here's what I found across your company this month.",
  "Based on your latest figures, headcount grew by 4% and absences trended slightly down.",
  "I've cross-referenced the policy with the affected employees. Nothing urgent to flag.",
  "Here's a summary you can share: most metrics are stable, two outliers worth a look.",
  "Done. The numbers line up — I'll let you know if anything changes after the next sync.",
  "Quick update: the report you asked for is ready. Three insights stood out.",
  "I went through the timesheets — no policy violations this period, just a few late check-ins.",
  "Looking at the requisitions, two open positions are pending approval since yesterday.",
  "Compensation alignment looks healthy. One role is slightly below band — flagged for review.",
  "I drafted a short version you can use as the executive summary. Tell me if you want it longer.",
  "The trend you suspected is real: hiring velocity has dropped 12% quarter-over-quarter.",
  "I cleaned up the duplicate entries and merged them. The dashboard should reflect that now.",
  "All onboarding tasks for next week are scheduled. Nothing missing from the checklist.",
  "Here's the breakdown by department — Engineering and Sales are the two driving the change.",
  "Confirmed: those policy changes only affect Spain-based employees. The other countries are unchanged.",
]

const THINKING_PHRASES = [
  "Checking the latest data…",
  "Pulling the relevant records…",
  "Cross-referencing with the policy…",
  "Summarising the findings…",
  "Looking up the headcount snapshot…",
  "Aggregating the timesheets…",
  "Comparing across departments…",
  "Reading the requisition pipeline…",
  "Resolving the entity references…",
  "Drafting the response…",
]

export function pickRandomResponse(): string {
  return RESPONSE_PHRASES[Math.floor(Math.random() * RESPONSE_PHRASES.length)]
}

export function pickRandomThinkingSteps(count = 3): string[] {
  const shuffled = [...THINKING_PHRASES].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
