import { checkPrompts } from "../data/contribute"
import { CreationDecisionFlow } from "./CreationDecisionFlow"

const STORYBOOK = "https://f0.factorial.dev"

const flowSteps = [
  {
    n: "1",
    who: "You",
    title: "Bring something concrete to #f0-support",
    body: "Drop a draft PR, a Figma design, or an F0 Composer prototype — whatever shows the idea, at the detail the change deserves.",
    tools: ["#f0-support", "draft PR / Figma / Composer"],
  },
  {
    n: "2",
    who: "Foundations",
    title: "Foundations reviews it there",
    body: "They validate what Claude suggested — where it lives and the approach — from design and development, then approve, ask for changes, or redirect.",
    tools: ["#f0-support", "design + dev"],
  },
  {
    n: "3",
    who: "You or a developer",
    title: "Build it in experimental",
    body: "Build it under experimental and open the PR — the final review happens there.",
    tools: ["src/experimental/", "PR"],
  },
  {
    n: "4",
    who: "Foundations",
    title: "Adoption promotes it to stable",
    body: "It ships as experimental; real adoption across teams is what earns promotion. Foundations re-tags it stable.",
    tools: ["experimental → stable"],
  },
]

const shipsWith = [
  "Named with the F0 prefix, named exports only",
  "Built on F0 tokens — no hardcoded values",
  "Accessible (WCAG AA)",
  "A Storybook story, with a snapshot",
  "Unit tests covering the public API",
  "MDX docs — when to use it, and when not",
  "A green quality gate — types, lint, format, tests",
]

const examples = [
  {
    cat: "Core",
    chip: { background: "#6ea8fe22", color: "#8fb8ff" },
    name: "F0Button",
    storyId: "components-button-button--default",
    useCase:
      "Every screen needs the same primary action — Save, Confirm, Continue. Rather than each team styling its own, they all reach for the one button.",
    trace: [
      ["Would extending an existing component cover it?", "No — it's a new primitive."],
      ["Will it be reused?", "Yes — by every product, across all domains."],
      ["Where does it live?", "Core."],
    ],
  },
  {
    cat: "Kit",
    chip: { background: "#b08cff22", color: "#c4b0ff" },
    name: "BarChart",
    storyId: "kits-charts-barchart--default",
    useCase:
      "You're building an analytics view and need bars, lines and donuts that already share F0 styling. You pull them from the Charts kit instead of rebuilding each one.",
    trace: [
      ["Standalone, or part of a set?", "Part of a set used together (bars, lines, donuts)."],
      ["Reused across domains?", "Yes — any analytics view."],
      ["Where does it live?", "Kit (Charts)."],
    ],
  },
  {
    cat: "Domain specific",
    chip: { background: "#f0b35722", color: "#f3c07b" },
    name: "ClockInControls",
    storyId: "sds-home-clockincontrols--clocked-in",
    useCase:
      "The Time Tracking team needs clock-in / clock-out controls on the attendance screen — start a shift, pause for lunch, clock out. It only makes sense in attendance, so the team owns it.",
    trace: [
      ["Does it already exist?", "No."],
      ["Would extending cover it?", "No — attendance-specific behavior."],
      ["Will it be reused?", "Within the Time Tracking domain only."],
      ["Where does it live?", "Domain specific."],
    ],
  },
]

