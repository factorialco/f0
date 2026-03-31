import { cva, type VariantProps } from "cva"

import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { type IconType } from "@/components/F0Icon"

export const chipVariants = cva({
  base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 font-medium",
  variants: {
    variant: {
      default: "",
      selected:
        "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export const chipVariantValues = ["default", "selected"] as const
export type ChipVariantValue = (typeof chipVariantValues)[number]

interface BaseChipProps extends VariantProps<typeof chipVariants> {
  /**
   * The label of the chip
   */
  label: string

  /**
   * If defined, the chip will be clickable
   */
  onClick?: () => void

  /**
   * If defined, the close icon will be displayed and the chip will be removable
   */
  onClose?: () => void

  /**
   * If true, the label and avatar will appear visually deactivated
   */
  deactivated?: boolean
}

type ChipMediaVariant =
  | {
      /**
       * If defined, an avatar will be displayed in the chip
       */
      avatar: AvatarVariant
      icon?: undefined
    }
  | {
      /**
       * If defined, an icon will be displayed in the chip
       */
      icon: IconType
      avatar?: undefined
    }
  | {
      avatar?: undefined
      icon?: undefined
    }

export type F0ChipProps = BaseChipProps &
  ChipMediaVariant & {
    variant?: ChipVariantValue
  }
