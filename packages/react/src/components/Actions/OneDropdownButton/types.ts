import { DropdownItemObject } from "@/experimental/Navigation/Dropdown/internal"
import { sizes } from "@/ui/button.tsx"

export const oneDropdownButtonVariants = [
  "default",
  "outline",
  "neutral",
] as const
export type OneDropdownButtonVariant =
  (typeof oneDropdownButtonVariants)[number]
export const oneDropdownButtonSizes = sizes
export type OneDropdownButtonSize = (typeof oneDropdownButtonSizes)[number]

export type OneDropdownButtonItem<T = string> = Pick<
  DropdownItemObject,
  "label" | "icon" | "critical" | "description"
> & {
  value: T
}

export type OneDropdownButtonGroup<T = string> = {
  label?: string
  items: OneDropdownButtonItem<T>[]
}

export type OneDropdownButtonProps<T = string> = {
  size?: OneDropdownButtonSize
  items:
    | OneDropdownButtonItem<T>[]
    | OneDropdownButtonGroup<T>[]
    | OneDropdownButtonGroup<T>
  variant?: OneDropdownButtonVariant
  value?: T
  disabled?: boolean
  loading?: boolean
  onClick: (value: T, item: OneDropdownButtonItem<T>) => void
}
