// "Where F0 lives" — a map of the surfaces you use to interact with F0.
// Helps anyone new understand which tool to open for which job.
// Source: packages/react/AGENTS.md, packages/react/docs/ai-configuration.mdx,
//         packages/react/docs/Introduction.mdx

import { sourceOfTruth } from "../data/architecture"

type Surface = {
  name: string
  oneLine: string
  whoUsesIt: string
  whenToUse: string
  link?: { label: string; url: string }
}

const surfaces: Surface[] = [
  {
    name: "Storybook",
    oneLine: "The visual catalog of every F0 component, with live examples and docs.",
    whoUsesIt: "PDs and PEs",
    whenToUse:
      "To browse what F0 offers, see how a component looks and behaves, copy a working example, or read the 'when to use / when not to use' guidance. This is the source of truth for what a component looks like in production.",
    link: {
      label: "f0.factorial.dev",
      url: "https://f0.factorial.dev",
    },
  },
  {
    name: "Figma library",
    oneLine: "An optional sandbox to explore variants before opening a proposal or writing code.",
    whoUsesIt: "PDs",
    whenToUse:
      "During Phase 2 (Design) to sketch ideas and align visually with your team. Don't expect parity with the implementation — keeping Figma 1:1 with code is too expensive to maintain, so the F0 team is investing in the code as the source of truth. Once a component exists in Storybook, the implementation is the spec; Figma is the sketchpad.",
    link: {
      label: "F0 library in Figma",
      url: "https://www.figma.com/files/1209519141454845458/team/1359486354120896816",
    },
  },
  {
    name: "Claude / OpenCode (AI agents)",
    oneLine: "The assistants that know F0's rules, components and contribution flow.",
    whoUsesIt: "Anyone — the recommended entry point",
    whenToUse:
      "To design, build, or contribute. The agent reads the repo, picks the right components, generates code, opens issues and PRs following the lifecycle. If you only learn one tool, learn this one.",
  },
  {
    name: "F0 Compose (WIP)",
    oneLine: "A canvas to visualize and tweak compositions of F0 components live.",
    whoUsesIt: "PDs",
    whenToUse:
      "When Claude generates a screen, Compose renders it with real F0 pieces so you can iterate visually without touching code. Still work in progress — track progress in the repo.",
    link: {
      label: "factorial-composer repo",
      url: "https://github.com/factorialco/factorial-composer",
    },
  },
  {
    name: "Components dashboard",
    oneLine: "Live view of every F0 component, its maturity status, tests and docs coverage.",
    whoUsesIt: "Foundations",
    whenToUse:
      "To see what exists today, what's promotion-ready, what's deprecated, and where the system has gaps. Lives inside the monorepo and is run locally.",
    link: {
      label: "packages/components-dashboard",
      url: "https://github.com/factorialco/factorial-one/tree/main/packages/components-dashboard",
    },
  },
  {
    name: "The repo (factorial-one)",
    oneLine: "The source of truth for components, rules, skills and docs.",
    whoUsesIt: "PEs, Foundations",
    whenToUse:
      "To implement, review code, run tests, change rules or update the system. Everything else (Storybook, this site, the dashboard) is a view over the repo.",
    link: {
      label: "GitHub",
      url: "https://github.com/factorialco/factorial-one",
    },
  },
  {
    name: "This lifecycle site",
    oneLine: "The narrative explainer for how F0 works as a system.",
    whoUsesIt: "Everyone — especially when onboarding",
    whenToUse:
      "When you want to understand the rules of the game: maturity levels, contribution flow, ownership, definition of done. Storybook tells you what exists; this site tells you how it got there.",
  },
  {
    name: "GitHub Issues & PRs (factorial-one)",
    oneLine:
      "The single official place where F0 proposals, enhancements, bugs, promotions and deprecations live.",
    whoUsesIt: "Anyone contributing",
    whenToUse:
      "To propose a new component, request an enhancement, report a bug, or kick off a promotion — either as an issue (idea + use cases) or as a PR (when you already have a prototype). Foundations reviews everything that lands here based on team availability. Nothing else (Jira, Notion, DMs) counts as a formal F0 proposal.",
    link: {
      label: "Open an issue",
      url: "https://github.com/factorialco/factorial-one/issues/new/choose",
    },
  },
  {
    name: "#f0-support (Slack)",
    oneLine: "Optional visibility channel for issues and PRs you've already opened.",
    whoUsesIt: "Anyone contributing",
    whenToUse:
      "After opening an issue or PR in factorial-one, paste the link here so Foundations and other teams see it sooner. This is for visibility only — the conversation and decision happen on GitHub.",
  },
]

export function WhereF0Lives() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Source of truth
        </p>
        <h3 className="mt-1 text-xl font-semibold">{sourceOfTruth.what}</h3>
        <p className="mt-2 text-sm">{sourceOfTruth.why}</p>
        <p className="mt-3 text-sm text-muted">{sourceOfTruth.consequence}</p>
      </article>

      <p className="max-w-3xl text-muted">
        F0 isn't one tool — it's a small ecosystem. Here's where each piece
        lives and when to use it. Everything below is a view over the repo.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {surfaces.map((s) => (
          <article
            key={s.name}
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold">{s.name}</h3>
            <p className="mt-2 text-sm">{s.oneLine}</p>

            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Who uses it
                </dt>
                <dd className="mt-0.5">{s.whoUsesIt}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  When to use it
                </dt>
                <dd className="mt-0.5">{s.whenToUse}</dd>
              </div>
            </dl>

            {s.link && (
              <a
                href={s.link.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {s.link.label} ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
