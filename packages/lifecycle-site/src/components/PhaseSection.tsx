import { phases } from "../data/phases"

export function PhaseSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {phases.map((p) => (
        <article
          key={p.id}
          id={`phase-${p.id}`}
          className="section-anchor flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
        >
          <header className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-accent">{p.number}</span>
            <h3 className="text-xl font-semibold">{p.title}</h3>
          </header>
          <p className="mt-3 text-sm text-muted">{p.goal}</p>

          <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">
            Gates
          </h4>
          <ul className="mt-2 space-y-1.5 text-sm">
            {p.gates.map((g) => (
              <li key={g} className="flex gap-2">
                <span className="mt-0.5 text-stable">✓</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-5 grid grid-cols-1 gap-2 border-t border-ink/10 pt-4 text-xs">
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Owner</dt>
              <dd className="text-right font-medium">{p.owner}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Duration</dt>
              <dd className="text-right font-medium">{p.duration}</dd>
            </div>
            {p.skill && (
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Skill</dt>
                <dd className="text-right font-mono text-[11px]">{p.skill}</dd>
              </div>
            )}
          </dl>

          <a
            href={p.sourceLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            View source spec →
          </a>
        </article>
      ))}
    </div>
  )
}
