/**
 * Custom ReactFlow node components for the org-chart view.
 * Styled with f1-* Tailwind tokens.
 *
 * Handles are styled as tiny dots so edges connect properly.
 */
import { Handle, Position, type NodeProps } from "@xyflow/react"

import type { MappingStatus } from "../shared/types"

const handleStyle = {
  width: 6,
  height: 6,
  background: "var(--f1-border-secondary)",
  border: "none",
}

// ── Function node (top level) ────────────────────────────────────────

type FunctionData = { label: string; familyCount: number }

export function FunctionNode({ data }: NodeProps) {
  const { label, familyCount } = data as FunctionData
  return (
    <div className="rounded-lg border-2 border-f1-border-bold bg-f1-background-selected px-5 py-3 text-center shadow-sm">
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <div className="text-sm font-semibold text-f1-foreground">{label}</div>
      <div className="text-xs text-f1-foreground-secondary">
        {familyCount} {familyCount === 1 ? "family" : "families"}
      </div>
    </div>
  )
}

// ── Family node (second level) ───────────────────────────────────────

type FamilyData = { label: string; count: number }

export function FamilyNode({ data }: NodeProps) {
  const { label, count } = data as FamilyData
  return (
    <div className="rounded-md border border-f1-border-secondary bg-f1-background-secondary px-4 py-2 text-center">
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <div className="text-xs font-medium text-f1-foreground">{label}</div>
      <div className="text-[10px] text-f1-foreground-secondary">
        {count} {count === 1 ? "role" : "roles"}
      </div>
    </div>
  )
}

// ── Role node (leaf) — shows title + level pills ─────────────────────

type LevelEntry = { level: string; status: MappingStatus; id: string }
type RoleData = { title: string; levels: LevelEntry[] }

const statusColors: Record<MappingStatus, string> = {
  unmapped: "bg-f1-background-secondary text-f1-foreground-secondary",
  suggested: "bg-f1-background-info text-f1-foreground-info",
  confirmed: "bg-f1-background-positive text-f1-foreground-positive",
}

export function RoleNode({ data }: NodeProps) {
  const { title, levels } = data as RoleData
  return (
    <div className="min-w-[170px] cursor-pointer rounded-md border border-f1-border-secondary bg-f1-background-primary px-3 py-2 shadow-sm transition-shadow hover:shadow-md">
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <div className="mb-1.5 text-xs font-medium text-f1-foreground">
        {title}
      </div>
      <div className="flex flex-wrap gap-1">
        {levels.map((l) => (
          <span
            key={l.level}
            className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${statusColors[l.status]}`}
          >
            {l.level}
          </span>
        ))}
      </div>
    </div>
  )
}
