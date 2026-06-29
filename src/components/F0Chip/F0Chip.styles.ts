import { tv } from "tailwind-variants"

export const f0ChipContainerVariants = tv({
  base: "grow-0 flex-row items-center gap-1 border border-solid py-0.5",
  variants: {
    variant: {
      default: "border-f0-border",
      selected: "border-f0-border-selected bg-f0-background-selected-secondary",
    },
    leading: {
      none: "pl-2",
      icon: "pl-1.5",
      avatar: "pl-0.5",
    },
    hasClose: {
      true: "pr-1.5",
      false: "pr-2",
    },
    shape: {
      pill: "rounded-full",
      square: "rounded-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    leading: "none",
    hasClose: false,
    shape: "pill",
  },
})

export const f0ChipTextVariants = tv({
  base: "",
  variants: {
    variant: {
      default: "text-f0-foreground",
      selected: "text-f0-foreground-selected",
    },
    deactivated: {
      true: "opacity-60",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    deactivated: false,
  },
})

export const f0ChipContentVariants = tv({
  base: "min-w-0 flex-row items-center gap-0.5",
})

export const f0ChipCloseButtonVariants = tv({
  base: "-m-1 flex h-6 w-6 items-center justify-center rounded-full [&_svg]:text-f0-icon-secondary",
})
