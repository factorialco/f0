import { useState } from "react"
import { dodLevels, type DoDLevel } from "../data/definitionOfDone"

const accentByLevel: Record<DoDLevel["id"], { dot: string; ring: string; chip: string }> = {
  experimental: {
    dot: "bg-experimental",
    ring: "ring-experimental/30",
    chip: "bg-experimental/10 text-experimental",
  },
  stable: {
    dot: "bg-stable",
    ring: "ring-stable/30",
    chip: "bg-stable/10 text-stable",
  },
  deprecated: {
    dot: "bg-deprecated",
    ring: "ring-deprecated/30",
    chip: "bg-deprecated/10 text-deprecated",
  },
}

export function DefinitionOfDone() {
  const [activeId, setActiveId] = useState<DoDLevel["id"]>("stable")
  const active = dodLevels.find((l) => l.id === activeId)!
  const accent = accentByLevel[active.id]

  return (
    <div className="space-y-6">
      <aside className="flex flex-wrap items-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5 text-sm">
        <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
          Source of truth
        </span>
        <p className="text-ink">
          The Definition of Done is the technical contract every component must
          honour. The Foundations dashboard, the promotion skill and the design
          review all read from this same list.
        </p>
      </aside>

      <div className="flex flex-wrap gap-2">
        {dodLevels.map((l) => {
          const isActive = l.id === activeId
          const a = accentByLevel[l.id]
          return (
            <button
              key={l.id}
              onClick={() => setActiveId(l.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? `border-transparent ${a.chip} ring-2 ${a.ring}`
                  : "border-white/10 bg-surface text-ink hover:border-white/30"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${a.dot}`} />
              {l.label}
              <span className="text-xs text-muted">{l.criteria.length}</span>
            </button>
          )
        })}
      </div>

      <article className="rounded-2xl border border-white/10 bg-surface p-6 shadow-sm">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">{active.label} — checklist</h3>
            <p className="mt-1 text-sm text-muted">{active.intent}</p>
          </div>
          <a
            href={active.sourceLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-accent hover:underline"
          >
            Read the canonical MDX →
          </a>
        </header>

        <ul className="mt-6 space-y-3">
          {active.criteria.map((c) => (
            <li
              key={c.id}
              className="flex gap-3 rounded-lg border border-white/5 bg-paper p-3"
            >
              <span
                className={`mt-1 h-2 w-2 shrink-0 rounded-full ${accent.dot}`}
                aria-hidden
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{c.label}</p>
                <p className="mt-0.5 text-xs text-muted">{c.detail}</p>
                {c.dashboardGap && (
                  <p className="mt-1 text-[11px] font-mono text-muted">
                    Dashboard reports as: <span className="text-ink">"{c.dashboardGap}"</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
