import { FIELD_GAP } from "../constants"
import { FieldRenderer } from "../fields/FieldRenderer"
import type { RowDefinition } from "../types"

interface RowRendererProps {
  row: RowDefinition
  /** Section ID when row is inside a section (for anchor links) */
  sectionId?: string
}

/**
 * RowRenderer component that renders fields horizontally in a row layout.
 * Used for organizing related fields side by side with equal width.
 */
export function RowRenderer({ row, sectionId }: RowRendererProps) {
  return (
    <div className={`flex flex-row ${FIELD_GAP} [&>*]:flex-1`}>
      {row.fields.map((field) => (
        <FieldRenderer key={field.id} field={field} sectionId={sectionId} />
      ))}
    </div>
  )
}
