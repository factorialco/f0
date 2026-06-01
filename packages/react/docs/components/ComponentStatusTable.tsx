import { useState, useMemo } from "react"

import statusData from "../component-status-data.json"

type ApiStatus =
  | "stable"
  | "experimental"
  | "deprecated"
  | "internal"
  | "unknown"

interface ComponentEntry {
  name: string
  zone: string
  apiStatus: ApiStatus
  tags: string[]
  hasUnitTests: boolean
  hasMdxDocs: boolean
  storyFile: string
}

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

function CheckIcon() {
  return (
    <span className="text-f1-foreground-positive" title="Yes">
      ✓
    </span>
  )
}

function CrossIcon() {
  return (
    <span className="text-f1-foreground-disabled" title="No">
      ✗
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

  const { stats, components } = statusData as {
    generatedAt: string
    stats: {
      total: number
      byStatus: Record<string, number>
      byZone: Record<string, number>
      withUnitTests: number
      withMdxDocs: number
    }
    components: ComponentEntry[]
  }

  const allZones = useMemo(
    () => ZONE_ORDER.filter((z) => stats.byZone[z] !== undefined),
    [stats.byZone]
  )

  const filtered = useMemo(() => {
    return components.filter((c) => {
      if (
        search &&
        !c.name.toLowerCase().includes(search.toLowerCase()) &&
        !c.zone.toLowerCase().includes(search.toLowerCase())
      ) {
        return false
      }
      if (zoneFilter !== "all" && c.zone !== zoneFilter) return false
      if (statusFilter !== "all" && c.apiStatus !== statusFilter) return false
      return true
    })
  }, [components, search, zoneFilter, statusFilter])

  const generatedDate = new Date(statusData.generatedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  )

  return (
    <div className="space-y-6">
      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <SummaryCard
          label="Total components"
          value={stats.total}
          sub={`across ${Object.keys(stats.byZone).length} zones`}
        />
        <SummaryCard
          label="Stable"
          value={stats.byStatus.stable ?? 0}
          sub={`${Math.round(((stats.byStatus.stable ?? 0) / stats.total) * 100)}% of total`}
        />
        <SummaryCard
          label="With unit tests"
          value={stats.withUnitTests}
          sub={`${Math.round((stats.withUnitTests / stats.total) * 100)}% coverage`}
        />
        <SummaryCard
          label="With MDX docs"
          value={stats.withMdxDocs}
          sub={`${Math.round((stats.withMdxDocs / stats.total) * 100)}% documented`}
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
              {z} ({stats.byZone[z]})
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-8 rounded-md border border-f1-border bg-f1-background px-2 text-sm text-f1-foreground focus:outline-none focus:ring-2 focus:ring-f1-border-selected"
        >
          <option value="all">All statuses</option>
          {(
            Object.entries(STATUS_CONFIG) as [
              ApiStatus,
              (typeof STATUS_CONFIG)[ApiStatus],
            ][]
          ).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label} ({stats.byStatus[key] ?? 0})
            </option>
          ))}
        </select>
        <span className="ml-auto text-xs text-f1-foreground-secondary">
          {filtered.length} of {stats.total} components · Generated{" "}
          {generatedDate}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-f1-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-f1-border bg-f1-background-secondary text-left text-xs font-semibold uppercase tracking-wide text-f1-foreground-secondary">
              <th className="px-4 py-3">Component</th>
              <th className="px-4 py-3">Zone</th>
              <th className="px-4 py-3">API Status</th>
              <th className="px-4 py-3 text-center">Unit Tests</th>
              <th className="px-4 py-3 text-center">MDX Docs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-f1-border">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
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
                    <StatusBadge status={component.apiStatus} />
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    {component.hasUnitTests ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    {component.hasMdxDocs ? <CheckIcon /> : <CrossIcon />}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
