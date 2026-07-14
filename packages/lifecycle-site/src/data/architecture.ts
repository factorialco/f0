// Source: chat-defined architecture (repo as source of truth, Claude as door,
// Storybook + F0 Compose + Dashboard as surfaces).

export type Surface = {
  id: string
  label: string
  audience: string
  purpose: string
  howAccessed: string
  doesNotDo?: string
}

export const surfaces: Surface[] = [
  {
    id: "claude",
    label: "Claude / OpenCode",
    audience: "Anyone contributing to F0",
    purpose:
      "The conversation. The single entry point. With F0 skills loaded, Claude reads the repo and routes you to the right surface.",
    howAccessed: "Open it directly. This is the only thing you need to remember.",
  },
  {
    id: "compose",
    label: "F0 Compose",
    audience: "Designers and engineers using F0",
    purpose:
      "Renders the composition Claude generates. You see the real screen built from real DS pieces.",
    howAccessed: "Appears as the result of asking Claude to build something.",
    doesNotDo: "Not a search tool. Not a design canvas. It's the output, not the input.",
  },
  {
    id: "storybook",
    label: "Storybook",
    audience: "Anyone using F0",
    purpose:
      "The catalogue. Browse every component, read its MDX docs, and see its maturity badge.",
    howAccessed: "Click a link Claude gives you, or browse manually when you already know what you want.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    audience: "Foundations only (internal tool)",
    purpose:
      "Audit the catalogue against DoD. Generate mechanical patches. Plan promotion waves.",
    howAccessed: "Local-only, gitignored. Builders never see it.",
    doesNotDo: "It is NOT for PDs or PEs consuming F0. Its work is reflected in Storybook (correct badges).",
  },
]

export const sourceOfTruth = {
  what: "The F0 repo (code + MDX + skills)",
  why: "Everything else (Storybook, Compose, Claude, Dashboard) reads from it. Nothing maintains its own truth in parallel.",
  consequence:
    "If a piece of information requires manual sync between systems, it is wrongly designed. The repo is the source of truth; Figma is an optional sandbox.",
}

export const goldenRules = [
  "The repo is the only source of truth.",
  "The story tag is the source of truth for maturity; the folder is placement.",
  "F0 grows intentionally. The review & filter step (with Claude) is a self-help filter, not a gate.",
  "Anyone contributing only needs Claude. No tool to learn — only intent to express.",
  "Figma is not source of truth. Optional sandbox in Phase 2 only.",
  "Format + tsc before every commit. Quality gate after every code change.",
]
