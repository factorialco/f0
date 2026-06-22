import {
  checkPrompts,
  contributionScenarios,
  existingChecks,
  extendPrinciple,
  placementKinds,
} from "../data/contribute"
import { CreationDecisionFlow } from "./CreationDecisionFlow"

export function ContributeSection() {
  return (
    <div className="space-y-10">
      {/* Step 1 — the gate question */}
      <div className="rounded-2xl border border-white/10 bg-surface p-7 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Always start here
        </p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight">
          Do I need to create a new component?
        </h3>
        <p className="mt-2 text-muted">
          Before proposing anything, check whether something already covers your
          need. Look in all three places — ask the F0 agent or browse Storybook.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {existingChecks.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-white/10 bg-paper p-4"
            >
              <p className="font-semibold">{c.label}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {c.where}
              </p>
              <p className="mt-2 text-sm text-muted">{c.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">
            Prompts to ask the agent
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
      </div>

      {/* The principle */}
      <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6">
        <h3 className="text-base font-semibold text-accent">
          {extendPrinciple.headline}
        </h3>
        <p className="mt-2 text-sm text-ink">{extendPrinciple.body}</p>
      </div>

      {/* The decision flow — visual overview */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          The whole decision, at a glance
        </h3>
        <p className="mt-1 text-sm text-muted">
          Every proposal walks down the same spine. Each question either sends you
          to a faster answer on the right, or one step deeper.
        </p>
        <div className="mt-3">
          <CreationDecisionFlow />
        </div>
      </div>

      {/* Step 2 — scenarios */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          If you do need to change F0, find your case
        </h3>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {contributionScenarios.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold tracking-tight">{s.title}</h4>
              <p className="mt-1 text-sm italic text-muted">{s.example}</p>
              <ol className="mt-4 space-y-2">
                {s.flow.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                      {idx === s.flow.length - 1 ? "✓" : "→"}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-5 flex-1 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  What's expected
                </p>
                <ul className="mt-2 space-y-1.5">
                  {s.expects.map((e) => (
                    <li key={e} className="flex gap-2 text-sm text-muted">
                      <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                        ·
                      </span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Where it goes — the four homes */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Where it goes
        </h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {placementKinds.map((k) => (
            <div key={k.id} className="rounded-xl border border-white/10 bg-surface p-5">
              <p className="font-semibold">{k.label}</p>
              <p className="mt-1.5 text-sm text-muted">{k.what}</p>
              {k.examples && (
                <p className="mt-2 text-xs text-muted">
                  e.g. <span className="font-mono text-accent">{k.examples}</span>
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted">
          Foundations approves anything new under <span className="font-mono">kits/</span> or{" "}
          <span className="font-mono">sds/</span>. Full placement rules live in{" "}
          <a
            href="https://github.com/factorialco/f0/blob/main/packages/react/docs/where-it-goes.mdx"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Where it goes ↗
          </a>
          .
        </p>
      </div>
    </div>
  )
}
