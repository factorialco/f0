import {
  checkPrompts,
  contributionScenarios,
  existingChecks,
  extendPrinciple,
  kitNote,
  placement,
  sdsTest,
} from "../data/contribute"

export function ContributeSection() {
  return (
    <div className="space-y-10">
      {/* Step 1 — the gate question */}
      <div className="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm">
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
              className="rounded-xl border border-ink/10 bg-paper p-4"
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
                className="rounded-lg border border-ink/10 bg-white p-3 font-mono text-sm text-ink"
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

      {/* Step 2 — scenarios */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          If you do need to change F0, find your case
        </h3>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          {contributionScenarios.map((s) => (
            <article
              key={s.id}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold tracking-tight">{s.title}</h4>
              <p className="mt-1 text-sm italic text-muted">{s.example}</p>
              <ol className="mt-4 flex-1 space-y-2">
                {s.flow.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                      {idx === s.flow.length - 1 ? "✓" : "→"}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>

      {/* Where does it belong? */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          {placement.headline}
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">{placement.intro}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {placement.options.map((o) => (
            <div key={o.id} className="rounded-xl border border-ink/10 bg-white p-4">
              <p className="font-semibold">{o.label}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {o.owner}
              </p>
              <p className="mt-2 text-sm text-muted">{o.when}</p>
            </div>
          ))}
        </div>

        {/* Anti-dumping test for SDS */}
        <div className="mt-4 rounded-2xl border-2 border-accent/30 bg-accent/5 p-6">
          <p className="text-base font-semibold">{sdsTest.question}</p>
          <ul className="mt-3 space-y-1.5">
            {sdsTest.rules.map((r) => (
              <li key={r} className="flex gap-2 text-sm text-ink">
                <span className="mt-0.5 shrink-0 text-accent" aria-hidden>
                  ✓
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kit clarifier */}
        <div className="mt-4 rounded-xl border border-ink/10 bg-paper p-4">
          <p className="text-sm font-semibold">{kitNote.headline}</p>
          <p className="mt-1 text-sm text-muted">{kitNote.body}</p>
        </div>
      </div>
    </div>
  )
}
