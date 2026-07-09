import { useState } from "react"
import { lintRules, prTypes } from "../data/rules"
import { goldenRules } from "../data/architecture"
import { responseExpectation, triageOutcomes } from "../data/triage"

type Tab = "golden" | "lint" | "pr" | "triage"

const tabs: { id: Tab; label: string }[] = [
  { id: "golden", label: "Golden rules" },
  { id: "lint", label: "Lint rules" },
  { id: "pr", label: "PR conventions" },
  { id: "triage", label: "Triage & response" },
]

export function RuleTabs() {
  const [active, setActive] = useState<Tab>("golden")

  return (
    <div className="rounded-2xl border border-ink/10 bg-white shadow-sm">
      <div className="flex border-b border-ink/10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-5 py-3 text-sm font-medium transition ${
              active === t.id
                ? "border-b-2 border-accent text-ink"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {active === "golden" && <GoldenTab />}
        {active === "lint" && <LintTab />}
        {active === "pr" && <PrTab />}
        {active === "triage" && <TriageTab />}
      </div>
    </div>
  )
}

function GoldenTab() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">
        The non-negotiables that keep F0 coherent. Everything else (lint, PR
        conventions) is downstream of these.
      </p>
      <ol className="grid gap-2 sm:grid-cols-2">
        {goldenRules.map((r, idx) => (
          <li
            key={idx}
            className="flex gap-3 rounded-xl border border-ink/10 p-4 text-sm"
          >
            <span className="font-bold text-accent">{idx + 1}.</span>
            <span>{r}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function LintTab() {
  return (
    <div className="space-y-6">
      {lintRules.map((r) => (
        <article key={r.id} className="rounded-xl border border-ink/10 p-5">
          <header className="flex items-center justify-between gap-3">
            <h4 className="font-mono text-sm font-semibold">{r.id}</h4>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                r.status === "active"
                  ? "bg-stable/10 text-stable"
                  : "bg-experimental/10 text-experimental"
              }`}
            >
              {r.status}
            </span>
          </header>
          <p className="mt-2 text-sm">{r.what}</p>
          <p className="mt-1 text-xs text-muted">{r.why}</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-ink p-4 text-xs leading-relaxed text-paper">
            <code>{r.example}</code>
          </pre>
        </article>
      ))}
    </div>
  )
}

function PrTab() {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-xs uppercase tracking-wider text-muted">
          <th className="pb-3 pr-4">Type</th>
          <th className="pb-3 pr-4">Label</th>
          <th className="pb-3 pr-4">Marker</th>
          <th className="pb-3">Description</th>
        </tr>
      </thead>
      <tbody>
        {prTypes.map((t) => (
          <tr key={t.type} className="border-t border-ink/5">
            <td className="py-3 pr-4 font-semibold">{t.type}</td>
            <td className="py-3 pr-4 font-mono text-xs">{t.label}</td>
            <td className="py-3 pr-4 font-mono text-xs">
              <span className={t.marker.includes("!") ? "text-deprecated" : ""}>
                {t.marker}
              </span>
            </td>
            <td className="py-3 text-muted">{t.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function TriageTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h4 className="text-sm font-semibold text-ink">Triage outcomes</h4>
        <p className="mt-1 text-xs text-muted">
          What Foundations decides when a proposal lands.
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {triageOutcomes.map((o) => (
            <li key={o.id} className="rounded-lg border border-ink/10 p-3">
              <p className="font-semibold">{o.label}</p>
              <p className="mt-1 text-muted">{o.meaning}</p>
              <p className="mt-1 text-xs text-accent">→ {o.nextStep}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-ink">
          {responseExpectation.headline}
        </h4>
        <p className="mt-1 text-xs text-muted">
          What you can realistically expect from Foundations.
        </p>
        <p className="mt-3 rounded-lg border border-ink/10 p-3 text-sm">
          {responseExpectation.body}
        </p>
        <p className="mt-3 rounded-lg bg-paper p-3 text-sm">
          {responseExpectation.urgentCta}
        </p>
      </div>
    </div>
  )
}
