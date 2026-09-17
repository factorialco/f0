import { Fragment } from "react"
import type { FormDefinitionItem } from "../../types"
import type { F0Field } from "../types"
import { InlineFieldRowList } from "./InlineFieldRow"

/**
 * Inline mode has one layout: a stacked list of rows in a bordered card. Row
 * groupings (`row`) and the switch group's own card both collapse into it —
 * a detail row is already the pairing they were arranging.
 */
export function flattenInlineFields(items: FormDefinitionItem[]): F0Field[] {
  return items.flatMap((item) => {
    if (item.type === "field") {
      return [item.field]
    }
    if (item.type === "row") {
      return item.fields
    }
    return []
  })
}

/**
 * The rows are direct children of the card, which is what lets each one drop
 * its divider when it is last. Nothing wraps them.
 */
export function InlineFieldList({
  fields,
  renderField,
}: {
  fields: F0Field[]
  renderField: (field: F0Field) => React.ReactNode
}) {
  if (fields.length === 0) {
    return null
  }

  return (
    <InlineFieldRowList>
      {fields.map((field) => (
        <Fragment key={field.id}>{renderField(field)}</Fragment>
      ))}
    </InlineFieldRowList>
  )
}
