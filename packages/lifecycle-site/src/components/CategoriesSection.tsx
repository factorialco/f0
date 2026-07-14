import type { ReactNode } from "react"
import { categories, patternsNote, type CategoryId } from "../data/categories"

const tone: Record<CategoryId, { accent: string; soft: string; text: string }> = {
  core: { accent: "#6ea8fe", soft: "#6ea8fe22", text: "#8fb8ff" },
  kit: { accent: "#b08cff", soft: "#b08cff22", text: "#c4b0ff" },
  domain: { accent: "#f0b357", soft: "#f0b35722", text: "#f3c07b" },
}

// Simple glyphs: Core = grid of primitives, Kit = a bundled box, Domain = a tag.
const icons: Record<CategoryId, ReactNode> = {
  core: (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" aria-hidden>
      <rect x="1" y="1" width="6.5" height="6.5" rx="1.5" />
      <rect x="10.5" y="1" width="6.5" height="6.5" rx="1.5" />
      <rect x="1" y="10.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="10.5" y="10.5" width="6.5" height="6.5" rx="1.5" />
    </svg>
  ),
  kit: (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M9 1.5 16 5v8l-7 3.5L2 13V5z" />
      <path d="M2 5l7 3.5L16 5" />
      <path d="M9 8.5V16.5" />
    </svg>
  ),
  domain: (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
      <path d="M8.6 1.6H15a1.4 1.4 0 0 1 1.4 1.4v6.4L9 16.8 1.2 9 8.6 1.6Z" />
      <circle cx="12" cy="6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
}

const STORYBOOK = "https://f0.factorial.dev"

const examples = [
  {
    cat: "Core",
    chip: { background: "#6ea8fe22", color: "#8fb8ff" },
    name: "F0Button",
    storyId: "components-button-button--default",
    useCase:
      "Every screen needs the same primary action — Save, Confirm, Continue. Rather than each team styling its own, they all reach for the one button.",
    trace: [
      ["Would extending an existing component cover it?", "No — it's a new primitive."],
      ["Will it be reused?", "Yes — by every product, across all domains."],
      ["Where does it live?", "Core."],
    ],
  },
  {
    cat: "Kit",
    chip: { background: "#b08cff22", color: "#c4b0ff" },
    name: "BarChart",
    storyId: "kits-charts-barchart--default",
    useCase:
      "You're building an analytics view and need bars, lines and donuts that already share F0 styling. You pull them from the Charts kit instead of rebuilding each one.",
    trace: [
      ["Standalone, or part of a set?", "Part of a set used together (bars, lines, donuts)."],
      ["Reused across domains?", "Yes — any analytics view."],
      ["Where does it live?", "Kit (Charts)."],
    ],
  },
  {
    cat: "Domain specific",
    chip: { background: "#f0b35722", color: "#f3c07b" },
    name: "ClockInControls",
    storyId: "sds-home-clockincontrols--clocked-in",
    useCase:
      "The Time Tracking team needs clock-in / clock-out controls on the attendance screen — start a shift, pause for lunch, clock out. It only makes sense in attendance, so the team owns it.",
    trace: [
      ["Does it already exist?", "No."],
      ["Would extending cover it?", "No — attendance-specific behavior."],
      ["Will it be reused?", "Within the Time Tracking domain only."],
      ["Where does it live?", "Domain specific."],
    ],
  },
]

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-muted">
      {children}
    </p>
  )
}

