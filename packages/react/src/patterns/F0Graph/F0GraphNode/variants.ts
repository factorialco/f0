import { cva } from "cva"

export const graphNodeContainerVariants = cva({
  base: "relative w-auto transition-[opacity,box-shadow,border-color,background-color] duration-200",
  variants: {
    variant: {
      detail: "flex items-center justify-center",
      compact: "flex items-center justify-center",
      dot: "flex items-center justify-center border-0 bg-transparent",
    },
    state: {
      default: "",
      selected: "",
      highlighted: "",
      dimmed: "opacity-40",
    },
  },
  defaultVariants: {
    variant: "detail",
    state: "default",
  },
})

export const graphNodeSlotVisibility = {
  avatar: {
    detail: "block",
    compact: "block",
    dot: "block",
  },
  title: {
    detail: "block",
    compact: "block",
    dot: "hidden",
  },
  subtitle: {
    detail: "block",
    compact: "hidden",
    dot: "hidden",
  },
  tags: {
    detail: "flex",
    compact: "hidden",
    dot: "hidden",
  },
} as const
