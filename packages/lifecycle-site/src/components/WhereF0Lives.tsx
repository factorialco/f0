// "Where F0 lives" — a compact map of the surfaces you use to interact with F0.
// Source: packages/react/AGENTS.md, packages/react/docs/ai-configuration.mdx,
//         packages/react/docs/Introduction.mdx

import { sourceOfTruth } from "../data/architecture"

type Surface = {
  name: string
  oneLine: string
  link?: { label: string; url: string }
}

const surfaces: Surface[] = [
  {
    name: "Claude (with F0 skills)",
    oneLine:
      "Your main entry point. Run Claude with the F0 skills loaded and it reads the catalogue and rules and builds for you. Other skill-aware agents (OpenCode, the Copilot coding agent) work too.",
  },
  {
    name: "Storybook",
    oneLine:
      "The visual catalogue of every component, with live examples and when-to-use docs.",
    link: { label: "f0.factorial.dev", url: "https://f0.factorial.dev" },
  },
  {
    name: "F0 Compose",
    oneLine:
      "A canvas that renders the composition an agent builds, with real F0 pieces. Work in progress.",
    link: {
      label: "factorial-composer",
      url: "https://github.com/factorialco/factorial-composer",
    },
  },
  {
    name: "The repo (f0)",
    oneLine:
      "The source of truth: components, rules, skills and docs. Everything else is a view over it.",
    link: { label: "GitHub", url: "https://github.com/factorialco/f0" },
  },
  {
    name: "#f0-support (Slack)",
    oneLine:
      "Where every request starts — contributions, bugs, promotions. You raise it as a message and Foundations picks it up.",
    link: {
      label: "Open #f0-support",
      url: "https://factorialteam.slack.com/archives/C082ZNKS403",
    },
  },
  {
    name: "Figma library",
    oneLine:
      "An optional sandbox to sketch variants (a Composer prototype works too). Not the source of truth — the code is.",
    link: {
      label: "F0 library in Figma",
      url: "https://www.figma.com/files/1209519141454845458/team/1359486354120896816",
    },
  },
]

export function WhereF0Lives() {
  return (
    <div className="space-y-6">
      <p className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm">
        <span className="font-semibold">
          Source of truth: {sourceOfTruth.what}.
        </span>{" "}
        {sourceOfTruth.why}
      </p>

      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface">
        {surfaces.map((s) => (
          <li
            key={s.name}
            className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="shrink-0 font-semibold sm:w-44">{s.name}</span>
            <p className="flex-1 text-sm text-muted">
              {s.oneLine}
              {s.link && (
                <>
                  {" "}
                  <a
                    href={s.link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-accent hover:underline"
                  >
                    {s.link.label} ↗
                  </a>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
