import { useMemo, useState } from "react"

import {
  componentStatusData,
  getAllComponentStatuses,
  type ApiStatus,
  type ComponentStatus,
} from "@/component-status"

const STATUS_CONFIG: Record<
  ApiStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  stable: {
    label: "Stable",
    bg: "bg-f1-background-positive",
    text: "text-f1-foreground-positive",
    dot: "bg-f1-background-positive-bold",
  },
  experimental: {
    label: "Experimental",
    bg: "bg-f1-background-warning",
    text: "text-f1-foreground-warning",
    dot: "bg-f1-background-warning-bold",
  },
  deprecated: {
    label: "Deprecated",
    bg: "bg-f1-background-critical",
    text: "text-f1-foreground-critical",
    dot: "bg-f1-background-critical-bold",
  },
  internal: {
    label: "Internal",
    bg: "bg-f1-background-info",
    text: "text-f1-foreground-info",
    dot: "bg-f1-background-info-bold",
  },
  unknown: {
    label: "No tag",
    bg: "bg-f1-background-secondary",
    text: "text-f1-foreground-secondary",
    dot: "bg-f1-foreground-disabled",
  },
}

const ZONE_ORDER = [
  "components",
  "patterns",
  "sds",
  "kits",
  "layouts",
  "experimental",
  "deprecated",
  "hooks",
  "internal",
  "other",
]

// Requirement columns, keyed to STABLE_REQUIREMENTS.
const REQ_COLUMNS: { key: string; label: string }[] = [
  { key: "unitTests", label: "Tests" },
  { key: "playFunction", label: "Play" },
  { key: "mdxDocs", label: "MDX" },
  { key: "docQuality", label: "Good docs" },
]

function StatusBadge({ status }: { status: ApiStatus }) {
  const config = STATUS_CONFIG[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}

function Check({ met }: { met: boolean }) {
  return met ? (
    <span className="text-f1-foreground-positive" title="Yes">
      ✓
    </span>
  ) : (
    <span className="text-f1-foreground-disabled" title="No">
      ✕
    </span>
  )
}

function SummaryCard({
  label,
  value,
  sub,
}: {
  label: string
  value: number
  sub?: string
}) {
  return (
    <div className="rounded-lg border border-f1-border bg-f1-background p-4">
      <div className="text-2xl font-bold text-f1-foreground">{value}</div>
      <div className="text-sm font-medium text-f1-foreground">{label}</div>
      {sub && (
        <div className="mt-0.5 text-xs text-f1-foreground-secondary">{sub}</div>
      )}
    </div>
  )
}

export function ComponentStatusTable() {
  const [search, setSearch] = useState("")
  const [zoneFilter, setZoneFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const statuses = useMemo(() => getAllComponentStatuses(), [])
  const total = statuses.length

  const byZone = componentStatusData.stats.byZone
  const allZones = useMemo(
    () => ZONE_ORDER.filter((z) => byZone[z] !== undefined),
    [byZone]
  )

  // Counts by *effective* status (what the badge/sidebar show).
  const effectiveCounts = useMemo(() => {
    const m: Record<string, number> = {}
    for (const c of statuses)
      m[c.effectiveStatus] = (m[c.effectiveStatus] ?? 0) + 1
    return m
  }, [statuses])

  const misclassified = useMemo(
    () =>
      statuses.filter((c) => c.discrepancy === "tagged-but-below-bar").length,
    [statuses]
  )

  const filtered = useMemo(() => {
    return statuses.filter((c) => {
      if (
        search &&
        !c.name.toLowerCase().includes(search.toLowerCase()) &&
        !c.zone.toLowerCase().includes(search.toLowerCase())
      ) {
        return false
      }
      if (zoneFilter !== "all" && c.zone !== zoneFilter) return false
      if (statusFilter !== "all" && c.effectiveStatus !== statusFilter) {
        return false
      }
      return true
    })
  }, [statuses, search, zoneFilter, statusFilter])

  const generatedDate = new Date(
    componentStatusData.generatedAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const isMet = (c: ComponentStatus, key: string) =>
    c.requirements.find((r) => r.key === key)?.met ?? false

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <SummaryCard
          label="Total components"
          value={total}
          sub={`across ${Object.keys(byZone).length} zones`}
        />
        <SummaryCard
          label="Stable (effective)"
          value={effectiveCounts.stable ?? 0}
          sub={`${Math.round(((effectiveCounts.stable ?? 0) / total) * 100)}% meet the full DoD`}
        />
        <SummaryCard
          label="Experimental (effective)"
          value={effectiveCounts.experimental ?? 0}
          sub="untagged, below bar, or not promoted"
        />
        <SummaryCard
          label="Tagged stable, below bar"
          value={misclassified}
          sub="show as experimental"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 rounded-md border border-f1-border bg-f1-background px-3 text-sm text-f1-foreground placeholder:text-f1-foreground-disabled focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
        />
        <select
          value={zoneFilter}
          onChange={(e) => setZoneFilter(e.target.value)}
          className="h-8 rounded-md border border-f1-border bg-f1-background px-2 text-sm text-f1-foreground focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
        >
          <option value="all">All zones</option>
          {allZones.map((z) => (
            <option key={z} value={z}>
              {z} ({byZone[z]})
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-8 rounded-md border border-f1-border bg-f1-background px-2 text-sm text-f1-foreground focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
        >
          <option value="all">All statuses</option>
          {(["stable", "experimental", "deprecated"] as const).map((key) => (
            <option key={key} value={key}>
              {STATUS_CONFIG[key].label} ({effectiveCounts[key] ?? 0})
            </option>
          ))}
        </select>
        <span className="ml-auto text-xs text-f1-foreground-secondary">
          {filtered.length} of {total} components · Generated {generatedDate}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-f1-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-f1-border bg-f1-background-secondary text-left text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
              <th className="px-4 py-3">Component</th>
              <th className="px-4 py-3">Zone</th>
              <th className="px-4 py-3">Status</th>
              {REQ_COLUMNS.map((col) => (
                <th key={col.key} className="px-4 py-3 text-center">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-f1-border">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={3 + REQ_COLUMNS.length}
                  className="px-4 py-8 text-center text-f1-foreground-secondary"
                >
                  No components match your filters.
                </td>
              </tr>
            ) : (
              filtered.map((component) => (
                <tr
                  key={`${component.name}::${component.zone}`}
                  className="bg-f1-background transition-colors hover:bg-f1-background-hover"
                >
                  <td className="px-4 py-2.5">
                    <span className="font-medium text-f1-foreground">
                      {component.name}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="font-mono text-xs text-f1-foreground-secondary">
                      {component.zone}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <StatusBadge status={component.effectiveStatus} />
                  </td>
                  {REQ_COLUMNS.map((col) => (
                    <td key={col.key} className="px-4 py-2.5 text-center">
                      <Check met={isMet(component, col.key)} />
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
