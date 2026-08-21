import { useMemo, useState } from "react"
import dataset from "./data/components.json"
import type { Dataset, ComponentRecord, Maturity } from "./types"
import { MaturityChip } from "./components/MaturityChip"
import { ComponentDetail } from "./components/ComponentDetail"
import { Ola1View } from "./components/Ola1View"
import { getGapToTarget, getIssues } from "./criteria"

const data = dataset as unknown as Dataset

// Pre-compute issues for every component so filters can use them.
const issuesById = new Map(
  data.components.map((c) => [c.id, getIssues(c)] as const)
)

// Pre-compute the gap-to-stable for every component (only meaningful for
// non-stable, non-internal components — others get an empty array).
const gapToStableById = new Map(
  data.components.map((c) => {
    const eligible =
      c.declaredMaturity !== "stable" &&
      c.declaredMaturity !== "internal" &&
      c.declaredMaturity !== "sds" &&
      c.folder !== "ui"
    return [c.id, eligible ? getGapToTarget(c, "stable") : []] as const
  })
)

// Build issue catalog from live data
const allIssueIds = new Set<string>()
for (const issues of issuesById.values()) {
  for (const i of issues) allIssueIds.add(i.id)
}
const ISSUE_OPTIONS = ["all", ...Array.from(allIssueIds).sort()]

// Issue counts
const issueCounts: Record<string, number> = {}
for (const issues of issuesById.values()) {
  for (const i of issues) {
    issueCounts[i.id] = (issueCounts[i.id] || 0) + 1
  }
}

const FOLDER_OPTIONS = [
  "all",
  ...Object.keys(data.countsByFolder).sort(),
] as const
const MATURITY_OPTIONS: Array<"all" | Maturity> = [
  "all",
  "stable",
  "experimental",
  "deprecated",
  "internal",
  "sds",
  "unknown",
]
const INPUT_KIND_OPTIONS = [
  "all",
  "text-field",
  "toggle",
  "choice",
  "not-input",
] as const

const inputKindCounts: Record<string, number> = {}
for (const c of data.components) {
  const k = c.inputKind ?? "not-input"
  inputKindCounts[k] = (inputKindCounts[k] || 0) + 1
}

const totalWithIssues = Array.from(issuesById.values()).filter(
  (issues) => issues.length > 0
).length

