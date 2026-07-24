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
type CardItem = {
  name: string
  color: string
  desc: string
  meta?: string
  href?: string
}
type Item = { label: string; text: string; color?: string }

export function Flow({ steps }: { steps: Step[] }) {
  return (
    <div className="my-6 flex flex-wrap items-stretch gap-2">
      {steps.map((s, i) => (
        <React.Fragment key={s.t}>
          <div
            className={`rounded-lg p-3 ${SURFACE}`}
            style={{
              flex: "1 1 150px",
              borderTopWidth: 3,
              borderTopColor: s.color ?? "transparent",
            }}
          >
            <div className="font-mono text-xs" style={{ opacity: 0.6 }}>
              {s.k}
            </div>
            <div className="mt-1 text-sm font-semibold">{s.t}</div>
            <div className="mt-1 text-xs" style={{ opacity: 0.72 }}>
              {s.d}
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="self-center" style={{ opacity: 0.35 }}>
              →
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export function Cards({ items }: { items: CardItem[] }) {
  return (
    <div
      className="my-6 grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
    >
      {items.map((c) => {
        const inner = (
          <>
            <div
              className="flex items-center gap-1.5 text-base font-semibold"
              style={{ color: c.color }}
            >
              {c.name}
              {c.href && (
                <span aria-hidden style={{ opacity: 0.7 }}>
                  →
                </span>
              )}
            </div>
            <div
              className="mt-2 text-sm leading-relaxed"
              style={{ opacity: 0.82 }}
            >
              {c.desc}
            </div>
            {c.meta && (
              <div className="mt-2 font-mono text-xs" style={{ opacity: 0.55 }}>
                {c.meta}
              </div>
            )}
          </>
        )
        const style = { borderTopWidth: 3, borderTopColor: c.color }
        return c.href ? (
          <a
            key={c.name}
            href={c.href}
            target="_top"
            className={`block rounded-xl p-5 no-underline transition-opacity hover:opacity-80 ${SURFACE}`}
            style={{ ...style, color: "inherit" }}
          >
            {inner}
          </a>
        ) : (
          <div
            key={c.name}
            className={`rounded-xl p-5 ${SURFACE}`}
            style={style}
          >
            {inner}
          </div>
        )
      })}
    </div>
  )
}

// A titled group of destinations: colored group header + one visible, clickable
// row per destination (name + one-line why). Used to lay out the whole map on
// the Start-here page so nothing is hidden behind a "pick a path" choice.
type NavItem = { name: string; href: string; desc: string }
export function NavGroup({
  title,
  color = hue.accent,
  items,
}: {
  title: string
  color?: string
  items: NavItem[]
}) {
  return (
    <div className="my-6">
      <div
        className="text-xs font-semibold uppercase"
        style={{ color, letterSpacing: "0.1em" }}
      >
        {title}
      </div>
      <div className="mt-3 grid gap-2">
        {items.map((it) => (
          <a
            key={it.name}
            href={it.href}
            target="_top"
            className={`block rounded-lg px-4 py-3 no-underline transition-opacity hover:opacity-80 ${SURFACE}`}
            style={{
              color: "inherit",
              borderLeftWidth: 3,
              borderLeftColor: color,
            }}
          >
            <span className="text-sm font-semibold">{it.name}</span>
            <span className="text-sm" style={{ opacity: 0.62 }}>
              {" "}
              — {it.desc}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

// A single highlighted "remember this" block: small accent eyebrow, a neutral
// bold heading (NOT colored — so it reads as a highlight, not an error), muted
// body, on a subtle accent tint. Mirrors the landing's hero callout.
export function KeyPoint({
  eyebrow,
  title,
  color = hue.accent,
  children,
}: {
  eyebrow?: string
  title?: string
  color?: string
  children: React.ReactNode
}) {
  return (
    <div
      className="my-6 rounded-xl p-5"
      style={{
        background: tint(color, 0.06),
        border: `1px solid ${tint(color, 0.3)}`,
      }}
    >
      {eyebrow && (
        <div
          className="text-xs font-semibold uppercase"
          style={{ color, letterSpacing: "0.12em" }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <div className="mt-1 text-xl font-semibold tracking-tight">{title}</div>
      )}
      <div
        className="text-sm"
        style={{ opacity: 0.85, marginTop: title || eyebrow ? 8 : 0 }}
      >
        {children}
      </div>
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
        <div className="text-sm font-semibold" style={{ color: c }}>
          {title}
        </div>
      )}
      <div
        className="text-sm"
        style={{ opacity: 0.85, marginTop: title ? 4 : 0 }}
      >
        {children}
      </div>
    </div>
  )
}

export function Badge({
  color = hue.accent,
  children,
}: {
  color?: string
  children: React.ReactNode
}) {
  return (
    <span
      className="font-mono"
      style={{
        background: tint(color, 0.16),
        color,
        padding: "2px 8px",
        borderRadius: 999,
        fontSize: "11px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  )
}

// Numbered vertical steps — for a sequence (use instead of a ``` code fence).
export function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: "1.5rem 0",
        display: "grid",
        gap: 8,
      }}
    >
      {items.map((it, i) => (
        <li
          key={i}
          style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
        >
          <span
            className="font-mono"
            style={{
              flexShrink: 0,
              width: 24,
              height: 24,
              borderRadius: 999,
              background: tint(hue.accent, 0.16),
              color: hue.accent,
              fontSize: 12,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {i + 1}
          </span>
          <span className="text-sm" style={{ opacity: 0.9, paddingTop: 2 }}>
            {it}
          </span>
        </li>
      ))}
    </ol>
  )
}

// Scrollable, styled table — contains wide tables so they never overflow into
// the docs table-of-contents. Cells accept strings or JSX (e.g. <code>).
export function Table({
  head,
  rows,
}: {
  head: React.ReactNode[]
  rows: React.ReactNode[][]
}) {
  const cell = "border border-f1-border"
  return (
    <div className="my-6" style={{ overflowX: "auto", maxWidth: "100%" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          minWidth: 560,
          fontSize: "13px",
        }}
      >
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className={`${cell} bg-f1-background-secondary`}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
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
                <td
                  key={ci}
                  className={cell}
                  style={{ padding: "8px 12px", verticalAlign: "top" }}
                >
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
          <span className="font-mono text-xs" style={{ color: it.color }}>
            {it.label}
          </span>
          <div className="mt-1 text-sm" style={{ opacity: 0.8 }}>
            {it.text}
          </div>
        </div>
      ))}
    </div>
  )
}
