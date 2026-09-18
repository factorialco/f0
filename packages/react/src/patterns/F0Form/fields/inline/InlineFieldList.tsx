import { Fragment } from "react"
import type { FormDefinitionItem } from "../../types"
import type { F0Field } from "../types"
import { InlineFieldRowList } from "./InlineFieldRow"

/** Flatten grouped fields into detail rows. */
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

/** Direct children let rows hide the final divider. */
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
