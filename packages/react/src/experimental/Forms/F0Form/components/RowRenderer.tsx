import { FIELD_GAP } from "../constants"
import { FieldRenderer } from "../fields/FieldRenderer"
import type { RowDefinition } from "../types"

interface RowRendererProps {
  row: RowDefinition
}

/**
 * RowRenderer component that renders fields horizontally in a row layout.
 * Used for organizing related fields side by side with equal width.
 */
export function RowRenderer({ row }: RowRendererProps) {
  return (
    <div className={`flex flex-row ${FIELD_GAP} [&>*]:flex-1`}>
      {row.fields.map((field) => (
        <FieldRenderer key={field.id} field={field} />
      ))}
    </div>
  )
}
