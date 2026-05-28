// Source: packages/react/docs/contributions.mdx (Triage outcomes)

export type TriageOutcome = {
  id: string
  label: string
  meaning: string
  nextStep: string
}

export const triageOutcomes: TriageOutcome[] = [
  {
    id: "accepted",
    label: "Accepted",
    meaning: "Fits F0 scope. Foundations adopts it.",
    nextStep: "Move to Phase 2 (Design). Owner team starts.",
  },
  {
    id: "accepted-as-domain",
    label: "Accepted as domain",
    meaning: "Valid component but not Foundations-owned.",
    nextStep: "Lives under sds/<area>/. Domain team owns it.",
  },
  {
    id: "needs-info",
    label: "Needs info",
    meaning: "Use cases unclear or alternatives unexplored.",
    nextStep: "Proposer updates the issue. Foundations re-reviews.",
  },
  {
    id: "rejected",
    label: "Rejected",
    meaning: "Out of scope, or already covered by an existing component.",
    nextStep: "Issue closed with the reason and (if applicable) a link to the existing component.",
  },
]

export const responseExpectation = {
  headline: "How fast does Foundations respond?",
  body:
    "Foundations reviews proposals based on team availability and as quickly as possible. We don't commit to a fixed SLA today — it depends on team size and current focus.",
  urgentCta:
    "For urgent matters, ping us in #f0-support with a link to the issue or PR.",
}
