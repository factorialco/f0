import { useState } from "react"
import plan from "../data/ola1-plan.json"

interface Fix {
  componentName: string
  storyPath: string
  folder: string
  from: string
  to: string
  reason: string
  tier: "clean" | "insert" | "manual"
  oldLine?: string
  newLine?: string
  anchorText?: string
  contextBefore?: string | null
  contextAfter?: string | null
  problem?: string
  lineNumber?: number
  anchorLine?: number
}

interface Plan {
  generatedAt: string
  total: number
  counts: { clean: number; insert: number; manual: number }
  patchRelPath: string
  fixes: Fix[]
}

const p = plan as Plan

const TIER_INFO: Record<Fix["tier"], { label: string; color: string; desc: string }> = {
  clean: {
    label: "Safe",
    color: "bg-emerald-100 text-emerald-800",
    desc: "Existing tags line is updated in place",
  },
  insert: {
    label: "Insert",
    color: "bg-amber-100 text-amber-800",
    desc: "A new tags line will be inserted after title",
  },
  manual: {
    label: "Manual",
    color: "bg-red-100 text-red-800",
    desc: "Cannot be auto-patched; needs human review",
  },
}

const APPLY_CMD = "git apply packages/components-dashboard/patches/ola-1.patch"
const CHECK_CMD = "git apply --check packages/components-dashboard/patches/ola-1.patch"
const REVERT_CMD = "git apply -R packages/components-dashboard/patches/ola-1.patch"

function CopyCmd({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="flex items-center gap-2 rounded border border-line bg-gray-900 px-3 py-2 font-mono text-xs text-gray-100">
      <span className="flex-1 truncate">{cmd}</span>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(cmd)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
        className="rounded bg-gray-700 px-2 py-0.5 text-[11px] hover:bg-gray-600"
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  )
}

function TransitionSummary({ fixes }: { fixes: Fix[] }) {
  const groups: Record<string, number> = {}
  for (const f of fixes) {
    const k = `${f.from} → ${f.to}`
    groups[k] = (groups[k] ?? 0) + 1
  }
  const order = [
    { key: "unknown → stable", label: "Untagged → stable", desc: "Promoted because they meet DoD", color: "text-emerald-700" },
    { key: "experimental → stable", label: "Experimental → stable", desc: "Promoted because they meet DoD", color: "text-emerald-700" },
    { key: "unknown → experimental", label: "Untagged → experimental", desc: "Declared experimental until DoD is met", color: "text-amber-700" },
    { key: "stable → experimental", label: "Stable → experimental (demote)", desc: "Currently tagged stable but does NOT meet DoD", color: "text-red-700" },
    { key: "experimental → deprecated", label: "Experimental → deprecated", desc: "Lives in deprecated/ folder", color: "text-gray-700" },
    { key: "stable → deprecated", label: "Stable → deprecated", desc: "Lives in deprecated/ folder", color: "text-gray-700" },
    { key: "unknown → deprecated", label: "Untagged → deprecated", desc: "Lives in deprecated/ folder", color: "text-gray-700" },
  ]
  return (
    <ul className="space-y-1 text-sm">
      {order
        .filter((o) => groups[o.key])
        .map((o) => (
          <li key={o.key} className="flex items-baseline gap-3">
            <span className={`w-10 text-right font-semibold ${o.color}`}>{groups[o.key]}</span>
            <span className="font-medium">{o.label}</span>
            <span className="text-xs text-muted">— {o.desc}</span>
          </li>
        ))}
    </ul>
  )
}

