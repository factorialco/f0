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
 * Uses a container query so the layout responds to the space actually
 * available to the row (e.g. next to the sections sidepanel or inside a
 * panel), not the viewport: below 480px of container width the row stacks
 * vertically and each field takes the full width.
 */
export function RowRenderer({ row, sectionId }: RowRendererProps) {
  return (
    <div className="@container">
      <div
        className={`flex @[480px]:flex-row flex-col items-start ${FIELD_GAP} [&>*]:flex-1 [&>*]:w-full`}
      >
        {row.fields.map((field) => (
          <FieldRenderer key={field.id} field={field} sectionId={sectionId} />
        ))}
      </div>
    </div>
  )
}
