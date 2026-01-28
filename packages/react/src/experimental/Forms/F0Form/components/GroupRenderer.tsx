import { cn } from "@/lib/utils"

import { FieldRenderer } from "../fields/FieldRenderer"
import type { GroupDefinition } from "../types"

interface GroupRendererProps {
  group: GroupDefinition["group"]
}

/**
 * Maps gap prop values to Tailwind classes
 */
const gapClasses = {
  "2": "gap-2",
  "4": "gap-4",
  "6": "gap-6",
  "8": "gap-8",
} as const

/**
 * GroupRenderer component that renders fields in a row or column layout.
 * Used for organizing related fields horizontally or with custom spacing.
 */
export function GroupRenderer({ group }: GroupRendererProps) {
  const { direction, fields, gap = "4" } = group

  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClasses[gap],
        // For row direction, make children equal width
        direction === "row" && "[&>*]:flex-1"
      )}
    >
      {fields.map((field) => (
        <FieldRenderer key={field.id} field={field} />
      ))}
    </div>
  )
}
