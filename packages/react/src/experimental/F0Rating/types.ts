import { WithDataTestIdProps } from "@/lib/data-testid"

export const ratingSizes = ["sm", "md", "lg"] as const
export type RatingSize = (typeof ratingSizes)[number]

export interface F0RatingProps extends WithDataTestIdProps {
  value?: number | null
  defaultValue?: number | null
  max?: number
  onChange?: (value: number | null) => void
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  size?: RatingSize
  ariaLabel?: string
  ariaLabelledBy?: string
}
