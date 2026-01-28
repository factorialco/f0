import { cn } from "@/lib/utils"

import { FIELD_GAP } from "../constants"
import { FieldRenderer } from "../fields/FieldRenderer"
import type { SwitchFieldDefinition } from "../fields/switch/types"
import type { FieldDefinition } from "../fields/types"
import type { GroupDefinition } from "../types"
import { SwitchGroupRenderer } from "./SwitchGroupRenderer"

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

type GroupedField =
  | { type: "field"; field: FieldDefinition }
  | { type: "switchGroup"; fields: SwitchFieldDefinition[] }

/**
 * Groups contiguous switch fields within a group
 */
function groupContiguousSwitchesInGroup(
  fields: FieldDefinition[]
): GroupedField[] {
  const result: GroupedField[] = []
  let currentSwitchGroup: SwitchFieldDefinition[] = []

  const flushSwitchGroup = () => {
    if (currentSwitchGroup.length > 0) {
      result.push({ type: "switchGroup", fields: [...currentSwitchGroup] })
      currentSwitchGroup = []
    }
  }

  fields.forEach((field) => {
    if (field.type === "switch") {
      currentSwitchGroup.push(field as SwitchFieldDefinition)
    } else {
      flushSwitchGroup()
      result.push({ type: "field", field })
    }
  })

  flushSwitchGroup()
  return result
}

/**
 * GroupRenderer component that renders fields in a row or column layout.
 * Used for organizing related fields horizontally or with custom spacing.
 * Automatically groups contiguous switch fields in a bordered container.
 */
export function GroupRenderer({ group }: GroupRendererProps) {
  const { direction, fields, gap = "4" } = group

  // For column direction, group contiguous switches
  // For row direction, render fields individually (switches in row layout don't need grouping)
  const groupedFields =
    direction === "column" ? groupContiguousSwitchesInGroup(fields) : null

  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClasses[gap] || FIELD_GAP,
        // For row direction, make children equal width
        direction === "row" && "[&>*]:flex-1"
      )}
    >
      {direction === "column" && groupedFields
        ? groupedFields.map((item, index) => {
            if (item.type === "switchGroup") {
              return (
                <SwitchGroupRenderer
                  key={`switch-group-${index}`}
                  fields={item.fields}
                />
              )
            }
            return <FieldRenderer key={item.field.id} field={item.field} />
          })
        : fields.map((field) => <FieldRenderer key={field.id} field={field} />)}
    </div>
  )
}
