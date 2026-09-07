import { useContext } from "react"
import type { ControllerRenderProps, FieldValues } from "react-hook-form"
import {
  CardSelectableContainer,
  type CardSelectableItem,
} from "@/components/CardSelectable"
import { CardSelectDepsContext } from "./CardSelectDepsContext"
import type { F0CardSelectField } from "./types"

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
      grouped={field.grouped !== false}
      items={items}
      value={formField.value as string | undefined}
      onChange={(val: string | undefined) => formField.onChange(val)}
      label={field.label}
      disabled={field.disabled}
    />
  )
}
