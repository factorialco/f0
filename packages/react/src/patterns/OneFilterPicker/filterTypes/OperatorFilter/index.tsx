import { FilterTypeContext, FilterTypeDefinition } from "../types"
import {
  OperatorFilter,
  OperatorFilterOptions,
  OperatorFilterValue,
  operatorValueMode,
  resolveOperator,
  resolveOperatorFilterCopy,
} from "./OperatorFilter"

export type {
  OperatorFilterCopy,
  OperatorFilterOperator,
  OperatorFilterOptions,
  OperatorFilterValue,
  OperatorFilterValueMode,
} from "./OperatorFilter"

const isEmpty = (
  value: OperatorFilterValue | undefined,
  context: FilterTypeContext<OperatorFilterOptions>
): boolean => {
  if (!value) return true

  const operator = context.schema.options.operators.find(
    (entry) => entry.value === value.operator
  )
  if (!operator) return true

  switch (operatorValueMode(operator)) {
    case "none":
      return false
    case "range":
      return value.values.length !== 2
    default:
      return value.values.length === 0
  }
}

export const operatorFilter: FilterTypeDefinition<
  OperatorFilterValue | undefined,
  OperatorFilterOptions
> = {
  emptyValue: undefined,
  render: (props) => <OperatorFilter {...props} />,
  isEmpty,
  chipLabel: (value, context) => {
    if (!value) return ""

    const operator = resolveOperator(context.schema.options, value.operator)
    if (!operator || operator.value !== value.operator) return ""

    const copy = resolveOperatorFilterCopy(context.schema.options)
    const values = value.values
      .map((entry) =>
        typeof entry === "boolean"
          ? entry
            ? copy.trueLabel
            : copy.falseLabel
          : String(entry)
      )
      .join(", ")
    return values ? `${operator.label} ${values}` : operator.label
  },
}

export default operatorFilter

export type OperatorFilterDefinition = {
  label: string
  type: "operator"
  hideSelector?: boolean
  options: OperatorFilterOptions
}
