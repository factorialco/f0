import { cva, type VariantProps } from "cva"

import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

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

export const chipVariantOptions = ["default", "selected"] as const
export type ChipVariantOption = (typeof chipVariantOptions)[number]

interface BaseChipProps extends VariantProps<typeof chipVariants> {
  /**
   * The label of the chip
   * */
  label: string

  /**
   * If defined, the chip will be clickable
   * */
  onClick?: () => void

  /**
   * If defined, the close icon will be displayed and the chip will be clickable
   * */
  onClose?: () => void

  deactivated?: boolean
}

type ChipVariants =
  | {
      /**
       * If defined, an avatar will be displayed in the chip
       * */
      avatar: AvatarVariant
      icon?: undefined
    }
  | {
      /**
       * If defined, an icon will be displayed in the chip
       * */
      icon: IconType
      avatar?: undefined
    }
  | {
      avatar?: undefined
      icon?: undefined
    }

export type F0ChipProps = BaseChipProps &
  ChipVariants & {
    variant?: ChipVariantOption
  }

/**
 * @deprecated Use F0ChipProps instead
 */
export type ChipProps = F0ChipProps

const _F0Chip = ({
  deactivated,
  label,
  variant,
  onClick,
  onClose,
  avatar,
  icon,
}: F0ChipProps) => {
  // Only apply role="button" when clickable AND there is no close button child
  // to avoid nesting interactive elements (ARIA spec violation)
  const isClickable = !!onClick && !deactivated
  const hasButtonRole = isClickable && !onClose

  return (
    <div
      role={hasButtonRole ? "button" : undefined}
      aria-disabled={deactivated ? true : undefined}
      className={cn(
        chipVariants({ variant }),
        onClose && "pr-1.5",
        avatar && "pl-0.5",
        avatar && avatar?.type !== "person" && "rounded-sm",
        icon && !avatar && "pl-1.5",
        onClick && !deactivated && "cursor-pointer",
        hasButtonRole && focusRing()
      )}
      onClick={isClickable ? onClick : undefined}
      onKeyDown={
        hasButtonRole
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
      tabIndex={hasButtonRole ? 0 : undefined}
    >
      {avatar && <F0Avatar avatar={avatar} size="xs" />}
      <div className="flex items-center gap-0.5">
        {icon && <F0Icon icon={icon} size="sm" className="text-f1-icon" />}
        <span className={deactivated ? "text-f1-foreground/[0.61]" : undefined}>
          {label}
        </span>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className={cn(
            "-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon",
            variant === "selected" &&
              "[&_svg]:text-f1-icon-selected [&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover",
            focusRing()
          )}
          aria-label={`Remove ${label}`}
        >
          <F0Icon icon={CrossedCircle} size="sm" />
        </button>
      )}
    </div>
  )
}

export const F0Chip = _F0Chip

/**
 * @deprecated Use F0Chip instead
 */
export const Chip = _F0Chip
