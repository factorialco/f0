import { prototype } from "../data/prototype"

export function PrototypeSection() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-surface p-7 shadow-sm">
        <p className="text-muted">{prototype.oneLine}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
          <span aria-hidden>⌘</span>
          {prototype.tool}
        </div>
        <p className="mt-2 text-sm text-muted">{prototype.toolNote}</p>
      </div>

      {/* Steps */}
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {prototype.steps.map((step, idx) => (
          <li key={idx} className="rounded-2xl border border-white/10 bg-paper p-5">
            <span className="text-2xl font-bold text-accent">{idx + 1}</span>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">
              {step.who}
            </p>
            <p className="mt-1 font-medium">{step.action}</p>
            {step.detail && (
              <p className="mt-1 text-sm text-muted">{step.detail}</p>
            )}
          </li>
        ))}
      </ol>

      {/* Examples */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Try prompts like these
        </h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {prototype.examples.map((ex) => (
            <li
              key={ex.prompt}
              className="rounded-xl border border-white/10 bg-surface p-4"
            >
              <p className="font-mono text-sm text-ink">"{ex.prompt}"</p>
            </li>
          ))}
        </ul>
      </div>

      {prototype.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {prototype.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-surface px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
