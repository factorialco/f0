// Source: chat-defined common blockers + lifecycle policy.
// FAQ for resolving common doubts and blockers.

export type FaqEntry = {
  question: string
  audience: string[]
  answer: string
  links?: { label: string; url: string }[]
}

export const faq: FaqEntry[] = [
  {
    question: "My proposal was rejected. What now?",
    audience: ["pd", "pe"],
    answer:
      "Read the rejection reason in the issue. Most rejections fall into 4 buckets: (1) something similar already exists — use it, (2) only one team needs it — build it inside your feature, (3) it's not DS language but business logic — keep it in your codebase, (4) a pattern or kit solves it better. If you disagree, comment with new evidence and ask for re-triage.",
  },
  {
    question: "Foundations hasn't responded to my proposal yet.",
    audience: ["pd", "pe"],
    answer:
      "Foundations reviews proposals based on team availability and as quickly as possible — there's no fixed SLA today. If your proposal is urgent or blocking work, ping #f0-support in Slack with a link to the issue. Do NOT start building before Foundations responds — work may be wasted if outcome is rejection or accepted-as-domain.",
  },
  {
    question: "I don't know if my component should be in core F0 or in SDS.",
    audience: ["pd", "pe"],
    answer:
      "Foundations decides this in triage. Rule of thumb: core F0 = used by ≥2 product domains; SDS = specific to one domain (e.g. payroll, recruitment). When in doubt, mark it as 'unsure' in the proposal and let triage decide.",
  },
  {
    question: "Quality gate is failing. What do I do?",
    audience: ["pe"],
    answer:
      "Load f0-quality-gate skill. It runs typecheck, lint, tests, and parallel sub-agent reviews (code, a11y, Storybook). The output tells you exactly what to fix. Run `pnpm format` + `pnpm tsc` first — most failures are formatting or types.",
    links: [
      {
        label: "f0-quality-gate skill",
        url: "https://github.com/factorialco/factorial-one/blob/main/packages/react/.skills/f0-quality-gate/SKILL.md",
      },
    ],
  },
  {
    question: "Can I use experimental components in production?",
    audience: ["pd", "pe"],
    answer:
      "Yes, but the API may change without warning. The experimental wrapper logs a runtime warning. If you depend on it, talk to the owner team to coordinate breaking changes. Adoption of experimental components is what drives Phase 4 → Phase 5 promotion.",
  },
  {
    question: "How do I migrate from a deprecated component?",
    audience: ["pd", "pe"],
    answer:
      "Every deprecated component MUST have a @migration JSDoc tag pointing to a migration doc. Follow it. If the doc is missing or unclear, open an issue tagged 'lifecycle:deprecation'. You have ≥90 days from the deprecation announcement before removal.",
  },
  {
    question: "Phase 0 says 'use what exists' but I can't find it.",
    audience: ["pd", "pe"],
    answer:
      "Ask your agent: 'Is there an F0 component for X?' — it reads the full catalogue (including experimental and SDS folders, not just stable). If it confirms nothing exists, you've passed question 0.1. Move to question 0.2 (can existing be extended?).",
  },
  {
    question: "I want to skip Phase 0 because I'm sure my component should exist.",
    audience: ["pd", "pe"],
    answer:
      "Phase 0 takes minutes (it's a conversation with your agent, not a meeting) and saves everyone wasted work later. It's not a gate — it's a fast self-check that helps you catch \"this already exists\" or \"this can be extended\" before you invest in a full proposal. The real review happens when an F0 designer reads your proposal issue.",
  },
  {
    question: "My PR was reviewed and the reviewer wants me to load a skill I don't know.",
    audience: ["pe"],
    answer:
      "All F0 skills live in packages/react/.skills/<skill-name>/SKILL.md. They are designed to be loaded by your agent (OpenCode, the Copilot coding agent…) automatically. If you're working manually, open the SKILL.md file and follow it step by step. The most-used skills are listed in the Skills table on the contributions page.",
    links: [
      {
        label: "Skills directory",
        url: "https://github.com/factorialco/factorial-one/tree/main/packages/react/.skills",
      },
    ],
  },
  {
    question: "I'm a designer — do I really not use Figma anymore?",
    audience: ["pd"],
    answer:
      "Figma is no longer source of truth — that role belongs to the F0 repo (rendered in Storybook). You may still use Figma as an optional sandbox during Phase 2 to explore variants, but the final spec is the implemented component, not the Figma file. This eliminates the maintenance burden of keeping a Figma library in sync with code.",
  },
]
