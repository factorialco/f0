import { useEffect, useMemo, useState } from "react"
import {
  contradictions,
  ruleGroups,
  sections,
  type Rule,
  type RuleGroup,
  type Verifiability,
} from "../data/rulesInventory"

type Status = "unset" | "validated" | "discuss" | "change"

const STORAGE_KEY = "f0-rules-session-v1"

type SessionState = {
  statuses: Record<string, Status>
  changeNotes: Record<string, string>
}

const verifiabilityLabel: Record<Verifiability, string> = {
  automated: "Automated",
  "human-evidence": "Human evidence",
  policy: "Policy",
}

const verifiabilityChip: Record<Verifiability, string> = {
  automated: "bg-stable/10 text-stable",
  "human-evidence": "bg-experimental/10 text-experimental",
  policy: "bg-ink/5 text-ink",
}

const statusButton: Record<Status, { active: string; idle: string }> = {
  unset: { active: "", idle: "" },
  validated: {
    active: "bg-stable text-white border-stable",
    idle: "border-stable/30 text-stable hover:bg-stable/10",
  },
  discuss: {
    active: "bg-experimental text-white border-experimental",
    idle: "border-experimental/30 text-experimental hover:bg-experimental/10",
  },
  change: {
    active: "bg-deprecated text-white border-deprecated",
    idle: "border-deprecated/30 text-deprecated hover:bg-deprecated/10",
  },
}

function loadSession(): SessionState {
  if (typeof window === "undefined") return { statuses: {}, changeNotes: {} }
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return { statuses: {}, changeNotes: {} }
    const parsed = JSON.parse(raw) as
      | SessionState
      | Record<string, Status>
      | undefined
    if (!parsed) return { statuses: {}, changeNotes: {} }
    // Migration: v0 (just statuses) → v1 ({ statuses, changeNotes })
    if (typeof parsed === "object" && "statuses" in parsed) {
      const s = parsed as SessionState
      return {
        statuses: s.statuses ?? {},
        changeNotes: s.changeNotes ?? {},
      }
    }
    return { statuses: parsed as Record<string, Status>, changeNotes: {} }
  } catch {
    return { statuses: {}, changeNotes: {} }
  }
}

function saveSession(s: SessionState) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s))
  } catch {
    // ignore
  }
}

