import { tv } from "tailwind-variants"

/**
 * Container variants for `F0Preset`.
 *
 * Figma spec: rounded-[10px] (= `rounded`), py-[6px] (= `py-1.5`), border.
 * When a counter is present the right padding shrinks from 10px → 6px and a
 * 6px gap separates label from counter.
 */
export const f0PresetContainerVariants = tv({
  base: "flex-row items-center border rounded py-1.5 grow-0",
  variants: {
    selected: {
      true: "bg-f0-background-selected-secondary border-f0-border-selected",
      false: "border-f0-border",
    },
    hasCounter: {
      true: "gap-1.5 pl-2.5 pr-1.5",
      false: "px-2.5",
    },
  },
  defaultVariants: {
    selected: false,
    hasCounter: false,
  },
})