export function CategoriesSection() {
  return (
    <div className="space-y-8">
      {/* ── How the layers relate (visual overview) ───────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-surface p-5">
        <svg viewBox="0 0 720 196" className="w-full" role="img" aria-label="Core provides the shared building blocks; Kit and Domain specific components are built with them. A kit never imports from another kit.">
          <rect x="40" y="20" width="640" height="62" rx="12" fill="#6ea8fe" opacity="0.16" />
          <rect x="40" y="20" width="640" height="62" rx="12" fill="none" stroke="#6ea8fe" strokeWidth="1.8" />
          <text x="360" y="46" textAnchor="middle" fontSize="15" fontWeight="700" fill="#8fb8ff">Core</text>
          <text x="360" y="65" textAnchor="middle" fontSize="11.5" fill="#9aa0a6">the shared building blocks — primitives + patterns · Foundations</text>

          <text x="360" y="106" textAnchor="middle" fontSize="10.5" fill="#9aa0a6">used to build ↓</text>

          <rect x="72" y="118" width="264" height="58" rx="10" fill="#b08cff" opacity="0.14" />
          <rect x="72" y="118" width="264" height="58" rx="10" fill="none" stroke="#b08cff" />
          <text x="204" y="152" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c4b0ff">Kit</text>

          <rect x="384" y="118" width="264" height="58" rx="10" fill="#f0b357" opacity="0.14" />
          <rect x="384" y="118" width="264" height="58" rx="10" fill="none" stroke="#f0b357" />
          <text x="516" y="152" textAnchor="middle" fontSize="14" fontWeight="700" fill="#f3c07b">Domain specific</text>
        </svg>
        <p className="mt-2 text-center text-xs text-muted">
          Kit and Domain components are built with Core's primitives — they import from Core. A kit never imports from another kit.
        </p>
      </div>

      {/* ── The three, in detail ──────────────────────────────────────── */}
      <div className="grid gap-4 lg:grid-cols-3">
        {categories.map((c) => {
          const t = tone[c.id]
          return (
            <div
              key={c.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-5"
              style={{ borderTopColor: t.accent, borderTopWidth: 3 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: t.soft, color: t.accent }}
                >
                  {icons[c.id]}
                </span>
                <p className="text-base font-semibold" style={{ color: t.text }}>
                  {c.label}
                </p>
              </div>

              <p className="mt-3 text-sm font-medium text-ink">{c.tagline}</p>
              <p className="mt-2 text-sm text-muted">{c.what}</p>

              <Label>When it belongs here</Label>
              <p className="mt-1 text-sm text-muted">{c.when}</p>

              <Label>Rules</Label>
              <ul className="mt-1 space-y-1 text-sm text-muted">
                {c.rules.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-0.5 shrink-0" style={{ color: t.accent }} aria-hidden>
                      ·
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <Label>Examples</Label>
              <ul className="mt-1 space-y-0.5 text-sm text-muted">
                {c.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              <dl className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-xs">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Lives in</dt>
                  <dd className="text-right font-mono text-[10px] text-muted">{c.folder}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Owned by</dt>
                  <dd className="text-right">{c.owner}</dd>
                </div>
              </dl>
            </div>
          )
        })}
      </div>

      {/* ── Patterns note ─────────────────────────────────────────────── */}
      <div className="rounded-xl border border-sky-400/30 bg-sky-400/[0.06] p-4 text-sm">
        <p className="font-semibold text-sky-200">{patternsNote.title}</p>
        <p className="mt-1 text-muted">{patternsNote.body}</p>
        <p className="mt-2 font-mono text-xs text-muted">{patternsNote.examples}</p>
      </div>

      {/* ── A real one of each, live from Storybook ───────────────────── */}
      <div className="pt-2">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
          One real component of each
        </h4>
        <p className="mt-1 text-sm text-muted">
          Live from Storybook — and why each lives where it does.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {examples.map((e) => (
            <div
              key={e.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-surface p-5"
            >
              <span
                className="w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                style={e.chip}
              >
                {e.cat}
              </span>

              <div className="relative mt-4 h-48 overflow-hidden rounded-lg border border-white/10 bg-white">
                <iframe
                  src={`${STORYBOOK}/iframe.html?id=${e.storyId}&viewMode=story`}
                  title={`${e.name} — live in Storybook`}
                  loading="lazy"
                  scrolling="no"
                  className="absolute left-0 top-0 origin-top-left"
                  style={{ width: "154%", height: "154%", transform: "scale(0.65)" }}
                />
              </div>
              <a
                href={`${STORYBOOK}/?path=/story/${e.storyId}`}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 inline-block text-[11px] text-accent hover:underline"
              >
                Open in Storybook ↗
              </a>

              <p className="mt-3 font-mono text-sm text-ink">{e.name}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                Use case
              </p>
              <p className="mt-1 text-sm text-muted">{e.useCase}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                How it's classified
              </p>
              <ol className="mt-1 space-y-1 text-[13px]">
                {e.trace.map(([q, a]) => (
                  <li key={q}>
                    <span className="text-ink">{q}</span>{" "}
                    <span className="text-muted">{a}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
