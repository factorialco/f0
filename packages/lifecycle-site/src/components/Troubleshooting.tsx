import { useState } from "react"
import { faq } from "../data/troubleshooting"

const audienceLabels: Record<string, string> = {
  pd: "Product Designer",
  pe: "Product Engineer",
  foundations: "Foundations",
}

export function Troubleshooting() {
  const [filter, setFilter] = useState<string | null>(null)
  const allAudiences = Array.from(
    new Set(faq.flatMap((f) => f.audience))
  ).sort()

  const visible = filter
    ? faq.filter((f) => f.audience.includes(filter))
    : faq

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
            filter === null
              ? "border-accent bg-accent text-white"
              : "border-ink/10 bg-white hover:border-accent"
          }`}
        >
          All
        </button>
        {allAudiences.map((a) => (
          <button
            key={a}
            onClick={() => setFilter(a)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              filter === a
                ? "border-accent bg-accent text-white"
                : "border-ink/10 bg-white hover:border-accent"
            }`}
          >
            {audienceLabels[a] ?? a}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {visible.map((f, idx) => (
          <FaqItem key={idx} entry={f} />
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-ink/20 bg-white p-5 text-sm">
        <p className="font-medium text-ink">Stuck on something not listed here?</p>
        <ol className="mt-2 space-y-1.5 text-muted">
          <li>
            <span className="font-medium text-ink">1. Ask your AI agent in the repo.</span>{" "}
            With F0 skills loaded, the agent reads the source of truth (code +
            MDX + skills) and usually answers most questions about components,
            patterns, rules and the lifecycle.
          </li>
          <li>
            <span className="font-medium text-ink">2. Ping #f0-support in Slack.</span>{" "}
            If the agent can't help or the question needs a human, drop it there —
            we will document the answer here.
          </li>
        </ol>
      </div>
    </div>
  )
}

function FaqItem({ entry }: { entry: (typeof faq)[number] }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="rounded-2xl border border-ink/10 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-medium">{entry.question}</span>
        <span className="text-xl text-accent">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-ink/10 p-5">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {entry.audience.map((a) => (
              <span
                key={a}
                className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-medium"
              >
                {audienceLabels[a] ?? a}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed">{entry.answer}</p>
          {entry.links && entry.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-accent hover:underline"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  )
}
