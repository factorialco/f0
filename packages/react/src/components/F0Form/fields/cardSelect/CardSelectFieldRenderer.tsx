import type { ControllerRenderProps, FieldValues } from "react-hook-form"

import { useContext } from "react"

import {
  CardSelectableContainer,
  type CardSelectableItem,
} from "@/experimental/Forms/CardSelectable"

import type { F0CardSelectField } from "./types"

import { CardSelectDepsContext } from "./CardSelectDepsContext"

interface CardSelectFieldRendererProps {
  field: F0CardSelectField & { disabled: boolean }
  formField: ControllerRenderProps<FieldValues>
}

export function CardSelectFieldRenderer({
  field,
  formField,
}: CardSelectFieldRendererProps) {
  const depsContent = useContext(CardSelectDepsContext)

  const items: CardSelectableItem<string>[] = field.options.map((opt) => ({
    value: opt.value,
    title: opt.label,
    description: opt.description,
    selectedContent: depsContent?.get(opt.value),
  }))

  return (
    <CardSelectableContainer
      grouped
      items={items}
      value={formField.value as string | undefined}
      onChange={(val) => formField.onChange(val)}
      label={field.label}
      disabled={field.disabled}
    />
  )
}