export function RulesPage() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({})
  const [changeNotes, setChangeNotes] = useState<Record<string, string>>({})
  const [filter, setFilter] = useState<Status | "all">("all")
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(ruleGroups.map((g) => [g.id, true]))
  )

  useEffect(() => {
    const loaded = loadSession()
    setStatuses(loaded.statuses)
    setChangeNotes(loaded.changeNotes)
  }, [])

  function setStatus(ruleId: string, value: Status) {
    setStatuses((prev) => {
      const next = { ...prev, [ruleId]: value }
      saveSession({ statuses: next, changeNotes })
      return next
    })
  }

  function setChangeNote(ruleId: string, value: string) {
    setChangeNotes((prev) => {
      const next = { ...prev, [ruleId]: value }
      saveSession({ statuses, changeNotes: next })
      return next
    })
  }

  function resetSession() {
    if (
      typeof window !== "undefined" &&
      window.confirm(
        "Reset all toggles and notes for this session? This cannot be undone."
      )
    ) {
      setStatuses({})
      setChangeNotes({})
      saveSession({ statuses: {}, changeNotes: {} })
    }
  }

  const totals = useMemo(() => {
    const all = ruleGroups.flatMap((g) => g.rules)
    const counts: Record<Status, number> = { unset: 0, validated: 0, discuss: 0, change: 0 }
    for (const r of all) {
      const s = (statuses[r.id] ?? "unset") as Status
      counts[s] += 1
    }
    return { ...counts, total: all.length }
  }, [statuses])

  const visibleGroups = useMemo(() => {
    if (filter === "all") return ruleGroups
    return ruleGroups
      .map((g) => ({
        ...g,
        rules: g.rules.filter((r) => (statuses[r.id] ?? "unset") === filter),
      }))
      .filter((g) => g.rules.length > 0)
  }, [filter, statuses])

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      <header className="pt-20">
        <a
          href="#/"
          className="text-sm text-muted hover:text-ink"
        >
          ← Back to lifecycle home
        </a>
        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-accent">
          Working session
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          F0 Rules — to validate
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Every policy and norm that defines how F0 works, grouped by theme. Use
          the toggles to mark each rule as <strong>Validated</strong>,{" "}
          <strong>Discuss</strong> or <strong>Change</strong> while you talk
          through them. State lives in this browser tab only.
        </p>
      </header>

      {/* Sticky session summary */}
      <div className="sticky top-0 z-10 -mx-6 mt-10 border-b border-ink/10 bg-paper/95 px-6 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <FilterChip
              label={`All (${totals.total})`}
              active={filter === "all"}
              onClick={() => setFilter("all")}
            />
            <FilterChip
              label={`Untouched (${totals.unset})`}
              active={filter === "unset"}
              onClick={() => setFilter("unset")}
              tone="ink"
            />
            <FilterChip
              label={`Validated (${totals.validated})`}
              active={filter === "validated"}
              onClick={() => setFilter("validated")}
              tone="stable"
            />
            <FilterChip
              label={`Discuss (${totals.discuss})`}
              active={filter === "discuss"}
              onClick={() => setFilter("discuss")}
              tone="experimental"
            />
            <FilterChip
              label={`Change (${totals.change})`}
              active={filter === "change"}
              onClick={() => setFilter("change")}
              tone="deprecated"
            />
          </div>
          <button
            onClick={resetSession}
            className="text-xs text-muted hover:text-deprecated"
          >
            Reset session
          </button>
        </div>
      </div>

      {/* Contradictions banner */}
      <section className="mt-10 rounded-2xl border-2 border-deprecated/40 bg-deprecated/5 p-6">
        <header className="flex items-center gap-3">
          <span className="rounded-full bg-deprecated px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
            ⚠ {contradictions.length} contradictions
          </span>
          <h2 className="text-lg font-semibold">Things to validate first</h2>
        </header>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {contradictions.map((c) => (
            <li
              key={c.id}
              className="rounded-lg border border-deprecated/20 bg-white p-4"
            >
              <p className="text-sm font-semibold">{c.title}</p>
              <p className="mt-1 text-sm text-muted">{c.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sections → Groups */}
      <div className="mt-12 space-y-16">
        {visibleGroups.length === 0 && (
          <p className="rounded-xl border border-dashed border-ink/20 bg-white p-8 text-center text-sm text-muted">
            No rules match the current filter.
          </p>
        )}
        {sections.map((sec) => {
          const groupsInSection = visibleGroups.filter(
            (g) => g.section === sec.id
          )
          if (groupsInSection.length === 0) return null
          const sectionRuleCount = groupsInSection.reduce(
            (n, g) => n + g.rules.length,
            0
          )
          return (
            <section key={sec.id} id={`section-${sec.id}`}>
              <header className="mb-6 border-b border-ink/10 pb-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl" aria-hidden>
                    {sec.emoji}
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {sec.title}
                  </h2>
                  <span className="text-sm text-muted">
                    {sectionRuleCount} rules · {groupsInSection.length} topics
                  </span>
                </div>
                <p className="mt-2 max-w-3xl text-sm text-muted">{sec.intent}</p>
              </header>

              <div className="space-y-4">
                {groupsInSection.map((g) => (
                  <GroupCard
                    key={g.id}
                    group={g}
                    isOpen={!!openGroups[g.id]}
                    statuses={statuses}
                    changeNotes={changeNotes}
                    onToggleOpen={() =>
                      setOpenGroups((p) => ({ ...p, [g.id]: !p[g.id] }))
                    }
                    onSetStatus={setStatus}
                    onSetChangeNote={setChangeNote}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <footer className="mt-16 border-t border-ink/10 pt-6 text-xs text-muted">
        <p>
          Source-of-truth files are linked per rule. State lives in{" "}
          <code className="font-mono">sessionStorage</code> only — closing this
          tab clears it. To persist outcomes, decide them and update the
          canonical files.
        </p>
      </footer>
    </main>
  )
}

function GroupCard({
  group,
  isOpen,
  statuses,
  changeNotes,
  onToggleOpen,
  onSetStatus,
  onSetChangeNote,
}: {
  group: RuleGroup
  isOpen: boolean
  statuses: Record<string, Status>
  changeNotes: Record<string, string>
  onToggleOpen: () => void
  onSetStatus: (ruleId: string, value: Status) => void
  onSetChangeNote: (ruleId: string, value: string) => void
}) {
  const counts = useMemo(() => {
    const c = { validated: 0, discuss: 0, change: 0 }
    for (const r of group.rules) {
      const s = (statuses[r.id] ?? "unset") as Status
      if (s === "validated") c.validated += 1
      else if (s === "discuss") c.discuss += 1
      else if (s === "change") c.change += 1
    }
    return c
  }, [group.rules, statuses])

  return (
    <article className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <button
        type="button"
        onClick={onToggleOpen}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-ink/[0.02]"
      >
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
          <p className="mt-1 text-sm text-muted">{group.intent}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[11px] font-semibold text-ink">
            {group.rules.length}
          </span>
          <SmallCount n={counts.validated} tone="stable" />
          <SmallCount n={counts.discuss} tone="experimental" />
          <SmallCount n={counts.change} tone="deprecated" />
          <span aria-hidden className="ml-1 text-muted">
            {isOpen ? "▾" : "▸"}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-ink/10">
          {group.glossary && group.glossary.length > 0 && (
            <dl className="grid gap-3 border-b border-ink/10 bg-ink/[0.02] px-5 py-4 sm:grid-cols-2">
              {group.glossary.map((g) => (
                <div key={g.term}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {g.term}
                  </dt>
                  <dd className="mt-1 text-sm text-ink">{g.definition}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul className="divide-y divide-ink/10">
            {group.rules.map((r) => (
              <RuleRow
                key={r.id}
                rule={r}
                status={(statuses[r.id] ?? "unset") as Status}
                changeNote={changeNotes[r.id] ?? ""}
                onSetStatus={(v) => onSetStatus(r.id, v)}
                onSetChangeNote={(v) => onSetChangeNote(r.id, v)}
              />
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function RuleRow({
  rule,
  status,
  changeNote,
  onSetStatus,
  onSetChangeNote,
}: {
  rule: Rule
  status: Status
  changeNote: string
  onSetStatus: (s: Status) => void
  onSetChangeNote: (v: string) => void
}) {
  const showChangeNote = status === "change"
  return (
    <li className="p-5">
      <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="text-sm">{rule.statement}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
            <span
              className={`rounded-full px-2 py-0.5 font-semibold uppercase tracking-wider ${verifiabilityChip[rule.verifiability]}`}
            >
              {verifiabilityLabel[rule.verifiability]}
            </span>
            <span className="font-mono text-muted">{rule.source}</span>
            {rule.alsoIn && rule.alsoIn.length > 0 && (
              <span className="text-muted">
                · also in{" "}
                <span className="font-mono">{rule.alsoIn.join(", ")}</span>
              </span>
            )}
          </div>
          {rule.note && (
            <p className="mt-2 rounded-lg border border-deprecated/30 bg-deprecated/5 p-2 text-xs text-deprecated">
              {rule.note}
            </p>
          )}
          {!showChangeNote && changeNote.trim() !== "" && (
            <p className="mt-2 text-[11px] text-muted">
              <span className="font-semibold">Saved change note:</span> "{changeNote.trim().slice(0, 120)}{changeNote.trim().length > 120 ? "…" : ""}"{" "}
              <button
                type="button"
                onClick={() => onSetStatus("change")}
                className="ml-1 text-deprecated underline hover:no-underline"
              >
                view
              </button>
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:justify-end">
          <StatusButton
            label="Validated"
            value="validated"
            active={status === "validated"}
            onClick={() => onSetStatus(status === "validated" ? "unset" : "validated")}
          />
          <StatusButton
            label="Discuss"
            value="discuss"
            active={status === "discuss"}
            onClick={() => onSetStatus(status === "discuss" ? "unset" : "discuss")}
          />
          <StatusButton
            label="Change"
            value="change"
            active={status === "change"}
            onClick={() => onSetStatus(status === "change" ? "unset" : "change")}
          />
        </div>
      </div>

      {showChangeNote && (
        <div className="mt-3 rounded-lg border border-deprecated/30 bg-deprecated/5 p-3">
          <label
            htmlFor={`note-${rule.id}`}
            className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-deprecated"
          >
            <span aria-hidden>✎</span>
            What needs to change?
          </label>
          <textarea
            id={`note-${rule.id}`}
            value={changeNote}
            onChange={(e) => onSetChangeNote(e.target.value)}
            placeholder="e.g. new wording, missing case, owner to confirm…"
            rows={2}
            className="w-full resize-y rounded-md border border-deprecated/30 bg-white p-2 text-sm text-ink placeholder:text-muted focus:border-deprecated focus:outline-none focus:ring-2 focus:ring-deprecated/20"
          />
          {changeNote.trim() === "" && (
            <p className="mt-1 text-[11px] text-muted">
              The note is saved automatically as you type. It stays even if you switch the status, but is cleared on Reset session.
            </p>
          )}
        </div>
      )}
    </li>
  )
}

function StatusButton({
  label,
  value,
  active,
  onClick,
}: {
  label: string
  value: Exclude<Status, "unset">
  active: boolean
  onClick: () => void
}) {
  const styles = statusButton[value]
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
        active ? styles.active : styles.idle
      }`}
    >
      {active ? `✓ ${label}` : label}
    </button>
  )
}

function FilterChip({
  label,
  active,
  onClick,
  tone = "accent",
}: {
  label: string
  active: boolean
  onClick: () => void
  tone?: "accent" | "ink" | "stable" | "experimental" | "deprecated"
}) {
  const toneClasses = {
    accent: active ? "bg-accent text-white border-accent" : "border-accent/30 text-accent",
    ink: active ? "bg-ink text-white border-ink" : "border-ink/20 text-ink",
    stable: active ? "bg-stable text-white border-stable" : "border-stable/30 text-stable",
    experimental: active
      ? "bg-experimental text-white border-experimental"
      : "border-experimental/30 text-experimental",
    deprecated: active
      ? "bg-deprecated text-white border-deprecated"
      : "border-deprecated/30 text-deprecated",
  }[tone]
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition hover:opacity-80 ${toneClasses}`}
    >
      {label}
    </button>
  )
}

function SmallCount({
  n,
  tone,
}: {
  n: number
  tone: "stable" | "experimental" | "deprecated"
}) {
  if (n === 0) return null
  const cls =
    tone === "stable"
      ? "bg-stable/10 text-stable"
      : tone === "experimental"
        ? "bg-experimental/10 text-experimental"
        : "bg-deprecated/10 text-deprecated"
  return (
    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${cls}`}>
      {n}
    </span>
  )
}

// Status used as type-only; suppress unused-name lint if any.
export type { Status }