export function Ola1View() {
  const [filter, setFilter] = useState<"all" | Fix["tier"]>("all")
  const [openId, setOpenId] = useState<string | null>(null)

  const visible = p.fixes.filter((f) => filter === "all" || f.tier === filter)

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Intro */}
      <div className="border-b border-line bg-blue-50/40 px-6 py-4">
        <h2 className="text-lg font-semibold">
          Wave 1 — Tag honesty pass
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-muted">
          Make every component declare the maturity it actually has.{" "}
          <strong className="text-fg">Promotions to stable only happen when the component meets DoD</strong>{" "}
          (MDX + tests + Snapshot story + <code className="rounded bg-white px-1 text-xs">satisfies Meta</code> + F0 prefix).
          Components that don't meet DoD are declared <code className="rounded bg-white px-1 text-xs">experimental</code> until they do.
          <strong className="text-fg"> Nothing is moved or renamed</strong> — only{" "}
          <code className="rounded bg-white px-1 py-0.5 text-xs">tags: [...]</code> lines change.
        </p>
      </div>

      {/* Transition breakdown */}
      <div className="border-b border-line bg-white px-6 py-3">
        <h3 className="mb-2 text-xs font-semibold uppercase text-muted">What this wave does</h3>
        <TransitionSummary fixes={p.fixes} />
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 border-b border-line bg-white px-6 py-4">
        {(["clean", "insert", "manual"] as const).map((tier) => {
          const info = TIER_INFO[tier]
          const count = p.counts[tier]
          return (
            <button
              key={tier}
              type="button"
              onClick={() => setFilter(filter === tier ? "all" : tier)}
              className={`rounded-lg border px-4 py-3 text-left transition ${
                filter === tier ? "border-blue-400 ring-2 ring-blue-200" : "border-line hover:bg-gray-50"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className={`rounded px-2 py-0.5 text-xs font-semibold ${info.color}`}>
                  {info.label}
                </span>
                <span className="text-2xl font-semibold">{count}</span>
              </div>
              <p className="mt-1 text-xs text-muted">{info.desc}</p>
            </button>
          )
        })}
      </div>

      {/* Apply box */}
      <div className="border-b border-line bg-gray-50 px-6 py-4">
        <h3 className="text-sm font-semibold">How to apply</h3>
        <ol className="mt-2 space-y-2 text-sm">
          <li>
            <span className="text-muted">1. Verify the patch will apply cleanly:</span>
            <div className="mt-1"><CopyCmd cmd={CHECK_CMD} /></div>
          </li>
          <li>
            <span className="text-muted">2. Apply it (changes {p.total} files):</span>
            <div className="mt-1"><CopyCmd cmd={APPLY_CMD} /></div>
          </li>
          <li>
            <span className="text-muted">3. Review with <code className="font-mono">git diff</code>, commit when happy.</span>
          </li>
          <li>
            <span className="text-muted">If anything looks wrong, undo with:</span>
            <div className="mt-1"><CopyCmd cmd={REVERT_CMD} /></div>
          </li>
        </ol>
      </div>

      {/* List + filter */}
      <div className="flex items-center justify-between border-b border-line bg-white px-6 py-2 text-sm">
        <div>
          {filter === "all" ? (
            <span>Showing all {p.total} fixes</span>
          ) : (
            <button onClick={() => setFilter("all")} className="text-blue-600 hover:underline">
              ← Showing {visible.length} {filter} · clear filter
            </button>
          )}
        </div>
        <span className="text-xs text-muted">
          generated {new Date(p.generatedAt).toLocaleString()}
        </span>
      </div>

      <ul className="flex-1 overflow-y-auto px-6 py-2">
        {visible.map((f) => {
          const id = f.storyPath
          const open = openId === id
          const info = TIER_INFO[f.tier]
          return (
            <li key={id} className="border-b border-line py-2">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : id)}
                className="flex w-full items-center gap-3 text-left text-sm hover:bg-gray-50"
              >
                <span className={`shrink-0 rounded px-2 py-0.5 text-[11px] font-semibold ${info.color}`}>
                  {info.label}
                </span>
                <span className="w-32 shrink-0 font-mono text-xs text-muted">
                  {f.from} → {f.to}
                </span>
                <span className="flex-1 truncate font-medium">{f.componentName}</span>
                <span className="hidden truncate font-mono text-[11px] text-muted md:inline">
                  {f.storyPath}
                </span>
                <span className="text-muted">{open ? "▾" : "▸"}</span>
              </button>
              {open && (
                <div className="mt-2 ml-12 rounded border border-line bg-gray-50 p-3 text-xs">
                  <p className="text-muted">{f.reason}</p>
                  {f.tier === "clean" && f.oldLine && f.newLine && (
                    <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-2 text-gray-100">
                      <span className="block text-red-300">- {f.oldLine}</span>
                      <span className="block text-emerald-300">+ {f.newLine}</span>
                    </pre>
                  )}
                  {f.tier === "insert" && f.anchorText && f.newLine && (
                    <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-2 text-gray-100">
                      <span className="block text-gray-400">  {f.anchorText}</span>
                      <span className="block text-emerald-300">+ {f.newLine}</span>
                    </pre>
                  )}
                  {f.tier === "manual" && f.problem && (
                    <p className="mt-2 text-red-700">⚠ {f.problem}</p>
                  )}
                  <div className="mt-2 font-mono text-[10px] text-muted">{f.storyPath}</div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
