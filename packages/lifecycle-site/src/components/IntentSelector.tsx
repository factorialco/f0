import { useState } from "react"
import { intents, type IntentId } from "../data/intents"

export function IntentSelector() {
  const [selected, setSelected] = useState<IntentId | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {intents.map((i) => {
          const isSelected = selected === i.id
          return (
            <button
              key={i.id}
              onClick={() => setSelected(isSelected ? null : i.id)}
              className={`text-left rounded-2xl border p-5 transition ${
                isSelected
                  ? "border-accent bg-accent/5 shadow-md"
                  : "border-ink/10 bg-white shadow-sm hover:border-accent/40 hover:shadow-md"
              }`}
            >
              <h3 className="text-base font-semibold">{i.label}</h3>
              <p className="mt-2 text-sm text-muted">{i.oneLine}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-accent">
                {i.whoCanDo}
              </p>
            </button>
          )
        })}
      </div>

      {selected && <IntentFlow id={selected} />}
    </div>
  )
}

function IntentFlow({ id }: { id: IntentId }) {
  const intent = intents.find((i) => i.id === id)
  if (!intent) return null

  return (
    <article className="rounded-2xl border border-accent/30 bg-white p-8 shadow-md">
      <header>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          You want to
        </p>
        <h3 className="mt-1 text-2xl font-semibold">{intent.label}</h3>
        <p className="mt-2 text-muted">{intent.oneLine}</p>
      </header>

      {intent.warnings && intent.warnings.length > 0 && (
        <div className="mt-6 rounded-xl border border-deprecated/40 bg-deprecated/5 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-deprecated">
            Heads up
          </h4>
          <ul className="mt-2 space-y-1 text-sm">
            {intent.warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      <ol className="mt-6 space-y-4">
        {intent.steps.map((step, idx) => (
          <li
            key={idx}
            className="rounded-xl border border-ink/10 bg-paper p-4"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-accent">{idx + 1}</span>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {step.who}
                </p>
                <p className="mt-1 font-medium">{step.action}</p>
                {step.detail && (
                  <p className="mt-1 text-sm text-muted">{step.detail}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {intent.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {intent.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium hover:border-accent hover:text-accent"
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
