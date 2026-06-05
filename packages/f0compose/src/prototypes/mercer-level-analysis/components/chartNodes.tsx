/**
 * Custom ReactFlow node components for the job-catalog org chart.
 * Styled with f1-* tokens. Handles are tiny dots so edges connect cleanly.
 */
import { Handle, Position, type NodeProps } from "@xyflow/react"

const handleStyle = {
  width: 6,
  height: 6,
  background: "var(--f1-border-secondary)",
  border: "none",
}

type FunctionData = { label: string; familyCount: number }
type FamilyData = { label: string; count: number }
type RoleData = {
  roleId: string
  title: string
  levels: string[]
  selected: boolean
}

export function FunctionNode({ data }: NodeProps) {
  const { label, familyCount } = data as FunctionData
  return (
    <div className="rounded-lg border-2 border-f1-border bg-f1-background-selected px-5 py-3 text-center shadow-sm">
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <div className="text-sm font-semibold text-f1-foreground">{label}</div>
      <div className="text-xs text-f1-foreground-secondary">
        {familyCount} {familyCount === 1 ? "family" : "families"}
      </div>
    </div>
  )
}

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

export function RoleNode({ data }: NodeProps) {
  const { title, levels, selected } = data as RoleData
  return (
    <div
      className={[
        "min-w-[180px] cursor-pointer rounded-md border px-3 py-2 shadow-sm transition-shadow hover:shadow-md",
        selected
          ? "border-f1-border-selected bg-f1-background-selected-secondary"
          : "border-f1-border-secondary bg-f1-background",
      ].join(" ")}
    >
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <div className="mb-1.5 text-xs font-medium text-f1-foreground">{title}</div>
      <div className="flex flex-wrap gap-1">
        {levels.map((l) => (
          <span
            key={l}
            className="rounded bg-f1-background-secondary px-1.5 py-0.5 text-[10px] font-medium text-f1-foreground-secondary"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  )
}
