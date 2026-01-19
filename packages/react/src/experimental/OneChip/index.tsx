import { F0Avatar, type AvatarVariant } from "@/components/avatars/F0Avatar"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { experimentalComponent } from "@/lib/experimental"
import { CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { cva, type VariantProps } from "cva"

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

export type ChipProps = BaseChipProps &
  ChipVariants & {
    variant?: "default" | "selected"
  }

const _Chip = ({
  deactivated,
  label,
  variant,
  onClick,
  onClose,
  avatar,
  icon,
}: ChipProps) => {
  return (
    <div
      className={cn(
        chipVariants({ variant }),
        onClose && "pr-1.5",
        avatar && "pl-0.5",
        avatar && avatar?.type !== "person" && "rounded-sm",
        icon && !avatar && "pl-1.5",
        onClick && "cursor-pointer",
        onClick && focusRing()
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.()
        }
      }}
      tabIndex={onClick ? 0 : undefined}
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
          tabIndex={0}
          aria-label="Close"
        >
          <F0Icon icon={CrossedCircle} size="sm" />
        </button>
      )}
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Chip = experimentalComponent("Chip", _Chip)
