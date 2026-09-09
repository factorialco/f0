import { AGENT_THREADS, type RunEntry } from "./agentThreads"

/**
 * The Agents catalogue (Figma 2739:463194 for the templates).
 *
 * What each template IS lives here — name, face, job, and the words that
 * route a typed brief to it. What each one SAYS and what it has DONE live
 * in `agentThreads.ts`, because a thread is long enough to be worth its
 * own file and because that is also the run log (see the note there).
 *
 * Emoji come from the frame RENDERS, not from its codegen: the Dev Mode
 * export resolved three of the four instance overrides to the same
 * compass glyph, which is the "per-node screenshots resolve instance
 * overrides differently" trap already in NOTES. The renders read 🧭 / 🧾
 * / 📈 / 🔍.
 */

export type AgentTemplate = {
  id: string
  name: string
  emoji: string
  description: string
  /**
   * Routes a freely typed brief to this template. The frame's own prompt
   * ("…you're going to be our chief of staff here…") lands on Chief of
   * Staff through it.
   */
  match: RegExp
  /** How often it runs, said in the words the plan uses. */
  cadence: string
}

export const AGENT_TEMPLATES: AgentTemplate[] = [
  {
    id: "chief-of-staff",
    name: "Chief of Staff",
    emoji: "🧭",
    description: "Tracks what changed and highlights what needs your attention",
    match: /chief of staff|\bcos\b|coordinat|priorit/i,
    cadence: "Every weekday at 08:00",
  },
  {
    id: "expense-manager",
    name: "Expense manager",
    emoji: "🧾",
    description:
      "Reconciles weekly expenses and follows up on missing information",
    match: /expense|receipt|reimburs|spend|gasto/i,
    cadence: "Every Monday at 08:00",
  },
  {
    id: "product-performance",
    name: "Product performance",
    emoji: "📈",
    description:
      "Investigates performance issues and surfaces actionable evidence",
    match: /performance|latency|slow|p9[0-9]|regression|incident/i,
    cadence: "Every 15 minutes",
  },
  {
    id: "talent-scout",
    name: "Talent scout",
    emoji: "🔍",
    description:
      "Sources candidates, researches profiles, and drafts personalized outreach",
    match: /talent|sourc|candidat|recruit|hiring|outreach/i,
    cadence: "Every weekday at 07:30",
  },
]

/** The empty state's own emoji (Figma 2739:464375 — 20px/Wizard). */
export const AGENTS_EMPTY_EMOJI = "🧙"

/**
 * Which template a freely typed brief becomes. Falls back to Chief of
 * Staff: it is the broadest of the four, and the alternative — inventing
 * a fifth "generic agent" with no description and no voice — would put an
 * empty card in a list whose whole point is that agents have a job.
 */
export function templateForPrompt(prompt: string): AgentTemplate {
  return (
    AGENT_TEMPLATES.find((template) => template.match.test(prompt)) ??
    AGENT_TEMPLATES[0]
  )
}

export function templateById(id: string): AgentTemplate {
  return AGENT_TEMPLATES.find((t) => t.id === id) ?? AGENT_TEMPLATES[0]
}

/** The template's scripted thread — see agentThreads for the voice rules. */
export function threadFor(templateId: string) {
  return (AGENT_THREADS[templateId] ?? AGENT_THREADS["chief-of-staff"]).thread
}

/** Its run log, newest first. This is what the nav panel's activity row
 *  reads: an agent's thread IS its log, so there is no separate feed. */
export function entriesFor(templateId: string): RunEntry[] {
  const entries = (AGENT_THREADS[templateId] ?? AGENT_THREADS["chief-of-staff"])
    .entries
  return [...entries].sort((a, b) => b.at.localeCompare(a.at))
}
