import {
  checkPrompts,
  contributionScenarios,
  extendPrinciple,
  placementKinds,
  redundancyChecks,
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
          Most ideas don't need one — they're already solved, only need
          extending, or don't belong in the system at all. Rule these three out
          before proposing anything.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {redundancyChecks.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-white/10 bg-paper p-4"
            >
              <p className="font-semibold">{c.label}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                → {c.verdict}
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
          How it gets into F0
        </h3>
        <p className="mt-1 text-sm text-muted">
          The whole point is that nobody builds something we end up rejecting.
          So you align <em>before</em> you invest — and the heavier the change,
          the more you align.
        </p>
        <ol className="mt-3 space-y-2">
          <li className="flex gap-3 text-sm">
            <span className="mt-0.5 shrink-0 font-mono text-accent">1</span>
            <span>
              <span className="font-semibold text-ink">Triage with Claude first.</span>{" "}
              With the system context, it evaluates whether this should live in F0
              at all — and where (core / kit / sds). If it already exists, can be
              extended, or is product-only, you stop here.
            </span>
          </li>
          <li className="flex gap-3 text-sm">
            <span className="mt-0.5 shrink-0 font-mono text-accent">2</span>
            <span>
              <span className="font-semibold text-ink">If it's low effort, bring a proposal.</span>{" "}
              Come with something concrete — a PR through the Composer, which can
              detect placement and create the component in F0, or a Figma design.
            </span>
          </li>
          <li className="flex gap-3 text-sm">
            <span className="mt-0.5 shrink-0 font-mono text-accent">3</span>
            <span>
              <span className="font-semibold text-ink">Post it in #f0-support.</span>{" "}
              That's the Foundations team's channel — they give feedback and guide
              you. This early sign-off (design included) is what keeps your work
              from being thrown away.
            </span>
          </li>
          <li className="flex gap-3 text-sm">
            <span className="mt-0.5 shrink-0 font-mono text-accent">4</span>
            <span>
              <span className="font-semibold text-ink">Iterate to a PR.</span> Go from
              proposal to PR, with the final review on the PR itself; it merges as
              experimental — and adoption drives promotion to stable.
            </span>
          </li>
        </ol>
        <div className="mt-3">
          <CreationDecisionFlow />
        </div>
      </div>

      {/* Step 2 — the quality bar per kind of change */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          What's expected of each kind of change
        </h3>
        <p className="mt-1 text-sm text-muted">
          Once you're actually changing F0, this is the bar your contribution
          has to clear — by the kind of change you're making.
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {contributionScenarios.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold tracking-tight">{s.title}</h4>
              <p className="mt-1 text-sm italic text-muted">{s.example}</p>
              <ul className="mt-4 space-y-1.5">
                {s.expects.map((e) => (
                  <li key={e} className="flex gap-2 text-sm text-muted">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                      ·
                    </span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
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
