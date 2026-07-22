// Reusable visual building blocks for the Lifecycle MDX docs.
// Not a story (Storybook only picks up docs/**/*.mdx). Imported by the .mdx pages.
//
// Theme-aware by design: surfaces use F0 `f1-*` tokens (which flip with the
// Storybook dark-mode toggle); brand/category hues are applied only to borders,
// text and translucent tints, so they read on both light and dark.
import React from "react"

export const hue = {
  accent: "#ff6364", // F0 coral
  core: "#4f8fe0",
  kit: "#9b7ff0",
  domain: "#d99a3c",
  stable: "#3fae74",
}

const SURFACE = "bg-f1-background-secondary border border-f1-border"

function tint(hex: string, a: number) {
  const h = hex.replace("#", "")
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${a})`
}

type Step = { k: string; t: string; d: string; color?: string }
type CardItem = { name: string; color: string; desc: string; meta?: string }
type Item = { label: string; text: string; color?: string }

export function Flow({ steps }: { steps: Step[] }) {
  return (
    <div className="my-6 flex flex-wrap items-stretch gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={s.t}>
          <div
            className={`rounded-lg p-3 ${SURFACE}`}
            style={{ flex: "1 1 150px", borderTopWidth: 3, borderTopColor: s.color ?? "transparent" }}
          >
            <div className="font-mono text-xs" style={{ opacity: 0.6 }}>{s.k}</div>
            <div className="mt-1 text-sm font-semibold">{s.t}</div>
            <div className="mt-1 text-xs" style={{ opacity: 0.72 }}>{s.d}</div>
          </div>
          {i < steps.length - 1 && (
            <div className="self-center" style={{ opacity: 0.35 }}>→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export function Cards({ items }: { items: CardItem[] }) {
  return (
    <div
      className="my-6 grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
    >
      {items.map((c) => (
        <div
          key={c.name}
          className={`rounded-lg p-4 ${SURFACE}`}
          style={{ borderTopWidth: 3, borderTopColor: c.color }}
        >
          <div className="text-sm font-semibold" style={{ color: c.color }}>{c.name}</div>
          <div className="mt-1 text-xs" style={{ opacity: 0.8 }}>{c.desc}</div>
          {c.meta && (
            <div className="mt-2 font-mono text-xs" style={{ opacity: 0.55 }}>{c.meta}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "hot"
  title?: string
  children: React.ReactNode
}) {
  const c = tone === "hot" ? hue.accent : hue.core
  return (
    <div
      className="my-4 rounded-lg p-4"
      style={{ background: tint(c, 0.08), borderLeft: `3px solid ${c}` }}
    >
      {title && (
        <div className="text-sm font-semibold" style={{ color: c }}>{title}</div>
      )}
      <div className="text-sm" style={{ opacity: 0.85, marginTop: title ? 4 : 0 }}>
        {children}
      </div>
    </div>
  )
}

export function Badge({ color = hue.accent, children }: { color?: string; children: React.ReactNode }) {
  return (
    <span
      className="font-mono"
      style={{ background: tint(color, 0.16), color, padding: "2px 8px", borderRadius: 999, fontSize: "11px", whiteSpace: "nowrap" }}
    >
      {children}
    </span>
  )
}

// Numbered vertical steps — for a sequence (use instead of a ``` code fence).
export function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: "1.5rem 0", display: "grid", gap: 8 }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span
            className="font-mono"
            style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 999, background: tint(hue.accent, 0.16), color: hue.accent, fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {i + 1}
          </span>
          <span className="text-sm" style={{ opacity: 0.9, paddingTop: 2 }}>{it}</span>
        </li>
      ))}
    </ol>
  )
}

// Scrollable, styled table — contains wide tables so they never overflow into
// the docs table-of-contents. Cells accept strings or JSX (e.g. <code>).
export function Table({ head, rows }: { head: React.ReactNode[]; rows: React.ReactNode[][] }) {
  const cell = "border border-f1-border"
  return (
    <div className="my-6" style={{ overflowX: "auto", maxWidth: "100%" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 560, fontSize: "13px" }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className={`${cell} bg-f1-background-secondary`}
                style={{ textAlign: "left", padding: "8px 12px", fontWeight: 600, whiteSpace: "nowrap" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => (
                <td key={ci} className={cell} style={{ padding: "8px 12px", verticalAlign: "top" }}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Two-column list of label → text (outcomes, roles, rules…).
export function Grid({ items, min = 260 }: { items: Item[]; min?: number }) {
  return (
    <div
      className="my-4 grid gap-2"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))` }}
    >
      {items.map((it, i) => (
        <div key={i} className={`rounded-lg px-4 py-3 ${SURFACE}`}>
          <span className="font-mono text-xs" style={{ color: it.color }}>{it.label}</span>
          <div className="mt-1 text-sm" style={{ opacity: 0.8 }}>{it.text}</div>
        </div>
      ))}
    </div>
  )
}
