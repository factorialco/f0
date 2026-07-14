// Contributing happens in the chat with Claude. This maps the steps — each step
// offers example prompts (one question per line, so they're copied separately).

type Group = { n: string; title: string; who?: string; items: string[]; prompts?: string[] }

const groups: Group[] = [
  {
    n: "1",
    title: "Look first",
    who: "Ask Claude, or browse Storybook",
    items: [
      "Understand what F0 already has.",
      "Check if you can use — or extend — something that already exists.",
    ],
    prompts: [
      "Is there already an F0 component, kit or pattern for X?",
      "Could I cover X by extending an existing component instead?",
    ],
  },
  {
    n: "2",
    title: "Is it worth being in F0 for everyone?",
    items: [
      "Is it new, or an evolution of something that exists?",
      "Is it a real need — not a one-off?",
      "Will other teams or product areas use it too?",
    ],
  },
  {
    n: "3",
    title: "Design it right",
    who: "Claude suggests · Foundations confirms",
    items: [
      "Decide where it lives — Core, a Kit, or Domain specific.",
      "Build it abstract, so other teams can reuse it — not tied to your screen.",
    ],
    prompts: [
      "Where should X live — Core, a Kit, or Domain specific?",
      "How do I build X so other teams can reuse it?",
    ],
  },
  {
    n: "4",
    title: "Validate with the team",
    items: [
      "Share the proposal in #f0-support (what fits: the need, a Figma, a prototype, a draft PR).",
      "Foundations reviews it (design + development) and gives the OK before it's final.",
    ],
    prompts: [
      "Draft a #f0-support message proposing X: what it is, where it'd live, and what I'm bringing.",
    ],
  },
]

export function ContributeSection() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-muted">
        Contributing to F0 happens <strong className="text-ink">in the chat with Claude</strong> —
        it reads the repo and walks you through it. These are the steps, and each one has prompts you
        can drop straight into Claude.
      </p>

      {/* Entry point */}
      <div className="rounded-2xl border-2 border-accent/30 bg-accent/[0.05] p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">Start here</p>
        <h3 className="mt-1 text-xl font-semibold text-ink">Tell Claude what you want to build</h3>
        <p className="mt-2 max-w-xl text-muted">
          e.g. <span className="font-mono text-ink">"I need X in F0 — is there anything already, and if not, what process should I follow to contribute it?"</span>{" "}
          Claude takes it from there.
        </p>
      </div>

      {/* Bug lane */}
      <div className="rounded-2xl border border-white/10 bg-paper p-5">
        <p className="font-semibold text-ink">Fixing a bug, or something looks broken?</p>
        <p className="mt-1 text-sm text-muted">
          That's not a new contribution. Ask Claude for the owner (or check{" "}
          <span className="font-mono">CODEOWNERS</span>), open a PR with steps to reproduce, and flag
          it in <span className="font-mono">#f0-support</span> if it's blocking you.
        </p>
      </div>

      {/* Action map */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">The steps, from idea to F0</p>
        <div className="mt-4 space-y-3">
          {groups.map((g, gi) => (
            <div key={g.n}>
              <div className="rounded-2xl border border-white/10 bg-surface p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-semibold text-accent">{g.n}</span>
                  <div>
                    <p className="font-semibold text-ink">{g.title}</p>
                    {g.who && <p className="text-xs text-muted">{g.who}</p>}
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-muted">
                      <span className="mt-0.5 shrink-0 text-accent" aria-hidden>·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {g.prompts && (
                  <div className="mt-3 rounded-lg border border-accent/25 bg-accent/[0.06] px-3 py-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">Ask Claude</span>
                    <div className="mt-1 space-y-1">
                      {g.prompts.map((p) => (
                        <p key={p} className="font-mono text-[12.5px] text-ink">"{p}"</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {gi < groups.length - 1 && <div className="flex justify-center py-1 text-muted" aria-hidden>↓</div>}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted">
          Depth scales with impact — a prop or an icon is light; a shared pattern needs buy-in; changing
          something in use needs a migration plan. Not sure what Core, Kit or Domain specific mean?{" "}
          <a href="#/s/categories" className="font-medium text-accent hover:underline">See how F0 is organized ↗</a>
        </p>
      </div>
    </div>
  )
}