export function ContributeSection() {
  return (
    <div className="space-y-16">
      <p className="text-muted">
        Contributing happens in two moves: first{" "}
        <strong className="text-ink">decide</strong> whether your idea belongs in
        F0 and where, then <strong className="text-ink">contribute</strong> it.
        Claude helps you decide; Foundations helps you ship.
      </p>

      {/* ── Part 1 — Decide ─────────────────────────────────────────────── */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Part 1 — Decide
        </p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight">
          Should it live in F0 — and where?
        </h3>
        <p className="mt-2 max-w-2xl text-muted">
          Most ideas don't need a new component. Tell Claude what you need — it
          reads the repo and the rules and points you down one of these paths.
        </p>

        <div className="mt-6">
          <CreationDecisionFlow />
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Prompts to ask Claude
            </p>
            <ul className="mt-2 space-y-2">
              {checkPrompts.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-white/10 bg-surface p-3 font-mono text-sm text-ink"
                >
                  "{p}"
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-paper p-4 text-sm text-muted">
            <p className="font-semibold text-ink">Not sure what Core, Kit or Domain specific mean?</p>
            <p className="mt-1">
              They're the three places a component can live.{" "}
              <a href="#/s/categories" className="font-medium text-accent hover:underline">
                See the definitions ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Part 2 — Contribute ─────────────────────────────────────────── */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Part 2 — Contribute
        </p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight">
          How to ship it
        </h3>
        <p className="mt-2 max-w-2xl text-muted">
          Once it belongs in F0, this is the flow — through{" "}
          <span className="font-mono">#f0-support</span>.
        </p>

        <ol className="mt-6 space-y-3">
          {flowSteps.map((s) => (
            <li
              key={s.n}
              className="flex gap-3 rounded-xl border border-white/10 bg-paper p-4"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-semibold text-accent">
                {s.n}
              </span>
              <div className="flex-1">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
                  {s.who}
                </p>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-muted">{s.body}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {s.n === "3" && (
                  <div className="mt-3 space-y-3 border-t border-white/10 pt-3">
                    <p className="text-sm text-muted">
                      <span className="font-medium text-ink">Why experimental?</span>{" "}
                      Its API can still change while real use proves it out — that
                      adoption is what earns promotion to stable. It carries the{" "}
                      <span className="font-mono">experimentalComponent()</span>{" "}
                      wrapper so consumers see the warning, and it never blocks
                      releases.
                    </p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        The standard it must meet
                      </p>
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {shipsWith.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted">
                            <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-muted">
                      You don't memorize this — the standard is defined by F0's
                      skills (<span className="font-mono">f0-component-contribution</span>,{" "}
                      <span className="font-mono">f0-unit-testing</span>,{" "}
                      <span className="font-mono">f0-storybook-stories</span>,{" "}
                      <span className="font-mono">f0-code-review</span>) and the{" "}
                      <a href="#/s/definition-of-done" className="font-medium text-accent hover:underline">
                        Definition of Done ↗
                      </a>
                      . Claude loads them and builds to them.
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Examples ────────────────────────────────────────────────────── */}
      <section>
        <h3 className="text-2xl font-semibold tracking-tight">Examples</h3>
        <p className="mt-2 max-w-2xl text-muted">
          One real F0 component per category, live from Storybook — so you can see
          why each lives where it does.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {examples.map((e) => (
            <div
              key={e.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-paper p-5"
            >
              <span
                className="w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                style={e.chip}
              >
                {e.cat}
              </span>

              <div className="relative mt-4 h-48 overflow-hidden rounded-lg border border-white/10 bg-white">
                <iframe
                  src={`${STORYBOOK}/iframe.html?id=${e.storyId}&viewMode=story`}
                  title={`${e.name} — live in Storybook`}
                  loading="lazy"
                  scrolling="no"
                  className="absolute left-0 top-0 origin-top-left"
                  style={{ width: "154%", height: "154%", transform: "scale(0.65)" }}
                />
              </div>
              <a
                href={`${STORYBOOK}/?path=/story/${e.storyId}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 inline-block text-[11px] text-accent hover:underline"
              >
                Open in Storybook ↗
              </a>

              <p className="mt-3 font-mono text-sm text-ink">{e.name}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                Use case
              </p>
              <p className="mt-1 text-sm text-muted">{e.useCase}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                How it's classified
              </p>
              <ol className="mt-1 space-y-1 text-[13px]">
                {e.trace.map(([q, a]) => (
                  <li key={q}>
                    <span className="text-ink">{q}</span>{" "}
                    <span className="text-muted">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