export default function App() {
  const [tab, setTab] = useState<"components" | "ola1">("components")
  const [folder, setFolder] = useState<string>("all")
  const [maturity, setMaturity] = useState<string>("all")
  const [issue, setIssue] = useState<string>("all")
  const [inputKind, setInputKind] = useState<string>("all")
  const [q, setQ] = useState<string>("")
  const [selectedId, setSelectedId] = useState<string | null>(
    data.components[0]?.id ?? null
  )

  const filtered = useMemo(() => {
    return data.components.filter((c) => {
      if (folder !== "all" && c.folder !== folder) return false
      if (maturity !== "all" && c.declaredMaturity !== maturity) return false
      if (inputKind !== "all") {
        const k = c.inputKind ?? "not-input"
        if (k !== inputKind) return false
      }
      if (issue !== "all") {
        const ids = (issuesById.get(c.id) ?? []).map((i) => i.id)
        if (!ids.includes(issue)) return false
      }
      if (
        q &&
        !`${c.name} ${c.storyTitle ?? ""}`
          .toLowerCase()
          .includes(q.toLowerCase())
      )
        return false
      return true
    })
  }, [folder, maturity, inputKind, issue, q])

  const selected: ComponentRecord | null =
    filtered.find((c) => c.id === selectedId) ?? filtered[0] ?? null

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b border-line px-4 py-3">
        <div className="flex items-baseline gap-3">
          <h1 className="text-base font-semibold">F0 Components Dashboard</h1>
          <span className="text-xs text-muted">
            {data.total} components · {totalWithIssues} with blocking issues ·
            criteria sourced from{" "}
            <a
              href="https://github.com/factorialco/factorial-one/blob/main/packages/react/.skills/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              f0 skills
            </a>{" "}
            + DoD · scanned {new Date(data.generatedAt).toLocaleString()}
          </span>
        </div>
        <nav className="mt-2 flex gap-1 text-sm">
          <button
            type="button"
            onClick={() => setTab("components")}
            className={`rounded-t px-3 py-1.5 ${
              tab === "components"
                ? "bg-white font-semibold text-fg ring-1 ring-line"
                : "text-muted hover:text-fg"
            }`}
          >
            Components
          </button>
          <button
            type="button"
            onClick={() => setTab("ola1")}
            className={`rounded-t px-3 py-1.5 ${
              tab === "ola1"
                ? "bg-white font-semibold text-fg ring-1 ring-line"
                : "text-muted hover:text-fg"
            }`}
          >
            Wave 1 — Tag fixes
          </button>
        </nav>
      </header>

      {tab === "ola1" ? (
        <Ola1View />
      ) : (
        <>
          <div className="flex flex-wrap gap-2 border-b border-line bg-gray-50 px-4 py-2 text-sm">
        <input
          type="search"
          placeholder="Search by name…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="rounded border border-line px-2 py-1"
        />
        <select
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className="rounded border border-line px-2 py-1"
        >
          {FOLDER_OPTIONS.map((f) => (
            <option key={f} value={f}>
              folder: {f}
              {f !== "all" && ` (${data.countsByFolder[f]})`}
            </option>
          ))}
        </select>
        <select
          value={maturity}
          onChange={(e) => setMaturity(e.target.value)}
          className="rounded border border-line px-2 py-1"
        >
          {MATURITY_OPTIONS.map((m) => (
            <option key={m} value={m}>
              tag: {m}
            </option>
          ))}
        </select>
        <select
          value={inputKind}
          onChange={(e) => setInputKind(e.target.value)}
          className="rounded border border-line px-2 py-1"
          title="Filter by detected input role"
        >
          {INPUT_KIND_OPTIONS.map((k) => (
            <option key={k} value={k}>
              input: {k}
              {k !== "all" && ` (${inputKindCounts[k] ?? 0})`}
            </option>
          ))}
        </select>
        <select
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="rounded border border-line px-2 py-1"
        >
          {ISSUE_OPTIONS.map((i) => (
            <option key={i} value={i}>
              issue: {i}
              {i !== "all" && ` (${issueCounts[i]})`}
            </option>
          ))}
        </select>
        <span className="ml-auto self-center text-xs text-muted">
          showing {filtered.length} / {data.total}
        </span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <ul className="w-[420px] shrink-0 overflow-y-auto border-r border-line">
          {filtered.map((c) => {
            const issues = issuesById.get(c.id) ?? []
            const gap = gapToStableById.get(c.id) ?? []
            return (
              <li
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`cursor-pointer border-b border-line px-3 py-2 text-sm hover:bg-gray-50 ${
                  selected?.id === c.id ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-medium">{c.name}</span>
                  <MaturityChip maturity={c.declaredMaturity} small />
                </div>
                <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted">
                  <span className="font-mono">{c.folder}/</span>
                  {c.inputKind && (
                    <span
                      className="rounded bg-violet-100 px-1.5 py-0.5 font-mono text-violet-800"
                      title="Detected input role"
                    >
                      {c.inputKind}
                    </span>
                  )}
                  {issues.length > 0 && (
                    <span className="rounded bg-red-100 px-1.5 py-0.5 font-mono text-red-700">
                      {issues.length} blocking
                    </span>
                  )}
                  {gap.length > 0 && (
                    <span
                      className="rounded bg-emerald-100 px-1.5 py-0.5 font-mono text-emerald-800"
                      title={`${gap.length} criteria left to reach stable`}
                    >
                      {gap.length} → stable
                    </span>
                  )}
                  {gap.length === 0 &&
                    c.declaredMaturity === "experimental" && (
                      <span
                        className="rounded bg-emerald-200 px-1.5 py-0.5 font-mono text-emerald-900"
                        title="Meets every stable criterion — ready to promote"
                      >
                        ready → stable
                      </span>
                    )}
                  {c.hasExperimentalWrapper && (
                    <span className="font-mono">⚙ wrapper</span>
                  )}
                </div>
              </li>
            )
          })}
          {filtered.length === 0 && (
            <li className="px-3 py-4 text-sm text-muted">No matches.</li>
          )}
        </ul>

        <main className="flex-1 overflow-hidden">
          {selected ? (
            <ComponentDetail c={selected} />
          ) : (
            <div className="flex h-full items-center justify-center text-muted">
              Select a component
            </div>
          )}
        </main>
      </div>
        </>
      )}
    </div>
  )
}
