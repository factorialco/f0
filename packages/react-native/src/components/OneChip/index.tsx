import { Pressable, Text, View } from "react-native"
import { tv, type VariantProps } from "tailwind-variants"

import { CrossedCircle } from "../../icons/app"
import { cn } from "../../lib/utils"
import { F0Icon, type IconType } from "../primitives/F0Icon"
import { PressableFeedback } from "../primitives/PressableFeedback"

/**
 * @deprecated Use `f0ChipContainerVariants` from `../F0Chip/F0Chip.styles` instead.
 */
export const chipContainerVariants = tv({
  base: "flex items-center gap-1 rounded-full border border-solid border-f0-border px-2 py-0.5 grow-0",
  variants: {
    variant: {
      default: "",
      selected: "border-f0-border-selected bg-f0-background-selected-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

/**
 * @deprecated Use `f0ChipTextVariants` from `../F0Chip/F0Chip.styles` instead.
 */
export const chipTextVariants = tv({
  base: "font-medium",
  variants: {
    variant: {
      default: "text-f0-foreground",
      selected: "text-f0-foreground-selected",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

/**
 * @deprecated Use `F0Chip` from `src/components/F0Chip` instead.
 */
interface OneChipProps extends VariantProps<typeof chipContainerVariants> {
  label: string
  icon?: IconType
  onClick?: () => void
  onClose?: () => void
}

/**
 * @deprecated Use `F0Chip` from `src/components/F0Chip` instead.
 * Migration: replace `OneChip` with `F0Chip` and rename `onClick` to `onPress`.
 */
export const OneChip = ({
  label,
  variant,
  onClick,
  onClose,
  icon,
}: OneChipProps) => {
  return (
    <View className="flex items-start">
      <PressableFeedback
        className={cn(
          chipContainerVariants({ variant }),
          onClose && "pr-1.5",
          icon && "pl-1.5"
        )}
        onPress={onClick}
        variant="both"
        accessibilityRole="button"
        accessibilityLabel="Action"
      >
        <View className="flex flex-row items-center gap-0.5">
          {icon && (
            <F0Icon
              icon={icon}
              size="sm"
              className={chipTextVariants({ variant })}
            />
          )}
          <Text className={chipTextVariants({ variant })}>{label}</Text>
          {onClose && (
            <Pressable
              onPress={(event) => {
                event.stopPropagation()
                onClose()
              }}
              className="-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f0-icon-secondary"
              accessibilityRole="button"
              accessibilityLabel="Close"
            >
              <F0Icon
                icon={CrossedCircle}
                className={chipTextVariants({ variant })}
                size="sm"
              />
            </Pressable>
          )}
        </View>
      </PressableFeedback>
    </View>
  )
}
